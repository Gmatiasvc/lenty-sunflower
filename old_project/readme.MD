# Lenty Sunflower - Portfolio Web Dinámico 🌻

Este es mi portafolio personal, diseñado con un enfoque en la interactividad y la estética visual. El sitio presenta un sistema de temas dinámicos que use durante mi trayecto como desarrollador que cambian suavemente a medida que el usuario navega por las diferentes secciones.

## 🚀 Sitio en vivo!
¡Mira el sitio en acción! https://gmatiasvc.github.io/lenty-sunflower/

## ✨ Características Principales

- **Temas Dinámicos:** El esquema de colores (fondo, texto, acentos) cambia automáticamente según la sección visible (Hero, About, Skills, etc.), creando una experiencia inmersiva.
- **Diseño Responsive:** Completamente adaptado para dispositivos móviles, tablets y escritorio utilizando **Tailwind CSS**.
- **Internacionalización (i18n):** - Soporte completo para **7 idiomas**:
    - 🇪🇸 Español (Predeterminado)
    - 🇺🇸 Inglés
    - 🇮🇹 Italiano
    - 🇨🇳 Chino (Simplificado)
    - 🇧🇷 Portugués
    - 🇫🇷 Francés
    - 🇯🇵 Japonés
  - Cambio de idioma instantáneo sin recargar la página.
- **Iconografía:** Uso de `lucide-icons` para iconos ligeros y modernos.
- **Formulario de Contacto:** Diseño limpio y funcional.

## 🛠️ Tecnologías Usadas

- **HTML:** Estructura semántica.
- **CSS / Tailwind CSS:** Estilos y utilidades para el diseño responsivo y la gestión de paletas de colores.
- **JavaScript (Vanilla):** Lógica para:
  - El observador de intersección (Intersection Observer) para el cambio de temas.
  - El sistema de traducción y gestión del menú de idiomas.
  - Interactividad del menú móvil.
- **NPM:** Gestión de paquetes y dependencias de desarrollo.

## 📂 Estructura del Proyecto

El proyecto se estructura de la siguiente manera:

- `index.html`: Archivo principal HTML.
- `css/`:
    - `input.css`: Archivo CSS base con las directivas de Tailwind.
    - `tailwind.css`: Archivo CSS compilado de Tailwind.
    - `styles.css`: Archivo CSS final compilado/personalizado.
- `js/`: Lógica JavaScript (`dynamic.js`, etc.).
- `package.json`: Configuración de dependencias y scripts.

## 🌍 Cómo añadir más idiomas

El sistema de traducción está basado en un objeto JSON dentro del script principal en `index.html`. Para añadir un nuevo idioma:

1. Busca el objeto `translations` en el script.
2. Añade una nueva clave con el código del país (ej. `'de'` para alemán).
3. Copia la estructura de claves de otro idioma y traduce los valores.
4. Añade el botón correspondiente en el menú HTML `#language-menu`.

## 📦 Instalación y Desarrollo Local

Este proyecto utiliza `npm` para gestionar las dependencias de desarrollo (principalmente Tailwind CSS).

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/lenty-sunflower.git](https://github.com/tu-usuario/lenty-sunflower.git)
    cd lenty-sunflower
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js instalado y ejecuta:
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    Revisa los scripts en `package.json` para ver los comandos disponibles. Comúnmente:
    * Para compilar el CSS:
        ```bash
        npm run build
        ```
    * Simplemente abre `index.html` en tu navegador.

## 🎨 Paletas de Colores

El sitio utiliza variables CSS (`--color-bg`, `--color-text`, etc.) que se actualizan mediante JavaScript. Cada sección (`#hero`, `#about`, etc.) tiene sus propias definiciones de colores en el bloque `<style>` o en el CSS principal.

---
Desarrollado con ❤️ y Pilsen Trujillo por **Gerardo Venegas**.

Gracias Valentina por motivarme a hacer el proyecto de esta magnitud, te amo.