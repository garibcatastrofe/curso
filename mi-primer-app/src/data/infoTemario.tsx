import { TopicLink } from "../types/TopicLink";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";

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
        description: "React es una biblioteca...",
        urlImage: img1,
      },
      {
        name: "¿Qué es React?",
        description: "React es una biblioteca...",
        urlImage: img2,
      },
      {
        name: "¿Qué es React?",
        description: "React es una biblioteca...",
        urlImage: img3,
      },
    ],
  },
  {
    title: "Componentes y Props",
    link: "componentsProps",
    topicsArray: [],
  },
];
