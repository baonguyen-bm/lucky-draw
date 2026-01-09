<div align="center">
    <a href="https://log1997.github.io/log-lottery/">
        <img src="./static/images/lottery.png" width="100" height="100" />
    </a>

# log-lottery 🚀🚀🚀🚀

[![github stars](https://img.shields.io/github/stars/log1997/log-lottery)](https://github.com/LOG1997/log-lottery)
[![version](https://img.shields.io/github/package-json/v/log1997/log-lottery)](https://github.com/LOG1997/log-lottery)
[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/LOG1997/log-lottery)
[![github author](https://img.shields.io/badge/Author-log1997-blue.svg)](https://github.com/log1997)
[![build](https://img.shields.io/github/actions/workflow/status/log1997/log-lottery/release.yml)](https://github.com/log1997)
[![docker](https://img.shields.io/docker/pulls/log1997/log-lottery)](<https://hub.docker.com/r/log1997/log-lottery>)
[![github downloads](https://img.shields.io/github/downloads/log1997/log-lottery/total)](https://github.com/LOG1997/log-lottery/releases)
[![release data](https://img.shields.io/github/release-date/log1997/log-lottery)](https://github.com/LOG1997/log-lottery/releases)
</div>

log-lottery is a configurable and customizable lucky draw application with a cool 3D sphere. It is suitable for annual meeting lucky draws and other events, supporting configuration for prizes, personnel, interface, images, and music.

> If you encounter issues with images not displaying or errors when entering the site, please go to the [Global Configuration] - [Interface Configuration] menu and click the [Reset All Data] button to clear data before updating.

## Requirements

Use the latest version of Chrome or Edge browser on PC.

Access URL:

<https://lottery.to2026.xyz/log-lottery>

or

<https://log1997.github.io/log-lottery/>

Developed in a hurry, please be understanding if there are bugs.
If you want to access the version before December 31, 2025, please visit: <https://to2026.xyz/log-lottery>

## TODO

- [x] 🕍 Cool 3D sphere, essential for annual meeting lucky draws, ready to use out of the box
- [x] 💾 Local persistent storage
- [x] 🎁 Prize and award configuration
- [x] 👱 Lucky draw list management
- [x] 🎼 Background music playback
- [x] 🖼️ Import personnel lists via Excel, export results via Excel
- [x] 🎈 Temporary lucky draw support
- [x] 🧨 Internationalization support
- [x] 🍃 Changeable background images
- [x] 🚅 Docker build support
- [x] 😘 Barrage (In development)
- [ ] 🧵 Cards forming multiple shapes

...
If you need more features or find bugs, please leave a message in [issues](https://github.com/LOG1997/log-lottery/issues)

## Detailed Introduction

### Personnel Configuration

Download the Excel template from the personnel configuration management interface, fill in the data as required, and import it.

### Prize Configuration

After adding prizes in the prize configuration management interface, you can customize the name, number of winners, whether all personnel participate, and image display.

### Interface Configuration

You can customize the title, number of columns, card color, homepage pattern, etc.

### Image and Music Management

Upload images or music; data is stored locally in the browser using IndexDB.

## Preview

Home
<div align="center">
    <img src="./static/images/home.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
    <img src="./static//images/home_prizelist.png" alt="img2-2" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
</div>

Lottery
<div align="center">
    <img src="./static/images/lottery-enter.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
    <img src="./static/images/lottery-done.png" alt="img2-2" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
</div>

Configuration
<div align="center">
    <img src="./static/images/config_personall.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
    <img src="./static/images/config_prize.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
    <img src="./static/images/config-view.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
    <img src="./static/images/config_pattern.png" alt="img2-1" width="400" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin: 8px;">
</div>

Image and Music Configuration

## Technology

- vue3
- threejs
- indexdb
- pinia
- daisyui

## Development

Install dependencies
```bash
npm install pnpm -g
```

```bash
pnpm i
```

Development run

```bash
pnpm dev
```

Build

```bash
pnpm build
```

> Project concept inspired by <https://github.com/moshang-xc/lottery>

## Docker Support

Choose one of the following methods:

1. Pull the image from Docker Hub: [log-lottery](https://hub.docker.com/r/log1997/log-lottery)

    ```bash
    docker pull log1997/log-lottery:latest
    ```

    Run the container:

    ```bash
    docker run -d --name log-lottery -p 9279:80 log1997/log-lottery:latest
    ```

2. Manually build the image:

    ```bash
    docker build -t log-lottery .
    ```

    Run the container:

    ```bash
    docker run -d -p 9279:80 log-lottery
    ```

    Once the container is running, access it locally via <http://localhost:9279/log-lottery/>

## Software Package

Available for download at [Releases](https://github.com/LOG1997/log-lottery/releases).

Currently, only Windows is supported. Cross-platform packages are not yet available. If needed, please compile manually referring to the [Contribution Document](https://github.com/LOG1997/log-lottery/blob/main/.github/CONTRIBUTING.md)

## Support the Project

<h3>💝 Sponsorship</h3>

<p><em>If you find log-lottery helpful, feel free to sponsor its development. Your support is our motivation!</em></p>

<div>
 <img src="./static/images/ZanShang.png" height="240" alt="WeChat Code">
</div>

<br>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LOG1997/log-lottery&type=Date)](https://star-history.com/#LOG1997/log-lottery&Date)

## License

[MIT](http://opensource.org/licenses/MIT)
