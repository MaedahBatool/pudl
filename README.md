![pudl](https://on.ahmda.ws/1a2d181b2j1P/c)

[![npm](https://img.shields.io/npm/v/gulp-poodle.svg?style=flat-square)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/npm/dt/gulp-poodle.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/badge/pug-html-gray.svg?colorA=A86454&style=flat-square)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/badge/sass-css-gray.svg?colorA=C6538B&style=flat-square)](https://www.npmjs.com/package/gulp-poodle)

<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            🎯  <code>pudl</code> is a JavaScript-based static site generator for quick-prototyping of awesome little static demos while teaching/presenting.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href='https://github.com/maedahbatool'>@MaedahBatool</a>.
        </td>
        <td align='center'>
            <a href='https://MaedahBatool.com/'>
                <img src='https://img.shields.io/badge/→-MAEDAH%20BATOOL-gray.svg?colorB=5734F5&style=flat-square' width='100' />
            </a>
        </td>
    </tr>
</table>

## 🐶 What Can `pudl` Do?

1.  Live reloads browser with BrowserSync.
2.  CSS: Sass to CSS conversion, error catching, Autoprefixing and CSS minification.
3.  Watches files for changes in CSS.
4.  Corrects the line endings.
5.  InjectCSS instead of browser page reload
6.  Sends message notification to you.
7.  Prevents pipe breaking caused by errors.

## 🔥 Getting Started?

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

### ➡️ Step #1. Download the Required Files

Download [`gulpfile.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/package.json), [`.gitignore`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/.gitignore), and [`config.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/config.js) files inside the root folder of your project.

_**OR** use your terminal to browse your desired folder and run the following command which will download all the required files for you via cURL._

```sh
curl -L https://git.io/pudlgfl -o "gulpfile.js" && curl -L https://git.io/pudlpkjs -o "package.json" && curl -L https://git.io/pudlgig -o ".gitignore" && curl -L https://git.io/pudlcg -o "config.js"
```

### ➡️ STEP #2: Editing the Project Variables

Change the project variables in the `config.js` file according to your folder structure.

```js
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

### ➡️ STEP #3: Installing Node Dependencies

In the root folder install the Node Dependencies. In the terminal run following command and wait for it to download all the `node.js` dependencies. It's a one-time process and can take about 5 minutes depending on the speed of your internet connection.

```sh
# For MAC OS X run the following command with super user.
npm install

# For Linux run the following command.
npm install
```

### ➡️ STEP #4: Just run `npm start`

Finally run the following command to get up and running with pudl.

```sh
# To start pudl
npm start

# To stop pudl press CTRL (⌃) + C
```

Now `gulp` will start watching your `pug` and `sass` files for any changes and provides you with a link through which you can access your site locally.

## License

Released under GNU GPLv2.0 or later license.
Copyright [Maedah Batool](https://twitter.com/MaedahBatool)

---

### 🙃 **Hello, we're the [Dev Couple](https://WPCouple.com)**!

[Ahmad Awais](https://twitter.com/mrahmadawais/) (my husband) is a OSS developer advocate, Full Stack Web Developer and a regular core contributor at WordPress. I ([Maedah Batool](https://twitter.com/MaedahBatool/)) is a Technical Project Manager, and I'm also a WordPress Core Contributor. Together with our [team](https://WPCouple.com/team), we run the [WPCouple.com](https://WPCouple.com/).

If you'd like to get insights into our love for open source software, professional full stack development, WordPress community, the growth of JavaScript or growing a family, building, and bootstrapping a business, then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!

#### [**Support our Open Source Projects!**](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

-   🚀 $99.99 → [Support for one hour or more](https://pay.paddle.com/checkout/515568)
-   🔰 $49.99 → [Support half an hour maintenance](https://pay.paddle.com/checkout/527253)
-   ☕️ $9.99 → [Buy us lunch or coffee to keep us trucking #OpenSource](https://pay.paddle.com/checkout/527254)

<br>

### 🙌 [THEDEVCOUPLE PARTNERS](https://TheDevCouple.com/partners)

This open source project is maintained by the help of awesome businesses listed below. What? [Read more about it →](https://TheDevCouple.com/partners)

<table width='100%'>
	<tr>
		<td width='500'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/73cedc/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/ff40fe/c' /></a></td>
	</tr>
	<tr>
		<td width='500'><a target='_blank' href='https://mythemeshop.com/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/3166d9/c' /></a></td>
		<td width='500'><a target='_blank' href='https://ipapi.co/?utm_source=TheDevCouple&utm_medium=Partner'><img src='https://d2ddoduugvun08.cloudfront.net/items/1R190r2U0p3N3L0U0b2u/ip-api.png'/></a></td>
	</tr>
</table>
<br>

_Follow me 👋 on Twitter for more updates and questions_ →  [![Tweet to say Hi](https://img.shields.io/twitter/follow/maedahbatool.svg?style=social&label=Tweet%20@MaedahBatool)](https://twitter.com/maedahbatool/)
