let products = [];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const quantity = document.getElementById("quantity").value;

  if (!name || !price || !quantity) {
    alert("Please enter all fields!");
    return;
  }

  products.push({
    name,
    price: parseFloat(price),
    quantity: parseInt(quantity),
  });
  displayProducts();

  // clear input
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}

function buyProduct(index) {
  if (products[index].quantity > 0) {
    products[index].quantity -= 1;
    displayProducts();
  } else {
    alert("Out of stock!");
  }
}

function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product, index) => {
    productList.innerHTML += `
      <div class="product">
        <h4>${product.name}</h4>
        <p>Price: ₹${product.price}</p>
        <p>Available: ${product.quantity}</p>
        <button class="btn" onclick="buyProduct(${index})" ${
      product.quantity === 0 ? "disabled" : ""
    }>
          Buy
        </button>
      </div>
    `;
  });
}
