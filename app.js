"use strict";

window.MAC_KIT = {
  // 표준 GitHub Pages 주소에서는 자동 인식합니다.
  // 커스텀 도메인 또는 로컬 확인 시 owner/repo를 입력하세요.
  // 토큰은 넣지 마세요.
  github: {
    owner: "",
    repo: "",
    branch: "main"
  },

  // type:
  // - brew: Homebrew 설치 대상
  // - link: 다운로드·스토어 링크
  //
  // preset: presets/ 아래의 폴더 이름
  groups: [
    {
      category: "업무",
      type: "brew",
      items: [
        {
          name: "Chrome",
          cask: "google-chrome",
          preset: "google-chrome",
          icon: "https://www.google.com/chrome/static/images/chrome-logo.svg"
        },
        {
          name: "Notion",
          cask: "notion",
          preset: "notion",
          icon: "https://www.notion.com/front-static/favicon.ico"
        },
        {
          name: "Google Drive",
          cask: "google-drive",
          preset: "google-drive",
          icon: "https://drive.google.com/favicon.ico"
        },
        {
          name: "LibreOffice",
          cask: "libreoffice",
          preset: "libreoffice",
          icon: "https://www.libreoffice.org/favicon.ico"
        }
      ]
    },
    {
      category: "미디어",
      type: "brew",
      items: [
        {
          name: "IINA",
          cask: "iina",
          preset: "iina",
          icon: "https://iina.io/img/icon.png"
        },
        {
          name: "Splice",
          cask: "splice",
          preset: "splice",
          icon: "https://en.wikipedia.org/wiki/Special:FilePath/Splice_logo_clean.svg"
        },
        {
          name: "MediaInfo",
          cask: "mediainfo",
          preset: "mediainfo",
          icon: "https://mediaarea.net/favicon.ico"
        },
        {
          name: "ocenaudio",
          cask: "ocenaudio",
          preset: "ocenaudio",
          icon: "https://newgrounds.wiki.gg/images/Ocenaudio164.png?cec792"
        }
      ]
    },
    {
      category: "파일",
      type: "brew",
      items: [
        {
          name: "LocalSend",
          cask: "localsend",
          preset: "localsend",
          icon: "https://localsend.org/favicon.ico"
        },
        {
          name: "Keka",
          cask: "keka",
          preset: "keka",
          icon: "https://www.keka.io/favicon.ico"
        },
        {
          name: "QLMarkdown",
          cask: "qlmarkdown",
          preset: "qlmarkdown",
          icon: "https://applech2.com/wp-content/uploads/2026/04/QLMarkdown-Quick-Look-Extension-Markdown-logo-icon.webp"
        }
      ]
    },
    {
      category: "디자인",
      type: "brew",
      items: [
        {
          name: "Figma",
          cask: "figma",
          preset: "figma",
          icon: "https://www.figma.com/favicon.ico"
        }
      ]
    },
    {
      category: "Mac 설정",
      type: "brew",
      items: [
        {
          name: "SteerMouse",
          cask: "steermouse",
          preset: "steermouse",
          icon: "https://plentycom.jp/images/product/steermouse/sm_icon.png",
          note: "라이선스 필요"
        },
        {
          name: "Vorssaint",
          cask: "vorssaint",
          preset: "vorssaint",
          icon: "https://images.macmenubar.app/vorssaint/icon-1785123811325.png"
        },
        {
          name: "AlDente",
          cask: "aldente",
          preset: "aldente",
          icon: "https://static.macupdate.com/products/63002/m/phprfga5n-logo.png?v=1725363820",
          note: "라이선스 필요"
        },
        {
          name: "Itsycal",
          cask: "itsycal",
          preset: "itsycal",
          icon: "https://www.mowglii.com/favicon.ico"
        },
        {
          name: "Catchtype",
          cask: "hebbianai/tap/catchtype",
          preset: "catchtype",
          icon: "https://catchtype.com/favicon.ico",
          note: "개발자 tap"
        }
      ]
    },
    {
      category: "다운로드",
      type: "link",
      layout: "single",
      items: [
        {
          name: "Filee",
          url: "https://github.com/KnifeLemon/Filee/releases/tag/v2.4.0",
          preset: "filee",
          icon: "https://filee.sh/favicon.ico",
          linkLabel: "GitHub 릴리스 ↗"
        }
      ]
    },
    {
      category: "Chrome 확장",
      type: "link",
      layout: "grid",
      items: [
        {
          name: "Allow Copy +",
          url: "https://chromewebstore.google.com/detail/ajhbdcgfhlhhmocddefknjjkejcfpbnj",
          preset: "allow-copy-plus",
          linkLabel: "스토어 ↗"
        },
        {
          name: "rhwp",
          url: "https://chromewebstore.google.com/detail/pgakpjflombjmehnebnbpnalhegaanag",
          preset: "rhwp",
          linkLabel: "스토어 ↗"
        },
        {
          name: "Chrome Remote Desktop",
          url: "https://chromewebstore.google.com/detail/inomeogfingihgjfjlpeplalcfajhgai",
          preset: "chrome-remote-desktop",
          linkLabel: "스토어 ↗"
        },
        {
          name: "Google Sheets Crosshair",
          url: "https://chromewebstore.google.com/detail/jjggpgbabjaeajpefndhckbdgacepoid",
          preset: "google-sheets-crosshair",
          linkLabel: "스토어 ↗"
        }
      ]
    }
  ]
};
