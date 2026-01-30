// Datos de los productos
const products = [
    {
        id: 1,
        name: "Lavamanos Ovalado",
        code: "CDYP2382",
        price: 29.00,
        size: "52cm x 30cm",
        material: "Cerámica vitrificada premium",
        category: "LAVAMANOS",
        description: "Lavamanos de sobreponer con diseño ovalado contemporáneo, fabricado en cerámica sanitaria de alta calidad con acabado blanco brillante. Su forma ergonómica y estilizada aporta un toque de sofisticación y minimalismo a cualquier baño moderno.",
        image: "CDYP2382.jpg",
        imageDetail: "CDYP2382.jpg"
    },
    {
        id: 2,
        name: "Lavamanos Cuadrado Moderno",
        code: "CDYP11104",
        price: 24.25,
        size: "48CM x 37.5CM",
        material: "Cerámica ",
        category: "LAVAMANOS",
        description: "Lavamanos de cerámica blanca con diseño cuadrado contemporáneo. Perfecto para baños modernos y minimalistas. Superficie fácil de limpiar y resistente a manchas.",
        image: "CDYP11104.png",
        imageDetail: "CDYP11104.png"
    },
    {
        id: 3,
        name: "LAVAMANOS REDONDO",
        code: "CDYP11165",
        price: 28.95,
        size: "46cm x 46",
        material: "Cerámica ",
        category: "LAVAMANOS",
        description: "Lavamanos de ceramica blanca redondo. Perfecto para remodelar tu baño y hacerlo mas moderno. Superficie facil de limpiar",
        image: "CDYP11165.png",
        imageDetail: "CDYP11165.png"
    },
    {
        id: 4,
        name: "Ducha Tipo Lluvia Premium",
        code: "CDYP205",
        price: 299.99,
        size: "25cm diámetro",
        material: "Acero inoxidable cromado",
        category: "LAVAMANOS",
        description: "Sistema de ducha completo con regadera tipo lluvia de diseño moderno. Acabado cromado de alta calidad resistente a la corrosión. Incluye brazo de pared ajustable.",
        image: "CDYP205.png",
        imageDetail: "CDYP205.png"
    },
    {
        id: 5,
        name: "Set de Accesorios de Baño",
        code: "CDYP11104B",
        price: 79.99,
        size: "Varios tamaños",
        material: "Acero inoxidable cromado",
        category: "LAVAMANOS",
        description: "Set completo de 5 piezas para baño en acabado cromado premium. Incluye toallero, porta papel, jabonera y percheros. Diseño moderno que combina con cualquier estilo.",
        image: "CDYP11104B.png",
        imageDetail: "CDYP11104B.png"
    },
    {
        id: 6,
        name: "Grifería Mezcladora Moderna",
        code: "CDYP251",
        price: 125.00,
        size: "35cm alto",
        material: "Latón cromado premium",
        category: "LAVAMANOS",
        description: "Grifo mezclador de diseño contemporáneo con acabado cromado brillante. Sistema de ahorro de agua con aireador incluido. Cartucho cerámico de larga duración.",
        image: "CDYP251.png",
        imageDetail: "CDYP251.png"
    },
    {
        id: 7,
        name: "Espejo de Baño con LED",
        code: "CDMFJ048",
        price: 199.00,
        size: "80cm x 60cm",
        material: "Cristal templado con marco de aluminio",
        category: "LAVAMANOS",
        description: "Espejo moderno con iluminación LED integrada. Marco de aluminio resistente a la humedad. Luz blanca fría de bajo consumo. Interruptor táctil incluido.",
        image: "CDMFJ048.png",
        imageDetail: "CDMFJ048.png"
    },
    {
        id: 8,
        name: "Mueble de Baño Flotante",
        code: "CDMFJ301-41",
        price: 450.00,
        size: "90cm x 50cm x 60cm (Alto)",
        material: "MDF resistente a la humedad",
        category: "LAVAMANOS",
        description: "Mueble flotante moderno con acabado en madera y cajones de cierre suave. Incluye lavamanos integrado de cerámica. Herrajes de montaje incluidos.",
        image: "CDMFJ301-41.png",
        imageDetail: "CDMFJ301-41.png"
    },
    {
        id: 9,
        name: "Regadera de Mano Multifunción",
        code: "CDYP11165A",
        price: 45.00,
        size: "25cm largo",
        material: "ABS cromado de alta calidad",
        category: "LAVAMANOS",
        description: "Regadera de mano con 5 tipos de rociado diferentes. Incluye manguera flexible de 150cm y soporte ajustable para pared. Fácil instalación.",
        image: "CDYP11165A.png",
        imageDetail: "CDYP11165A.png"
    },
    {
        id: 10,
        name: "Toallero Eléctrico Calefactor",
        code: "CDMFJ066B",
        price: 220.00,
        size: "60cm x 80cm",
        material: "Acero inoxidable",
        category: "LAVAMANOS",
        description: "Toallero eléctrico de pared con calefacción. Mantiene las toallas calientes y secas. Acabado cromado elegante. Bajo consumo energético con termostato ajustable.",
        image: "CDMFJ066B.png",
        imageDetail: "CDMFJ066B.png"
    },
    {
        id: 11,
        name: "DUCHA",
        code: "CDYP-FYS2517",
        price: 29.00,
        size: "52cm x 30cm",
        material: "Cerámica vitrificada premium",
        category: "DUCHAS",
        description: "Lavamanos de sobreponer con diseño ovalado contemporáneo, fabricado en cerámica sanitaria de alta calidad con acabado blanco brillante. Su forma ergonómica y estilizada aporta un toque de sofisticación y minimalismo a cualquier baño moderno.",
        image: "FYS2517HD.png",
        imageDetail: "FYS2517HD.png"
    },
    {
        id: 12,
        name: "DUCHA",
        code: "CDYP-FYS2501",
        price: 29.00,
        size: "52cm x 30cm",
        material: "Cerámica vitrificada premium",
        category: "DUCHAS",
        description: "Lavamanos de sobreponer con diseño ovalado contemporáneo, fabricado en cerámica sanitaria de alta calidad con acabado blanco brillante. Su forma ergonómica y estilizada aporta un toque de sofisticación y minimalismo a cualquier baño moderno.",
        image: "FYS25011.jpg",
        imageDetail: "FYS25011.jpg"
    }
];

// Variables globales
let currentView = 'grid';
let filteredProducts = [...products];

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const productsContainer = document.getElementById('productsContainer');
const productCount = document.getElementById('productCount');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');

// Event Listeners
searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
gridViewBtn.addEventListener('click', () => changeView('grid'));
listViewBtn.addEventListener('click', () => changeView('list'));
closeModal.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// Funciones
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;

    filteredProducts = products.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.code.toLowerCase().includes(searchTerm);

        // Filtro de categoría
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

        // Filtro de precio
        let matchesPrice = true;
        if (selectedPrice === 'low') matchesPrice = product.price < 100;
        if (selectedPrice === 'medium') matchesPrice = product.price >= 100 && product.price < 250;
        if (selectedPrice === 'high') matchesPrice = product.price >= 250;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts();
}

function changeView(view) {
    currentView = view;
    
    if (view === 'grid') {
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        productsContainer.classList.remove('products-list');
        productsContainer.classList.add('products-grid');
    } else {
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        productsContainer.classList.remove('products-grid');
        productsContainer.classList.add('products-list');
    }
    
    renderProducts();
}

function renderProducts() {
    productCount.textContent = filteredProducts.length;

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: white;">
                <p style="font-size: 24px; margin-bottom: 10px;">😔</p>
                <p style="font-size: 18px; font-weight: 600;">No se encontraron productos</p>
                <p style="color: rgba(255,255,255,0.7); margin-top: 8px;">Intenta con otros filtros de búsqueda</p>
            </div>
        `;
        return;
    }

    if (currentView === 'grid') {
        productsContainer.innerHTML = filteredProducts.map(product => `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="image-overlay">
                        <div class="view-details-btn">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                            </svg>
                            Ver Detalles
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <div>
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-code">${product.code}</p>
                        </div>
                        <span class="product-category">${product.category}</span>
                    </div>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    } else {
        productsContainer.innerHTML = filteredProducts.map(product => `
            <div class="product-card-list" onclick="openProductModal(${product.id})">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <div style="flex: 1;">
                            <h3 class="product-name" style="font-size: 20px;">${product.name}</h3>
                            <p class="product-code">${product.code}</p>
                            <p class="product-description">${product.description}</p>
                            <div class="product-info-row">
                                <span>📏 ${product.size}</span>
                                <span>🔨 ${product.material}</span>
                            </div>
                        </div>
                        <div class="list-price-section">
                            <div style="text-align: right;">
                                <p class="product-price" style="font-size: 32px;">$${product.price.toFixed(2)}</p>
                                <span class="product-category" style="margin-top: 12px; display: inline-block;">${product.category}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalImage').src = product.imageDetail || product.image;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalCode').textContent = product.code;
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalSize').textContent = product.size;
    document.getElementById('modalMaterial').textContent = product.material;
    document.getElementById('modalDescription').textContent = product.description;

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Inicializar

renderProducts();




