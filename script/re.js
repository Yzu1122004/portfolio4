$(document).ready(function () {
    let showOnlyLiked = false;

    function renderRestaurants() {
        $("article").remove();

        let sorted = [...restaurants].sort((a, b) => b.stars - a.stars);
        if (showOnlyLiked) {
            sorted = sorted.filter(r => r.liked);
        }

        sorted.forEach((rest, index) => {
            let commentsHtml = rest.comments.map(c => `<div class="textcontentBox"><p>${c}</p></div>`).join("");

            const isLiked = rest.liked ? 'liked' : '';
            const $article = $(`
                <article data-name="${rest.name}">
                    <div class="bgBox" style="background-image: url('${rest.backgroundImg}');">
                        <div class="nameBox">
                            <div class="name">${rest.name}</div>
                            <div class="stars">
                                <img class="likeBtn ${isLiked}" src="./imgs/圖層 1.png" alt="" style="cursor: pointer;">
                                <p class="likeCount">${rest.stars}</p>
                            </div>
                        </div>
                        <div class="textBntBox">
                            <button class="textOpen">留言</button>
                            <p class="textNum">${rest.comments.length}</p>
                        </div>
                    </div>
                    <div class="textContainer" style="display: none;">
                        ${commentsHtml}
                        <div class="addTextBox">
                            <input type="text" placeholder="寫下評價">
                            <button class="submitText">送出留言</button>
                        </div>
                    </div>
                </article>
            `);

            $("main").append($article);
        });
    }

    renderRestaurants();

    // 留言展開
    $(document).on("click", ".textOpen", function () {
        $(this).closest("article").find(".textContainer").slideToggle();
    });

    // 按讚 / 取消讚
    $(document).on("click", ".likeBtn", function () {
        const name = $(this).closest("article").data("name");
        const index = restaurants.findIndex(r => r.name === name);

        // 切換 liked 狀態
        if (restaurants[index].liked) {
            restaurants[index].liked = false;
            restaurants[index].stars--;
        } else {
            restaurants[index].liked = true;
            restaurants[index].stars++;
        }

        renderRestaurants();
    });

    // 留言送出
    $(document).on("click", ".submitText", function () {
        const $article = $(this).closest("article");
        const name = $article.data("name");
        const index = restaurants.findIndex(r => r.name === name);
        const input = $article.find("input").val().trim();

        if (input) {
            restaurants[index].comments.push(input);
        }

        renderRestaurants();
    });

    // 切換顯示按讚過的餐廳
    $(".openLikePage").click(function () {
        showOnlyLiked = !showOnlyLiked;
        $(this).text(showOnlyLiked ? "顯示全部餐廳" : "你按讚過的餐廳");
        renderRestaurants();
    });
});
