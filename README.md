# Boilerplate code para Alpine.js + Tailwind dentro de HTML

---

## Spike para Pop-Ups seguros

Este repositorio contiene un boilerplate de Node.js diseñado para implementar una vista que crea un Pop-Up robusto y seguro utilizando **Alpine.js**. Se crea un archivo tailwind.css a través de postcss y con ello se construye un archivo .css completo para la aplicación. Se implementa un pop-up seguro utilizando **Alpine.js** y **Tailwind CSS** compilado localmente (sin CDN).

---

### Pasos para compilar Tailwind:

```bash
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
# Edita el archivo tailwind.config.js (añade las rutas a tus .html, .ejs, etc.)
```

```bash
# Compila Tailwind:
npx tailwindcss -i ./public/css/tailwindHelper.css -o ./public/css/tailwind.css --minify
```

> Puedes eliminar `tailwind.css`, abrir el navegador en modo incógnito para verificar si se aplica correctamente y regenerarlo si es necesario.
