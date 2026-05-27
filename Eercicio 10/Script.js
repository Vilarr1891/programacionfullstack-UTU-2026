function cambiartexto() {
document.getElementById("titulo").textContent = "¡Hola Mundo!";
} 

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "ahora el texto cambiado"; 
}

function cambiarImagen() {
    document.getElementById("imagen").src = "Barra_Amsterdam_Peñarol2.jpg";
}

function mostrarAlerta() {
    alert(document.getElementById("inputTexto").value);
}

function cambiarColor() {
    document.body.classList.toggle("Fondo");
}

function ColorOscuro() {
    document.body.classList.toggle("oscuro");
    
}