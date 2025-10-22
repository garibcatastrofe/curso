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
    title: "JSX (JavaScript XML)",
    link: "jsxIntroduction",
    topicsArray: [
      {
        name: "¿Qué es JSX?",
        description:
          "JSX es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Facilita la creación de componentes visuales en React.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Sintaxis Básica de JavaScript",
    link: "jsx",
    topicsArray: [
      {
        name: "¿Qué es JavaScript?",
        description:
          "JavaScript es un lenguaje de programación interpretado, orientado a objetos y basado en prototipos, que se utiliza principalmente para el desarrollo web. Permite crear páginas web interactivas y dinámicas al ejecutarse en el navegador del usuario.",
        urlImage: "NotFound",
      },
      {
        name: "Variables y constantes",
        description:
          "En JavaScript, las variables se declaran con `var`, `let` o `const`. `let` y `const` son las formas modernas de declarar variables, donde `const` se usa para valores que no cambian y `let` para valores que pueden cambiar.",
        urlImage: "NotFound",
      },
      {
        name: "Condiciones y bucles",
        description:
          "JavaScript utiliza estructuras de control como `if`, `else`, `switch` para condiciones, y `for`, `while`, `do...while` para bucles, permitiendo ejecutar código de manera condicional o repetitiva.",
        urlImage: "NotFound",
      },
      {
        name: "Objetos y arreglos",
        description:
          "Los objetos son colecciones de pares clave-valor, mientras que los arreglos son listas ordenadas de valores. Ambos son fundamentales para manejar datos en JavaScript.",
        urlImage: "NotFound",
      },
    ],
  },
  {
    title: "Typescript Básico",
    link: "typescriptBasic",
    topicsArray: [
      {
        name: "¿Qué es?",
        description:
          "TypeScript es un superconjunto de JavaScript que añade tipado estático y otras características avanzadas. Permite detectar errores en tiempo de compilación y mejorar la calidad del código.",
        urlImage: "NotFound",
      },
      {
        name: "Tipos de datos",
        description:
          "TypeScript introduce tipos de datos como `string`, `number`, `boolean`, `array`, `tuple`, `enum`, y `any`, permitiendo una mejor validación y autocompletado en los editores.",
        urlImage: "NotFound",
      },
      {
        name: "Interfaces y tipos personalizados",
        description:
          "Las interfaces permiten definir la forma de un objeto, mientras que los tipos personalizados (`type`) ofrecen una forma más flexible de definir estructuras de datos complejas.",
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
        name: "Hook UseEffect",
        description:
          "`useEffect` es un hook que permite manejar efectos secundarios en componentes, como llamadas a APIs, suscripciones o modificaciones del DOM después de renderizados.",
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
        urlImage:
          "https://i.pinimg.com/736x/0f/89/6a/0f896a83d88514f208c116e22c93d3fd.jpg",
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
        urlImage: "NotFound",
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
        urlImage:
          "https://keyholesoftware.com/wp-content/uploads/React-Router.jpg",
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
  {
    title: "Tailwind CSS Básico",
    link: "tailwindBasic",
    topicsArray: [
      {
        name: "¿Qué es Tailwind CSS?",
        description:
          "Tailwind CSS es un framework de CSS utilitario que permite construir diseños personalizados directamente en el HTML mediante clases predefinidas, facilitando la creación rápida de interfaces responsivas y modernas.",
        urlImage:
          "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp",
      },
    ],
  },
];
