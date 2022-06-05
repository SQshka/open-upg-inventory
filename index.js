/*
 * Copyright (c) 2020. shtrih
 */

const dataSets = {
    inventory: [
        'Блудная косичка Бьерна',
        'Взрывчатка',
        'Корона короля пресетов',
        'Красочная манга',
        'Кубик хуюбика',
        'Облизанный ободок унитаза',
        'Очки EZ',
        'Повязка Рэмбо',
        'Реверсивные сапоги',
        'Ремонтный набор',
        'Рука Мидаса',
        'Свиток реролла',
        'Святая карта Юпитер',
        'Читерский кубик',
        'Шар всезнания',
        'Сорокалетний девственник',
        'Мощный бросок',
        'Слабый бросок',
        'Руки-Крюки',
        'Интрига',
        'Два по цене одного',
        'По магазинам с чатом',
        'Однорукий бандит',
        'Грязнулькин',
        'Рокировочка',
        'Все херня, давай по новой',
        'Лепреконий схрон',
        'Заначка старыги',
        'Воля случая',
        'Бустинг',
        'Сужающееся колесо Фладнерса',
        'Случай на Геймгаунлете',
        'Благотворительность',
        'Стример не тупой',
        'Извини что трахнул',
        'Помощь отстающему',
        'Удачный неудачник',
        'Аптечка',
        'Второй шанс',
        'А где это я?',
        'Ой, извините',
    ],
    inventoryDesc: [
        'Блудная косичка Бьерна',
        'Взрывчатка',
        'Корона короля пресетов',
        'Красочная манга',
        'Кубик хуюбика',
        'Облизанный ободок унитаза',
        'Очки EZ',
        'Повязка Рэмбо',
        'Реверсивные сапоги',
        'Ремонтный набор',
        'Рука Мидаса',
        'Свиток реролла',
        'Заменяет любое условие для опц. бонуса или штрафа на "в течение всей игры стример должен слушать Портлендское радио',
        'Читерский кубик',
        'Шар всезнания',
        'Сорокалетний девственник',
        'Мощный бросок',
        'Слабый бросок',
        'Руки-Крюки',
        'Интрига',
        'Два по цене одного',
        'По магазинам с чатом',
        'Однорукий бандит',
        'Грязнулькин',
        'Рокировочка',
        'Все херня, давай по новой',
        'Лепреконий схрон',
        'Заначка старыги',
        'Воля случая',
        'Бустинг',
        'Сужающееся колесо Фладнерса',
        'Случай на Геймгаунлете',
        'Благотворительность',
        'Стример открывает сайт https://randstuff.ru/question/ и отвечает на 7 случайных вопросов. Если стример ответил на 2 вопроса или меньше, он получает -3 к следующему броску кубика для переода по секторам, 3 - -2, 4  - -1, 5 - +1, 6 - +2, 7 - +3. Правильный ответ на красный вопрос считается за два правильных ответа. На время ответов на вопросы чат у стримера переходит в смайл мод, а если какой-то мдератор или VIP-пользователь дает подсказку - ответ не засчитывается. Пользоваться любыми способами получения информации на время прохождения теста стримеру запрещено. Если один и тот же вопрос выпадает повторно, стример должен его реролльнуть.  Значение броска кубика не может быть больше 10 или =0. В противном случае этот эффект переносится на следующий бросок кубика.',
        'Извини что трахнул',
        'Помощь отстающему',
        'Удачный неудачник',
        'Аптечка',
        'Второй шанс',
        'А где это я?',
        'Ой, извините',
    ],
    effects: [
        'Читерский кубик',
        'Очки EZ',
        'Свиток реролла',
        'Шар всезнания',
        'Корона короля пресетов',
        'Ремонтный набор',
        'Красочная манга',
        'Святая карта "Юпитер"',
        'Мощный бросок',
        'Сорокалетний девственник',
        'Рокировочка',
        'Два по цене одного',
        'Удачный неудачник',
        'Аптечка',
        'Второй шанс',
        'Ой, извините',
    ],
    effectsDesc: [
        'Читерский кубик',
        'Очки EZ',
        'Свиток реролла',
        'Шар всезнания',
        'Корона короля пресетов',
        'Ремонтный набор',
        'Красочная манга',
        'Святая карта "Юпитер"',
        'Мощный бросок',
        'Сорокалетний девственник',
        'Рокировочка',
        'Два по цене одного',
        'Удачный неудачник',
        'Аптечка',
        'Второй шанс',
        'Ой, извините',
    ],
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
    streamers: [
        'MistaFaker',
        'Lasqa',
        'Liz0n',
        'Melharucos',
        'UselessMouth',
        'UncleBjorn',
    ],
    debuffs: [
        'Два по цене одного',
        'Повязка Рэмбо',
        'Взрывчатка',
        'Реверсивные сапоги',
        'Блудная косичка Бьерна',
        'Кубик хуюбика',
        'Руки крюки',
        'Грязнулькин',
        'Слабый бросок',
        'Все херня, давай по новой',
        'Благотворительность',
        'Извини что трахнул',
    ],
    debuffsDesc: [
        'Два по цене одного',
        'Повязка Рэмбо',
        'Взрывчатка',
        'Реверсивные сапоги',
        'Блудная косичка Бьерна',
        'Кубик хуюбика',
        'Руки крюки',
        'Грязнулькин',
        'Слабый бросок',
        'Все херня, давай по новой',
        'Благотворительность',
        'Извини что трахнул',
    ]
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
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

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            [
            ],
            isDefault
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
            streamers: [
                new PresetAll(),
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
            result = '../hpg-inventory/images/0' + ('0' + (index+51 + offset)).slice(-2) + '.png';
            break;
        case "effects":
            result = '../hpg-inventory/images/0' + ('0' + (index+1 + offset)).slice(-2) + '.png';
            break;

        case "debuffs":
            const mapping = [
                12,
                58,
                52,
                59,
                51,
                55,
                69,
                74,
                68,
                76,
                83,
                85
            ];
            result = '../hpg-inventory/images/0' + ('0' + (mapping[index])).slice(-2) + '.png';
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

        case "streamers":
            result = '../images/streamers/'+ dataSets[currentDataSet][index] +'.png';
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
        ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 54],
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        'videos/best Chika meme ever   anime characters in Chika dance MV.mp4',
        'videos/Music make you lose control triangle.mp4',
        'videos/01.mp4',
        'videos/02.mp4',
        'videos/03.mp4',
        'videos/04.mp4',
        'videos/05.mp4',
        'videos/06.mp4',
        'videos/07.mp4',
        'videos/08.mp4',
        'videos/09.mp4',
        'videos/10.mp4',
        'videos/11.mp4',
        ['videos/12.mp4', 40],
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
        ['videos/24.mp4', 129],
        'videos/25.mp4',
        ['videos/26.mp4', 5],
        ['videos/27.mp4'],
        ['videos/28.mp4', 30],
        'videos/29.mp4',
        ['videos/30.mp4', 80],
        ['videos/31.mp4', 143],
        ['videos/32.mp4', 55],
        'videos/33.mp4',
        'videos/34.mp4',
        'videos/36.mp4',
        ['videos/37.mp4', 120],
        ['videos/38.mp4', 4],
        'videos/39.mp4',
        ['videos/40.mp4', 61],
    ]);
};

const image = document.querySelector('#item-image img');
const descriptionName = document.querySelector('#item-description-name');
const descriptionText = document.querySelector('#item-description-text');
p5Instance.onSelectItem = function(data, selectedKey) {
    if (dataSets[currentDataSet]) {
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey]));

        if(dataSets[`${currentDataSet}Desc`]?.length > 0 && dataSets[`${currentDataSet}Desc`]?.length !== dataSets[currentDataSet]?.length) console.error(`Количество элементов описания не соответствует количеству элементов названий, нужно проверить количество строк в ${currentDataSet} и ${currentDataSet}Desc и сделать их равными`)
        if(dataSets[`${currentDataSet}Desc`]?.length > 0 && dataSets[`${currentDataSet}Desc`]?.length === dataSets[currentDataSet]?.length) {
            descriptionName.textContent = dataSets[currentDataSet][dataSets[currentDataSet].indexOf(data[selectedKey])];
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
    openDesc = document.querySelector('#item-description-open')
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
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
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        currentDataSet = this.value;

        if (this.value === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());
            editButton.removeAttribute('disabled');
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.setAttribute('disabled', 'disabled');
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}
