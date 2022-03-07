let prices = {
  zanahoria: 24.56,
  tres_leches: 24.56,
  coco: 24.56,
  dulce: 24.56,
};

let stock = {
  zanahoria: 5,
  tres_leches: 9,
  coco: 2,
  dulce: 5,
};

const zanahoria = document.getElementById("zanahoria-stock");
zanahoria.textContent += `stock: ${stock["zanahoria"]}`;

const tres_leches = document.getElementById("tres_leches-stock");
tres_leches.textContent += `stock: ${stock["tres_leches"]}`;

const coco = document.getElementById("coco-stock");
coco.textContent += `stock: ${stock["coco"]}`;

const dulce = document.getElementById("dulce-stock");
dulce.textContent += `stock: ${stock["dulce"]}`;

