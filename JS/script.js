let text; // Variable que contendrá el texto a mostrar.
let index = 0; // Inicializa el índice que se utilizará para recorrer el texto, empezando desde el primer carácter.
let speed = 100; // Establece la velocidad de escritura (en milisegundos) entre cada carácter que se muestra.

// Función para detectar el idioma de la página (español o inglés)
function detectLanguage() {
    // Aquí puedes verificar el idioma en el URL o en alguna otra propiedad, por ejemplo:
    if (window.location.pathname.includes('english')) {
        text = "FULL-STACK WEB DEVELOPER"; // Texto en inglés
    } else {
        text = "DESARROLLADOR DE SOFTWARE"; // Texto en español
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    let formData = new FormData();
    formData.append("nombre", document.getElementById("nombre").value);
    formData.append("correo", document.getElementById("email").value);
    formData.append("mensaje", document.getElementById("mensaje").value);

    fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Mensaje enviado correctamente");
        document.getElementById("contactForm").reset(); // Limpiar formulario
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al enviar el mensaje.");
    });
});




function typeWriter() {
    if (index < text.length) { // Verifica si el índice actual es menor que la longitud del texto.
        document.getElementById("typing-text").textContent += text.charAt(index); 
        // Añade el carácter actual del texto al elemento con id "typing-text".
        index++; // Incrementa el índice para la siguiente iteración.
        setTimeout(typeWriter, speed); // Llama a la función `typeWriter` de nuevo después de un retraso de `speed`.
    }
}

window.onload = function() {
    detectLanguage(); // Llama a la función para determinar el idioma.
    setTimeout(typeWriter, 500); // Espera 500ms antes de empezar la animación de escritura.
};




