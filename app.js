// Application Logic for Pet Paradise & Bird Shop

let cart = JSON.parse(localStorage.getItem('pet_cart')) || [];
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCartBadge();
  renderReviews();
  renderFeaturedProducts();
  renderShopProducts();
  renderBirdZone();
});

/* ================= PAGE VIEW ROUTING ================= */
function switchView(viewId) {
  // Hide all view sections
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.classList.remove('active'));

  // Deactivate all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(l => l.classList.remove('active'));

  // Activate selected view
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Activate corresponding nav link
  const activeLink = document.querySelector(`.nav-link[data-view="${viewId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // If entering cart, re-render cart layout
  if (viewId === 'cart') {
    renderCart();
  }

  // Close mobile drawer if open
  document.getElementById('nav-links').classList.remove('mobile-open');
}

function toggleMobileMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('mobile-open');
}

/* ================= PRODUCT RENDERING ================= */
function createProductCardHTML(item, isBirdZone = false) {
  const isBird = item.category === 'birds';
  const badgeHTML = `
    ${item.isPopular ? '<span class="badge badge-pop"><i class="fa-solid fa-fire"></i> ยอดนิยม</span>' : ''}
    ${item.isNew ? '<span class="badge badge-new"><i class="fa-solid fa-sparkles"></i> สมาชิกใหม่</span>' : ''}
    ${isBird ? '<span class="badge badge-bird"><i class="fa-solid fa-crow"></i> นกแก้ว</span>' : ''}
  `;

  return `
    <div class="product-card">
      <div class="product-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-badge-group">
          ${badgeHTML}
        </div>
      </div>

      <div class="product-content">
        <div class="product-category">${item.categoryTh}</div>
        <h3 class="product-title">${item.name}</h3>
        
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <strong>${item.rating}</strong>
          <span>(${item.reviewsCount} รีวิว)</span>
        </div>

        <div class="product-tags">
          ${item.tags ? item.tags.map(t => `<span class="tag">#${t}</span>`).join('') : ''}
        </div>

        <div class="product-footer">
          <div class="product-price">
            <span class="current-price">฿${item.price.toLocaleString()}</span>
            ${item.originalPrice ? `<span class="original-price">฿${item.originalPrice.toLocaleString()}</span>` : ''}
          </div>

          <div class="product-actions">
            <button class="btn-icon btn-icon-facebook" onclick="openFacebookModal('${item.facebookPresetMsg || 'สอบถามรายละเอียด ' + item.name}')" title="สอบถามผ่าน Facebook">
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button class="btn-icon btn-icon-cart" onclick="openPetDetailModal('${item.id}')" title="ดูรายละเอียด">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn-icon btn-icon-cart" onclick="addToCart('${item.id}')" title="เพิ่มลงตะกร้า">
              <i class="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFeaturedProducts() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  // Filter top 4 popular or new items
  const featured = PET_DATA.filter(p => p.isPopular || p.isNew).slice(0, 4);
  container.innerHTML = featured.map(item => createProductCardHTML(item)).join('');
}

function renderShopProducts() {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  let filtered = PET_DATA;

  // Category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Search filter
  if (currentSearch.trim() !== '') {
    const term = currentSearch.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.categoryTh.toLowerCase().includes(term) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(term)))
    );
  }

  // Sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 3rem; margin-bottom: 1rem;"></i>
        <h3>ไม่พบผลลัพธ์การค้นหา</h3>
        <p>ลองค้นหาด้วยคำค้นอื่น หรือเปลี่ยนหมวดหมู่สินค้า</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => createProductCardHTML(item)).join('');
}

function renderBirdZone() {
  const container = document.getElementById('bird-zone-grid');
  if (!container) return;

  const birds = PET_DATA.filter(p => p.category === 'birds');
  container.innerHTML = birds.map(item => createProductCardHTML(item, true)).join('');
}

function filterByCategory(cat, btnElement) {
  currentCategory = cat;
  
  // Highlight category button
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  renderShopProducts();
}

function handleSearch() {
  const input = document.getElementById('shop-search-input');
  if (input) {
    currentSearch = input.value;
    renderShopProducts();
  }
}

function handleSortChange() {
  const select = document.getElementById('shop-sort-select');
  if (select) {
    currentSort = select.value;
    renderShopProducts();
  }
}

function renderReviews() {
  const container = document.getElementById('reviews-container');
  if (!container) return;

  container.innerHTML = REVIEWS_DATA.map(r => `
    <div class="review-card">
      <div class="review-author">
        <img src="${r.avatar}" alt="${r.name}" class="review-avatar">
        <div>
          <strong style="display: block; font-size: 1rem;">${r.name}</strong>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${r.role}</span>
        </div>
      </div>
      <div style="color: var(--accent); margin-bottom: 0.5rem; font-size: 0.9rem;">
        ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
      </div>
      <p style="font-size: 0.95rem; color: var(--text-main); font-style: italic;">"${r.comment}"</p>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.8rem; text-align: right;">${r.date}</div>
    </div>
  `).join('');
}

/* ================= CART SYSTEM ================= */
function addToCart(petId) {
  const product = PET_DATA.find(p => p.id === petId);
  if (!product) return;

  const existing = cart.find(item => item.id === petId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryTh: product.categoryTh,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`เพิ่ม "${product.name}" ลงในตะกร้าแล้ว`);
}

function updateCartQty(petId, change) {
  const item = cart.find(i => i.id === petId);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== petId);
  }

  saveCart();
  updateCartBadge();
  renderCart();
}

function saveCart() {
  localStorage.setItem('pet_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
  badge.textContent = totalCount;
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items-list');
  const emptyMsg = document.getElementById('cart-empty-message');
  const layout = document.getElementById('cart-layout-container');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    emptyMsg.style.display = 'block';
    layout.style.display = 'none';
    return;
  }

  emptyMsg.style.display = 'none';
  layout.style.display = 'grid';

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">฿${item.price.toLocaleString()}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
      </div>
      <button onclick="updateCartQty('${item.id}', -${item.qty})" style="color: #ef4444; padding: 0.5rem;" title="ลบรายการ">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Calculate Subtotal & Total
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 0 ? 150 : 0;
  const total = subtotal + shipping;

  document.getElementById('summary-subtotal').textContent = `฿${subtotal.toLocaleString()}`;
  document.getElementById('summary-shipping').textContent = `฿${shipping.toLocaleString()}`;
  document.getElementById('summary-total').textContent = `฿${total.toLocaleString()}`;
}

/* ================= MODAL & Facebook INTEGRATION ================= */
function openPetDetailModal(petId) {
  const product = PET_DATA.find(p => p.id === petId);
  if (!product) return;

  const container = document.getElementById('modal-pet-content');
  const isBird = product.category === 'birds';

  container.innerHTML = `
    <div>
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 320px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-md);">
    </div>
    <div>
      <span class="product-category">${product.categoryTh}</span>
      <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">${product.name}</h2>
      
      <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 1rem;">
        ฿${product.price.toLocaleString()}
      </div>

      <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.2rem;">
        ${product.description}
      </p>

      <!-- Specifications Table -->
      <div style="background: var(--bg-main); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; font-size: 0.88rem;">
        ${product.age ? `<div style="margin-bottom: 0.3rem;"><strong>อายุ:</strong> ${product.age}</div>` : ''}
        ${product.health ? `<div style="margin-bottom: 0.3rem;"><strong>สุขภาพ:</strong> ${product.health}</div>` : ''}
        ${product.specifications ? Object.entries(product.specifications).map(([k, v]) => `
          <div style="margin-bottom: 0.3rem;"><strong>${k}:</strong> ${v}</div>
        `).join('') : ''}
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.8rem;">
        ${isBird ? `
          <button class="btn btn-facebook" onclick="openFacebookModal('${product.facebookPresetMsg || 'สอบถามรายละเอียด ' + product.name}')">
            <i class="fa-brands fa-facebook"></i> สอบถามรายละเอียดนกตัวนี้ผ่าน Facebook
          </button>
        ` : ''}
        <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeModal('modal-pet-detail');">
          <i class="fa-solid fa-cart-plus"></i> เพิ่มลงในตะกร้าสินค้า
        </button>
      </div>
    </div>
  `;

  document.getElementById('modal-pet-detail').classList.add('active');
}

function openFacebookModal(presetText) {
  const lineModal = document.getElementById('modal-facebook-qr');
  const directBtn = document.getElementById('facebook-direct-btn');
  const desc = document.getElementById('facebook-modal-preset-desc');

  const encodedMsg = encodeURIComponent(presetText || 'สวัสดีครับ สนใจสอบถามเกี่ยวกับสัตว์เลี้ยงครับ');
  const fullFacebookUrl = `${SHOP_INFO.facebookUrl}?text=${encodedMsg}`;

  directBtn.href = fullFacebookUrl;
  desc.innerHTML = `ข้อความที่จะส่ง: <em>"${presetText}"</em>`;

  lineModal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function copyFacebookId() {
  navigator.clipboard.writeText(SHOP_INFO.facebookId).then(() => {
    showToast(`คัดลอก Facebook ID (${SHOP_INFO.facebookId}) สำเร็จ!`);
  }).catch(() => {
    showToast(`Facebook ID: ${SHOP_INFO.facebookId}`);
  });
}

function sendCartToFacebook() {
  if (cart.length === 0) {
    showToast('ไม่มีสินค้าในตะกร้า');
    return;
  }

  let text = 'สวัสดีครับ/ค่ะ ต้องการสั่งซื้อสินค้าในตะกร้าดังนี้:\n';
  cart.forEach((item, idx) => {
    text += `${idx + 1}. ${item.name} x ${item.qty} = ฿${(item.price * item.qty).toLocaleString()}\n`;
  });
  const total = cart.reduce((s, i) => s + (i.price * i.qty), 0) + 150;
  text += `\nราคารวมสุทธิ (รวมส่ง): ฿${total.toLocaleString()}\nขอรายละเอียดการชำระเงินด้วยครับ`;

  openFacebookModal(text);
}

function processCheckout() {
  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;

  if (!name || !phone || !address) {
    showToast('กรุณากรอกข้อมูล ชื่อ เบอร์โทร และที่อยู่ให้ครบถ้วน');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const total = subtotal + 150;

  // Generate summary HTML
  const summaryBox = document.getElementById('order-summary-box');
  summaryBox.innerHTML = `
    <div><strong>ชื่อผู้สั่งซื้อ:</strong> ${name}</div>
    <div><strong>เบอร์โทร:</strong> ${phone}</div>
    <div><strong>ที่อยู่จัดส่ง:</strong> ${address}</div>
    <hr style="margin: 0.5rem 0; border: none; border-top: 1px dashed var(--border-color);">
    <div><strong>รายการสินค้า (${cart.length} รายการ):</strong></div>
    ${cart.map(i => `<div style="font-size: 0.85rem; color: var(--text-muted);">${i.name} x ${i.qty} (฿${(i.price*i.qty).toLocaleString()})</div>`).join('')}
    <div style="font-weight: 700; color: var(--primary); margin-top: 0.5rem;">ราคารวมสุทธิ: ฿${total.toLocaleString()}</div>
  `;

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();

  // Show order success modal
  document.getElementById('modal-checkout-success').classList.add('active');
}

/* ================= THEME & TOAST UTILS ================= */
function initTheme() {
  const savedTheme = localStorage.getItem('pet_theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById('theme-icon').className = 'fa-solid fa-sun';
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  const icon = document.getElementById('theme-icon');
  
  if (isDark) {
    icon.className = 'fa-solid fa-sun';
    localStorage.setItem('pet_theme', 'dark');
  } else {
    icon.className = 'fa-solid fa-moon';
    localStorage.setItem('pet_theme', 'light');
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const msg = document.getElementById('toast-message');
  if (!toast || !msg) return;

  msg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
