// 讀取URL參數，決定餐廳
const urlParams = new URLSearchParams(window.location.search);
const selectedName = urlParams.get('restaurant') || "義式餐廳";
const selectedRestaurant = restaurants.find(r => r.name === selectedName) || restaurants[0];

// 設定背景與餐廳資訊
document.body.style.backgroundImage = `url('${selectedRestaurant.backgroundImg}')`;
document.getElementById("restaurant-name").textContent = selectedRestaurant.name;
document.getElementById("restaurant-description").textContent = selectedRestaurant.description;

// ----- 菜單區 -----
const menuContainer = document.getElementById("menu-container");
const highlightedFood = localStorage.getItem("highlightedFood"); 

// 取得返回 choose.html 的按鈕
const backToChooseBtn = document.getElementById("back-to-choose-btn");
backToChooseBtn.addEventListener("click", () => {
    window.location.href = "choose.html";
});

selectedRestaurant.foods.forEach(food => {
    const item = document.createElement("div");
    item.className = "menu-item";

    // ✅ 如果這道菜是被抽中的，加上高亮 class
    if (food.name === highlightedFood) {
        item.classList.add("highlighted-food");
    }

    item.innerHTML = `
        <img src="${food.foodImg}" alt="${food.name}">
        <div class="item-title">${food.name}</div>
        <div class="item-price">$${food.price} 元</div>
        <div class="item-description">${food.description || ""}</div>
    `;

    // 點擊加入購物車
    item.addEventListener("click", () => {
        let currentCart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
        const existingItem = currentCart.find(i => i.name === food.name);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            currentCart.push({
                name: food.name,
                price: food.price,
                foodImg: food.foodImg,
                description: food.description || "",
                quantity: 1
            });
        }
        localStorage.setItem("shoppingCart", JSON.stringify(currentCart));
        alert(`已加入購物車：${food.name}`);
    });

    menuContainer.appendChild(item);
});

localStorage.removeItem("highlightedFood"); // ✅ 顯示後清除記錄，避免下次進來還有高亮

// ----- 購物車區 -----
const cartSection = document.querySelector(".cart-section");
const menuSection = document.querySelector(".menu-section");
const cartMenuContainer = document.getElementById("cart-menu-container");
const totalPriceElement = document.getElementById("total-price");
const showCartBtn = document.getElementById("show-cart-btn");
const backToMenuBtn = document.getElementById("back-to-menu");
const buyButton = document.getElementById("buy-button");

// 讀取購物車資料
let cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
cart = cart.map(item => ({ ...item, quantity: item.quantity || 1 }));
let quantities = cart.map(item => item.quantity);

function renderCart() {
    localStorage.removeItem("highlightedFood");
    cartMenuContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-menu-item";
        div.innerHTML = `
          <img src="${item.foodImg}" alt="${item.name}" />
          <div class="item-title">${item.name}</div>
          <div class="item-price">$${item.price} 元</div>
          <div class="quantity-controls">
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span class="quantity" id="qty-${index}">${quantities[index]}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        `;
        cartMenuContainer.appendChild(div);
    });
    calculateTotal();
}

// 更新數量函式 (window綁定方便button內onclick使用)
window.updateQuantity = function (index, change) {
    const newQty = quantities[index] + change;
    if (newQty >= 0) {
        quantities[index] = newQty;
        cart[index].quantity = newQty;
        document.getElementById(`qty-${index}`).innerText = newQty;
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        calculateTotal();
    }
};

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < quantities.length; i++) {
        total += quantities[i] * cart[i].price;
    }
    totalPriceElement.innerText = `價格：$${total} 元`;
}

// 顯示購物車，隱藏菜單
showCartBtn.addEventListener("click", () => {
    cart = JSON.parse(localStorage.getItem("shoppingCart") || "[]");
    if (cart.length === 0) {
        alert("購物車是空的！");
        return;
    }
    quantities = cart.map(item => item.quantity || 1);
    menuSection.style.display = "none";
    cartSection.style.display = "block";
    renderCart();
});

// 返回菜單（同時清除 quantity 為 0 的品項）
backToMenuBtn.addEventListener("click", () => {
    // 1. 先把 cart 中 quantity 為 0 的項目移除
    cart = cart.filter(item => item.quantity > 0);

    // 2. 寫回 localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    // 3. 隱藏購物車區、顯示菜單區
    cartSection.style.display = "none";
    menuSection.style.display = "block";
});


// 購買按鈕（跳轉至 choose.html）
buyButton.addEventListener("click", () => {
    alert("感謝您的購買！");
    localStorage.removeItem("shoppingCart");
    quantities = [];
    cart = [];
    window.location.href = "choose.html";
});