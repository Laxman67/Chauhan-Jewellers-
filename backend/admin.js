// Admin panel JavaScript
const API_BASE = 'http://localhost:5000/api';

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateStats();
});

// Load all products
async function loadProducts() {
    try {
        const response = await fetch(`${API_BASE}/products`);
        const products = await response.json();
        displayProducts(products);
        updateStats(products);
    } catch (error) {
        console.error('Error loading products:', error);
        showNotification('Error loading products', 'error');
    }
}

// Display products in table
function displayProducts(products) {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <img src="http://localhost:5000${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg" 
                     onerror="this.src='https://via.placeholder.com/64x64/fbbf24/1f2937?text=${encodeURIComponent(product.name)}'">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900">${product.name}</div>
                <div class="text-sm text-gray-500">${product.description.substring(0, 50)}...</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    ${product.category}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${product.price}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                ${product.featured ? 
                    '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Featured</span>' : 
                    '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Regular</span>'
                }
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="editProduct(${product.id})" class="text-yellow-600 hover:text-yellow-900 mr-3">Edit</button>
                <button onclick="deleteProduct(${product.id})" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Update statistics
function updateStats(products = []) {
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('featuredProducts').textContent = products.filter(p => p.featured).length;
    document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString();
}

// Add product form submission
document.getElementById('addProductForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', document.getElementById('productName').value);
    formData.append('category', document.getElementById('productCategory').value);
    formData.append('price', document.getElementById('productPrice').value);
    formData.append('description', document.getElementById('productDescription').value);
    formData.append('featured', document.getElementById('productFeatured').checked);
    formData.append('image', document.getElementById('productImage').files[0]);

    try {
        const response = await fetch(`${API_BASE}/products`, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            showNotification('Product added successfully!', 'success');
            this.reset();
            loadProducts();
        } else {
            const error = await response.json();
            showNotification(error.error || 'Error adding product', 'error');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        showNotification('Error adding product', 'error');
    }
});

// Edit product
async function editProduct(id) {
    try {
        const response = await fetch(`${API_BASE}/products/${id}`);
        const product = await response.json();
        
        // Populate edit form
        document.getElementById('editProductId').value = product.id;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductDescription').value = product.description;
        document.getElementById('editProductFeatured').checked = product.featured;
        
        // Show modal
        document.getElementById('editModal').classList.remove('hidden');
    } catch (error) {
        console.error('Error loading product for edit:', error);
        showNotification('Error loading product', 'error');
    }
}

// Update product form submission
document.getElementById('editProductForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const productId = document.getElementById('editProductId').value;
    const formData = new FormData();
    formData.append('name', document.getElementById('editProductName').value);
    formData.append('category', document.getElementById('editProductCategory').value);
    formData.append('price', document.getElementById('editProductPrice').value);
    formData.append('description', document.getElementById('editProductDescription').value);
    formData.append('featured', document.getElementById('editProductFeatured').checked);
    
    const imageFile = document.getElementById('editProductImage').files[0];
    if (imageFile) {
        formData.append('image', imageFile);
    }

    try {
        const response = await fetch(`${API_BASE}/products/${productId}`, {
            method: 'PUT',
            body: formData
        });

        if (response.ok) {
            showNotification('Product updated successfully!', 'success');
            closeEditModal();
            loadProducts();
        } else {
            const error = await response.json();
            showNotification(error.error || 'Error updating product', 'error');
        }
    } catch (error) {
        console.error('Error updating product:', error);
        showNotification('Error updating product', 'error');
    }
});

// Delete product
async function deleteProduct(id) {
    if (!confirm('Are you sure you want to delete this product?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/products/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            showNotification('Product deleted successfully!', 'success');
            loadProducts();
        } else {
            const error = await response.json();
            showNotification(error.error || 'Error deleting product', 'error');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        showNotification('Error deleting product', 'error');
    }
}

// Close edit modal
function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = '/';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
}
