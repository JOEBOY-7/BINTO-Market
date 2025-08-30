document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Thank you! Your order has been placed successfully.");
  window.location.href = "customer-dashboard.html";
});