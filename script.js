// Initialize Lucide icons
lucide.createIcons();


// ===== LANGUAGE SWITCHER =====
const LANG_KEY = 'cmwc_language';
let currentLang = localStorage.getItem(LANG_KEY) || 'en';

const translations = {
    en: {
        pageTitle: 'World Bike Messenger Championships',
        navAbout: 'ABOUT',
        navGallery: 'GALLERY',
        navMap: 'GLOBAL MAP',
        navSignup: 'SIGN UP',
        eyebrow: 'BOGOTÁ • 2027 • COURIER CULTURE',
        heroTitle: 'CYCLE MESSENGER<br> WORLD CHAMPIONSHIP',
        heroText: 'A moving gallery of speed, cargo, alleycats, night rides, and the global messenger community coming to Bogotá.',
        heroRegister: 'REGISTER NOW',
        heroGallery: 'VIEW GALLERY',
        statSignups: 'Signups',
        statCountries: 'Countries',
        statEvents: 'Events',
        statYears: 'Years',
        aboutTitle: 'ABOUT THE CHAMPIONSHIPS',
        aboutText: 'Born in the streets, raised by the couriers. The World Bike Messenger Championships bring together the fastest, most skilled urban cyclists from every corner of the globe.',
        carouselTitle1: 'THE MAIN RACE',
        carouselText1: 'Navigate city streets, deliver packages, beat the clock. A test of speed, skill, and street knowledge.',
        carouselTitle2: 'TRACK COMPETITIONS',
        carouselText2: 'Sprints, time trials, and skid contests. Pure cycling skill on closed circuits.',
        carouselTitle3: 'GLOBAL COMMUNITY',
        carouselText3: 'Meet messengers from Tokyo to New York. Forge friendships that span continents.',
        carouselTitle4: 'ALLEYCAT RACES',
        carouselText4: 'Open-street checkpoint races inspired by the daily work of bike messengers worldwide.',
        galleryTitle: 'GALLERY',
        galleryText: 'Moments captured from past championships around the world.',
        mapTitle: 'GLOBAL SIGNUPS',
        mapText: 'See where messengers from around the world are signing up. Each marker represents a country with registered competitors.',
        topCountries: 'TOP COUNTRIES',
        noSignups: 'No signups yet. Be the first!',
        signupTitle: 'SIGN UP',
        signupText: 'Register your spot at the Cycle Messenger World Championship Bogotá 2027.',
        fullName: 'FULL NAME',
        email: 'EMAIL',
        country: 'COUNTRY',
        city: 'CITY',
        experience: 'YEARS OF EXPERIENCE',
        terms: 'I agree to the championship rules and confirm I am 18 years or older.',
        submit: 'REGISTER NOW',
        placeholderName: 'Your full name',
        placeholderEmail: 'you@example.com',
        placeholderCountry: '-- Select your country --',
        placeholderCity: 'Your city',
        footerText: 'World Bike Messenger Championships. The premier global event for urban cycling couriers.',
        quickLinks: 'QUICK LINKS',
        followUs: 'FOLLOW US',
        footerRights: '© 2027 Cycle Messenger World Championship Bogotá. All rights reserved.',
        formMissing: 'Please fill in all fields.',
        formSuccess: (name, country) => `Welcome to the championships, ${name}! 🚴 You're registered from ${country}.`,
        popupSignedUp: (count) => `${count} messenger${count > 1 ? 's' : ''} signed up`,
        popupMore: (count) => ` + ${count} more`,
        heroAriaPrev: 'Previous hero image',
        heroAriaNext: 'Next hero image',
        heroAriaDot: (index) => `Show hero image ${index + 1}`,
        heroCaptions: [
            'Heavy loads. Fast streets. Bogotá energy.',
            'Night races, courier culture, and city lights.',
            'Community before, during, and after every race.',
            'Packages, checkpoints, radios, and pressure.',
            'Cargo races built from messenger work.',
            'The velodrome meets the street.',
            'Bogotá nights. Bikes everywhere.'
        ]
    },
    es: {
        pageTitle: 'Campeonato Mundial de Mensajeros en Bicicleta',
        navAbout: 'SOBRE EL EVENTO',
        navGallery: 'GALERÍA',
        navMap: 'MAPA GLOBAL',
        navSignup: 'INSCRÍBETE',
        eyebrow: 'BOGOTÁ • 2027 • CULTURA MENSAJERA',
        heroTitle: 'CAMPEONATO MUNDIAL<br>DE MENSAJERIA EN BICICLETA',
        heroText: 'Una galería en movimiento de velocidad, carga, alleycats, rodadas nocturnas y comunidad mensajera global llegando a Bogotá.',
        heroRegister: 'INSCRÍBETE AHORA',
        heroGallery: 'VER GALERÍA',
        statSignups: 'Inscritos',
        statCountries: 'Países',
        statEvents: 'Eventos',
        statYears: 'Años',
        aboutTitle: 'SOBRE EL CAMPEONATO',
        aboutText: 'Nacido en las calles y criado por los mensajeros. El Campeonato Mundial de Mensajeros en Bicicleta reúne a los ciclistas urbanos más rápidos y hábiles de todos los rincones del mundo.',
        carouselTitle1: 'LA CARRERA PRINCIPAL',
        carouselText1: 'Navega las calles de la ciudad, entrega paquetes y vence el reloj. Una prueba de velocidad, técnica y conocimiento callejero.',
        carouselTitle2: 'COMPETENCIAS DE PISTA',
        carouselText2: 'Sprints, contrarreloj y concursos de skid. Habilidad pura sobre circuitos cerrados.',
        carouselTitle3: 'COMUNIDAD GLOBAL',
        carouselText3: 'Conoce mensajeros de Tokio a Nueva York. Crea amistades que cruzan continentes.',
        carouselTitle4: 'CARRERAS ALLEYCAT',
        carouselText4: 'Carreras urbanas de checkpoints inspiradas en el trabajo diario de mensajeros de todo el mundo.',
        galleryTitle: 'GALERÍA',
        galleryText: 'Momentos capturados de campeonatos anteriores alrededor del mundo.',
        mapTitle: 'INSCRIPCIONES GLOBALES',
        mapText: 'Mira desde dónde se están inscribiendo mensajeros de todo el mundo. Cada marcador representa un país con competidores registrados.',
        topCountries: 'PAÍSES DESTACADOS',
        noSignups: 'Todavía no hay inscritos. ¡Sé el primero!',
        signupTitle: 'INSCRÍBETE',
        signupText: 'Registra tu cupo para el Campeonato Mundial de Mensajeros en Bicicleta Bogotá 2027.',
        fullName: 'NOMBRE COMPLETO',
        email: 'CORREO ELECTRÓNICO',
        country: 'PAÍS',
        city: 'CIUDAD',
        experience: 'AÑOS DE EXPERIENCIA',
        terms: 'Acepto las reglas del campeonato y confirmo que tengo 18 años o más.',
        submit: 'INSCRÍBETE AHORA',
        placeholderName: 'Tu nombre completo',
        placeholderEmail: 'tu@correo.com',
        placeholderCountry: '-- Selecciona tu país --',
        placeholderCity: 'Tu ciudad',
        footerText: 'Campeonato Mundial de Mensajeros en Bicicleta. El evento global principal para couriers urbanos en bicicleta.',
        quickLinks: 'ENLACES',
        followUs: 'SÍGUENOS',
        footerRights: '© 2027 Campeonato Mundial de Mensajeros en Bicicleta Bogotá. Todos los derechos reservados.',
        formMissing: 'Por favor completa todos los campos.',
        formSuccess: (name, country) => `¡Bienvenido al campeonato, ${name}! 🚴 Estás inscrito desde ${country}.`,
        popupSignedUp: (count) => `${count} mensajero${count > 1 ? 's' : ''} inscrito${count > 1 ? 's' : ''}`,
        popupMore: (count) => ` + ${count} más`,
        heroAriaPrev: 'Imagen anterior del hero',
        heroAriaNext: 'Siguiente imagen del hero',
        heroAriaDot: (index) => `Mostrar imagen ${index + 1} del hero`,
        heroCaptions: [
            'Cargas pesadas. Calles rápidas. Energía bogotana.',
            'Carreras nocturnas, cultura courier y luces de ciudad.',
            'Comunidad antes, durante y después de cada carrera.',
            'Paquetes, checkpoints, radios y presión.',
            'Carreras de carga nacidas del trabajo mensajero.',
            'El velódromo se encuentra con la calle.',
            'Noches bogotanas. Bicis por todas partes.'
        ]
    }
};

function tr(key) {
    return translations[currentLang]?.[key] ?? translations.en[key] ?? '';
}

function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => {
        el.textContent = value;
    });
}

function setHTML(selector, value) {
    document.querySelectorAll(selector).forEach(el => {
        el.innerHTML = value;
    });
}

function setAttr(selector, attr, value) {
    document.querySelectorAll(selector).forEach(el => {
        el.setAttribute(attr, value);
    });
}

function applyLanguage(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem(LANG_KEY, currentLang);
    document.documentElement.lang = currentLang;
    document.title = tr('pageTitle');

    setText('a[href="#about"]', tr('navAbout'));
    setText('a[href="#gallery"]', tr('navGallery'));
    setText('a[href="#map"]', tr('navMap'));
    setText('a[href="#signup"]', tr('navSignup'));

    setText('.hero-eyebrow', tr('eyebrow'));
    setHTML('#hero h1', tr('heroTitle'));
    setText('#hero .text-beige\\/90', tr('heroText'));
    setText('#hero a[href="#signup"]', tr('heroRegister'));
    setText('#hero a[href="#gallery"]', tr('heroGallery'));
    setAttr('#hero-prev', 'aria-label', tr('heroAriaPrev'));
    setAttr('#hero-next', 'aria-label', tr('heroAriaNext'));

    heroSlides.forEach((slide, index) => {
        slide.dataset.caption = tr('heroCaptions')[index] || slide.dataset.caption || '';
    });
    if (heroCaption && heroSlides[heroCurrent]) {
        heroCaption.textContent = heroSlides[heroCurrent].dataset.caption || '';
    }
    if (heroDots) {
        Array.from(heroDots.children).forEach((dot, index) => dot.setAttribute('aria-label', tr('heroAriaDot')(index)));
    }

    const statLabels = document.querySelectorAll('.border-y-2 .text-beige\\/70');
    if (statLabels[0]) statLabels[0].textContent = tr('statSignups');
    if (statLabels[1]) statLabels[1].textContent = tr('statCountries');
    if (statLabels[2]) statLabels[2].textContent = tr('statEvents');
    if (statLabels[3]) statLabels[3].textContent = tr('statYears');

    setText('#about h2', tr('aboutTitle'));
    setText('#about > div > p', tr('aboutText'));
    const carouselTitles = document.querySelectorAll('#carousel h3');
    const carouselTexts = document.querySelectorAll('#carousel p');
    ['1','2','3','4'].forEach((n, i) => {
        if (carouselTitles[i]) carouselTitles[i].textContent = tr(`carouselTitle${n}`);
        if (carouselTexts[i]) carouselTexts[i].textContent = tr(`carouselText${n}`);
    });

    setText('#gallery h2', tr('galleryTitle'));
    setText('#gallery > div > p', tr('galleryText'));
    setText('#map h2', tr('mapTitle'));
    setText('#map > div > p', tr('mapText'));
    setText('#map h3', tr('topCountries'));

    setText('#signup h2', tr('signupTitle'));
    setText('#signup > div > p', tr('signupText'));
    setText('label[for="name"]', tr('fullName'));
    setText('label[for="email"]', tr('email'));
    setText('label[for="country"]', tr('country'));
    setText('label[for="city"]', tr('city'));
    setText('label[for="experience"]', tr('experience'));
    setText('label[for="terms"]', tr('terms'));
    setText('#signup-form button[type="submit"]', tr('submit'));
    setAttr('#name', 'placeholder', tr('placeholderName'));
    setAttr('#email', 'placeholder', tr('placeholderEmail'));
    setAttr('#city', 'placeholder', tr('placeholderCity'));
    const firstCountryOption = document.querySelector('#country option[value=""]');
    if (firstCountryOption) firstCountryOption.textContent = tr('placeholderCountry');

    const footerColumns = document.querySelectorAll('footer .max-w-7xl > div');
    if (footerColumns[0]?.querySelector('p')) footerColumns[0].querySelector('p').textContent = tr('footerText');
    setText('footer h4:nth-of-type(1)', tr('quickLinks'));
    const footerHeadings = document.querySelectorAll('footer h4');
    if (footerHeadings[0]) footerHeadings[0].textContent = tr('quickLinks');
    if (footerHeadings[1]) footerHeadings[1].textContent = tr('followUs');
    const footerLinks = document.querySelectorAll('footer li a');
    if (footerLinks[0]) footerLinks[0].textContent = currentLang === 'es' ? 'Sobre el evento' : 'About';
    if (footerLinks[1]) footerLinks[1].textContent = currentLang === 'es' ? 'Galería' : 'Gallery';
    if (footerLinks[2]) footerLinks[2].textContent = currentLang === 'es' ? 'Mapa global' : 'Global Map';
    if (footerLinks[3]) footerLinks[3].textContent = currentLang === 'es' ? 'Inscríbete' : 'Sign Up';
    const copyright = document.querySelector('footer .border-t.text-center');
    if (copyright) copyright.textContent = tr('footerRights');

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        const isActive = btn.dataset.lang === currentLang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    updateCountryList();
    if (map) updateMapMarkers();
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLang);
}

// ===== HERO MOVING GALLERY =====
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.getElementById('hero-dots');
const heroCaption = document.getElementById('hero-caption');
const heroProgress = document.getElementById('hero-progress-bar');
const heroSection = document.getElementById('hero');
const HERO_DELAY = 5500;
let heroCurrent = 0;
let heroTimer;

function buildHeroDots() {
    if (!heroDots || heroSlides.length === 0) return;
    heroDots.innerHTML = '';
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'hero-dot';
        dot.setAttribute('aria-label', tr('heroAriaDot')(index));
        dot.addEventListener('click', () => showHeroSlide(index, true));
        heroDots.appendChild(dot);
    });
}

function resetHeroProgress() {
    if (!heroProgress) return;
    heroProgress.style.transition = 'none';
    heroProgress.style.width = '0%';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            heroProgress.style.transition = `width ${HERO_DELAY}ms linear`;
            heroProgress.style.width = '100%';
        });
    });
}

function showHeroSlide(index, userAction = false) {
    if (heroSlides.length === 0) return;
    heroCurrent = (index + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, i) => {
        const isActive = i === heroCurrent;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    if (heroDots) {
        Array.from(heroDots.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === heroCurrent);
        });
    }

    if (heroCaption) {
        heroCaption.textContent = heroSlides[heroCurrent].dataset.caption || '';
    }

    resetHeroProgress();

    if (userAction) {
        restartHeroTimer();
    }
}

function nextHeroSlide() {
    showHeroSlide(heroCurrent + 1);
}

function prevHeroSlide() {
    showHeroSlide(heroCurrent - 1, true);
}

function restartHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHeroSlide, HERO_DELAY);
}

buildHeroDots();
showHeroSlide(0);
restartHeroTimer();

document.getElementById('hero-next')?.addEventListener('click', () => showHeroSlide(heroCurrent + 1, true));
document.getElementById('hero-prev')?.addEventListener('click', prevHeroSlide);

heroSection?.addEventListener('mouseenter', () => clearInterval(heroTimer));
heroSection?.addEventListener('mouseleave', restartHeroTimer);



// ===== COUNTRY DATA (with coordinates) =====
const countryData = {
    "United States": { lat: 39.8283, lng: -98.5795, code: "US" },
    "Canada": { lat: 56.1304, lng: -106.3468, code: "CA" },
    "Mexico": { lat: 23.6345, lng: -102.5528, code: "MX" },
    "Brazil": { lat: -14.2350, lng: -51.9253, code: "BR" },
    "Argentina": { lat: -38.4161, lng: -63.6167, code: "AR" },
    "Chile": { lat: -35.6751, lng: -71.5430, code: "CL" },
    "Colombia": { lat: 4.5709, lng: -74.2973, code: "CO" },
    "Peru": { lat: -9.1900, lng: -75.0152, code: "PE" },
    "United Kingdom": { lat: 55.3781, lng: -3.4360, code: "GB" },
    "France": { lat: 46.2276, lng: 2.2137, code: "FR" },
    "Germany": { lat: 51.1657, lng: 10.4515, code: "DE" },
    "Spain": { lat: 40.4637, lng: -3.7492, code: "ES" },
    "Italy": { lat: 41.8719, lng: 12.5674, code: "IT" },
    "Portugal": { lat: 39.3999, lng: -8.2245, code: "PT" },
    "Netherlands": { lat: 52.1326, lng: 5.2913, code: "NL" },
    "Belgium": { lat: 50.5039, lng: 4.4699, code: "BE" },
    "Switzerland": { lat: 46.8182, lng: 8.2275, code: "CH" },
    "Austria": { lat: 47.5162, lng: 14.5501, code: "AT" },
    "Poland": { lat: 51.9194, lng: 19.1451, code: "PL" },
    "Sweden": { lat: 60.1282, lng: 18.6435, code: "SE" },
    "Norway": { lat: 60.4720, lng: 8.4689, code: "NO" },
    "Denmark": { lat: 56.2639, lng: 9.5018, code: "DK" },
    "Finland": { lat: 61.9241, lng: 25.7482, code: "FI" },
    "Ireland": { lat: 53.4129, lng: -8.2439, code: "IE" },
    "Czech Republic": { lat: 49.8175, lng: 15.4730, code: "CZ" },
    "Greece": { lat: 39.0742, lng: 21.8243, code: "GR" },
    "Hungary": { lat: 47.1625, lng: 19.5033, code: "HU" },
    "Romania": { lat: 45.9432, lng: 24.9668, code: "RO" },
    "Russia": { lat: 61.5240, lng: 105.3188, code: "RU" },
    "Ukraine": { lat: 48.3794, lng: 31.1656, code: "UA" },
    "Turkey": { lat: 38.9637, lng: 35.2433, code: "TR" },
    "Japan": { lat: 36.2048, lng: 138.2529, code: "JP" },
    "China": { lat: 35.8617, lng: 104.1954, code: "CN" },
    "South Korea": { lat: 35.9078, lng: 127.7669, code: "KR" },
    "India": { lat: 20.5937, lng: 78.9629, code: "IN" },
    "Thailand": { lat: 15.8700, lng: 100.9925, code: "TH" },
    "Vietnam": { lat: 14.0583, lng: 108.2772, code: "VN" },
    "Indonesia": { lat: -0.7893, lng: 113.9213, code: "ID" },
    "Philippines": { lat: 12.8797, lng: 121.7740, code: "PH" },
    "Australia": { lat: -25.2744, lng: 133.7751, code: "AU" },
    "New Zealand": { lat: -40.9006, lng: 174.8860, code: "NZ" },
    "South Africa": { lat: -30.5595, lng: 22.9375, code: "ZA" },
    "Egypt": { lat: 26.8206, lng: 30.8025, code: "EG" },
    "Morocco": { lat: 31.7917, lng: -7.0926, code: "MA" },
    "Nigeria": { lat: 9.0820, lng: 8.6753, code: "NG" },
    "Kenya": { lat: -0.0236, lng: 37.9062, code: "KE" },
    "Israel": { lat: 31.0461, lng: 34.8516, code: "IL" },
    "UAE": { lat: 23.4241, lng: 53.8478, code: "AE" },
    "Saudi Arabia": { lat: 23.8859, lng: 45.0792, code: "SA" },
    "Singapore": { lat: 1.3521, lng: 103.8198, code: "SG" },
    "Malaysia": { lat: 4.2105, lng: 101.9758, code: "MY" }
};

// ===== POPULATE COUNTRY DROPDOWN =====
const countrySelect = document.getElementById('country');
Object.keys(countryData).sort().forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

// ===== SIGNUP STORAGE =====
const STORAGE_KEY = 'wbmc_signups';

function getSignups() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveSignup(signup) {
    const signups = getSignups();
    signups.push(signup);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(signups));
}

function getSignupsByCountry() {
    const signups = getSignups();
    const byCountry = {};
    signups.forEach(s => {
        if (!byCountry[s.country]) {
            byCountry[s.country] = { count: 0, names: [] };
        }
        byCountry[s.country].count++;
        byCountry[s.country].names.push(s.name);
    });
    return byCountry;
}

// ===== STATS UPDATE =====
function updateStats() {
    const signups = getSignups();
    const countries = new Set(signups.map(s => s.country));

    // Animate the counter
    animateCounter(document.getElementById('stat-signups'), signups.length);
    animateCounter(document.getElementById('stat-countries'), countries.size);
}

function animateCounter(element, target) {
    const current = parseInt(element.textContent) || 0;
    const duration = 800;
    const steps = 30;
    const increment = (target - current) / steps;
    let step = 0;

    const interval = setInterval(() => {
        step++;
        const value = Math.round(current + (increment * step));
        element.textContent = step >= steps ? target : value;
        if (step >= steps) clearInterval(interval);
    }, duration / steps);
}

// ===== COUNTRY LIST / LEADERBOARD =====
function updateCountryList() {
    const byCountry = getSignupsByCountry();
    const listEl = document.getElementById('country-list');

    const entries = Object.entries(byCountry).sort((a, b) => b[1].count - a[1].count);

    if (entries.length === 0) {
        listEl.innerHTML = `<p class="text-beige/60 text-sm">${tr('noSignups')}</p>`;
        return;
    }

    listEl.innerHTML = entries.map(([country, data]) => `
    <div class="country-item">
      <span class="country-name">${country}</span>
      <span class="country-count">${data.count}</span>
    </div>
  `).join('');
}

// ===== LEAFLET MAP =====
let map;
let mapMarkers = [];

function initMap() {
    map = L.map('leaflet-map', {
        zoomControl: true,
        scrollWheelZoom: false,
        worldCopyJump: true
    }).setView([20, 0], 2);

    // Use a clean, minimal tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap, © CARTO',
        maxZoom: 18,
    }).addTo(map);

    updateMapMarkers();
}

function updateMapMarkers() {
    // Remove existing markers
    mapMarkers.forEach(m => map.removeLayer(m));
    mapMarkers = [];

    const byCountry = getSignupsByCountry();

    Object.entries(byCountry).forEach(([country, data]) => {
        const coords = countryData[country];
        if (!coords) return;

        // Marker size based on count
        const size = Math.min(40 + data.count * 4, 60);
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="width:${size}px;height:${size}px;">${data.count}</div>`,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2]
        });

        const marker = L.marker([coords.lat, coords.lng], { icon }).addTo(map);

        const namesList = data.names.slice(0, 5).join(', ');
        const extra = data.count > 5 ? tr('popupMore')(data.count - 5) : '';

        marker.bindPopup(`
      <div class="popup-country">${country}</div>
      <div class="popup-count">${tr('popupSignedUp')(data.count)}</div>
      <div style="font-size:0.75rem;opacity:0.7;margin-top:6px;">${namesList}${extra}</div>
    `);

        mapMarkers.push(marker);
    });
}

// ===== FORM SUBMISSION =====
const form = document.getElementById('signup-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value.trim();
    const experience = document.getElementById('experience').value;

    if (!name || !email || !country || !city || experience === '') {
        showFormMessage(tr('formMissing'), 'error');
        return;
    }

    const signup = {
        name,
        email,
        country,
        city,
        experience: parseInt(experience),
        timestamp: Date.now()
    };

    saveSignup(signup);

    // Refresh everything
    updateStats();
    updateCountryList();
    updateMapMarkers();

    // Show success message
    showFormMessage(tr('formSuccess')(name, country), 'success');

    // Reset form
    form.reset();

    // Scroll to map to show their marker
    setTimeout(() => {
        document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

function showFormMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `p-4 rounded-sm text-center font-medium ${type === 'success' ? 'form-success' : 'form-error'}`;
    formMessage.classList.remove('hidden');

    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// ===== CAROUSEL =====
const carousel = document.getElementById('carousel');
const carouselSlides = carousel.children;
const totalSlides = carouselSlides.length;
let currentSlide = 0;

// Create dots
const dotsContainer = document.getElementById('carousel-dots');
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    // Update dots
    Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    updateCarousel();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

document.getElementById('carousel-next').addEventListener('click', nextSlide);
document.getElementById('carousel-prev').addEventListener('click', prevSlide);

// Auto-advance carousel
let carouselInterval = setInterval(nextSlide, 5000);

// Pause on hover
const carouselContainer = carousel.parentElement;
carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carouselContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 5000);
});

// Initialize first dot
updateCarousel();

// ===== GALLERY LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const fullSrc = item.getAttribute('data-full');
        lightboxImg.src = fullSrc;
        lightbox.classList.add('active');
        lightbox.classList.remove('hidden');
        lightbox.style.display = 'flex';
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.classList.add('hidden');
    lightbox.style.display = 'none';
}

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ===== INITIALIZE EVERYTHING =====
setupLanguageSwitcher();
initMap();
updateStats();
updateCountryList();

// Re-initialize Lucide icons after dynamic content
lucide.createIcons();