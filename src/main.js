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
  console.log('🚀 Iniciando aplicación Copa Mundial 2026...');
  
  // Inicializar todas las funcionalidades
  initCountdown();
  initContactForm(); 
  initNavigation();
  initBasicAnimations();
  
  // Inicializar mapa con un pequeño delay para asegurar que DOM esté listo
  setTimeout(() => {
    initOpenStreetMap();
  }, 100);
  
  // Inicializar animación de disponibilidad
  setTimeout(() => {
    initAvailabilityAnimation();
  }, 200);
  
  console.log('✅ Aplicación inicializada');
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
    const formattedValue = id === 'days' ? 
      value.toString().padStart(3, '0') : 
      value.toString().padStart(2, '0');
    
    // Solo animar si el valor realmente cambió
    if (element.textContent !== formattedValue) {
      element.textContent = formattedValue;
      
      // Animación suave solo cuando cambia
      element.style.transform = 'scale(1.1)';
      element.style.transition = 'transform 0.3s ease';
      
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 300);
    }
  }
}

// ================================
// Animación de barra de disponibilidad
// ================================
function initAvailabilityAnimation() {
  const progressBar = document.querySelector('.availability-progress');
  if (!progressBar) {
    console.warn('❌ Barra de progreso no encontrada');
    return;
  }

  console.log('✅ Inicializando animación de barra de progreso');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('🎯 Barra de progreso visible, iniciando animación');
        const targetWidth = 72; // 72% reservado
        let currentWidth = 0;
        
        const animate = () => {
          currentWidth += 1;
          progressBar.style.width = Math.min(currentWidth, targetWidth) + '%';
          
          if (currentWidth < targetWidth) {
            requestAnimationFrame(animate);
          } else {
            console.log('✅ Animación de barra completada');
          }
        };
        
        // Comenzar animación después de un pequeño delay
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, 500);
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(progressBar.parentElement);
}

// ================================
// OpenStreetMap + Leaflet Integration
// ================================
function initOpenStreetMap() {
  console.log('🗺️ Iniciando OpenStreetMap...');
  
  // Esperar a que Leaflet esté disponible
  if (typeof L === 'undefined') {
    console.error('❌ Leaflet no está disponible');
    showMapPlaceholder();
    return;
  }

  try {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('❌ Elemento del mapa no encontrado');
      return;
    }

    console.log('✅ Leaflet disponible, creando mapa...');

    // Crear el mapa centrado en Monterrey
    map = L.map('map', {
      center: [25.6866, -100.3161], // Monterrey, México
      zoom: 12,
      zoomControl: true,
      attributionControl: false // Desactivar attribution
    });

    console.log('✅ Mapa creado, agregando tiles...');

    // Agregar capa de tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: 19,
      className: 'mundial-map-tiles'
    }).addTo(map);

    console.log('✅ Tiles agregados, agregando ubicaciones...');

    // Ubicaciones Copa Mundial 2026 Monterrey
    addMundialLocations();
    
    // Configurar interactividad con la lista de ubicaciones
    setupLocationInteractivity();

    console.log('✅ Mapa OpenStreetMap inicializado correctamente');

  } catch (error) {
    console.error('❌ Error inicializando OpenStreetMap:', error);
    showMapPlaceholder();
  }
}

function addMundialLocations() {
  addMundialLocationsToMap(map);
}

// Función helper para agregar ubicaciones a cualquier mapa
function addMundialLocationsToMap(mapInstance) {
  // Todas las ubicaciones del CSV Copa Mundial 2026 Monterrey
  const locations = [
    // Centros Comerciales - San Pedro Garza García
    {
      id: 'arboleda',
      name: 'Arboleda',
      position: [25.649714, -100.356173],
      description: 'Centro comercial premium al aire libre con alta afluencia familiar y ambiente sofisticado.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Pedro Garza García',
      tags: ['premium', 'aire libre', 'alta afluencia', 'familiar'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'puntovalle',
      name: 'Punto Valle, The Town Center',
      position: [25.659046, -100.354432],
      description: 'Centro comercial premium con excelente gastronomía y entretenimiento de primer nivel.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Pedro Garza García',
      tags: ['premium', 'gastronomía', 'entretenimiento'],
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'chroma',
      name: 'Chroma San Pedro',
      position: [25.652741, -100.352329],
      description: 'Centro comercial con arquitectura moderna, gastronomía y entretenimiento de alta calidad.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Pedro Garza García',
      tags: ['arquitectura moderna', 'gastronomía', 'entretenimiento'],
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
      municipio: 'San Pedro Garza García',
      tags: ['experiencias', 'gastronomía', 'entretenimiento', 'moderno'],
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
      municipio: 'San Pedro Garza García',
      tags: ['familiar', 'alta afluencia', 'entretenimiento', 'cerca del estadio'],
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
      municipio: 'San Pedro Garza García',
      tags: ['premium', 'uso mixto', 'gastronomía', 'alta afluencia'],
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'fashion',
      name: 'Fashion Drive',
      position: [25.651295, -100.335131],
      description: 'Centro comercial moderno con gastronomía de calidad, alta afluencia y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Pedro Garza García',
      tags: ['moderno', 'gastronomía', 'alta afluencia', 'entretenimiento'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    
    // Centros Comerciales - Monterrey
    {
      id: 'galerias',
      name: 'Galerías Valle Oriente',
      position: [25.638228, -100.313963],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y alta afluencia en zona céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['familiar', 'gastronomía', 'entretenimiento', 'alta afluencia'],
      traffic: 'Muy Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'serena',
      name: 'Pueblo Serena',
      position: [25.576056, -100.24827],
      description: 'Centro comercial al aire libre, familiar, con gastronomía variada y pet friendly.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['aire libre', 'familiar', 'gastronomía', 'pet friendly'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'ocampo',
      name: 'Ocampo Corner',
      position: [25.666858, -100.320719],
      description: 'Desarrollo de uso mixto moderno con gastronomía, tecnología y ubicación céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['uso mixto', 'moderno', 'gastronomía', 'tecnología', 'céntrico'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'mexico',
      name: 'Plaza México',
      position: [25.667518, -100.313174],
      description: 'Centro comercial histórico con artesanías, gastronomía local y ubicación céntrica.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['histórico', 'artesanal', 'gastronomía', 'céntrico'],
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'via02',
      name: 'Plaza Via 02',
      position: [25.696587, -100.380189],
      description: 'Centro comercial moderno con gastronomía, entretenimiento y ambiente familiar.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['moderno', 'gastronomía', 'entretenimiento', 'familiar'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'hierro',
      name: 'Plaza Vía Puerta de Hierro',
      position: [25.744716, -100.421793],
      description: 'Centro comercial moderno con gastronomía, entretenimiento y fácil accesibilidad.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['moderno', 'gastronomía', 'entretenimiento', 'accesible'],
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
      municipio: 'Monterrey',
      tags: ['uso mixto', 'gastronomía', 'entretenimiento', 'céntrico'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'nuevosur',
      name: 'Plaza Nuevo Sur',
      position: [25.653529, -100.275301],
      description: 'Centro comercial al aire libre con gastronomía, entretenimiento y diseño moderno.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Monterrey',
      tags: ['aire libre', 'gastronomía', 'entretenimiento', 'moderno'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    
    // Centros Comerciales - San Nicolás de los Garza
    {
      id: 'citadel',
      name: 'Plaza Citadel',
      position: [25.726138, -100.215214],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y fácil accesibilidad.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Nicolás de los Garza',
      tags: ['familiar', 'gastronomía', 'entretenimiento', 'accesible'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'anahuac',
      name: 'Plaza Fiesta Anahuac',
      position: [25.742955, -100.313308],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y alta afluencia diaria.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Nicolás de los Garza',
      tags: ['familiar', 'gastronomía', 'entretenimiento', 'alta afluencia'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'lafe',
      name: 'Paseo La Fe',
      position: [25.719691, -100.218991],
      description: 'Centro comercial al aire libre, pet friendly, con gastronomía y entretenimiento.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'San Nicolás de los Garza',
      tags: ['aire libre', 'pet friendly', 'gastronomía', 'entretenimiento'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    
    // Otros municipios
    {
      id: 'juarez',
      name: 'Paseo Juárez',
      position: [25.650405, -100.112078],
      description: 'Centro comercial familiar con gastronomía, entretenimiento y buena accesibilidad.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Ciudad Benito Juárez',
      tags: ['familiar', 'gastronomía', 'entretenimiento', 'accesible'],
      traffic: 'Medio',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'molinete',
      name: 'El Molinete',
      position: [25.662388, -100.149543],
      description: 'Centro comercial al aire libre, familiar, con gastronomía y entretenimiento variado.',
      category: 'Centro comercial',
      type: 'centro-comercial',
      municipio: 'Guadalupe',
      tags: ['aire libre', 'familiar', 'gastronomía', 'entretenimiento'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    
    // Edificios de uso mixto
    {
      id: 'republica',
      name: 'Torre República',
      position: [25.686054, -100.330094],
      description: 'Desarrollo de uso mixto con residencial, amenidades y ubicación céntrica moderna.',
      category: 'Edificio',
      type: 'edificio',
      municipio: 'Monterrey',
      tags: ['uso mixto', 'residencial', 'amenidades', 'céntrico', 'moderno'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    {
      id: 'citica',
      name: 'Crítica',
      position: [25.669887, -100.334254],
      description: 'Desarrollo de uso mixto con residencial, oficinas, gastronomía y ubicación céntrica.',
      category: 'Edificio',
      type: 'edificio',
      municipio: 'Monterrey',
      tags: ['uso mixto', 'residencial', 'oficinas', 'gastronomía', 'céntrico'],
      traffic: 'Alto',
      showInCards: true,
      showInMap: true
    },
    
    // Ubicaciones especiales (solo en mapa)
    {
      id: 'estadio',
      name: 'Estadio Monterrey',
      position: [25.669079, -100.24437],
      description: 'Estadio moderno sede de la Copa Mundial 2026 con alta afluencia y conectividad.',
      category: 'Estadio',
      type: 'estadio',
      municipio: 'Guadalupe',
      tags: ['deportivo', 'moderno', 'alta afluencia', 'sede mundial'],
      traffic: 'Muy Alto',
      showInCards: false,
      showInMap: true
    },
    {
      id: 'aeropuerto',
      name: 'Aeropuerto Internacional de Monterrey',
      position: [25.77462, -100.11158],
      description: 'Aeropuerto internacional moderno con alta afluencia y excelente conectividad mundial.',
      category: 'Aeropuerto',
      type: 'aeropuerto',
      municipio: 'Apodaca',
      tags: ['internacional', 'moderno', 'alta afluencia', 'conectividad'],
      traffic: 'Muy Alto',
      showInCards: false,
      showInMap: true
    },
    {
      id: 'fanfestival',
      name: 'Fan Festival (Parque Fundidora)',
      position: [25.67715, -100.28232],
      description: 'Evento oficial Copa Mundial al aire libre con alta afluencia, gastronomía y entretenimiento.',
      category: 'Parque',
      type: 'parque',
      municipio: 'Monterrey',
      tags: ['evento oficial', 'aire libre', 'alta afluencia', 'gastronomía', 'entretenimiento'],
      traffic: 'Muy Alto',
      showInCards: false,
      showInMap: true
    }
  ];

  // Función para obtener el icono correcto según el tipo
  function getMarkerIcon(location) {
    // Crear icono con la estructura del documento estilos-pines-mapa.md
    const iconHtml = `
      <div class="circle-wrapper ${location.type}">
        <img src="${getAssetPath('/dist/map-pins/' + location.type.charAt(0).toUpperCase() + location.type.slice(1).replace('-', '') + '.png')}" alt="${location.category}" />
      </div>
    `;
    
    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker-icon',
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      popupAnchor: [0, -24]
    });
  }

  // Función para obtener emoji según el tag
  function getEmojiForTag(tag) {
    const emojiMap = {
      // Características generales
      'premium': '💎',
      'moderno': '🏗️',
      'histórico': '🏛️',
      'familiar': '👨‍👩‍👧‍👦',
      'aire libre': '🌳',
      'pet friendly': '🐕',
      'uso mixto': '🏢',
      'accesible': '♿',
      
      // Servicios y comodidades
      'gastronomía': '🍽️',
      'entretenimiento': '🎯',
      'tecnología': '💻',
      'experiencias': '⭐',
      'amenidades': '🏨',
      'arquitectura moderna': '🏗️',
      
      // Ubicación
      'céntrico': '📍',
      'conectividad': '🔗',
      'residencial': '🏠',
      'oficinas': '🏢',
      
      // Nivel de actividad
      'alta afluencia': '👥',
      'artesanal': '🎨',
      
      // Deportivo/Eventos
      'deportivo': '⚽',
      'sede mundial': '🏆',
      'evento oficial': '🎪',
      
      // Proximidad
      'cerca del estadio': '🏟️'
    };
    
    return emojiMap[tag.toLowerCase()] || '🏷️';
  }

  // Agregar marcadores al mapa
  locations.forEach(location => {
    if (location.showInMap) {
      const marker = L.marker(location.position, {
        icon: getMarkerIcon(location)
      });
      
      marker.addTo(mapInstance)
        .bindPopup(`
          <div class="mundial-popup">
            <div class="mundial-popup-header">
              <h3>${location.name}</h3>
              <span class="mundial-popup-badge ${location.type}">${location.category}</span>
            </div>
            <p class="mundial-popup-description">${location.description}</p>
            <div class="mundial-popup-stats">
              <span class="mundial-stat">📍 ${location.municipio}</span>
              <span class="mundial-stat">🎯 Tráfico: ${location.traffic}</span>
              ${location.tags.map(tag => `<span class="mundial-stat">${getEmojiForTag(tag)} ${tag}</span>`).join('')}
            </div>
          </div>
        `, {
          className: 'mundial-popup-container'
        });
      
      // Solo agregar a markers global si es el mapa principal
      if (mapInstance === map) {
        markers[location.id] = marker;
      }
    }
  });

  // Agregar CSS según el documento estilos-pines-mapa.md
  if (!document.querySelector('#mundial-marker-popup-styles')) {
    const worldCupStyles = document.createElement('style');
    worldCupStyles.id = 'mundial-marker-popup-styles';
    worldCupStyles.textContent = `
      :root {
        --mundial-purple: #8b5cf6;
      }
      
      /* Estructura de marcadores según estilos-pines-mapa.md */
      .custom-marker-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent !important;
        border: none !important;
      }
      
      .circle-wrapper {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: all 0.3s ease;
        z-index: 2;
      }
      
      .circle-wrapper img {
        width: 70%;
        height: 70%;
        object-fit: cover;
        border-radius: 50%;
        z-index: 3;
      }
      
      /* Fondos por categoría según el documento */
      .circle-wrapper.centro-comercial {
        background: linear-gradient(135deg, #4a4a4a, #5a5a5a);
        box-shadow: 0 4px 15px #4a4a4a66;
      }
      
      .circle-wrapper.edificio {
        background: linear-gradient(135deg, #3a4a5c, #4a5a6c);
        box-shadow: 0 4px 15px #3a4a5c66;
      }
      
      .circle-wrapper.estadio {
        background: linear-gradient(135deg, #5c4a3a, #6c5a4a);
        box-shadow: 0 4px 15px #5c4a3a66;
      }
      
      .circle-wrapper.aeropuerto {
        background: linear-gradient(135deg, #3a5c4a, #4a6c5a);
        box-shadow: 0 4px 15px #3a5c4a66;
      }
      
      .circle-wrapper.parque {
        background: linear-gradient(135deg, #4a5c3a, #5a6c4a);
        box-shadow: 0 4px 15px #4a5c3a66;
      }
      
      .circle-wrapper.hotel {
        background: linear-gradient(135deg, #5c3a4a, #6c4a5a);
        box-shadow: 0 4px 15px #5c3a4a66;
      }
      
      /* Animación de pulso según el documento */
      @keyframes mundial-pulse-new {
        0% { transform: scale(0.8); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
      
      .circle-wrapper:before {
        content: "";
        position: absolute;
        top: -5px; left: -5px; right: -5px; bottom: -5px;
        border-radius: 50%;
        animation: mundial-pulse-new 2s infinite;
        z-index: 1;
      }
      
      /* Colores de pulso por categoría */
      .circle-wrapper.centro-comercial:before { background: #4a4a4a33; }
      .circle-wrapper.edificio:before { background: #3a4a5c33; }
      .circle-wrapper.estadio:before { background: #5c4a3a33; }
      .circle-wrapper.aeropuerto:before { background: #3a5c4a33; }
      .circle-wrapper.parque:before { background: #4a5c3a33; }
      .circle-wrapper.hotel:before { background: #5c3a4a33; }
      
      /* Efecto hover según el documento */
      .custom-marker-icon:hover .circle-wrapper {
        transform: scale(1.15);
        box-shadow: 0 6px 25px #0006;
      }
      
      .custom-marker-icon:hover .circle-wrapper.centro-comercial {
        box-shadow: 0 6px 25px #4a4a4a99;
      }
      
      .custom-marker-icon:hover .circle-wrapper.edificio {
        box-shadow: 0 6px 25px #3a4a5c99;
      }
      
      .custom-marker-icon:hover .circle-wrapper.estadio {
        box-shadow: 0 6px 25px #5c4a3a99;
      }
      
      .custom-marker-icon:hover .circle-wrapper.aeropuerto {
        box-shadow: 0 6px 25px #3a5c4a99;
      }
      
      .custom-marker-icon:hover .circle-wrapper.parque {
        box-shadow: 0 6px 25px #4a5c3a99;
      }
      
      .custom-marker-icon:hover .circle-wrapper.hotel {
        box-shadow: 0 6px 25px #5c3a4a99;
      }
      
      /* Popups originales mejorados */
      .mundial-popup-badge.centro-comercial {
        background: linear-gradient(135deg, #4a4a4a, #5a5a5a) !important;
      }
      
      .mundial-popup-badge.edificio {
        background: linear-gradient(135deg, #3a4a5c, #4a5a6c) !important;
      }
      
      .mundial-popup-badge.estadio {
        background: linear-gradient(135deg, #5c4a3a, #6c5a4a) !important;
        animation: special-glow 2s infinite alternate;
      }
      
      .mundial-popup-badge.aeropuerto {
        background: linear-gradient(135deg, #3a5c4a, #4a6c5a) !important;
        animation: special-glow 2s infinite alternate;
      }
      
      .mundial-popup-badge.parque {
        background: linear-gradient(135deg, #4a5c3a, #5a6c4a) !important;
        animation: special-glow 2s infinite alternate;
      }
      
      .mundial-popup-badge.hotel {
        background: linear-gradient(135deg, #5c3a4a, #6c4a5a) !important;
      }
      
      @keyframes special-glow {
        from {
          box-shadow: 0 0 5px rgba(139, 92, 246, 0.3);
        }
        to {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
        }
      }
      
      .mundial-popup-container .leaflet-popup-content-wrapper {
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        border: none;
        padding: 0;
      }
      
      .mundial-popup-container .leaflet-popup-content {
        margin: 0;
        padding: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }
      
      .mundial-popup-container .leaflet-popup-tip {
        background: #fff;
        box-shadow: none;
      }
      
      .mundial-popup {
        padding: 1.5rem;
        color: #333;
      }
      
      .mundial-popup-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
      }
      
      .mundial-popup-header h3 {
        color: var(--mundial-purple);
        font-weight: 700;
        font-size: 1.1rem;
        margin: 0;
        flex: 1;
      }
      
      .mundial-popup-badge {
        color: #fff;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        margin-left: 1rem;
        white-space: nowrap;
      }
      
      .mundial-popup-description {
        color: #555;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }
      
      .mundial-popup-stats {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      
      .mundial-stat {
        background: #f8f9fa;
        padding: 0.25rem 0.5rem;
        border-radius: 15px;
        font-size: 0.75rem;
        color: #666;
        font-weight: 500;
      }
    `;
    document.head.appendChild(worldCupStyles);
  }
}

function setupLocationInteractivity() {
  // Configurar interactividad para ubicaciones destacadas (usan data-location)
  const locationCards = document.querySelectorAll('.ubicacion-item[data-location]');
  locationCards.forEach(card => {
    card.addEventListener('click', () => {
      const locationId = card.dataset.location;
      console.log(`🔗 Tarjeta clickeada: ${locationId}`);
      if (markers[locationId]) {
        animateToLocation(markers[locationId].getLatLng(), locationId);
      } else {
        console.warn(`❌ No se encontró marcador para: ${locationId}`);
        console.log('Marcadores disponibles:', Object.keys(markers));
      }
    });
  });

  // Configurar para tarjetas especiales (también usan data-location)
  const specialCards = document.querySelectorAll('.special-card[data-location]');
  specialCards.forEach(card => {
    card.addEventListener('click', () => {
      const locationId = card.dataset.location;
      console.log(`🎯 Tarjeta especial clickeada: ${locationId}`);
      if (markers[locationId]) {
        animateToLocation(markers[locationId].getLatLng(), locationId);
      } else {
        console.warn(`❌ No se encontró marcador para tarjeta especial: ${locationId}`);
        console.log('Marcadores disponibles:', Object.keys(markers));
      }
    });
  });
  
  // Agregar cursor pointer a las tarjetas
  [...locationCards, ...specialCards].forEach(card => {
    card.style.cursor = 'pointer';
    card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-2px)';
      card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '';
    });
  });
}

function animateToLocation(latlng, locationId) {
  console.log(`🎯 Animando hacia ubicación: ${locationId}`);
  
  // Usar flyTo con la configuración original más elegante
  map.flyTo(latlng, 15, {
    animate: true,
    duration: 2,
    easeLinearity: 0.25,
    padding: [50, 50]
  });
  
  // Abrir popup después de la animación
  setTimeout(() => {
    if (markers[locationId]) {
      markers[locationId].openPopup();
    }
  }, 2000); // Sincronizar con la duración del flyTo
}

function showMapPlaceholder() {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapElement.innerHTML = `
      <div class="map-placeholder">
        <div class="placeholder-content">
          <i class="fas fa-map-marked-alt"></i>
          <h3>Mapa Interactivo</h3>
          <p>Ubicaciones estratégicas en Monterrey</p>
          <small>Cargando mapa...</small>
        </div>
      </div>
    `;
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

function initMobileNavigation() {
  // El menú móvil se maneja con las funciones globales toggleMobileNav y closeMobileNav
  console.log('✅ Navegación móvil inicializada');
}

// ================================
// Animaciones básicas
// ================================
function initBasicAnimations() {
  // Animaciones flotantes para cards
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
// Funciones globales para acceso desde HTML
// ================================

// Funciones para menú hamburger mobile
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

// Funciones para pantalla completa del mapa
window.openFullscreenMap = function() {
  // Remover overlay existente si lo hay
  const existingOverlay = document.getElementById('fullscreen-map-overlay');
  if (existingOverlay) {
    existingOverlay.remove();
  }
  
  const fullscreenOverlay = document.createElement('div');
  fullscreenOverlay.id = 'fullscreen-map-overlay';
  fullscreenOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  fullscreenOverlay.innerHTML = `
    <div class="fullscreen-map-container" style="
      width: 90%;
      height: 90%;
      background: white;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
    ">
      <button class="close-fullscreen" onclick="closeFullscreenMap()" style="
        position: absolute;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      " onmouseover="this.style.background='rgba(0, 0, 0, 0.9)'" onmouseout="this.style.background='rgba(0, 0, 0, 0.7)'">×</button>
      <div id="fullscreen-map" style="width: 100%; height: 100%;"></div>
    </div>
  `;
  
  document.body.appendChild(fullscreenOverlay);
  document.body.style.overflow = 'hidden';
  
  // Crear nuevo mapa en pantalla completa
  const fullscreenMap = L.map('fullscreen-map', {
    center: [25.6866, -100.3161],
    zoom: 12,
    zoomControl: true,
    attributionControl: false
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
    maxZoom: 19
  }).addTo(fullscreenMap);
  
  // Agregar ubicaciones al mapa de pantalla completa
  addMundialLocationsToMap(fullscreenMap);
  
  // Cerrar con ESC
  const closeOnEsc = function(e) {
    if (e.key === 'Escape') {
      closeFullscreenMap();
      document.removeEventListener('keydown', closeOnEsc);
    }
  };
  document.addEventListener('keydown', closeOnEsc);
  
  // Cerrar clickeando fuera del mapa
  fullscreenOverlay.addEventListener('click', function(e) {
    if (e.target === fullscreenOverlay) {
      closeFullscreenMap();
    }
  });
};

window.closeFullscreenMap = function() {
  const overlay = document.getElementById('fullscreen-map-overlay');
  if (overlay) {
    overlay.remove();
  }
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