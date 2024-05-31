/* Beef */

import ojoDeBife from "../assets/beef/ojoDeBife.jpg";
import goulash from "../assets/beef/goulash.jpg";
import murillo from "../assets/beef/murillo.jpg";
import lomoRes from "../assets/beef/lomoRes.jpg";

/* Pork */

import lomoCerdo from "../assets/pork/lomoCerdo.jpg";
import codito from "../assets/pork/codito.jpg";
import tocinoBarriguero from "../assets/pork/tocinoBarriguero.jpg";

/* Chicken */

import piernaPernil from "../assets/chicken/piernaPernil.jpg";
import pechuga from "../assets/chicken/pechuga.jpg";

/* Others */

import arepa from "../assets/others/arepa.jpg";

export interface Products {
  id: string;
  name: string;
  price: number;
  type: string;
  description: string;
  image: string;
}

const data: Products[] = [
  /* Beef */

  {
    id: "1",
    name: "Ojo de Bife",
    price: 10000,
    type: "res",
    description:
      "El ojo de bife es un corte de carne jugoso y tierno del lomo de la res, conocido por su sabor intenso y su marmoleado, ideal para asados y parrillas.",
    image: ojoDeBife,
  },
  {
    id: "7",
    name: "Goulash",
    price: 6000,
    type: "res",
    description:
      "Es un corte específico de carne de res conocido por su versatilidad y ternura. Proveniente de la parte del cuarto trasero, este corte es ideal para guisos y estofados debido a su capacidad de absorber sabores y mantenerse jugoso durante la cocción. Su textura suave y sabor robusto lo hacen perfecto para preparar platos tradicionales y contemporáneos que deleitan el paladar.",
    image: goulash,
  },
  {
    id: "8",
    name: "Murillo",
    price: 6000,
    type: "res",
    description:
      "Proviene de la parte baja del lomo y es conocido por su suavidad y jugosidad. Este corte es ideal para una variedad de preparaciones culinarias, desde asados a la parrilla hasta guisos y estofados, ofreciendo una experiencia gastronómica deliciosa y satisfactoria.",
    image: murillo,
  },

  {
    id: "4",
    name: "Lomo de Res",
    price: 5000,
    type: "res",
    description:
      "El lomo de res es un corte magro y tierno de la espalda de la res, valorado por su sabor suave y versatilidad en una variedad de preparaciones culinarias, desde asados hasta filetes.",
    image: lomoRes,
  },

  /*Chicken*/
  {
    id: "2",
    name: "Pechuga",
    price: 4000,
    type: "pollo",
    description:
      "La pechuga de pollo es un corte magro y versátil de carne blanca, apreciado por su alto contenido de proteínas y su capacidad para adaptarse a diversas preparaciones culinarias, desde asados hasta salteados y rellenos.",
    image: pechuga,
  },
  {
    id: "9",
    name: "Pierna Pernil",
    price: 6000,
    type: "pollo",
    description:
      "La pierna pernil de pollo es una de las partes más jugosas y sabrosas del ave, conocida por su carne tierna y su piel crujiente cuando se asa o se fríe. Este corte es muy versátil, ideal para una amplia gama de preparaciones culinarias que van desde guisos y estofados hasta asados y barbacoas, proporcionando siempre un bocado delicioso y lleno de sabor.",
    image: piernaPernil,
  },
  /*Pork*/
  {
    id: "3",
    name: "Lomo de Cerdo",
    price: 5000,
    type: "cerdo",
    description:
      "El lomo de cerdo es un corte magro y tierno de la espalda del cerdo, valorado por su sabor suave y versatilidad en una variedad de preparaciones culinarias, desde asados hasta filetes.",
    image: lomoCerdo,
  },
  {
    id: "5",
    name: "Codito de Cerdo",
    price: 6000,
    type: "cerdo",
    description:
      "Este corte, apreciado por su sabor intenso y textura única, es perfecto para preparar guisos y estofados que se derriten en la boca, brindando una experiencia culinaria irresistible.",
    image: codito,
  },
  {
    id: "6",
    name: "Tocino Barriguero",
    price: 6000,
    type: "cerdo",
    description:
      "El tocino barriguero es un corte premium del cerdo, proveniente de la parte baja del vientre, conocido por su jugosidad y su irresistible sabor. Con su equilibrada combinación de carne y grasa, es ideal para darle un toque gourmet a cualquier platillo, ya sea en crujientes frituras, ahumados deliciosos.",
    image: tocinoBarriguero,
  },

  {
    id: "10",
    name: "Arepa con queso",
    price: 6000,
    type: "otros",
    description:
      "Rellena con queso derretido que aporta una textura cremosa y un sabor irresistible. Ideal para el desayuno, la cena o como un antojito a cualquier hora del día, la arepa con queso combina simplicidad y sabor en cada bocado.",
    image: arepa,
  },
];

export default data;
