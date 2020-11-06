let subscribe = document.createElement('div');
subscribe.className = 'subscribe';
subscribe.innerHTML = `
<div class="subscribe">
    <div class="subscribe-shadow">
        <div class="container subscribe_wrapper">
            <div class="subscribe-left">
                <img src="../src/assets/img/subsribe-face.png" alt="face">
                <div>
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                        a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <h4>Bin Burhan</h4>
                    <p>Dhaka, Bd</p>
                    <div class="subscribe-pagination">
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
            <div class="subscribe-border"></div>
            <div class="subscribe-right">
                <h3>subscribe</h3>
                <h4>for our newletter and promotion</h4>
                <form action="">
                    <input type="text" placeholder="Enter your Email">
                    <button>Subscribe</button>
                </form>
            </div>
        </div> <!-- End of .subscribe_wrapper -->
    </div>
</div> <!-- End of .subscribe -->`;

let footerMenu = document.createElement('div');
footerMenu.classList.add('container', 'footer-menu');
footerMenu.innerHTML = `
<div class="footer-menu__left">
    <a class="header__logo" href="index.html">
        <img src="../src/assets/img/logo.png" alt="logo">bran <span>d</span>
    </a>
    <p>
        Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
        multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
        processes and cross-unit partnerships.
    </p>
    <p>
        Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior
        initiatives for wireless technologies. Dynamically optimize.
    </p>

</div>`;
let footerMenuRight = document.createElement('div');
footerMenuRight.className = 'footer-menu__right';
const footerMenuHeaders = ['company', 'information', 'shop category'];
const footerMenuLinks = [['Home', 'Shop', 'About', 'How It Works', 'Contact'],
                        ['Terms and Conditions', 'Privacy Polocy', 'How to Buy', 'How to Sell', 'Promotion'],
                        ['Men', 'Women', 'Child', 'Apparel', 'Browse All']];
for (i = 0; i <3; i++) {
    let footerMenuItem = document.createElement('div');
    footerMenuItem.className = 'footer-menu__right-item';
    let footerMenuHeader = document.createElement('h3');
    footerMenuHeader.innerText = footerMenuHeaders[i];
    let links = [];
    footerMenuLinks[i].forEach((item, index) => {
        let link = document.createElement('a');
        link.href = '#';
        link.append(item);
        links.push(link);
    });
    footerMenuItem.append(footerMenuHeader, ...links);
    footerMenuRight.append(footerMenuItem);
}
footerMenu.append(footerMenuRight);

let footer = document.createElement('div');
footer.className = 'footer';
let containerFooterCenter = document.createElement('div');
containerFooterCenter.classList.add('container', 'footer_center');
let footerDiv1 = document.createElement('div');
footerDiv1.innerHTML = '&copy; 2017 Brand All Rights Reserved.';
let footerDiv2 = document.createElement('div');
const SOCIAL_LINKS = ['facebook-f', 'twitter', 'linkedin-in', 'pinterest-p', 'google-plus-g'];
let htmlStr1 = '';
SOCIAL_LINKS.forEach((item, index) => {
    htmlStr1 += `<a href="#" class="footer__social"><i class="fab fa-${item}"></i></a>`;
});
footerDiv2.innerHTML = htmlStr1;
containerFooterCenter.append(footerDiv1, footerDiv2);
footer.append(containerFooterCenter);

document.body.append(subscribe, footerMenu, footer);