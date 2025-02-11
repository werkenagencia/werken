




document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".services-list li");
    const serviceContent = document.getElementById("service-content");

    const servicesData = {
        redes sociales: [
            { title: "Contenido", desc: "Identidad visual y logotipos." },
            { title: "Engagement", desc: "Creación de contenido audiovisual." },
            { title: "Calendario de posteos", desc: "Edición y producción gráfica." },
            { title: "Copywriting", desc: "Diseño y desarrollo web." }
        ],
        publicidad: [
            { title: "Social Ads", desc: "Estrategia y planificación de contenido." },
            { title: "Google Ads", desc: "Optimización de interacción con el público." },
            { title: "Métricas", desc: "Gestión de redes sociales." },
            { title: "Email Marketing", desc: "Redacción de textos para redes." }
        ],
        comunicación: [
            { title: "Prensa", desc: "Publicidad en Facebook e Instagram." },
            { title: "Eventos", desc: "Campañas en Google y YouTube." },
            { title: "Email Marketing", desc: "Análisis y optimización de anuncios." }
        ],
        contenidos: [
            { title: "Institucional", desc: "Campañas de correo electrónico." },
            { title: "Redacción", desc: "Relaciones con medios y prensa." },
            { title: "Asesorías", desc: "Organización y producción de eventos." },
            { title: "Podcast", desc: "Marketing con creadores de contenido." }
        ]
        diseño: [
            { title: "Branding", desc: "Campañas de correo electrónico." },
            { title: "Videos", desc: "Relaciones con medios y prensa." },
            { title: "Imágenes", desc: "Organización y producción de eventos." },
            { title: "Web", desc: "Marketing con creadores de contenido." }
        ]
    };

    function updateContent(service) {
        serviceContent.classList.remove("show");
        setTimeout(() => {
            serviceContent.innerHTML = servicesData[service]
                .map(entry => `<p><span>${entry.title}</span> <small>${entry.desc}</small></p>`)
                .join("");
            serviceContent.classList.add("show");
        }, 300);
    }

    serviceItems.forEach(item => {
        item.addEventListener("click", function () {
            serviceItems.forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            updateContent(this.getAttribute("data-service"));
        });
    });
});