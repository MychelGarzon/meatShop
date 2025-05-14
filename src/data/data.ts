/* Beef */

// import ojoDeBife from "../assets/beef/ojoDeBife.jpg";
// import goulash from "../assets/beef/goulash.jpg";
// import murillo from "../assets/beef/murillo.jpg";
// import lomoRes from "../assets/beef/lomoRes.jpg";

/* Pork */

// import lomoCerdo from "../assets/pork/lomoCerdo.jpg";
// import codito from "../assets/pork/codito.jpg";
// import tocinoBarriguero from "../assets/pork/tocinoBarriguero.jpg";

/* Chicken */

// import piernaPernil from "../assets/chicken/piernaPernil.jpg";
// import pechuga from "../assets/chicken/pechuga.jpg";

/* Others */

// import arepa from "../assets/others/arepa.jpg";

/* Combos */

import bondiolaCostilla from "../assets/combos/bondiolaCostilla.png";
import puntaBondiola from "../assets/combos/puntaBondiola.png";
import puntaCostilla from "../assets/combos/puntaCostilla.png";
import lomoCostilla from "../assets/combos/lomoCostilla.png";
import lomoPunta from "../assets/combos/lomoPunta.png";
import polloCostilla from "../assets/combos/polloCostilla.png";
import polloLomo from "../assets/combos/polloLomo.png";
import polloPunta from "../assets/combos/polloPunta.png";
import polloBondiola from "../assets/combos/polloBondiola.png";
import lomoBondiola from "../assets/combos/lomoBondiola.png";
import pernil from "../assets/combos/pernil.png";
import pavoRelleno from "../assets/combos/pavoRelleno.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  type: string;
  unit: string;
  description: string;
  image: string;
  amount?: number;
  subtotal?: number;
  vat: number;
  itemVatTotal?: number;
}

const data: Product[] = [
  /* Beef */
  /*
  {
    id: "1",
    name: "Ojo de Bife",
    price: 10000,
    type: "res",
    description:
      "El ojo de bife es un corte de carne jugoso y tierno del lomo de la res, conocido por su sabor intenso y su marmoleado, ideal para asados y parrillas.",
    image: ojoDeBife,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "2",
    name: "Pechuga",
    price: 4000,
    type: "pollo",
    description:
      "La pechuga de pollo es un corte magro y versátil de carne blanca, apreciado por su alto contenido de proteínas y su capacidad para adaptarse a diversas preparaciones culinarias, desde asados hasta salteados y rellenos.",
    image: pechuga,
    unit: "Libra",
    vat: 0,
  },*/
  /*Pork*/
  /*
  {
    id: "3",
    name: "Lomo de Cerdo",
    price: 5000,
    type: "cerdo",
    description:
      "El lomo de cerdo es un corte magro y tierno de la espalda del cerdo, valorado por su sabor suave y versatilidad en una variedad de preparaciones culinarias, desde asados hasta filetes.",
    image: lomoCerdo,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "4",
    name: "Lomo de Res",
    price: 5000,
    type: "res",
    description:
      "El lomo de res es un corte magro y tierno de la espalda de la res, valorado por su sabor suave y versatilidad en una variedad de preparaciones culinarias, desde asados hasta filetes.",
    image: lomoRes,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "5",
    name: "Codito de Cerdo",
    price: 6000,
    type: "cerdo",
    description:
      "Este corte, apreciado por su sabor intenso y textura única, es perfecto para preparar guisos y estofados que se derriten en la boca, brindando una experiencia culinaria irresistible.",
    image: codito,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "6",
    name: "Tocino Barriguero",
    price: 6000,
    type: "cerdo",
    description:
      "El tocino barriguero es un corte premium del cerdo, proveniente de la parte baja del vientre, conocido por su jugosidad y su irresistible sabor. Con su equilibrada combinación de carne y grasa, es ideal para darle un toque gourmet a cualquier platillo, ya sea en crujientes frituras, ahumados deliciosos.",
    image: tocinoBarriguero,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "7",
    name: "Goulash",
    price: 6000,
    type: "res",
    description:
      "Es un corte específico de carne de res conocido por su versatilidad y ternura. Proveniente de la parte del cuarto trasero, este corte es ideal para guisos y estofados debido a su capacidad de absorber sabores y mantenerse jugoso durante la cocción. Su textura suave y sabor robusto lo hacen perfecto para preparar platos tradicionales y contemporáneos que deleitan el paladar.",
    image: goulash,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "8",
    name: "Murillo",
    price: 6000,
    type: "res",
    description:
      "Proviene de la parte baja del lomo y es conocido por su suavidad y jugosidad. Este corte es ideal para una variedad de preparaciones culinarias, desde asados a la parrilla hasta guisos y estofados, ofreciendo una experiencia gastronómica deliciosa y satisfactoria.",
    image: murillo,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "9",
    name: "Pierna Pernil",
    price: 6000,
    type: "pollo",
    description:
      "La pierna pernil de pollo es una de las partes más jugosas y sabrosas del ave, conocida por su carne tierna y su piel crujiente cuando se asa o se fríe. Este corte es muy versátil, ideal para una amplia gama de preparaciones culinarias que van desde guisos y estofados hasta asados y barbacoas, proporcionando siempre un bocado delicioso y lleno de sabor.",
    image: piernaPernil,
    unit: "lb.",
    vat: 0,
  },
  {
    id: "10",
    name: "Arepa con queso",
    price: 6000,
    type: "otros",
    description:
      "Rellena con queso derretido que aporta una textura cremosa y un sabor irresistible. Ideal para el desayuno, la cena o como un antojito a cualquier hora del día, la arepa con queso combina simplicidad y sabor en cada bocado.",
    image: arepa,
    unit: "Paquete",
    vat: 0,
  },*/
  /* Combos */

  {
    id: "101",
    name: "Ancheta Punta de Anca y Lomo de Res",
    price: 160000,
    type: "res",
    description:
      "Incluye: 750 gramos de Punta de Anca, 750 gramos de Lomo de Res, 5 arepas, 5 chorizos, 5 rellenas ",
    image: lomoPunta,
    unit: "/ porción para 5 personas",
    vat: 0,
  },

  {
    id: "106",
    name: "Ancheta Punta de Anca y Costillitas",
    price: 130000,
    type: "res",
    description:
      "Incluye: 750 gramos de Punta de Anca, 750 gramos de Costilla de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Perfecto para 5 personas.",
    image: puntaCostilla,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "108",
    name: "Ancheta Lomo de Res y Costillitas",
    price: 140000,
    type: "cerdo",
    description:
      "Incluye: 750 gramos de Lomo de Res, 750 gramos de Costilla de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Ideal para 5 personas.",
    image: lomoCostilla,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "122",
    name: "Ancheta Pollo y Punta de Anca",
    price: 120000,
    type: "pollo",
    description:
      "Incluye: 750 gramos de Pollo, 750 gramos de Punta de Anca, 5 arepas, 5 chorizos, 5 rellenas. Perfecto para 5 personas.",
    image: polloPunta,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "107",
    name: "Ancheta Punta de Anca y Bondiola",
    price: 130000,
    type: "cerdo",
    description:
      "Incluye: 750 gramos de Bondiola de Cerdo, 750 gramos de Punta de Anca, 5 arepas, 5 chorizos, 5 rellenas. Perfecto para 5 personas.",
    image: puntaBondiola,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "102",
    name: "Ancheta Pollo y Lomo de Res",
    price: 140000,
    type: "pollo",
    description:
      "Incluye: 750 gramos de Pollo, 750 gramos de Lomo de Res, 5 arepas, 5 chorizos, 5 rellenas. Ideal para 5 personas.",
    image: polloLomo,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "103",
    name: "Ancheta Pollo y Costilla de Cerdo",
    price: 100000,
    type: "pollo",
    description:
      "Incluye: 750 gramos de Pollo, 750 gramos de Costilla de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Ideal para 5 personas.",
    image: polloCostilla,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "104",
    name: "Ancheta Pollo y Bondiola de Cerdo",
    price: 100000,
    type: "pollo",
    description:
      "Incluye: 750 gramos de Pollo, 750 gramos de Bondiola de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Perfecto para 5 personas.",
    image: polloBondiola,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "109",
    name: "Ancheta Lomo de Res y Bondiola",
    price: 140000,
    type: "cerdo",
    description:
      "Incluye: 750 gramos de Lomo de Res, 750 gramos de Bondiola de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Perfecto para 5 personas.",
    image: lomoBondiola,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
  {
    id: "110",
    name: "Ancheta Costilla de Cerdo y Bondiola",
    price: 100000,
    type: "combo",
    description:
      "Incluye: 750 gramos de Costilla de Cerdo, 750 gramos de Bondiola de Cerdo, 5 arepas, 5 chorizos, 5 rellenas. Ideal para 5 personas.",
    image: bondiolaCostilla,
    unit: "/ porción para 5 personas",
    vat: 0,
  },
    {
    id: "120",
    name: "Pernil de cerdo -  Se vende por libra" ,
    price: 60000,
    type: "cerdo",
    description:
      "Pernil de cerdo artesanal, se vende por libra. Este producto no se vende como ancheta.",
    image: pernil,
    unit: "Libra",
    vat: 0,
  },
  {
  id: "121",
  name: "Pavo relleno -  Se vende por libra" ,
  price: 50000,
  type: "cerdo",
  description:
    "Pavo relleno, se vende por libra. Este producto no se vende como ancheta. Aproximadamente 5 porciones por libra",
  image: pavoRelleno,
  unit: "Libra",
  vat: 0,
}
];

export default data;
