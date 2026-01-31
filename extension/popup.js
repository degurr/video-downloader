const status = document.getElementById("status");

function send(type) {
  status.textContent = "요청 중...";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    fetch("http://localhost:5000/downloads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: tabs[0].url,
        type: type
      })
    })
      .then(res => res.json())
      .then(() => {
        status.textContent = "서버에서 처리 중입니다…";
      })
      .catch(() => {
        status.textContent = "서버 연결 실패";
      });
  });
}

document.getElementById("mp4").onclick = () => send("mp4");
document.getElementById("mp3").onclick = () => send("mp3");
