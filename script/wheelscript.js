$(document).ready(function () {
    //資料
    $('#wheel-text').show();
    $('#wheel-text2').hide();
    $('#btn-back').hide();
    //文字
    let index;
    let indexfood;
    function typeWriter(text) {
        const $el = $('.display-area');
        $el.text('');
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                $el.text($el.text() + text[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 300);
        setTimeout(() => {
            $('.display-area').fadeOut(300, function () {
                $(this).text("那我先來幫你決定餐廳吧").fadeIn(300);
            });
        }, 4000);
    }
    typeWriter("不知道要吃什麼");

    //轉盤格數
    const total = restaurants.length;
    const degPerSlice = 360 / total;
    restaurants.forEach((r, i) => {
        const rotation = i * degPerSlice;
        const $slice = $('<div class="slice"></div>').css({
            transform: `rotate(${rotation}deg)`,
            backgroundImage: `url('${r.backgroundImg}')`
        });

        const $label = $('<div class="label"></div>')
            .text(r.name)
            .css('transform', `rotate(${degPerSlice / 2}deg) translateY(-50%)`);

        $slice.append($label).appendTo('#wheel');
    });

    //轉盤文字
    restaurants.forEach((r, i) => {
        $('<div class="label"></div>')
            .text(r.name)
            .css('transform', `rotate(${i * degPerSlice}deg) translateY(-50%)`)
            .appendTo('#wheel');
    });

    //轉盤動畫
    let isSpinning = false;
    let currentRotation = 0;
    $('#wheel-text').on('click', function () {
        setTimeout(() => {
            $('.display-area').fadeOut(500, function () {
                $(this).text("我知道了今天吃").fadeIn(500);
            });
        }, 1000);


        if (isSpinning) return;
        isSpinning = true;

        $('#wheel-text').fadeOut(300);

        const randomExtra = Math.floor(Math.random() * 360);
        const rotateAmount = 360 * 10 + randomExtra;
        currentRotation += rotateAmount;
        $('#wheel').css({
            transform: `rotate(${currentRotation}deg)`,
            transition: 'transform 4s ease-out'
        });

        setTimeout(() => {
            const actualDeg = currentRotation % 360;
            index = Math.floor((360 - actualDeg + degPerSlice / 2 - 70) % 360 / degPerSlice);
            if (index < 0) index += restaurants.length;
            const selected = restaurants[index].name;
            $('.display-area').fadeOut(500, function () {
                $(this).html(`${selected}`).fadeIn(500);
            });
            $('#wheel-text').text('再轉一次').fadeIn(500);
            isSpinning = false;
            setTimeout(() => showModal(index), 2000);
        }, 4500);
    });
    function showModal(idx) {
        const r = restaurants[idx];
        $('.modal-img').attr('src', r.backgroundImg);
        $('.modal-title').text(r.name);
        $('.modal-mask').slideDown(700, function () {
            $('.modal-buttons').slideDown(300);
        });

    }

    $('#btn-dislike').on('click', () => {
        $('.modal-mask').fadeOut(500);
        $('.display-area').fadeOut(500, function () {
            $(this).text("不喜歡嗎，那再來一次吧").fadeIn(500);
        });

    });
    $('#btn-ok').on('click', () => {
        $('#btn-back').fadeIn(500);
        $('.modal-mask').fadeOut(500);
        $('.head').slideUp(700, function () {
            $('.wheel-wrapper').stop(true).animate({
                bottom: '-50%',
                rotate: '90deg'
            }, {
                duration: 3000,
                easing: 'easeInOutQuad'
            });
        });
        $('#wheel-text').fadeOut(500).hide();
        $('#wheel-text2').show().text('點擊開始').fadeIn(500).animate({ rotate: '-90deg' }, { duration: 3000, easing: 'easeInOutQuad' });

        $('#wheel').empty();
        const r = restaurants[index];
        const foods = r.foods;
        const totalF = foods.length;
        const degPerF = 360 / totalF;

        foods.forEach((f, i) => {
            const rotation = i * degPerF;

            const $slice = $('<div class="slice"></div>').css({
                transform: `rotate(${rotation}deg)`,
                backgroundImage: `url('${f.foodImg}')`
            });

            const $label = $('<div class="label2"></div>')
                .text(f.name)
                .css('transform', `rotate(${degPerF / 2}deg) translateY(-50%)`);

            $slice.append($label).appendTo('#wheel');
        });

        $('.display-area').fadeOut(300, function () {
            $(this).text("那我再幫你決定餐點吧").fadeIn(300);
        });
    });
    $('#wheel-text2').on('click', function () {
        setTimeout(() => {
            $('.display-area').fadeOut(500, function () {
                $(this).text("我知道了今天吃這個").fadeIn(500);
            });
        }, 1000);


        if (isSpinning) return;
        isSpinning = true;

        $('#wheel-text2').fadeOut(300);

        const randomExtra = Math.floor(Math.random() * 360);
        const rotateAmount = 360 * 10 + randomExtra;
        currentRotation += rotateAmount;
        $('#wheel').css({
            transform: `rotate(${currentRotation}deg)`,
            transition: 'transform 4s ease-out'
        });

        setTimeout(() => {
            const tal = restaurants[index].foods.length;
            const deg = 360 / tal;
            const actualDeg = currentRotation % 360;
            indexfood = Math.floor((360 - actualDeg + deg / 2 - 70) % 360 / deg);
            if (indexfood < 0) indexfood += restaurants[index].foods.length;
            const selected = restaurants[index].foods[indexfood].name;
            $('.display-area').fadeOut(500, function () {
                $(this).html(`${selected}`).fadeIn(500);
            });
            $('#wheel-text2').text('再轉一次').fadeIn(500);
            isSpinning = false;
            setTimeout(() => showfood(indexfood), 2000);
        }, 4500);
    });
    function showfood(idx) {
        const r = restaurants[index].foods[indexfood];
        $('.modal-img').attr('src', r.foodImg);
        $('.modal-title').text(r.name);
        $('.modal-mask2').slideDown(700, function () {
            $('.modal-buttons2').slideDown(300);
        });

    }
    $('#btn-dislike2').on('click', () => {
        $('.modal-mask2').fadeOut(500);
        $('.display-area').fadeOut(500, function () {
            $(this).text("不喜歡嗎，那再來一次吧").fadeIn(500);
        });
    });
    $('#btn-ok2').on('click', () => {
        const selectedFood = restaurants[index].foods[indexfood];
    localStorage.setItem("highlightedFood", selectedFood.name); // ✅ 儲存要高亮的食物名稱
        const url = `food.html?restaurant=${encodeURIComponent(restaurants[index].name)}`;
        window.location.href = url;

        $('#btn-back').fadeOut(500);
        $('.modal-mask2').fadeOut(500);
        $('.head').slideDown(700, function () {
            $('.wheel-wrapper').stop(true).animate({
                bottom: '10%',
                rotate: '0deg'
            }, {
                duration: 3000,
                easing: 'easeInOutQuad'
            });
        });
        $('#wheel-text').show();
        $('#wheel-text2').hide();

        $('#wheel').empty();
        restaurants.forEach((r, i) => {
            const rotation = i * degPerSlice;
            const $slice = $('<div class="slice"></div>').css({
                transform: `rotate(${rotation}deg)`,
                backgroundImage: `url('${r.backgroundImg}')`
            });

            const $label = $('<div class="label"></div>')
                .text(r.name)
                .css('transform', `rotate(${degPerSlice / 2}deg) translateY(-50%)`);

            $slice.append($label).appendTo('#wheel');
        });
        restaurants.forEach((r, i) => {
            $('<div class="label"></div>')
                .text(r.name)
                .css('transform', `rotate(${i * degPerSlice}deg) translateY(-50%)`)
                .appendTo('#wheel');
        });
        $('#wheel-text').show().text('點擊開始').fadeIn(500);
        $('#wheel-text2').hide();

        function typeWriter(text) {
            const $el = $('.display-area');
            $el.text('');
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    $el.text($el.text() + text[i]);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 300);
            setTimeout(() => {
                $('.display-area').fadeOut(300, function () {
                    $(this).text("那我先來幫你決定餐廳吧").fadeIn(300);
                });
            }, 4000);
        }
        typeWriter("不知道要吃什麼");
    });
    $('#btn-back').on('click', () => {
        $('#btn-back').fadeOut(500);
        $('.modal-mask2').fadeOut(500);
        $('.head').slideDown(700, function () {
            $('.wheel-wrapper').stop(true).animate({
                bottom: '10%',
                rotate: '0deg'
            }, {
                duration: 3000,
                easing: 'easeInOutQuad'
            });
        });
        $('#wheel-text').show();
        $('#wheel-text2').hide();

        $('#wheel').empty();
        restaurants.forEach((r, i) => {
            const rotation = i * degPerSlice;
            const $slice = $('<div class="slice"></div>').css({
                transform: `rotate(${rotation}deg)`,
                backgroundImage: `url('${r.backgroundImg}')`
            });

            const $label = $('<div class="label"></div>')
                .text(r.name)
                .css('transform', `rotate(${degPerSlice / 2}deg) translateY(-50%)`);

            $slice.append($label).appendTo('#wheel');
        });
        restaurants.forEach((r, i) => {
            $('<div class="label"></div>')
                .text(r.name)
                .css('transform', `rotate(${i * degPerSlice}deg) translateY(-50%)`)
                .appendTo('#wheel');
        });
        $('#wheel-text').show().text('點擊開始').fadeIn(500);
        $('#wheel-text2').hide();

        function typeWriter(text) {
            const $el = $('.display-area');
            $el.text('');
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    $el.text($el.text() + text[i]);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 300);
            setTimeout(() => {
                $('.display-area').fadeOut(300, function () {
                    $(this).text("再選一次餐廳吧").fadeIn(300);
                });
            }, 4000);
        }
        typeWriter("QAQ  不喜歡早說阿");
    });
});

