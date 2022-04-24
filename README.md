# loadbalancer

API para correr en segundo plano con balance de carga utilizando PM2 y NGINX.

El proyecto debe estar ubicado en el directorio donde esté instalado NGINX.

Para correr en modo "fork" ejecutar en consola:

pm2 start server.js --watch
pm2 start server2.js --watch
pm2 start server3.js --watch

Para correr en modo cluster, agregar a la línea de comando anterior -i n, siendo n la cantidad de hilos de procesamiento.

Para verificar el funcionamiento, abrir la ruta del navegador:

localhost:80/api

LA API retorna un objeto random tomado de un archivo .json. Al refrescar, se observa cómo el balanceador redirecciona y distribuye la carga
según el archivo nginx.conf.

Otra manera de correr la app es ejecutando los archivos ecosystem de pm2:

pm2 start ecosystem.config.js
pm2 start ecosystem2.config.js
pm2 start ecosystem3.config.js

En este caso se modifican las propiedades (nombre, modo de ejecución, puerto) en el objeto de configuración, creando instancias de un mismo server.js.

Para monitorear el funcionamiento en consola: pm2 monit
Para finalizar: pm2 delete all



