# Prueba Tecnica Ingertec - CLIENT
![React](https://shields.io/badge/FrontEnd-Node.js-green?logo=react&style=plastic)
![Bootstrap](https://shields.io/badge/FrontEnd-Express-green?logo=bootstrap&style=plastic)
![CSS Modules](https://shields.io/badge/FrontEnd-CSSModules-green?logo=css3&style=plastic)
![Vercel](https://shields.io/badge/status-deployed-violet?logo=vercel&style=plastic)

Cliente realizado para la prueba tecnica INGERTEC.\
👉[Link al sitio](https://prueba-tecnica-ingertec.vercel.app/)👈

## Instrucciones para ejecutar el cliente de manera local:
`NOTA:` Se requiere de las siguientes versiones de **NODE** y **NPM** para poder iniciar el cliente:
 * __Node__: 12.18.3 or higher
 * __NPM__: 6.14.16 or higher

Antes de inicar el cliente es necesario contar con el servidor donde estaran alojados los archivos estaticos utilizados. Si ya se encuentra en produccion, continuar. En caso contrario, seguir las instrucciones del siguiente repositorio para poder ejecutarlo localmente:
[LINK](https://github.com/RomeroFederico/prueba-tecnica-ingertec-api)
 
A continuacion, copiar el repositorio e instalar las dependencias necesarias:
 ```bash
git clone https://github.com/RomeroFederico/prueba-tecnica-ingertec.git
npm install
```
Para finalizar e iniciar la pagina:
 ```bash
npm start
```
En caso de estar utilizando el servidor de manera local, modificar el archivo `src/util/config.js` (desde el directorio raiz):
 ```javascript
//export const SERVER_STATIC_PATH = "https://prueba-tecnica-ingertec-api.herokuapp.com/public";
export const SERVER_STATIC_PATH = "https://localhost:3001/public"; // 👈 Puerto indicado en el servidor.
```

## Imagenes
![screenshot 1](./sample/screenshot_1.png)


![screenshot 2](./sample/screenshot_2.png)


![screenshot 3](./sample/screenshot_3.png)


![screenshot 4](./sample/screenshot_4.png)
