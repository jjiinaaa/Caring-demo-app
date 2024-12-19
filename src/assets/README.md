# `assets` 폴더 관리

`assets` 폴더는 애플리케이션에서 사용되는 **정적 자원(assets)**을 관리하는 디렉토리입니다. 이 폴더에는 이미지, 폰트, 비디오, 오디오 파일, JSON 파일 등과 같은 **애플리케이션에서 직접적으로 참조되는 파일들**을 저장합니다. `assets` 폴더는 앱의 UI, 아이콘, 애니메이션 등에 필요한 다양한 자원을 한 곳에서 관리하는 중요한 역할을 합니다.

- 우리는 각 페이지 or 기능 별로 관리할 것.

## `assets` 폴더에서 관리하는 파일 종류

### 1. 이미지 파일

앱에서 사용하는 모든 이미지 파일을 저장합니다. 예: 배경 이미지, 아이콘, 로고 등  
**파일 형식**: PNG, JPG, GIF, SVG, WebP 등

```plaintext
my-app/
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── background.jpg
│   │   └── profile-icon.svg
│   └── ...
```

### 2. 폰트 파일

커스텀 폰트 파일을 앱에 포함시킬 경우, 해당 폰트를 assets 폴더에 저장하여 사용합니다.
**파일 형식**: TTF, OTF

```plaintext
my-app/
├── assets/
│   ├── fonts/
│   │   ├── custom-font.ttf
│   │   └── another-font.otf
│   └── ...
```

### 3. 오디오 파일

앱에서 사용하는 오디오 파일을 저장합니다. 예: 알림 소리, 버튼 클릭 소리 등
**파일 형식**: MP3, WAV, AAC 등

```plaintext
my-app/
├── assets/
│   ├── audio/
│   │   ├── click-sound.mp3
│   │   └── notification-sound.wav
│   └── ...
```

### 4. 비디오 파일

앱에서 사용하는 비디오 파일을 저장합니다. 예: 튜토리얼 영상, 배경 영상 등
**파일 형식**: MP4, MOV, AVI 등

```plaintext
my-app/
├── assets/
│   ├── videos/
│   │   ├── intro-video.mp4
│   │   └── tutorial.mov
│   └── ...
```

### 5. JSON 파일

앱에서 사용하는 데이터 파일을 저장합니다. 예: 설정 파일, 초기 데이터 등

```plaintext
my-app/
├── assets/
│   ├── data/
│   │   ├── config.json
│   │   └── user-data.json
│   └── ...
```

### 6. 비디오 파일

앱에서 사용하는 비디오 파일을 저장합니다. 예: 튜토리얼 영상, 배경 영상 등
**파일 형식**: MP4, MOV, AVI 등

```plaintext
my-app/
├── assets/
│   ├── videos/
│   │   ├── intro-video.mp4
│   │   └── tutorial.mov
│   └── ...
```
