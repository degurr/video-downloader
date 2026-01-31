const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

function isYouTube(url) {
    return url.includes("youtube.com") || url.includes("youtu.be");
}

app.post("/download", (req, res) => {
    let { url, type, subs } = req.body;

    // 유튜브 아니면 자막 강제 비활성화
    if (!isYouTube(url)) subs = false;

    const args = [url, "-o", "downloads/%(title)s.%(ext)s"];

    if (type === "mp4") {
        args.unshift("-f", "bv*+ba/b");

        args.push(
            "--merge-output-format", "mp4",
            "--postprocessor-args",
            "ffmpeg:-c:v copy -c:a aac -b:a 192k"
        );
    }


    if (type === "mp3") {
        args.push("-x", "--audio-format", "mp3", "--audio-quality", "0");
    }

    if (subs) {
        args.push(
            "--write-subs",
            "--sub-lang", "ko,en",
            "--sub-format", "srt",
            "--convert-subs", "srt"
        );
    }


    const ytdlp = spawn("yt-dlp", args);

    ytdlp.on("close", () => {
        res.json({ success: true });
    });

    ytdlp.on("error", () => {
        res.json({ success: false });
    });
});

app.listen(3000, () => {
    console.log("Downloader server running on http://localhost:3000");
});
