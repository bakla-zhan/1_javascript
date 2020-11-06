// const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
// const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

const catalog = {
    items: [],
    basket: null,
    container: null,
    marker: document.querySelector('.featured-items__title'),
    imgFTPurl: 'https://raw.githubusercontent.com/bakla-zhan/static/master/img',
    url: 'https://raw.githubusercontent.com/bakla-zhan/static/master/JSON/catalog1.json',
    init() {
        // this.items = getItems();
        this.container = document.querySelector('.featured-items');
        this.basket = basket;
        this._get(this.url)
        .then(items => {
            this.items = items;
        })
        .then(() => {
            this._render();
            this._handleEvents();
        });
    },

    _get(url) {
        return fetch(url).then(d => d.json()) //на выходе из этого метода вы получите полноценный объект(массив) с данными
    },

    _handleEvents() {
        this.container.addEventListener('click', e => {
            if (e.target.name == 'add') {
                let item = {
                    productId: e.target.dataset.id,
                    productImg: e.target.dataset.img,
                    productName: e.target.dataset.name,
                    productPrice: +e.target.dataset.price,
                };
                this.basket.add(item);
            } else if (e.target.parentNode.name == 'add') {
                let item = {
                    productId: e.target.parentNode.dataset.id,
                    productImg: e.target.parentNode.dataset.img,
                    productName: e.target.parentNode.dataset.name,
                    productPrice: +e.target.parentNode.dataset.price,
                };
                this.basket.add(item);
            }
        })
    },

    _render() {
        let htmlStr = '';
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/8-${index + 1}.jpg`;
            let star = '';
            if (index == 1) {
                star = ` class="half-star"`;
            };
            if (index == 6) {
                star = ` class="empty-star"`;
            };
            htmlStr += `
            <div class="hot-offer">
                <div class="hot-offer__shadow">
                    <img src="${imgURL}" alt="t-shirt">
                    <div class="hot-offer__hover">
                        <div class="hot-offer__square">
                            <button
                                name="add"
                                data-id="${item.productId}"
                                data-name="${item.productName}"
                                data-img="${imgURL}"
                                data-price="${item.productPrice}"
                            ><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <a href="single.html">${item.productName}</a>
                <h3>
                    $${item.productPrice}
                    <div class="hot-offer__stars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div${star}></div>
                    </div>
                </h3>
            </div>
            `;
        });
        this.marker.insertAdjacentHTML('afterend', htmlStr);
    }
}

catalog.init();

// function createNewItem(name, price) {
//     return {
//         productName: name,
//         productPrice: price
//     }
// }

// function getItems() {
//     return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
// }