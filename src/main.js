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
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  
  console.log('🔗 Construyendo ruta:', {
    path,
    isLocal,
    hostname: window.location.hostname,
    origin: window.location.origin
  });
  
  if (isLocal) {
    // En desarrollo local con Vite, las rutas públicas no necesitan prefijo
    return path.startsWith('/') ? path : '/' + path;
  } else if (window.location.hostname.includes('github.io')) {
    // Para GitHub Pages
    return '/landing2026' + path;
  } else {
    // Para otros servidores de producción
  return '.' + path;
  }
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
  console.log('🕐 Inicializando countdown mejorado...');
  
  // Fecha oficial del inicio del Mundial 2026: 11 de junio de 2026
  const targetDate = new Date('2026-06-11T20:00:00Z').getTime();
  
  // Cache de valores previos para evitar actualizaciones innecesarias
  let previousValues = { days: null, hours: null, minutes: null, seconds: null };
  
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      // Cálculo correcto sin decimales
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Solo actualizar si los valores han cambiado
      if (previousValues.days !== days) {
      updateCountdownElement('days', days);
        previousValues.days = days;
      }
      if (previousValues.hours !== hours) {
      updateCountdownElement('hours', hours);
        previousValues.hours = hours;
      }
      if (previousValues.minutes !== minutes) {
      updateCountdownElement('minutes', minutes);
        previousValues.minutes = minutes;
      }
      if (previousValues.seconds !== seconds) {
      updateCountdownElement('seconds', seconds);
        previousValues.seconds = seconds;
      }
    } else {
      // El evento ya comenzó
      ['days', 'hours', 'minutes', 'seconds'].forEach(key => {
        if (previousValues[key] !== 0) {
          updateCountdownElement(key, 0);
          previousValues[key] = 0;
        }
      });
      
      // Cambiar el título del countdown
      const countdownTitle = document.querySelector('.countdown__title');
      if (countdownTitle && !countdownTitle.textContent.includes('COMENZÓ')) {
        countdownTitle.textContent = '¡EL MUNDIAL 2026 YA COMENZÓ!';
      }
    }
  };

  // Actualizar inmediatamente y cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdownElement(id, value) {
  const element = document.getElementById(id);
  if (element) {
    const formattedValue = id === 'days' ? 
      value.toString().padStart(3, '0') : 
      value.toString().padStart(2, '0');
    
    // Solo actualizar si el valor realmente cambió
    if (element.textContent !== formattedValue) {
      // Efecto de flip 3D moderno
      element.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.transform = 'perspective(400px) rotateX(90deg)';
      
      setTimeout(() => {
        element.textContent = formattedValue;
        element.style.transform = 'perspective(400px) rotateX(0deg)';
      }, 150);
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
// OpenStreetMap + Leaflet Integration - VERSIÓN ROBUSTA
// ================================
function initOpenStreetMap() {
  console.log('🗺️ Iniciando OpenStreetMap...');
  
  // Variables globales para el mapa
  let map;
  let markers = {};

  const initMap = () => {
  if (typeof L === 'undefined') {
    console.error('❌ Leaflet no está disponible');
    showMapPlaceholder();
      return;
    }

    console.log('✅ Leaflet disponible, creando mapa...');

    try {
      // RECREAR MAPA COMPLETAMENTE - COORDENADAS EXACTAS
    map = L.map('map', {
      center: [25.6866, -100.3161], // Monterrey, México
        zoom: 10,
        minZoom: 8,
        maxZoom: 18,
      zoomControl: true,
        attributionControl: false,
        preferCanvas: false,
        worldCopyJump: false,
        // FORZAR SISTEMA DE COORDENADAS SIN TRANSFORMACIONES
        crs: L.CRS.EPSG3857,
        // Evitar cualquier transformación adicional
        transform3DLimit: 0
      });

      console.log('✅ Mapa creado con sistema de coordenadas EXACTO');

    // Agregar capa de tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
      maxZoom: 19,
      className: 'mundial-map-tiles'
    }).addTo(map);

    console.log('✅ Tiles agregados, agregando ubicaciones...');

      // Esperar a que el mapa se renderice completamente
      setTimeout(() => {
        // Agregar ubicaciones con coordenadas EXACTAS
        addUbicacionesConCoordenadasExactas();
        
        // Configurar interactividad SINCRONIZADA
        setupLocationInteractivitySincronizada();
        
        // Ajustar vista para todas las ubicaciones
        setTimeout(() => {
          if (Object.keys(markers).length > 0) {
            const group = new L.featureGroup(Object.values(markers));
            map.fitBounds(group.getBounds().pad(0.05));
            console.log('🗺️ Mapa ajustado para mostrar todas las ubicaciones');
          }
        }, 300);
      }, 200);

    console.log('✅ Mapa OpenStreetMap inicializado correctamente');

  } catch (error) {
    console.error('❌ Error inicializando OpenStreetMap:', error);
    showMapPlaceholder();
  }
  };

  // FUNCIÓN CON COORDENADAS EXACTAS Y IDS SINCRONIZADOS
  function addUbicacionesConCoordenadasExactas() {
    console.log('📍 Agregando ubicaciones con coordenadas EXACTAS...');
    
    // COORDENADAS EXACTAS - IDS SINCRONIZADOS CON HTML
    const ubicaciones = [
      // CENTROS COMERCIALES
      { id: 'arboleda', name: 'Arboleda', lat: 25.649714, lng: -100.356173, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'puntovalle', name: 'Punto Valle, The Town Center', lat: 25.659046, lng: -100.354432, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'chroma', name: 'Chroma San Pedro', lat: 25.652741, lng: -100.352329, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'auriga', name: 'Auriga San Pedro', lat: 25.648843, lng: -100.339116, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'fiesta', name: 'Plaza Fiesta San Agustín', lat: 25.64893, lng: -100.336166, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'metropolitan', name: 'Metropolitan Center', lat: 25.650381, lng: -100.333596, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'fashion', name: 'Fashion Drive', lat: 25.651295, lng: -100.335131, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
      { id: 'galerias', name: 'Galerías Valle Oriente', lat: 25.638228, lng: -100.313963, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'citadel', name: 'Plaza Citadel', lat: 25.726138, lng: -100.215214, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
      { id: 'serena', name: 'Pueblo Serena', lat: 25.576056, lng: -100.24827, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'anahuac', name: 'Plaza Fiesta Anahuac', lat: 25.742955, lng: -100.313308, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
      { id: 'ocampo', name: 'Ocampo Corner', lat: 25.666858, lng: -100.320719, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'mexico', name: 'Plaza México', lat: 25.667518, lng: -100.313174, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'via02', name: 'Plaza Via 02', lat: 25.696587, lng: -100.380189, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'hierro', name: 'Plaza Vía Puerta de Hierro', lat: 25.744716, lng: -100.421793, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'lafe', name: 'Paseo La Fe', lat: 25.719691, lng: -100.218991, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
      { id: 'tec', name: 'Paseo Tec', lat: 25.654433, lng: -100.293758, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'juarez', name: 'Paseo Juárez', lat: 25.650405, lng: -100.112078, type: 'centro-comercial', municipio: 'Juárez' },
      { id: 'nuevosur', name: 'Plaza Nuevo Sur', lat: 25.653529, lng: -100.275301, type: 'centro-comercial', municipio: 'Monterrey' },
      { id: 'molinete', name: 'El Molinete', lat: 25.662388, lng: -100.149543, type: 'centro-comercial', municipio: 'Monterrey' },
      
      // EDIFICIOS
      { id: 'republica', name: 'Torre República', lat: 25.686054, lng: -100.330094, type: 'edificio', municipio: 'Monterrey' },
      { id: 'citica', name: 'Cótica', lat: 25.669887, lng: -100.334254, type: 'edificio', municipio: 'Monterrey' },
      
      // UBICACIONES ESPECIALES - IDS SINCRONIZADOS CON HTML
      { id: 'estadio', name: 'Estadio Monterrey', lat: 25.669079, lng: -100.24437, type: 'estadio', municipio: 'Guadalupe' },
      { id: 'aeropuerto', name: 'Aeropuerto Internacional de Monterrey', lat: 25.77462, lng: -100.11158, type: 'aeropuerto', municipio: 'Apodaca' },
      { id: 'fanfestival', name: 'Fan Festival (Parque Fundidora)', lat: 25.67715, lng: -100.28232, type: 'parque', municipio: 'Monterrey' },
      { id: 'hotel', name: 'The Westin Monterrey Valle', lat: 25.659491, lng: -100.355848, type: 'hotel', municipio: 'San Pedro Garza García' }
    ];

    function createCustomIcon(ubicacion) {
      const typeToFileName = {
        'centro-comercial': 'CentroComercial.png',
        'edificio': 'Edificio.png', 
        'estadio': 'Estadio.png',
        'aeropuerto': 'Aeropuerto.png',
        'parque': 'Parque.png',
        'hotel': 'Hotel.png'
      };
      
      const fileName = typeToFileName[ubicacion.type] || 'CentroComercial.png';
      const imagePath = `/public/map-pins/${fileName}`;
      
      console.log('🔍 Creando icono para:', ubicacion.name, '→', fileName);
    
    const iconHtml = `
        <div class="circle-wrapper ${ubicacion.type}">
          <img src="${imagePath}" alt="${ubicacion.type}" />
      </div>
    `;
    
    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker-icon',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
      });
    }

    // Agregar marcadores con coordenadas EXACTAS
    ubicaciones.forEach(ubicacion => {
      console.log('📌 Agregando:', ubicacion.name, 'en EXACTAMENTE', ubicacion.lat, ubicacion.lng);
      
      // CREAR COORDENADAS EXACTAS SIN TRANSFORMACIONES
      const exactLat = parseFloat(ubicacion.lat.toFixed(6));
      const exactLng = parseFloat(ubicacion.lng.toFixed(6));
      const latlng = L.latLng(exactLat, exactLng);
      
      console.log('🎯 LatLng EXACTO:', latlng.toString());
      
      // Crear marcador
      const marker = L.marker(latlng, {
        icon: createCustomIcon(ubicacion),
        riseOnHover: true,
        title: ubicacion.name
      });
      
      // POPUP CON COORDENADAS PARA DEBUGGING
      // Popup con información y tags específicos
      const tags = getUbicacionTags(ubicacion);
      const popupContent = `
          <div class="mundial-popup">
            <div class="mundial-popup-header">
            <h3>${ubicacion.name}</h3>
            <span class="mundial-popup-badge ${ubicacion.type}">${ubicacion.type.replace('-', ' ')}</span>
            </div>
          <p class="mundial-popup-description">📍 ${ubicacion.municipio}</p>
            <div class="mundial-popup-stats">
            ${tags.map(tag => `<span class="mundial-popup-tag">${tag}</span>`).join('')}
            </div>
          </div>
      `;
      
      marker.bindPopup(popupContent, {
          className: 'mundial-popup-container'
        });
      
      marker.addTo(map);
      markers[ubicacion.id] = marker;
      
      console.log('✅ Marcador agregado:', ubicacion.id, 'en posición final:', marker.getLatLng().toString());
    });

    console.log('✅ TOTAL:', Object.keys(markers).length, 'marcadores agregados');
    
    // VERIFICACIÓN FINAL DE COORDENADAS
    setTimeout(() => {
      console.log('🔍 VERIFICACIÓN FINAL DE COORDENADAS:');
      ubicaciones.forEach(ubicacion => {
        const marker = markers[ubicacion.id];
        if (marker) {
          const markerPos = marker.getLatLng();
          console.log(`📍 ${ubicacion.name}: Original[${ubicacion.lat}, ${ubicacion.lng}] → Leaflet[${markerPos.lat}, ${markerPos.lng}]`);
        }
      });
    }, 500);
  }

  // INTERACTIVIDAD SINCRONIZADA
  function setupLocationInteractivitySincronizada() {
    console.log('🔗 Configurando interactividad sincronizada...');
    
    // Configurar TODOS los elementos con data-location
    const locationElements = document.querySelectorAll('[data-location]');
    console.log('🎯 Elementos encontrados con data-location:', locationElements.length);
    
    locationElements.forEach(element => {
      const locationId = element.dataset.location;
      console.log('🔍 Configurando elemento:', locationId);
      
      element.addEventListener('click', () => {
        console.log(`🎯 CLICK en: ${locationId}`);
        
        if (markers[locationId]) {
          console.log('✅ Marcador encontrado, animando...');
          const marker = markers[locationId];
          const latlng = marker.getLatLng();
          
          // Animar hacia la ubicación
          map.flyTo(latlng, 15, {
            animate: true,
            duration: 1.5,
            easeLinearity: 0.25
          });
          
          // Abrir popup
          setTimeout(() => {
            marker.openPopup();
          }, 1500);
          
      } else {
          console.error(`❌ No se encontró marcador para: ${locationId}`);
        console.log('Marcadores disponibles:', Object.keys(markers));
      }
      });
      
      // Agregar hover effects
      element.style.cursor = 'pointer';
      element.style.transition = 'transform 0.2s ease';
      
      element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-2px)';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
    });
  });
}

  initMap();
}

function showMapPlaceholder() {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    mapElement.innerHTML = `
      <div class="map-placeholder">
        <div class="placeholder-content">
          <i class="ri-map-pin-line"></i>
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
    button.innerHTML = '<i class="ri-loader-4-line"></i> <span>Enviando...</span>';
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
  console.log('🔍 Abriendo mapa en pantalla completa...');
  
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
      width: 95%;
      height: 95%;
      background: #1f1f1f;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      border: 2px solid #333;
    ">
      <button class="close-fullscreen" onclick="closeFullscreenMap()" style="
        position: absolute;
        top: 15px;
        right: 15px;
        width: 45px;
        height: 45px;
        background: rgba(230, 0, 35, 0.9);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        font-weight: bold;
      " onmouseover="this.style.background='rgba(230, 0, 35, 1)'; this.style.transform='scale(1.1)'" onmouseout="this.style.background='rgba(230, 0, 35, 0.9)'; this.style.transform='scale(1)'">×</button>
      <div id="fullscreen-map" style="width: 100%; height: 100%;"></div>
    </div>
  `;
  
  document.body.appendChild(fullscreenOverlay);
  document.body.style.overflow = 'hidden';
  
  // Esperar a que el DOM se actualice antes de crear el mapa
  setTimeout(() => {
    try {
      console.log('🗺️ Creando mapa fullscreen...');
      
      // Crear nuevo mapa en pantalla completa con configuración exacta
      const fullscreenMapInstance = L.map('fullscreen-map', {
    center: [25.6866, -100.3161],
        zoom: 11,
    zoomControl: true,
        attributionControl: false,
        preferCanvas: false,
        crs: L.CRS.EPSG3857
  });
  
      // Agregar tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '',
        maxZoom: 19,
        className: 'mundial-map-tiles'
      }).addTo(fullscreenMapInstance);
      
      console.log('✅ Tiles agregados al mapa fullscreen');
      
      // Agregar ubicaciones después de un pequeño delay
      setTimeout(() => {
        addUbicacionesFullscreen(fullscreenMapInstance);
        console.log('✅ Ubicaciones agregadas al mapa fullscreen');
        
        // Ajustar vista
        setTimeout(() => {
          fullscreenMapInstance.invalidateSize();
          console.log('✅ Mapa fullscreen redimensionado');
        }, 200);
      }, 300);
      
    } catch (error) {
      console.error('❌ Error creando mapa fullscreen:', error);
    }
  }, 100);
  
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

// Función específica para agregar ubicaciones al mapa fullscreen
function addUbicacionesFullscreen(mapInstance) {
  console.log('📍 Agregando ubicaciones al mapa fullscreen...');
  
  // Mismas ubicaciones con coordenadas exactas
  const ubicaciones = [
    // CENTROS COMERCIALES
    { id: 'arboleda', name: 'Arboleda', lat: 25.649714, lng: -100.356173, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'puntovalle', name: 'Punto Valle, The Town Center', lat: 25.659046, lng: -100.354432, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'chroma', name: 'Chroma San Pedro', lat: 25.652741, lng: -100.352329, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'auriga', name: 'Auriga San Pedro', lat: 25.648843, lng: -100.339116, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'fiesta', name: 'Plaza Fiesta San Agustín', lat: 25.64893, lng: -100.336166, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'metropolitan', name: 'Metropolitan Center', lat: 25.650381, lng: -100.333596, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'fashion', name: 'Fashion Drive', lat: 25.651295, lng: -100.335131, type: 'centro-comercial', municipio: 'San Pedro Garza García' },
    { id: 'galerias', name: 'Galerías Valle Oriente', lat: 25.638228, lng: -100.313963, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'citadel', name: 'Plaza Citadel', lat: 25.726138, lng: -100.215214, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
    { id: 'serena', name: 'Pueblo Serena', lat: 25.576056, lng: -100.24827, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'anahuac', name: 'Plaza Fiesta Anahuac', lat: 25.742955, lng: -100.313308, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
    { id: 'ocampo', name: 'Ocampo Corner', lat: 25.666858, lng: -100.320719, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'mexico', name: 'Plaza México', lat: 25.667518, lng: -100.313174, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'via02', name: 'Plaza Via 02', lat: 25.696587, lng: -100.380189, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'hierro', name: 'Plaza Vía Puerta de Hierro', lat: 25.744716, lng: -100.421793, type: 'centro-comercial', municipio: 'Monterrey' },
    { id: 'lafe', name: 'Paseo La Fe', lat: 25.719691, lng: -100.218991, type: 'centro-comercial', municipio: 'San Nicolás de los Garza' },
    { id: 'molinete', name: 'El Molinete', lat: 25.764616, lng: -100.194068, type: 'centro-comercial', municipio: 'Juárez' },
    { id: 'sendero', name: 'Sendero Apodaca', lat: 25.773959, lng: -100.133334, type: 'centro-comercial', municipio: 'Apodaca' },
    { id: 'portanova', name: 'Portanova', lat: 25.670277, lng: -100.163888, type: 'centro-comercial', municipio: 'Guadalupe' },
    { id: 'citykayser', name: 'City Kayser', lat: 25.731372, lng: -100.253944, type: 'centro-comercial', municipio: 'Escobedo' },
    
    // EDIFICIOS MIXTOS
    { id: 'centrito', name: 'Centrito Valle', lat: 25.654054, lng: -100.349945, type: 'edificio', municipio: 'San Pedro Garza García' },
    { id: 'torre-kr', name: 'Torre KR', lat: 25.655554, lng: -100.340912, type: 'edificio', municipio: 'San Pedro Garza García' },
    
    // UBICACIONES ESPECIALES
    { id: 'estadio', name: 'Estadio BBVA', lat: 25.669079, lng: -100.24437, type: 'estadio', municipio: 'Guadalupe' },
    { id: 'aeropuerto', name: 'Aeropuerto Internacional de Monterrey', lat: 25.77462, lng: -100.11158, type: 'aeropuerto', municipio: 'Apodaca' },
    { id: 'fanfest', name: 'Fan Festival', lat: 25.67715, lng: -100.28232, type: 'parque', municipio: 'Monterrey' },
    { id: 'hotel', name: 'The Westin Monterrey Valle', lat: 25.659491, lng: -100.355848, type: 'hotel', municipio: 'San Pedro Garza García' }
  ];

  const fullscreenMarkers = {};
  
  ubicaciones.forEach(ubicacion => {
    try {
      // Crear icono personalizado
      const iconClass = ubicacion.type === 'edificio' ? 'edificio' : ubicacion.type;
      const iconFileName = getIconFileName(ubicacion.type);
      
      const customIcon = L.divIcon({
        html: `<div class="circle-wrapper ${iconClass}">
                 <img src="/public/map-pins/${iconFileName}" alt="${ubicacion.type}" onerror="this.style.display='none'">
               </div>`,
        className: 'custom-marker-icon',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50]
      });

      // Crear marcador
      const marker = L.marker([ubicacion.lat, ubicacion.lng], { 
        icon: customIcon,
        title: ubicacion.name
      });

      // Popup con información y tags específicos
      const tags = getUbicacionTags(ubicacion);
      const popupContent = `
        <div class="mundial-popup">
          <div class="mundial-popup-header">
            <h3>${ubicacion.name}</h3>
            <span class="mundial-popup-badge ${iconClass}">${ubicacion.type.replace('-', ' ')}</span>
          </div>
          <p class="mundial-popup-description">${ubicacion.municipio}</p>
          <div class="mundial-popup-stats">
            ${tags.map(tag => `<span class="mundial-popup-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

      marker.bindPopup(popupContent, {
        className: 'mundial-popup-container',
        maxWidth: 300,
        closeButton: true
      });

      marker.addTo(mapInstance);
      fullscreenMarkers[ubicacion.id] = marker;

    } catch (error) {
      console.error(`❌ Error agregando ubicación ${ubicacion.name}:`, error);
    }
  });

  console.log(`✅ ${Object.keys(fullscreenMarkers).length} ubicaciones agregadas al mapa fullscreen`);
  
  // Ajustar vista para mostrar todas las ubicaciones
  if (Object.keys(fullscreenMarkers).length > 0) {
    setTimeout(() => {
      const group = new L.featureGroup(Object.values(fullscreenMarkers));
      mapInstance.fitBounds(group.getBounds().pad(0.05));
      console.log('🗺️ Vista del mapa fullscreen ajustada');
    }, 500);
  }
}

function getIconFileName(type) {
  const iconMap = {
    'centro-comercial': 'CentroComercial.png',
    'edificio': 'Edificio.png',
    'estadio': 'Estadio.png',
    'aeropuerto': 'Aeropuerto.png',
    'parque': 'Parque.png',
    'hotel': 'Hotel.png'
  };
  return iconMap[type] || 'CentroComercial.png';
}

function getUbicacionTags(ubicacion) {
  const tagMap = {
    'arboleda': ['🌳 Premium', '🎯 Alto tráfico', '👨‍👩‍👧‍👦 Familiar'],
    'puntovalle': ['🛍️ Shopping', '🎯 Alto tráfico', '🅿️ Amplio estacionamiento'],
    'chroma': ['💎 Moderno', '🎯 Alto tráfico', '🍽️ Gastronomía'],
    'auriga': ['⭐ Experiencias', '🎯 Alto tráfico', '🎭 Entretenimiento'],
    'fiesta': ['🎪 Familiar', '🎯 Alto tráfico', '⚽ Cerca del estadio'],
    'metropolitan': ['🏬 Premium', '🎯 Muy alto tráfico', '💼 Corporativo'],
    'fashion': ['👗 Fashion', '🎯 Alto tráfico', '☕ Cafeterías'],
    'galerias': ['🏪 Familiar', '🎯 Muy alto tráfico', '🎮 Entretenimiento'],
    'citadel': ['🛍️ Accesible', '🎯 Alto tráfico', '🚗 Fácil acceso'],
    'serena': ['🏘️ Residencial', '🎯 Medio tráfico', '🌿 Tranquilo'],
    'anahuac': ['🎊 Entretenimiento', '🎯 Alto tráfico', '👨‍👩‍👧‍👦 Familiar'],
    'ocampo': ['🏙️ Uso mixto', '🎯 Alto tráfico', '💻 Tecnología'],
    'mexico': ['📍 Céntrico', '🎯 Alto tráfico', '🚇 Transporte público'],
    'via02': ['🛣️ Vía principal', '🎯 Medio tráfico', '🚗 Paso vehicular'],
    'hierro': ['🚪 Puerta de entrada', '🎯 Medio tráfico', '🏠 Residencial'],
    'lafe': ['🙏 Pet Friendly', '🎯 Alto tráfico', '🌳 Aire libre'],
    'molinete': ['🎡 Aire libre', '🎯 Medio tráfico', '👨‍👩‍👧‍👦 Familiar'],
    'sendero': ['🛍️ Shopping center', '🎯 Alto tráfico', '🏪 Variedad de tiendas'],
    'portanova': ['🏢 Mixto', '🎯 Medio tráfico', '🎯 Estratégico'],
    'citykayser': ['🏙️ Urbano', '🎯 Medio tráfico', '🎯 Emergente'],
    'centrito': ['🏢 Oficinas', '🎯 Medio tráfico', '💼 Corporativo'],
    'torre-kr': ['🏗️ Torre', '🎯 Medio tráfico', '💼 Ejecutivo'],
    'estadio': ['⚽ Estadio oficial', '🎯 Eventos masivos', '🏆 Mundial 2026'],
    'aeropuerto': ['✈️ Internacional', '🎯 Viajeros globales', '🌍 Punto de entrada'],
    'fanfest': ['🎉 Fan Festival', '🎯 Evento oficial', '🎭 Entretenimiento'],
    'hotel': ['🏨 Hotel Anfitrión', '⭐ Premium', '🏆 Selecciones nacionales']
  };
  
  return tagMap[ubicacion.id] || ['🎯 Ubicación estratégica', '📍 Gran visibilidad'];
}

// ================================
// INICIALIZACIÓN DE LA APP
// ================================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  console.log('🌎 Iniciando Copa Mundial de Fútbol Monterrey 2026 Landing Page...');
  console.log('🔧 Leaflet disponible:', typeof L !== 'undefined');
  console.log('🗺️ Elemento del mapa encontrado:', !!document.getElementById('map'));
  initApp();
});

console.log('🚀 Copa Mundial de Fútbol Monterrey 2026 - JavaScript cargado exitosamente'); 