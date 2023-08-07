function navbar() {
    return `
    <div class="top-bar">
            <div class="left-bar">
                <div class="bar-phone">
                    <i class='bx bxs-phone' style='color:#ffffff'></i>
                    +61-401-224-357
                </div>
                <div class="bar-offer">Free shipping on orders $49+/Express $99+</div>
            </div>
            <div class="right-bar">
                <div class="bar-icons"><i class='bx bxl-linkedin' style='color:#d6a97b'></i></div>
                <div class="bar-icons"><i class='bx bxl-twitter' style='color:#d6a97b'></i></div>
                <div class="bar-icons"><i class='bx bxl-facebook' style='color:#d6a97b'></i></div>
            </div>
        </div>
    <nav>
    <div id="navbar">
        <div class="logo">
            <img src="./src/logo.png" alt="">
        </div>
        <div class="search-box">
            <div class="search-child">
                <input type="text" placeholder="Search" id="search">
                <button id="search-btn"><box-icon name='search' color='#ffffff'></box-icon></button>
            </div>
        </div>
        <div class="utility">
            <div class="cart" id="cart">
                <div>
                    <i class='bx bxs-shopping-bag'></i>
                    <div class="count">12</div>
                </div>
                <div>$254.46</div>
            </div>
            <div class="auth">Login/Register</div>
        </div>
    </div>
</nav>

<div id="sub-nav">
    <div class="menu">
        <h3>By Category</h3>
        <i class='bx bx-chevron-down'></i>
    </div>
    <div class="menu">
        <h3>All Products</h3>
    </div>
    <div class="menu">
        <h3>Our Goal</h3>
    </div>
    <div class="menu">
        <h3>FAQs</h3>
    </div>
    <div class="menu">
        <h3>About Us</h3>
    </div>
</div>
<div class="cart-pannel">
        <div class="cart-item">
            <div><img src="./src/Product.png" alt=""></div>
            <div>
                <div>Product Name</div>
                <div>
                    <div>-</div>
                    <div>02</div>
                    <div>+</div>
                </div>
            </div>
            <div>
                <h5>$59.45</h5>
            </div>
        </div>
        <div class="cart-item">
            <div><img src="./src/Product.png" alt=""></div>
            <div>
                <div>Product Name</div>
                <div>
                    <div>-</div>
                    <div>02</div>
                    <div>+</div>
                </div>
            </div>
            <div>
                <h5>$59.45</h5>
            </div>
        </div>
        <div class="cart-item">
            <div><img src="./src/Product.png" alt=""></div>
            <div>
                <div>Product Name</div>
                <div>
                    <div>-</div>
                    <div>02</div>
                    <div>+</div>
                </div>
            </div>
            <div>
                <h5>$59.45</h5>
            </div>
        </div>

        <button>CONTINUE</button>
    </div>`
}

export { navbar }