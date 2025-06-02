# 🔧 Verificación GitHub Pages - Copa Mundial 2026

## ✅ URLs de Verificación

### **Página Principal**
- **URL**: https://enriquepolin.github.io/landing2026/
- **Debe mostrar**: Landing page completa con contador, mapa e imágenes

### **Página de Test**
- **URL**: https://enriquepolin.github.io/landing2026/test-github.html
- **Debe mostrar**: Test de todos los assets con estados de carga

## 🔍 Qué Verificar

### **1. Imágenes de Fondo**
- ✅ Hero section debe mostrar imagen de fondo
- ✅ Sección Beneficios debe mostrar imagen de fondo  
- ✅ Sección CTA Final debe mostrar imagen de fondo

### **2. Contador Regresivo**
- ✅ Debe mostrar tiempo real hasta 11 junio 2026
- ✅ Números deben actualizarse cada segundo
- ✅ Formato: XXX días : XX horas : XX minutos : XX segundos

### **3. Mapa Interactivo**
- ✅ Mapa debe cargar con tiles de OpenStreetMap
- ✅ 25+ pines deben aparecer en Monterrey
- ✅ Pines deben tener íconos personalizados
- ✅ Click en pin debe abrir popup con información
- ✅ Click en ubicación debe centrar mapa

### **4. Consola de Desarrollo**
**Abrir DevTools (F12) → Console**

Debe mostrar:
```
Detectando ambiente: { hostname: "enriquepolin.github.io", isGitHubPages: true, ... }
Actualizando rutas CSS, basePath: /landing2026
Rutas de imágenes: { heroBg: "/landing2026/bg/HeroBG.png", ... }
CSS dinámico aplicado
Copa Mundial de Fútbol Monterrey 2026 - Landing App iniciada correctamente con OpenStreetMap
```

## 🚨 Problemas Comunes y Soluciones

### **Si las imágenes no cargan:**
1. Verificar en DevTools → Network si las rutas son correctas
2. Las rutas deben empezar con `/landing2026/`
3. Verificar que los archivos estén en el repositorio

### **Si el contador no funciona:**
1. Verificar en Console si hay errores de JavaScript
2. Verificar que la fecha objetivo sea 11 junio 2026

### **Si el mapa no aparece:**
1. Verificar que Leaflet se carga correctamente
2. Revisar errores de mixed content (HTTP/HTTPS)
3. Verificar que OpenStreetMap permite HTTPS

## 🛠️ Comandos de Emergencia

### **Redeployar:**
```bash
npm run deploy
```

### **Probar local:**
```bash
npm run dev
```

### **Limpiar cache:**
```bash
rm -rf dist
npm run build
npm run deploy
```

## 📞 Estado Actual

- ✅ **Assets**: Configurados dinámicamente
- ✅ **GitHub Pages**: Configurado
- ✅ **HTTPS**: Compatible
- ✅ **OpenStreetMap**: HTTPS tiles
- ✅ **Leaflet**: CDN HTTPS
- ✅ **Rutas**: Detectadas automáticamente

## ⏰ Última Actualización
**Fecha**: 20 Diciembre 2024  
**Estado**: Listo para clientes ✅ 