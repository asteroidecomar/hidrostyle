// Lee el tipo de producto desde el atributo data-type del body
const PRODUCT_TYPE = document.body.dataset.type;

const API_URL = `https://hidrostyle-admin-backend-production.up.railway.app/public/products?type=${PRODUCT_TYPE}`;

const productsGrid = document.getElementById("productsGrid");
const loadingEl = document.getElementById("loading");
const resultsInfo = document.getElementById("resultsInfo");
const noResults = document.getElementById("noResults");

// filtros
const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const motorFilter = document.getElementById("motorFilter");
const jetsFilter = document.getElementById("jetsFilter");
const clearFiltersBtn = document.getElementById("clearFilters");

let allProducts = [];

// ========================
// Fetch inicial
// ========================
async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    allProducts = data;

    fillFilters();
    renderProducts(allProducts);
    resultsInfo.textContent = `Se encontraron ${allProducts.length} ${PRODUCT_TYPE}`;
  } catch (err) {
    console.error("❌ Error cargando productos", err);
    resultsInfo.textContent = "Error cargando productos";
  } finally {
    loadingEl.style.display = "none";
  }
}

// ========================
// Render productos
// ========================
function renderProduct(product) {
  console.log(product);
  return `
    <div class="product-card">
      <div class="product-header">
        <span class="product-category">${product.category || "-"}</span>
        <h3 class="product-name">${product.name}</h3>
      </div>

      <div class="product-visual">
        <img src="${product.image_url || `../img/placeholder-${PRODUCT_TYPE}.png`}" 
             alt="${product.name}" 
             class="product-visual-image" />
      </div>

      <div class="product-content">
        <div class="specs-grid">
          <div class="spec-item">
            <span class="spec-value">${product.length || "-"}</span>
            <span class="spec-label">Largo (cm)</span>
          </div>
          <div class="spec-item">
            <span class="spec-value">${product.width || "-"}</span>
            <span class="spec-label">Ancho (cm)</span>
          </div>
          ${
            product.jets && product.jets !== "N/A"
              ? `
          <div class="spec-item">
            <span class="spec-value">${product.jets}</span>
            <span class="spec-label">Jets</span>
          </div>` 
              : ""
          }
          ${
            product.motor && product.motor !== "N/A"
              ? `
          <div class="spec-item">
            <span class="spec-value">${product.motor}</span>
            <span class="spec-label">Motor</span>
          </div>` 
              : ""
          }
        </div>

        <ul class="features-list">
          ${(product.features || []).map(f => `<li>${f}</li>`).join("")}
        </ul>

        <div class="product-actions">
          <a href="#contacto" 
             class="btn btn-primary" 
             onclick="contactProduct('${product.name}')">💬 Consultar</a>
        </div>
      </div>
    </div>
  `;
}



function renderProducts(products) {
  if (!products || products.length === 0) {
    noResults.style.display = "block";
    productsGrid.innerHTML = "";
    return;
  }
  noResults.style.display = "none";
  productsGrid.innerHTML = products.map(renderProduct).join("");
}

// ========================
// Popular filtros
// ========================
function fillFilters() {
  const categories = [...new Set(allProducts.map((p) => p.category).filter(Boolean))];
  const motors = [...new Set(allProducts.map((p) => p.motor).filter(Boolean))];
  const jets = [...new Set(allProducts.map((p) => p.jets).filter(Boolean))];

  categoryFilter.innerHTML = `<option value="">Todas</option>` + categories.map((c) => `<option value="${c}">${c}</option>`).join("");
  motorFilter.innerHTML = `<option value="">Todos</option>` + motors.map((m) => `<option value="${m}">${m}</option>`).join("");
  jetsFilter.innerHTML = `<option value="">Todos</option>` + jets.map((j) => `<option value="${j}">${j}</option>`).join("");
}

// ========================
// Aplicar filtros
// ========================
function applyFilters() {
  let filtered = [...allProducts];

  const search = searchBox.value.toLowerCase();
  const category = categoryFilter.value;
  const motor = motorFilter.value;
  const jets = jetsFilter.value;

  if (search) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        (p.description && p.description.toLowerCase().includes(search))
    );
  }

  if (category) filtered = filtered.filter((p) => p.category === category);
  if (motor) filtered = filtered.filter((p) => p.motor === motor);
  if (jets) filtered = filtered.filter((p) => String(p.jets) === jets);

  renderProducts(filtered);
  resultsInfo.textContent = `Se encontraron ${filtered.length} ${PRODUCT_TYPE}`;
}

// ========================
// Eventos
// ========================
searchBox.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
motorFilter.addEventListener("change", applyFilters);
jetsFilter.addEventListener("change", applyFilters);
clearFiltersBtn.addEventListener("click", () => {
  searchBox.value = "";
  categoryFilter.value = "";
  motorFilter.value = "";
  jetsFilter.value = "";
  applyFilters();
});

// ========================
// Contacto vía WhatsApp
// ========================
function contactProduct(productName) {
  const message = `Hola! Me interesa el ${PRODUCT_TYPE.slice(0, -1)} ${productName}. ¿Podrían proporcionarme más información y precio?`;
  const whatsappUrl = `https://wa.me/5491166610832?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

// Init
loadProducts();
