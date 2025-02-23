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
        case "branding":
            return "Branding";
        case "diseno":
            return "Diseño";
        default:
            return "Servicio";
    }
}

// Función para obtener la descripción según el popupId
function getPopupDescription(popupId) {
    switch (popupId) {
        case "socialmedia":
            return "Gestionamos por completo tus redes sociales. Planificamos un calendario de publicaciones, diseñamos el contenido, lo publicamos. Interactuamos con tu audiencia. Analizamos datos para ver qué funciona mejor en tu cuenta.";
        case "publicidad":
            return "Creamos campañas de publicidad efectivas en redes sociales y Google Ads. Optimizamos las métricas para que consigas los mejores resultados con tus inversiones en publicidad.";
        case "branding":
            return "Desarrollamos tu identidad visual con un enfoque único. Creamos un Brand Book, diseñamos el logo, y establecemos los valores de tu marca para que te destaques en el mercado.";
        case "diseno":
            return "Diseñamos experiencias visuales impactantes. Desde la creación de contenido audiovisual hasta el diseño de sitios web, mejoramos la presencia de tu marca.";
        default:
            return "Descripción del servicio.";
    }
}
