![pudl](https://on.ahmda.ws/1a2d181b2j1P/c)

[![npm](https://img.shields.io/npm/v/gulp-poodle.svg?style=flat-square)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/npm/dt/gulp-poodle.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/badge/pug-html-gray.svg?colorA=A86454&style=flat-square)](https://www.npmjs.com/package/gulp-poodle) [![npm](https://img.shields.io/badge/sass-css-gray.svg?colorA=C6538B&style=flat-square)](https://www.npmjs.com/package/gulp-poodle)

<table width='100%'>
    <tr>
        <td align='left' width='100%' colspan='2'>
            🎯  <code>pudl</code> es un generador de sitios estáticos basado en JavaScript para la creación rápida de prototipos de pequeñas demostraciones estáticas impresionantes mientras se enseña / presenta.
        </td>
    </tr>
    <tr>
        <td>
            Un proyecto FOSS (software libre y de código abierto). Mantenido por <a href='https://github.com/maedahbatool'>@MaedahBatool</a>.
        </td>
        <td align='center'>
            <a href='https://MaedahBatool.com/'>
                <img src='https://img.shields.io/badge/→-MAEDAH%20BATOOL-gray.svg?colorB=5734F5&style=flat-square' width='100' />
            </a>
        </td>
    </tr>
</table>

## 🐶 Que puede hacer `pudl`?

1.  Live recarga el navegador con BrowserSync..
2.  CSS: conversión de Sass a CSS, captura de errores, corrección automática y minificación de CSS.
3.  Mira archivos para cambios en CSS.
4.  Corrige los finales de línea.
5.  InjectCSS en lugar de recargar la página del navegador
6.  Te envía un mensaje de notificación.
7.  Previene roturas de tubería causadas por errores.

## 🔥 ¿Empezando?
<details>
 <summary><strong> PASO #0</strong> — ¿No tienes <code>Node.js</code> + <code>npm</code> instalado? Lee esto. (¡HAGA CLIC PARA AMPLIAR!)</summary>

En caso de que sea un principiante absoluto en el mundo de `Node.js`, JavaScript y los paquetes `npm`, todo lo que necesita hacer es ir al sitio de Node's [descargar + instalar](https://nodejs.org/en/download/) Node 
en su sistema Esto instalará tanto `Node.js` y `npm`,por ejemplo, el administrador de paquetes de nodo, la interfaz de línea de comandos de Node.js.

You can verify the install by opening your terminal app and typing...

```sh
node -v
 # Resultados en v9.11.2: asegúrese de tener Nodo> = 8 instalado.

npm -v
# Resultados en v6.2.0: asegúrese de tener npm> = 5.3 instalado.
```

</details>

### ➡️ Paso 1. Descargar los archivos requeridos.

Descargar [`gulpfile.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/gulpfile.js), [`package.json`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/package.json), [`.gitignore`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/.gitignore), y [`config.js`](https://raw.githubusercontent.com/MaedahBatool/pudl/master/dist/config.js) archivos dentro de la carpeta raíz de su proyecto.

_**O** use su terminal para navegar por la carpeta deseada y ejecute el siguiente comando que descargará todos los archivos requeridos por medio de cURL.

```sh
curl -L https://git.io/pudlgfl -o "gulpfile.js" && curl -L https://git.io/pudlpkjs -o "package.json" && curl -L https://git.io/pudlgig -o ".gitignore" && curl -L https://git.io/pudlcg -o "config.js"
```

### ➡️ PASO # 2: Editar las variables del proyecto.

Cambie las variables de proyecto en el `config.js` archivo de acuerdo con la estructura de su carpeta.

```js
// Variables del proyecto.
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

### ➡️ PASO # 3: Instalar Dependencias de Nodos

En la carpeta raíz de las dependencias del Nodo. En el terminal ejecute el siguiente comando y espere a que descargue todas las `node.js` dependencias. Es un proceso de una sola vez y se puede demorar unos 5 minutos, a partir de la velocidad de su conexión a Internet.

```sh
# Para MAC OS X, ejecute el siguiente comando con superusuario.
npm install

# Para Linux ejecute el siguiente comando. 
npm install
```

### ➡️ PASO # 4: solo corre `npm start`

Por último, ejecute el siguiente comando para ponerse en marcha con pudl.

```sh
# Para comenzar pudl
npm start

# Para detener el pudl presione CTRL (⌃) + C
```

Ahora gulpsírvase mirar sus archivos pugy los sassarchivos para cualquier cambio y para obtener un enlace a través del cual puede acceder a su sitio localmente.

## Licencia

Lanzado bajo licencia GNU GPLv2.0 o posterior. Derechos de autor [Maedah Batool](https://twitter.com/MaedahBatool)

---

<br>

### 🙃 **Hola somos la [pareja de desarrolladores](https://WPCouple.com)**!

[Ahmad Awais](https://twitter.com/mrahmadawais/) (mi esposo) es un defensor de los desarrolladores de OSS, Full Stack Web Developer y colaborador habitual en WordPress. Yo ([Maedah Batool](https://twitter.com/MaedahBatool/)) es Gerente Técnico de Proyectos, y también soy Colaborador Principal de WordPress. Junto con nuestro [equipo](https://WPCouple.com/team), ejecutamos [WPCouple.com](https://WPCouple.com/).

Si desea obtener información sobre nuestro amor por el software código abierto, el desarrollo profesional de pila completa, la comunidad de WordPress, el crecimiento de JavaScript o el crecimiento de una familia, la creación y el arranque de una empresa, entonces suscríbase a nuestro boletín de noticias premium ↣ [El WordPress para llevar](https://WPTakeaway.club)!

#### [**Apoya nuestros proyectos de código abierto! **](https://pay.paddle.com/checkout/515568) 🎩

Si desea que sigamos produciendo un software profesional gratuito y de código abierto (FOSS). Considere [pagar por una hora de mi tiempo dev](https://pay.paddle.com/checkout/515568). Pasaremos dos horas en código abierto por cada contribución. Sí, es cierto, usted paga una hora y nos hace pasar una hora como agradecimiento.

-   🚀 $99.99 — [Soporte por una hora o más →](https://pay.paddle.com/checkout/515568)
-   🔰 $49.99 — [ Soporta media hora de mantenimiento →](https://pay.paddle.com/checkout/527253)
-   ☕️ $9.99 —  Compre un almuerzo o un café para mantenernos transportando #OpenSource →](https://pay.paddle.com/checkout/527254)

<br>

### 🙌 [SOCIOS DE WPCOUPLE](https://WPCouple.com/partners):

Este proyecto de código abierto se mantiene con la ayuda de los increíbles empresas que se enumeran a continuación. ¿Que? [Leer más al respecto →](https://WPCouple.com/partners)

<table width='100%'>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.gravityforms.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrE/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu5O/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mto3/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.sitelock.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtyZ/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wp-rocket.me/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrv/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://blogvault.net/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtph/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://cridio.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtmy/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wecobble.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtrW/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.cloudways.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu0C/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.cozmoslabs.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu9W/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wpgeodirectory.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtwv/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.wpsecurityauditlog.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtkh/c' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://mythemeshop.com/?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/n3ug/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://ahmda.ws/USES_LiquidWeb?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mtnt/c' /></a></td>
		<td width='333.33'><a target='_blank' href='https://WPCouple.com/contact?utm_source=WPCouple&utm_medium=Partner'><img src='https://on.ahmda.ws/mu3F/c' /></a></td>
	</tr>
</table>


_Sígame 👋 en Twitter para más actualizaciones y preguntas_ →  [![Tweet to say Hi](https://img.shields.io/twitter/follow/maedahbatool.svg?style=social&label=Tweet%20@MaedahBatool)](https://twitter.com/maedahbatool/)
