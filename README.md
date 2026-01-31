# 이게 뭐임?
유튜브, 인스타그램, 빌리빌리 영상을  
MP4 / MP3 형식으로 다운로드할 수 있는 **개인용 확장 프로그램 + 로컬 서버 프로젝트**입니다.

> ⚠️ 본 프로젝트는 개인 학습 및 개인 사용 목적이며,  
> 각 플랫폼의 서비스 약관(ToS)과 저작권을 반드시 준수해야 합니다.

# 무슨 기능이 있는데?
- MP4 영상 다운로드
- MP3 오디오 다운로드
- **유튜브 전용**
  - 자막 존재 여부 확인
  - 자막을 SRT 형식으로 다운로드 (수동/자동 자막 지원)
- 다운로드 진행 상태 표시
- 웹페이지 좌측 하단에 UI 표시
- 
# 그러면 어떻게 설치해야함?
> 이 설치 방법은 Windows 11 기준이며, 다른 OS는 저도 모릅니다.

필수 프로그램들:
- [Node.js](https://nodejs.org/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [FFmpeg](https://ffmpeg.org/)
## Node.js 설치 하는 법
1. [Node.js](https://nodejs.org/)에 들어가서 최신 버전을 다운로드하세요.
## yt-dlp 설치 하는법
1. [yt-dlp](https://github.com/yt-dlp/yt-dlp)에 들어간 다음 Releases에서 yt-dlp.exe을 다운로드하세요.
2. 시스템 환경 변수 편집에 들어가서 아래 환경 변수 버튼을 클릭하세요.
3. 시스템 변수쪽에서 Path 창을 두번 클릭하고 들어간 다음, 새로 만들기를 클릭해서 yt-dlp.exe 파일의 경로를 입력하세요.
## FFmpeg 설치 하는 법
1. Windows Powershell 혹은 Windows Terminal에서 ``winget install Gyan.FFmpeg``을 입력한다.

# 설치 다 했는데 이제 어떻게 실행함?
server 폴더 경로에서 Windows Powershell 혹은 Windows Terminal를 실행하고 아래와 같이 입력한다. (기본 포트: 3000)
```bash
npm install
node server.js
```

# 이제 어떻게 적용함?
## Edge에서
1. edge://extensions에 들어가서 왼쪽에 있는 개발자 모드를 활성화한다.
2. 다운로드 한 ZIP 파일을 압축 해제한다.
3. 팩 확장을 클릭 한 다음, 압축을 푼 폴더을 클릭해서 넣는다.
## Chrome에서
1. chrome://extensions에 들어가서 오른쪽 위에 있는 개발자 모드를 활성화한다.
2. 다운로드 한 ZIP 파일을 압축 해제한다.
3. 왼쪽 위에 있는 압축해제된 확장 프로그램 로드를 클릭하고 압축을 푼 폴더를 클릭해서 넣는다.
