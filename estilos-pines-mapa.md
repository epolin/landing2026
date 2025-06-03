# 📍 Estilos de Pines del Mapa Interactivo

Este documento describe cómo están configurados los pines del mapa en cuanto a colores, animaciones y comportamiento según su categoría.

---

## 🔧 Estructura HTML Generada

Cada pin se representa con la siguiente estructura HTML:

```html
<div class="custom-marker-icon">
  <div class="circle-wrapper [tipo]">
    <img src="..." alt="..." />
  </div>
</div>
```

`[tipo]` se reemplaza por una de las siguientes categorías: `centro-comercial`, `edificio`, `estadio`, `aeropuerto`, `parque`, `hotel`.

---

## 🎨 Fondos por Categoría

Cada tipo de ubicación se representa con un fondo distinto (gradiente) y una sombra asociada:

| Categoría         | Clase CSS                    | Fondo                                              |
|-------------------|------------------------------|----------------------------------------------------|
| Centro comercial  | `.circle-wrapper.centro-comercial` | `linear-gradient(135deg, #4a4a4a, #5a5a5a)`        |
| Edificio          | `.circle-wrapper.edificio`         | `linear-gradient(135deg, #3a4a5c, #4a5a6c)`        |
| Estadio           | `.circle-wrapper.estadio`          | `linear-gradient(135deg, #5c4a3a, #6c5a4a)`        |
| Aeropuerto        | `.circle-wrapper.aeropuerto`       | `linear-gradient(135deg, #3a5c4a, #4a6c5a)`        |
| Parque            | `.circle-wrapper.parque`           | `linear-gradient(135deg, #4a5c3a, #5a6c4a)`        |
| Hotel             | `.circle-wrapper.hotel`            | `linear-gradient(135deg, #5c3a4a, #6c4a5a)`        |

Además, se aplica un `box-shadow` suave por tipo para reforzar la identidad visual.

---

## ✨ Animación de Pulso (*Ping*)

Todos los pines tienen una animación circular que simula un pulso visual.

### Definición del `@keyframes`:

```css
@keyframes mundial-pulse-new {
  0%   { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2);   opacity: 0; }
}
```

### Aplicación en `.circle-wrapper:before`:

```css
.circle-wrapper:before {
  content: "";
  position: absolute;
  top: -5px; left: -5px; right: -5px; bottom: -5px;
  border-radius: 50%;
  animation: mundial-pulse-new 2s infinite;
  z-index: 1;
}
```

Cada tipo tiene un color de fondo semitransparente para este efecto:

```css
.circle-wrapper.centro-comercial:before { background: #4a4a4a33; }
/* y así para cada tipo... */
```

---

## 🖱️ Efecto Hover

Cuando el usuario pasa el cursor sobre el marcador:

```css
.custom-marker-icon:hover .circle-wrapper {
  transform: scale(1.15);
  box-shadow: 0 6px 25px #0006;
}
```

Además, por tipo se refuerza el `box-shadow` con el color correspondiente:

```css
.custom-marker-icon:hover .circle-wrapper.estadio {
  box-shadow: 0 6px 25px #5c4a3a99;
}
```

---

## 📦 Tamaño del Ícono

- Ancho y alto: `48px`
- Ícono centrado con `flex`
- Esquinas redondeadas (`border-radius: 50%`)

---

## 🧩 Personalización

Para agregar una nueva categoría de pin:

1. Agrega la clase correspondiente en `circle-wrapper` en el HTML.
2. Define su `background` y `box-shadow` en CSS.
3. Opcionalmente, agrega color al pulso con `::before`.

---

## 🧠 Nota técnica

Estos estilos están pensados para usarse con Leaflet.js mediante `L.divIcon` y deben acompañarse de una configuración adecuada en JavaScript para asociar el tipo a la clase.
