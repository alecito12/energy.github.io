// SLIDER DE IMÁGENES
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000); // cada 5 segundos

// CARRITO DE COMPRAS
const carrito = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const mensajeCompra = document.getElementById("mensajeCompra");

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
  mostrarAviso();
}

function actualizarCarrito() {
  cartItems.innerHTML = "";
  let total = 0;
  carrito.forEach((item) => {
    total += item.precio;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = carrito.length;
}

function mostrarAviso() {
  const aviso = document.getElementById("aviso");
  aviso.style.display = "block";
  aviso.style.opacity = "1";
  aviso.style.transform = "translateY(0)";
  setTimeout(() => {
    aviso.style.opacity = "0";
    aviso.style.transform = "translateY(20px)";
    setTimeout(() => {
      aviso.style.display = "none";
    }, 500);
  }, 2000);
}

// BOTÓN COMPRAR → GMAIL
document.getElementById("comprarBtn").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const total = cartTotal.textContent;
  const productos = carrito.map(p => `- ${p.nombre}: $${p.precio.toFixed(2)}`).join('%0A');
  const mensaje = `¡Hola! Estoy interesado en comprar en RebelVibes.%0A%0AProductos:%0A${productos}%0A%0ATotal: $${total}%0A%0AIngresa tu dirección para el envío. Gracias.`;
  const mailtoLink = `mailto:mceleste2r@gmail.com?subject=interesad@%20en%20RebelVibes&body=${mensaje}`;

  // Redirige a Gmail
  window.location.href = mailtoLink;

  // Mostrar mensaje después de 3 segundos
  setTimeout(() => {
    mensajeCompra.style.display = "block";
  }, 3000);
});

// LOGIN FICTICIO
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensajeLogin').style.display = 'block';
});
