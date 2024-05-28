import ojoDeBife from "../assets/beef/ojoDeBife.jpg";
import pechuga from "../assets/chicken/pechuga.jpg";
import lomoCerdo from "../assets/pork/lomoCerdo.jpg";

export interface Products {
  id: string;
  name: string;
  price: number;
  type: string;
  description: string;
  image: string;
}

const data: Products[] = [
  {
    id: "1",
    name: "Ojo de Bife",
    price: 10000,
    type: "res",
    description: "El ojo de bife es un corte de carne jugoso y tierno del lomo de la res, conocido por su sabor intenso y su marmoleado, ideal para asados y parrillas.",
    image: ojoDeBife,
  },

  {
    id: "2",
    name: "Pechuga",
    price: 4000,
    type: "pollo",
    description: "La pechuga de pollo es un corte magro y versátil de carne blanca, apreciado por su alto contenido de proteínas y su capacidad para adaptarse a diversas preparaciones culinarias, desde asados hasta salteados y rellenos.",
    image: pechuga,
  },
  {
    id: "3",
    name: "Lomo de Cerdo",
    price: 5000,
    type: "cerdo",
    description: "El lomo de cerdo es un corte magro y tierno de la espalda del cerdo, valorado por su sabor suave y versatilidad en una variedad de preparaciones culinarias, desde asados hasta filetes.",
    image: lomoCerdo,
  },
];

export default data;
