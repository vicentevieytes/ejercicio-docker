# Ejercicio: mapeo de puertos y volúmenes.

El programa:

La siguiente aplicación esta diseñada para crear un archivo llamado 'output.txt' al hacerse un llamado de tipo POST al endpoint http://localhost:3000/api. 
No se necesita usar ningun input ni definir ninguna variable, solo neceitamos acceder a alguna plataforma de testeo de APIs como https://www.postman.com/ o 
https://altairgraphql.dev/ (tiene version de escritorio y extension para navegador). Simplemente correremos el programa usando el comando <code>node index.js</code> en la terminal, esperaremos a obtener un mensaje de confirmación y luego podremos hacer el llamado.
Para poder realizar el ejercicio tendra que encontrarse instalado Docker Desktop en la PC.

El ejercicio:

<ol>
<li>Crear archivo Dockerfile con las siguintes especificaicones: </li>
<ol>
<li>Debe partir de la imagen node:lts-alpine.</li>
<li>Generar una carpeta de trabajo denominada 'app', dondese copiaran los archivos provistos.</li>
<li>Usando el manejador de paquetes npm, instalar las dependencias necesarias para que se corra nuestra aplicación en el contenedor.</li>
<li>Al crearse el contenedor, correr el comando <code>node index.js</code></li>
</ol>
<li>Crear la imagen Docker y luego levantar un contenedor con la aplicación.</li>
<li>Buscar el listado de imagenes Docker y de contenedores existentes en la PC.</li>
<li>Hacer mapeo de puertos para acceder a la aplicacion corriendose en el contenedor. Crear el archivo <code>output.txt</code> en el contenedor y hacer mapeo de volumenes para que se guarde en la carpeta raiz de la aplicación. Confirmar que el archivo se encuentra creado en ambos lados.</li>
<li>Bajar el contenedor y crear uno nuevo usando la misma imagen. Comprobar que el archivo <code>output.txt</code> no aparece en el contenedor hasta que no hacemos el request POST.</li>

</ol>

Solución:

- Se incluyó el arhivo Dockerfile, para buildear la imagen ejecutar:
```docker build -t ejercicio-vicente .```

- Se incluyen en el directorio Scripts los comandos para ejecutar el contenedor mapeando puertos y volumenes y para hacer la POST request a la aplicación.


