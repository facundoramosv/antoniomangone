// Función para redirigir a WhatsApp con un mensaje predeterminado
function redirigirWhatsApp(servicio) {
    const numeroWhatsApp = "5491138275970";  // Número actualizado para WhatsApp
    const mensaje = `Hola, estoy interesado en saber más sobre sus servicios de ${servicio}. ¿Podría darme más información, por favor?`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// Funcionalidad del chatbot
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotContainer = document.getElementById("chatbot-container");

chatbotToggle.addEventListener("click", () => {
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex";
    } else {
        chatbotContainer.style.display = "none";
    }
});

const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

// Preguntas y respuestas predeterminadas
const respuestasPredeterminadas = {
    "herrería": "Realizamos trabajos de hierro y acero para refuerzos y diseños únicos. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "pintura": "Ofrecemos revestimientos interiores y exteriores para todo tipo de superficies. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "cerramientos": "Brindamos soluciones para espacios abiertos con estructuras resistentes. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "zinguería": "Instalamos canaletas y sistemas de drenaje eficientes. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "durlock": "Hacemos divisiones y cielorrasos con terminaciones perfectas. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "aire acondicionado": "Nos encargamos de la instalación, reparación y mantenimiento de equipos de climatización. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "plomería": "Realizamos instalación y reparación de cañerías y sanitarios. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "refacciones en general": "Hacemos mejoras y reparaciones para todo tipo de estructuras. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "electricidad": "Nos ocupamos de instalaciones eléctricas seguras y certificadas. Para más detalles, comunícate con nosotros al 11-3827-5970.",
    "reparación de cortinas plásticas": "Realizamos mantenimiento y reparación de cortinas enrollables. Para más detalles, comunícate con nosotros al 11-3827-5970."
};

// Manejo de los mensajes en el chat
chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const userMessage = chatbotInput.value.trim().toLowerCase();
        if (userMessage !== "") {
            addChatMessage("usuario", userMessage);
            chatbotInput.value = "";

            setTimeout(() => {
                let respuesta;
                if (respuestasPredeterminadas[userMessage]) {
                    respuesta = respuestasPredeterminadas[userMessage];
                } else {
                    respuesta = "No estoy seguro de poder ayudarte con eso. Por favor, comunícate con nosotros al 11-3827-5970 para más ayuda.";
                }
                addChatMessage("bot", respuesta);
            }, 500);
        }
    }
});

function addChatMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "usuario" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
