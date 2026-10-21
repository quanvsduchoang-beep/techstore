/* =====================================================
   TECH STORE - JAVASCRIPT
===================================================== */


/* ================= DANH SÁCH SẢN PHẨM ================= */

const products = [

    /* ===== MÁY TÍNH 10 ===== */

    {
        id: 1,
        name: "Laptop ASUS VivoBook 15",
        category: "computer",
        categoryName: "Máy tính",
        price: 15990000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        description: "Laptop ASUS VivoBook 15 thiết kế hiện đại, phù hợp học tập, văn phòng và giải trí."
    },

    {
        id: 2,
        name: "Laptop Dell Inspiron 15",
        category: "computer",
        categoryName: "Máy tính",
        price: 18990000,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
        description: "Dell Inspiron 15 mạnh mẽ, màn hình lớn và hiệu năng ổn định."
    },

    {
        id: 3,
        name: "MacBook Air M3",
        category: "computer",
        categoryName: "Máy tính",
        price: 25990000,
        image: "shopping (1).webp",
        description: "MacBook Air M3 mỏng nhẹ, hiệu năng cao và thời lượng pin tốt."
    },

    {
        id: 4,
        name: "Laptop HP Pavilion",
        category: "computer",
        categoryName: "Máy tính",
        price: 17990000,
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=800&q=80",
        description: "HP Pavilion phù hợp cho sinh viên và người dùng văn phòng."
    },

    {
        id: 5,
        name: "Lenovo ThinkPad E14",
        category: "computer",
        categoryName: "Máy tính",
        price: 19990000,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
        description: "ThinkPad E14 bền bỉ, bàn phím tốt và hiệu suất cao."
    },

    {
        id: 6,
        name: "Acer Nitro 5 Gaming",
        category: "computer",
        categoryName: "Máy tính",
        price: 22990000,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
        description: "Laptop gaming Acer Nitro 5 dành cho game thủ."
    },

    {
        id: 7,
        name: "MSI Gaming Laptop",
        category: "computer",
        categoryName: "Máy tính",
        price: 28990000,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
        description: "MSI Gaming với cấu hình mạnh dành cho chơi game và đồ họa."
    },

    {
        id: 8,
        name: "ASUS ROG Strix",
        category: "computer",
        categoryName: "Máy tính",
        price: 32990000,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
        description: "ASUS ROG Strix cấu hình cao dành cho gaming chuyên nghiệp."
    },

    {
        id: 9,
        name: "MacBook Pro M3 Pro",
        category: "computer",
        categoryName: "Máy tính",
        price: 45990000,
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
        description: "MacBook Pro M3 Pro dành cho lập trình viên và người làm sáng tạo."
    },

    {
        id: 10,
        name: "Dell XPS 13",
        category: "computer",
        categoryName: "Máy tính",
        price: 31990000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        description: "Dell XPS 13 cao cấp, mỏng nhẹ và sang trọng."
    },


    /* ===== ĐIỆN THOẠI 10 ===== */

    {
        id: 11,
        name: "iPhone 15",
        category: "phone",
        categoryName: "Điện thoại",
        price: 19990000,
        image: "shopping.webp",
        description: "iPhone 15 thiết kế hiện đại, camera chất lượng cao."
    },

    {
        id: 12,
        name: "iPhone 15 Pro",
        category: "phone",
        categoryName: "Điện thoại",
        price: 26990000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
        description: "iPhone 15 Pro hiệu năng mạnh với chip cao cấp."
    },

    {
        id: 13,
        name: "iPhone 16",
        category: "phone",
        categoryName: "Điện thoại",
        price: 22990000,
        image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&w=800&q=80",
        description: "iPhone 16 thế hệ mới với nhiều tính năng thông minh."
    },

    {
        id: 14,
        name: "Samsung Galaxy S24",
        category: "phone",
        categoryName: "Điện thoại",
        price: 21990000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
        description: "Galaxy S24 màn hình đẹp, camera tốt và hiệu năng cao."
    },

    {
        id: 15,
        name: "Samsung Galaxy S24 Ultra",
        category: "phone",
        categoryName: "Điện thoại",
        price: 31990000,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80",
        description: "Galaxy S24 Ultra cao cấp với camera zoom mạnh."
    },

    {
        id: 16,
        name: "Google Pixel 9",
        category: "phone",
        categoryName: "Điện thoại",
        price: 18990000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        description: "Google Pixel nổi bật với camera và AI."
    },

    {
        id: 17,
        name: "Xiaomi 14",
        category: "phone",
        categoryName: "Điện thoại",
        price: 16990000,
        image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
        description: "Xiaomi 14 cấu hình mạnh với mức giá hợp lý."
    },

    {
        id: 18,
        name: "OPPO Find X7",
        category: "phone",
        categoryName: "Điện thoại",
        price: 18990000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        description: "OPPO Find X7 thiết kế đẹp và camera chuyên nghiệp."
    },

    {
        id: 19,
        name: "OnePlus 12",
        category: "phone",
        categoryName: "Điện thoại",
        price: 17990000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        description: "OnePlus 12 hiệu năng mạnh và sạc nhanh."
    },

    {
        id: 20,
        name: "Vivo X100 Pro",
        category: "phone",
        categoryName: "Điện thoại",
        price: 19990000,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
        description: "Vivo X100 Pro nổi bật với hệ thống camera."
    },


    /* ===== TAI NGHE 10 ===== */

    {
        id: 21,
        name: "AirPods Pro 2",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 5990000,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
        description: "AirPods Pro 2 chống ồn chủ động và âm thanh chất lượng cao."
    },

    {
        id: 22,
        name: "AirPods 3",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 3990000,
        image: "images.jpg",
        description: "AirPods 3 nhỏ gọn và tiện lợi."
    },

    {
        id: 23,
        name: "Sony WH-1000XM5",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 7990000,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
        description: "Tai nghe Sony chống ồn cao cấp."
    },

    {
        id: 24,
        name: "Bose QuietComfort",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 6990000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        description: "Bose QuietComfort mang lại trải nghiệm âm thanh thoải mái."
    },

    {
        id: 25,
        name: "JBL Tune 770NC",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 2490000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        description: "JBL Tune 770NC có chống ồn và pin lâu."
    },

    {
        id: 26,
        name: "Sony WF-1000XM5",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 5990000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
        description: "Tai nghe không dây cao cấp của Sony."
    },

    {
        id: 27,
        name: "Samsung Galaxy Buds3",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 3990000,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
        description: "Galaxy Buds3 thiết kế nhỏ gọn và hiện đại."
    },

    {
        id: 28,
        name: "Marshall Major V",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 4490000,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
        description: "Marshall Major V phong cách cổ điển."
    },

    {
        id: 29,
        name: "Razer Barracuda X",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 2890000,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
        description: "Tai nghe gaming Razer Barracuda X."
    },

    {
        id: 30,
        name: "HyperX Cloud II",
        category: "headphone",
        categoryName: "Tai nghe",
        price: 1990000,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
        description: "Tai nghe gaming HyperX Cloud II."
    },


    /* ===== BÀN PHÍM 10 ===== */

    {
        id: 31,
        name: "Keychron K2",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 2490000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "Bàn phím cơ Keychron K2."
    },

    {
        id: 32,
        name: "Logitech MX Keys",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 2190000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        description: "Bàn phím Logitech MX Keys dành cho văn phòng."
    },

    {
        id: 33,
        name: "Razer BlackWidow V3",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 3290000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "Bàn phím gaming Razer BlackWidow."
    },

    {
        id: 34,
        name: "Corsair K70 RGB",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 3990000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        description: "Corsair K70 RGB dành cho game thủ."
    },

    {
        id: 35,
        name: "Akko 5075B Plus",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 1890000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "Bàn phím cơ Akko."
    },

    {
        id: 36,
        name: "Logitech G Pro X",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 3490000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        description: "Logitech G Pro X dành cho gaming."
    },

    {
        id: 37,
        name: "Ducky One 3",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 2990000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "Ducky One 3 bàn phím cơ cao cấp."
    },

    {
        id: 38,
        name: "SteelSeries Apex Pro",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 4990000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        description: "SteelSeries Apex Pro cho game thủ."
    },

    {
        id: 39,
        name: "HyperX Alloy Origins",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 2490000,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
        description: "HyperX Alloy Origins bàn phím gaming."
    },

    {
        id: 40,
        name: "NuPhy Air75",
        category: "keyboard",
        categoryName: "Bàn phím",
        price: 2890000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
        description: "NuPhy Air75 thiết kế mỏng và hiện đại."
    },


    /* ===== TIVI 10 ===== */

    {
        id: 41,
        name: "Samsung Smart TV 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 15990000,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
        description: "Samsung Smart TV 55 inch hình ảnh sắc nét."
    },

    {
        id: 42,
        name: "LG OLED 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 24990000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        description: "LG OLED 55 inch màu sắc sống động."
    },

    {
        id: 43,
        name: "Sony Bravia 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 21990000,
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
        description: "Sony Bravia hình ảnh chất lượng cao."
    },

    {
        id: 44,
        name: "TCL QLED 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 11990000,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
        description: "TCL QLED 55 inch giá tốt."
    },

    {
        id: 45,
        name: "Xiaomi TV 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 9990000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        description: "Xiaomi Smart TV 55 inch."
    },

    {
        id: 46,
        name: "Samsung Neo QLED 65",
        category: "tv",
        categoryName: "Tivi",
        price: 29990000,
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
        description: "Samsung Neo QLED 65 inch cao cấp."
    },

    {
        id: 47,
        name: "LG OLED C4",
        category: "tv",
        categoryName: "Tivi",
        price: 32990000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        description: "LG OLED C4 dành cho giải trí cao cấp."
    },

    {
        id: 48,
        name: "Sony Bravia XR",
        category: "tv",
        categoryName: "Tivi",
        price: 34990000,
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
        description: "Sony Bravia XR hình ảnh cao cấp."
    },

    {
        id: 49,
        name: "TCL Mini LED 65",
        category: "tv",
        categoryName: "Tivi",
        price: 18990000,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
        description: "TCL Mini LED 65 inch."
    },

    {
        id: 50,
        name: "Hisense 55 inch",
        category: "tv",
        categoryName: "Tivi",
        price: 10990000,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
        description: "Hisense Smart TV 55 inch."
    }

];


/* =====================================================
   BIẾN
===================================================== */

let cart = JSON.parse(localStorage.getItem("techCart")) || [];

let currentProduct = null;


/* =====================================================
   FORMAT TIỀN
===================================================== */

function formatMoney(number) {

    return number.toLocaleString("vi-VN") + "₫";

}


/* =====================================================
   HIỂN THỊ SẢN PHẨM
===================================================== */

function createProductCard(product) {

    return `

        <div class="product-card"
             onclick="showProduct(${product.id})">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <div class="category">
                    ${product.categoryName}
                </div>

                <div class="price">
                    ${formatMoney(product.price)}
                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   TRANG CHỦ
===================================================== */

function showHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

    const home = document.getElementById("homeProducts");

    /*
       Lấy 20 sản phẩm lẫn lộn
    */

    const shuffled = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    home.innerHTML = shuffled
        .map(createProductCard)
        .join("");

}


/* =====================================================
   HIỂN THỊ TẤT CẢ
===================================================== */

function showAllProducts() {

    hideAllPages();

    document
        .getElementById("categoryPage")
        .classList.remove("hidden");

    document.getElementById("categoryTitle").innerText =
        "🔥 TẤT CẢ SẢN PHẨM";

    document.getElementById("categoryProducts").innerHTML =
        products
            .map(createProductCard)
            .join("");

}


/* =====================================================
   DANH MỤC
===================================================== */

function showCategory(category) {

    hideAllPages();

    document
        .getElementById("categoryPage")
        .classList.remove("hidden");

    const names = {

        computer: "💻 MÁY TÍNH",

        phone: "📱 ĐIỆN THOẠI",

        headphone: "🎧 TAI NGHE",

        keyboard: "⌨️ BÀN PHÍM",

        tv: "📺 TIVI"

    };

    document.getElementById("categoryTitle")
        .innerText = names[category];

    const result =
        products.filter(
            p => p.category === category
        );

    document.getElementById("categoryProducts")
        .innerHTML =
        result.map(createProductCard).join("");

}


/* =====================================================
   TRANG SẢN PHẨM
===================================================== */

function showProduct(id) {

    currentProduct =
        products.find(p => p.id === id);

    hideAllPages();

    document
        .getElementById("detailPage")
        .classList.remove("hidden");

    document.getElementById("productDetail").innerHTML = `

        <div class="detail">

            <div>

                <img
                    src="${currentProduct.image}"
                    alt="${currentProduct.name}"
                >

            </div>

            <div>

                <h1>
                    ${currentProduct.name}
                </h1>

                <p>
                    Danh mục:
                    <b>${currentProduct.categoryName}</b>
                </p>

                <div class="price">
                    ${formatMoney(currentProduct.price)}
                </div>

                <p class="detail-description">
                    ${currentProduct.description}
                </p>

                <div class="detail-buttons">

                    <button
                        class="add-btn"
                        onclick="addToCart(${currentProduct.id})"
                    >
                        🛒 THÊM VÀO GIỎ
                    </button>

                    <button
                        class="buy-btn"
                        onclick="buyNow(${currentProduct.id})"
                    >
                        ⚡ MUA NGAY
                    </button>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   ẨN CÁC TRANG
===================================================== */

function hideAllPages() {

    document
        .getElementById("homePage")
        .classList.add("hidden");

    document
        .getElementById("categoryPage")
        .classList.add("hidden");

    document
        .getElementById("detailPage")
        .classList.add("hidden");

}


/* =====================================================
   QUAY LẠI
===================================================== */

function goBack() {

    showHome();

}


/* =====================================================
   ĐĂNG KÝ
===================================================== */

async function register() {

    const name =
        document.getElementById("registerName")
            .value.trim();

    const username =
        document.getElementById("registerUsername")
            .value.trim();

    const password =
        document.getElementById("registerPassword")
            .value;

    const password2 =
        document.getElementById("registerPassword2")
            .value;

    if (!name || !username || !password || !password2) {

        alert("Vui lòng nhập đầy đủ thông tin!");

        return;
    }

    if (password !== password2) {

        alert("Mật khẩu nhập lại không giống nhau!");

        return;
    }

    const response = await fetch(
        "api/register.php",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                username: username,
                password: password
            })
        }
    );

    const result = await response.json();

    alert(result.message);

    if (result.success) {

        closeRegister();

        openLogin();

    }

}


/* =====================================================
   ĐĂNG XUẤT
===================================================== */

function logout() {

    if (
        confirm(
            "Bạn có muốn đăng xuất không?"
        )
    ) {

        localStorage.removeItem(
            "techCurrentUser"
        );

        location.reload();

    }

}


/* =====================================================
   MỞ / ĐÓNG LOGIN
===================================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("hidden");

}

function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.add("hidden");

}

function switchRegister() {

    closeLogin();

    openRegister();

}
/* =====================================================
   ĐĂNG NHẬP
===================================================== */

function login() {

    const username =
        document.getElementById("loginUsername")
            .value.trim();

    const password =
        document.getElementById("loginPassword")
            .value;

    if (!username || !password) {

        alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");

        return;
    }

    fetch("api/login.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username: username,
            password: password
        })

    })

    .then(response => response.json())

    .then(result => {

        if (!result.success) {

            alert(result.message);

            return;
        }

        localStorage.setItem(
            "techCurrentUser",
            JSON.stringify(result.user)
        );

        alert(
            "Đăng nhập thành công! Xin chào " +
            result.user.FullName
        );

        closeLogin();

        updateLoginButton();

    })

    .catch(error => {

        console.error(error);

        alert("Không thể kết nối đến máy chủ!");

    });

}


/* =====================================================
   MỞ / ĐÓNG REGISTER
===================================================== */

function openRegister() {

    document
        .getElementById("registerModal")
        .classList.remove("hidden");

}

function closeRegister() {

    document
        .getElementById("registerModal")
        .classList.add("hidden");

}

function switchLogin() {

    closeRegister();

    openLogin();

}


/* =====================================================
   THÊM GIỎ HÀNG
===================================================== */

function addToCart(id) {

    const product =
        products.find(
            p => p.id === id
        );


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    alert(
        "✅ Đã thêm " +
        product.name +
        " vào giỏ hàng!"
    );

}


/* =====================================================
   LƯU GIỎ
===================================================== */

function saveCart() {

    localStorage.setItem(
        "techCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =====================================================
   SỐ LƯỢNG GIỎ
===================================================== */

function updateCartCount() {

    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document.getElementById("cartCount")
        .innerText = count;

}


/* =====================================================
   MỞ GIỎ
===================================================== */

function openCart() {

    renderCart();

    document
        .getElementById("cartOverlay")
        .classList.remove("hidden");

}


/* =====================================================
   ĐÓNG GIỎ
===================================================== */

function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("hidden");

}


/* =====================================================
   CLICK RA NGOÀI GIỎ → ĐÓNG
===================================================== */

document
    .getElementById("cartOverlay")
    .addEventListener(
        "click",
        function(e) {

            if (e.target === this) {

                closeCart();

            }

        }
    );


/* =====================================================
   HIỂN THỊ GIỎ
===================================================== */

function renderCart() {

    const container =
        document.getElementById("cartItems");

    if (cart.length === 0) {

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:50px 10px;
            ">

                <h2>🛒</h2>

                <p>Giỏ hàng đang trống</p>

            </div>

        `;

        document.getElementById("cartTotal")
            .innerText = "0₫";

        return;

    }


    let total = 0;


    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            const itemTotal =
                product.price *
                item.quantity;


            total += itemTotal;


            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <div class="cart-price">
                            ${formatMoney(itemTotal)}
                        </div>

                        <div class="quantity">

                            <button
                                onclick="changeQuantity(
                                    ${product.id},
                                    -1
                                )"
                            >
                                -
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(
                                    ${product.id},
                                    1
                                )"
                            >
                                +
                            </button>

                            <button
                                class="remove"
                                onclick="removeCart(
                                    ${product.id}
                                )"
                            >
                                Xóa
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    document.getElementById("cartTotal")
        .innerText = formatMoney(total);

}


/* =====================================================
   TĂNG / GIẢM SỐ LƯỢNG
===================================================== */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            item => item.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    saveCart();

    renderCart();

}


/* =====================================================
   XÓA SẢN PHẨM
===================================================== */

function removeCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


/* =====================================================
   MUA NGAY
===================================================== */

function buyNow(id) {

    /*
       Bắt buộc đăng nhập
    */

    if (!isLoggedIn()) {

        alert(
            "🔐 Bạn phải đăng ký và đăng nhập trước khi mua hàng!"
        );

        openLogin();

        return;

    }


    cart = [

        {
            id: id,

            quantity: 1

        }

    ];


    saveCart();

    checkout();

}


/* =====================================================
   THANH TOÁN
===================================================== */

function checkout() {

    /*
       Không đăng nhập thì không được thanh toán
    */

    if (!isLoggedIn()) {

        alert(
            "🔐 Bạn phải đăng ký và đăng nhập mới được mua hàng!"
        );

        openLogin();

        return;

    }


    if (cart.length === 0) {

        alert(
            "🛒 Giỏ hàng đang trống!"
        );

        return;

    }


    let total = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        total +=
            product.price *
            item.quantity;

    });


    document.getElementById("checkoutTotal")
        .innerText = formatMoney(total);


    document
        .getElementById("checkoutModal")
        .classList.remove("hidden");

}


/* =====================================================
   ĐÓNG CHECKOUT
===================================================== */

function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.add("hidden");

}


/* =====================================================
   THANH TOÁN TẠI CỬA HÀNG
===================================================== */

function payAtStore() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "techCurrentUser"
            )
        );


    alert(
        "✅ Đặt hàng thành công!\n\n" +

        "Khách hàng: " +
        user.name +
        "\n\n" +

        "Vui lòng đến cửa hàng để thanh toán."
    );


    cart = [];

    saveCart();

    closeCheckout();

    closeCart();

}


/* =====================================================
   THANH TOÁN QR
===================================================== */

function payQR() {

    let total = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        total +=
            product.price *
            item.quantity;

    });


    closeCheckout();


    document.getElementById("qrAmount")
        .innerText =
        formatMoney(total);


    /*
       Xóa QR cũ
    */

    document.getElementById("qrcode")
        .innerHTML = "";


    /*
       Nội dung QR
       Trong website demo:
       QR chứa thông tin đơn hàng
    */

    const qrData =
        "TECH STORE | THANH TOAN | " +
        total +
        " VND";


    new QRCode(
        document.getElementById("qrcode"),
        {
            text: qrData,
            width: 220,
            height: 220
        }
    );


    document
        .getElementById("qrModal")
        .classList.remove("hidden");

}


/* =====================================================
   ĐÓNG QR
===================================================== */

function closeQR() {

    document
        .getElementById("qrModal")
        .classList.add("hidden");

}


/* =====================================================
   HOÀN TẤT THANH TOÁN
===================================================== */

function finishPayment() {

    alert(
        "🎉 Thanh toán thành công!\n\n" +
        "Cảm ơn bạn đã mua hàng tại TECH STORE."
    );


    cart = [];

    saveCart();

    closeQR();

    closeCart();

}


/* =====================================================
   CLICK RA NGOÀI MODAL
===================================================== */

document
    .getElementById("loginModal")
    .addEventListener(
        "click",
        function(e) {

            if (e.target === this) {

                closeLogin();

            }

        }
    );


document
    .getElementById("registerModal")
    .addEventListener(
        "click",
        function(e) {

            if (e.target === this) {

                closeRegister();

            }

        }
    );


document
    .getElementById("checkoutModal")
    .addEventListener(
        "click",
        function(e) {

            if (e.target === this) {

                closeCheckout();

            }

        }
    );


document
    .getElementById("qrModal")
    .addEventListener(
        "click",
        function(e) {

            if (e.target === this) {

                closeQR();

            }

        }
    );


/* =====================================================
   KHỞI ĐỘNG WEBSITE
===================================================== */

updateCartCount();

updateLoginButton();

showHome();