let params = new URL(document.location.toString()).searchParams;
let query = params.get("q");

const menuContainer = document.getElementById("menuContainer");

restaurants.forEach((restaurant) => {
   
    const isIncludeInFoods = restaurant.foods.some(value => value.name.includes(query))

    if ( isIncludeInFoods) {
       
        const section = document.createElement("div");
        section.className = "restaurant-section";
    
        const title = document.createElement("div");
        title.className = "restaurant-title";
        title.textContent = restaurant.name;

        const grid = document.createElement("div");
        grid.className = "menu-grid";

        for (let j = 0; j < restaurant.foods.length; j++) {
            let food = restaurant.foods[j];

            if (!food.name.includes(query)) {
                continue;
            }

            const item = document.createElement("div");
            item.className = "menu-item";
            item.innerHTML = `
                    <img src="${food.foodImg}" alt="${food.name}">
                    <div class="item-info">
                    <span>${food.name}</span>
                    <span>$${food.price}</span>
                    </div>
                `;
            grid.appendChild(item);
        }

        section.appendChild(title);
        section.appendChild(grid);
        menuContainer.appendChild(section);
    }
})


const template = document.querySelector("template.dish-template");
const container = document.getElementById("dishes-container");
const addButton = document.getElementById("add-dish");


addButton.addEventListener("click", () => {
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll("input").forEach(i => i.value = "");
    container.insertBefore(clone, addButton.parentElement);
});

const deleteButton = document.querySelector(".button .delete-dish");

deleteButton.addEventListener("click", () => {
    const allDishes = container.querySelectorAll(".dishes");
    if (allDishes.length > 0) {
        const lastDish = allDishes[allDishes.length - 1];
        lastDish.remove();
    }
});


const editBtn = $('#edit-btn')
const showBtn = $('#show-btn')
const backfirstBtn = $('#backfirst-btn')
const editPage = $('#edit-page')
const showPage = $('#show-page')
const editContainer = $('#edit-container')

const addDishBtn = $('.add-dish')
editBtn.on('click', (e) => {
    renderEditPage()
    editPage.toggle()
    showPage.toggle()
})
showBtn.on('click', (e) => {
    editPage.toggle()
    showPage.toggle()
})

backfirstBtn.on('click', (e) => {
    window.location.href = "firstpage.html";
});



function renderEditPage() {
    restaurants.forEach(restaurant => {
        const isIncludeInResturant = restaurant.name.includes(query)
        const isIncludeInFoods = restaurant.foods.some(value => value.name.includes(query))
    })
}

const uploadBtn = document.getElementById('upload');
uploadBtn.addEventListener('click', () => {
    const allRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];


    const dishes = document.querySelectorAll('#dishes-container .dishes');
    const restaurantNameInput = document.querySelector('#edit-container .res-name input');

    const restaurantName = restaurantNameInput.value || "Tên nhà hàng chưa nhập";

    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve('');
                return;
            }
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
    }

    const promises = Array.from(dishes).map(async dish => {
        const imgInput = dish.querySelector('.dishes-img input[type="file"]');
        const nameInput = dish.querySelector('.dishes-name input');
        const priceInput = dish.querySelector('.dishes-price input');

        const imgFile = imgInput.files[0];
        const imgURL = await readFileAsDataURL(imgFile);

        return {
            name: nameInput.value,
            price: priceInput.value,
            foodImg: imgURL,
        };
    });

    Promise.all(promises).then(foods => {
        menuContainer.innerHTML = '';

        const section = document.createElement('div');
        section.className = 'restaurant-section';

        const title = document.createElement('div');
        title.className = 'restaurant-title';
        title.textContent = restaurantName;

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        foods.forEach(food => {
            const item = document.createElement('div');
            item.className = 'menu-item';
            item.innerHTML = `
        <img src="${food.foodImg}" alt="${food.name}">
        <div class="item-info">
          <span>${food.name}</span>
          <span>$${food.price}</span>
        </div>
      `;
            grid.appendChild(item);
        });

        section.appendChild(title);
        section.appendChild(grid);
        menuContainer.appendChild(section);

        const newRestaurant = {
            name: restaurantName,
            foods,
        };
        allRestaurants.push(newRestaurant);
        localStorage.setItem("restaurants", JSON.stringify(allRestaurants))


        $('#edit-page').hide();
        $('#show-page').show();
    });
});