document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".popup-btn");
    const popups = {};

    // Crear popups dinámicamente
    buttons.forEach((button) => {
        let popupId = button.getAttribute("data-popup");

        if (!popups[popupId]) {
            // Crear div del popup
            let popup = document.createElement("div");
            popup.classList.add("popup-container");
            popup.id = popupId;
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-btn">&times;</span>
                    <h2>${getPopupTitle(popupId)}</h2>
                    <p>${getPopupDescription(popupId)}</p>
                </div>
            `;

            document.body.appendChild(popup);
            popups[popupId] = popup;
        }

        button.addEventListener("click", function () {
            popups[popupId].style.display = "flex";
        });
    });

    // Cerrar popups
    document.body.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-btn") || event.target.classList.contains("popup-container")) {
            event.target.closest(".popup-container").style.display = "none";
        }
    });
});

// Función para obtener el título según el popupId
function getPopupTitle(popupId) {
    switch (popupId) {
        case "socialmedia":
            return "Social Media";
        case "publicidad":
            return "Publicidad";
        case "diseno":
            return "Diseño";
        case "estrategia":
            return "Estrategia Digital";
        default:
            return "Servicio";
    }
}

// Función para obtener la descripción según el popupId
function getPopupDescription(popupId) {
    switch (popupId) {
        case "socialmedia":
            return "Gestionamos íntegramente tus <strong>redes sociales</strong>, creando contenido atractivo y alineado con tu marca. Diseñamos <strong>estrategias digitales</strong> para potenciar el crecimiento y la interacción, analizamos <strong>métricas</strong> para optimizar publicaciones y realizamos un <strong>community management</strong> activo para fortalecer el engagement.";
        case "publicidad":
            return "Maximizamos el impacto de tu inversión con estrategias de <strong>Publicidad</strong> efectivas. Gestionamos <strong>Social Media Ads</strong> en plataformas como Facebook, Instagram y TikTok, e implementamos <strong>Google Ads (SEM)</strong> para posicionarte en los primeros resultados. Optimizamos campañas ajustando segmentación, presupuesto y creatividades, y analizamos <strong>métricas</strong> y <strong>KPIs</strong> para mejorar el rendimiento continuamente.";
        case "diseno":
            return "Ofrecemos soluciones creativas para potenciar la identidad visual de tu marca. Diseñamos <strong>piezas gráficas</strong>, editamos <strong>Reels</strong> y creamos contenido audiovisual atractivo. Desarrollamos <strong>sitios web</strong> funcionales y estéticos, trabajamos en tu <strong>identidad visual</strong> y elaboramos tu <strong>manual de marca</strong> para garantizar coherencia en tu comunicación.";
        case "estrategia":
            return "Optimizamos tu presencia en línea y rendimiento digital. Mejoramos tu <strong>posicionamiento SEO</strong>, creamos campañas de <strong>Email Marketing</strong> efectivas. Implementamos <strong>automatización de procesos</strong> para mayor eficiencia y analizamos <strong>datos</strong> clave para optimizar resultados.";
        default:
            return "Descripción del servicio.";
    }
}
