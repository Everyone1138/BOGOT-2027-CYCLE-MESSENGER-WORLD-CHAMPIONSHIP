// Initialize Lucide icons
lucide.createIcons();

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
        listEl.innerHTML = '<p class="text-beige/60 text-sm">No signups yet. Be the first!</p>';
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
        const extra = data.count > 5 ? ` + ${data.count - 5} more` : '';

        marker.bindPopup(`
      <div class="popup-country">${country}</div>
      <div class="popup-count">${data.count} messenger${data.count > 1 ? 's' : ''} signed up</div>
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
        showFormMessage('Please fill in all fields.', 'error');
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
    showFormMessage(`Welcome to the championships, ${name}! 🚴 You're registered from ${country}.`, 'success');

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
initMap();
updateStats();
updateCountryList();

// Re-initialize Lucide icons after dynamic content
lucide.createIcons();