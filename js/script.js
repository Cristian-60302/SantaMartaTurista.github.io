const places = [
  {
    id: "tayrona",
    name: "Parque Tayrona",
    region: "Santa Marta, Magdalena",
    type: "naturaleza playa",
    short: "Playas, selva seca tropical, senderos y miradores frente a la Sierra Nevada.",
    description: "Uno de los lugares mas representativos del Caribe colombiano. Combina playas, bosque, caminos ancestrales y paisajes donde la Sierra Nevada cae casi directo al mar.",
    tips: ["Lleva agua y efectivo", "Revisa cierres temporales del parque", "Respeta zonas sagradas y senderos marcados"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parque%20Nacional%20Natural%20Tayrona%207.jpg",
    credit: "Hugo A. Quintero G. / Wikimedia Commons"
  },
  {
    id: "cartagena",
    name: "Cartagena amurallada",
    region: "Cartagena, Bolivar",
    type: "cultura playa",
    short: "Murallas, plazas coloniales, gastronomia caribena y atardeceres sobre el mar.",
    description: "El centro historico de Cartagena es patrimonio, memoria y vida urbana. Sus calles permiten leer siglos de arquitectura, comercio, musica y mezcla cultural.",
    tips: ["Camina temprano o al final de la tarde", "Visita Getsemani", "Hidratarse es clave por el calor"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ciudad%20amurallada%20fog.jpg",
    credit: "Felipe Ortega Grijalba / Wikimedia Commons"
  },
  {
    id: "guajira",
    name: "Cabo de la Vela",
    region: "Uribia, La Guajira",
    type: "naturaleza cultura playa",
    short: "Desierto, mar, rancherias Wayuu y uno de los paisajes mas singulares del pais.",
    description: "Un destino para viajar con calma y respeto por el territorio Wayuu. El contraste entre arena, viento y Caribe crea una experiencia completamente distinta a la playa tradicional.",
    tips: ["Contrata transporte local", "Protector solar obligatorio", "Pregunta antes de fotografiar personas"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cabo%20de%20la%20vela%20%28%20Guajira%20%29.jpg",
    credit: "Kobaor / Wikimedia Commons"
  },
  {
    id: "palomino",
    name: "Palomino",
    region: "Dibulla, La Guajira",
    type: "playa naturaleza",
    short: "Rio, playa, hostales tranquilos y vistas hacia la Sierra Nevada.",
    description: "Palomino es un punto de encuentro entre viajeros, mar y montana. Es popular por sus playas extensas y recorridos por rio, pero conviene viajar con cuidado ambiental.",
    tips: ["Evita dejar basura en la playa", "Consulta el estado del mar", "Apoya negocios locales"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Palomino%20beach.JPG",
    credit: "Wikimedia Commons"
  },
  {
    id: "san-andres",
    name: "San Andres",
    region: "Archipielago de San Andres",
    type: "islas playa",
    short: "Mar de siete colores, raizales, cayos y cultura insular caribena.",
    description: "Mas que playas bonitas: San Andres tiene identidad raizal, gastronomia propia, arrecifes y una historia marcada por el Caribe occidental.",
    tips: ["Cuida los corales", "Respeta la cultura raizal", "Reserva actividades nauticas responsables"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Andr%C3%A9s%20Island%20Colombia.JPG",
    credit: "Roberto San Andres / Wikimedia Commons"
  },
  {
    id: "barranquilla",
    name: "Barranquilla",
    region: "Atlantico",
    type: "cultura",
    short: "Carnaval, rio Magdalena, museos, musica y cocina popular.",
    description: "Barranquilla es energia urbana del Caribe. Su carnaval es la gran fiesta, pero la ciudad tambien se disfruta en el Malecon del Rio, barrios tradicionales y espacios culturales.",
    tips: ["Visita el Malecon", "Prueba comida local", "En carnaval reserva con anticipacion"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/GranMalecon1.jpg",
    credit: "Jdvillalobos / Wikimedia Commons"
  },
  {
    id: "mompox",
    name: "Santa Cruz de Mompox",
    region: "Bolivar",
    type: "cultura naturaleza",
    short: "Arquitectura colonial, filigrana, iglesias y vida lenta junto al rio Magdalena.",
    description: "Mompox invita a bajar el ritmo. Es un destino historico del Caribe interior, perfecto para caminar, hablar con artesanos y mirar el rio al atardecer.",
    tips: ["Camina el centro historico", "Compra filigrana a artesanos", "Lleva repelente"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Calle%20real%204.JPG",
    credit: "Wikimedia Commons"
  },
  {
    id: "providencia",
    name: "Providencia",
    region: "Archipielago de San Andres",
    type: "islas naturaleza playa",
    short: "Arrecifes, montanas pequenas, playas tranquilas y cultura raizal viva.",
    description: "Providencia es una isla para viajar despacio, escuchar y cuidar. Sus arrecifes y su identidad raizal hacen que el turismo responsable sea imprescindible.",
    tips: ["Viaja con operadores locales", "No toques corales ni fauna", "Respeta ritmos y costumbres de la isla"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Providencia%2C%20Colombia%20-%20panoramio%20%2826%29.jpg",
    credit: "Jose Rafael Luna / Wikimedia Commons"
  }
];

const seededReviews = [
  {
    placeId: "tayrona",
    placeName: "Parque Tayrona",
    userName: "Laura M.",
    rating: 5,
    text: "La caminata hasta Cabo San Juan fue fuerte por el calor, pero el paisaje compensa todo. Recomiendo llevar agua y salir temprano.",
    date: "2026-05-01"
  },
  {
    placeId: "cartagena",
    placeName: "Cartagena amurallada",
    userName: "Andres C.",
    rating: 4,
    text: "El centro historico es precioso para caminar de noche. Getsemani fue mi parte favorita por los murales y la musica.",
    date: "2026-04-18"
  },
  {
    placeId: "guajira",
    placeName: "Cabo de la Vela",
    userName: "Natalia R.",
    rating: 5,
    text: "Un viaje distinto a cualquier playa. Lo mas valioso fue ir con guias Wayuu y entender mejor el territorio.",
    date: "2026-03-27"
  }
];

const storageKeys = {
  users: "ccv_users",
  session: "ccv_session",
  reviews: "ccv_reviews",
  visited: "ccv_visited"
};

const API_BASE_URL = "https://motosmart-api-vercel-github-io.vercel.app/api";
const authEndpoints = {
  login: "/login",
  register: "/register"
};

const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const destinationGrid = document.getElementById("destinationGrid");
const reviewList = document.getElementById("reviewList");
const visitedGrid = document.getElementById("visitedGrid");
const authModal = document.getElementById("authModal");
const placeModal = document.getElementById("placeModal");
const loginOpen = document.getElementById("loginOpen");
const authForm = document.getElementById("authForm");
const tripText = document.getElementById("tripText");

let activePlaceId = null;

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function apiPost(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const text = await response.text();
  let data = {};
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
  }

  if (!response.ok) {
    const error = new Error(data.message || data.error || "La API rechazo la solicitud.");
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

function normalizeApiUser(data, fallback) {
  const source = data.user || data.usuario || data.data || data;
  return {
    name: source.name || source.nombre || fallback.name,
    email: source.email || fallback.email,
    token: data.token || data.accessToken || source.token || null,
    source: "api"
  };
}

function saveLocalSession(name, email, password) {
  const users = read(storageKeys.users, {});

  if (users[email] && users[email].password !== password) {
    throw new Error("La contrasena no coincide con la cuenta guardada en este navegador.");
  }

  users[email] = { name, email, password };
  write(storageKeys.users, users);
  write(storageKeys.session, { name, email, source: "local" });
}

async function authenticateUser(name, email, password) {
  const loginPayload = { email, password };
  const registerPayload = {
    name,
    nombre: name,
    email,
    password
  };

  try {
    const loginData = await apiPost(authEndpoints.login, loginPayload);
    write(storageKeys.session, normalizeApiUser(loginData, { name, email }));
    return "api-login";
  } catch (loginError) {
    if (!loginError.status) {
      saveLocalSession(name, email, password);
      return "local-fallback";
    }

    try {
      const registerData = await apiPost(authEndpoints.register, registerPayload);
      write(storageKeys.session, normalizeApiUser(registerData, { name, email }));
      return "api-register";
    } catch (registerError) {
      if (!registerError.status) {
        saveLocalSession(name, email, password);
        return "local-fallback";
      }
      throw registerError;
    }
  }
}

function currentUser() {
  return read(storageKeys.session, null);
}

function allReviews() {
  return [...seededReviews, ...read(storageKeys.reviews, [])];
}

function userVisited() {
  const user = currentUser();
  if (!user) return [];
  const visited = read(storageKeys.visited, {});
  return visited[user.email] || [];
}

function setUserVisited(ids) {
  const user = currentUser();
  if (!user) return;
  const visited = read(storageKeys.visited, {});
  visited[user.email] = ids;
  write(storageKeys.visited, visited);
}

function stars(rating) {
  return "★★★★★".slice(0, Number(rating)).padEnd(5, "☆");
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.getElementById(id).setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.getElementById(id).setAttribute("aria-hidden", "true");
  if (!document.querySelector(".modal-overlay.open")) {
    document.body.classList.remove("modal-open");
  }
}

function requireLogin() {
  if (currentUser()) return true;
  openModal("authModal");
  return false;
}

function renderDestinations(filter = "todos") {
  const visited = userVisited();
  const filtered = filter === "todos" ? places : places.filter((place) => place.type.includes(filter));

  destinationGrid.innerHTML = filtered.map((place) => {
    const isVisited = visited.includes(place.id);
    return `
      <article class="destination-card">
        <div class="destination-media">
          <img src="${place.image}" alt="${place.name}, ${place.region}" loading="lazy">
          ${isVisited ? '<span class="destination-badge">Visitado</span>' : ""}
        </div>
        <div class="destination-body">
          <div class="destination-meta">
            <span>${place.region}</span>
            <span>${place.type.split(" ")[0]}</span>
          </div>
          <h3>${place.name}</h3>
          <p>${place.short}</p>
          <div class="destination-actions">
            <button class="btn light" data-open-place="${place.id}">Detalles</button>
            <button class="btn primary" data-visit="${place.id}">${isVisited ? "Quitar" : "Ya fui"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderReviews() {
  const reviews = allReviews().sort((a, b) => new Date(b.date) - new Date(a.date));
  reviewList.innerHTML = reviews.map((review) => `
    <article class="review-card">
      <header>
        <div>
          <h3>${review.placeName}</h3>
          <small>${review.userName} · ${new Date(review.date).toLocaleDateString("es-CO")}</small>
        </div>
        <span class="stars">${stars(review.rating)}</span>
      </header>
      <p>${review.text}</p>
    </article>
  `).join("");
  document.getElementById("heroReviews").textContent = reviews.length;
}

function renderVisited() {
  const user = currentUser();
  const visited = userVisited();
  document.getElementById("heroVisited").textContent = visited.length;

  if (!user) {
    visitedGrid.innerHTML = '<div class="empty-state">Cuando inicies sesion, aqui aparecera tu bitacora de lugares visitados.</div>';
    tripText.textContent = "Inicia sesion para marcar destinos visitados, contar como te fue y orientar a otros viajeros.";
    return;
  }

  tripText.textContent = `${user.name}, has marcado ${visited.length} destino(s). Puedes quitar lugares o abrirlos para escribir una resena.`;

  if (!visited.length) {
    visitedGrid.innerHTML = '<div class="empty-state">Todavia no has marcado destinos. Empieza con el boton "Ya fui" en cualquier tarjeta.</div>';
    return;
  }

  visitedGrid.innerHTML = visited.map((id) => {
    const place = places.find((item) => item.id === id);
    if (!place) return "";
    return `
      <article class="visited-item">
        <button data-remove-visited="${place.id}" aria-label="Quitar ${place.name}">x</button>
        <h3>${place.name}</h3>
        <p>${place.region}</p>
        <button class="btn light" style="position:static;margin-top:12px;color:var(--ink)" data-open-place="${place.id}">Agregar resena</button>
      </article>
    `;
  }).join("");
}

function updateAuthUI() {
  const user = currentUser();
  const tripLogin = document.getElementById("tripLogin");
  if (user) {
    loginOpen.textContent = user.name.split(" ")[0];
    loginOpen.classList.add("logged");
    tripLogin.textContent = "Cambiar usuario";
  } else {
    loginOpen.textContent = "Iniciar sesion";
    loginOpen.classList.remove("logged");
    tripLogin.textContent = "Iniciar sesion";
  }
}

function refresh() {
  const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "todos";
  updateAuthUI();
  renderDestinations(activeFilter);
  renderReviews();
  renderVisited();
}

function toggleVisited(placeId) {
  if (!requireLogin()) return;
  const visited = userVisited();
  const next = visited.includes(placeId)
    ? visited.filter((id) => id !== placeId)
    : [...visited, placeId];
  setUserVisited(next);
  refresh();
}

function showPlace(placeId) {
  const place = places.find((item) => item.id === placeId);
  if (!place) return;
  activePlaceId = placeId;
  const visited = userVisited().includes(placeId);
  const user = currentUser();
  const template = document.getElementById("reviewFormTemplate");

  document.getElementById("placeModalContent").innerHTML = `
    <img class="place-modal-img" src="${place.image}" alt="${place.name}, ${place.region}">
    <p class="eyebrow">${place.region}</p>
    <h2>${place.name}</h2>
    <p>${place.description}</p>
    <div class="place-tags">
      ${place.tips.map((tip) => `<span>${tip}</span>`).join("")}
    </div>
    <p class="form-note">Foto: ${place.credit}</p>
    <div class="destination-actions">
      <button class="btn primary" data-visit="${place.id}">${visited ? "Quitar de visitados" : "Marcar como visitado"}</button>
      ${user ? "" : '<button class="btn light" data-login-from-place>Iniciar sesion para resenar</button>'}
    </div>
    ${user ? template.innerHTML : ""}
  `;

  openModal("placeModal");
}

function saveReview(event) {
  event.preventDefault();
  if (!requireLogin() || !activePlaceId) return;
  const place = places.find((item) => item.id === activePlaceId);
  const user = currentUser();
  const review = {
    placeId: place.id,
    placeName: place.name,
    userName: user.name,
    rating: Number(document.getElementById("reviewRating").value),
    text: document.getElementById("reviewText").value.trim(),
    date: new Date().toISOString()
  };

  const reviews = read(storageKeys.reviews, []);
  reviews.push(review);
  write(storageKeys.reviews, reviews);

  if (!userVisited().includes(place.id)) {
    setUserVisited([...userVisited(), place.id]);
  }

  closeModal("placeModal");
  refresh();
  document.getElementById("comunidad").scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  nav.classList.toggle("menu-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    nav.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("filters").addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (!button) return;
  document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderDestinations(button.dataset.filter);
});

document.addEventListener("click", (event) => {
  const openPlace = event.target.closest("[data-open-place]");
  const visit = event.target.closest("[data-visit]");
  const removeVisited = event.target.closest("[data-remove-visited]");
  const close = event.target.closest("[data-close]");
  const loginFromPlace = event.target.closest("[data-login-from-place]");

  if (openPlace) showPlace(openPlace.dataset.openPlace);
  if (visit) toggleVisited(visit.dataset.visit);
  if (removeVisited) {
    setUserVisited(userVisited().filter((id) => id !== removeVisited.dataset.removeVisited));
    refresh();
  }
  if (close) closeModal(close.dataset.close);
  if (loginFromPlace) openModal("authModal");
});

document.querySelectorAll("#loginOpen, #heroLogin, #tripLogin").forEach((button) => {
  button.addEventListener("click", () => openModal("authModal"));
});

document.getElementById("clearTrip").addEventListener("click", () => {
  const user = currentUser();
  if (!user) {
    openModal("authModal");
    return;
  }
  setUserVisited([]);
  refresh();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("authName").value.trim();
  const email = document.getElementById("authEmail").value.trim().toLowerCase();
  const password = document.getElementById("authPassword").value;
  const submitButton = authForm.querySelector("button[type='submit']");
  const originalText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.textContent = "Conectando...";

  try {
    const mode = await authenticateUser(name, email, password);
    authForm.reset();
    closeModal("authModal");
    refresh();

    if (mode === "local-fallback") {
      alert("No se pudo contactar la API. Se inicio sesion en modo local para que puedas seguir usando la bitacora.");
    }
  } catch (error) {
    alert(error.message || "No fue posible iniciar sesion o registrar el usuario.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});

placeModal.addEventListener("submit", (event) => {
  if (event.target.matches("#reviewForm")) saveReview(event);
});

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal(overlay.id);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((overlay) => closeModal(overlay.id));
  }
});

refresh();
