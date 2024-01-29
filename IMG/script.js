//alert("Hola este es mi Javascript");
//alert("Hola este es mi Javascript");

let contenidoTitulo= "jejox"

let titulo = document.querySelector(".fuente-acento");
console.log(titulo)

titulo.innerHTML= contenidoTitulo

/* util para reutilizacion codigos, animacion*/
let textoTitulo =titulo.innerText;
console.log(textoTitulo)
if (textoTitulo == "CHAU"){
    titulo.innerHTML = "OTRO";
} else {
    console.log("no se cumple");
}

let cambio1 = "gym overtakkken" 

let cambio2 = "Proximamente nos ubicaremos en toda la Argentina"

let cambio3 = "Contamos con un sector de shopping"


let parrafo = document.querySelector (" .parrafo-1");
 function cambiarTexto(cambio1, cambio2, cambio3){
    let contenido = `Esta es la seccion principal del ${cambio1}y encontraras la descripcion del gimnasio!${cambio2}. Welcome to the overtaken´s gym oficial page.Here you found all our services that offer to you${cambio3}. Come on at train!`;
 
 return contenido;
 }
 parrafo.innerText = cambiarTexto(cambio1, cambio2, cambio3)

 let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
