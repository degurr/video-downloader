# Personal Downloader

유튜브, 인스타그램, 빌리빌리 영상을  
MP4 / MP3 형식으로 다운로드할 수 있는 **개인용 확장 프로그램 + 로컬 서버 프로젝트**입니다.

> ⚠️ 본 프로젝트는 개인 학습 및 개인 사용 목적입니다.  
> 각 플랫폼의 서비스 약관(ToS)과 저작권을 반드시 준수해야 합니다.

---

## 주요 기능

- MP4 영상 다운로드
- MP3 오디오 다운로드
- **유튜브 전용 기능**
  - 자막 존재 여부 확인
  - 자막을 SRT 형식으로 다운로드 (수동 / 자동 자막)
- 다운로드 진행 상태 표시
- 웹페이지 좌측 하단 UI 표시

---

## 설치 방법

> Windows 11 기준으로 작성되었습니다.  
> 다른 OS에서는 동작을 보장하지 않습니다.

### 필수 프로그램

- Node.js
- yt-dlp
- FFmpeg

---

### Node.js 설치

1. Node.js 공식 사이트에서 최신 버전을 다운로드합니다.
2. 설치 후 터미널에서 `node -v`가 정상 출력되는지 확인합니다.

---

### yt-dlp 설치

1. yt-dlp GitHub Releases에서 `yt-dlp.exe`를 다운로드합니다.
2. `yt-dlp.exe`가 들어 있는 폴더를 시스템 환경 변수(Path)에 추가합니다.

---

### FFmpeg 설치

Windows Terminal 또는 PowerShell에서 아래 명령어를 실행합니다.

```
winget install Gyan.FFmpeg
```

---

## 서버 실행

```
cd server
npm install
node server.js
```

기본 포트: 3000

---

## 확장 프로그램 적용

### Edge

1. edge://extensions 접속
2. 개발자 모드 활성화
3. 압축 해제된 확장 로드 클릭
4. extension 폴더 선택

---

### Chrome

1. chrome://extensions 접속
2. 개발자 모드 활성화
3. 압축해제된 확장 프로그램 로드 클릭
4. extension 폴더 선택

---

## 서버 자동 실행 (선택)

1. `.bat` 파일 생성
2. 아래 내용 입력

```
cd C:\Users\(사용자이름)\(경로)\personal-downloader\server
node server.js
```

3. Win + R → shell:startup
4. 해당 폴더에 `.bat` 파일을 넣으면 부팅 시 자동 실행됩니다.

---

## 주의 사항

- 본 프로젝트는 개인 사용 목적입니다.
- 다운로드한 콘텐츠의 저작권 책임은 사용자 본인에게 있습니다.
- 상업적 사용을 금지합니다.
