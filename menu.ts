export interface ProductType {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  compound: Array<string>;
  other: Array<string>;
}

export const menu: Array<ProductType> = [
  {
    id: 1,
    title: "Pizza1",
    image: "/pizza/1.png",
    description: "hi",
    compound: ["Цыпленок", "томатный соус", "моцарелла", "ананасы"],
    other: ["тут", "какой-то", "юред"],
    price: 300,
  },
  {
    id: 2,
    title: "Pizza2",
    image: "/pizza/2.png",
    description: "hi",
    compound: ["томатный соус", "моцарелла", "ананасы"],
    other: [],
    price: 200,
  },
  {
    id: 3,
    title: "Pizza2",
    image: "/pizza/3.png",
    description: "hi",
    compound: ["томатный соус", "моцарелла", "ананасы"],
    other: [],
    price: 150,
  },
];
