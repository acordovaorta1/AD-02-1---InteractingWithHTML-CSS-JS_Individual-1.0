// 1. Cambiar el primer "Hola Mundo" por "Adiós"
document.getElementById("primero").textContent = "Adiós";

// 2. Cambiar el color de un encabezado a naranja
document.getElementById("naranja").style.color = "orange";

// 3. Añadir un encabezado con clic que cambie su color a marrón
const encabezadoClic = document.createElement("h1");
encabezadoClic.textContent = "Haz clic aquí";
encabezadoClic.style.cursor = "pointer";
encabezadoClic.addEventListener("click", function () {
  encabezadoClic.style.color = "brown";
});
document.body.appendChild(encabezadoClic);