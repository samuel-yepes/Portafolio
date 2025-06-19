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


// Espera a que el documento HTML se cargue completamente antes de ejecutar el código JavaScript
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('contactForm');
    const mensajeError = document.getElementById('mensajeError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if(nombre.trim() === ''){
            mensajeError.innerHTML = 'Ingresa tu nombre';
            return;
        }

        if(mensaje.trim() === ''){
            mensajeError.innerHTML = 'Ingresa un mensaje';
            return;
        }
        
        if(correo.trim() === ''){
            mensajeError.innerHTML = 'ingresa tu correo'
        }

        if(!validarEmail(correo)){
            mensajeError.innerHTML = 'Ingresa un correo electrónico válido';
            mensajeError.style.textAlign = 'center';
            mensajeError.style.color = 'red';
            mensajeError.style.fontSize = '1.2em';
            mensajeError.style.fontWeight = 'bold';
            mensajeError.style.marginTop = '10px';
            mensajeError.style.marginBottom = '10px';
            console.log('Correo inválido');
            return;
        }


    function validarEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
    });
});



// // Previene el comportamiento predeterminado del formulario, que es recargar la página al enviar
// event.preventDefault();

// // Crea un objeto FormData para recopilar datos del formulario
// const formData = new FormData(form);

// // Crea un objeto vacío donde se almacenarán los datos del formulario
// const formObject = {};

// // Itera sobre los pares clave-valor de formData y los agrega a formObject
// formData.forEach(function (value, key) {
//     formObject[key] = value;
// });

// // Obtiene el contenedor donde se mostrarán los mensajes de resultado
// const resultContainer = document.getElementById('result-container');

// // Limpia cualquier mensaje previo que pueda haber en el contenedor de resultados
// resultContainer.innerHTML = '';

// // Envía una solicitud HTTP POST al servidor utilizando la URL especificada en el atributo 'action' del formulario
// fetch(form.action, {
//     method: 'POST',  // Método de la solicitud HTTP
//     headers: {
//         'Accept': 'application/json',  // Especifica que se acepta una respuesta en formato JSON
//         'Content-Type': 'application/json'  // Indica que los datos enviados son JSON
//     },
//     body: JSON.stringify(formObject)  // Convierte el objeto formObject a una cadena JSON y lo envía en el cuerpo de la solicitud
// })
// // Maneja la respuesta de la solicitud
// .then(response => {
//     // Si la respuesta no es exitosa, lanza un error
//     if (!response.ok) {
//         throw new Error("Error en la respuesta del servidor");
//     }
//     // Convierte la respuesta a formato JSON y la devuelve
//     return response.json(); 
// })
// // Maneja los datos recibidos de la respuesta
// .then(data => {
//     // Si la respuesta tiene un campo 'ok' que es verdadero, muestra un mensaje de éxito
//     if (data.ok) {
//         resultContainer.innerHTML = '<p class="success-message">Mensaje enviado con éxito. ¡Gracias por contactarnos!</p>';
//     } else {
//         // Si la respuesta no es exitosa, muestra un mensaje de error
//         resultContainer.innerHTML = '<p class="error-message">Error al enviar el mensaje. Inténtelo nuevamente más tarde.</p>';
//     }
// })
// // Captura errores que ocurren durante el envío o manejo de la solicitud
// .catch(error => {
//     // Imprime el error en la consola para depuración
//     console.error('Error en la solicitud:', error);
//     // Muestra un mensaje de error al usuario
//     resultContainer.innerHTML = '<p class="error-message">Error al enviar el mensaje. Inténtelo nuevamente más tarde.</p>';
// });
