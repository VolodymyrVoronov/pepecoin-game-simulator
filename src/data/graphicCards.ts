import geForce1060 from "assets/geForce1060-01.jpg";
import geForce2060 from "assets/geForce2060-01.jpg";
import geForce3060 from "assets/geForce3060-01.jpg";
import geForce3090 from "assets/geForce3090-01.jpg";

export const graphicCardsData = [
  {
    id: "1gf1060",
    name: "GeForce 1060",
    price: 10000,
    photo: geForce1060,
    miningCoefficient: 0.001,
  },
  {
    id: "2gf2060",
    name: "GeForce 2060",
    price: 30000,
    photo: geForce2060,
    miningCoefficient: 0.002,
  },
  {
    id: "3gf3060",
    name: "GeForce 3060",
    price: 40000,
    photo: geForce3060,
    miningCoefficient: 0.0025,
  },
  {
    id: "4gf3090",
    name: "GeForce 3090",
    price: 50000,
    photo: geForce3090,
    miningCoefficient: 0.005,
  },
];

export const correctGraphicCard = {
  id: "0gf960",
  name: "GeForce 960",
  price: 10000,
  photo: "",
  miningCoefficient: 0.0005,
};
