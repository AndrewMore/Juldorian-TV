# Juldorian TV

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![React](https://img.shields.io/badge/react-js-blue)
![Repo Size](https://img.shields.io/github/repo-size/AndrewMore/Juldorian-TV)
[![GitHub Issues](https://img.shields.io/github/issues/AndrewMore/Juldorian-TV)](https://github.com/AndrewMore/Juldorian-TV/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![GPL License](https://img.shields.io/badge/license-GPL--3.0-orange)](https://www.gnu.org/licenses/gpl-3.0.html)


A custom Youtube viewer I made for my kids using React and the Youtube API. Future feature releases will be oriented towards resolving conflict issues amongst the kids related to turn sharing when watching Youtube.

## Table of Contents

1. [Usage](#Usage)
2. [Set-Up](#Set-Up)
3. [Pending Features](#Pending-Features)
4. [Development By](#Development-By)
5. [License](#License)
6. [Contributing](#Contributing)

## Usage

> You can search, and the results will populate in the right-hand sidebar. Any result can then be selected, and will be reflected in the main video player.


## Set-Up

From within the root directory:

```sh
git clone
yarn install
cp src/config/youtube.example.js src/config/youtube.js
```
Replace 'YOUR_API_KEY_HERE' with your Youtube API key, and save.
```sh
yarn start
yarn run build
```

#### Pending Features

- Add multiple search result display, so both kids can have their search results shown.
- Add a 'random' button, to randomly play a video from the search results.
- Add a set-up view, where the background, and character images can be customized.

### Development by

Developer / Author: [Andrew More](https://github.com/AndrewMore/)

### License

<a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.html"><img alt="GNU General Public License Version 3.0" style="border-width:0" src="https://www.gnu.org/graphics/gplv3-or-later.svg" /></a><br />

This work by <a href="https://github.com/AndrewMore/">Andrew More</a> is licensed under a <a rel="license" href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public License Version 3.0</a>.

### Contributing

All contributions are welcome!
Please take a moment to review guidelines [Feature Requests](.github/feature_request.md) | [Issues](.github/bug_report.md)