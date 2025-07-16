const carrito = [];
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const mensajeCompra = document.getElementById("mensajeCompra");

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
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

document.getElementById("comprarBtn").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const total = cartTotal.textContent;
  const productos = carrito.map(p => `- ${p.nombre}: $${p.precio.toFixed(2)}`).join('%0A');
  const cuerpoMensaje = `¡Hola! Estoy interesado en comprar en RebelVibes.%0A%0AProductos:%0A${productos}%0A%0ATotal: $${total}%0A%0AIngresa tu dirección para el envío. Gracias.`;

  const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=mceleste2r@gmail.com&su=Interesado%20en%20RebelVibes&body=${cuerpoMensaje}`;

  window.open(mailto, '_blank'); // Abre Gmail en una nueva pestaña

  // Mostrar mensaje de compra exitosa (opcional)
  mensajeCompra.style.display = "block";
  setTimeout(() => {
    mensajeCompra.style.display = "none";
  }, 4000);
});
