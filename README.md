<h1 align="center">
  <img src="https://on.ahmda.ws/sjK6/c" />

pudl

</h1>

[![npm](https://img.shields.io/npm/v/gulp-poodle.svg?style=flat-square)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/npm/dt/gulp-poodle.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/gulp-poodle)

<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            <!-- <strong>pudl</strong><br /> -->
            🎯 pudl is a JavaScript-based static site generator for quick-prototyping of awesome little static demos while teaching/presenting.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/maedahbatool'>@MaedahBatool</a>.
        </td>
        <td align='center'>
            <a href='https://MaedahBatool.com/'>
                <img src='https://on.ahmda.ws/41331l2G0d0S/c' width='100' />
            </a>
        </td>
    </tr>
</table>

<!-- Use pudl for quick-prototyping of awesome little static demos while teaching/presenting. -->

![pudl](https://on.ahmda.ws/1a2d181b2j1P/c)

## ⚡️ What Can `pudl` Do?

1.  Live reloads browser with BrowserSync.
2.  CSS: Sass to CSS conversion, error catching, Autoprefixing and CSS minification.
3.  Watches files for changes in CSS.
4.  Corrects the line endings.
5.  InjectCSS instead of browser page reload
6.  Sends message notification to you.
7.  Prevents pipe breaking caused by errors.

## 🎗 Getting Started?

<details>
 <summary><strong> STEP #0</strong> — Don't have <code>Node.js</code> + <code>npm</code> installed? Read this. (CLICK TO EXPAND!)</summary>

In case you are an absolute beginner to the world of `Node.js`, JavaScript, and `npm` packages — all you need to do is go to the Node's site [download + install](https://nodejs.org/en/download/) Node on your system. This will install both `Node.js` and `npm`, i.e., node package manager — the command line interface of Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
# Results into v9.11.2 — make sure you have Node >= 8 installed.

npm -v
# Results into v6.2.0 — make sure you have npm >= 5.3 installed.
```

</details>

### → Step #1. Download the Required Files

Download [`gulpfile.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/package.json), [`.gitignore`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/.gitignore) and [`config.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/config.js) files inside the root folder of your project.

_**OR** use your terminal to browse your desired folder and run the following command which will download all the required files for you via cURL._

```bash
curl -L https://git.io/pudlgf -o "gulpfile.js" && curl -L https://git.io/pudlpkg -o "pacakge.json"  && curl -L https://git.io/pudlgi -o ".gitignore" && curl -L https://git.io/pudlcfg -o "config.js"
```

### → STEP #2: Editing the Project Variables

Change the project variables in the `config.js` file according to your folder structure.

```
	// Project Variables.
module.exports = {
	viewSrc: './views/**/*.pug',
	viewDst: './',
	styleSrc: './css/style.scss',
	styleDst: './',
	outputStyle: 'compressed',
	viewWatchFiles: './views/**/*.pug',
	styleWatchFiles: './css/**/*.scss',
	browserAutoOpen: false,
	injectChanges: true
};
```

### → STEP #3: Installing Node Dependencies

In the root folder install the Node Dependencies. In the terminal run this command and wait for it to download all the `node.js` dependencies. It's a one-time process and can take about 5 minutes depending on the speed of your internet connection.

```bash
# For MAC OS X run the following command with super user.
sudo npm install

# For Linux run the following command.
npm install
```

### → STEP #4: Just run `npm start`

Finally run the following command to get up and running with pudl.

```bash
# To start pudl
npm start

# To stop pudl press CTRL (⌃) + C
```

Now `gulp` will start watching your `pug` and `sass` files for any changes and provides you with a link through which you can access your site locally.

###### — Feel free to tweet and say 👋 at me [@MaedahBatool](https://twitter.com/MaedahBatool/)
