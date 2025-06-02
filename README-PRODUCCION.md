# 🚀 FIFA World Cup Monterrey 2026™ - GUÍA DE PRODUCCIÓN

## 📋 RESUMEN
Landing page 100% lista para producción. **NO requiere Python, Node.js ni ningún servidor especial**.

## 🌐 FUNCIONA EN CUALQUIER SERVIDOR WEB
- ✅ Apache
- ✅ Nginx  
- ✅ IIS (Windows)
- ✅ Hosting compartido
- ✅ CDN / Vercel / Netlify

---

## 📁 ARCHIVOS PARA SUBIR AL SERVIDOR

```
📂 SUBIR ESTOS ARCHIVOS:
├── index.html                 (Página principal)
├── src/
│   ├── style.css             (Estilos)
│   └── main.js               (JavaScript)
└── (favicon, imágenes, etc.)
```

---

## 🔧 INSTRUCCIONES DE INSTALACIÓN

### 1. **Subir archivos por FTP/cPanel**
```bash
# Subir todos los archivos a tu dominio:
# ejemplo: www.tuempresa.com/mundial2026/
```

### 2. **Configurar en subdirectorio (opcional)**
```bash
# Si quieres que esté en:
# www.tuempresa.com/mundial2026/
# Solo crea la carpeta y sube los archivos ahí
```

### 3. **Acceder a la página**
```bash
# Directo en el dominio:
https://www.tuempresa.com/

# O en subdirectorio:
https://www.tuempresa.com/mundial2026/
```

---

## ⚡ FUNCIONALIDADES QUE FUNCIONAN SIN SERVIDOR ESPECIAL

### ✅ **Funcionan perfectamente:**
- Diseño responsive completo
- Animaciones y transiciones
- Contador regresivo al Mundial
- Formulario de contacto (frontend)
- Navegación suave
- **Mapa interactivo OpenStreetMap** 🗺️
- Todas las secciones

### 🔧 **Requieren configuración adicional:**
- Envío real de formularios (necesitas endpoint)
- Integración Calendly (necesitas tu enlace)

---

## 🗺️ MAPA INTERACTIVO - SIN DEPENDENCIAS

El mapa usa **OpenStreetMap + Leaflet** (100% gratuito):
- ✅ Funciona sin API keys
- ✅ Sin límites de uso
- ✅ Sin costos
- ✅ Marcadores FIFA personalizados
- ✅ Interactividad completa

---

## 📝 PERSONALIZACIÓN RÁPIDA

### Cambiar ubicaciones del mapa:
```javascript
// En src/main.js, línea ~47
const locations = [
  {
    name: 'Tu Ubicación',
    position: [lat, lng],
    description: 'Tu descripción'
  }
];
```

### Cambiar fecha del contador:
```javascript
// En src/main.js, línea ~302
const worldCupDate = new Date('2026-06-11T00:00:00');
```

---

## 🎯 RESULTADO FINAL

**Una landing page profesional que funciona en cualquier servidor web normal, sin necesidad de Python, Node.js o tecnologías especiales.**

---

## 📞 SOPORTE

Si necesitas ayuda con la configuración en tu servidor específico, proporciona:
1. Tipo de servidor (Apache/Nginx/IIS)
2. Panel de control (cPanel/Plesk/otro)
3. Estructura de carpetas deseada 