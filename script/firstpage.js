console.log(restaurants)
let result = document.getElementById("result");
let text = document.getElementById("text");

text.addEventListener("keyup", () => {
  const inputValue = text.value.trim();
  if (inputValue !== "") {
    let name = "";
    name = "<p>" + inputValue + "</p>";
    for (let i = 0; i < restaurants.length; i++) {

      for (let j = 0; j < restaurants[i].foods.length; j++) {
        if (restaurants[i].foods[j].name.includes(inputValue)) {
          name += "<p>" + restaurants[i].foods[j].name + "</p>";
        }

      }
    }

    if (name !== "") {
      result.innerHTML = name;
      result.style.display = "block";
    } else {
      result.innerHTML = "not found";
      result.style.display = "block";
    }
  } else {
    result.innerHTML = "";
    result.style.display = "none";
  }

  document.querySelectorAll("p").forEach(element => {
    element.addEventListener("click", () => {
      window.location.href = "menu.html?q=" + encodeURIComponent(element.textContent);
    });
  });


});
$(document).ready(function () {

  let bgImages = restaurants.map(function (item) {
    return item.backgroundImg;
  });

  let $bgSlide = $('.bg-slide');
  let currentIndex = 0;

  if (bgImages.length > 0) {
    $bgSlide.css('background-image', 'url(' + bgImages[0] + ')');
  }

  function showNextBackground() {
    currentIndex = (currentIndex + 1) % bgImages.length;
    $bgSlide.fadeOut(1000, function () {
      $bgSlide.css('background-image', 'url(' + bgImages[currentIndex] + ')');
      $bgSlide.fadeIn(1000);
    });
  }

  setInterval(showNextBackground, 5000);
});