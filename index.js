/*
 * Copyright (c) 2020. shtrih
 */
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 0.5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});
const dataSets = {
    inventory: [
        'Читерский кубик', 
        'Кубик хуюбика', 
        'Очки EZ', 
        'Повязка Рэмбо', 
        'Свиток реролла', 
        'Шар всезнания', 
        'Взрывчатка', 
        'Корона колесного короля', 
        'Ремонтный набор', 
        'Красочная манга', 
        'Рука Мидаса', 
        'Реверсивные сапоги', 
        'Парные кольца времени', 
        'Тухлая шаурма', 
        'Четырехлистный клевер.', 
        'Чокер боли', 
        'Полукаловая монетка', 
        'Шоколад', 
        'Туалетка', 
        'Штрафная квитанция',
        'Дырявый парашют',
        'Наперсток удачи',
        'Рука для fisting',
        'Тотем мошны',
        'Плюсовый блокнот',
        'Интрига', 
        'Два по цене одного', 
        'По магазинам с чатом', 
        'По магазинам с Лепреконом', 
        'Однорукий бандит', 
        'Грязнулькин', 
        'Рокировочка', 
        'Лепреконий схрон', 
        'Заначка старыги', 
        'Стример не тупой', 
        'Аптечка',
        'Ой, извините',
        'Mine now TriHard',
        'Помощь отстающему',
        'Удачный неудачник',
        'Торопыга',
        'Бог любит троицу',
        'Орел или решка',
        'А где это я?',
        'Чат здесь закон',
        'Я здесь закон',
        'Выбор бумера',
        'Выбор зумера',
        'Мистер ржавчик',
        'Всепоглащающий свин',
        'Грабли',
        'Липкая жижа',
        'Тормознутый',
        'Крыса'
    ],
    inventoryDesc: [
        'После броска кубиков заменяет значение на одном из них на то, которое выберет стример. Если в инвентаре оказываются читерский кубик и кубик хуюбика, они уничтожают друг друга.',
        'После следующего броска кубиков выберите тот, чье значение больше и поменяйте его на 1.  Если в инвентаре оказываются читерский кубик и кубик хуюбика, они уничтожают друг друга.',
        'Следующие два хода, не считая текущий, игры проходятся на самом легком уровне сложности. Стример может начать текущую игру заново и выбрать легкий уровень сложности или поменять сложность в настройках посреди игры, если есть такая опция. Если в инвентаре оказываются очки EZ и повязка Рэмбо, они уничтожают друг друга.',
        'Следующие два хода, не считая текущий, игры проходятся на самом высоком уровне сложности. Если в инвентаре оказываются очки EZ и повязка Рэмбо, они уничтожают друг друга.',
        'При использовании произведите реролл игры. Свиток нельзя использоавть на клетках "Аукошная" и "Лотерея". Использование свитка позволяет избавиться от эффектов, влияющий на ролл колеса (увеличение/уменьшение диапазона часов и т.д.) по желанию стримера.',
        'При использовании можете воспользоваться гайдом, видеопрохождением или спидраном игры.',
        'При попытке использования положительных свойств предметов, бросьте монетку. Сторону выбирайте сами. Одна сторона - эффект срабатывает, другая - эффект не срабатывает. Заряд при этом у предмета тратится в любом случае.',
        'После прокрута колеса, можете использовать корону, чтобы выбрать между двумя соседними играми. Не работает на клетке "Аукошная" и "Лотерея". ',
        'Увеличьте количество зарядов у любого вашего предмета на 1. Не работает на "Шоколад".',
        'Позволяет проходить визуальную новеллу, но запрещен автоскип сцен. (Рука ОБЯЗАНА заебываться) (Рука ОБЯЗАНА заебываться)',
        'При каждом ролле колеса приколов тратится заряд. Колеса стоят фиксированно 1500 рублей пока предмет находится в инвентаре. После сброса предмета стоимость возвращается к тому значению, которое было до выпадения этого предмета. Повторное выпадение руки, пока она в инвентаре, запрещено.',
        'Во время следующего хода бросьте один кубик вместо двух. Вернитесь назад на выпавшее значение кубика. На бросок не влияют никакие дополнительные эффекты. Не может повторно выпасть в ход, когда вы уже отступили назад благодаря данному предмету.',
        'Выберите другого стримера, у которого нет данного предмета. Теперь вы оба окольцованы. При использовании кольца тратят заряд и уменьшают верхнее и нижнее значение времени на клетке у того стримера, который использовал заряд, на 2 часа (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа). Количество зарядов общие для обоих стримеров. Если один из стримеров потеряет кольцо, второй также его потеряет. ',
        'Используйте на другого стримера, у которого нет данного предмета. У вашего конкурента несварение. Следующие два хода при передвижении он отнимает от каждого значения кубика 1. Значение на кубике не может быть меньше 1.',
        'Предмет имеет два свойства: Первое -  Можете потратить заряд и отбить любую ловушку. Второе - На секторах "Аукошная" и "Лотерея" можете потратить заряд и договориться с главным судьей на +2 поинта за прохождение игры или пройти игру на легком уровне сложности.',
        'Используйте на другого стримера, у которого нет данного предмета. Во время следующего прохождения игры на обычной клетке, он может проходить игру только по особым, жанровым правилам. Количество поинтов за прохождение игры все также х2 от базового.',
        'Используйте на другого стримера, у которого нет данного предмета. На следующей клетке с временным условием он подбрасывает мнетку, где 1 сторона - -2 часа к верхнему\нижнему порогу (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа), вторая - +3 часа.',
        'При использовании уменьшает верхнее и нижнее значение времени на клетке на 1 час (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа). Шоколад можно копить. Когда скапливается 4 заряда, шоколад превращается в плитку. Любое временное значение на секторе становится 1-4 часов. Пока шоколад не стал плиткой, нельзя использовать больше одного заряда на одну клетку. Заряды увеличиваются только от  другого шоколада (ремонтный набор не работает).',
        'Вы знатно обкекались. При дропе можете использовать заряд. Вместо перемещения на клетку "Тюрьма", вернитесь на клетку, на которой вы были на прошлом ходу. Если там нужно проходить игру, придется это сделать (за поинты, естественно). Не может заблокировать эффект от Дырявого парашюта.',
        'На следующей клетке с временем, повысьте верхний и нижний порог на 3 часа. Можно использовать другие предметы и эффекты, чтобы невелировать свойства этого предмета. ',
        'При дропе переместитесь на клетку "Старт" и потеряйте 2 поинта. Первая пройденная игра после дропа не принесет поинтов. Нельзя заблокироавть действие парашюта Туалеткой.',
        'При каждом кручении колеса приколов замените один неугодный вам пункт на тот, который вам нужен. Озвучивать замену нужно перед каждым роллом. Если колесо уже крутится, а стример не озвучил замену, то сделать это уже нельзя. ',
        'Используйте на другого стримера, у которого нет данного предмета. Теперь он ваш slave. Начиная с этого момента, каждый пятый заработанный point он отдает вам и тратит заряд. Отдав суммарно 5 points, вы будете so fucking deep, что больше ничего получить от него не сможете. Если ваш slave получит из колеса руку для fisting, он сможет сделать slave вас, а ваша рука пропадет из его assventory. Если вы Dungeon master хотя бы у одного стримера, другие не могут быть вашим slave (реролл колеса). Нельзя fisting одного и того же стримера 2 раза подряд. Можно быть одновременно и slave и dungeon master.',
        'Защищает стримера на текущую и следующую игру от ловушек-событий. Ловушки-предметы все ткже можно бросать в стримера под тотемом.',
        'Если при броске двух кубиков на движение значение обоих одинаковое, то получите +2 к итоговому значению броска. Если выпадает две 6, то вместо + к движению, получите +1 поинт.',
        'Произведите реролл колеса.',
        'Произведите реролл колеса. Выполните два соседних пункта от выпавшего. Порядок: сначала верх, потом низ.',
        'Произведите реролл колеса. Чат выбирает между выпавшим пунктом и четырьмя соседними путем голосования. Во время голосования запрещено использовать любые манипуляции с чатом (фолловер или саб моды, приоритет голосования у сабов, голосование за поинты и т.д.)',
        'Произведите реролл колеса. Главный судья (если он онлайн) выбирает между выпавшим пунктом и четырьмя соседними. Стример имеет право подлизываться и подкупать судью. Если судьи нет,стримеру повезло, он может выбрать сам и сказать, что судья бы точно одобрил его выбор. ',
        'Сбросьте все предметы из инвентаря без возможности использовать их свойства перед сбросом. За каждый сброшенный предмет покрутите колесо приколов.',
        'Съедает случайный предмет типа бафф.',
        'Меняет тип предмета с дебафф на бафф и наоборот по желанию стримера.',
        'Покрутите колесо только из предметов типа бафф и положительных событий.',
        'Покрутите колесо только из предметов типа дебафф и отрицательных событий.',
        'Стример открывает сайт https://randstuff.ru/question/ и отвечает на 7 случайных вопросов. Если стример ответил на 2 вопроса или меньше, он получает -2 поинта, 3 - -1, 4-5 - 0, 6 - +1, 7 - +2. На время ответов на вопросы чат у стримера переходит в смайл мод, а если какой-то модератор или VIP-пользователь дает подсказку - ответ не засчитывается. Пользоваться любыми способами получения информации на время прохождения теста стримеру запрещено. Если один и тот же вопрос выпадает повторно, стример должен его реролльнуть. ',
        'Стример получает возможность сбросить 1 дебафф и потерять 1 поинт или сбросить 1 бафф и получить 1 поинт. Реролл по желанию стримера или отсутствию предметов в инвентаре. ',
        'Данный пункт колеса недоступен в вашем регионе. Выберите один из четырех соседних пунктов (два вверх, два вниз).',
        'Обменяйтесь инвентарями со случайным стримером.',
        'Если стример на момент выпадения этого пункта находится в первой четверке участников по поинтам, он получает -2 к своему следующему броску кубика для перехода по клеткам. Если во второй четверке - +2. Если в третьей четверке - +2 и +1 поинт. Значение броска кубика не может быть меньше 2. ',
        'За каждый дебафф в инвентаре стример получает +1 к своему следующему броску кубика для перехода по секторам. Если в инвентаре 5 или 6 дебаффов, стример также получает +1 поинт. ',
        'На следующей клетке с временем верхний и нижний порог будут снижены на 1 час (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа)',
        'Во время следующего хода бросьте три кубика, вместо двух. Выберите два из трех и походите на сумму значений этих кубиков. Если в вашем инвентаре Кубик хуюбика, его заряд не тратится на этот бросок, а эффект не работает. ',
        'Бросьте монетку. Одна сторона - +2 к итоговому значнеию броска кубика в следующем ходу, другая - -2.  Значение броска кубика не может быть меньше 2.',
        'Если клетка на части игрового поля где стоит стример, четная или угловая, то он крутит колесо баффов. Если нечетная - колесо дебаффов. Пример отсчета: Старт, 1 (нечет), 2 (чет) и т.д.',
        'Дополнительная особенность ролла игры. Ролл производится из 6 игр вместо 16 стандартных. Чат выбирает, какую игру будет проходить стример, путём голосования на Твиче по команде /poll. Время голосования — 2 минуты. В чате должны быть выключены follower- и sub-моды. Голосование нельзя «бустить» какими-либо настройками с привилегиями для обладателей платной подписки или за баллы канала. Перед добавлением игры в голосование стример должен проверить каждую игру на проходимость (хотя бы на первый взгляд). Если для голосования подходят все шесть игр, стример может по своему усмотрению удалить одну из них. Если для голосования подходят три игры или меньше, добавляется пункт «реролл». Зрители могут рероллить колесо только три раза, после чего проводится обязательное голосование из тех игр, которые подходят для прохождения (даже если такая игра только одна). Четвертый реролл (и последующие) возможен, только если все шесть игр не являются проходимыми. Если стримеру выпал "Чат здесь закон" и "Я здесь закон", то эти особенности встают в очередь в порядке их выпадения стримеру.',
        'Дополнительная особенность ролла игры, ролл производится из 6 игр вместо 16 стандартных. Стример выбирает любую на свое усмотрение исходя из описания на странице колеса. На время выбора в чате включается смайл мод. Если стримеру выпал "Чат здесь закон" и "Я здесь закон", то эти особенности встают в очередь в порядке их выпадения стримеру.',
        'Дополнительная особенность ролла игры, установите дату выхода до декабря 2010 года. Если стримеру выпал "Выбор бумера" и  "Выбор зумера", то эти особенности встают в очередь в порядке их выпадения стримеру.',
        'Дополнительная особенность ролла игры, установите дату выхода от января 2011 года. Если стримеру выпал "Выбор бумера" и  "Выбор зумера", то эти особенности встают в очередь в порядке их выпадения стримеру.',
        'Съедает у выбранного стримера случайный предмет-бафф.',
        'Съедает у выбранного стримера случайный предмет.',
        'Выбранный стример получает -1 к своему следующему броску кубика на передвижение. Значение броска не может быть меньше 2.',
        'Выбранный стример получает -1 к своему следующему броску кубика на передвижение. На секторе, с которого он совершает ход под действием жижы он оставляет след. Следующий наступивший на этот сектор стример получает -2 к своему следующему броску кубика на передвижения, после чего жижа пропадает. Значение броска не может быть меньше 2. Стример оставляет лишь 1 след, сколько бы жиж на нем не было.',
        'У выбранного стримера на следующей клетке с временным условием увеличивается нижний/верхний порог на 1 час. Нельзя использовать на стримера, на котором уже есть два эффекта тормознутого.',
        'Выбранный стример получает -3 к своему следующему броску кубика на передвижение, а вы -1. Можно отказаться и зарероллить колесо. Значение броска не может быть меньше 2.',
    ],
    inventoryTip: [
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. Бафф)',
        '(Предмет. ДеБафф)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 2)',
        '(Предмет. Бафф. Заряды: 1)',,
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Нейтралка. Заряды:3)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 4)',
        '(Предмет. Ловушка-ДеБафф. Заряды: 2)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Ловушка-ДеБафф. Заряды: 1)',
        '(Предмет. Ловушка-Нейтралка. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. Бафф)',     
        '(Предмет. Ловушка-ДеБафф. Заряды: 5)',  
        '(Предмет. Бафф)',
        '(Предмет. Бафф)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Ловушка)',
        '(Ловушка)',
        '(Ловушка)',
        '(Ловушка)',
        '(Ловушка)',
        '(Ловушка)',
    ],
    //Позитивное колесо
    effects: [
        'Читерский кубик', 
        'Очки EZ', 
        'Свиток реролла', 
        'Шар всезнания', 
        'Корона колесного короля', 
        'Ремонтный набор', 
        'Красочная манга', 
        'Парные кольца времени',
        'Четырехлистный клевер',
        'Шоколад',
        'Туалетка',
        'Наперсток удачи',
        'Тотем мошны',
        'Плюсовый блокнот.',
        'Два по цене одного',
        'Рокировочка',
        'Аптечка',
        'Ой, извините',
        'Удачный неудачник',
        'Торопыга',
        'Бог любит троицу'
    ],
    effectsDesc: [
        'При использовании во время броска кубика сами укажите нужное вам номинальное число (от 1 до 6). Это число может быть увеличено другими эффектами колеса приколов. Если в инвентаре оказываются читерский кубик и кубик хуюбика, они уничтожают друг друга.',
        'Следующие два хода, не считая текущий, игры проходятся на самом легком уровне сложности. Если в инвентаре оказываются очки EZ и повязка Рэмбо, они уничтожают друг друга.',
        'При использовании произведите реролл игры.',
        'При использовании можете воспользоваться гайдом, видеопрохождением или спидраном игры.',
        'После прокрута колеса, можете использовать корону, чтобы выбрать между двумя соседними играми. Не работает на клетке "Аукошная" и "Лотерея".',
        'Увеличьте количество зарядов у любого вашего предмета на 1.',
        'Позволяет проходить визуальную новеллу, но запрещен автоскип сцен. (Рука ОБЯЗАНА заебываться)',
        'Выберите другого стримера, у которого нет данного предмета. Теперь вы оба окольцованы. При использовании кольца тратят заряд и уменьшают верхнее и нижнее значение времени на клетке у того стримера, который использовал заряд, на 2 часа (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа). Количество зарядов общие для обоих стримеров. Если один из стримеров потеряет кольцо, второй также его потеряет.',
        'Предмет имеет два свойства: Первое -  Можете потратить заряд и отбить любую ловушку. Второе - На секторах "Аукошная" и "Лотерея" можете потратить заряд и договориться с главным судьей на +2 поинта за прохождение игры или пройти игру на легком уровне сложности.',
        'При использовании уменьшает верхнее и нижнее значение времени на клетке на 1 час (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа). Шоколад можно копить. Когда скапливается 4 заряда, шоколад превращается в плитку. Любое временное значение на секторе становится 1-4 часов. Пока шоколад не стал плиткой, нельзя использовать больше одного заряда на одну клетку. Заряды увеличиваются только от  другого шоколада (ремонтный набор не работает).',
        'Вы знатно обкекались. При дропе можете использовать заряд. Вместо перемещения на клетку "Тюрьма", вернитесь на клетку, на которой вы были на прошлом ходу. Если там нужно проходить игру, придется это сделать (за поинты, естественно). Не может заблокировать эффект от Дырявого парашюта.',
        'При каждом кручении колеса приколов замените один неугодный вам пункт на тот, который вам нужен. Озвучивать замену нужно перед каждым роллом. Если колесо уже крутится, а стример не озвучил замену, то сделать это уже нельзя.',
        'Защищает стримера на текущую и следующую игру от ловушек-событий. Ловушки-предметы все ткже можно бросать в стримера под тотемом.', 
        'Если при броске двух кубиков на движение значение обоих одинаковое, то получите +2 к итоговому значению броска. Если выпадает две 6, то вместо + к движению, получите +1 поинт.',
        'Произведите реролл колеса. Выполните два соседних пункта от выпавшего. Порядок: сначала верх, потом низ.',
        'Меняет тип предмета с дебафф на бафф и наоборот по желанию стримера.',
        'Стример получает возможность сбросить 1 Дебафф и получить -2 к своему следующему броску для перехода по секторам или сбросить 1 Бафф и получить +2. Реролл по желанию стримера или отсутствию предметов в инвентаре.',
        'Данный пункт колеса недоступен в вашем регионе. Выберите один из четырех соседних пунктов (два вверх, два вниз).',
        'За каждый Дебафф в инвентаре стример получает +1 к своему следующему броску кубика для перехода по секторам.',
        'На следующей клетке с временем верхний и нижний порог будут снижены на 1 час (но не меньше 1 часа и разница между верхним/нижним значением должна быть не меньше 1 часа)',
        'Во время следующего хода бросьте три кубика, вместо двух. Выберите два из трех и походите на сумму значений этих кубиков. Если в вашем инвентаре Кубик хуюбика, его заряд не тратится на этот бросок, а эффект не работает. ',
    ],
    effectsTip: [
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 4)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф. Заряды: 1)',
        '(Предмет. Бафф)',
        '(Предмет. Бафф)',
        '(Предмет. Бафф)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
        '(Эффект)',
    ],
    //Монетка
    coin: [
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Ребро!',
    ],
    coinTip: [
        'xdd в чат',
        'aRolf В чат',
        'xdd в чат',
        'aRolf В чат',
        'xdd в чат',
        'aRolf В чат',
        'xdd в чат',
        'aRolf В чат',
        'xdd в чат',
        'aRolf В чат',
        'Чел реально ребро выкинул', 
    ],
    coinDesc: [
        'Ну типа орел птица такая хех',
        'Ну типа орешка еда такая',
        'у типа орел птица такая хех',
        'Ну типа орешка еда такая',
        'у типа орел птица такая хех',
        'Ну типа орешка еда такая',
        'у типа орел птица такая хех',
        'Ну типа орешка еда такая',
        'у типа орел птица такая хех',
        'Ну типа орешка еда такая',
        'Шанс ребра практически равен нулю... вам очень повезло(или нет).',
    ],

    //Негативное колесо
    debuffs: [
        'Кубик хуюбика',
        'Повязка Рэмбо', 
        'Взрывчатка', 
        'Реверсивные сапоги', 
        'Штрафная квитанция',
        'Дырявый парашют',
        'Два по цене одного',
        'Грязнулькин',
    ],
    debuffsDesc: [
        'После следующего броска кубиков выберите тот, чье значение больше и поменяйте его на 1.  Если в инвентаре оказываются читерский кубик и кубик хуюбика, они уничтожают друг друга.',
        'Следующие два хода, не считая текущий, игры проходятся на самом сложном уровне сложности. Если в инвентаре оказываются очки EZ и повязка Рэмбо, они уничтожают друг друга.',
        'При попытке использования положительных свойств предметов, бросьте монетку. Сторону выбирайте сами. Одна сторона - эффект срабатывает, другая - эффект не срабатывает. Заряд при этом у предмета тратится в любом случае.',
        'Во время следующего хода бросок кубика определяет не то, на сколько вы продвинетесь вперед, а то, на сколько вы отступите назад. Не может повторно выпасть в ход, когда вы уже отступили назад благодаря данному предмету.',
        'На следующей клетке с временем, повысьте верхний и нижний порог на 3 часа. Можно использовать другие предметы и эффекты, чтобы невелировать свойства этого предмета.',
        'При дропе переместитесь на клетку "Старт" и потеряйте 2 поинта. Первая пройденная игра после дропа не принесет поинтов. Нельзя заблокироавть действие парашюта Туалеткой.',
        'Произведите реролл колеса. Выполните два соседних пункта от выпавшего. Порядок: сначала верх, потом низ.',
        'Съедает случайный предмет типа Бафф.',
    ],
    debuffsTip: [
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. ДеБафф)',
        '(Предмет. Дебафф. Заряды: 2)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Предмет. ДеБафф. Заряды: 1)',
        '(Эффект)',
        '(Эффект)',
    ],
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    mainbutton = document.getElementById('huey'),
    buffsbutton = document.getElementById('dewey'),
    debuffsbutton = document.getElementById('scrudge'),
    coinbutton = document.getElementById('louie'),
    customlistbutton = document.getElementById('scrooge'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function () {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, true]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    }
;


//buffsbutton.setAttribute('disabled', 'disabled')
editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();
    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, disabledEntries, isDefault) {
        this._title = title;
        this._disabledEntries = disabledEntries;
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet();

        for(const i in this._disabledEntries) {
            if (editedDataSets[currentDataSet][this._disabledEntries[i]]) {
                editedDataSets[currentDataSet][this._disabledEntries[i]] = false;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', isDefault);
    }
}

//Список эффектов(не предметов, при нажатии на "только предметы", снимает с них галочку)
class PresetWithoutSpecialRolls extends Preset {
    constructor() {
        super(
            'Только предметы',
            [
                'Интрига', 
                'Два по цене одного', 
                'По магазинам с чатом', 
                'По магазинам с Лепреконом', 
                'Однорукий бандит', 
                'Грязнулькин', 
                'Рокировочка', 
                'Лепреконий схрон', 
                'Заначка старыги', 
                'Стример не тупой', 
                'Аптечка',
                'Ой, извините',
                'Mine now TriHard',
                'Помощь отстающему',
                'Удачный неудачник',
                'Торопыга',
                'Бог любит троицу',
                'Орел или решка',
                'А где это я?',
                'Чат здесь закон',
                'Я здесь закон',
                'Выбор бумера',
                'Выбор зумера',
                'Мистер ржавчик',
                'Всепоглащающий свин',
                'Грабли',
                'Липкая жижа',
                'Тормознутый',
                'Крыса'
            ],
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            // inventory: [
            //     new PresetAll(),
            // ],
            effects: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],
            debuffs: [
                new PresetAll(),
                new PresetWithoutSpecialRolls(true),
            ],

        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            if (i % 2) {
                result.push(document.createTextNode(', '));
            }
            result.push(this._presets[dataSetKey][i].domNode);
        }

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = '../hpg-inventory/images/000.png',
        offset = 0
    ;
    switch (currentDataSet) {
        case "inventory":
            result = '../hpg-inventory/images/0' + ('0' + (index+1 + offset)).slice(-2) + '.png';
            break;
        case "effects":
            const effectsmapping = [
                1,
                3,
                5,
                6,
                8,
                9,
                10,
                13,
                15,
                18,
                19,
                22,
                24,
                25,
                27,
                32,
                36,
                37,
                40,
                41,
                42,
            ]
            result = '../hpg-inventory/images/0' + ('0' + (effectsmapping[index])).slice(-2) + '.png';
            break;

        case "debuffs":
            const debuffsmapping = [
                2,
                4,
                7,
                12,
                20,
                21,
                27,
                31
            ];
            result = '../hpg-inventory/images/0' + ('0' + (debuffsmapping[index])).slice(-2) + '.png';
            break;

        case "coin":
            result = '../images/coin-obverse-20.png';
            if (index === 1) {
                result = '../images/coin-reverse-20.png';
            }
            if (index === 10) {
                result = '../images/coin-gurt.png';
            }
            break;


    }

    return result;
}

const p5Instance = new p5(wheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        ['videos/JOJO\'S BIZARRE MAKEUP TUTORIAL.mp4', 6],
        ['videos/[SFM] Shrekophone.mp4', 15],
        ['videos/All Star but they don\'t stop coming pitch corrected.mp4', 20],
        ['videos/U GOT THAT   LASQA EDITION.mp4', 9],
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        'videos/01.mp4',
        'videos/02.mp4',
        ['videos/03.mp4', 120],
        'videos/04.mp4',
        'videos/05.mp4',
        'videos/06.mp4',
        'videos/07.mp4',
        'videos/08.mp4',
        'videos/09.mp4',
        'videos/10.mp4',
        'videos/11.mp4',
        ['videos/12.mp4', 9],
        'videos/13.mp4',
        'videos/14.mp4',
        'videos/15.mp4',
        ['videos/16.mp4', 12],
        'videos/17.mp4',
        'videos/18.mp4',
        'videos/19.mp4',
        'videos/20.mp4',
        'videos/21.mp4',
        'videos/22.mp4',
        'videos/23.mp4',
        ['videos/24.mp4', 6],
        'videos/25.mp4',
        ['videos/26.mp4', 5],
        ['videos/27.mp4'],
        ['videos/28.mp4', 30],
        'videos/29.mp4',
        'videos/30.mp4',
        ['videos/31.mp4', 143],
        'videos/32.mp4',
        'videos/33.mp4',
        'videos/34.mp4',
        'videos/35.mp4',
        'videos/36.mp4',
        ['videos/37.mp4', 120],
        'videos/39.mp4',
        ['videos/40.mp4', 61],
        'videos/41.mp4',
        ['videos/42.mp4', 60],
        ['videos/43.mp4', 1],
        ['videos/44.mp4', 66],
        ['videos/45.mp4', 29],
        'videos/46.mp4',
        ['videos/47.mp4', 59],
        'videos/48.mp4',
        'videos/49.mp4',
    ]);
};

const image = document.querySelector('#item-image img');
const descriptionName = document.querySelector('#item-description-name');
const descriptionTip = document.querySelector('#item-description-tip');
const descriptionText = document.querySelector('#item-description-text');
p5Instance.onSelectItem = function(data, selectedKey) {
    if (dataSets[currentDataSet]) {
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey]));

        if(dataSets[`${currentDataSet}Desc`]?.length > 0 && dataSets[`${currentDataSet}Desc`]?.length !== dataSets[currentDataSet]?.length) console.error(`Количество элементов описания не соответствует количеству элементов названий, нужно проверить количество строк в ${currentDataSet} и ${currentDataSet}Desc и сделать их равными`)
        if(dataSets[`${currentDataSet}Desc`]?.length > 0 && dataSets[`${currentDataSet}Desc`]?.length === dataSets[currentDataSet]?.length) {
            descriptionName.textContent = dataSets[currentDataSet][dataSets[currentDataSet].indexOf(data[selectedKey])];
            descriptionTip.textContent = dataSets[`${currentDataSet}Tip`][dataSets[currentDataSet].indexOf(data[selectedKey])];
            descriptionText.textContent = dataSets[`${currentDataSet}Desc`][dataSets[currentDataSet].indexOf(data[selectedKey])];
        }
        else descriptionName.textContent = ""
    }
    else {
        image.src = '../hpg-inventory/images/000.png';
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0],
    closeDesc = document.querySelector("#item-description-close"),
    descriptionContainer = document.querySelector('#item-description-container'),
    openDesc = document.querySelector('#item-description-open'),
    closeCustom = document.getElementById('custom-list-close');
;

closeCustom.addEventListener('click', () => {
    openDesc.style.display = 'none';
    customDialog.style.display = 'none';
    openDesc.style.display = 'block';
    p5Instance.mouseDragEnable();
});

let customValue = null;

customButton.addEventListener('click', function () {
    openDesc.style.display = 'none';
    customDialog.style.display = 'none';
    currentDataSet = customValue;
    customlistbutton.checked = true;

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
    editButton.removeAttribute('disabled');
});

closeDesc.addEventListener('click', function () {
    descriptionContainer.style.display = 'none';
    openDesc.style.display = 'block';
    p5Instance.mouseDragEnable(true);
});
openDesc.addEventListener('click', function () {
    descriptionContainer.style.display = 'flex';
    openDesc.style.display = 'none';
    p5Instance.mouseDragEnable(false);
});

let radios = document.querySelectorAll('[name="list"]');
let choseUneditableDataset = false;
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function (e) {
        descriptionContainer.style.display = 'none';
        if (this.value === 'custom') {
            e.preventDefault();
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';
            customValue = this.value;
            editButton.removeAttribute('disabled');
            choseUneditableDataset = false;
            return;
        }
        currentDataSet = this.value;
        openDesc.style.display = 'block';

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }
            
            p5Instance.setData(editedDataToArray());
            editButton.removeAttribute('disabled');
            choseUneditableDataset = false;
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.setAttribute('disabled', 'disabled');
            choseUneditableDataset = true;
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}