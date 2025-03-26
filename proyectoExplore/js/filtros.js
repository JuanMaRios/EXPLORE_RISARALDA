const icono = document.getElementById("icono");
const barraLateral = document.querySelector(".barra-lateral");
const span = document.querySelector("span");
const labels = document.querySelectorAll("label");
const selects = document.querySelectorAll("select");
const boton = document.getElementById("envio");
const menu = document.querySelector(".menu-lateral");

menu.addEventListener("click", () => {
  barraLateral.classList.toggle("max-barra-lateral");
  if (barraLateral.classList.contains("max-barra-lateral")) {
    menu[0].style.display = "none";
    menu[1].style.display = "block";
  } else {
    menu[0].style.display = "block";
    menu[1].style.display = "none";
  }
});

icono.addEventListener("click", () => {
  barraLateral.classList.toggle("mini-barra-lateral");
  span.classList.toggle("oculto");
  boton.classList.toggle("oculto-boton");

  labels.forEach((label) => {
    label.classList.toggle("oculto");
  });

  selects.forEach((select) => {
    select.classList.toggle("oculto");
  });
});

// slider de tarjetas
const productContainer = [...document.querySelectorAll(".contenedor")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainer.forEach((item, i) => {
  let dimensiones = item.getBoundingClientRect();
  let cWidth = dimensiones.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += cWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= cWidth;
  });
});
