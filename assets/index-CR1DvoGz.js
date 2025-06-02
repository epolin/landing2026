(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=o(a);fetch(a.href,i)}})();class f{constructor(){this.map=null,this.markers={},this.basePath=this.getBasePath(),this.init()}getBasePath(){const e=window.location.hostname.includes("github.io"),o=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";return console.log("Detectando ambiente:",{hostname:window.location.hostname,isGitHubPages:e,isLocal:o,protocol:window.location.protocol,href:window.location.href}),e?"/landing2026":""}getAssetPath(e){return window.location.hostname.includes("github.io")?"/landing2026"+e:e}init(){this.initCountdown(),this.initContactForm(),this.initNavigation(),this.initAvailabilityAnimation(),this.initBasicAnimations(),this.initOpenStreetMap(),console.log("Copa Mundial de Fútbol Monterrey 2026 - Landing App iniciada correctamente con OpenStreetMap")}initOpenStreetMap(){if(typeof L>"u"){console.warn("Leaflet no está disponible, mostrando placeholder"),this.showMapPlaceholder();return}try{if(console.log("Inicializando OpenStreetMap Copa Mundial de Fútbol Monterrey 2026..."),!document.getElementById("map")){console.warn("Elemento del mapa no encontrado");return}this.map=L.map("map",{center:[25.6866,-100.3161],zoom:12,zoomControl:!0,attributionControl:!0}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Copa Mundial de Fútbol 2026',maxZoom:19,className:"mundial-map-tiles"}).addTo(this.map),this.addMundialLocations(),this.setupLocationInteractivity(),console.log("✅ Mapa OpenStreetMap Copa Mundial 2026 inicializado correctamente")}catch(e){console.error("Error inicializando OpenStreetMap:",e),this.showMapPlaceholder()}}addMundialLocations(){[{id:"arboleda",name:"Arboleda",position:[25.649714,-100.356173],description:"Centro comercial premium al aire libre con alta afluencia familiar y ambiente sofisticado.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"premium, aire libre, centro comercial, alta afluencia, familiar, San Pedro Garza García",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"puntovalle",name:"Punto Valle, The Town Center",position:[25.658751,-100.361623],description:"Centro comercial premium con excelente gastronomía y entretenimiento de primer nivel.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, premium, gastronomía, entretenimiento, premier, San Pedro Garza García",traffic:"Muy Alto",showInCards:!0,showInMap:!0},{id:"chroma",name:"Chroma San Pedro",position:[25.667833,-100.352369],description:"Centro comercial con arquitectura moderna, gastronomía y entretenimiento de alta calidad.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, gastronomía, entretenimiento, arquitectura moderna, alta afluencia, San Pedro Garza García",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"auriga",name:"Auriga San Pedro",position:[25.648843,-100.339116],description:"Centro comercial moderno enfocado en experiencias, gastronomía y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, experiencias, gastronomía, entretenimiento, moderno, San Pedro Garza García",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"fiesta",name:"Plaza Fiesta San Agustín",position:[25.64893,-100.336166],description:"Centro comercial familiar con alta afluencia, entretenimiento y cercanía al estadio.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, alta afluencia, familiar, entretenimiento, cerca del estadio, San Pedro Garza García",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"metropolitan",name:"Metropolitan Center",position:[25.650381,-100.333596],description:"Centro comercial premium de uso mixto con gastronomía exclusiva y alta afluencia.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, premium, uso mixto, gastronomía, alta afluencia, San Pedro Garza García",traffic:"Muy Alto",showInCards:!0,showInMap:!0},{id:"fashion",name:"Fashion Drive",position:[25.651295,-100.335131],description:"Centro comercial moderno con gastronomía, alta afluencia y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Pedro Garza García",tags:"centro comercial, moderno, gastronomía, alta afluencia, entretenimiento, San Pedro Garza García",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"galerias",name:"Galerías Valle Oriente",position:[25.638228,-100.313963],description:"Centro comercial familiar con gastronomía, entretenimiento y muy alta afluencia.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, familiar, gastronomía, entretenimiento, alta afluencia, Monterrey",traffic:"Muy Alto",showInCards:!0,showInMap:!0},{id:"citadel",name:"Plaza Citadel",position:[25.726138,-100.215214],description:"Centro comercial familiar con gastronomía, entretenimiento y fácil acceso.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Nicolás de los Garza",tags:"centro comercial, familiar, gastronomía, entretenimiento, accesible, San Nicolás de los Garza",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"serena",name:"Pueblo Serena",position:[25.576056,-100.24827],description:"Centro comercial al aire libre, familiar, pet friendly con gastronomía.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, aire libre, familiar, gastronomía, pet friendly, Monterrey",traffic:"Medio-Alto",showInCards:!0,showInMap:!0},{id:"anahuac",name:"Plaza Fiesta Anahuac",position:[25.742955,-100.313308],description:"Centro comercial familiar con gastronomía, entretenimiento y alta afluencia.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Nicolás de los Garza",tags:"centro comercial, familiar, gastronomía, entretenimiento, alta afluencia, San Nicolás de los Garza",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"ocampo",name:"Ocampo Corner",position:[25.666858,-100.320719],description:"Complejo de uso mixto moderno con gastronomía, tecnología y ubicación céntrica.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"uso mixto, moderno, gastronomía, tecnología, céntrico, Monterrey",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"mexico",name:"Plaza México",position:[25.667518,-100.313174],description:"Centro comercial histórico con productos artesanales, gastronomía y ubicación céntrica.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, histórico, artesanal, gastronomía, céntrico, Monterrey",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"via02",name:"Plaza Via 02",position:[25.696587,-100.380189],description:"Centro comercial moderno familiar con gastronomía y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, moderno, gastronomía, entretenimiento, familiar, Monterrey",traffic:"Medio-Alto",showInCards:!0,showInMap:!0},{id:"hierro",name:"Plaza Vía Puerta de Hierro",position:[25.744716,-100.421793],description:"Centro comercial moderno con gastronomía, entretenimiento y fácil acceso.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, moderno, gastronomía, entretenimiento, accesible, Monterrey",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"lafe",name:"Paseo La Fe",position:[25.719691,-100.218991],description:"Centro comercial al aire libre, pet friendly con gastronomía y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"San Nicolás de los Garza",tags:"centro comercial, aire libre, pet friendly, gastronomía, entretenimiento, San Nicolás de los Garza",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"tec",name:"Paseo Tec",position:[25.654433,-100.293758],description:"Centro comercial de uso mixto con gastronomía, entretenimiento y ubicación céntrica.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, uso mixto, gastronomía, entretenimiento, céntrico, Monterrey",traffic:"Alto",showInCards:!0,showInMap:!0},{id:"juarez",name:"Paseo Juárez",position:[25.650405,-100.112078],description:"Centro comercial familiar con gastronomía, entretenimiento y fácil acceso.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Ciudad Benito Juárez",tags:"centro comercial, familiar, gastronomía, entretenimiento, accesible, Ciudad Benito Juárez",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"nuevosur",name:"Plaza Nuevo Sur",position:[25.653529,-100.275301],description:"Centro comercial al aire libre moderno con gastronomía y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Monterrey",tags:"centro comercial, aire libre, gastronomía, entretenimiento, moderno, Monterrey",traffic:"Medio-Alto",showInCards:!0,showInMap:!0},{id:"molinete",name:"El Molinete",position:[25.662388,-100.149543],description:"Centro comercial al aire libre familiar con gastronomía y entretenimiento.",category:"Centro comercial",type:"centro-comercial",image:this.getAssetPath("/map-pins/CentroComercial.png"),municipio:"Guadalupe",tags:"centro comercial, aire libre, familiar, gastronomía, entretenimiento, Guadalupe",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"republica",name:"Torre República",position:[25.686054,-100.330094],description:"Edificio de uso mixto residencial moderno con amenidades y ubicación céntrica.",category:"Edificio",type:"edificio",image:this.getAssetPath("/map-pins/Edificio.png"),municipio:"Monterrey",tags:"uso mixto, residencial, amenidades, céntrico, moderno, Monterrey",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"citica",name:"Cítica",position:[25.669887,-100.334254],description:"Edificio de uso mixto con oficinas, gastronomía y ubicación céntrica.",category:"Edificio",type:"edificio",image:this.getAssetPath("/map-pins/Edificio.png"),municipio:"Monterrey",tags:"uso mixto, residencial, oficinas, gastronomía, céntrico, Monterrey",traffic:"Medio",showInCards:!0,showInMap:!0},{id:"estadio",name:"Estadio Monterrey",position:[25.669079,-100.24437],description:"Estadio moderno con alta afluencia, sede oficial de partidos del Mundial 2026.",category:"Estadio",type:"estadio",image:this.getAssetPath("/map-pins/Estadio.png"),municipio:"Guadalupe",tags:"estadio, deportivo, moderno, alta afluencia, cerca del estadio, Guadalupe",traffic:"Mundial",showInCards:!1,showInMap:!0,special:!0},{id:"aeropuerto",name:"Aeropuerto Internacional de Monterrey",position:[25.77462,-100.11158],description:"Aeropuerto internacional moderno, punto de entrada principal para visitantes del Mundial.",category:"Aeropuerto",type:"aeropuerto",image:this.getAssetPath("/map-pins/Aeropuerto.png"),municipio:"Apodaca",tags:"aeropuerto, internacional, moderno, alta afluencia, conectividad, Apodaca",traffic:"Internacional",showInCards:!1,showInMap:!0,special:!0},{id:"fanfestival",name:"Fan Festival (Parque Fundidora)",position:[25.67715,-100.28232],description:"Evento oficial al aire libre con alta afluencia, gastronomía y entretenimiento.",category:"Parque",type:"parque",image:this.getAssetPath("/map-pins/Parque.png"),municipio:"Monterrey",tags:"evento, aire libre, alta afluencia, gastronomía, entretenimiento, Monterrey",traffic:"Mundial",showInCards:!1,showInMap:!0,special:!0}].forEach(o=>{if(!o.showInMap)return;const t=L.divIcon({className:"custom-marker-icon",iconSize:[48,48],iconAnchor:[24,24],html:`
          <div class="circle-wrapper ${o.type}">
            <img src="${o.image}" alt="${o.name}" />
          </div>
        `}),a=L.marker(o.position,{icon:t}).addTo(this.map),i=`
        <div class="mundial-popup">
          <div class="mundial-popup-header">
            <h3>${o.name}</h3>
            <div class="mundial-popup-badge ${o.type}">${o.category}</div>
          </div>
          <p class="mundial-popup-description">${o.description}</p>
          <div class="mundial-popup-stats">
            <span class="mundial-stat">📍 ${o.municipio}</span>
            <span class="mundial-stat">🚶 ${o.traffic}</span>
            <span class="mundial-stat">${o.category}</span>
          </div>
        </div>
      `;a.bindPopup(i,{className:"mundial-popup-container",maxWidth:300,closeButton:!0}),this.markers[o.id]=a,a.on("click",()=>{o.showInCards?this.highlightLocationItem(o.id):o.special&&this.highlightSpecialCard(o.id)})})}setupLocationInteractivity(){document.querySelectorAll(".ubicacion-item").forEach(t=>{const a=t.getAttribute("data-location");t.addEventListener("click",()=>{if(this.markers[a]){const i=this.markers[a],n=i.getLatLng();this.map.flyTo(n,15,{animate:!0,duration:2,easeLinearity:.25,padding:[50,50]}),setTimeout(()=>{i.openPopup()},1e3),this.highlightLocationItem(a)}})}),document.querySelectorAll(".special-card").forEach(t=>{const a=t.getAttribute("data-location");t.addEventListener("click",()=>{if(this.markers[a]){const i=this.markers[a],n=i.getLatLng();this.map.flyTo(n,14,{animate:!0,duration:2,easeLinearity:.25,padding:[50,50]}),setTimeout(()=>{i.openPopup()},1e3),this.highlightSpecialCard(a)}})})}highlightLocationItem(e){document.querySelectorAll(".ubicacion-item").forEach(t=>{t.classList.remove("active")}),document.querySelectorAll(".special-card").forEach(t=>{t.classList.remove("active")});const o=document.querySelector(`.ubicacion-item[data-location="${e}"]`);o&&o.classList.add("active")}highlightSpecialCard(e){document.querySelectorAll(".ubicacion-item").forEach(t=>{t.classList.remove("active")}),document.querySelectorAll(".special-card").forEach(t=>{t.classList.remove("active")});const o=document.querySelector(`.special-card[data-location="${e}"]`);o&&o.classList.add("active")}showMapPlaceholder(){const e=document.getElementById("map");e&&(e.innerHTML=`
      <div style="
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #4A1B7F 0%, #00D4AA 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
        padding: 2rem;
      ">
        <div style="position: relative; z-index: 2;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
          <div style="font-weight: 700; font-size: 1.2rem; margin-bottom: 1rem;">Mapa Interactivo</div>
          <div style="font-size: 1rem; opacity: 0.9; margin-bottom: 1rem;">
            Ubicaciones premium en Monterrey
          </div>
          <div style="font-size: 0.9rem; opacity: 0.8; line-height: 1.4;">
            📋 OpenStreetMap + Leaflet<br>
            ✅ 100% Gratuito<br>
            🌍 Copa Mundial de Fútbol 2026
          </div>
        </div>
        <div style="
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        "></div>
      </div>
    `)}initBasicAnimations(){document.querySelectorAll(".floating-card").forEach((r,s)=>{r.style.animation="float 4s ease-in-out infinite",r.style.animationDelay=`${s*1.5}s`});const o={threshold:.1,rootMargin:"0px 0px -100px 0px"},t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.style.opacity="1",s.target.style.transform="translateY(0)")})},o);document.querySelectorAll("section").forEach(r=>{r.style.opacity="0",r.style.transform="translateY(50px)",r.style.transition="all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",t.observe(r)});const i=document.querySelector(".hero");i&&(i.style.opacity="1",i.style.transform="translateY(0)"),document.querySelectorAll(".stat-card, .beneficio-card, .formato-card").forEach(r=>{r.addEventListener("mouseenter",()=>{r.style.transform="translateY(-10px) scale(1.02)"}),r.addEventListener("mouseleave",()=>{r.style.transform="translateY(0) scale(1)"})})}initCountdown(){const e=new Date("2026-06-11T20:00:00Z").getTime(),o=()=>{const t=new Date().getTime(),a=e-t;if(a>0){const i=Math.floor(a/864e5),n=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60)),s=Math.floor(a%(1e3*60)/1e3);this.updateCountdownElement("days",i),this.updateCountdownElement("hours",n),this.updateCountdownElement("minutes",r),this.updateCountdownElement("seconds",s)}else{this.updateCountdownElement("days",0),this.updateCountdownElement("hours",0),this.updateCountdownElement("minutes",0),this.updateCountdownElement("seconds",0);const i=document.querySelector(".countdown-title");i&&(i.textContent="¡EL MUNDIAL 2026 YA COMENZÓ!")}};o(),setInterval(o,1e3)}updateCountdownElement(e,o){const t=document.getElementById(e);if(t){const a=e==="days"?o.toString().padStart(3,"0"):o.toString().padStart(2,"0");t.textContent!==a&&(t.textContent=a,t.style.transform="scale(1.15)",t.style.transition="transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",t.style.filter="brightness(1.3)",setTimeout(()=>{t.style.transform="scale(1)",t.style.filter="brightness(1)"},400))}}initContactForm(){const e=document.getElementById("contactForm");if(!e)return;e.addEventListener("submit",async t=>{t.preventDefault();const a=e.querySelector(".form-submit"),i=a.querySelector("span").textContent;try{this.setButtonLoading(a,!0),await this.simulateFormSubmission(),this.showNotification("¡Mensaje enviado correctamente! Te contactaremos pronto para discutir tu espacio publicitario en el Mundial 2026.","success"),e.reset()}catch(n){console.error("Error al enviar formulario:",n),this.showNotification("Error al enviar el mensaje. Por favor intenta de nuevo o contáctanos directamente.","error")}finally{this.setButtonLoading(a,!1,i)}}),e.querySelectorAll("input, textarea").forEach(t=>{t.addEventListener("blur",()=>this.validateField(t)),t.addEventListener("input",()=>this.clearFieldError(t))})}async simulateFormSubmission(){return new Promise(e=>setTimeout(e,1500))}setButtonLoading(e,o,t=""){const a=e.querySelector("span");o?(a.textContent="Enviando...",e.disabled=!0,e.style.opacity="0.7",e.style.transform="scale(0.98)"):(a.textContent=t||"Enviar Mensaje",e.disabled=!1,e.style.opacity="1",e.style.transform="scale(1)")}validateField(e){const o=e.value.trim();let t=!0,a="";switch(this.clearFieldError(e),e.type){case"email":o&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)&&(t=!1,a="Por favor ingresa un email válido");break;case"tel":o&&!/^[\+]?[0-9\s\-\(\)]+$/.test(o)&&(t=!1,a="Por favor ingresa un teléfono válido");break;default:e.required&&!o&&(t=!1,a="Este campo es obligatorio");break}return t||this.showFieldError(e,a),t}showFieldError(e,o){e.style.borderColor="#FF5722",e.style.boxShadow="0 0 0 3px rgba(255, 87, 34, 0.1)";let t=e.parentNode.querySelector(".field-error");t||(t=document.createElement("div"),t.className="field-error",t.style.color="#FF5722",t.style.fontSize="0.875rem",t.style.marginTop="0.25rem",t.style.fontWeight="500",e.parentNode.appendChild(t)),t.textContent=o}clearFieldError(e){e.style.borderColor="",e.style.boxShadow="";const o=e.parentNode.querySelector(".field-error");o&&o.remove()}showNotification(e,o="info"){const t=document.createElement("div");t.className=`notification notification-${o}`;const a=o==="success"?"#00D4AA":"#FF5722";t.innerHTML=`
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${a};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        max-width: 400px;
        animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: 600;
      ">
        ${e}
        <button onclick="this.parentElement.parentElement.remove()" style="
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">&times;</button>
      </div>
    `,document.body.appendChild(t),setTimeout(()=>{t.parentNode&&(t.style.animation="slideOutRight 0.3s ease-in-out",setTimeout(()=>t.remove(),300))},6e3)}initNavigation(){const e=document.querySelector(".nav");document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const i=t.getAttribute("href"),n=document.querySelector(i);if(n){const r=e.offsetHeight,s=n.offsetTop-r-20;window.scrollTo({top:s,behavior:"smooth"})}})}),window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")})}initAvailabilityAnimation(){const e=document.querySelector(".availability-progress");if(!e)return;const o=new IntersectionObserver(t=>{t.forEach(a=>{if(a.isIntersecting){let i=0;const n=72,r=2500,s=performance.now(),l=u=>{const g=u-s,m=Math.min(g/r,1),h=1-Math.pow(1-m,3);i=n*h,e.style.width=i+"%",m<1&&requestAnimationFrame(l)};requestAnimationFrame(l),o.unobserve(a.target)}})},{threshold:.5});o.observe(e.parentElement)}loadCalendly(){window.open("https://calendly.com/tu-usuario-calendly/reunion-mundial-2026","_blank","width=800,height=600")}loadCalendlyWidget(e){if(window.Calendly)this.renderCalendlyWidget(e);else{const o=document.createElement("script");o.src="https://assets.calendly.com/assets/external/widget.js",o.onload=()=>{this.renderCalendlyWidget(e)},document.head.appendChild(o)}}renderCalendlyWidget(e){const o=document.getElementById("calendly-widget");o.innerHTML="",window.Calendly.initInlineWidget({url:e,parentElement:o,prefill:{},utm:{utmCampaign:"Mundial 2026 Monterrey",utmSource:"Landing Page",utmMedium:"Website"}})}sendEmailBooking(){const e={to:"reservas@mundialmty2026.com",subject:"Solicitud de Reserva - Espacios Publicitarios Mundial 2026",body:this.generateEmailBody()},o=`https://mail.google.com/mail/?view=cm&fs=1&to=${e.to}&su=${encodeURIComponent(e.subject)}&body=${encodeURIComponent(e.body)}`;window.open(o,"_blank")}generateEmailBody(){return`Hola,

Me interesa reservar espacios publicitarios para la Copa Mundial de Fútbol Monterrey 2026.

Información de contacto:
- Nombre: [Tu nombre]
- Empresa: [Tu empresa]
- Teléfono: [Tu teléfono]
- Email: [Tu email]

Detalles de interés:
- Tipo de espacios: [Especificar: LED, MUPI, Totems, Activaciones]
- Ubicaciones preferidas: [Especificar ubicaciones]
- Presupuesto estimado: [Rango de presupuesto]
- Fechas de campaña: [Especificar fechas]

Comentarios adicionales:
[Agrega cualquier información adicional]

Saludos,
[Tu nombre]

---
Enviado desde: Copa Mundial de Fútbol Monterrey 2026 - Landing Page
Fecha: ${new Date().toLocaleDateString("es-MX")}`}openWhatsAppBooking(){const t=`https://wa.me/5218112345678?text=${encodeURIComponent(`¡Hola! Me interesa reservar espacios publicitarios para la Copa Mundial de Fútbol Monterrey 2026. 

¿Podrían proporcionarme información sobre:
- Ubicaciones disponibles
- Tipos de formatos publicitarios
- Precios y paquetes
- Proceso de reserva

¡Gracias!`)}`;window.open(t,"_blank")}prefillFormFromURL(){const e=new URLSearchParams(window.location.search);["nombre","empresa","email","telefono"].forEach(t=>{const a=e.get(t),i=document.getElementById(t);a&&i&&(i.value=decodeURIComponent(a))})}trackUserInteraction(e,o={}){const t={timestamp:new Date().toISOString(),action:e,details:o,page:"Copa Mundial 2026 Landing",userAgent:navigator.userAgent,url:window.location.href};console.log("Interacción registrada:",t)}updateCSSPaths(){const e=window.location.hostname.includes("github.io"),o=e?"/landing2026":"";console.log("🔧 Actualizando CSS para",e?"GitHub Pages":"Local"),console.log("📂 Base path:",o);const t=o+"/bg/HeroBG.png",a=o+"/bg/BeneficiosBG.png",i=o+"/bg/ReservaBG.png";console.log("🖼️ Rutas finales:",{heroBg:t,beneficiosBg:a,reservaBg:i});const n=document.createElement("style");n.textContent=`
      .hero {
        background: url('${t}') center center / cover no-repeat !important;
      }
      .beneficios {
        background: url('${a}') center center / cover no-repeat !important;
      }
      .cta-final, .reserva-calendly {
        background: url('${i}') center center / cover no-repeat !important;
      }
    `,document.head.appendChild(n),console.log("✅ CSS dinámico aplicado correctamente")}}const y=`
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`,d=document.createElement("style");d.textContent=y;document.head.appendChild(d);let c=null;window.loadCalendly=function(){c&&(c.loadCalendly(),c.trackUserInteraction("calendly_opened",{source:"contact_section"}))};window.sendEmailBooking=function(){c&&(c.sendEmailBooking(),c.trackUserInteraction("email_booking",{source:"contact_section"}))};window.openWhatsAppBooking=function(){c&&(c.openWhatsAppBooking(),c.trackUserInteraction("whatsapp_booking",{source:"contact_section"}))};document.addEventListener("DOMContentLoaded",()=>{console.log("DOM cargado, inicializando Copa Mundial de Fútbol Monterrey 2026 con OpenStreetMap..."),c=new f,c.prefillFormFromURL()});
