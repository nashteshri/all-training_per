document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').innerText;
            const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('Price: $', ''));

            addToCart(productId, productName, productPrice);
        });
    });

    function addToCart(id, name, price) {
        cartItems.push({ id, name, price });
        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(listItem);
            total += item.price;
        });
        totalPriceElement.innerText = total.toFixed(2);
    }
});
