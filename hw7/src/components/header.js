let headerContainer = document.createElement('div');
headerContainer.className = 'header container';
headerContainer.innerHTML = `
<div class="header__left">
    <a class="header__logo" href="index.html">
        <img src="../src/assets/img/logo.png" alt="logo">bran <span>d</span>
    </a>
    <form class="header__search">
        <a href="#" class="header__browse">Browse <i class="fas fa-caret-down"></i></a>
            <input type="text" placeholder="Search for item">
            <button class="header__search-button"><i class="fas fa-search"></i></button>
    </form>
</div>
<div class="header__right">
    <a href="#" class="header__cart" id="toggle-basket">
        <div id="cart-badge" class="header__cart-badge">0</div>
        <img src="../src/assets/img/kart.png" alt="card" class="header__cart-img">
    </a>
    <div class="drop-cart hidden">
        <div id="basket">
        </div>
        <div class="drop-cart__total">
            <span class="drop-cart__total-name">TOTAL</span>
            <span id="basket-total" class="drop-cart__total-sum">$500.00</span>
        </div>
        <a id="checkout-button" href="checkout.html" class="drop-cart__button">Checkout</a>
        <a id="go-cart" href="cart.html" class="drop-cart__button">Go to cart</a>
    </div>

    <a href="#" class="button">My Account<i class="fas fa-caret-down"></i></a>
    <a href="#" class="icon-user"><i class="fas fa-user-alt"></i></a>
</div>`;

let headerLine = document.createElement('div');
headerLine.className = 'header_line';

let topNav = document.createElement('div');
topNav.className = 'topNav';
const NAVITEMS = ['Home', 'Man', 'Women', 'Kids', 'Accessories', 'Featured', 'Hot Deals'];
let htmlStr = '';
NAVITEMS.forEach((item, index) => {
    htmlStr += `<a href="product.html">${item}</a>`;
});
topNav.innerHTML = htmlStr;

document.body.prepend(headerContainer, headerLine, topNav);