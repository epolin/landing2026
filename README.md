# 🏆 Landing Page Mundial 2026 Monterrey

Una landing page moderna y elegante con estilo Apple para comercializar espacios publicitarios durante el Mundial 2026 en Monterrey.

## ✨ Características

- **Diseño estilo Apple**: Interfaz limpia, moderna y minimalista
- **Transiciones suaves**: Animaciones fluidas con GSAP y Lenis
- **Mapa interactivo**: Integración con Google Maps y marcadores personalizados
- **Contador regresivo**: Hasta el inicio del Mundial 2026
- **Formulario funcional**: Con validación en tiempo real
- **Integración Calendly**: Para agendar reuniones
- **100% Responsive**: Optimizado para todos los dispositivos
- **Performance optimizada**: Carga rápida y experiencia fluida

## 🚀 Tecnologías

- **Vite**: Build tool moderna y rápida
- **Vanilla JavaScript ES6+**: Sin frameworks pesados
- **CSS Custom Properties**: Variables CSS modernas
- **GSAP**: Animaciones profesionales
- **Lenis**: Smooth scrolling avanzado
- **AOS**: Animate On Scroll
- **Google Maps API**: Mapas interactivos
- **Calendly**: Integración para citas

## 📦 Instalación

### 1. Clonar el repositorio
\`\`\`bash
git clone <tu-repositorio>
cd landing2026
\`\`\`

### 2. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 3. Configurar Google Maps API

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Google Maps JavaScript API
4. Crea una API key
5. Edita el archivo \`index.html\` y reemplaza \`TU_API_KEY\` con tu API key:

\`\`\`html
<script async defer 
    src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap&libraries=geometry,places">
</script>
\`\`\`

### 4. Configurar Calendly (Opcional)

1. Ve a tu cuenta de [Calendly](https://calendly.com/)
2. Copia el link de tu evento
3. Edita el archivo \`index.html\` y reemplaza \`https://calendly.com/tu-usuario\` con tu link:

\`\`\`html
<div class="calendly-inline-widget" data-url="https://calendly.com/tu-usuario"></div>
\`\`\`

### 5. Iniciar desarrollo
\`\`\`bash
npm run dev
\`\`\`

El sitio estará disponible en \`http://localhost:3000\`

## 🏗️ Build para producción

\`\`\`bash
npm run build
\`\`\`

Los archivos optimizados se generarán en la carpeta \`dist/\`

## 📁 Estructura del proyecto

\`\`\`
landing2026/
├── src/
│   ├── main.js              # JavaScript principal
│   └── style.css            # Estilos CSS
├── assets/                  # Imágenes y recursos
│   ├── logo-mundial-2026.svg
│   ├── hero-stadium.jpg
│   ├── formato-led.jpg
│   ├── formato-mupi.jpg
│   ├── formato-totem.jpg
│   ├── formato-activacion.jpg
│   └── cliente-*.png
├── index.html               # Página principal
├── package.json             # Dependencias
├── vite.config.js           # Configuración Vite
└── README.md               # Este archivo
\`\`\`

## 🎨 Personalización

### Colores
Edita las variables CSS en \`src/style.css\`:

\`\`\`css
:root {
  --primary-blue: #007AFF;
  --secondary-green: #34C759;
  --accent-gold: #FFD60A;
  /* ... más colores */
}
\`\`\`

### Ubicaciones del mapa
Modifica el array \`locations\` en \`src/main.js\`:

\`\`\`javascript
const locations = [
  {
    id: 'metropolitan',
    name: 'Metropolitan Center',
    position: { lat: 25.6866, lng: -100.3161 },
    description: 'Centro comercial premium...',
    traffic: '50K+ diarios',
    zone: 'Zona Centro'
  },
  // ... más ubicaciones
];
\`\`\`

### Contenido
- Edita el HTML directamente en \`index.html\`
- Las imágenes van en la carpeta \`assets/\`
- Los estilos están organizados por secciones en \`src/style.css\`

## 🔧 Funcionalidades principales

### Mapa interactivo
- **Marcadores personalizados**: Con iconos del Mundial 2026
- **Info windows**: Con información detallada de cada ubicación
- **Interactividad**: Click en la lista para enfocar en el mapa
- **Estilos personalizados**: Mapa con branding personalizado

### Contador regresivo
- **Tiempo real**: Se actualiza cada segundo
- **Animaciones**: Efecto visual al cambiar números
- **Responsive**: Se adapta a diferentes pantallas

### Formulario de contacto
- **Validación en tiempo real**: Email, teléfono, campos requeridos
- **Estados de carga**: Feedback visual durante el envío
- **Notificaciones**: Mensajes de éxito/error elegantes
- **Integración lista**: Para conectar con tu backend

### Animaciones
- **Scroll suave**: Con Lenis para experiencia premium
- **Parallax**: Efectos de profundidad en el hero
- **AOS**: Animaciones al hacer scroll
- **GSAP**: Animaciones avanzadas y fluidas

## 🌐 SEO Optimizado

- Meta tags completos (Open Graph, Twitter Cards)
- Estructura semántica HTML5
- URLs amigables
- Imágenes optimizadas
- Performance score alto

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: 480px, 768px, 1024px
- **Touch Friendly**: Botones y elementos optimizados para touch
- **Cross Browser**: Compatible con todos los navegadores modernos

## 🚀 Performance

- **Code Splitting**: Chunks optimizados
- **Lazy Loading**: Carga diferida de recursos
- **Minificación**: CSS y JS optimizados
- **Caching**: Headers de caché optimizados

## 🔒 Configuración de producción

### Variables de entorno
Crea un archivo \`.env\` para configuraciones sensibles:

\`\`\`env
GOOGLE_MAPS_API_KEY=tu_api_key_aqui
CALENDLY_URL=https://calendly.com/tu-usuario
FORM_ENDPOINT=https://tu-backend.com/api/contact
\`\`\`

### Deploy

#### Netlify
1. Conecta tu repositorio
2. Build command: \`npm run build\`
3. Publish directory: \`dist\`

#### Vercel
1. Conecta tu repositorio
2. Framework preset: \`Vite\`
3. Deploy automático en cada push

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push al branch (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

Tu Nombre - tu.email@ejemplo.com

Link del Proyecto: [https://github.com/tu-usuario/landing2026](https://github.com/tu-usuario/landing2026)

---

**Hecho con ❤️ para el Mundial 2026 en Monterrey** ⚽🇲🇽 