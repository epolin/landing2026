
# Descripción Detallada de Cambios a la Landing Page

> **Nota importante:**  
> - **No** se deben modificar **ningún estilo** ni **colores** de los que ya están definidos en la landing actual.  
> - Todos los cambios son únicamente a nivel de contenido (texto, estructura de secciones, enlaces y formularios), manteniendo intactas las hojas de estilo, tipografías, paletas de colores y estilos de botones, recuadros o tipografía originales.

---

## 1. Sección Hero

1. **Título principal**  
   - **Mantener**:  
     ```
     TU MARCA EN EL CORAZÓN DEL MUNDIAL
     ```  
   - **Sin cambios de estilo ni color**.

2. **Subtítulo (debajo del título)**  
   - **Texto actual**:  
     ```
     OPORTUNIDAD HISTÓRICA
     ```  
   - **Reemplazar por**:  
     ```
     El evento deportivo más grande del mundo.
     ```  
   - **Acción**:  
     - Eliminar la línea “OPORTUNIDAD HISTÓRICA”.  
     - Insertar la nueva frase justo debajo de “TU MARCA EN EL CORAZÓN DEL MUNDIAL”.  
     - **No** alterar tipografía, color o tamaño, solo sustituir texto.

3. **Párrafo descriptivo principal**  
   - **Texto actual (tres líneas)**:  
     ```
     Una oportunidad cada 28 años.
     Las marcas más importantes del mundo ya están asegurando sus espacios premium.
     Únete a la élite del marketing deportivo mundial
     ```  
   - **Reemplazar por (un solo párrafo)**:  
     ```
     Conecta con millones de personas al anunciarte en nuestros espacios publicitarios durante el Mundial 2026.
     ```  
   - **Acción**:  
     - Quitar las tres líneas actuales.  
     - Insertar la frase nueva en un solo párrafo, con el mismo estilo tipográfico y color que el párrafo anterior.  

4. **Recuadro con esquinas redondeadas (callout)**  
   - **Texto actual**:  
     ```
     ¡Espacios Limitados - Reserva Antes de que se Agoten!
     72% Reservado
     ```  
   - **Reemplazar por**:  
     ```
     ¡Oportunidad única!
     ```  
   - **Acción**:  
     - Eliminar el bloque completo (texto y porcentaje).  
     - Conservar el recuadro con esquinas redondeadas y mismo color/degradado/borde que tenía.  
     - Insertar únicamente el texto “¡Oportunidad única!” dentro del recuadro, sin modificar padding, tipografía ni color de fondo o borde.

5. **Texto secundario bajo el recuadro**  
   - **Texto nuevo a insertar**:  
     ```
     La mayoría de las marcas ya están planeando su estrategia de comunicación para el mundial 2026, no te quedes atrás
     ```  
   - **Acción**:  
     - Añadir esta línea inmediatamente después del recuadro (“¡Oportunidad única!”).  
     - Utilizar el mismo estilo de párrafo (tipografía, tamaño y color) que el texto secundario de la hero actual.

6. **Botones de acción**  
   - **Botón 1 (izquierda)**  
     - **Texto actual**:  
       ```
        AGENDA TU REUNIÓN
       ```  
     - **Reemplazar por**:  
       ```
        Recibe más información
       ```  
     - **Acción**:  
       - Conservar exactamente el mismo estilo de botón (ícono, forma, bordes, colores, efectos hover).  
       - Solo cambiar la etiqueta de texto.

   - **Botón 2 (derecha)**  
     - **Texto actual**:  
       ```
        DESCARGA MEDIA KIT
       ```  
     - **Reemplazar por**:  
       ```
        Descarga nuestra presentación
       ```  
     - **Acción**:  
       - Mantener diseño, color, sombra y efectos tal como están, únicamente modificar la etiqueta.  

7. **Contador regresivo (“countdown”)**  
   - **Etiqueta superior del contador**  
     - **Texto actual**:  
       ```
       FALTAN PARA EL MUNDIAL 2026
       ```  
     - **Reemplazar por**:  
       ```
       Días restantes patada inicial Mundial 2026
       ```  
     - **Acción**:  
       - Sustituir exactamente esa frase.  
       - Conservar tipografía, color y alineación originales.

   - **Texto debajo del conteo numérico**  
     - **Texto actual (icono calendario + “AGENDA TU REUNIÓN”)**  
     - **Reemplazar por**:  
       ```
       Junio - Julio 2026
       ```  
     - **Acción**:  
       - Eliminar el ícono y el enlace actual.  
       - Mostrar la leyenda “Junio - Julio 2026” con el mismo estilo de texto secundario.  

---

## 2. Sección “¿Quiénes somos?” (Nueva)

> **Esta sección no existe en la versión actual de la landing, por lo que debe crearse A PARTIR DE CERO entre el Hero y la sección “Una oportunidad irrepetible”.**  
> **Asegurarse de respetar la misma estructura de grillas, espaciados y estilos de títulos/subtítulos que el resto de la página.**

1. **Contenedor principal**  
   - Crear un bloque con `id="quienes-somos"`.  
   - Alinear el contenido centrado horizontalmente (igual que las demás secciones).  
   - Respetar márgenes superior e inferior según secciones adyacentes.

2. **Título de sección**  
   - **Texto**:  
     ```
     V MEDIA GROUP
     ```  
   - **Estilo**:  
     - Mismo tamaño de fuente/tipografía que otros títulos de sección.  
     - Color de texto y mayúsculas/minúsculas iguales a los títulos actuales.

3. **Subtítulo**  
   - **Texto**:  
     ```
     Somos especialistas en medios publicitarios con más de 17 años de experiencia conectando marcas con audiencias y con espacios publicitarios privilegiados, en una de las solo 3 sedes mundialistas de México.
     ```  
   - **Estilo**:  
     - Mismo estilo de subtítulo de secciones anteriores (peso de fuente, interlineado, color).  
     - Alineación centrada o justificada según patrón.

4. **Frase introductoria (bajo subtítulo)**  
   - **Texto**:  
     ```
     Algunas empresas que confían en nuestro trabajo
     ```  
   - **Estilo**:  
     - Tipografía secundaria (tamaño un punto menor que el subtítulo, color gris oscuro o negro suave).

5. **Banner rotativo de logos**  
   - **Especificaciones**:  
     - Slider automático (autoplay) que muestre en loop los siguientes logotipos (PNG/SVG, altura homogeneizada a 60 px):  
       1. Heineken  
       2. BMW  
       3. The Home Depot  
       4. 7 Eleven  
       5. Apple  
       6. BBVA  
       7. Carls Jr.  
       8. Cemex  
       9. Cinépolis  
       10. Domino’s Pizza  
       11. Fox Sports  
       12. HEB  
       13. IKEA  
       14. KIA  
       15. LALA  
       16. LVMH  
       17. MercadoLibre  
       18. Mobil  
       19. Nissan  
       20. P&G  
     - Mostrar 5–6 logos simultáneos en desktop, al menos 3 en móvil.  
     - Controls mínimos (flechas discretas) o solo autoplay con loop infinito.  
     - **No** modificar colores de fondo; respetar el fondo de sección.

6. **Patrocinio oficial**  
   - **Texto**:  
     ```
     Además somos patrocinadores oficiales del Club de Fútbol Monterrey (Rayados)
     ```  
   - **Escudo de Rayados**:  
     - PNG/SVG con fondo transparente, tamaño aproximado 80 × 80 px.  
     - Ubicar a la derecha del texto o debajo, centrado.  
   - **Estilo**:  
     - Texto con mismo estilo que la “Frase introductoria” (mismo tamaño, color).

---

## 3. Sección “Beneficios para tu marca”

> **Esta sección existe en la landing actual, pero cambiaremos el contenido y la cantidad de tarjetas. Mantener grilla y espaciados actuales.**

1. **Contenedor principal**  
   - `section id="beneficios"`, respetar márgenes superiores e inferiores.

2. **Título de sección**  
   - **Texto (sin cambios)**:  
     ```
     Beneficios para tu marca
     ```  
   - **Estilo**:  
     - Mismo tipografía, color y tamaño que tenía originalmente.

3. **Tarjetas de beneficios**  
   - **Eliminar** las 3 tarjetas actuales (Ubicaciones Premium, Cercanía a Hoteles de Selecciones, Alto tráfico peatonal y vehicular).  
   - **Añadir 4 tarjetas nuevas** (ícono + encabezado + descripción breve, mismas dimensiones y estilo):
     1. **Visibilidad masiva**  
        - Ícono representativo (silueta de multitud o ojo).  
        - **Texto**:  
          ```
          Exposición ante millones de asistentes y espectadores antes, durante y después de cada partido.
          ```
     2. **Pico más alto de exposición**  
        - Ícono (gráfico de barras o flecha ascendente).  
        - **Texto**:  
          ```
          Aprovecha los momentos de mayor atención mediática y capitaliza cada minuto de transmisión.
          ```
     3. **Presencia en las ubicaciones más destacadas de la sede mundialista**  
        - Ícono (marcador de ubicación o estadio).  
        - **Texto**:  
          ```
          Anuncios ubicados en puntos estratégicos que garantizan visibilidad preferencial.
          ```
     4. **Conexión de forma única con millones de fans**  
        - Ícono (aficionados con banderas).  
        - **Texto**:  
          ```
          Interactúa directamente con aficionados mediante activaciones y pantallas interactivas.
          ```
   - **Acción**:  
     - Mantener estilo de tarjetas (sombra, padding, bordes redondeados) tal como las originales.  
     - Disponer en grilla responsiva (3 columnas en desktop, 2 en tablet, 1 en móvil).

4. **Texto final de sección**  
   - **Texto actual**:  
     ```
     Posiciona tu marca en el centro de la atención mundial durante el evento más importante del deporte.
     ```  
   - **Reemplazar por**:  
     ```
     No dejes pasar la oportunidad de posiciona tu marca en el evento más importante de la región en su historia.
     ```  
   - **Acción**:  
     - Sustituir la frase sin alterar estilo de párrafo (misma fuente, tamaño y color).

---

## 4. Sección “Una oportunidad irrepetible”

> **Equivalente a “UNA OPORTUNIDAD ÚNICA” en la versión actual. Cambian título, subtítulo, estadísticas y se agregan datos clave adicionales.**

1. **Contenedor principal**  
   - `section id="oportunidad"`, respetar márgenes y ancho máximo.

2. **Título de sección**  
   - **Texto actual**:  
     ```
     UNA OPORTUNIDAD ÚNICA
     ```  
   - **Reemplazar por**:  
     ```
     Una oportunidad irrepetible
     ```  
   - **Acción**:  
     - Cambiar solo el texto, sin alterar estilo (tipografía, color, tamaño).

3. **Subtítulo**  
   - **Texto actual**:  
     ```
     El Mundial llega a Monterrey por primera vez en 28 años. Esta es tu oportunidad de formar parte de la historia.
     ```  
   - **Reemplazar por**:  
     ```
     Es más que una oportunidad publicitaria, es una plataforma de impacto global
     ```  
   - **Acción**:  
     - Sustituir línea existente, manteniendo estilo de subtítulo.

4. **Tarjetas de estadísticas principales**  
   - **Eliminar** las 3 tarjetas actuales (“3M+ Visitantes Internacionales / 48 Países Participantes / 5 Semanas de Evento”).  
   - **Agregar 3 tarjetas nuevas** (mismo tamaño, color de fondo/borde y tipografía):
     1. **El mundial más grande en la historia**  
        - Ícono sugerido: trofeo o balón de fútbol.  
        - **Texto**:  
          ```
          El mundial más grande en la historia
          ```  
        - **Acción**:  
          - El número puede mostrarse como un guion largo “—” o reemplazarse con un icono destacado, manteniendo tipografía original para texto.

     2. **3M+ de visitantes esperados**  
        - Ícono: silueta de multitud.  
        - **Texto completo**:  
          ```
          3M+ de visitantes esperados
          ```

     3. **5+ semanas continuas de evento**  
        - Ícono: calendario o reloj.  
        - **Texto completo**:  
          ```
          5+ semanas continuas de evento
          ```

5. **Datos clave adicionales**  
   - Insertar bloque de texto justo debajo de las tres tarjetas nuevas:
     1. Subtítulo pequeño (negrita o cursiva):  
        ```
        Datos clave adicionales:
        ```
     2. **Bullet 1** (precedido por icono de info o asterisco):  
        ```
        El mundial regresa a México después de 40 años desde su última vez. México se convertirá en el país anfitrión con más mundiales en toda la historia.
        ```
     3. **Bullet 2** (icono similar):  
        ```
        Después de 12 años regresa el mundial al continente americano.
        ```
   - **Acción**:  
     - Mantener tipografía y color igual que las descripciones secundarias en la sección.  
     - Respetar espaciado entre líneas y márgenes de sección.

---

## 5. Sección “¿TU MARCA FORMARÁ PARTE DE LA HISTORIA?”

> **Corresponde a la sección de contacto/formulario en la versión actual, pero se reestructura y cambia contenido.**

1. **Contenedor principal**  
   - `section id="contacto"`, respetar márgenes.

2. **Título principal de sección**  
   - **Texto actual**:  
     ```
     ¿LISTO PARA FORMAR PARTE DE LA HISTORIA?
     ```  
   - **Reemplazar por** (dos líneas):  
     ```
     ¿TU MARCA FORMARÁ PARTE DE LA HISTORIA?
     ¿Tu marca está lista para destacar en el Mundial 2026?
     ```  
   - **Acción**:  
     - Sustituir frase original por ambas líneas.  
     - Mantener estilo de título (tipografía, color, espaciado).

3. **Subtítulo**  
   - **Texto actual**:  
     ```
     Contáctanos hoy mismo y asegura los mejores espacios publicitarios para la Copa Mundial de Fútbol Monterrey 2026.
     ```  
   - **Sin cambios**.

4. **Subsección “Envíanos un mensaje” (Formulario)**  
   - **Estructura actual**:  
     - Campo “Nombre completo”  
     - Campo “Correo electrónico”  
     - Campo “Empresa”  
     - Campo “Teléfono”  
     - Campo “Mensaje”  
     - Botón “ENVIAR MENSAJE”
   - **Cambios**:  
     1. **Campo “Nombre completo”**  
        - **Reemplazar** por **dos campos separados**:  
          - **“Nombre”** [* obligatoria] (placeholder `[Nombre]`)  
          - **“Apellido”** [* obligatoria] (placeholder `[Apellido]`)  
        - **Acción**:  
          - Dividir el input actual en dos.  
          - Mantener estilo y tamaño original; en desktop, colocarlos lado a lado, en móvil apilados.

     2. **Eliminar campo “Correo electrónico”**  
        - **Acción**:  
          - Quitar por completo ese input y su validación.

     3. **Campo “Empresa”**  
        - **Placeholder**:  
          ```
          [Nombre de tu empresa]
          ```  
        - **Acción**:  
          - Actualizar el placeholder.  
          - Mantener etiqueta y estilo.

     4. **Campo “Teléfono”**  
        - **Placeholder**:  
          ```
          [Teléfono]
          ```  
        - **Acción**:  
          - Cambiar placeholder; conservar validaciones existentes si las hay.

     5. **Campo “Mensaje”**  
        - **Placeholder actual**: “Cuéntanos sobre tu marca y objetivos para el Mundial 2026…”  
        - **Reemplazar por**:  
          ```
          Cuéntanos sobre tus objetivos para el mundial 2026 o consulta con nosotros cualquier duda.
          ```  
        - **Acción**:  
          - Solo modificar placeholder, mantener estilo del textarea.

     6. **Botón “Enviar Mensaje”**  
        - **Mantener texto**:  
          ```
          Enviar Mensaje
          ```  
        - **Acción**:  
          - Conservar estilo y ubicación exacta.

5. **Subsección “Información de contacto”**  
   - **Título (sin cambios)**:  
     ```
     Información de contacto
     ```  
   - **Reemplazar datos**:  
     1. **Correo electrónico**  
        - De: `mundial2026@publicidad.mx`  
        - A: `hola@vmediag.com`  
     2. **Teléfono**  
        - De: `+52 81 1234 5678`  
        - A: `+52 81 2110 1769`  
     3. **Ubicación**  
        - De: `Monterrey, Nuevo León, México`  
        - A: `San Pedro Garza García, Nuevo León, México`  
   - **Acción**:  
     - Sustituir solo los textos, conservar iconos y estilos originales.

6. **Subsección “Agenda una reunión con nuestro equipo”**  
   - **Texto actual del botón/enlace**:  
     ```
     Agenda una reunión
     ```  
   - **Cambio solicitado**:  
     - Mantener el enlace apuntando al mismo Calendly.  
     - **Opcional**: renombrar a:  
       ```
       Agenda una reunión con nuestro equipo
       ```  
   - **Acción**:  
     - Verificar que el `href` o función JavaScript siga enlazando al calendario de Calendly.  
     - No modificar colores, tipografía ni iconos del botón.

---

## 6. Pie de página (Footer)

> **Se modifica contenido del footer, pero se conserva el diseño de columnas, tipografía, iconos y colores originales.**

1. **Título y descripción general**  
   - **Título (sin cambios)**:  
     ```
     Copa Mundial de Fútbol Monterrey 2026
     ```  
   - **Descripción (reemplazar)**:  
     - **Texto actual**:  
       ```
       Espacios publicitarios premium para la Copa Mundial de Fútbol 2026 en Monterrey. Una oportunidad única para posicionar tu marca en el evento más importante del mundo.
       ```  
     - **Reemplazar por**:  
       ```
       Espacios publicitarios estratégicos para la Copa Mundial de Fútbol 2026 en sede mundialista Monterrey. Una oportunidad única para posicionar tu marca en el evento más importante del mundo.
       ```  
   - **Acción**:  
     - Sustituir “premium” por “estratégicos” y agregar “en sede mundialista” antes de “Monterrey”.  
     - Mantener tipografía, color y tamaño originales.

2. **Subsección “Información” (menú de navegación interno)**  
   - **Enlaces actuales**:  
     ```
     Oportunidad   Beneficios   Ubicaciones   Formatos   Contacto
     ```  
   - **Reemplazar por** (vincular a anclas):  
     1. **Inicio** → `#hero`  
     2. **¿Quiénes somos?** → `#quienes-somos`  
     3. **Beneficios para tu marca** → `#beneficios`  
     4. **Una oportunidad irrepetible** → `#oportunidad`  
     5. **¿Tu marca formará parte de la historia?** → `#contacto`  
   - **Acción**:  
     - Sustituir el texto de los enlaces manteniendo estilo (color, hover, tipografía).  
     - Definir los correspondientes `id` en cada sección.

3. **Subsección “¡Actúa ahora!” (nueva)**  
   - **Contenido a agregar**:  
     1. **Agendar una reunión** → enlace a `#contacto` (o `#agenda-reunion`)  
     2. **Enviar un mensaje** → enlace a `#contacto` (o `#envia-mensaje`)  
     3. **Contacto** → enlace a `#contacto`  
   - **Estilo**:  
     - Mostrar como lista horizontal en desktop (separados por “ | ”) y lista vertical en móvil.  
     - Mismo color de texto y tamaño que enlaces de “Información”.  
   - **Acción**:  
     - Insertar manteniendo márgenes e interlineado igual que en el resto del footer.

4. **Subsección “Síguenos” (redes sociales)**  
   - **Íconos a actualizar** (misma clase CSS/ícono, tamaño y espaciado):  
     1. **Instagram** → `https://www.instagram.com/vmediag`  
     2. **TikTok** → `https://www.tiktok.com/@vmediag`  
     3. **Facebook** → `https://www.facebook.com/vmediag`  
     4. **LinkedIn** → `https://mx.linkedin.com/company/vmediag`  
   - **Acción**:  
     - Reemplazar enlaces actuales, eliminar Twitter si existía, añadir TikTok.

5. **Copyright / Derechos reservados**  
   - **Texto actual**:  
     ```
     © 2024 Copa Mundial de Fútbol Monterrey 2026. Todos los derechos reservados.
     ```  
   - **Reemplazar por**:  
     ```
     © 2025 Copa Mundial de Fútbol Monterrey 2026. Todos los derechos reservados.
     ```  
   - **Acción**:  
     - Cambiar solo el año a “2025”.  
     - Conservar tipografía, color y estilo exacto.

---

## 7. Resumen de IDs/Anclas HTML Recomendadas

Para que los enlaces internos funcionen correctamente, asignar los siguientes IDs a cada sección:

- **Hero**:  
  ```html
  <section id="hero"> … </section>
  ```
- **¿Quiénes somos?**:  
  ```html
  <section id="quienes-somos"> … </section>
  ```
- **Beneficios para tu marca**:  
  ```html
  <section id="beneficios"> … </section>
  ```
- **Una oportunidad irrepetible**:  
  ```html
  <section id="oportunidad"> … </section>
  ```
- **¿Tu marca formará parte de la historia?**:  
  ```html
  <section id="contacto"> … </section>
  ```

---

## 8. Notas Finales

- **Estilos y colores**:  
  - Todos los estilos CSS, paletas de color, tipografías, espaciados, sombras y efectos hover existentes **no deben ser modificados**.  
  - Cualquier cambio se limita exclusivamente al texto, a la estructura interna de párrafos, botones y formularios, y a la inclusión de nuevos bloques (como la sección “¿Quiénes somos?”).

- **Imágenes/Logos**:  
  - Asegurarse de que los **logos para el banner rotativo** sean de buena calidad (PNG/SVG) y todos tengan la misma altura máxima para mantener uniformidad.  
  - El **escudo de Rayados** debe respetar su versión oficial (no cambiar colores ni aplicar filtros).

- **Responsividad**:  
  - Todos los nuevos bloques (tarjetas, slider de logos, formulario dividido, subsección “¡Actúa ahora!”) deben adaptarse a dispositivos móviles usando la misma lógica de grillas y media queries ya definidas.

- **Enlaces internos**:  
  - Verificar que todos los enlaces que apuntan a IDs (`#hero`, `#quienes-somos`, etc.) hagan scroll suave a la sección correcta, sin modificar estilos de “hover” o “visited”.
