# Archivos_Base_Creacion_WebCorrecta
Esta es la estructura base que uso para crear pagianas web.

## Requisitos
Para usar esta carpeta debemos descargar instalar node.js dentro de nuestra pc.
Es sumamente facil, solo tienen que darle `next o siguiente` en el proceso de instalacio.
Les dejo el enlace para descargar node.js [Descargar Node.js](https://nodejs.org/es/) :shipit:

![Screenshot_2020-04-30 Node js](https://user-images.githubusercontent.com/58580048/80766918-2d0e4600-8b0c-11ea-9fe0-bcbc4105c0f8.png)

Luego de descargarlo e instalarlo verificamos si todo va bien. Para eso habrimos nuestra linea de comando y ejecutamos:
* node -v
* npm -v
Y listo!!!, ya tenemos instalado Node.

## Que usaremos
La carpeta base, cuenta con tecnologias que nos ayudan a modificar los codigos a codigos que podemos subir
a los servidores.
Las tecnologias son: 
- Gulp: que nos ayuda a combertir el codigo y crear el servidor local.
- Browser sync: para la autorecarga de la pagina..
- Bootstrap: para los diseños.
- Font Awesome: trae iconos que podremos usar dentro de nuestra web.
Todos se instalan usando el motor de npm.

## Clonando y preparando el area de trabajo
Una ves instalado node.js sigue los siguientes pasos:
1. Clona el repositorio dentro de la carpeta donde esta tu proyecto.
2. Abre la consola con la ruta de tu carpeta `C:\User\Proyectos_Web\Proyecto`.
3.Iniciamos npm con: **`npm init -y`**. Esto creara una hoja tipo **.json** , dentro modificaremos el nombre (**name**) y ponemos en minusculas la descripcion.

**Como aparece**
![carbon](https://user-images.githubusercontent.com/58580048/80768743-d9522b80-8b10-11ea-8b4f-c2b58e246d3a.png)

**Modificado**
![carbon(1)](https://user-images.githubusercontent.com/58580048/80768857-2930f280-8b11-11ea-9f0e-d85c2ad2a846.png)

4. Istalamos los paquetes de archivps que usaremos:
**`npm install bootstrap jquery font-awesome popper.js`**
5. Instalamos gulp: 
**`npm install -D gulp gulp-cli gulp-sass browser-sync`**
### 6
Una ves instalado todo, pasamos a modificar la hoja .json que se creo al inicio, esta lleva el nombre **package.json**
Nos tiene que quedar de la siguiente forma:
![carbon(1)](https://user-images.githubusercontent.com/58580048/80768857-2930f280-8b11-11ea-9f0e-d85c2ad2a846.png)
El cambio echo esta en el `scripts` donde ponemos **"start": "gulp"**

## Como modificar los archivos
Los archivos a modificar son:
1. Entra a la carpeta src
2. Para modificar html, abre index.html
3. Para mosdificar los estilos de css, entra a la carpeta scss, y modifica el archivo main.scss,
este se actualizara dentro de la carpeta css, en el archivo main.css
4. para modificar el script, puedes escribirlo directo en el html(no lo recomiendo por buenas practicas)
o crea un main.js dentro de la carpeta js, luego enlasalo a la hoja html.

## Listo
Con esto ya tenemos todo listo para poder trabajar tranquilamente.
Para correr el servidor, en la consola de la ruta de tu archivo escribimos:
**`npm start`**.
Y podremos ver una ventana que se ejecuta con una ruta especifica.

## Eso es todo
Gracias por leer u usar.
