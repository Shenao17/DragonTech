
document.addEventListener("DOMContentLoaded", () => {
    // Elementos de la página
    const menuToggle = document.querySelector("#menu-toggle");
    const mainNavigation = document.querySelector("#main-navigation");
    const themeSelector = document.querySelector("#theme-selector");
    const currentYear = document.querySelector("#current-year");

    // 1. Menú de navegación para móviles
    if (menuToggle && mainNavigation) {
        const closeMenu = () => {
            mainNavigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = mainNavigation.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Cerrar menú de navegación"
                    : "Abrir menú de navegación"
            );
        });

        // Cerrar el menú después de elegir una sección
        mainNavigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        // Cerrar el menú con la tecla Escape
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    }

    // 2. Actualizar automáticamente el año del footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 3. Selector de tema visual
    if (themeSelector) {
        const applyTheme = (theme) => {
            if (theme === "light" || theme === "dark") {
                document.documentElement.setAttribute("data-theme", theme);
            } else {
                document.documentElement.removeAttribute("data-theme");
            }
        };

        themeSelector.addEventListener("change", () => {
            applyTheme(themeSelector.value);
        });

        applyTheme(themeSelector.value || "system");
    }
});
