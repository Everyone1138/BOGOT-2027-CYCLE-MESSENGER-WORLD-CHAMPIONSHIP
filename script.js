// Initialize Lucide icons only when the CDN is available
if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
}

// ===== LANGUAGE SWITCHER =====

// NOTE ABOUT FORMATTERS:
// Blank lines or extra indentation do not break JavaScript. If this file stops working after save,
// check for a red error in the browser Console. The selectors below avoid Tailwind slash classes
// like .text-beige/90 because those need special escaping in JavaScript querySelector strings.
let currentLanguage = localStorage.getItem('cmwc_language') || 'en';

const languageText = {
    en: {
        navAbout: 'ABOUT', navGallery: 'GALLERY', navVideos: 'VIDEOS', navDonate: 'DONATE', navEvents: 'EVENTS', navMemorial: 'MEMORIAL', navSocial: 'SOCIAL', navMerch: 'MERCH', navContact: 'CONTACT', navMap: 'GLOBAL MAP', navSignup: 'SIGN UP',
        heroEyebrow: 'BOGOTÁ • 2027 • COURIER CULTURE',
        heroTitle: 'CYCLE MESSENGER<br> WORLD CHAMPIONSHIP',
        heroText: 'A moving gallery of speed, cargo, alleycats, night rides, and the global messenger community coming to Bogotá.',
        registerNow: 'REGISTER NOW', viewGallery: 'VIEW GALLERY',
        signups: 'Signups', countries: 'Countries', events: 'Events', years: 'Years',
        aboutTitle: 'ABOUT THE CHAMPIONSHIPS',
        aboutText: 'Seven years later... The world comes to Bogotá. The first World Bicycle Messenger Championship in South America',
        sponsorsEyebrow: 'OUR PROUD SPONSORS', sponsorsTitle: 'PROUD SPONSORS',
        sponsorsText: 'These brands, crews, and partners help power the championship and keep messenger culture moving forward.',
        videosEyebrow: 'WATCH THE CULTURE', videosTitle: 'VIDEO GALLERY',
        videosText: 'Short clips from races, night rides, cargo runs, and the road to Bogotá 2027.',
        gofundmeEyebrow: 'HELP BRING THE WORLD TO BOGOTÁ', gofundmeTitle: 'SUPPORT CMWC 2027',
        gofundmeText: 'Your donation helps support permits, race materials, safety, rider resources, volunteer tools, and the infrastructure needed to welcome messengers from around the world.',
        gofundmeButton: 'DONATE ON GOFUNDME', gofundmeSponsor: 'BECOME A SPONSOR', gofundmeRaised: '$0 raised', gofundmeGoal: 'Goal: $10,000',
        gofundmeNote: 'Replace the button link with your real GoFundMe URL when your campaign is ready.',
        fundraiserEyebrow: 'RACE TO RAISE FUNDS', fundraiserTitle: 'FUNDRAISER EVENTS',
        fundraiserText: 'Alleycats, criteriums, cargo races, and community rides that help fund CMWC Bogotá 2027.',
        fundraiserFilters: ['ALL EVENTS', 'ALLEYCATS', 'CRITERIUMS', 'OTHER RACES'],
        fundraiserHint: 'CLICK IMAGE FOR EVENT LINK', fundraiserCta: 'EVENT LINK', fundraiserNote: 'Replace each card image and href="#" with your real poster image and registration link.',
        fundraiserBadges: ['ALLEYCAT', 'CRITERIUM', 'CARGO RACE', 'COMMUNITY RIDE'],
        fundraiserTitles: ['NIGHT ALLEYCAT FUNDRAISER', 'FAST LAPS CRIT', 'CARGO CHALLENGE', 'ROLL TO BOGOTÁ'],
        fundraiserMetas: ['Bogotá • Date TBA', 'Closed circuit • Date TBA', 'Load it up • Date TBA', 'Group ride • Date TBA'],
        fundraiserTexts: ['Checkpoint racing, city routes, prizes, and a late-night community finish.', 'A fast spectator-friendly criterium to raise funds for permits, safety, and rider support.', 'Cargo bikes, strange loads, teamwork, balance, and courier-style problem solving.', 'A social ride and meetup for supporters, riders, volunteers, and future sponsors.'],
        memorialEyebrow: 'MEMORIAL', memorialTitle: 'En memoria de Eduardo Mosquera',
        memorialSubtitle: 'A dedicated space honoring Eduardo Mosquera, a cyclist who passed away while doing an ultra endurance event.',
        memorialText: 'This section can hold a photo, a link to a tribute ride, a story from the community, or details for a memorial event.',
        memorialCandle: 'LIGHT A VIRTUAL CANDLE', memorialLink: 'MEMORIAL LINK', memorialPhotoHint: 'CLICK IMAGE TO OPEN MEMORIAL LINK', memorialCandles: count => `${count} candle${count === 1 ? '' : 's'} lit by visitors`,
        socialEyebrow: 'CONNECT WITH THE CREW', socialTitle: 'FOLLOW CMWC 2027',
        socialText: 'Follow the road to Bogotá, share your rides, meet the community, and stay close to race updates, parties, calls for volunteers, and sponsor news.',
        socialActiveLabel: 'ACTIVE CHANNEL', socialCopy: 'COPY HANDLE', socialCopied: 'Copied!',
        merchEyebrow: 'CMWC 2027 MERCH', merchTitle: 'MERCH COMING SOON', merchText: 'We are developing this idea with the team. Official CMWC Bogotá 2027 merchandise will be announced here when it is ready.', merchSoon: 'COMING SOON', merchSoonText: 'Future space for shirts, caps, bags, bottles, stickers, and limited event drops.',
        contactEyebrow: 'CONTACT US', contactTitle: 'GET IN TOUCH', contactText: 'Questions about registration, volunteering, sponsorship, media, travel, or supporting CMWC Bogotá 2027? Send us a message and the crew will get back to you.', contactDirect: 'Direct email', contactName: 'FULL NAME', contactEmail: 'EMAIL', contactPhone: 'PHONE / WHATSAPP', contactTopic: 'TOPIC', contactMessageLabel: 'MESSAGE', contactButton: 'SEND MESSAGE', contactSuccess: 'Thank you! Your message was sent to the CMWC Bogotá 2027 crew.', contactNamePlaceholder: 'Your full name', contactEmailPlaceholder: 'you@example.com', contactPhonePlaceholder: 'Optional', contactMessagePlaceholder: 'Write your message here.', contactTopicPlaceholder: '-- Choose a topic --', contactTopics: ['Registration', 'Volunteer', 'Sponsor', 'Media', 'General question'],
        navVolunteer: 'VOLUNTEER', navSponsorApply: 'SPONSOR',
        volunteerEyebrow: 'JOIN THE CREW', volunteerTitle: 'VOLUNTEER SIGN UP',
        volunteerText: 'Help us welcome messengers from around the world. Volunteers support checkpoints, registration, rider support, events, translation, setup, cleanup, and community operations.',
        volunteerName: 'FULL NAME', volunteerEmail: 'EMAIL', volunteerPhone: 'PHONE / WHATSAPP', volunteerCity: 'CITY', volunteerRole: 'PREFERRED ROLE', volunteerAvailability: 'AVAILABILITY', volunteerFoodPreference: 'FOOD PREFERENCE', volunteerFoodOther: 'OTHER FOOD PREFERENCE', volunteerFoodNotes: 'FOOD ALLERGIES / NOTES', volunteerNotes: 'NOTES',
        volunteerNamePlaceholder: 'Your full name', volunteerEmailPlaceholder: 'you@example.com', volunteerPhonePlaceholder: 'Your phone number', volunteerCityPlaceholder: 'Your city', volunteerFoodOtherPlaceholder: 'Write your food preference', volunteerFoodNotesPlaceholder: 'Allergies, restrictions, or details', volunteerNotesPlaceholder: 'Tell us about your skills, languages, or what you want to help with.',
        volunteerButton: 'SIGN UP TO VOLUNTEER', volunteerSuccess: 'Thank you! Your volunteer signup was saved in this browser.',
        rolePlaceholder: '-- Choose a role --', roleCheckpoints: 'Checkpoints', roleRegistration: 'Registration', roleRiderSupport: 'Rider support', roleEvents: 'Events / parties', roleTranslation: 'Translation', roleMedia: 'Photo / video / media',
        availabilityPlaceholder: '-- Choose availability --', availabilityBefore: 'Before the event', availabilityDuring: 'During the event', availabilityAfter: 'After the event', availabilityAll: 'All weekend', foodOptionPlaceholder: '-- Choose an option --', foodOptionNone: 'No preference', foodOptionVegetarian: 'Vegetarian', foodOptionVegan: 'Vegan', foodOptionGlutenFree: 'Gluten-free', foodOptionLactoseFree: 'Lactose-free', foodOptionAllergies: 'Allergies / medical restriction', foodOptionOther: 'Other',
        sponsorApplyEyebrow: 'PARTNER WITH CMWC', sponsorApplyTitle: 'SPONSOR SIGN UP',
        sponsorApplyText: 'Support the championship through funds, products, services, prizes, food, tools, venues, transportation, media, or community partnerships.',
        sponsorCompany: 'COMPANY / CREW NAME', sponsorContact: 'CONTACT NAME', sponsorEmail: 'EMAIL', sponsorPhone: 'PHONE / WHATSAPP', sponsorLevel: 'SPONSOR TYPE', sponsorWebsite: 'WEBSITE / INSTAGRAM', sponsorNotes: 'HOW WOULD YOU LIKE TO HELP?',
        sponsorCompanyPlaceholder: 'Company, crew, or brand', sponsorContactPlaceholder: 'Contact person', sponsorEmailPlaceholder: 'you@example.com', sponsorPhonePlaceholder: 'Your phone number', sponsorWebsitePlaceholder: 'https:// or @handle', sponsorNotesPlaceholder: 'Tell us what you would like to contribute or discuss.',
        sponsorApplyButton: 'APPLY TO SPONSOR', sponsorApplySuccess: 'Thank you! Your sponsor signup was saved in this browser.',
        sponsorTypePlaceholder: '-- Choose sponsor type --', sponsorTypeCash: 'Financial contribution', sponsorTypeProduct: 'Product / prizes', sponsorTypeService: 'Services / logistics', sponsorTypeVenue: 'Venue / space', sponsorTypeMedia: 'Media partnership',
        videoTitles: ['STREET LOADS', 'NIGHT RIDE ENERGY', 'TRACK SPEED', 'CARGO RACE'],
        videoTexts: ['Heavy cargo, fast decisions, and the pressure that makes messenger racing different.', 'A look at the lights, crowds, and street atmosphere that define Bogotá bike culture.', 'From the velodrome to the street, the championship brings every cycling discipline together.', 'Packages, balance, teamwork, and the daily work of couriers turned into competition.'],
        galleryTitle: 'GALLERY', galleryText: 'Moments captured from past championships around the world.',
        mapTitle: 'GLOBAL SIGNUPS', mapText: 'See where messengers from around the world are signing up. Each marker represents a country with registered competitors.',
        topCountries: 'TOP COUNTRIES', countryEmpty: 'No signups yet. Be the first!',
        signupTitle: 'SIGN UP', signupText: 'Choose how you want to be part of CMWC Bogotá 2027: race, volunteer, or become a sponsor.', tabRider: 'RIDER', tabVolunteer: 'VOLUNTEER', tabSponsor: 'SPONSOR', riderEyebrow: 'RACE WITH US', riderTitle: 'RIDER REGISTRATION', riderText: 'Register your spot at the World Bike Messenger Championship Bogotá 2027.',
        fullName: 'FULL NAME', email: 'EMAIL', country: 'COUNTRY', city: 'CITY', category: 'CATEGORY', categoryPlaceholder: '-- Choose category --', categoryOpen: 'Open', categoryWTNB: 'WTNB', foodPreference: 'FOOD PREFERENCE / DIETARY NEEDS', foodOther: 'OTHER FOOD PREFERENCE', foodNotes: 'FOOD ALLERGIES / NOTES',
        namePlaceholder: 'Your full name', cityPlaceholder: 'Your city', countryPlaceholder: '-- Select your country --', foodOtherPlaceholder: 'Write your food preference', foodNotesPlaceholder: 'Allergies, restrictions, or details',
        terms: 'I agree to the championship rules and confirm I am 18 years or older.',
        quickLinks: 'QUICK LINKS', followUs: 'FOLLOW US', footerText: 'World Bike Messenger Championships. The premier global event for urban cycling couriers.',
        footerCopyright: '© 2027 World Bike Messenger Championship Bogotá. All rights reserved.',
        formMissing: 'Please fill in all fields.',
        formSuccess: name => `Welcome to the championships, ${name}! 🚴 You're registered from`
    },
    es: {
        navAbout: 'SOBRE EL EVENTO', navGallery: 'GALERÍA', navVideos: 'VIDEOS', navDonate: 'DONAR', navEvents: 'EVENTOS', navSocial: 'REDES', navMerch: 'MERCH', navContact: 'CONTACTO', navMap: 'MAPA GLOBAL', navSignup: 'INSCRÍBETE',
        heroEyebrow: 'BOGOTÁ • 2027 • CULTURA MENSAJERA',
        heroTitle: 'CAMPEONATO MUNDIAL<br> DE BICIMENSAJERÍA',
        heroText: 'Una galería en movimiento de velocidad, carga, alleycats, rodadas nocturnas y la comunidad mensajera global llegando a Bogotá.',
        registerNow: 'INSCRÍBETE AHORA', viewGallery: 'VER GALERÍA',
        signups: 'Inscritos', countries: 'Países', events: 'Eventos', years: 'Años',
        aboutTitle: 'SOBRE EL CAMPEONATO',
        aboutText: 'Siete años después... el mundo llega a Bogotá. El primer Campeonato Mundial de Ciclo Mensajeros en Suramérica.',
        sponsorsEyebrow: 'NUESTROS PATROCINADORES', sponsorsTitle: 'PATROCINADORES',
        sponsorsText: 'Estas marcas, colectivos y aliados ayudan a impulsar el campeonato y a mantener viva la cultura mensajera.',
        videosEyebrow: 'MIRA LA CULTURA', videosTitle: 'GALERÍA DE VIDEO',
        videosText: 'Clips cortos de carreras, rodadas nocturnas, carga y el camino hacia Bogotá 2027.',
        gofundmeEyebrow: 'AYUDA A TRAER EL MUNDO A BOGOTÁ', gofundmeTitle: 'APOYA CMWC 2027',
        gofundmeText: 'Tu donación ayuda con permisos, materiales de carrera, seguridad, recursos para participantes, herramientas para voluntarios y la infraestructura necesaria para recibir mensajeros de todo el mundo.',
        gofundmeButton: 'DONAR EN GOFUNDME', gofundmeSponsor: 'SER PATROCINADOR', gofundmeRaised: '$0 recaudados', gofundmeGoal: 'Meta: $10,000',
        gofundmeNote: 'Reemplaza el enlace del botón con tu URL real de GoFundMe cuando la campaña esté lista.',
        fundraiserEyebrow: 'CARRERAS PARA RECAUDAR FONDOS', fundraiserTitle: 'EVENTOS DE RECAUDACIÓN',
        fundraiserText: 'Alleycats, criteriums, carreras de carga y rodadas comunitarias que ayudan a financiar CMWC Bogotá 2027.',
        fundraiserFilters: ['TODOS', 'ALLEYCATS', 'CRITERIUMS', 'OTRAS CARRERAS'],
        fundraiserHint: 'HAZ CLIC EN LA IMAGEN PARA VER EL EVENTO', fundraiserCta: 'ENLACE DEL EVENTO', fundraiserNote: 'Reemplaza cada imagen y href="#" con tu afiche real y enlace de inscripción.',
        fundraiserBadges: ['ALLEYCAT', 'CRITERIUM', 'CARRERA DE CARGA', 'RODADA COMUNITARIA'],
        fundraiserTitles: ['ALLEYCAT NOCTURNO DE RECAUDACIÓN', 'CRIT DE VUELTAS RÁPIDAS', 'RETO DE CARGA', 'RODANDO A BOGOTÁ'],
        fundraiserMetas: ['Bogotá • Fecha por confirmar', 'Circuito cerrado • Fecha por confirmar', 'Cárgala • Fecha por confirmar', 'Rodada grupal • Fecha por confirmar'],
        fundraiserTexts: ['Carrera de checkpoints, rutas urbanas, premios y un cierre comunitario nocturno.', 'Un criterium rápido y perfecto para espectadores que recauda fondos para permisos, seguridad y apoyo a corredores.', 'Cargo bikes, cargas raras, trabajo en equipo, balance y resolución de problemas estilo mensajero.', 'Una rodada social y encuentro para supporters, corredores, voluntarios y futuros patrocinadores.'],
        memorialEyebrow: 'MEMORIAL', memorialTitle: 'En memoria de Eduardo Mosquera',
        memorialSubtitle: 'Un espacio dedicado a honrar a Eduardo Mosquera, ciclista que falleció mientras realizaba un evento de ultra resistencia.',
        memorialText: 'Esta sección puede guardar una foto, un enlace a una rodada homenaje, una historia de la comunidad o detalles de un evento memorial.',
        memorialCandle: 'ENCENDER UNA VELA VIRTUAL', memorialLink: 'ENLACE MEMORIAL', memorialPhotoHint: 'HAZ CLIC EN LA IMAGEN PARA ABRIR EL ENLACE MEMORIAL', memorialCandles: count => `${count} vela${count === 1 ? '' : 's'} encendida${count === 1 ? '' : 's'} por visitantes`,
        socialEyebrow: 'CONECTA CON EL PARCHE', socialTitle: 'SIGUE CMWC 2027',
        socialText: 'Sigue el camino a Bogotá, comparte tus rodadas, conoce la comunidad y mantente cerca de noticias de carreras, fiestas, voluntariado y patrocinadores.',
        socialActiveLabel: 'CANAL ACTIVO', socialCopy: 'COPIAR USUARIO', socialCopied: '¡Copiado!',
        merchEyebrow: 'MERCH CMWC 2027', merchTitle: 'MERCH PRÓXIMAMENTE', merchText: 'Estamos desarrollando esta idea con el equipo. La mercancía oficial de CMWC Bogotá 2027 se anunciará aquí cuando esté lista.', merchSoon: 'PRÓXIMAMENTE', merchSoonText: 'Espacio futuro para camisetas, gorras, bolsos, botellas, stickers y lanzamientos limitados del evento.',
        contactEyebrow: 'CONTACTO', contactTitle: 'ESCRÍBENOS', contactText: '¿Preguntas sobre inscripción, voluntariado, patrocinio, prensa, viaje o cómo apoyar CMWC Bogotá 2027? Envíanos un mensaje y el equipo te responderá.', contactDirect: 'Correo directo', contactName: 'NOMBRE COMPLETO', contactEmail: 'CORREO ELECTRÓNICO', contactPhone: 'TELÉFONO / WHATSAPP', contactTopic: 'TEMA', contactMessageLabel: 'MENSAJE', contactButton: 'ENVIAR MENSAJE', contactSuccess: '¡Gracias! Tu mensaje fue enviado al equipo de CMWC Bogotá 2027.', contactNamePlaceholder: 'Tu nombre completo', contactEmailPlaceholder: 'tu@correo.com', contactPhonePlaceholder: 'Opcional', contactMessagePlaceholder: 'Escribe tu mensaje aquí.', contactTopicPlaceholder: '-- Elige un tema --', contactTopics: ['Inscripción', 'Voluntariado', 'Patrocinio', 'Prensa', 'Pregunta general'],
        navVolunteer: 'VOLUNTARIADO', navSponsorApply: 'PATROCINAR',
        volunteerEyebrow: 'ÚNETE AL EQUIPO', volunteerTitle: 'INSCRIPCIÓN DE VOLUNTARIOS',
        volunteerText: 'Ayúdanos a recibir mensajeros de todo el mundo. El voluntariado apoya puntos de control, registro, apoyo a participantes, eventos, traducción, montaje, desmontaje y operaciones comunitarias.',
        volunteerName: 'NOMBRE COMPLETO', volunteerEmail: 'CORREO ELECTRÓNICO', volunteerPhone: 'TELÉFONO / WHATSAPP', volunteerCity: 'CIUDAD', volunteerRole: 'ROL PREFERIDO', volunteerAvailability: 'DISPONIBILIDAD', volunteerFoodPreference: 'PREFERENCIA DE COMIDA', volunteerFoodOther: 'OTRA PREFERENCIA DE COMIDA', volunteerFoodNotes: 'ALERGIAS / NOTAS DE COMIDA', volunteerNotes: 'NOTAS',
        volunteerNamePlaceholder: 'Tu nombre completo', volunteerEmailPlaceholder: 'tu@correo.com', volunteerPhonePlaceholder: 'Tu número de teléfono', volunteerCityPlaceholder: 'Tu ciudad', volunteerFoodOtherPlaceholder: 'Escribe tu preferencia', volunteerFoodNotesPlaceholder: 'Alergias, restricciones o detalles', volunteerNotesPlaceholder: 'Cuéntanos sobre tus habilidades, idiomas o en qué quieres ayudar.',
        volunteerButton: 'INSCRIBIRME COMO VOLUNTARIO/A', volunteerSuccess: '¡Gracias! Tu inscripción de voluntariado se guardó en este navegador.',
        rolePlaceholder: '-- Elige un rol --', roleCheckpoints: 'Puntos de control', roleRegistration: 'Registro', roleRiderSupport: 'Apoyo a participantes', roleEvents: 'Eventos / fiestas', roleTranslation: 'Traducción', roleMedia: 'Foto / video / medios',
        availabilityPlaceholder: '-- Elige disponibilidad --', availabilityBefore: 'Antes del evento', availabilityDuring: 'Durante el evento', availabilityAfter: 'Después del evento', availabilityAll: 'Todo el fin de semana', foodOptionPlaceholder: '-- Elige una opción --', foodOptionNone: 'Sin preferencia', foodOptionVegetarian: 'Vegetariano/a', foodOptionVegan: 'Vegano/a', foodOptionGlutenFree: 'Sin gluten', foodOptionLactoseFree: 'Sin lactosa', foodOptionAllergies: 'Alergias / restricción médica', foodOptionOther: 'Otro',
        sponsorApplyEyebrow: 'ALIADO CMWC', sponsorApplyTitle: 'INSCRIPCIÓN DE PATROCINADORES',
        sponsorApplyText: 'Apoya el campeonato con fondos, productos, servicios, premios, comida, herramientas, espacios, transporte, medios o alianzas comunitarias.',
        sponsorCompany: 'EMPRESA / COLECTIVO', sponsorContact: 'NOMBRE DE CONTACTO', sponsorEmail: 'CORREO ELECTRÓNICO', sponsorPhone: 'TELÉFONO / WHATSAPP', sponsorLevel: 'TIPO DE PATROCINIO', sponsorWebsite: 'WEB / INSTAGRAM', sponsorNotes: '¿CÓMO QUIERES APOYAR?',
        sponsorCompanyPlaceholder: 'Empresa, colectivo o marca', sponsorContactPlaceholder: 'Persona de contacto', sponsorEmailPlaceholder: 'tu@correo.com', sponsorPhonePlaceholder: 'Tu número de teléfono', sponsorWebsitePlaceholder: 'https:// o @usuario', sponsorNotesPlaceholder: 'Cuéntanos qué te gustaría aportar o conversar.',
        sponsorApplyButton: 'POSTULAR PARA PATROCINAR', sponsorApplySuccess: '¡Gracias! Tu solicitud de patrocinio se guardó en este navegador.',
        sponsorTypePlaceholder: '-- Elige tipo de patrocinio --', sponsorTypeCash: 'Aporte económico', sponsorTypeProduct: 'Producto / premios', sponsorTypeService: 'Servicios / logística', sponsorTypeVenue: 'Espacio / sede', sponsorTypeMedia: 'Alianza de medios',
        videoTitles: ['CARGA EN LA CALLE', 'ENERGÍA NOCTURNA', 'VELOCIDAD EN PISTA', 'CARRERA DE CARGA'],
        videoTexts: ['Carga pesada, decisiones rápidas y la presión que hace diferente a las carreras mensajeras.', 'Una mirada a las luces, la gente y la atmósfera callejera que definen la cultura bici en Bogotá.', 'Del velódromo a la calle, el campeonato une todas las disciplinas del ciclismo.', 'Paquetes, equilibrio, trabajo en equipo y la labor diaria de los correos convertida en competencia.'],
        galleryTitle: 'GALERÍA', galleryText: 'Momentos capturados de campeonatos anteriores alrededor del mundo.',
        mapTitle: 'INSCRIPCIONES GLOBALES', mapText: 'Mira desde dónde se están inscribiendo mensajeros de todo el mundo. Cada marcador representa un país con competidores registrados.',
        topCountries: 'PAÍSES PRINCIPALES', countryEmpty: 'Todavía no hay inscritos. ¡Sé la primera persona!',
        signupTitle: 'INSCRÍBETE', signupText: 'Elige cómo quieres ser parte de CMWC Bogotá 2027: correr, ser voluntario/a o patrocinar.', tabRider: 'CORREDOR/A', tabVolunteer: 'VOLUNTARIADO', tabSponsor: 'PATROCINADOR', riderEyebrow: 'CORRE CON NOSOTROS', riderTitle: 'REGISTRO DE CORREDORES', riderText: 'Registra tu cupo para el Campeonato Mundial de Bicimensajería Bogotá 2027.',
        fullName: 'NOMBRE COMPLETO', email: 'CORREO ELECTRÓNICO', country: 'PAÍS', city: 'CIUDAD', category: 'CATEGORÍA', categoryPlaceholder: '-- Elige categoría --', categoryOpen: 'Open', categoryWTNB: 'WTNB', foodPreference: 'PREFERENCIA DE COMIDA / NECESIDADES DIETARIAS', foodOther: 'OTRA PREFERENCIA DE COMIDA', foodNotes: 'ALERGIAS / NOTAS DE COMIDA',
        namePlaceholder: 'Tu nombre completo', cityPlaceholder: 'Tu ciudad', countryPlaceholder: '-- Selecciona tu país --', foodOtherPlaceholder: 'Escribe tu preferencia', foodNotesPlaceholder: 'Alergias, restricciones o detalles',
        terms: 'Acepto las reglas del campeonato y confirmo que tengo 18 años o más.',
        quickLinks: 'ENLACES RÁPIDOS', followUs: 'SÍGUENOS', footerText: 'World Bike Messenger Championships. El evento global principal para mensajeros urbanos en bicicleta.',
        footerCopyright: '© 2027 Campeonato Mundial de Bicimensajería Bogotá. Todos los derechos reservados.',
        formMissing: 'Por favor completa todos los campos.',
        formSuccess: name => `¡Bienvenido/a al campeonato, ${name}! 🚴 Estás inscrito/a desde`
    }
};

function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
}

function setHTML(selector, value) {
    document.querySelectorAll(selector).forEach(el => { el.innerHTML = value; });
}

function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('cmwc_language', lang);
    document.documentElement.lang = lang;
    const t = languageText[lang];

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    setText('header a[href="#about"], footer a[href="#about"]', t.navAbout);
    setText('header a[href="#gallery"], footer a[href="#gallery"]', t.navGallery);
    setText('header a[href="#videos"], footer a[href="#videos"]', t.navVideos);
    setText('header a[href="#gofundme"], footer a[href="#gofundme"]', t.navDonate);
    setText('header a[href="#fundraiser-events"], footer a[href="#fundraiser-events"]', t.navEvents);
    setText('header a[href="#memorial"], footer a[href="#memorial"]', t.navMemorial);
    setText('header a[href="#social"], footer a[href="#social"]', t.navSocial);
    setText('header a[href="#merch"], footer a[href="#merch"]', t.navMerch);
    setText('header a[href="#volunteer"], footer a[href="#volunteer"]', t.navVolunteer);
    setText('header a[href="#sponsor-apply"], footer a[href="#sponsor-apply"]', t.navSponsorApply);
    setText('header a[href="#map"], footer a[href="#map"]', t.navMap);
    setText('header a[href="#signup"], footer a[href="#signup"]', t.navSignup);

    setText('.hero-eyebrow', t.heroEyebrow);
    setHTML('#hero h1', t.heroTitle);
    const heroIntro = document.querySelector('#hero p.text-lg');
    if (heroIntro) heroIntro.textContent = t.heroText;
    setText('#hero a[href="#signup"]', t.registerNow);
    setText('#hero a[href="#gallery"]', t.viewGallery);

    const statLabels = document.querySelectorAll('section.bg-black.py-8 [class*="text-beige/70"]');
    if (statLabels[0]) statLabels[0].textContent = t.signups;
    if (statLabels[1]) statLabels[1].textContent = t.countries;
    if (statLabels[2]) statLabels[2].textContent = t.events;
    if (statLabels[3]) statLabels[3].textContent = t.years;

    setText('#about > div > h2', t.aboutTitle);
    setText('#about > div > p', t.aboutText);

    setText('#sponsors > div > p:first-child', t.sponsorsEyebrow);
    setText('#sponsors > div > h2', t.sponsorsTitle);
    setText('#sponsors > div > p.max-w-3xl', t.sponsorsText);

    setText('#videos .video-eyebrow', t.videosEyebrow);
    setText('#videos .video-title', t.videosTitle);
    setText('#videos .video-intro', t.videosText);
    document.querySelectorAll('#videos .video-card-title').forEach((el, i) => { if (t.videoTitles[i]) el.textContent = t.videoTitles[i]; });
    document.querySelectorAll('#videos .video-card-text').forEach((el, i) => { if (t.videoTexts[i]) el.textContent = t.videoTexts[i]; });

    setText('#gofundme .gofundme-eyebrow', t.gofundmeEyebrow);
    setText('#gofundme .gofundme-title', t.gofundmeTitle);
    setText('#gofundme .gofundme-text', t.gofundmeText);
    setText('#gofundme .gofundme-button', t.gofundmeButton);
    setText('#gofundme .gofundme-secondary', t.gofundmeSponsor);
    setText('#gofundme .gofundme-raised', t.gofundmeRaised);
    setText('#gofundme .gofundme-goal', t.gofundmeGoal);
    setText('#gofundme .gofundme-note', t.gofundmeNote);

    setText('#fundraiser-events .fundraiser-eyebrow', t.fundraiserEyebrow);
    setText('#fundraiser-events .fundraiser-title', t.fundraiserTitle);
    setText('#fundraiser-events .fundraiser-intro', t.fundraiserText);
    document.querySelectorAll('#fundraiser-events .fundraiser-filter').forEach((el, i) => { if (t.fundraiserFilters[i]) el.textContent = t.fundraiserFilters[i]; });
    document.querySelectorAll('#fundraiser-events .fundraiser-image-hint').forEach(el => { el.textContent = t.fundraiserHint; });
    document.querySelectorAll('#fundraiser-events .fundraiser-card-cta').forEach(el => { el.textContent = t.fundraiserCta; });
    setHTML('#fundraiser-events .fundraiser-editor-note', t.fundraiserNote);
    document.querySelectorAll('#fundraiser-events .fundraiser-badge').forEach((el, i) => { if (t.fundraiserBadges[i]) el.textContent = t.fundraiserBadges[i]; });
    document.querySelectorAll('#fundraiser-events .fundraiser-card-title').forEach((el, i) => { if (t.fundraiserTitles[i]) el.textContent = t.fundraiserTitles[i]; });
    document.querySelectorAll('#fundraiser-events .fundraiser-card-meta').forEach((el, i) => { if (t.fundraiserMetas[i]) el.textContent = t.fundraiserMetas[i]; });
    document.querySelectorAll('#fundraiser-events .fundraiser-card-text').forEach((el, i) => { if (t.fundraiserTexts[i]) el.textContent = t.fundraiserTexts[i]; });

    setText('#memorial .memorial-eyebrow', t.memorialEyebrow);
    setText('#memorial .memorial-title', t.memorialTitle);
    setText('#memorial .memorial-subtitle', t.memorialSubtitle);
    setText('#memorial .memorial-text', t.memorialText);
    setText('#memorial .memorial-candle-btn', t.memorialCandle);
    setText('#memorial .memorial-link', t.memorialLink);
    setText('#memorial .memorial-photo-link span', t.memorialPhotoHint);
    updateMemorialCandleText();

    setText('#social .social-eyebrow', t.socialEyebrow);
    setText('#social .social-title', t.socialTitle);
    setText('#social .social-intro', t.socialText);
    setText('#social .social-preview-label', t.socialActiveLabel);
    setText('#copy-social-handle', t.socialCopy);

    setText('#contact .contact-eyebrow', t.contactEyebrow);
    setText('#contact .contact-title', t.contactTitle);
    setText('#contact .contact-text', t.contactText);
    setText('#contact .contact-direct-box span', t.contactDirect);
    setText('label[for="contact-name"]', t.contactName);
    setText('label[for="contact-email"]', t.contactEmail);
    setText('label[for="contact-phone"]', t.contactPhone);
    setText('label[for="contact-topic"]', t.contactTopic);
    setText('label[for="contact-message-text"]', t.contactMessageLabel);
    setText('#contact-form button[type="submit"]', t.contactButton);
    const contactPlaceholders = [
        ['contact-name', t.contactNamePlaceholder], ['contact-email', t.contactEmailPlaceholder], ['contact-phone', t.contactPhonePlaceholder], ['contact-message-text', t.contactMessagePlaceholder]
    ];
    contactPlaceholders.forEach(([id, placeholder]) => { const el = document.getElementById(id); if (el) el.placeholder = placeholder; });
    const contactTopicOptions = document.querySelectorAll('#contact-topic option');
    [t.contactTopicPlaceholder, ...t.contactTopics].forEach((text, i) => { if (contactTopicOptions[i]) contactTopicOptions[i].textContent = text; });

    setText('#volunteer .volunteer-eyebrow', t.volunteerEyebrow);
    setText('#volunteer .volunteer-title', t.volunteerTitle);
    setText('#volunteer .volunteer-text', t.volunteerText);
    setText('label[for="volunteer-name"]', t.volunteerName);
    setText('label[for="volunteer-email"]', t.volunteerEmail);
    setText('label[for="volunteer-phone"]', t.volunteerPhone);
    setText('label[for="volunteer-city"]', t.volunteerCity);
    setText('label[for="volunteer-role"]', t.volunteerRole);
    setText('label[for="volunteer-availability"]', t.volunteerAvailability);
    setText('#volunteer-food-preference-label', t.volunteerFoodPreference);
    setText('label[for="volunteer-food-other"]', t.volunteerFoodOther || t.foodOther);
    setText('label[for="volunteer-food-notes"]', t.volunteerFoodNotes);
    setText('label[for="volunteer-notes"]', t.volunteerNotes);
    setText('#volunteer-form button[type="submit"]', t.volunteerButton);

    setText('#sponsor-apply .sponsor-apply-eyebrow', t.sponsorApplyEyebrow);
    setText('#sponsor-apply .sponsor-apply-title', t.sponsorApplyTitle);
    setText('#sponsor-apply .sponsor-apply-text', t.sponsorApplyText);
    setText('label[for="sponsor-company"]', t.sponsorCompany);
    setText('label[for="sponsor-contact"]', t.sponsorContact);
    setText('label[for="sponsor-email"]', t.sponsorEmail);
    setText('label[for="sponsor-phone"]', t.sponsorPhone);
    setText('label[for="sponsor-level"]', t.sponsorLevel);
    setText('label[for="sponsor-website"]', t.sponsorWebsite);
    setText('label[for="sponsor-notes"]', t.sponsorNotes);
    setText('#sponsor-apply-form button[type="submit"]', t.sponsorApplyButton);

    const volunteerPlaceholders = [
        ['volunteer-name', t.volunteerNamePlaceholder], ['volunteer-email', t.volunteerEmailPlaceholder], ['volunteer-phone', t.volunteerPhonePlaceholder], ['volunteer-city', t.volunteerCityPlaceholder], ['volunteer-food-other', t.volunteerFoodOtherPlaceholder || t.foodOtherPlaceholder], ['volunteer-food-notes', t.volunteerFoodNotesPlaceholder], ['volunteer-notes', t.volunteerNotesPlaceholder],
        ['sponsor-company', t.sponsorCompanyPlaceholder], ['sponsor-contact', t.sponsorContactPlaceholder], ['sponsor-email', t.sponsorEmailPlaceholder], ['sponsor-phone', t.sponsorPhonePlaceholder], ['sponsor-website', t.sponsorWebsitePlaceholder], ['sponsor-notes', t.sponsorNotesPlaceholder]
    ];
    volunteerPlaceholders.forEach(([id, placeholder]) => { const el = document.getElementById(id); if (el) el.placeholder = placeholder; });

    const roleOptions = document.querySelectorAll('#volunteer-role option');
    [t.rolePlaceholder, t.roleCheckpoints, t.roleRegistration, t.roleRiderSupport, t.roleEvents, t.roleTranslation, t.roleMedia].forEach((text, i) => { if (roleOptions[i]) roleOptions[i].textContent = text; });
    const availabilityOptions = document.querySelectorAll('#volunteer-availability option');
    [t.availabilityPlaceholder, t.availabilityBefore, t.availabilityDuring, t.availabilityAfter, t.availabilityAll].forEach((text, i) => { if (availabilityOptions[i]) availabilityOptions[i].textContent = text; });
    setText('.food-option-none', t.foodOptionNone);
    setText('.food-option-vegetarian', t.foodOptionVegetarian);
    setText('.food-option-vegan', t.foodOptionVegan);
    setText('.food-option-gluten-free', t.foodOptionGlutenFree);
    setText('.food-option-lactose-free', t.foodOptionLactoseFree);
    setText('.food-option-allergies', t.foodOptionAllergies);
    setText('.food-option-other', t.foodOptionOther);
    const sponsorTypeOptions = document.querySelectorAll('#sponsor-level option');
    [t.sponsorTypePlaceholder, t.sponsorTypeCash, t.sponsorTypeProduct, t.sponsorTypeService, t.sponsorTypeVenue, t.sponsorTypeMedia].forEach((text, i) => { if (sponsorTypeOptions[i]) sponsorTypeOptions[i].textContent = text; });

    setText('#gallery h2', t.galleryTitle);
    setText('#gallery > div > p', t.galleryText);
    setText('#gallery .moving-gallery-help', currentLanguage === 'es' ? 'Haz clic en cualquier foto para verla más grande. Pasa el cursor para pausar la galería.' : 'Click any photo to open it larger. Hover to pause the gallery.');

    setText('#merch .merch-eyebrow', t.merchEyebrow);
    setText('#merch .merch-title', t.merchTitle);
    setText('#merch .merch-text', t.merchText);
    setText('#merch .merch-coming-copy h3', t.merchSoon);
    setText('#merch .merch-coming-copy p', t.merchSoonText);

    setText('#map h2', t.mapTitle);
    setText('#map > div > p', t.mapText);
    setText('#map h3', t.topCountries);

    setText('#signup h2', t.signupTitle);
    setText('#signup > div > p', t.signupText);
    setText('.signup-type-tab[data-signup-tab="rider"]', t.tabRider);
    setText('.signup-type-tab[data-signup-tab="volunteer"]', t.tabVolunteer);
    setText('.signup-type-tab[data-signup-tab="sponsor"]', t.tabSponsor);
    setText('#rider-signup .rider-eyebrow', t.riderEyebrow);
    setText('#rider-signup .rider-title', t.riderTitle);
    setText('#rider-signup .rider-text', t.riderText);
    setText('label[for="name"]', t.fullName);
    setText('label[for="email"]', t.email);
    setText('label[for="country"]', t.country);
    setText('label[for="city"]', t.city);
    setText('label[for="category"]', t.category);
    setText('#food-preference-label', t.foodPreference);
    setText('label[for="food-other"]', t.foodOther);
    setText('label[for="food-notes"]', t.foodNotes);
    setText('label[for="terms"]', t.terms);
    setText('#signup-form button[type="submit"]', t.registerNow);

    const nameInput = document.getElementById('name');
    const cityInput = document.getElementById('city');
    const categoryOptions = document.querySelectorAll('#category option');
    if (categoryOptions[0]) categoryOptions[0].textContent = t.categoryPlaceholder;
    if (categoryOptions[1]) categoryOptions[1].textContent = t.categoryOpen;
    if (categoryOptions[2]) categoryOptions[2].textContent = t.categoryWTNB;
    const firstCountryOption = document.querySelector('#country option[value=""]');
    if (nameInput) nameInput.placeholder = t.namePlaceholder;
    if (cityInput) cityInput.placeholder = t.cityPlaceholder;
    const foodOtherInput = document.getElementById('food-other');
    if (foodOtherInput) foodOtherInput.placeholder = t.foodOtherPlaceholder;
    const volunteerFoodOtherInput = document.getElementById('volunteer-food-other');
    if (volunteerFoodOtherInput) volunteerFoodOtherInput.placeholder = t.volunteerFoodOtherPlaceholder || t.foodOtherPlaceholder;
    const foodNotesInput = document.getElementById('food-notes');
    if (foodNotesInput) foodNotesInput.placeholder = t.foodNotesPlaceholder;
    if (firstCountryOption) firstCountryOption.textContent = t.countryPlaceholder;

    setText('footer h4:first-of-type', t.quickLinks);
    const footerHeadings = document.querySelectorAll('footer h4');
    if (footerHeadings[0]) footerHeadings[0].textContent = t.quickLinks;
    if (footerHeadings[1]) footerHeadings[1].textContent = t.followUs;
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) footerParagraph.textContent = t.footerText;
    const copyright = document.querySelector('footer .text-center[class*="text-beige/60"]');
    if (copyright) copyright.textContent = t.footerCopyright;

    const emptyCountryList = document.querySelector('#country-list p');
    if (emptyCountryList && getSignups().length === 0) emptyCountryList.textContent = t.countryEmpty;
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLanguage);
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
        dot.setAttribute('aria-label', `Show hero image ${index + 1}`);
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

let serverCountryStats = null;

function normalizeCountryStats(rawStats) {
    const normalized = {};
    if (!rawStats || typeof rawStats !== 'object') return normalized;

    Object.entries(rawStats).forEach(([country, value]) => {
        const count = typeof value === 'number' ? value : parseInt(value && value.count, 10);
        if (!country || !count || count < 1) return;
        normalized[country] = { count, names: [] };
    });

    return normalized;
}

function getSignupsByCountry() {
    // Once the site is live, the public stats endpoint reads the rider CSV on the server.
    // That makes the map show real submitted rider counts, not only this browser's localStorage.
    if (serverCountryStats) {
        return serverCountryStats;
    }

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

function getSignupTotals() {
    const byCountry = getSignupsByCountry();
    const total = Object.values(byCountry).reduce((sum, data) => sum + (parseInt(data.count, 10) || 0), 0);
    return {
        signups: total,
        countries: Object.keys(byCountry).length
    };
}

// ===== STATS UPDATE =====
function updateStats() {
    const totals = getSignupTotals();

    // Animate the counter
    animateCounter(document.getElementById('stat-signups'), totals.signups);
    animateCounter(document.getElementById('stat-countries'), totals.countries);
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
        listEl.innerHTML = `<p class="text-beige/60 text-sm">${languageText[currentLanguage].countryEmpty}</p>`;
        return;
    }

    listEl.innerHTML = entries.map(([country, data]) => `
    <div class="country-item">
      <span class="country-name">${country}</span>
      <span class="country-count">${data.count}</span>
    </div>
  `).join('');
}

// ===== API-FREE SIGNUP MAP =====
// This custom map does not use Leaflet, Google Maps, Mapbox, or any map tile API.
// It plots the existing country latitude/longitude data onto a local, stylized world map.
let map;
let mapMarkers = [];

function projectCountryToMap(lat, lng) {
    const x = ((Number(lng) + 180) / 360) * 100;
    const y = ((90 - Number(lat)) / 180) * 100;
    return {
        x: Math.max(4, Math.min(96, x)),
        y: Math.max(8, Math.min(92, y))
    };
}

function initMap() {
    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return;

    mapEl.innerHTML = `
        <div class="static-map-stage" role="img" aria-label="API-free world signup map">
            <div class="static-map-grid"></div>
            <div class="continent continent-north-america"></div>
            <div class="continent continent-south-america"></div>
            <div class="continent continent-europe"></div>
            <div class="continent continent-africa"></div>
            <div class="continent continent-asia"></div>
            <div class="continent continent-australia"></div>
            <div class="static-map-marker-layer" id="static-map-marker-layer"></div>
            <div class="static-map-empty" id="static-map-empty">${languageText[currentLanguage].countryEmpty}</div>
            <div class="static-map-label">No map API required</div>
        </div>
    `;

    map = mapEl;
    updateMapMarkers();
}

function updateMapMarkers() {
    const markerLayer = document.getElementById('static-map-marker-layer');
    const emptyState = document.getElementById('static-map-empty');
    if (!markerLayer) return;

    markerLayer.innerHTML = '';
    mapMarkers = [];

    const byCountry = getSignupsByCountry();
    const entries = Object.entries(byCountry).filter(([country, data]) => {
        return countryData[country] && data && parseInt(data.count, 10) > 0;
    });

    if (emptyState) {
        emptyState.textContent = languageText[currentLanguage].countryEmpty;
        emptyState.classList.toggle('hidden', entries.length > 0);
    }

    entries.forEach(([country, data]) => {
        const coords = countryData[country];
        const point = projectCountryToMap(coords.lat, coords.lng);
        const count = parseInt(data.count, 10) || 0;
        const names = Array.isArray(data.names) ? data.names.filter(Boolean) : [];
        const markerSize = Math.min(32 + count * 3, 54);

        const marker = document.createElement('button');
        marker.type = 'button';
        marker.className = 'static-map-marker';
        marker.style.left = `${point.x}%`;
        marker.style.top = `${point.y}%`;
        marker.style.width = `${markerSize}px`;
        marker.style.height = `${markerSize}px`;
        marker.setAttribute('aria-label', `${country}: ${count} signup${count === 1 ? '' : 's'}`);

        const countEl = document.createElement('span');
        countEl.className = 'static-map-marker-count';
        countEl.textContent = count;
        marker.appendChild(countEl);

        const popup = document.createElement('span');
        popup.className = 'static-map-popup';
        const namesText = names.length ? `<small>${names.slice(0, 5).join(', ')}${names.length > 5 ? ` + ${names.length - 5} more` : ''}</small>` : '<small>Rider registrations saved on the server.</small>';
        popup.innerHTML = `<strong>${country}</strong><em>${count} rider signup${count === 1 ? '' : 's'}</em>${namesText}`;
        marker.appendChild(popup);

        marker.addEventListener('click', () => {
            document.querySelectorAll('.static-map-marker.active').forEach(item => {
                if (item !== marker) item.classList.remove('active');
            });
            marker.classList.toggle('active');
        });

        markerLayer.appendChild(marker);
        mapMarkers.push(marker);
    });
}

async function loadPublicSignupStats() {
    try {
        const response = await fetch('forms/public-signup-stats.php?ts=' + Date.now(), {
            headers: { 'Accept': 'application/json' },
            cache: 'no-store'
        });

        if (!response.ok) return;
        const result = await response.json();
        serverCountryStats = normalizeCountryStats(result.countries || {});
        updateStats();
        updateCountryList();
        updateMapMarkers();
    } catch (err) {
        // If PHP is not available while testing locally, the map still works with localStorage.
        updateMapMarkers();
    }
}

// ===== ONE.COM PHP FORM SUBMIT HELPER =====
// These forms now submit to PHP files in /forms so one.com can email/save submissions.
// The helper keeps the site feeling interactive instead of doing a plain page reload.
async function submitFormToPhp(formElement) {
    if (!formElement || !formElement.action) {
        return { ok: false, message: 'Form action is missing.' };
    }

    try {
        const response = await fetch(formElement.action, {
            method: 'POST',
            body: new FormData(formElement),
            headers: { 'Accept': 'application/json' }
        });

        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (err) {
            result = { ok: response.ok, message: text || 'Submission received.' };
        }

        return {
            ok: response.ok && result.ok !== false,
            message: result.message || (response.ok ? 'Submission received.' : 'Submission failed.')
        };
    } catch (err) {
        return {
            ok: false,
            message: 'Could not reach the form handler. Make sure the site is uploaded to one.com with the /forms folder.'
        };
    }
}

// ===== FORM SUBMISSION =====
const form = document.getElementById('signup-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !email || !country || !city || category === '') {
        showFormMessage(languageText[currentLanguage].formMissing, 'error');
        return;
    }

    showFormMessage('Sending...', 'success');
    const serverResult = await submitFormToPhp(form);

    if (!serverResult.ok) {
        showFormMessage(serverResult.message, 'error');
        return;
    }

    const signup = {
        name,
        email,
        country,
        city,
        category,
        foodPreference: Array.from(document.querySelectorAll('input[name="foodPreferences[]"]:checked')).map(input => input.value).join(', '),
        foodOther: document.getElementById('food-other')?.value || '',
        foodNotes: document.getElementById('food-notes')?.value || '',
        timestamp: Date.now()
    };

    serverCountryStats = null;
    saveSignup(signup);

    // Refresh everything locally too, so the map/counters update immediately.
    updateStats();
    updateCountryList();
    updateMapMarkers();
    loadPublicSignupStats();

    showFormMessage(`${languageText[currentLanguage].formSuccess(name)} ${country}.`, 'success');

    form.reset();

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



// ===== VOLUNTEER AND SPONSOR SIGNUP STORAGE =====
function saveLocalFormEntry(storageKey, data) {
    try {
        const existing = JSON.parse(localStorage.getItem(storageKey)) || [];
        existing.push({ ...data, timestamp: Date.now() });
        localStorage.setItem(storageKey, JSON.stringify(existing));
        return true;
    } catch (e) {
        return false;
    }
}

function showInlineMessage(elementId, msg, type) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = msg;
    el.className = `signup-message ${type === 'success' ? 'success' : 'error'}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 6000);
}

const volunteerForm = document.getElementById('volunteer-form');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(volunteerForm).entries());
        const required = ['volunteerName', 'volunteerEmail', 'volunteerCity', 'volunteerRole', 'volunteerAvailability'];
        if (required.some(key => !String(data[key] || '').trim())) {
            showInlineMessage('volunteer-message', languageText[currentLanguage].formMissing, 'error');
            return;
        }
        showInlineMessage('volunteer-message', 'Sending...', 'success');
        const serverResult = await submitFormToPhp(volunteerForm);
        if (!serverResult.ok) {
            showInlineMessage('volunteer-message', serverResult.message, 'error');
            return;
        }
        saveLocalFormEntry('cmwc_volunteer_signups', data);
        volunteerForm.reset();
        showInlineMessage('volunteer-message', languageText[currentLanguage].volunteerSuccess, 'success');
    });
}

const sponsorApplyForm = document.getElementById('sponsor-apply-form');
if (sponsorApplyForm) {
    sponsorApplyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(sponsorApplyForm).entries());
        const required = ['sponsorCompany', 'sponsorContact', 'sponsorEmail', 'sponsorLevel'];
        if (required.some(key => !String(data[key] || '').trim())) {
            showInlineMessage('sponsor-apply-message', languageText[currentLanguage].formMissing, 'error');
            return;
        }
        showInlineMessage('sponsor-apply-message', 'Sending...', 'success');
        const serverResult = await submitFormToPhp(sponsorApplyForm);
        if (!serverResult.ok) {
            showInlineMessage('sponsor-apply-message', serverResult.message, 'error');
            return;
        }
        saveLocalFormEntry('cmwc_sponsor_applications', data);
        sponsorApplyForm.reset();
        showInlineMessage('sponsor-apply-message', languageText[currentLanguage].sponsorApplySuccess, 'success');
    });
}


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(contactForm).entries());
        const required = ['contactName', 'contactEmail', 'contactTopic', 'contactMessage'];
        if (required.some(key => !String(data[key] || '').trim())) {
            showInlineMessage('contact-message', languageText[currentLanguage].formMissing, 'error');
            return;
        }
        showInlineMessage('contact-message', 'Sending...', 'success');
        const serverResult = await submitFormToPhp(contactForm);
        if (!serverResult.ok) {
            showInlineMessage('contact-message', serverResult.message, 'error');
            return;
        }
        saveLocalFormEntry('cmwc_contact_messages', data);
        contactForm.reset();
        showInlineMessage('contact-message', languageText[currentLanguage].contactSuccess, 'success');
    });
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



// ===== UNIFIED SIGNUP TABS =====
function showSignupTab(tabName) {
    const tabs = document.querySelectorAll('.signup-type-tab');
    const panels = document.querySelectorAll('.signup-panel');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        const isActive = tab.dataset.signupTab === tabName;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.signupPanel === tabName);
    });
}

document.querySelectorAll('.signup-type-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.signupTab;
        showSignupTab(tabName);
        history.replaceState(null, '', '#signup');
    });
});

function openSignupFromHash() {
    if (window.location.hash === '#volunteer') {
        showSignupTab('volunteer');
        document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.hash === '#sponsor-apply') {
        showSignupTab('sponsor');
        document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.hash === '#signup') {
        showSignupTab('rider');
    }
}

window.addEventListener('hashchange', openSignupFromHash);
openSignupFromHash();





// ===== MEMORIAL SECTION =====
const MEMORIAL_CANDLE_KEY = 'cmwc_eduardo_mosquera_candles';
const memorialCandleBtn = document.getElementById('memorial-candle-btn');
const memorialCandleCount = document.getElementById('memorial-candle-count');

function getMemorialCandleCount() {
    return parseInt(localStorage.getItem(MEMORIAL_CANDLE_KEY) || '0', 10) || 0;
}

function updateMemorialCandleText() {
    if (!memorialCandleCount) return;
    const count = getMemorialCandleCount();
    memorialCandleCount.textContent = count;
    const line = memorialCandleCount.closest('.memorial-candle-count');
    if (line && languageText[currentLanguage]?.memorialCandles) {
        line.textContent = languageText[currentLanguage].memorialCandles(count);
        line.prepend(memorialCandleCount);
        memorialCandleCount.insertAdjacentText('afterend', ' ');
    }
}

if (memorialCandleBtn) {
    memorialCandleBtn.addEventListener('click', () => {
        const nextCount = getMemorialCandleCount() + 1;
        localStorage.setItem(MEMORIAL_CANDLE_KEY, String(nextCount));
        updateMemorialCandleText();
        memorialCandleBtn.classList.add('lit');
        setTimeout(() => memorialCandleBtn.classList.remove('lit'), 650);
    });
}
updateMemorialCandleText();

// ===== SOCIAL MEDIA SECTION =====
const socialCards = document.querySelectorAll('.social-card');
const socialPreviewTitle = document.querySelector('.social-preview-title');
const socialPreviewText = document.querySelector('.social-preview-text');
const copySocialHandleBtn = document.getElementById('copy-social-handle');
const socialCopyStatus = document.getElementById('social-copy-status');

function setActiveSocialCard(card) {
    if (!card) return;
    socialCards.forEach(item => item.classList.toggle('active', item === card));
    if (socialPreviewTitle) socialPreviewTitle.textContent = card.dataset.platform || '';
    if (socialPreviewText) socialPreviewText.textContent = card.dataset.description || '';
    if (copySocialHandleBtn) copySocialHandleBtn.dataset.handle = card.dataset.handle || '';
    if (socialCopyStatus) socialCopyStatus.textContent = '';
}

socialCards.forEach(card => {
    card.addEventListener('mouseenter', () => setActiveSocialCard(card));
    card.addEventListener('focus', () => setActiveSocialCard(card));
});

if (copySocialHandleBtn) {
    copySocialHandleBtn.addEventListener('click', async () => {
        const handle = copySocialHandleBtn.dataset.handle || '';
        try {
            await navigator.clipboard.writeText(handle);
            if (socialCopyStatus) socialCopyStatus.textContent = languageText[currentLanguage].socialCopied;
        } catch (e) {
            if (socialCopyStatus) socialCopyStatus.textContent = handle;
        }
    });
}


// ===== FOOD PREFERENCE BUBBLES =====
function initFoodPreferenceBubbles() {
    document.querySelectorAll('input[data-other-toggle]').forEach(input => {
        const target = document.getElementById(input.dataset.otherToggle);
        const update = () => {
            if (!target) return;
            target.classList.toggle('hidden', !input.checked);
            const textInput = target.querySelector('input');
            if (textInput && !input.checked) textInput.value = '';
        };
        input.addEventListener('change', update);
        update();
    });

    // If someone chooses "No preference", clear other food choices in that same bubble group.
    document.querySelectorAll('.food-bubble-group').forEach(group => {
        group.addEventListener('change', event => {
            const changed = event.target;
            if (!changed || changed.type !== 'checkbox') return;
            const boxes = Array.from(group.querySelectorAll('input[type="checkbox"]'));
            if (changed.value === 'no-preference' && changed.checked) {
                boxes.forEach(box => { if (box !== changed) box.checked = false; });
            } else if (changed.checked) {
                const none = boxes.find(box => box.value === 'no-preference');
                if (none) none.checked = false;
            }
            document.querySelectorAll('input[data-other-toggle]').forEach(input => {
                const target = document.getElementById(input.dataset.otherToggle);
                if (target) target.classList.toggle('hidden', !input.checked);
            });
        });
    });
}

// ===== INITIALIZE EVERYTHING =====
initFoodPreferenceBubbles();
initMap();
updateStats();
updateCountryList();
loadPublicSignupStats();
initLanguageSwitcher();

// Re-initialize Lucide icons after dynamic content when available
if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
}

// ===== GOFUNDME BACKGROUND SLIDESHOW =====
// The GoFundMe background is now pure HTML + CSS.
// This avoids path/cache/JavaScript-order problems, so the images show even if another script fails.


// ===== SITE TRAFFIC TRACKING FOR ADMIN DASHBOARD =====
(function trackSiteTraffic() {
    try {
        if (window.location.protocol === 'file:') return;
        const sessionKey = 'cmwc_site_session_id';
        let sessionId = sessionStorage.getItem(sessionKey);
        if (!sessionId) {
            sessionId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
            sessionStorage.setItem(sessionKey, sessionId);
        }

        const payload = new FormData();
        payload.append('path', window.location.pathname + window.location.search + window.location.hash);
        payload.append('title', document.title || 'CMWC 2027');
        payload.append('referrer', document.referrer || '');
        payload.append('session_id', sessionId);

        const endpoint = 'forms/track-visit.php';
        if (navigator.sendBeacon) {
            navigator.sendBeacon(endpoint, payload);
        } else {
            fetch(endpoint, { method: 'POST', body: payload, keepalive: true }).catch(() => {});
        }
    } catch (error) {
        // Never let analytics stop the public website from working.
    }
})();

