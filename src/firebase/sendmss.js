import chat from "./chat.js";

document.getElementById('chatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    // Enviar mensaje al chat
    chat.sendChatMessage(name, message);

    // Limpiar el formulario
    document.getElementById('chatForm').reset();

    alert('Message sent successfully.');
});
