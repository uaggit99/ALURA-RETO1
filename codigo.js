var mensajeIngresado = document.querySelector("#mensaje");
var resultadoFinal = document.querySelector("#resultado");
var btnEncriptado = document.querySelector("#Encriptar");
var btnDesencriptar = document.querySelector("#Desencriptar");
var btnCopiar = document.querySelector("#copiar");
var btnLimpiar = document.querySelector("#limpiar");

mensajeIngresado.focus();
mostrar();
function Encriptar() {
  ocultar();

  var Texto = mensajeIngresado.value.toLowerCase();
  var textoEncriptado = Texto.replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll(" ", "Þ");
  resultadoFinal.value = textoEncriptado;
}
function Desencriptar() {
  var textoEncriptado = mensajeIngresado.value;
  var texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("Þ", " ");
  resultadoFinal.value = texto;
}
function Copiar() {
  var textoEncriptado = resultadoFinal.value;
  navigator.clipboard.writeText(textoEncriptado);
  mensajeIngresado.value = "";
  mensajeIngresado.focus();
  navigator.clipboard
    .readText()
    .then((texto) => {
      mensajeIngresado.value = texto;
    })
    .catch((error) => {
      alert("Hubo un error: ", error);
    });
}
function limpiar() {
  document.getElementById("mensaje").value = "";
  mensajeIngresado.focus();
  mostrar();
}

/*var mostar = document.querySelector(".seccion3");
var oculta = document.querySelector(".seccion2");*/

function mostrar() {
  document.querySelector("#seccion3").style.visibility = "hidden";
  document.querySelector("#seccion2").style.visibility = "visible";
}

function ocultar() {
  document.querySelector("#seccion2").style.visibility = "hidden";
  document.querySelector("#seccion3").style.visibility = "visible";
}

/*oculta.onclick = ocultar;
mostar.onclick = mostrar;*/

btnEncriptado.onclick = Encriptar;
btnDesencriptar.onclick = Desencriptar;
btnCopiar.onclick = Copiar;
btnLimpiar.onclick = limpiar;
