/* =====================================================
   UNIQUE STTEPS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   PRODUCTS
===================================================== */

const products = [

    {
        id: 1,
        name: "Burgundy Patent Bow Pointed-Toe Heels",
        price: 899,
        category: "heels",
        image: "product-1.jpg"
    },

    {
        id: 2,
        name: "Black Patent Bow Pointed-Toe Heels",
        price: 999,
        category: "heels",
        image: "product-2.jpg"
    },

    {
        id: 3,
        name: "Black Patent Ankle-Strap Pointed-Toe Heels",
        price: 999,
        category: "heels",
        image: "product-3.jpg"
    },

    {
        id: 4,
        name: "Burgundy Patent Ankle-Strap Block Heels",
        price: 949,
        category: "heels",
        image: "product-4.jpg"
    },

    {
        id: 5,
        name: "Nude Patent Double-Strap Pointed-Toe Heels",
        price: 799,
        category: "heels",
        image: "product-5.jpg"
    },

    {
        id: 6,
        name: "Black Patent Double-Strap Pointed-Toe Heels",
        price: 849,
        category: "heels",
        image: "product-6.jpg"
    },

    {
        id: 7,
        name: "Pink & Blue Denim Gold-Chain Block-Heel Sandals",
        price: 749,
        category: "sandals",
        image: "product-7.jpg"
    },

    {
        id: 8,
        name: "Black & Blue Denim Gold-Chain Block-Heel Sandals",
        price: 849,
        category: "sandals",
        image: "product-8.jpg"
    },

    {
        id: 9,
        name: "White & Blue Denim Gold-Chain Block-Heel Sandals",
        price: 849,
        category: "sandals",
        image: "product-9.jpg"
    },

    {
        id: 10,
        name: "Black Double-Strap Block-Heel Sandals",
        price: 899,
        category: "sandals",
        image: "product-10.jpg"
    },

    {
        id: 11,
        name: "Nude Double-Strap Block-Heel Sandals",
        price: 899,
        category: "sandals",
        image: "product-11.jpg"
    },

    {
        id: 12,
        name: "Pink Double-Strap Ankle-Strap Sandals",
        price: 999,
        category: "sandals",
        image: "product-12.jpg"
    },

    {
        id: 13,
        name: "Nude Bow Block-Heel Sandals",
        price: 899,
        category: "heels",
        image: "product-13.jpg"
    },

    {
        id: 14,
        name: "White Bow Block-Heel Sandals",
        price: 899,
        category: "heels",
        image: "product-14.jpg"
    },

    {
        id: 15,
        name: "Beige Bow Block-Heel Sandals",
        price: 899,
        category: "heels",
        image: "product-15.jpg"
    },

    {
        id: 16,
        name: "Black Bow Block-Heel Sandals",
        price: 899,
        category: "heels",
        image: "product-16.jpg"
    },

    {
        id: 17,
        name: "Nude Gold-Chain Block-Heel Sandals",
        price: 949,
        category: "heels",
        image: "product-17.jpg"
    },

    {
        id: 18,
        name: "Black Gold-Chain Block-Heel Sandals",
        price: 949,
        category: "heels",
        image: "product-18.jpg"
    },

    {
        id: 19,
        name: "White Gold-Chain Block-Heel Sandals",
        price: 849,
        category: "sandals",
        image: "product-19.jpg"
    },

    {
        id: 20,
        name: "Black Gold-Chain Ankle-Strap Sandals",
        price: 999,
        category: "sandals",
        image: "product-20.jpg"
    },

    {
        id: 21,
        name: "Nude Platform Ankle-Strap Sandals",
        price: 899,
        category: "sandals",
        image: "product-21.jpg"
    },

    {
        id: 22,
        name: "Black Rhinestone Thong Sandals",
        price: 999,
        category: "sandals",
        image: "product-22.jpg"
    }

];


/* =====================================================
   CART
===================================================== */

function getCart() {

    return JSON.parse(
        localStorage.getItem("uniqueSttepsCart")
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "uniqueSttepsCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const count = getCart().reduce(
        (total, item) => total + item.qty,
        0
    );

    const element =
        document.getElementById("cartCount");

    if (element) {
        element.textContent = count;
    }

}


/* =====================================================
   ADD TO BAG
===================================================== */

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;

    const cart = getCart();

    const existing =
        cart.find(item => item.id === id);

    if (existing) {

        existing.qty++;

    } else {

        cart.push({
            id: product.id,
            qty: 1
        });

    }

    saveCart(cart);

    showToast("Added to your bag");

}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    let toast =
        document.querySelector(".toast");

    if (!toast) {

        toast =
            document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function productCard(product) {

    const wishlist =
        getWishlist();

    const liked =
        wishlist.includes(product.id);

    return `

        <article class="product-card">

            <div class="product-image">

                <span class="product-badge">
                    NEW
                </span>

                <button
                    class="wishlist ${liked ? "liked" : ""}"
                    onclick="toggleWishlist(${product.id}, this)"
                    aria-label="Wishlist"
                    type="button"
                >
                    ${liked ? "♥" : "♡"}
                </button>

                <a href="product.html?id=${product.id}">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </a>

                <button
                    class="quick-view"
                    onclick="quickView(${product.id})"
                    type="button"
                >
                    QUICK VIEW
                </button>

            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ₹${product.price}
                </p>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                    type="button"
                >
                    ADD TO BAG
                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   FEATURED PRODUCTS
===================================================== */

function loadFeatured() {

    const container =
        document.getElementById("featuredProducts");

    if (!container) return;

    container.innerHTML =
        products
            .slice(0, 8)
            .map(productCard)
            .join("");

}


/* =====================================================
   SHOP
===================================================== */

let currentProducts =
    [...products];


function loadShop(list = currentProducts) {

    const container =
        document.getElementById("shopProducts");

    if (!container) return;

    container.innerHTML =
        list
            .map(productCard)
            .join("");

}


/* =====================================================
   FILTER
===================================================== */

function filterProducts(category, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    if (button) {
        button.classList.add("active");
    }

    if (category === "all") {

        currentProducts =
            [...products];

    } else {

        currentProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }

    loadShop(currentProducts);

}


/* =====================================================
   SORT
===================================================== */

function sortProducts(type) {

    let sorted =
        [...currentProducts];

    if (type === "low") {

        sorted.sort(
            (a, b) => a.price - b.price
        );

    }

    if (type === "high") {

        sorted.sort(
            (a, b) => b.price - a.price
        );

    }

    if (type === "az") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    loadShop(sorted);

}


/* =====================================================
   QUICK VIEW
===================================================== */

function quickView(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const modal =
        document.createElement("div");

    modal.className =
        "quick-modal";

    modal.innerHTML = `

        <div class="quick-modal-inner">

            <button
                class="quick-close"
                onclick="this.closest('.quick-modal').remove()"
                type="button"
            >
                ×
            </button>

            <div class="quick-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="quick-info">

                <span>
                    ${product.category.toUpperCase()}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <strong>
                    ₹${product.price}
                </strong>

                <p>
                    A statement piece designed
                    to elevate your everyday look.
                </p>

                <button
                    class="checkout-btn"
                    onclick="
                        addToCart(${product.id});
                        this.closest('.quick-modal').remove();
                    "
                    type="button"
                >
                    ADD TO BAG →
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(modal);

}


/* =====================================================
   WISHLIST
===================================================== */

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("uniqueSttepsWishlist")
    ) || [];

}


function saveWishlist(list) {

    localStorage.setItem(
        "uniqueSttepsWishlist",
        JSON.stringify(list)
    );

}


/* =====================================================
   TOGGLE WISHLIST
===================================================== */

function toggleWishlist(id, button) {

    let wishlist =
        getWishlist();

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        if (button) {

            button.classList.remove("liked");

            button.textContent = "♡";

        }

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        if (button) {

            button.classList.add("liked");

            button.textContent = "♥";

        }

        showToast(
            "Added to wishlist"
        );

    }

    saveWishlist(wishlist);

    loadWishlist();

}


/* =====================================================
   LOAD WISHLIST
===================================================== */

function loadWishlist() {

    const container =
        document.getElementById(
            "wishlistProducts"
        );

    if (!container) return;

    const wishlist =
        getWishlist();

    if (!wishlist.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your wishlist is empty.
                </h2>

                <p>
                    Save the styles you love
                    and find them here later.
                </p>

                <a
                    href="shop.html"
                    class="outline-btn"
                >
                    EXPLORE COLLECTION →
                </a>

            </div>

        `;

        return;

    }

    const wishlistProducts =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );

    container.innerHTML =
        wishlistProducts
            .map(productCard)
            .join("");

}


/* =====================================================
   CART PAGE
===================================================== */

function loadCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) return;

    const cart =
        getCart();

    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your bag is empty.
                </h2>

                <p>
                    Discover something you'll love.
                </p>

                <a
                    href="shop.html"
                    class="outline-btn"
                >
                    EXPLORE COLLECTION →
                </a>

            </div>

        `;

        updateSummary();

        return;

    }

    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );

            if (!product) return "";

            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${product.price}
                        </p>

                        <div class="qty-controls">

                            <button
                                onclick="changeQty(${product.id}, -1)"
                                type="button"
                            >
                                −
                            </button>

                            <span>
                                ${item.qty}
                            </span>

                            <button
                                onclick="changeQty(${product.id}, 1)"
                                type="button"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart(${product.id})"
                        type="button"
                    >
                        REMOVE
                    </button>

                </div>

            `;

        }).join("");

    updateSummary();

}


/* =====================================================
   QUANTITY
===================================================== */

function changeQty(id, amount) {

    const cart =
        getCart();

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;

    item.qty += amount;

    if (item.qty <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart(cart);

    loadCart();

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(id) {

    let cart =
        getCart();

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart(cart);

    loadCart();

}


/* =====================================================
   CART SUMMARY
===================================================== */

function updateSummary() {

    const cart =
        getCart();

    let subtotal = 0;

    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id === item.id
            );

        if (product) {

            subtotal +=
                product.price * item.qty;

        }

    });

    const subtotalElement =
        document.getElementById(
            "subtotal"
        );

    const totalElement =
        document.getElementById(
            "total"
        );

    if (subtotalElement) {

        subtotalElement.textContent =
            "₹" + subtotal;

    }

    if (totalElement) {

        totalElement.textContent =
            "₹" + subtotal;

    }

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    const cart =
        getCart();

    if (!cart.length) {

        alert(
            "Your shopping bag is empty."
        );

        return;

    }

    alert(
        "Checkout is ready to connect with your payment gateway."
    );

}


/* =====================================================
   SEARCH
===================================================== */

function openSearch() {

    const search =
        document.getElementById(
            "searchBox"
        );

    if (!search) return;

    search.classList.add("open");

    const input =
        document.getElementById(
            "searchInput"
        );

    if (input) {

        setTimeout(() => {

            input.focus();

        }, 100);

    }

}


function closeSearch() {

    const search =
        document.getElementById(
            "searchBox"
        );

    if (search) {

        search.classList.remove("open");

    }

}


/* =====================================================
   SEARCH RESULTS
===================================================== */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.id !==
            "searchInput"
        ) {
            return;
        }

        const query =
            event.target.value
                .toLowerCase()
                .trim();

        const results =
            document.getElementById(
                "searchResults"
            );

        if (!results) return;

        if (!query) {

            results.innerHTML = "";

            return;

        }

        const matches =
            products.filter(
                product =>
                    product.name
                        .toLowerCase()
                        .includes(query)
            );

        if (!matches.length) {

            results.innerHTML =
                `<p>No products found.</p>`;

            return;

        }

        results.innerHTML =
            matches
                .slice(0, 6)
                .map(product => `

                    <a
                        href="product.html?id=${product.id}"
                        class="search-result"
                    >

                        <span>
                            ${product.name}
                        </span>

                        <strong>
                            ₹${product.price}
                        </strong>

                    </a>

                `)
                .join("");

    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileNav"
        );

    if (!menu) return;

    menu.classList.toggle("open");

}


/* =====================================================
   CONTACT
===================================================== */

function submitContact(event) {

    event.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    event.target.reset();

}


/* =====================================================
   URL CATEGORY
===================================================== */

function checkCategoryURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const category =
        params.get("cat");

    if (!category) return;

    const button =
        document.querySelector(
            `.filter-btn[onclick*="${category}"]`
        );

    filterProducts(
        category,
        button
    );

}


/* =====================================================
   PRODUCT PAGE
===================================================== */

function loadProductPage() {

    const container =
        document.getElementById(
            "productPage"
        );

    if (!container) return;

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(params.get("id")) || 1;

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) {

        container.innerHTML =
            "<h1>Product not found</h1>";

        return;

    }

    selectedQty = 1;

    container.innerHTML = `

        <section class="product-page">

            <div class="product-detail">

                <div class="product-detail-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>

                <div class="product-detail-info">

                    <span class="category">
                        ${product.category.toUpperCase()}
                    </span>

                    <h1>
                        ${product.name}
                    </h1>

                    <div class="price">
                        ₹${product.price}
                    </div>

                    <p class="description">

                        A refined statement piece designed
                        for effortless styling and confident steps.
                        Pair it with your favourite everyday
                        or occasion look.

                    </p>

                    <div class="quantity">

                        <button
                            onclick="productQty(-1)"
                            type="button"
                        >
                            −
                        </button>

                        <span id="productQty">
                            1
                        </span>

                        <button
                            onclick="productQty(1)"
                            type="button"
                        >
                            +
                        </button>

                    </div>

                    <button
                        class="checkout-btn"
                        onclick="addProductWithQty(${product.id})"
                        type="button"
                    >
                        ADD TO BAG →
                    </button>

                </div>

            </div>

        </section>

    `;

}


/* =====================================================
   PRODUCT QUANTITY
===================================================== */

let selectedQty = 1;


function productQty(amount) {

    selectedQty += amount;

    if (selectedQty < 1) {
        selectedQty = 1;
    }

    const element =
        document.getElementById(
            "productQty"
        );

    if (element) {

        element.textContent =
            selectedQty;

    }

}


/* =====================================================
   ADD PRODUCT WITH QUANTITY
===================================================== */

function addProductWithQty(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const cart =
        getCart();

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {

        existing.qty +=
            selectedQty;

    } else {

        cart.push({

            id: id,

            qty: selectedQty

        });

    }

    saveCart(cart);

    showToast(
        "Added to your bag"
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

function setupReveal() {

    const elements =
        document.querySelectorAll(
            ".category-card, .product-card, .editorial, .statement"
        );

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    elements.forEach(element => {

        element.classList.add(
            "reveal"
        );

        observer.observe(
            element
        );

    });

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeSearch();

            const modal =
                document.querySelector(
                    ".quick-modal"
                );

            if (modal) {
                modal.remove();
            }

        }

    }
);


/* =====================================================
   INIT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCartCount();

        loadFeatured();

        loadShop();

        loadCart();

        loadProductPage();

        loadWishlist();

        checkCategoryURL();

        setupReveal();

    }
);