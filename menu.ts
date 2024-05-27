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
    title: "Пепперони",
    image: "/pizza/1.png",
    description: "Описание: Классическая пицца с пикантной колбаской Пепперони, ароматной зеленью и перцем чили",
    compound: ["Пикантная пепперони","томатный соус","моцарелла."],
    other: ["Пищевая ценность на 100 грамм:","377.037 Ккал","16.296 Белки, г","20 Жиры, г","31.852 Углеводы, г"],
    price: 600,
  },
  {
    id: 2,
    title: "Гавайская",
    image: "/pizza/2.png",
    description: "Описание: Тропическая классика с ароматной ветчиной, фирменным томатным соусом и моцареллой в сочетании с кусочками ананаса",
    compound: ["Цыпленок", "томатный соус","моцарелла","ананасы."],
    other: ["Пищевая ценность на 100 грамм:","250 Ккал","11 Белки, г","6 Жиры, г","38 Углеводы, г"],
    price: 550,
  },
  {
    id: 3,
    title: "Мясная",
    image: "/pizza/3.png",
    description: "Описание: Супермясная пицца с пикантной пепперони, ветчиной, хрустящим беконом, ароматной свининой, говядиной, моцареллой и фирменным томатным соусом",
    compound: ["Сыр","нежнейшее мясо и оливки."],
    other: ["Пищевая ценность на 100 грамм:","310 Ккал","14 Белки, г","12 Жиры, г","37 Углеводы, г"],
    price: 800,
  },
  {
    id: 4,
    title: "Ветчина и грибы",
    image: "/pizza/4.png",
    description: "Описание: Нежная пицца с соусом (Чесночный Рэнч), моцареллой, шампиньонами, ароматной ветчиной и чесноком",
    compound: ["Ветчина","томатный соус","шампиньоны","моцарелла."],
    other: ["Пищевая ценность на 100 грамм:","330 Ккал","14 Белки, г","11 Жиры, г","43 Углеводы, г"],
    price: 650,
  },
  {
    id: 5,
    title: "Роял бургер",
    image: "/burger/1.png",
    description: "Аппетитный сытный бургер с сочной говяжьей котлетой, ломтиком сыра, беконом, свежим Айсбергом и хрустящими чипсами. Отлично дополняют вкус соусы: медово-горчичный и соус `Скандинавский` по новой, улучшенной рецептуре от Бренд-Шефа.",
    compound: ["Сочный бургер с мясной котлетой, беконом и сыром."],
    other: ["Пищевая ценность на 100 грамм:","325 Ккал","10.6 Белки, г","25.1 Жиры, г","14.1 Углеводы, г"],
    price: 400,
  },
  {
    id: 6,
    title: "ORIGINAL Бургер",
    image: "/burger/2.png",
    description: "Описание: Сочный мясной бургер на пышной пшеничной булочке, с котлетой из нежной говядины, сырокопчёным беконом, голландским сыром, хрустящим листом салата, ломтиками сладкого томата и маринованных огурчиков. Начинка щедро сдобрена соусом из мёда и горчицы и чуть острым соусом «Барбекю» из томатов и специй. Пикантный, с ярким мясным вкусом и ароматом копчёностей. Привезём горячим!",
    compound: ["c котлетой из говядины","сыром чеддер и соусом BBQ"],
    other: ["Пищевая ценность на 100 грамм:","278 Ккал","10.91 Белки, г","12.49 Жиры, г","8.6 Углеводы, г"],
    price: 500,
  }
];
