# Mac Kit

단일 HTML 앱 설치 페이지. 프리셋은 공개 GitHub 저장소의 폴더에서 자동 조회합니다.

## 배포
1. ZIP 내용물을 저장소 루트에 올립니다. index.html과 presets 폴더가 같은 위치여야 합니다.
2. Settings → Pages → Deploy from a branch → main → /(root).
3. 배포된 페이지에서 확인합니다.

표준 `https://사용자명.github.io/mac-kit/` 주소에서는 저장소를 자동 인식합니다.
커스텀 도메인·로컬 실행·다른 브랜치라면 index.html에서 다음 설정만 수정하세요.

```js
const GITHUB = { owner: '깃허브사용자명', repo: 'mac-kit', branch: 'main' };
```

API 키나 토큰은 넣지 않습니다. 공개 저장소만 지원합니다.

## 프리셋 추가 — HTML 수정 불필요
`presets/앱-id/` 폴더에 실제 파일을 업로드하고 커밋하세요.
페이지에서 '새로고침'을 누르거나 페이지를 다시 열면 표시됩니다.
하위 폴더도 포함하며 파일명이 그대로 표시 이름이 됩니다.

예:
```
presets/steermouse/Expert-기본.settings
presets/steermouse/Expert-음악.settings
presets/aldente/기본설정.실제확장자
```

위 확장자는 예시입니다. 앱이 내보낸 실제 파일을 그대로 사용하세요.
빈 폴더에 넣어둔 `.gitkeep`은 GitHub에서 폴더를 유지하는 용도이며 화면에는 나타나지 않습니다.
폴더별 파일 개수 제한은 앱에서 두지 않습니다. 숨김 파일·숨김 폴더는 표시하지 않습니다.
GitHub API가 전체 목록을 잘라 반환하면 오류를 표시합니다.

다운로드 링크는 GitHub Raw로 열립니다. 브라우저에 따라 즉시 다운로드 대신 파일이 열릴 수 있습니다.
그 경우 저장 기능을 사용하세요. 실제 앱 설정 가져오기는 앱에서 직접 진행합니다.

## 폴더 목록
- `presets/google-chrome/`
- `presets/notion/`
- `presets/google-drive/`
- `presets/libreoffice/`
- `presets/iina/`
- `presets/splice/`
- `presets/mediainfo/`
- `presets/localsend/`
- `presets/keka/`
- `presets/qlmarkdown/`
- `presets/figma/`
- `presets/steermouse/`
- `presets/vorssaint/`
- `presets/aldente/`
- `presets/itsycal/`
- `presets/catchtype/`
- `presets/filee/`
- `presets/allow-copy-plus/`
- `presets/rhwp/`
- `presets/chrome-remote-desktop/`
- `presets/google-sheets-crosshair/`

## 주의
- 공개 저장소의 파일은 공개됩니다. API 키·토큰·라이선스·비밀번호·계정 정보는 절대 업로드하지 마세요.
- 설정 파일 내용을 확인한 뒤 업로드하세요. 자동 비밀정보 검사는 제공하지 않습니다.
- GitHub의 비인증 API는 일반적으로 IP별 조회 제한이 있습니다. 이 페이지는 전체 폴더를 한 번의 tree API 요청으로 조회합니다. API 제한·장애 시 목록은 표시되지 않을 수 있습니다.
- 로컬 폴더를 직접 자동 스캔하는 기능은 아닙니다. GitHub에 커밋된 파일을 조회합니다.
- 프로그램 설치 명령은 Homebrew가 설치된 맥에서 실행합니다. 터미널은 자동으로 열리지 않습니다.
- 프리셋 조회 변경 외 기존 v4 기반 레이아웃과 사용자 제공 로고 경로를 사용합니다. 로고 실패 시 기본 문서 SVG를 표시합니다.
- 이미지 표시·실제 앱 설치·실제 저장소 연결은 실행 검증하지 않았습니다. JS 구문, 폴더 매핑, ZIP 구성을 점검했습니다.
