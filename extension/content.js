(() => {

    // 중복 생성 방지
    if (document.getElementById("pd-box")) return;

    // 사이트 판별
    function getSite() {
        const h = location.hostname;
        if (h.includes("youtube.com") || h.includes("youtu.be")) return "youtube";
        if (h.includes("bilibili.com")) return "bilibili";
        if (h.includes("instagram.com")) return "instagram";
        return "other";
    }

    const site = getSite();

    // UI 생성
    const box = document.createElement("div");
    box.id = "pd-box";
    box.innerHTML = `
    <div class="pd-title">Downloader</div>

    <button id="mp4-btn">MP4 다운로드</button>
    <button id="mp3-btn">MP3 다운로드</button>

    <label class="subs">
      <input type="checkbox" id="subs-check">
      자막 있으면 같이 다운로드 (유튜브 전용)
    </label>

    <div id="status"></div>
  `;

    document.body.appendChild(box);

    const mp4Btn = document.getElementById("mp4-btn");
    const mp3Btn = document.getElementById("mp3-btn");
    const subsCheck = document.getElementById("subs-check");
    const status = document.getElementById("status");

    // 유튜브 아니면 자막 비활성화
    if (site !== "youtube") {
        subsCheck.checked = false;
        subsCheck.disabled = true;
        subsCheck.parentElement.style.opacity = "0.5";
    }

    // 다운로드 요청
    function send(type) {
        status.textContent = "다운로드 중...";

        fetch("http://localhost:3000/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: location.href,
                type,
                subs: subsCheck.checked && site === "youtube"
            })
        })
            .then(res => res.json())
            .then(data => {
                status.textContent = data.success
                    ? "다운로드 완료!"
                    : "다운로드 실패";
            })
            .catch(() => {
                status.textContent = "서버 오류";
            });
    }

    mp4Btn.onclick = () => send("mp4");
    mp3Btn.onclick = () => send("mp3");

    const CURRENT_VERSION = chrome.runtime.getManifest().version;

    fetch("https://raw.githubusercontent.com/degurr/video-downloader/main/version.json")
        .then(res => res.json())
        .then(data => {
            if (data.version !== CURRENT_VERSION) {
                alert(`새 버전이 있습니다!\n현재: ${CURRENT_VERSION}\n최신: ${data.version}\n\n${data.message}`);
            }
        })
        .catch(() => { });

})();

