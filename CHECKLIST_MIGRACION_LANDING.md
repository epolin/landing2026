# 📋 CHECKLIST - MIGRACIÓN LANDING MUNDIAL 2026

## 🎯 **OBJETIVO**
Migrar el diseño completo de `landingmundial.html` a la estructura actual (`index.html` + archivos separados), manteniendo la funcionalidad del mapa interactivo con OpenStreetMap.

---

## 📅 **FECHA DE INICIO**: ___________
## ⏱️ **TIEMPO ESTIMADO TOTAL**: ~3.5 horas

---

## 🔒 **FASE 0: BACKUP Y PREPARACIÓN** (15 min)

### Backup de Archivos Actuales
- [ ] Crear backup de `index.html` → `index_backup_[fecha].html`
- [ ] Crear backup de `src/style.css` → `src/style_backup_[fecha].css`
- [ ] Crear backup de `src/main.js` → `src/main_backup_[fecha].js`
- [ ] Verificar que todos los archivos en `assets/` estén intactos
- [ ] Crear commit en git con estado actual (si aplica)

### Preparación del Entorno
- [ ] Verificar que `landingmundial.html` esté disponible como referencia
- [ ] Confirmar que las dependencias de Leaflet estén funcionando
- [ ] Probar que el servidor de desarrollo funciona correctamente
- [ ] Documentar versiones actuales de dependencias

---

## 🎨 **FASE 1: MIGRACIÓN DE ESTILOS CSS** (45 min)

### Extracción de Estilos
- [ ] Abrir `landingmundial.html` y localizar la sección `<style>`
- [ ] Copiar TODO el contenido CSS desde `/* ==================== VARIABLES Y ESTILOS BASE ==================== */`
- [ ] Hasta el final de los estilos antes del `</style>`

### Reemplazo en style.css
- [ ] Abrir `src/style.css`
- [ ] **REEMPLAZAR COMPLETAMENTE** todo el contenido actual
- [ ] Pegar los estilos copiados de `landingmundial.html`
- [ ] Verificar que no hay errores de sintaxis CSS

### Adaptaciones Específicas para Mapa
- [ ] Añadir estilos específicos para el mapa interactivo:
  ```css
  /* Estilos específicos para mapa funcional */
  .mapa-section { ... }
  .interactive-map { ... }
  .ubicaciones-list { ... }
  .ubicacion-item { ... }
  ```
- [ ] Adaptar colores del mapa a la nueva paleta:
  - Primario: `#7b003a`
  - Secundario: `#008754` 
  - Acento: `#fbd904`
  - Rojo: `#e60023`

### Verificación de Estilos
- [ ] Probar que los estilos cargan sin errores
- [ ] Verificar que las variables CSS funcionan correctamente
- [ ] Confirmar que no hay conflictos con estilos del mapa

---

## 📄 **FASE 2: ACTUALIZACIÓN DE HTML** (30 min)

### Estructura Base
- [ ] Abrir `landingmundial.html` y copiar la estructura `<head>`
- [ ] Actualizar `<head>` de `index.html` con:
  - [ ] Nuevos meta tags
  - [ ] Link a Google Fonts (Poppins)
  - [ ] Link a Remix Icons
  - [ ] **MANTENER** links a Leaflet CSS
  - [ ] **MANTENER** links a archivos externos (`src/style.css`, `src/main.js`)

### Navegación
- [ ] Reemplazar sección `<nav>` con la estructura del nuevo diseño
- [ ] Adaptar clases CSS para mantener funcionalidad móvil
- [ ] Verificar que los enlaces internos funcionan

### Secciones Principales
- [ ] **Hero Section**: Copiar estructura completa del nuevo diseño
- [ ] **Quiénes Somos**: Actualizar estructura y contenido
- [ ] **Oportunidad**: Integrar nueva sección con cards
- [ ] **Beneficios**: Adaptar al nuevo diseño
- [ ] **Formatos**: Añadir nueva sección completa

### Sección Especial - Ubicaciones/Mapa
- [ ] **MANTENER** la estructura del mapa actual:
  ```html
  <div class="interactive-map">
    <div id="map"></div>
  </div>
  ```
- [ ] Adaptar la estructura de la lista de ubicaciones al nuevo diseño
- [ ] Conservar todos los `data-location` attributes
- [ ] Actualizar estilos pero mantener funcionalidad

### Footer y Scripts
- [ ] Actualizar estructura del footer al nuevo diseño
- [ ] **MANTENER** script de Leaflet
- [ ] **MANTENER** referencia a `src/main.js`

---

## ⚙️ **FASE 3: ADAPTACIÓN DE JAVASCRIPT** (30 min)

### Revisión de Compatibilidad
- [ ] Verificar que todas las funciones del mapa están intactas
- [ ] Revisar selectores CSS que podrían haber cambiado
- [ ] Confirmar que las 22 ubicaciones siguen definidas

### Adaptaciones Necesarias
- [ ] Actualizar selectores de elementos que hayan cambiado de clase/ID
- [ ] Adaptar función de countdown a nueva estructura HTML
- [ ] Verificar compatibilidad con nuevo formulario de contacto
- [ ] Ajustar animaciones scroll si es necesario

### Funcionalidad del Mapa
- [ ] Probar que `initOpenStreetMap()` funciona correctamente
- [ ] Verificar que todos los markers se cargan
- [ ] Probar interactividad de ubicaciones
- [ ] Confirmar que el fullscreen del mapa funciona

### Nuevas Funcionalidades
- [ ] Adaptar o crear funciones para nuevos elementos del diseño
- [ ] Verificar que animaciones de scroll funcionan con nuevas secciones
- [ ] Probar que el menú móvil funciona correctamente

---

## 🔄 **FASE 4: INTEGRACIÓN DE CONTENIDO** (25 min)

### Textos y Contenido
- [ ] Actualizar todos los textos según `landingmundial.html`
- [ ] Verificar que los títulos coinciden exactamente
- [ ] Adaptar descripciones de secciones
- [ ] Mantener información de contacto actual

### Elementos Visuales
- [ ] Verificar que el carousel de logos funciona con nuevos estilos
- [ ] Adaptar imágenes de formatos publicitarios
- [ ] Confirmar que iconos Remix se muestran correctamente

### Formularios
- [ ] Adaptar formulario de contacto al nuevo diseño
- [ ] Verificar que validaciones funcionan
- [ ] Probar envío de formulario

### Sección de Ubicaciones
- [ ] Adaptar lista de ubicaciones a nuevos estilos
- [ ] Mantener toda la información de las 22 ubicaciones
- [ ] Verificar que estadísticas se muestran correctamente (22 ubicaciones, 400+ espacios)

---

## 🎯 **FASE 5: AJUSTES FINALES Y TESTING** (20 min)

### Responsive Design
- [ ] Probar diseño en mobile (< 768px)
- [ ] Probar diseño en tablet (768px - 1024px)
- [ ] Probar diseño en desktop (> 1024px)
- [ ] Verificar que el mapa es responsive

### Funcionalidad Completa
- [ ] Probar navegación entre secciones
- [ ] Verificar que countdown funciona
- [ ] Probar todas las animaciones de scroll
- [ ] Confirmar que mapa interactivo funciona en todos los dispositivos

### Optimización
- [ ] Verificar que no hay errores en consola
- [ ] Confirmar que todas las imágenes cargan
- [ ] Probar velocidad de carga
- [ ] Verificar que no hay estilos CSS no utilizados críticos

---

## 🔍 **FASE 6: VALIDACIÓN Y CORRECCIONES** (15 min)

### Linter y Validación
- [ ] Corregir errores de linter en HTML
- [ ] Añadir `rel="noopener"` a enlaces externos con `target="_blank"`
- [ ] Validar sintaxis CSS
- [ ] Verificar JavaScript sin errores

### Testing Final
- [ ] Probar todas las funcionalidades una vez más
- [ ] Verificar que el mapa funciona al 100%
- [ ] Confirmar que el diseño es idéntico a `landingmundial.html`
- [ ] Probar en diferentes browsers (Chrome, Firefox, Safari)

### Documentación
- [ ] Documentar cambios realizados
- [ ] Actualizar README si es necesario
- [ ] Crear commit final con todos los cambios

---

## ✅ **CRITERIOS DE ÉXITO**

### Funcionalidad Mantenida
- [ ] Mapa interactivo con 22 ubicaciones funciona perfectamente
- [ ] Todas las ubicaciones son clickeables y muestran información
- [ ] Carousel de logos de clientes funciona
- [ ] Formulario de contacto envía correctamente
- [ ] Countdown muestra tiempo correcto al Mundial 2026

### Diseño Implementado
- [ ] Paleta de colores idéntica a `landingmundial.html`
- [ ] Tipografía Poppins aplicada correctamente
- [ ] Iconos Remix funcionando
- [ ] Layout responsive idéntico
- [ ] Todas las secciones del nuevo diseño implementadas

### Rendimiento
- [ ] Página carga en menos de 3 segundos
- [ ] No hay errores en consola del navegador
- [ ] Mapa carga sin problemas
- [ ] Animaciones son fluidas

---

## 📝 **NOTAS ADICIONALES**

### Observaciones Durante la Migración:
```
[Espacio para anotar problemas encontrados, decisiones tomadas, etc.]

```

### Elementos Específicos a Vigilar:
- **Mapa**: Verificar que mantiene todas las 22 ubicaciones
- **Colores**: Asegurar paleta exacta del nuevo diseño
- **Responsive**: Especial atención al comportamiento móvil del mapa
- **Performance**: El mapa no debe afectar la velocidad de carga

---

## 🎉 **FINALIZACIÓN**

- [ ] **MIGRACIÓN COMPLETADA**
- [ ] **TODOS LOS TESTS PASADOS**
- [ ] **DISEÑO VALIDADO**
- [ ] **FUNCIONALIDAD CONFIRMADA**

**Fecha de finalización**: ___________
**Tiempo total empleado**: ___________

---

*Checklist creado el: [fecha]*
*Última actualización: [fecha]* 