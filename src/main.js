// ================================
// COPA MUNDIAL DE FÚTBOL MONTERREY 2026 - JavaScript Oficial
// OpenStreetMap + Leaflet (100% Gratuito)
// ================================

class LandingApp {
  constructor() {
    this.map = null;
    this.markers = {};
    this.init();
  }

  init() {
    // Inicializar funciones básicas
    this.initCountdown();
    this.initContactForm();
    this.initNavigation();
    this.initAvailabilityAnimation();
    this.initBasicAnimations();
    this.initOpenStreetMap();
    
    console.log('Copa Mundial de Fútbol Monterrey 2026 - Landing App iniciada correctamente con OpenStreetMap');
  }

  // ================================
  // OpenStreetMap + Leaflet Integration
  // ================================
  initOpenStreetMap() {
    // Esperar a que Leaflet esté disponible
    if (typeof L === 'undefined') {
      console.warn('Leaflet no está disponible, mostrando placeholder');
      this.showMapPlaceholder();
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
      this.map = L.map('map', {
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
      }).addTo(this.map);

      // Ubicaciones Copa Mundial 2026 Monterrey
      this.addMundialLocations();
      
      // Configurar interactividad con la lista de ubicaciones
      this.setupLocationInteractivity();

      console.log('✅ Mapa OpenStreetMap Copa Mundial 2026 inicializado correctamente');

    } catch (error) {
      console.error('Error inicializando OpenStreetMap:', error);
      this.showMapPlaceholder();
    }
  }

  addMundialLocations() {
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/CentroComercial.png',
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
        image: '/map-pins/Edificio.png',
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
        image: '/map-pins/Edificio.png',
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
        image: '/map-pins/Estadio.png',
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
        image: '/map-pins/Aeropuerto.png',
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
        image: '/map-pins/Parque.png',
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
        .addTo(this.map);

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
      this.markers[location.id] = marker;

      // Evento al hacer clic en el marcador (solo para ubicaciones que se muestran en cards)
      marker.on('click', () => {
        if (location.showInCards) {
          this.highlightLocationItem(location.id);
        } else if (location.special) {
          // Para ubicaciones especiales, destacar su tarjeta especial
          this.highlightSpecialCard(location.id);
        }
      });
    });
  }

  setupLocationInteractivity() {
    // Ubicaciones normales
    const locationItems = document.querySelectorAll('.ubicacion-item');
    locationItems.forEach((item) => {
      const locationId = item.getAttribute('data-location');
      
      item.addEventListener('click', () => {
        if (this.markers[locationId]) {
          // Centrar mapa en la ubicación con zoom perfecto y padding
          const marker = this.markers[locationId];
          const coords = marker.getLatLng();
          
          // Usar flyTo para un centrado más suave y preciso
          this.map.flyTo(coords, 15, {
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
          this.highlightLocationItem(locationId);
        }
      });
    });

    // Tarjetas especiales
    const specialCards = document.querySelectorAll('.special-card');
    specialCards.forEach((card) => {
      const locationId = card.getAttribute('data-location');
      
      card.addEventListener('click', () => {
        if (this.markers[locationId]) {
          // Centrar mapa en la ubicación especial con zoom específico
          const marker = this.markers[locationId];
          const coords = marker.getLatLng();
          
          // Zoom diferente para ubicaciones especiales (más amplio)
          this.map.flyTo(coords, 14, {
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
          this.highlightSpecialCard(locationId);
        }
      });
    });
  }

  highlightLocationItem(locationId) {
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

  highlightSpecialCard(locationId) {
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

  showMapPlaceholder() {
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
  initBasicAnimations() {
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
  initCountdown() {
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
        this.updateCountdownElement('days', days);
        this.updateCountdownElement('hours', hours);
        this.updateCountdownElement('minutes', minutes);
        this.updateCountdownElement('seconds', seconds);
      } else {
        // El evento ya comenzó
        this.updateCountdownElement('days', 0);
        this.updateCountdownElement('hours', 0);
        this.updateCountdownElement('minutes', 0);
        this.updateCountdownElement('seconds', 0);
        
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

  updateCountdownElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
      const formattedValue = id === 'days' ? 
        value.toString().padStart(3, '0') : 
        value.toString().padStart(2, '0');
      
      if (element.textContent !== formattedValue) {
        element.textContent = formattedValue;
        
        // Animación mejorada de actualización con colores Copa Mundial de Fútbol
        element.style.transform = 'scale(1.15)';
        element.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        element.style.filter = 'brightness(1.3)';
        
        setTimeout(() => {
          element.style.transform = 'scale(1)';
          element.style.filter = 'brightness(1)';
        }, 400);
      }
    }
  }

  // ================================
  // Formulario de contacto
  // ================================
  initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = form.querySelector('.form-submit');
      const originalText = submitButton.querySelector('span').textContent;
      
      try {
        // Cambiar estado del botón
        this.setButtonLoading(submitButton, true);
        
        // Simular envío (aquí integrarías con tu backend)
        await this.simulateFormSubmission();
        
        // Mostrar mensaje de éxito
        this.showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto para discutir tu espacio publicitario en el Mundial 2026.', 'success');
        
        // Limpiar formulario
        form.reset();
        
      } catch (error) {
        console.error('Error al enviar formulario:', error);
        this.showNotification('Error al enviar el mensaje. Por favor intenta de nuevo o contáctanos directamente.', 'error');
      } finally {
        this.setButtonLoading(submitButton, false, originalText);
      }
    });

    // Validación en tiempo real
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  async simulateFormSubmission() {
    // Simular delay de red
    return new Promise(resolve => setTimeout(resolve, 1500));
  }

  setButtonLoading(button, loading, originalText = '') {
    const span = button.querySelector('span');
    if (loading) {
      span.textContent = 'Enviando...';
      button.disabled = true;
      button.style.opacity = '0.7';
      button.style.transform = 'scale(0.98)';
    } else {
      span.textContent = originalText || 'Enviar Mensaje';
      button.disabled = false;
      button.style.opacity = '1';
      button.style.transform = 'scale(1)';
    }
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    // Limpiar error previo
    this.clearFieldError(field);

    // Validaciones por tipo
    switch (field.type) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          isValid = false;
          message = 'Por favor ingresa un email válido';
        }
        break;
      case 'tel':
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
        if (value && !phoneRegex.test(value)) {
          isValid = false;
          message = 'Por favor ingresa un teléfono válido';
        }
        break;
      default:
        if (field.required && !value) {
          isValid = false;
          message = 'Este campo es obligatorio';
        }
        break;
    }

    if (!isValid) {
      this.showFieldError(field, message);
    }

    return isValid;
  }

  showFieldError(field, message) {
    field.style.borderColor = '#FF5722';
    field.style.boxShadow = '0 0 0 3px rgba(255, 87, 34, 0.1)';
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'field-error';
      errorElement.style.color = '#FF5722';
      errorElement.style.fontSize = '0.875rem';
      errorElement.style.marginTop = '0.25rem';
      errorElement.style.fontWeight = '500';
      field.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const bgColor = type === 'success' ? '#00D4AA' : '#FF5722';
    
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${bgColor};
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
        ${message}
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
    `;
    
    document.body.appendChild(notification);
    
    // Auto cerrar después de 6 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = 'slideOutRight 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
      }
    }, 6000);
  }

  // ================================
  // Navegación
  // ================================
  initNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll suave para links de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = nav.offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Cambiar apariencia del nav al hacer scroll con efecto Copa Mundial de Fútbol
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    });
  }

  // ================================
  // Animación de disponibilidad
  // ================================
  initAvailabilityAnimation() {
    const progressBar = document.querySelector('.availability-progress');
    if (!progressBar) return;

    // Observer para animar cuando sea visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animar de 0% a 72% con curva Copa Mundial de Fútbol
          let width = 0;
          const targetWidth = 72;
          const duration = 2500; // 2.5 segundos
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Curva de animación suave
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            width = targetWidth * easeOutCubic;
            
            progressBar.style.width = width + '%';
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          
          // Desconectar observer después de animar
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(progressBar.parentElement);
  }

  // ================================
  // Integración de Calendly y Contacto Empresarial
  // ================================
  
  // Función para cargar Calendly dinámicamente
  loadCalendly() {
    // Reemplaza 'tu-usuario-calendly' con tu nombre de usuario real
    const calendlyUrl = 'https://calendly.com/tu-usuario-calendly/reunion-mundial-2026';
    
    // Opción 1: Abrir en ventana nueva (más simple)
    window.open(calendlyUrl, '_blank', 'width=800,height=600');
    
    // Opción 2: Cargar widget embebido (requiere script de Calendly)
    // this.loadCalendlyWidget(calendlyUrl);
  }
  
  // Función para cargar widget embebido de Calendly
  loadCalendlyWidget(url) {
    // Cargar script de Calendly si no está cargado
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.onload = () => {
        this.renderCalendlyWidget(url);
      };
      document.head.appendChild(script);
    } else {
      this.renderCalendlyWidget(url);
    }
  }
  
  renderCalendlyWidget(url) {
    const widgetContainer = document.getElementById('calendly-widget');
    widgetContainer.innerHTML = '';
    
    window.Calendly.initInlineWidget({
      url: url,
      parentElement: widgetContainer,
      prefill: {},
      utm: {
        utmCampaign: 'Mundial 2026 Monterrey',
        utmSource: 'Landing Page',
        utmMedium: 'Website'
      }
    });
  }
  
  // Función para enviar email de reserva directo
  sendEmailBooking() {
    const emailData = {
      to: 'reservas@mundialmty2026.com', // Cambia por tu email empresarial
      subject: 'Solicitud de Reserva - Espacios Publicitarios Mundial 2026',
      body: this.generateEmailBody()
    };
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailData.to}&su=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    window.open(gmailUrl, '_blank');
  }
  
  generateEmailBody() {
    return `Hola,

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
Fecha: ${new Date().toLocaleDateString('es-MX')}`;
  }
  
  // Función para WhatsApp Business
  openWhatsAppBooking() {
    const phoneNumber = '5218112345678'; // Cambia por tu número empresarial (con código de país)
    const message = `¡Hola! Me interesa reservar espacios publicitarios para la Copa Mundial de Fútbol Monterrey 2026. 

¿Podrían proporcionarme información sobre:
- Ubicaciones disponibles
- Tipos de formatos publicitarios
- Precios y paquetes
- Proceso de reserva

¡Gracias!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  // ================================
  // Funciones helper para formularios
  // ================================
  
  // Función para pre-llenar formulario con datos de URL parameters
  prefillFormFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const formFields = ['nombre', 'empresa', 'email', 'telefono'];
    
    formFields.forEach(field => {
      const value = urlParams.get(field);
      const input = document.getElementById(field);
      if (value && input) {
        input.value = decodeURIComponent(value);
      }
    });
  }

  // ================================
  // Sistema de seguimiento de interacciones
  // ================================
  
  trackUserInteraction(action, details = {}) {
    const interactionData = {
      timestamp: new Date().toISOString(),
      action: action,
      details: details,
      page: 'Copa Mundial 2026 Landing',
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    console.log('Interacción registrada:', interactionData);
    
    // Aquí puedes enviar los datos a tu sistema de analytics
    // Ejemplo con Google Analytics:
    // gtag('event', action, details);
    
    // Ejemplo con analytics personalizado:
    // this.sendToAnalytics(interactionData);
  }
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
// Inicialización de la aplicación
// ================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado, inicializando Copa Mundial de Fútbol Monterrey 2026 con OpenStreetMap...');
  appInstance = new LandingApp();
  
  // Pre-llenar formulario si hay parámetros en URL
  appInstance.prefillFormFromURL();
}); 