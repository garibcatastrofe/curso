import { TopicLink } from "../types/TopicLink";

export const infoTemario: TopicLink[] = [
  {
    title: "Temario",
    link: "temario",
    topicsArray: [],
  },
  {
    title: "Introducción a React",
    link: "introduction",
    topicsArray: [
      {
        name: "¿Qué es React?",
        description:
          "React es una biblioteca de JavaScript desarrollada por Meta (Facebook) para construir interfaces de usuario basadas en componentes. Su principal ventaja es la capacidad de actualizar y renderizar eficientemente solo los elementos que cambian en la interfaz.",
        urlImage:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      },
      {
        name: "Ventajas de usar React",
        description:
          "React permite crear aplicaciones escalables, rápidas y fáciles de mantener gracias a su arquitectura basada en componentes reutilizables y su Virtual DOM que optimiza el rendimiento.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Componentes y Props",
    link: "componentsProps",
    topicsArray: [
      {
        name: "Qué son los componentes",
        description:
          "Los componentes son bloques reutilizables de código que definen cómo debe mostrarse una parte de la interfaz. Pueden ser de tipo funcional o de clase, aunque los funcionales son los más usados hoy en día.",
        urlImage: "NotFound",
      },
      {
        name: "Uso de Props",
        description:
          "Las 'props' son propiedades que permiten pasar datos de un componente padre a uno hijo. Son inmutables y ayudan a mantener la lógica separada entre los distintos componentes.",
        urlImage: "NotFound",
      },
      {
        name: "Composición de componentes",
        description:
          "La composición permite combinar varios componentes para crear interfaces más complejas y estructuradas. Es una de las claves de la escalabilidad en React.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Sintaxis Básica de JavaScript (JSX)",
    link: "jsx",
    topicsArray: [
      {
        name: "Introducción a JSX",
        description:
          "JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de React. Al final, JSX se transforma en llamadas a `React.createElement()`.",
        urlImage: "NotFound",
      },
      {
        name: "Variables y constantes en JSX",
        description:
          "En JSX puedes interpolar variables y constantes de JavaScript dentro de llaves `{}` para mostrar valores dinámicos o resultados de funciones.",
        urlImage: "NotFound",
      },
      {
        name: "Condiciones y bucles en JSX",
        description:
          "Se pueden usar expresiones condicionales y funciones como `map()` para renderizar listas o mostrar contenido condicionalmente.",
        urlImage: "NotFound",
      },
      {
        name: "Objetos y arreglos en JSX",
        description:
          "JSX permite trabajar con estructuras de datos como objetos y arreglos para crear vistas dinámicas en función de datos complejos.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Estados y eventos",
    link: "stateEvents",
    topicsArray: [
      {
        name: "Manejo de estados en React",
        description:
          "El estado es la memoria interna de un componente. Permite manejar datos que cambian con el tiempo y actualizar la interfaz automáticamente cuando cambian.",
        urlImage: "NotFound",
      },
      {
        name: "Hook useState",
        description:
          "`useState` es un hook que permite agregar y manipular estados dentro de componentes funcionales. Es la base del manejo de datos dinámicos en React.",
        urlImage: "NotFound",
      },
      {
        name: "Manejo de eventos",
        description:
          "React utiliza un sistema de eventos sintéticos que unifica el comportamiento en todos los navegadores. Puedes manejar clics, inputs y más con funciones definidas en el componente.",
        urlImage: "NotFound",
      },
      {
        name: "Estado global con Zustand",
        description:
          "Zustand es una biblioteca minimalista para gestionar estado global. Es ligera, fácil de implementar y no requiere configuración complicada como Redux.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Utilizar fetch (API Simpsons)",
    link: "fetchSimpsonsAPI",
    topicsArray: [
      {
        name: "Uso de fetch para obtener datos",
        description:
          "`fetch()` permite realizar peticiones HTTP para consumir datos desde un servidor o API. En este caso, usaremos la API de *The Simpsons* para obtener frases e imágenes de los personajes más icónicos de Springfield.",
        urlImage: "NotFound",
      },
      {
        name: "Qué es una API REST?",
        description:
          "Una API REST es un conjunto de reglas que permite la comunicación entre cliente y servidor usando HTTP. En la API de *The Simpsons*, cada petición devuelve un objeto con información del personaje y su frase famosa.",
        urlImage: "NotFound",
      },
      {
        name: "Cómo consumir la API de Los Simpsons",
        description:
          "Para consumir la API, puedes usar `fetch('https://thesimpsonsquoteapi.glitch.me/quotes')`. La respuesta es un arreglo con objetos que contienen `quote`, `character` e `image`. Luego puedes mostrarlos dinámicamente en React.",
        urlImage: "NotFound",
      },
      {
        name: "Cómo ingresar los datos en un estado global",
        description:
          "Puedes almacenar los datos obtenidos en un estado global con Zustand o Context API. Por ejemplo, una 'store' puede guardar el personaje actual y su frase, permitiendo que cualquier componente los muestre sin volver a hacer fetch.",
        urlImage: "NotFound",
      },
      {
        name: "Ejemplo de uso práctico",
        description:
          "Imagina un componente llamado `SimpsonCard` que muestre la imagen, el nombre y la frase del personaje actual. Cada vez que el usuario haga clic en un botón, se hace un nuevo fetch para obtener otro personaje aleatorio.",
        urlImage:
          "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      },
    ],
  },
  {
    title: "Rutas en React (React Router DOM)",
    link: "reactRouterDOM",
    topicsArray: [
      {
        name: "¿Qué es React Router?",
        description:
          "React Router es una biblioteca que permite la navegación entre diferentes vistas o componentes sin recargar la página, creando aplicaciones SPA (Single Page Applications).",
        urlImage: "NotFound",
      },
      {
        name: "Instalación y configuración",
        description:
          "Para usar React Router, se instala con `npm install react-router-dom` o `pnpm add react-router-dom` y se configura envolviendo la app en `<BrowserRouter>`.",
        urlImage: "NotFound",
      },
      {
        name: "Definición de rutas",
        description:
          "Se definen rutas usando los componentes `<Routes>` y `<Route>`, donde cada `<Route>` asocia una ruta del navegador con un componente.",
        urlImage: "NotFound",
      },
      {
        name: "Navegación entre rutas",
        description:
          "Para moverse entre rutas, puedes usar `<Link>`, `<NavLink>` o el hook `useNavigate()` para redirigir de manera programática.",
        urlImage: "NotFound",
      },
    ],
  },
];
