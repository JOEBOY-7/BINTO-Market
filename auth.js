// Signup Redirect
document.getElementById("signup-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.getElementById("signup-role").value;

  if (role === "customer") {
    alert("🎉 Signup successful as Customer! Redirecting...");
    window.location.href = "customer-shop.html";
  } else if (role === "marketer") {
    alert("🚀 Signup successful as Marketer! Redirecting...");
    window.location.href = "marketer-dashboard.html";
  }
});

// Login Redirect
document.getElementById("login-form")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.getElementById("login-role").value;

  if (role === "customer") {
    alert("🔑 Login successful as Customer! Redirecting...");
    window.location.href = "customer-shop.html";
  } else if (role === "marketer") {
    alert("🔑 Login successful as Marketer! Redirecting...");
    window.location.href = "marketer-dashboard.html";
  }
});