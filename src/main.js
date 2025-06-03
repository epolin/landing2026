// ================================
// COPA MUNDIAL DE FÚTBOL MONTERREY 2026 - JavaScript Oficial
// OpenStreetMap + Leaflet (100% Gratuito)
// ================================

// Variables globales
let map = null;
let markers = {};

// Función para obtener la ruta base según el ambiente
function getBasePath() {
  const isGitHubPages = window.location.hostname.includes('github.io');
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  console.log('Detectando ambiente:', {
    hostname: window.location.hostname,
    isGitHubPages,
    isLocal,
    protocol: window.location.protocol,
    href: window.location.href
  });
  
  if (isGitHubPages) {
    return '/landing2026';
  }
  return '';
}

// Función helper para construir rutas de assets
function getAssetPath(path) {
  // Para GitHub Pages, siempre usar la ruta con landing2026
  if (window.location.hostname.includes('github.io')) {
    return '/landing2026' + path;
  }
  // Para local, ruta directa
  return path;
}

// Función de inicialización principal
function initApp() {
  // Inicializar funciones básicas
  updateCSSPaths();
  initCountdown();
  initContactForm();
  initNavigation();
  initAvailabilityAnimation();
  initBasicAnimations();
  initOpenStreetMap();
  
  console.log('Copa Mundial de Fútbol Monterrey 2026 - Landing App iniciada correctamente con OpenStreetMap');
}

// ================================
// OpenStreetMap + Leaflet Integration
// ================================
function initOpenStreetMap() {
  // Esperar a que Leaflet esté disponible
  if (typeof L === 'undefined') {
    console.warn('Leaflet no está disponible, mostrando placeholder');
    showMapPlaceholder();
    return;
  }

  try {
    console.log('Inicializando OpenStreetMap Copa Mundial de Fútbol Monterrey 2026...');
    
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.warn('Elemento del mapa no encontrado');
      return;
    }

    // Crear el mapa centrado en Monterrey
    map = L.map('map', {
      center: [25.6866, -100.3161], // Monterrey, México
      zoom: 12,
      zoomControl: true,
      attributionControl: true
    });

    // Agregar capa de tiles de OpenStreetMap con estilo personalizado
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Copa Mundial de Fútbol 2026',
      maxZoom: 19,
      className: 'mundial-map-tiles'
    }).addTo(map);

    // Ubicaciones Copa Mundial 2026 Monterrey
    addMundialLocations();
    
    // Configurar interactividad con la lista de ubicaciones
    setupLocationInteractivity();

    console.log('✅ Mapa OpenStreetMap Copa Mundial 2026 inicializado correctamente');

  } catch (error) {
    console.error('Error inicializando OpenStreetMap:', error);
    showMapPlaceholder();
  }
}

function addMundialLocations() {
  // Ubicaciones reales del CSV con coordenadas exactas de OpenStreetMap
  const locations = [
    // Centros Comerciales
    {
      id: 'arboleda',
      name: 'Arboleda',
      position: [25.649714, -100.356173],
      description: 'Centro comercial premium al aire libre con alta afluencia familiar y ambiente sofisticado.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'premium, aire libre, centro comercial, alta afluencia, familiar, San Pedro Garza García',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'puntovalle',
      name: 'Punto Valle, The Town Center',
      position: [25.658751, -100.361623],
      description: 'Centro comercial premium con excelente gastronomía y entretenimiento de primer nivel.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, premium, gastronomía, entretenimiento, premier, San Pedro Garza García',
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'chroma',
      name: 'Chroma San Pedro',
      position: [25.667833, -100.352369],
      description: 'Centro comercial con arquitectura moderna, gastronomía y entretenimiento de alta calidad.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, gastronomía, entretenimiento, arquitectura moderna, alta afluencia, San Pedro Garza García',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'auriga',
      name: 'Auriga San Pedro',
      position: [25.648843, -100.339116],
      description: 'Centro comercial moderno enfocado en experiencias, gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, experiencias, gastronomía, entretenimiento, moderno, San Pedro Garza García',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'fiesta',
      name: 'Plaza Fiesta San Agustín',
      position: [25.64893, -100.336166],
      description: 'Centro comercial familiar con alta afluencia, entretenimiento y cercanía al estadio.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, alta afluencia, familiar, entretenimiento, cerca del estadio, San Pedro Garza García',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'metropolitan',
      name: 'Metropolitan Center',
      position: [25.650381, -100.333596],
      description: 'Centro comercial premium de uso mixto con gastronomía exclusiva y alta afluencia.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, premium, uso mixto, gastronomía, alta afluencia, San Pedro Garza García',
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'fashion',
      name: 'Fashion Drive',
      position: [25.651295, -100.335131],
      description: 'Centro comercial moderno con gastronomía, alta afluencia y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Pedro Garza García',
      tags: 'centro comercial, moderno, gastronomía, alta afluencia, entretenimiento, San Pedro Garza García',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'galerias',
      name: 'Galerías Valle Oriente',
      position: [25.638228, -100.313963],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y muy alta afluencia.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, familiar, gastronomía, entretenimiento, alta afluencia, Monterrey',
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'citadel',
      name: 'Plaza Citadel',
      position: [25.726138, -100.215214],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y fácil acceso.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Nicolás de los Garza',
      tags: 'centro comercial, familiar, gastronomía, entretenimiento, accesible, San Nicolás de los Garza',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'serena',
      name: 'Pueblo Serena',
      position: [25.576056, -100.24827],
      description: 'Centro comercial al aire libre, familiar, pet friendly con gastronomía.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, aire libre, familiar, gastronomía, pet friendly, Monterrey',
      traffic: 'Medio-Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'anahuac',
      name: 'Plaza Fiesta Anahuac',
      position: [25.742955, -100.313308],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y alta afluencia.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Nicolás de los Garza',
      tags: 'centro comercial, familiar, gastronomía, entretenimiento, alta afluencia, San Nicolás de los Garza',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'ocampo',
      name: 'Ocampo Corner',
      position: [25.666858, -100.320719],
      description: 'Complejo de uso mixto moderno con gastronomía, tecnología y ubicación céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'uso mixto, moderno, gastronomía, tecnología, céntrico, Monterrey',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'mexico',
      name: 'Plaza México',
      position: [25.667518, -100.313174],
      description: 'Centro comercial histórico con productos artesanales, gastronomía y ubicación céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, histórico, artesanal, gastronomía, céntrico, Monterrey',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'via02',
      name: 'Plaza Via 02',
      position: [25.696587, -100.380189],
      description: 'Centro comercial moderno familiar con gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, moderno, gastronomía, entretenimiento, familiar, Monterrey',
      traffic: 'Medio-Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'hierro',
      name: 'Plaza Vía Puerta de Hierro',
      position: [25.744716, -100.421793],
      description: 'Centro comercial moderno con gastronomía, entretenimiento y fácil acceso.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, moderno, gastronomía, entretenimiento, accesible, Monterrey',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'lafe',
      name: 'Paseo La Fe',
      position: [25.719691, -100.218991],
      description: 'Centro comercial al aire libre, pet friendly con gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'San Nicolás de los Garza',
      tags: 'centro comercial, aire libre, pet friendly, gastronomía, entretenimiento, San Nicolás de los Garza',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'tec',
      name: 'Paseo Tec',
      position: [25.654433, -100.293758],
      description: 'Centro comercial de uso mixto con gastronomía, entretenimiento y ubicación céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, uso mixto, gastronomía, entretenimiento, céntrico, Monterrey',
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'juarez',
      name: 'Paseo Juárez',
      position: [25.650405, -100.112078],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y fácil acceso.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Ciudad Benito Juárez',
      tags: 'centro comercial, familiar, gastronomía, entretenimiento, accesible, Ciudad Benito Juárez',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'nuevosur',
      name: 'Plaza Nuevo Sur',
      position: [25.653529, -100.275301],
      description: 'Centro comercial al aire libre moderno con gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Monterrey',
      tags: 'centro comercial, aire libre, gastronomía, entretenimiento, moderno, Monterrey',
      traffic: 'Medio-Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'molinete',
      name: 'El Molinete',
      position: [25.662388, -100.149543],
      description: 'Centro comercial al aire libre familiar con gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      image: getAssetPath('/map-pins/CentroComercial.png'),
      municipio: 'Guadalupe',
      tags: 'centro comercial, aire libre, familiar, gastronomía, entretenimiento, Guadalupe',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    // Edificios de uso mixto
    {
      id: 'republica',
      name: 'Torre República',
      position: [25.686054, -100.330094],
      description: 'Edificio de uso mixto residencial moderno con amenidades y ubicación céntrica.',
      category: 'Edificio',
      type: 'edificio',
      image: getAssetPath('/map-pins/Edificio.png'),
      municipio: 'Monterrey',
      tags: 'uso mixto, residencial, amenidades, céntrico, moderno, Monterrey',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'citica',
      name: 'Cítica',
      position: [25.669887, -100.334254],
      description: 'Edificio de uso mixto con oficinas, gastronomía y ubicación céntrica.',
      category: 'Edificio',
      type: 'edificio',
      image: getAssetPath('/map-pins/Edificio.png'),
      municipio: 'Monterrey',
      tags: 'uso mixto, residencial, oficinas, gastronomía, céntrico, Monterrey',
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    // Ubicaciones especiales Copa Mundial 2026
    {
      id: 'estadio',
      name: 'Estadio Monterrey',
      position: [25.669079, -100.24437],
      description: 'Estadio moderno con alta afluencia, sede oficial de partidos del Mundial 2026.',
      category: 'Estadio',
      type: 'estadio',
      image: getAssetPath('/map-pins/Estadio.png'),
      municipio: 'Guadalupe',
      tags: 'estadio, deportivo, moderno, alta afluencia, cerca del estadio, Guadalupe',
      traffic: 'Mundial',
      showInCards: false,
      showInMap: true,
      special: true
    },
    {
      id: 'aeropuerto',
      name: 'Aeropuerto Internacional de Monterrey',
      position: [25.77462, -100.11158],
      description: 'Aeropuerto internacional moderno, punto de entrada principal para visitantes del Mundial.',
      category: 'Aeropuerto',
      type: 'aeropuerto',
      image: getAssetPath('/map-pins/Aeropuerto.png'),
      municipio: 'Apodaca',
      tags: 'aeropuerto, internacional, moderno, alta afluencia, conectividad, Apodaca',
      traffic: 'Internacional',
      showInCards: false,
      showInMap: true,
      special: true
    },
    {
      id: 'fanfestival',
      name: 'Fan Festival (Parque Fundidora)',
      position: [25.67715, -100.28232],
      description: 'Evento oficial al aire libre con alta afluencia, gastronomía y entretenimiento.',
      category: 'Parque',
      type: 'parque',
      image: getAssetPath('/map-pins/Parque.png'),
      municipio: 'Monterrey',
      tags: 'evento, aire libre, alta afluencia, gastronomía, entretenimiento, Monterrey',
      traffic: 'Mundial',
      showInCards: false,
      showInMap: true,
      special: true
    }
  ];

  locations.forEach(location => {
    // Solo mostrar pins si está configurado para mostrarse en el mapa
    if (!location.showInMap) return;

    // Crear icono personalizado con imagen directa
    const customIcon = L.divIcon({
      className: 'custom-marker-icon',
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      html: `
        <div class="circle-wrapper ${location.type}">
          <img src="${location.image}" alt="${location.name}" />
        </div>
      `
    });

    // Crear marcador
    const marker = L.marker(location.position, { icon: customIcon })
      .addTo(map);

    // Crear popup personalizado con badge específico por tipo
    const popupContent = `
      <div class="mundial-popup">
        <div class="mundial-popup-header">
          <h3>${location.name}</h3>
          <div class="mundial-popup-badge ${location.type}">${location.category}</div>
        </div>
        <p class="mundial-popup-description">${location.description}</p>
        <div class="mundial-popup-stats">
          <span class="mundial-stat">📍 ${location.municipio}</span>
          <span class="mundial-stat">🚶 ${location.traffic}</span>
          <span class="mundial-stat">${location.category}</span>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent, {
      className: 'mundial-popup-container',
      maxWidth: 300,
      closeButton: true
    });

    // Guardar referencia del marcador
    markers[location.id] = marker;

    // Evento al hacer clic en el marcador (solo para ubicaciones que se muestran en cards)
    marker.on('click', () => {
      if (location.showInCards) {
        highlightLocationItem(location.id);
      } else if (location.special) {
        // Para ubicaciones especiales, destacar su tarjeta especial
        highlightSpecialCard(location.id);
      }
    });
  });
}

function setupLocationInteractivity() {
  // Ubicaciones normales
  const locationItems = document.querySelectorAll('.ubicacion-item');
  locationItems.forEach((item) => {
    const locationId = item.getAttribute('data-location');
    
    item.addEventListener('click', () => {
      if (markers[locationId]) {
        // Centrar mapa en la ubicación con zoom perfecto y padding
        const marker = markers[locationId];
        const coords = marker.getLatLng();
        
        // Usar flyTo para un centrado más suave y preciso
        map.flyTo(coords, 15, {
          animate: true,
          duration: 2,
          easeLinearity: 0.25,
          padding: [50, 50] // Padding para asegurar que no quede en las orillas
        });
        
        // Abrir popup después de centrar
        setTimeout(() => {
          marker.openPopup();
        }, 1000);
        
        // Destacar el item
        highlightLocationItem(locationId);
      }
    });
  });

  // Tarjetas especiales
  const specialCards = document.querySelectorAll('.special-card');
  specialCards.forEach((card) => {
    const locationId = card.getAttribute('data-location');
    
    card.addEventListener('click', () => {
      if (markers[locationId]) {
        // Centrar mapa en la ubicación especial con zoom específico
        const marker = markers[locationId];
        const coords = marker.getLatLng();
        
        // Zoom diferente para ubicaciones especiales (más amplio)
        map.flyTo(coords, 14, {
          animate: true,
          duration: 2,
          easeLinearity: 0.25,
          padding: [50, 50] // Padding para asegurar visibilidad completa
        });
        
        // Abrir popup después de centrar
        setTimeout(() => {
          marker.openPopup();
        }, 1000);
        
        // Destacar la tarjeta especial
        highlightSpecialCard(locationId);
      }
    });
  });
}

function highlightLocationItem(locationId) {
  // Remover clase active de todos los items normales
  document.querySelectorAll('.ubicacion-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Remover clase active de todas las tarjetas especiales
  document.querySelectorAll('.special-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Agregar clase active al item correspondiente
  const targetItem = document.querySelector(`.ubicacion-item[data-location="${locationId}"]`);
  if (targetItem) {
    targetItem.classList.add('active');
  }
}

function highlightSpecialCard(locationId) {
  // Remover clase active de todos los items normales
  document.querySelectorAll('.ubicacion-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Remover clase active de todas las tarjetas especiales
  document.querySelectorAll('.special-card').forEach(card => {
    card.classList.remove('active');
  });
  
  // Agregar clase active a la tarjeta especial correspondiente
  const targetCard = document.querySelector(`.special-card[data-location="${locationId}"]`);
  if (targetCard) {
    targetCard.classList.add('active');
  }
}

function showMapPlaceholder() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  mapElement.innerHTML = `
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
  `;
}

// ================================
// Animaciones básicas sin librerías
// ================================
function initBasicAnimations() {
  // Animación simple para las cards flotantes
  const floatingCards = document.querySelectorAll('.floating-card');
  floatingCards.forEach((card, index) => {
    card.style.animation = `float 4s ease-in-out infinite`;
    card.style.animationDelay = `${index * 1.5}s`;
  });

  // Observer para animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Aplicar animación de entrada a las secciones
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(section);
  });

  // Hero section debe ser visible inmediatamente
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }

  // Animaciones de hover para cards
  const cards = document.querySelectorAll('.stat-card, .beneficio-card, .formato-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// ================================
// Contador regresivo al Mundial 2026 - FECHA OFICIAL
// ================================
function initCountdown() {
  // Fecha oficial del inicio del Mundial 2026: 11 de junio de 2026
  const targetDate = new Date('2026-06-11T20:00:00Z').getTime();
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizar elementos del DOM
      updateCountdownElement('days', days);
      updateCountdownElement('hours', hours);
      updateCountdownElement('minutes', minutes);
      updateCountdownElement('seconds', seconds);
    } else {
      // El evento ya comenzó
      updateCountdownElement('days', 0);
      updateCountdownElement('hours', 0);
      updateCountdownElement('minutes', 0);
      updateCountdownElement('seconds', 0);
      
      // Cambiar el título del countdown
      const countdownTitle = document.querySelector('.countdown-title');
      if (countdownTitle) {
        countdownTitle.textContent = '¡EL MUNDIAL 2026 YA COMENZÓ!';
      }
    }
  };

  // Actualizar cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdownElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    // Animar el cambio de valor
    element.style.transform = 'scale(0.8)';
    element.style.opacity = '0.5';
    
    setTimeout(() => {
      element.textContent = value.toString().padStart(2, '0');
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 150);
  }
}

// ================================
// Formulario de contacto funcional
// ================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    try {
      setButtonLoading(submitButton, true, originalText);
      
      // Simular envío (aquí conectarías con tu backend real)
      await simulateFormSubmission();
      
      showNotification('✅ Mensaje enviado exitosamente. Te contactaremos pronto.', 'success');
      form.reset();
      
    } catch (error) {
      console.error('Error enviando formulario:', error);
      showNotification('❌ Error enviando mensaje. Inténtalo nuevamente.', 'error');
    } finally {
      setButtonLoading(submitButton, false, originalText);
    }
  });

  // Validación en tiempo real
  const fields = form.querySelectorAll('input, textarea');
  fields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => clearFieldError(field));
  });
}

async function simulateFormSubmission() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

function setButtonLoading(button, loading, originalText = '') {
  if (loading) {
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';
    button.disabled = true;
    button.style.opacity = '0.8';
  } else {
    button.innerHTML = originalText;
    button.disabled = false;
    button.style.opacity = '1';
  }
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const required = field.required;
  
  clearFieldError(field);
  
  if (required && !value) {
    showFieldError(field, 'Este campo es obligatorio');
    return false;
  }
  
  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Ingresa un email válido');
      return false;
    }
  }
  
  if (type === 'tel' && value) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(value)) {
      showFieldError(field, 'Ingresa un teléfono válido');
      return false;
    }
  }
  
  return true;
}

function showFieldError(field, message) {
  field.style.borderColor = '#dc3545';
  
  let errorDiv = field.parentNode.querySelector('.field-error');
  if (!errorDiv) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem;';
    field.parentNode.appendChild(errorDiv);
  }
  
  errorDiv.textContent = message;
}

function clearFieldError(field) {
  field.style.borderColor = '';
  const errorDiv = field.parentNode.querySelector('.field-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    z-index: 10000;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transform: translateX(100%);
    transition: all 0.3s ease;
    max-width: 300px;
    word-wrap: break-word;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animar entrada
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto-remover después de 5 segundos
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// ================================
// Navegación mejorada Copa Mundial 2026
// ================================
function initNavigation() {
  // Navegación scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Espaciado para navbar fija
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Efecto navbar al hacer scroll
  let scrolled = false;
  const navbar = document.querySelector('.nav');
  
  window.addEventListener('scroll', () => {
    const isScrolled = window.scrollY > 50;
    
    if (isScrolled !== scrolled) {
      scrolled = isScrolled;
      if (navbar) {
        navbar.classList.toggle('scrolled', scrolled);
      }
    }
  });

  // Inicializar menú móvil
  initMobileNavigation();
}

// ================================
// Animación de barra de disponibilidad
// ================================
function initAvailabilityAnimation() {
  const progressBar = document.querySelector('.availability-progress');
  if (!progressBar) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetWidth = 72; // 72% reservado
        let currentWidth = 0;
        
        const animate = (currentTime) => {
          currentWidth += 1;
          progressBar.style.width = Math.min(currentWidth, targetWidth) + '%';
          
          if (currentWidth < targetWidth) {
            requestAnimationFrame(animate);
          }
        };
        
        // Comenzar animación después de un pequeño delay
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, 500);
        
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(progressBar.parentElement);
}

// ================================
// Calendly Integration
// ================================
function loadCalendly() {
  const calendlyUrl = 'https://calendly.com/tu-usuario/mundial-2026-meeting';
  loadCalendlyWidget(calendlyUrl);
}

function loadCalendlyWidget(url) {
  if (typeof Calendly !== 'undefined') {
    renderCalendlyWidget(url);
  } else {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => renderCalendlyWidget(url);
    document.head.appendChild(script);
  }
}

function renderCalendlyWidget(url) {
  const container = document.createElement('div');
  container.style.cssText = 'min-width:320px;height:700px;';
  
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.8); z-index: 10000; display: flex;
    align-items: center; justify-content: center; padding: 20px;
  `;
  
  container.onclick = (e) => e.stopPropagation();
  modal.onclick = () => document.body.removeChild(modal);
  
  modal.appendChild(container);
  document.body.appendChild(modal);
  
  if (typeof Calendly !== 'undefined') {
    Calendly.initInlineWidget({ url, parentElement: container });
  }
}

function sendEmailBooking() {
  const subject = encodeURIComponent('Consulta - Copa Mundial de Fútbol Monterrey 2026');
  const body = encodeURIComponent(generateEmailBody());
  const mailtoUrl = `mailto:mundial2026@publicidad.mx?subject=${subject}&body=${body}`;
  window.open(mailtoUrl);
}

function generateEmailBody() {
  return `Hola,

Me interesa conocer más sobre los espacios publicitarios disponibles para la Copa Mundial de Fútbol Monterrey 2026.

Por favor, proporcionen información sobre:
- Ubicaciones disponibles
- Formatos publicitarios
- Precios y paquetes
- Fechas de reserva

Quedo a la espera de su respuesta.

Saludos cordiales,

---
Enviado desde la landing page oficial
Copa Mundial de Fútbol Monterrey 2026`;
}

function openWhatsAppBooking() {
  const message = encodeURIComponent('Hola! Me interesa conocer más sobre los espacios publicitarios para la Copa Mundial de Fútbol Monterrey 2026. ¿Podrían proporcionarme más información?');
  const whatsappUrl = `https://wa.me/5218112345678?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// ================================
// Prefill form from URL parameters
// ================================
function prefillFormFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  
  ['nombre', 'email', 'empresa', 'telefono'].forEach(field => {
    const value = urlParams.get(field);
    const input = document.getElementById(field);
    if (value && input) {
      input.value = decodeURIComponent(value);
    }
  });
}

// ================================
// Analytics y tracking básico
// ================================
function trackUserInteraction(action, details = {}) {
  // Enviar evento a Google Analytics si está disponible
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: 'Mundial 2026',
      event_label: details.label || '',
      value: details.value || 0,
      custom_map: {
        dimension1: details.section || 'general'
      }
    });
  }
  
  // Log para desarrollo
  console.log('📊 User Interaction:', { action, details, timestamp: new Date().toISOString() });
}

// ================================
// CSS Dinámico basado en ambiente
// ================================
function updateCSSPaths() {
  // Esta función ya no es necesaria porque las rutas están corregidas directamente en el CSS
  console.log('✅ CSS paths actualizados para compatibilidad con GitHub Pages');
}

// ================================
// Estilos de animación adicionales
// ================================
const additionalCSS = `
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
`;

// Inyectar CSS adicional
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// ================================
// Funciones globales para acceso desde HTML
// ================================
let appInstance = null;

window.loadCalendly = function() {
  if (appInstance) {
    appInstance.loadCalendly();
    appInstance.trackUserInteraction('calendly_opened', { source: 'contact_section' });
  }
};

window.sendEmailBooking = function() {
  if (appInstance) {
    appInstance.sendEmailBooking();
    appInstance.trackUserInteraction('email_booking', { source: 'contact_section' });
  }
};

window.openWhatsAppBooking = function() {
  if (appInstance) {
    appInstance.openWhatsAppBooking();
    appInstance.trackUserInteraction('whatsapp_booking', { source: 'contact_section' });
  }
};

// ================================
// Funciones para menú hamburger mobile
// ================================
window.toggleMobileNav = function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav-overlay');
  
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Prevenir scroll del body cuando el menú está abierto
  if (mobileNav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

window.closeMobileNav = function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav-overlay');
  
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// ================================
// INICIALIZACIÓN DE LA APP
// ================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌎 Iniciando Copa Mundial de Fútbol Monterrey 2026 Landing Page...');
  initApp();
});

console.log('🚀 Copa Mundial de Fútbol Monterrey 2026 - JavaScript cargado exitosamente'); 