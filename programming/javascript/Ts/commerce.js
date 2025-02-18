document.addEventListener('DOMContentLoaded', () => {
    const products = [
        
        { id: 1, name: ' Acer Aspire 7 15.6" Full HD Laptop, Intel Core i7 i7-8750H, 1TB HD', category: 'laptops', price: 689, rating: 4, image: 'https://th.bing.com/th/id/OIP.ENFiI2expgUp0QSSpOaWQwHaF5?w=227&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 1, name: ' Acer Aspire 7 15.6" Full HD Laptop, Intel Core i7 i7-8750H, 1TB HD', category: 'laptops', price: 490, rating: 4, image: 'https://th.bing.com/th/id/OIP.ENFiI2expgUp0QSSpOaWQwHaF5?w=227&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 1, name: ' Lenovo 15.6" Full HD Laptop, Intel Core i7 i9-8750H, 1TB HD ', category: 'laptops', price:5900, rating: 4, image: 'th.jpg' },
        { id: 2, name: 'IPhone 16|128gb |Gold', category: 'phones', price: 799, rating: 5, image: 'OIP (1).jpg' },
        { id: 3, name: 'Samsung S9 5g Fe plus |128 gb|5g', category: 'tablets', price: 530, rating: 4, image: 'download.jpg' },
        { id: 4, name: 'Nikon D5600 With two lenses ', category: 'cameras', price: 490, rating: 4.1, image: 'camera.jpg' },
        { id: 5, name: 'Noise headset ', category: 'accessories', price: 69, rating: 4.5, image: 'bose.jpg' },
        { id: 6, name: 'Smartwatch Samsung watch', category: 'wearables', price: 150, rating: 4, image: 'watch.jpg' },
        { id: 7, name: 'Monitor ', category: 'monitors', price: 290, rating: 4, image: 'monitor.jpg' },
        { id: 8, name: 'Keyboard ', category: 'accessories', price: 180, rating: 3, image: 'keyboard.jpg' },
        { id: 9, name: 'Mouse ', category: 'accessories', price: 70, rating: 4, image: 'mouse.jpg' },
        { id: 10, name: 'Printer ', category: 'printers', price: 900, rating: 5, image: 'printer.jpg' },
    ];

    const filterOptions = {
        category: 'all',
        priceRange: 100000,
        rating: 'all'
    };

    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const renderProducts = () => {
        const productContainer = document.getElementById('products');
        productContainer.innerHTML = '';

        const filteredProducts = products.filter(product => {
            return (filterOptions.category === 'all' || product.category === filterOptions.category) &&
                   product.price <= filterOptions.priceRange &&
                   (filterOptions.rating === 'all' || product.rating >= filterOptions.rating);
        });

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating} Stars</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    };

    const updateCartSummary = () => {
        const cartContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price;
        });

        cartTotal.innerHTML = `<p>Total: $${total}</p>`;
        document.getElementById('cart-count').textContent = `(${cart.length})`;
    };

    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
        updateCartSummary();
    };

    window.removeFromCart = (productId) => {
        const cartIndex = cart.findIndex(p => p.id === productId);
        if (cartIndex !== -1) {
            cart.splice(cartIndex, 1);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            updateCartSummary();
        }
    };

    document.getElementById('category').addEventListener('change', (e) => {
        filterOptions.category = e.target.value;
        renderProducts();
    });

    document.getElementById('price-range').addEventListener('input', (e) => {
        filterOptions.priceRange = e.target.value;
        renderProducts();
    });

    document.getElementById('rating').addEventListener('change', (e) => {
        filterOptions.rating = e.target.value;
        renderProducts();
    });

    renderProducts();
    updateCartSummary();
});
