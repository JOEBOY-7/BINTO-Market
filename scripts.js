// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
toggle.addEventListener('click', () => {
const open = nav.classList.toggle('open');
toggle.setAttribute('aria-expanded', String(open));
// animate burger into X
toggle.classList.toggle('x');
});
}

// Make header elevate on scroll
const header = document.querySelector('[data-elevate]');
let lastY = 0;
window.addEventListener('scroll', () => {
const y = window.scrollY;
header.style.boxShadow = y > 6 ? '0 6px 20px rgba(0,0,0,.25)' : 'none';
lastY = y;
});

// Footer year
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll for same-page links (basic)
document.querySelectorAll('a[href^="#"]').forEach(a => {
a.addEventListener('click', e => {
const id = a.getAttribute('href').slice(1);
if (!id) return;
const el = document.getElementById(id);
if (el) {
e.preventDefault();
el.scrollIntoView({ behavior: 'smooth', block: 'start' });
nav?.classList.remove('open');
toggle?.setAttribute('aria-expanded', 'false');
}
});
});

// Simple, friendly form handler (no backend)
const form = document.querySelector('form');
const msg = document.querySelector('.form__msg');
form?.addEventListener('submit', e => {
e.preventDefault();
const data = new FormData(form);
const name = (data.get('name') || '').toString().trim();
const email = (data.get('email') || '').toString().trim();

if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
msg.textContent = 'Please enter a valid name and email.';
msg.style.color = 'var(--danger)';
return;
}

msg.textContent = `Thanks, ${name}! We’ll reach out at ${email} within 1 business day.`;
msg.style.color = 'var(--accent-500)';
form.reset();
});
// Check if user has a saved role
document.addEventListener("DOMContentLoaded", () => {
  const userRole = localStorage.getItem("userRole");

  if (userRole) {
    if (userRole === "customer") {
      window.location.href = "customer.html";
    } else if (userRole === "marketer") {
      window.location.href = "marketer.html";
    }
  }

  // Add click listeners to path buttons
  const customerBtn = document.querySelector(".path-card.customer");
  const marketerBtn = document.querySelector(".path-card.marketer");

  if (customerBtn) {
    customerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("userRole", "customer");
      window.location.href = "customer.html";
    });
  }

  if (marketerBtn) {
    marketerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("userRole", "marketer");
      window.location.href = "marketer.html";
    });
  }
});
const resetLink = document.getElementById("resetRole");
if (resetLink) {
  resetLink.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    window.location.href = "index.html";
  });
}
// Check if user has a saved role
document.addEventListener("DOMContentLoaded", () => {
  const userRole = localStorage.getItem("userRole");

  if (userRole) {
    if (userRole === "customer") {
      window.location.href = "customer.html";
    } else if (userRole === "marketer") {
      window.location.href = "marketer.html";
    }
  }

  // Add click listeners to path buttons
  const customerBtn = document.querySelector(".path-card.customer");
  const marketerBtn = document.querySelector(".path-card.marketer");

  if (customerBtn) {
    customerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("userRole", "customer");
      window.location.href = "customer.html";
    });
  }

  if (marketerBtn) {
    marketerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("userRole", "marketer");
      window.location.href = "marketer.html";
    });
  }
})
// For Signup
//document.getElementById("signup-form")?.addEventListener("submit", function(e) {
  //e.preventDefault();
  //alert("🎉 Signup successful! Redirecting to shop...");
  //window.location.href = "customer-shop.html";
//});//

// For Login
document.getElementById("login-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🔑 Login successful! Redirecting to shop...");
  window.location.href = "customer-shop.html";
});
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "order-confirmation.html";
});document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "order-confirmation.html";
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCountEl = document.getElementById("cart-count");

function addToCart(name, price) {
  let item = cart.find(p => p.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCountEl.textContent = cart.length;
  alert("🛒 " + name + " added to cart!");
}