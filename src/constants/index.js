import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Магазин", "Mac", "iPhone", "Поддержка"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Вступайте в эру A17 Pro.",
      "Чип, меняющий правила игры.",
      "Прорывная производительность.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Титан.", "Такой прочный. Такой легкий. Такой профессиональный."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max имеет",
      "самый большой  оптический зум в",
      "истории iPhone. Далеко вперёд.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Совершенно новая кнопка действия", "Что будет делать ваша?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro в натуральном титане",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro в синем титане",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro в белом титане",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro в черном титане",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "Малый" },
  { label: '6.7"', value: "Большой" },
];

export const footerLinks = [
  "Политика конфиденциальности",
  "Условия использования",
  "Политика продаж",
  "Юридические вопросы",
  "Карта сайта",
];
