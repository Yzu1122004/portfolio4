const grid = document.getElementById("restaurant-grid");

    restaurants.forEach(restaurant => {
      const card = document.createElement("div");
      card.className = "restaurant-card";

      const img = document.createElement("img");
      img.src = restaurant.backgroundImg;
      img.alt = restaurant.name;

      const name = document.createElement("div");
      name.className = "restaurant-name";
      name.textContent = restaurant.name;

      card.appendChild(img);
      card.appendChild(name);

      // 新增點擊導向功能（使用 goToMenu 的方式）
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        goToMenu(restaurant.name);
      });

      grid.appendChild(card);
    });

    // 定義 goToMenu 函式（與按鈕一樣）
    function goToMenu(restaurantName) {
      window.location.href = `food.html?restaurant=${encodeURIComponent(restaurantName)}`;
    }