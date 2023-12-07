<div align="center" id="top"> 
  <img src="https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png"  height="300" width="600" alt="ServiceOpenAI" />
</div>

# Cliente API  
Este es un proyecto en Angular 5 que muestra información detallada sobre los jugadores de la Liga Pro de Ecuador. Permite visualizar estadísticas generales de cada jugador, incluyendo su nombre, nacionalidad, edad, posición, entre otros detalles relevantes. Ademas de tener formularios para poder ingresar nuevos jugadores y a su vez poder eliminar estos.

[![Icon](https://img.shields.io/badge/Angular-black?logo=Angular)](https://img.shields.io/badge/Angular-purple?logo=Angular) [![Langua](https://img.shields.io/github/languages/count/BryanSagbay/API-web?color=c90e21 "Langua")](https://img.shields.io/github/languages/count/BryanSagbay/API-web?color=c90e21 "Langua") [![Git](https://img.shields.io/github/repo-size/bryansagbay/API-web?color=56BEB8 "Gut")](https://img.shields.io/github/repo-size/bryansagbay/API-web?color=56BEB8 "Gut") [![Start](https://img.shields.io/github/stars/bryansagbay/API-web?color=blue "Start")](https://img.shields.io/github/stars/bryansagbay/API-web?color=blue "Start") 

</p>


<hr> 

<br>

> ### 1. Tecnologías Utilizadas 
- HTML
- ANGULAR
- BOOTSTRAP


<br>



> ### 2. Configuración
El proyecto está desarrollado con Angular y se puede instalar siguiendo estos pasos: 
1. Instalación de Node.js y npm linux:
```bash
$ sudo apt install nodejs
```
2. Instalación de Angular CLI:
```bash
$ npm install -g @angular/cli
```
3. Clonar el repositorio:
```bash
$ git clone https://github.com/BryanSagbay/API-web.git
```
4. Configuración de dependencias y scripts:
   
En el archivo package.json, puedes encontrar las dependencias instaladas y los    scripts configurados para ejecutar tareas como la compilación, prueba, inicio del    servidor de desarrollo, entre otros.

6. Configuración de entorno:
   
El archivo environment.ts y environment.prod.ts en la carpeta environments se            utiliza para configurar variables de entorno como las URLs de las APIs, claves de        acceso, entre otros

8. Configuración de servicios y componentes:
   
Los servicios se utilizan para realizar llamadas a API o lógica de negocio, mientras que los componentes manejan la presentación y la lógica de la interfaz de usuario. Puedes crear servicios y componentes usando Angular CLI:
``` bash
$ ng generate service nombre-del-servicio 
```
``` bash
$ ng generate component nombre-del-componente
```
7.   Ejecución del proyecto:
``` bash
$ ng serve
```

<br>

>### 3. Funcionalidades 
- Listar jugadores: Carga la lista de jugadores al iniciar el componente.
- Agregar jugador: Permite agregar un nuevo jugador a la lista.
- Editar jugador: Permite modificar la información de un jugador existente.
- Eliminar jugador: Elimina un jugador de la lista

<br>


>#### Notas Importantes
- Todos los endpoints tienen sus propias respuestas de estado HTTP para indicar el éxito o el fallo de la operación.
- Se utiliza JugadorRepositorio para interactuar con la base de datos y realizar operaciones CRUD en la tabla de jugadores.


<br>


> ### License & Copy &copy;

Hecho por: <a href="https://github.com/BryanSagbayt" target="_blank">Bryan Sagbay</a>


------------

<a href="#top">Back to top</a>
