import { v4 as uuidv4 } from "uuid";

const orders = [
  {
    id: uuidv4(),
    name: "Apple",
    price: 5,
    desc: "AppleAppleAppleAppleApple",
    img: "apple.jpg",
  },
  {
    id: uuidv4(),
    name: "Banana",
    price: 10,
    desc: "BananaBananaBananaBanana",
    img: "banana.jpg",
  },
  {
    id: uuidv4(),
    name: "Orange",
    price: 5,
    desc: "OrangeOrangeOrangeOrange",
    img: "orange.jpg",
  },
  {
    id: uuidv4(),
    name: "Ice",
    price: 5,
    desc: "IceIceIceIceIce",
    img: "ice.jpeg",
  },
];

export function getListItem() {
    return orders;
  }