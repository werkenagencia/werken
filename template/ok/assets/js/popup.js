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
            return "- Gestionamos por completo tus <strong>redes sociales</strong>, asegurando una presencia digital coherente y efectiva.<br><br>-Nos encargamos de la <strong>creación de tu contenido</strong> atractivo y alineado con la identidad de tu marca, diseñamos una <strong>estrategia digital</strong> enfocada en el crecimiento y la interacción con tu audiencia.<br><br>-Realizamos un seguimiento continuo a través de <strong>reportes y métricas</strong> para ir optimizando el rendimiento de las publicaciones.<br><br>-Gestionamos la comunidad mediante un <strong>community management</strong> activo, respondiendo consultas, moderando comentarios y fomentando el engagement con tus seguidores.";
        case "publicidad":
            return "- Nuestro servicio de <strong>Publicidad</strong> está diseñado para maximizar el impacto de tu inversión y aumentar la visibilidad de tu marca.<br><br>-Creamos y gestionamos campañas de <strong>Social Media Ads</strong>, optimizando anuncios en plataformas como Facebook, Instagram y TikTok para llegar a la audiencia correcta.<br><br>-Implementamos estrategias de <strong>Google Ads (SEM)</strong>, para que aparezcas en los primeros resultados de búsqueda.<br><br>-Nos enfocamos en la <strong>optimización de campañas</strong>, ajustando segmentaciones, presupuestos y creatividades para mejorar el rendimiento.<br><br>-Analizamos constantemente <strong>métricas</strong> clave y realizamos un seguimiento detallado de los <strong>KPIs</strong>, para tomar decisiones basadas en datos y buscar los mejores resultados.";
        case "diseno":
            return "- Soluciones creativas para ayudar a tu marca a destacarse visualmente.<br><br>-Nos encargamos de crear <strong>piezas gráficas</strong> atractivas para tus campañas, redes sociales, y material promocionalo.<br><br>-Realizamos <strong>edición de Reels</strong> y contenido audiovisual que captura la atención de tu audiencia.<br><br>-Diseñamos tu <strong>sitio web</strong> adaptado a tus necesidades y objetivos, garantizando una navegación intuitiva y estética.<br><br>-Trabajamos en tu <strong>identidad visual</strong>, desarrollando una imagen coherente y profesional que represente tu esencia.<br><br>-Creamos un <strong>Brand Book</strong>, un manual de identidad que establece los lineamientos visuales y de comunicación para que tu marca mantenga una imagen consistente en todos los puntos de contacto.";
        case "estrategia":
            return "- Te ayudamos a optimizar cada aspecto de tu presencia en línea y mejorar el rendimiento.<br><br>-Realizamos <strong>Posicionamiento SEO</strong> para mejorar tu visibilidad en los motores de búsqueda y atraer tráfico orgánico de calidad.<br><br>-Desarrollamos campañas de <strong>Email Marketing</strong>, diseñando newsletters que capturen la atención de tus clientes y fomentan la fidelización.<br><br>-Trabajamos también en <strong>comunicación interna</strong>, creando estrategias que optimizan la interacción dentro de tu equipo para asegurar una colaboración fluida y productiva.<br><br>-Te ayudamos en la <strong>automatización de procesos</strong>, implementamos herramientas y flujos de trabajo que te permiten ahorrar tiempo, mejorando la eficiencia de tus operaciones.<br><br>-Realizamos <strong>análisis de datos</strong> para que puedas tomar decisiones basadas en información clave para optimizar los resultados.";
        default:
            return "Descripción del servicio.";
    }
}
