let $textoIngresado = document.querySelector(".texto-encriptador");
let $botonEncriptado = document.querySelector(".encriptar");
let $botonDesencriptado = document.querySelector(".desencriptar");
let textoIngresado;
let $condicion = document.querySelector(".condicion");
let $circleAlert = document.querySelector(".circle-alert");
let textoEncriptado;
let textoDesencriptado;
let textoParaCopiar;
let $containerMensaje = document.querySelector(".container-mensajes");
let buttonCopiar = document.createElement("button");
buttonCopiar.setAttribute("class", "button copiar");
buttonCopiar.textContent = "Copiar";



$textoIngresado.addEventListener("change", (event) => {
    textoIngresado = event.target.value;


})

mostrarEncriptado();


function mostrarEncriptado() {
    $botonEncriptado.addEventListener("click", () => {
        if (!/^[a-z0-9 ]*$/.test(textoIngresado)) {

            $condicion.style.color = "red";
            $circleAlert.setAttribute("fill", "red")
        } else if(textoIngresado.length === 0) {
         $containerMensaje.load();
        } 
        else {

            $condicion.style.color = "gray";
            $circleAlert.setAttribute("fill", "#495057");
            encriptar()
            $containerMensaje.innerHTML = "";
            let textoIngresado = document.createElement("p");
            textoIngresado.setAttribute("class", "texto-ingresado");
            let containerTexto = document.createElement("div");
            containerTexto.setAttribute("class", "container-texto-ingresado");
            textoIngresado.textContent = textoEncriptado;
            containerTexto.append(textoIngresado, buttonCopiar);
            $containerMensaje.append(containerTexto);
        }
    })

}
mostrarDesencriptado();
function mostrarDesencriptado() {
    $botonDesencriptado.addEventListener("click", () => {
        if (!/^[a-z0-9 ]*$/.test(textoIngresado)) {

            $condicion.style.color = "red";
            $circleAlert.setAttribute("fill", "red")
        } else {
            $condicion.style.color = "gray";
            $circleAlert.setAttribute("fill", "#495057");
            desencriptar()
            $containerMensaje.innerHTML = "";
            let textoIngresado = document.createElement("p");
            textoIngresado.setAttribute("class", "texto-ingresado");
            let containerTexto = document.createElement("div");
            containerTexto.setAttribute("class", "container-texto-ingresado");
            textoIngresado.textContent = textoDesencriptado;
            containerTexto.append(textoIngresado, buttonCopiar);
            $containerMensaje.append(containerTexto);
        }
    })
}
function desencriptar() {
    textoDesencriptado = textoIngresado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textoParaCopiar = textoDesencriptado;
}

function encriptar() {
    textoEncriptado = textoIngresado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    textoParaCopiar = textoEncriptado;
}
copiar();
function copiar() {
    buttonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(textoParaCopiar);
    })
}
