

let firstCard = null;
let secondCard = null;
let matchedCount = 0;
let current;
let restaurantis = false;

$(document).ready(function () {
    loadCards({ id: "resturantsButton" });
});

$("#resturantsButton, #foodsButton").click(function () {
    $("#resturantsButton, #foodsButton").removeClass("currentButton");
    $(this).addClass("currentButton");
    current = this.id;
    loadCards(this);

});

$("#againButton").click(function () {
    loadCards({ id: current });
});

function loadCards(btn) {
    $("#cardboard").empty();
    matchedCount = 0;
    $(".content").hide();
    let isRestaurant = btn.id === "resturantsButton";
    let imgs = [];

    if (isRestaurant) {
        let candidates = restaurants.map(r => r.backgroundImg);
        imgs = getRandomPairs(candidates, 9);
        restaurantis = true;
    } else {
        // 1. 隨機選出 9 間不重複的餐廳
        let shuffledRestaurants = shuffleArray([...restaurants]);
        let selectedRestaurants = shuffledRestaurants.slice(0, 9);
        restaurantis = false;
        // 2. 從每間餐廳中隨機選 1 張 foodImg
        let foodImgs = selectedRestaurants.map(r => {
            if (!r.foods || r.foods.length === 0) {
                console.warn('餐廳無餐點圖：', r);
                return null; // 或給一張預設圖
            }
            let randomFood = r.foods[Math.floor(Math.random() * r.foods.length)];
            return randomFood.foodImg;
        }).filter(img => img); // 避免 null 或 undefined

        // 3. 產生配對圖組
        imgs = getRandomPairs(foodImgs);

    }



    imgs = shuffleArray(imgs);

    for (let i = 0; i < 18; i++) {
        let img = imgs[i];
        let name = "";
        let price = null;

        if (isRestaurant) {
            let rest = restaurants.find(r => r.backgroundImg === img);
            name = rest ? rest.name : "餐廳";
        } else {
            for (let r of restaurants) {
                let f = r.foods.find(f => f.foodImg === img);
                if (f) {
                    name = f.name;
                    price = f.price;
                    break;
                }
            }
        }

        let card = $(`
        <div class="cards">
            <div class="flip-card-container"
                 data-img="${img}"
                 data-name="${name}"
                 data-price="${price !== null ? price : ''}">
                <div class="front"></div>
                <div class="back">
                    <img src="${img}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
    `);
        $("#cardboard").append(card);
    }


    $(".cards").hide().each(function (i) {
        $(this).delay(i * 80).fadeIn(200);
    });

    initCardClick();
}

function getRandomPairs(array, count) {
    let shuffled = shuffleArray([...array]);
    let selected = shuffled.slice(0, count);
    return [...selected, ...selected];
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function initCardClick() {
    $(".flip-card-container").off("click").on("click", function () {
        if ($(this).hasClass("matched") || $(this).hasClass("flipped") || secondCard) return;

        $(this).addClass("flipped");

        if (!firstCard) {
            firstCard = $(this);
        } else {
            secondCard = $(this);
            let img1 = firstCard.data("img");
            let img2 = secondCard.data("img");

            if (img1 === img2) {
                setTimeout(() => {
                    firstCard.addClass("matched").fadeOut(500);
                    secondCard.addClass("matched").fadeOut(500);
                    matchedCount++;
                    if (matchedCount === 9) {
                        showContent(img1);
                    }
                    firstCard = null;
                    secondCard = null;
                }, 800);
            } else {
                setTimeout(() => {
                    firstCard.removeClass("flipped");
                    secondCard.removeClass("flipped");
                    firstCard = null;
                    secondCard = null;
                }, 1000);
            }
        }
    });
}
function showContent(img) {
    let matchedCard = $(`.flip-card-container[data-img="${img}"]`).first();
    let name = matchedCard.data("name");
    let price = matchedCard.data("price");

    $(".resturantImgs img").attr("src", img);

    let text = name;
    if (price !== "" && price !== null && price !== undefined) {
        text += `（價格：$${price}）`;
    }

    $(".resturantImgs p").text(text);
    $(".content").fadeIn();
    $("#gotoshop").click(function () {
        if (restaurantis) {

            const url = `food.html?restaurant=${encodeURIComponent(name)}`;
            window.location.href = url;
        } else {
            const targetFoodName = name;
            const foundRestaurant = restaurants.find(restaurant =>
                restaurant.foods.some(food => food.name === targetFoodName)
            );
            localStorage.setItem("highlightedFood", targetFoodName);

            const url = `food.html?restaurant=${encodeURIComponent(foundRestaurant.name)}`;
            window.location.href = url;
        }
    });

}
