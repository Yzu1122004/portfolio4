let restaurants = [
    {
        name: "義式餐廳",
        backgroundImg: "./背景/義式餐廳.png",
        stars: 2,
        foods: [
            {
                name: "松露野菇燉飯", foodImg: "./餐點/義式餐廳/松露野菇燉飯.png", price: 420,
                description: "使用義大利進口的米熬煮，搭配香氣濃郁的松露醬與綜合野菇..."
            },
            {
                name: "義式番茄羅勒扁麵", foodImg: "./餐點/義式餐廳/義式番茄羅勒扁麵.png", price: 380,
                description: "採用新鮮番茄熬煮成醬，搭配蝦仁、花枝、淡菜等海鮮食材..."
            },
            {
                name: "經典瑪格麗特披薩", foodImg: "./餐點/義式餐廳/經典瑪格麗特披薩.png", price: 360,
                description: "義大利經典披薩，餅皮薄脆，鋪上新鮮番茄片、莫札瑞拉起司與羅勒葉，強調原味與食材新鮮。"
            },
            {
                name: "義式牛肚番茄湯", foodImg: "./餐點/義式餐廳/義式牛肚番茄湯.png", price: 220,
                description: "牛肚經長時間燉煮至軟嫩，與番茄、洋蔥、香料共同熬製，湯頭濃郁微酸，是托斯卡尼地區的家常料理。"
            },
            {
                name: "手工提拉米蘇", foodImg: "./餐點/義式餐廳/手工提拉米蘇.png", price: 180,
                description: "義大利經典甜點，以手指餅乾浸泡咖啡酒，分層搭配馬斯卡彭起司與可可粉，綿密細緻。"
            }
        ],
        liked: false,
        comments: [
            "好吃", "好好吃",
        ]
    },
    {
        name: "日式料理",
        backgroundImg: "./背景/日式料理.png",
        stars: 1,
        foods: [
            {
                name: "炙燒牛舌", foodImg: "./餐點/日式料理/炙燒牛舌.png", price: 280,
                description: "嚴選牛舌切片後以高溫火槍炙燒，搭配蔥鹽醬與檸檬汁，外酥內嫩、帶有嚼勁。"
            },
            {
                name: "鮭魚親子丼", foodImg: "./餐點/日式料理/鮭魚親子丼.png", price: 320,
                description: "丼飯鋪上生食級鮭魚片與鮭魚卵（親子），搭配醋飯、海苔絲與哇沙米，海味十足。"
            },
            {
                name: "壽司拼盤", foodImg: "./餐點/日式料理/壽司拼盤.png", price: 480,
                description: "綜合握壽司（如鮪魚、鮭魚、花枝、蝦、干貝等）與卷壽司，食材新鮮、適合分享。"
            },
            {
                name: "炸豬排定食", foodImg: "./餐點/日式料理/炸豬排定食.png", price: 320,
                description: "外酥內嫩的厚切豬排，搭配高麗菜絲、白飯、味噌湯與小菜，日式經典組合。"
            },
            {
                name: "親子丼", foodImg: "./餐點/日式料理/親子丼.png", price: 240,
                description: "雞肉與洋蔥煮於日式醬汁中，加入蛋液拌煮成滑蛋狀，盛於米飯上，鹹甜開胃。"
            },
            {
                name: "日式咖哩飯", foodImg: "./餐點/日式料理/日式咖哩飯.png", price: 260,
                description: "使用多種蔬果與香料熬製濃厚咖哩，佐炸豬排或雞肉與米飯，微甜順口。"
            },
            {
                name: "冷蕎麥麵", foodImg: "./餐點/日式料理/冷蕎麥麵.png", price: 200,
                description: "涼拌蕎麥麵搭配日式醬油沾醬，附海苔絲、蔥末與山葵，清爽消暑。"
            },
            {
                name: "抹茶冰淇淋", foodImg: "./餐點/日式料理/抹茶冰淇淋.png", price: 120,
                description: "採用宇治抹茶製成，苦甜適中，茶香濃郁。"
            },
            {
                name: "和風沙拉", foodImg: "./餐點/日式料理/和風沙拉.png", price: 180,
                description: "混合生菜、玉米、豆腐等食材，淋上和風芝麻或醬油醋醬，口感清爽。"
            },
            {
                name: "豚骨拉麵", foodImg: "./餐點/日式料理/豚骨拉麵.png", price: 280,
                description: "長時間熬煮的豚骨白湯，搭配叉燒、溏心蛋、海苔與蔥花，濃郁醇香。"
            },
            {
                name: "明太子義大利麵", foodImg: "./餐點/日式料理/明太子義大利麵.png", price: 260,
                description: "明太子與奶油融合成醬，拌於義大利麵上，鹹香濃郁、帶有海鮮味。"
            },
            {
                name: "日式炸雞（唐揚げ）", foodImg: "./餐點/日式料理/日式炸雞（唐揚げ）.png", price: 220,
                description: "雞腿肉醃漬後裹粉油炸，外酥內多汁，搭配檸檬與美乃滋享用。"
            },
            {
                name: "茶碗蒸", foodImg: "./餐點/日式料理/茶碗蒸.png", price: 120,
                description: "使用高湯、蛋液蒸製，內含香菇、蝦仁等食材，滑嫩鮮美。"
            },
            {
                name: "綠茶蕨餅", foodImg: "./餐點/日式料理/綠茶蕨餅.png", price: 100,
                description: "以蕨粉製作的Q彈和菓子，灑上黃豆粉與淋上黑糖漿，茶香清新。"
            },
            {
                name: "鰻魚飯", foodImg: "./餐點/日式料理/鰻魚飯.png", price: 480,
                description: "烤鰻魚刷上特製醬汁後鋪在白飯上，香氣十足、入口即化。"
            }
        ]
        , liked: false,
        comments: [

        ]
    },
    {
        name: "韓式料理店",
        backgroundImg: "./背景/韓式料理店.png", stars: 1,
        foods: [
            {
                name: "部隊鍋（單人份）", foodImg: "./餐點/韓式料理店/部隊鍋.png", price: 380,
                description: "以泡菜、韓式辣醬為湯底，加入火腿、泡麵、年糕、豆腐、香腸與起司等食材，風味豐富。"
            },
            {
                name: "韓式炸雞（甜辣/蒜味）", foodImg: "./餐點/韓式料理店/韓式炸雞（甜辣蒜味）.png", price: 280,
                description: "雞翅炸至金黃酥脆，再裹上甜辣或蒜香醬汁，外酥內嫩。"
            },
            {
                name: "石鍋拌飯", foodImg: "./餐點/韓式料理店/石鍋拌飯.png", price: 300,
                description: "石鍋內鋪白飯，上層擺放炒蔬菜、肉類與蛋黃，加入辣醬攪拌後食用，鍋巴香脆。"
            },
            {
                name: "泡菜煎餅", foodImg: "./餐點/韓式料理店/泡菜煎餅.png", price: 220,
                description: "將泡菜與麵糊混合後煎製成餅，外皮酥脆、酸辣開胃。"
            },
            {
                name: "韓式冷麵", foodImg: "./餐點/韓式料理店/韓式冷麵.png", price: 280,
                description: "以蕎麥冷麵為主體，搭配冷湯、白蘿蔔片、雞蛋與牛肉片，夏天解暑首選。"
            },
            {
                name: "韓式烤肉", foodImg: "./餐點/韓式料理店/韓式烤肉.png", price: 480,
                description: "使用韓式醬料醃漬的牛或豬肉，現烤後搭配生菜包裹食用，鮮嫩入味。"
            }
        ]
        , liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "泰式餐廳",
        backgroundImg: "./背景/泰式餐廳.png", stars: 2,
        foods: [
            {
                name: "綠咖哩椰汁雞", foodImg: "./餐點/泰式餐廳/綠咖哩椰汁雞.png", price: 320,
                description: "香濃椰奶與綠咖哩融合，搭配雞肉與青豆、茄子等蔬菜，辛香濃郁。"
            },
            {
                name: "打拋豬肉飯", foodImg: "./餐點/泰式餐廳/打拋豬肉飯.png", price: 260,
                description: "豬絞肉拌炒九層塔與辣椒、大蒜，鹹香下飯，可選擇加蛋。"
            },
            {
                name: "酸辣海鮮湯", foodImg: "./餐點/泰式餐廳/酸辣海鮮湯.png", price: 320,
                description: "以香茅、南薑、辣椒與檸檬葉熬製的酸辣湯，搭配蝦、花枝等海鮮，開胃提神。"
            },
            {
                name: "椰奶糯米芒果", foodImg: "./餐點/泰式餐廳/椰奶糯米芒果.png", price: 150,
                description: "椰奶拌糯米，搭配新鮮芒果切片與椰奶醬，是泰式經典甜點。"
            }
        ]
        , liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "法式餐廳",
        backgroundImg: "./背景/法式餐廳.png", stars: 1,
        foods: [
            {
                name: "香煎鴨胸佐紅酒醬", foodImg: "./餐點/法式餐廳/香煎鴨胸佐紅酒醬.png", price: 880,
                description: "鴨胸肉表皮酥脆、內部粉紅軟嫩，搭配紅酒醬汁與時蔬，精緻典雅。"
            },
            {
                name: "法式洋蔥湯", foodImg: "./餐點/法式餐廳/法式洋蔥湯.png", price: 240,
                description: "洋蔥炒至焦糖色，長時間熬煮成湯，搭配起司烤麵包，香甜濃郁。"
            },
            {
                name: "松露奶油蘑菇濃湯", foodImg: "./餐點/法式餐廳/松露奶油蘑菇濃湯.png", price: 260,
                description: "綿密蘑菇湯加入松露油與奶油，香氣撲鼻。"
            },
            {
                name: "法式香料烤春雞", foodImg: "./餐點/法式餐廳/法式香料烤春雞.png", price: 580,
                description: "整隻春雞以香料醃製後烘烤，外皮酥脆、肉質多汁。"
            },
            {
                name: "焦糖布蕾", foodImg: "./餐點/法式餐廳/焦糖布蕾.png", price: 180,
                description: "經典法式甜點，以蛋奶烘烤成綿密布丁，上層撒糖炙燒成脆皮。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "美式餐廳",
        backgroundImg: "./背景/美式餐廳.png", stars: 2,
        foods: [
            {
                name: "經典起司培根牛肉堡", foodImg: "./餐點/美式餐廳/經典起司培根牛肉堡.png", price: 360,
                description: "多汁牛肉排、起司與培根夾入烤漢堡麵包，附薯條，美式風味十足。"
            },
            {
                name: "烤豬肋排", foodImg: "./餐點/美式餐廳/烤豬肋排.png", price: 520,
                description: "豬肋排慢烤至軟嫩，刷上BBQ醬，搭配薯泥或沙拉。"
            },
            {
                name: "酥炸洋蔥圈", foodImg: "./餐點/美式餐廳/酥炸洋蔥圈.png", price: 160,
                description: "洋蔥切圈裹粉炸至金黃，外酥內甜，佐塔塔醬。"
            },
            {
                name: "義式香腸玉米披薩", foodImg: "./餐點/美式餐廳/義式香腸玉米披薩.png", price: 420,
                description: "披薩餅皮上鋪義式香腸、甜玉米與起司，口味濃厚。"
            },
            {
                name: "蘋果派佐香草冰淇淋", foodImg: "./餐點/美式餐廳/蘋果派佐香草冰淇淋.png", price: 200,
                description: "酥脆蘋果派搭配溫熱肉桂蘋果餡，佐香草冰淇淋，甜中帶溫潤。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "中式熱炒店",
        backgroundImg: "./背景/中式熱炒店.png", stars: 3,
        foods: [
            {
                name: "三杯雞", foodImg: "./餐點/中式熱炒店/三杯雞.png", price: 250,
                description: "使用麻油、醬油與米酒各一杯為基底，加入雞腿肉、九層塔、薑片與蒜頭爆炒，口味濃郁、鹹香微甜，是經典台菜之一。"
            },
            {
                name: "魚香茄子煲", foodImg: "./餐點/中式熱炒店/魚香茄子煲.png", price: 180,
                description: "茄子搭配絞肉、豆瓣醬、蒜末、薑末與醬油炒香，入煲後燜煮至入味，辣中帶甜、醬香濃厚。"
            },
            {
                name: "蠔油芥藍牛肉", foodImg: "./餐點/中式熱炒店/蠔油芥藍牛肉.png", price: 280,
                description: "牛肉快炒至嫩口，搭配爽脆的芥藍菜，加入蠔油提味，香氣十足又下飯。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "港式茶餐廳",
        backgroundImg: "./背景/港式茶餐廳.png", stars: 3,
        foods: [
            {
                name: "滑蛋蝦仁飯", foodImg: "./餐點/港式茶餐廳/滑蛋蝦仁飯.png", price: 220,
                description: "新鮮蝦仁與雞蛋拌炒成滑蛋，淋在白飯上，搭配淡淡鹽味與胡椒提香，柔滑鮮甜。"
            },
            {
                name: "蜜汁叉燒撈麵", foodImg: "./餐點/港式茶餐廳/蜜汁叉燒撈麵.png", price: 240,
                description: "港式細麵搭配蜜汁叉燒肉與蔥油醬，無湯撈拌風格，叉燒外焦內嫩、甜鹹適中。"
            },
            {
                name: "鮮蝦腸粉", foodImg: "./餐點/港式茶餐廳/鮮蝦腸粉.png", price: 130,
                description: "使用米漿蒸成薄皮包裹整隻蝦仁，淋上甜醬油，皮薄滑嫩、蝦肉彈牙。"
            },
            {
                name: "港式凍檸茶", foodImg: "./餐點/港式茶餐廳/港式凍檸茶.png", price: 60,
                description: "濃厚紅茶搭配數片新鮮檸檬與冰塊，酸甜清爽、略帶茶澀，是港式餐飲經典飲品。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "印度餐廳",
        backgroundImg: "./背景/印度餐廳.png", stars: 4,
        foods: [
            {
                name: "奶油雞咖哩", foodImg: "./餐點/印度餐廳/奶油雞咖哩.png", price: 360,
                description: "印度稱為「Butter Chicken」，以番茄、奶油與多種香料慢燉雞肉，口感濃郁滑順，香料溫和，常搭配烤餅或飯食用。"
            },
            {
                name: "香料羊肉咖哩", foodImg: "./餐點/印度餐廳/香料羊肉咖哩.png", price: 390,
                description: "使用多種香料如孜然、肉桂、丁香、薑黃燉煮羊肉，香氣複雜濃厚，口味微辣。"
            },
            {
                name: "蒜香烤餅", foodImg: "./餐點/印度餐廳/蒜香烤餅.png", price: 80,
                description: "印度烤餅加入蒜泥與香草，烤得外酥內Q，是咖哩的最佳搭檔。"
            },
            {
                name: "芒果優格飲", foodImg: "./餐點/印度餐廳/芒果優格飲.png", price: 100,
                description: "印度傳統飲品「Mango Lassi」，以芒果泥與優格、蜂蜜混合，香甜濃稠且能解辣。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "素食餐廳",
        backgroundImg: "./背景/素食餐廳.png", stars: 4,
        foods: [
            {
                name: "地中海蔬菜千層麵", foodImg: "./餐點/素食餐廳/地中海蔬菜千層麵.png", price: 300,
                description: "義大利千層麵中夾入燉煮番茄醬與茄子、甜椒、節瓜等蔬菜，搭配乳酪焗烤，風味層次豐富。"
            },
            {
                name: "泰式打拋豆腐飯", foodImg: "./餐點/素食餐廳/泰式打拋豆腐飯.png", price: 260,
                description: "以豆腐取代豬絞肉，加入九層塔、辣椒、大蒜與醬油翻炒，風味與打拋豬相似但健康清爽。"
            },
            {
                name: "鹽烤甜椒菇菇沙拉", foodImg: "./餐點/素食餐廳/鹽烤甜椒菇菇沙拉.png", price: 180,
                description: "將甜椒、香菇、鴻禧菇等炭烤後搭配橄欖油、檸檬汁與堅果製成溫沙拉，口感豐富。"
            },
            {
                name: "烤南瓜濃湯佐脆麵包", foodImg: "./餐點/素食餐廳/烤南瓜濃湯佐脆麵包.png", price: 220,
                description: "南瓜烘烤後打製成濃湯，加入豆奶與香料，搭配自製脆法國麵包，溫潤香甜。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "早午餐餐廳",
        backgroundImg: "./背景/早午餐餐廳.png", stars: 5,
        foods: [
            {
                name: "煙燻鮭魚班尼迪克蛋", foodImg: "./餐點/早午餐餐廳/煙燻鮭魚班尼迪克蛋.png", price: 380,
                description: "英式瑪芬麵包上擺放煙燻鮭魚與水波蛋，淋上荷蘭醬，搭配生菜與薯塊，鹹香滑順。"
            },
            {
                name: "經典美式早餐拼盤", foodImg: "./餐點/早午餐餐廳/經典美式早餐拼盤.png", price: 320,
                description: "包含炒蛋、香腸、培根、薯餅、吐司與沙拉，豐盛多樣，美式風格十足。"
            },
            {
                name: "法式吐司佐莓果醬", foodImg: "./餐點/早午餐餐廳/法式吐司佐莓果醬.png", price: 280,
                description: "將吐司浸蛋液後煎至金黃，搭配藍莓、草莓等果醬與糖粉，外酥內嫩、甜香適中。"
            },
            {
                name: "酪梨溫泉蛋吐司", foodImg: "./餐點/早午餐餐廳/酪梨溫泉蛋吐司.png", price: 260,
                description: "吐司上鋪上酪梨泥與水波蛋，撒上黑胡椒與辣粉，營養均衡、風味清新。"
            },
            {
                name: "冰滴咖啡", foodImg: "./餐點/早午餐餐廳/冰滴咖啡.png", price: 140,
                description: "使用冰水長時間萃取的冷泡咖啡，口感滑順、低酸度，適合搭配早午餐。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "越式小吃店",
        backgroundImg: "./背景/越式小吃店.png", stars: 5,
        foods: [
            {
                name: "牛肉河粉", foodImg: "./餐點/越式小吃店/牛肉河粉.png", price: 180,
                description: "牛骨熬煮數小時的清澈湯頭，搭配生熟牛肉片、河粉、豆芽、香草與檸檬，湯鮮味美。"
            },
            {
                name: "炸春捲（3條）", foodImg: "./餐點/越式小吃店/炸春捲（3條）.png", price: 100,
                description: "內餡包含豬肉、冬粉、木耳等，外皮酥脆，佐以魚露沾醬，口感豐富。"
            },
            {
                name: "越式法國麵包", foodImg: "./餐點/越式小吃店/越式法國麵包.png", price: 160,
                description: "外酥內鬆的法國麵包夾入醃蘿蔔、香菜、小黃瓜與肉片（如燒肉或雞肉），酸甜清爽。"
            },
            {
                name: "檸檬香茅雞腿飯", foodImg: "./餐點/越式小吃店/檸檬香茅雞腿飯.png", price: 200,
                description: "雞腿肉以香茅、大蒜與檸檬醃製後煎香，搭配白飯與生菜，香氣四溢。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    },
    {
        name: "台灣經典小吃",
        backgroundImg: "./背景/台灣經典小吃.png", stars: 6,
        foods: [
            {
                name: "控肉飯", foodImg: "./餐點/台灣經典小吃/控肉飯.png", price: 120,
                description: "以五花肉滷至入味，肉質軟嫩不膩，搭配滷汁與滷蛋、酸菜，淋在白飯上，是傳統台灣味。"
            },
            {
                name: "滷肉飯", foodImg: "./餐點/台灣經典小吃/滷肉飯.png", price: 80,
                description: "豬絞肉與皮脂熬滷成膠質感十足的滷汁，淋於白飯上，鹹香夠味，是庶民美食代表。"
            },
            {
                name: "擔仔麵", foodImg: "./餐點/台灣經典小吃/擔仔麵.png", price: 90,
                description: "小碗陽春麵加上肉燥、蝦仁與蒜酥，湯頭清甜，源自台南的特色小吃。"
            },
            {
                name: "珍珠奶茶", foodImg: "./餐點/台灣經典小吃/珍珠奶茶.png", price: 80,
                description: "台灣的手搖飲代表，紅茶加入鮮奶與Q彈粉圓，香甜順口。"
            },
            {
                name: "臭豆腐", foodImg: "./餐點/台灣經典小吃/臭豆腐.png", price: 65,
                description: "發酵豆腐炸至外酥內嫩，佐以台式泡菜與蒜蓉醬，香氣濃烈但深受喜愛。"
            }
        ], liked: false,
        comments: [
            "111", "222",
        ]
    }
];