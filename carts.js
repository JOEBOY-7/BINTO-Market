// Simple cart interaction (demo only)
document.querySelectorAll(".qty-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    let input = this.parentElement.querySelector("input");
    let currentValue = parseInt(input.value);

    if (this.textContent === "+" && currentValue < 99) {
      input.value = currentValue + 1;
    } else if (this.textContent === "-" && currentValue > 1) {
      input.value = currentValue - 1;
    }
  });
});

document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    this.closest(".cart-item").remove();
  });
});

function logout() {
  alert("Logging out...");
  window.location.href = "index.html";
}
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent=cartCount;
  alert("🛒Item added to cart! Total:" + cartCount)
}
// Load cart items from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCountEl = document.getElementById("cart-count");
let cartItemsEl = document.querySelector("#cart-items tbody");
let subtotalEl = document.getElementById("cart-subtotal");

// Update cart display
function renderCart() {
  cartItemsEl.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    let total = item.price * item.quantity;
    subtotal += total;

    let row = `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" 
            onchange="updateQuantity(${index}, this.value)">
        </td>
        <td>$${total.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">❌ Remove</button></td>
      </tr>
    `;
    cartItemsEl.innerHTML += row;
  });

  subtotalEl.textContent = subtotal.toFixed(2);
  cartCountEl.textContent = cart.length;
}

// Update item quantity
function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Initial render
renderCart();