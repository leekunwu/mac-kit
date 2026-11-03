# Mac Kit

앱 선택 → 명령 복사 → 터미널 실행.

## 파일
- `index.html`: 화면·스타일·앱 목록·동작·프리셋 목록 모두 포함
- `README.md`: 사용 방법
- `presets/`: 나중에 실제 프리셋 파일을 추가할 때 생성

별도 CSS·JS·JSON, 빌드 도구, API 키가 필요하지 않습니다.
제품 로고와 Hugeicons 이미지는 외부 주소에서 불러옵니다. 모두 실패하면 HTML에 내장된 기본 아이콘을 표시합니다.

## GitHub Pages 배포
1. `mac-kit` 저장소를 만듭니다.
2. `index.html`, `README.md`를 저장소 루트에 올립니다.
3. Settings → Pages → Build and deployment에서 `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, 폴더는 `/(root)`로 설정하고 Save를 누릅니다.
5. 배포가 끝나면 Pages에 표시되는 주소를 엽니다.

무료 Pages를 사용할 때는 공개 저장소로 시작하세요. 사이트와 프리셋은 공개 자료로 취급하세요.

## 로컬 사용
`index.html`을 브라우저로 엽니다. 별도 서버 없이 앱 선택·명령 복사와 로컬 프리셋 링크를 사용할 수 있습니다.
브라우저가 복사를 차단하면 표시되는 명령을 직접 복사하세요.
외부 로고·아이콘·다운로드 사이트는 인터넷 연결이 필요합니다.

## 앱 설치
Homebrew가 없다면 화면 하단의 공식 안내를 따라 먼저 설치합니다.
선택한 앱들은 한 개의 `brew install --cask ...` 명령으로 묶입니다.
앱 개수만큼 터미널 창을 열지 않습니다. 사이트가 터미널을 자동 실행하지도 않습니다.
Catchtype은 개발자 tap `hebbianai/tap/catchtype`으로 설치합니다.
SteerMouse·AlDente 라이선스는 앱에서 직접 등록합니다.
앱 설치용 명령이며 정기 자동 업데이트를 예약하지 않습니다.

## 프리셋 추가
1. `presets/steermouse/` 같은 폴더를 만들고 실제 파일을 넣습니다.
2. `index.html`에서 `const PRESETS`를 찾습니다.
3. 해당 앱의 빈 배열을 다음처럼 수정합니다.

```js
"steermouse": [
  { "name": "Expert · 기본", "file": "presets/steermouse/expert-default.settings" },
  { "name": "Expert · 음악", "file": "presets/steermouse/expert-music.settings" }
],
```

파일명·확장자는 예시입니다. 실제 내보낸 파일 경로를 사용하세요.
각 앱과 Filee, Chrome 확장프로그램에 여러 파일을 등록할 수 있습니다.
폴더에 업로드하는 것만으로 자동 등록되지는 않습니다. PRESETS 목록에도 추가하세요.
같은 사이트의 `presets/` 하위 파일만 허용합니다.
다운로드한 프리셋은 각 앱에서 직접 가져옵니다.

## 보안·권리
API 키·라이선스·토큰·비밀번호·개인 문서는 올리지 마세요.
앱이 내보낸 프리셋에 민감정보가 포함될 수 있으니 업로드 전에 확인하세요.
로고와 아이콘의 권리는 각 권리자에게 있습니다. 로고는 사용자 제공 주소와 기존 공식 파비콘을 사용하고, 대체 아이콘은 Iconify의 Hugeicons 이미지를 사용합니다.
외부 서버 정책이나 URL 변경으로 로고가 표시되지 않을 수 있습니다.

## 확인 범위
16개 앱, 21개 프리셋 등록 영역, JavaScript 구문과 HTML 파일 구성을 점검했습니다.
실제 브라우저 렌더링·외부 이미지 응답·macOS 설치·GitHub Pages 배포는 실행 검증하지 않았습니다.
HyperUI 코드를 직접 포함한 구현은 아니며 자체 CSS로 구성했습니다.
