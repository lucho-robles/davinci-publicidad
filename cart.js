const cart = {
    items: [],

    init: () => {
        // Load from local storage
        const saved = localStorage.getItem('greenlife_cart');
        if (saved) {
            cart.items = JSON.parse(saved);
        }
        cart.updateCounter();
    },

    save: () => {
        localStorage.setItem('greenlife_cart', JSON.stringify(cart.items));
        cart.updateCounter();
    },

    add: (productId) => {
        // Find product in data
        let product = null;

        // Search in all categories
        // 1. Alimentos > Elaborados
        product = products.alimentos.elaborados.find(p => p.id === productId);
        // 2. Alimentos > Envasados
        if (!product) product = products.alimentos.envasados.find(p => p.id === productId);
        // 3. Suplementos
        if (!product) product = products.suplementos.find(p => p.id === productId);

        if (!product) return;

        // Check if already in cart
        const existing = cart.items.find(item => item.id === productId);
        if (existing) {
            existing.qty++;
        } else {
            cart.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty: 1
            });
        }

        cart.save();
        alert(`${product.name} agregado al carrito.`);
    },

    remove: (productId) => {
        cart.items = cart.items.filter(item => item.id !== productId);
        cart.save();
        cart.renderCart(); // Re-render if open
    },

    updateCounter: () => {
        const count = cart.items.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById('cart-count').innerText = count;
    },

    renderCart: () => {
        const container = document.getElementById('cart-items-container');
        const totalEl = document.getElementById('cart-total');

        if (cart.items.length === 0) {
            container.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem;">Tu carrito está vacío.</p>';
            totalEl.innerText = '0';
            return;
        }

        let total = 0;

        container.innerHTML = cart.items.map(item => {
            total += item.price * item.qty;
            const itemTotal = item.price * item.qty;
            const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(item.price);

            return `
                <div class="cart-item">
                    <div style="display:flex; align-items:center; gap: 1rem;">
                        <img src="${item.image}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
                        <div>
                            <h4>${item.name}</h4>
                            <span style="color:var(--text-muted); font-size:0.9rem;">${formattedPrice} x ${item.qty}</span>
                        </div>
                    </div>
                    <button onclick="cart.remove('${item.id}')" style="color:red; background:none; border:none; cursor:pointer;">Eliminar</button>
                </div>
            `;
        }).join('');

        totalEl.innerText = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(total);
    }
};
