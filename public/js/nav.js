const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt ="Ranaly Store">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="поиск одежды">
                    <button class="search-btn">Поиск</button>
                </div>
                <a href="#"><img src="img/user.png" alt="User image"></a>
                <a href="#"><img src="img/cart.png" alt="Cart image"></a>
            </div>   
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Главная</a></li>
            <li class="link-item"><a href="#" class="link">Детская одежда</a></li>
            <li class="link-item"><a href="#" class="link">Аксессуары</a></li>
        </ul>
    `;
}

createNav();
