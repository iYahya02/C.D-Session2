let products = [];
let currentID = 1;

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const model = document.getElementById('model').value;
    const quantity = document.getElementById('quantity').value;

    addProduct(productName, model, quantity);
    displayProducts();
});

function addProduct(name, model, quantity) {
    const product = {
        id: currentID++,
        name: name,
        model: model,
        quantity: parseInt(quantity)
    };
    products.push(product);
}

function displayProducts() {
    const tbody = document.getElementById('productsTable').querySelector('tbody');
    tbody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.model}</td>
            <td>${product.quantity}</td>
            <td><button onclick="updateProduct(${product.id})">Update</button></td>
            <td><button onclick="deleteProduct(${product.id})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    products.forEach((product, index) => {
        product.id = index + 1;
    });
    currentID = products.length + 1;
    displayProducts();
}

function updateProduct(id) {
    const product = products.find(p => p.id === id);
    document.getElementById('productName').value = product.name;
    document.getElementById('model').value = product.model;
    document.getElementById('quantity').value = product.quantity;
    // More logic to handle the update operation can be added
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
}

function incrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
    } else {
        body.classList.remove('day');
        body.classList.add('night');
    }
}

// Initialize with day mode
document.body.classList.add('day');