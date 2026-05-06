// ========================
// SANTA MARTA VIVA — JS
// ========================

/* NAV scroll */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* Hamburger (mobile) */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(10,79,110,0.97)';
  navLinks.style.padding = '24px';
  navLinks.style.gap = '20px';
});

/* Scroll reveal */
const reveals = document.querySelectorAll('.tour-card, .guia-card, .plan-card, .destino-item, .section-header');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

/* Tours filter */
const filterBtns = document.querySelectorAll('.filter-btn');
const tourCards = document.querySelectorAll('.tour-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    tourCards.forEach(card => {
      const cats = card.dataset.cat || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* Testimonials slider */
const testimonios = document.querySelectorAll('.testimonio');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
let sliderInterval;

testimonios.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('slider-dot');
  dot.setAttribute('aria-label', `Testimonio ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function goToSlide(index) {
  testimonios[currentSlide].classList.remove('active');
  document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');
  currentSlide = (index + testimonios.length) % testimonios.length;
  testimonios[currentSlide].classList.add('active');
  document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
}

function startSlider() {
  sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

goToSlide(0);
startSlider();

// Pause on hover
document.querySelector('.testimonios-slider').addEventListener('mouseenter', () => clearInterval(sliderInterval));
document.querySelector('.testimonios-slider').addEventListener('mouseleave', startSlider);

/* Modal data */
const modalData = {
  'ciudad-perdida': {
    title: 'Trekking Ciudad Perdida',
    cat: 'Aventura · Cultura · Sierra Nevada',
    desc: 'Un viaje épico de 4-5 días hacia el corazón de la Sierra Nevada de Santa Marta. Caminarás por senderos de selva húmeda, cruzarás ríos y dormirás en campamentos mientras descubres el sitio arqueológico más impresionante de Colombia: Teyuna, la Ciudad Perdida de los Tayrona.',
    details: [
      '🗓️ Duración: 4 o 5 días',
      '🥾 Dificultad: Alta (46 km)',
      '🏕️ Campamentos con hamacas o colchonetas',
      '🍽️ Todas las comidas incluidas',
      '🌿 Guías nativos certificados (Wiwa/Kogi)',
      '👥 Grupos máximo 12 personas',
      '🚐 Salida desde Santa Marta cada día',
      '📋 Permiso de entrada al parque incluido',
    ],
    price: 'Desde $580.000 COP por persona'
  },
  'tayrona': {
    title: 'Parque Tayrona — Playa Cristal',
    cat: 'Naturaleza · Playa · Ecoturismo',
    desc: 'Un día completo en uno de los parques nacionales más biodiversos de Colombia. Playas de arena blanca bordeadas de selva tropical y arrecifes de coral de colores. Incluye snorkel, caminata ecológica y transporte en lancha.',
    details: [
      '🗓️ Duración: 1 día (salida 7:30am)',
      '🚤 Transporte en lancha incluido',
      '🐠 Equipo de snorkel incluido',
      '🌊 Parada mirador de las 7 olas',
      '🦎 Guía naturalista certificado',
      '🍱 Almuerzo no incluido (restaurante en el parque)',
      '⚠️ Parque cierra Feb, Jun y Oct–Nov',
    ],
    price: 'Desde $120.000 COP por persona'
  },
  'minca': {
    title: 'Minca — Café, Cacao y Cascadas',
    cat: 'Naturaleza · Cultura · Gastronomía',
    desc: 'Sube a los pies de la Sierra Nevada hasta el pequeño pueblo de Minca, paraíso del café de altura. Aprende el proceso del café y el cacao de manos de productores locales, y termina el día con un refrescante baño en cascadas de agua cristalina.',
    details: [
      '🗓️ Duración: 1 día',
      '☕ Taller completo de café artesanal',
      '🍫 Elaboración de chocolate',
      '💦 Baño en cascadas Pozo Azul o Marinka',
      '🦜 Avistamiento de aves en ruta',
      '🚐 Transporte desde/hasta tu hotel',
      '👨‍🌾 Guía local y productor cafetalero',
    ],
    price: 'Desde $95.000 COP por persona'
  },
  'playa-blanca': {
    title: 'Playa Blanca y Delfines',
    cat: 'Playa · Mar · Relajación',
    desc: 'Embárcate en una lancha desde Santa Marta hacia la paradisíaca Playa Blanca. En el camino, visita Mundo Marino para presenciar el espectáculo de los delfines en su hábitat natural. Una tarde de pura esencia caribeña.',
    details: [
      '🗓️ Duración: 1 día',
      '🐬 Avistamiento de delfines en Mundo Marino',
      '🏖️ Playa Blanca — arena y aguas turquesas',
      '⛵ Navegación en lancha ida y vuelta',
      '🤿 Snorkel disponible como adicional',
      '🍹 Bebidas a bordo incluidas',
      '📷 Paradas fotográficas en ruta',
    ],
    price: 'Desde $110.000 COP por persona'
  },
  'free-tour': {
    title: 'Free Tour Centro Histórico',
    cat: 'Cultura · Historia · Ciudad',
    desc: 'Descubre la ciudad más antigua de Colombia a través de sus calles coloniales, plazas y monumentos. Un recorrido con guía local experto que revela la historia, las leyendas y los secretos de Santa Marta desde su fundación en 1525.',
    details: [
      '⏱️ Duración: 3.5 horas',
      '🏛️ Quinta de San Pedro Alejandrino',
      '⛪ Catedral Basílica Menor (la más antigua del país)',
      '🏺 Museo del Oro Tayrona',
      '🌅 Vista panorámica bahía de Santa Marta',
      '⚽ Monumento al Pibe Valderrama',
      '👨‍🏫 Guía certificado en historia colonial',
    ],
    price: 'Desde $45.000 COP por persona'
  },
  'velero': {
    title: 'Velero al Atardecer en Taganga',
    cat: 'Playa · Romántico · Mar',
    desc: 'Vive una tarde mágica navegando por la bahía de Taganga a bordo de un velero. Contempla una de las puestas de sol más espectaculares del Caribe colombiano con bebidas incluidas. Perfecto para parejas o grupos pequeños.',
    details: [
      '⏱️ Duración: 2.5 horas (salida 4:30pm)',
      '⛵ Velero con capacidad máx. 12 personas',
      '🌅 Mejor puesta de sol de Taganga',
      '🍹 Cóctel de bienvenida y bebidas incluidas',
      '📸 Fotógrafo a bordo (foto de recuerdo)',
      '🎵 Música en vivo algunos días',
      '🐠 Posibilidad de snorkel al regreso',
    ],
    price: 'Desde $75.000 COP por persona'
  },
  'plan-caribe': {
    title: 'Plan Caribe — 3 días',
    cat: 'Paquete completo · Playa · Naturaleza',
    desc: 'El plan perfecto para conocer los mejores atractivos de Santa Marta en un fin de semana largo. Combina aventura en el Parque Tayrona con la magia del atardecer en Taganga y el free tour histórico por la ciudad.',
    details: [
      '🛏️ 2 noches de alojamiento incluido',
      '🌊 Tour Parque Tayrona con snorkel',
      '⛵ Velero al atardecer en Taganga',
      '🏛️ Free tour centro histórico',
      '🍳 Desayunos incluidos',
      '🚐 Transporte a todos los tours',
      '📋 Guía turístico durante el viaje',
    ],
    price: 'Desde $450.000 COP por persona'
  },
  'plan-sierra': {
    title: 'Plan Sierra — 5 días',
    cat: 'Paquete completo · Aventura · Cultura',
    desc: 'La experiencia insignia de Santa Marta: el trekking completo a Ciudad Perdida combinado con el tour histórico de la ciudad. Una aventura que cambiará tu perspectiva sobre Colombia.',
    details: [
      '🥾 Trekking Ciudad Perdida 4 días completo',
      '🏕️ Campamentos y comidas en ruta incluidos',
      '🏛️ Tour centro histórico Santa Marta',
      '🌿 Guías nativos indígenas certificados',
      '🎒 Kit básico de equipo de senderismo',
      '🚐 Traslados aeropuerto–hotel',
      '👥 Grupos máximo 12 personas',
    ],
    price: 'Desde $980.000 COP por persona'
  },
  'plan-total': {
    title: 'Plan Todo Santa Marta — 7 días',
    cat: 'Paquete premium · Todo incluido',
    desc: 'La experiencia definitiva en Santa Marta. 7 días recorriendo cada rincón de la región: la Sierra Nevada, el Caribe, Minca, Taganga y el centro histórico colonial. Para quienes quieren vivirlo todo.',
    details: [
      '✅ Trekking Ciudad Perdida (4 días)',
      '✅ Parque Tayrona Playa Cristal',
      '✅ Minca — café y cascadas',
      '✅ Velero al atardecer en Taganga',
      '✅ Free tour histórico completo',
      '✅ Playa Blanca y delfines',
      '🛏️ 6 noches alojamiento incluido',
      '🚐 Todos los traslados incluidos',
      '📋 Coordinación personalizada',
    ],
    price: 'Desde $1.580.000 COP por persona'
  }
};

function openModal(key) {
  const data = modalData[key];
  if (!data) return;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-cat">${data.cat}</div>
    <h2 class="modal-content-title">${data.title}</h2>
    <p class="modal-desc">${data.desc}</p>
    <ul class="modal-detail">
      ${data.details.map(d => `<li>${d}</li>`).join('')}
    </ul>
    <div class="modal-price">Precio: <strong>${data.price}</strong></div>
    <button class="btn-modal-reserve" onclick="reserveNow('${key}')">
      Reservar este tour →
    </button>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function reserveNow(key) {
  const data = modalData[key];
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  
  // Scroll to contact form and pre-select
  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const select = document.querySelector('.contacto-form select');
    if (select && data) {
      const options = select.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].text.toLowerCase().includes(data.title.split('—')[0].trim().toLowerCase().split(' ')[0].toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  }, 800);
}

/* Close modal */
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
});
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* Contact form submit */
document.querySelector('.btn-submit').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.contacto-form input, .contacto-form select, .contacto-form textarea');
  let filled = true;
  inputs.forEach(inp => {
    if (!inp.value.trim()) filled = false;
  });

  if (!filled) {
    alert('Por favor completa todos los campos antes de enviar.');
    return;
  }

  const btn = document.querySelector('.btn-submit');
  btn.textContent = '✓ ¡Consulta enviada! Te contactaremos pronto.';
  btn.style.background = '#1cb4b4';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Enviar consulta →';
    btn.style.background = '';
    btn.disabled = false;
    inputs.forEach(inp => inp.value = '');
  }, 4000);
});