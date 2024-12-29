const labList = {
    '1.1': {
        'Опис предметного середовища': './laba_1.1/about.html',
        'Тема. Мета. Місце розташування сайту та звіту': './laba_1.1/links.html',
        'Структура докумета': './laba_1.1/str.html',
        'HTML-код таблиць': './laba_1.1/table.html',
        'HTML-код списку': './laba_1.1/list.html',
        'HTML-код зображення': './laba_1.1/img.html',
        'Висновки': './laba_1.1/concl.html'
    },
    '1.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_1.2/links.html',
        'Способи підключення стилів': './laba_1.2/styles.html',
        'Селектор тегу': './laba_1.2/selectors_tag.html',
        'Селектор класу': './laba_1.2/selectors_class.html',
        'Селектор ідентифікатор': './laba_1.2/selectors_ind.html',
        'Інші селектори': './laba_1.2/selectors_others.html',
        'Шрифт. Google Fonts': './laba_1.2/fonts.html',
        'CSS: Таблиці. Фон. Списки': './laba_1.2/fonts_2.html',
        'CSS: Просунутий': './laba_1.2/fonts_3.html',
        'Висновки': './laba_1.2/concl.html'
    },
    '2.1': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_2.1/links.html',
        'Завдання №1 Зовнішній вигляд макету. Код макету': './laba_2.1/layout.html',
        'Завдання №2 Фіксована таблична верстка': '',
        'Завдання №2 Гумова таблична верстка': '',
        'Завдання №3 Скріншот сторінки (Flexbox)': './laba_2.1/layout_flexbox_01.html',
        'Завдання №3 HTML-код (Flexbox)': './laba_2.1/layout_flexbox_02.html',
        'Завдання №3 CSS-код (Flexbox)': './laba_2.1/layout_flexbox_03.html',
        'Висновки': './laba_2.1/concl.html'
    },
    '2.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_2.2/links.html',
        'Адаптивна верстка. Десктоп версія': '',
        'Адаптивна верстка. Планшетна версія': '',
        'Адаптивна верстка. Мобільна версія': '',
        'Створення верстки для різних девайсів': '',
        'Висновки': './laba_2.2/concl.html'
    },
    '3.1': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_3.1/links.html',
        'Завдання №1': './laba_3.1/task1.html',
        'Завдання №2': './laba_3.1/task2.html',
        'Завдання №3': './laba_3.1/task3.html',
        'Завдання №4': './laba_3.1/task4.html',
        'Завдання №5': './laba_3.1/task5.html',
        'Висновки': './laba_3.1/concl.html'
    },
    '3.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_3.2/links.html',
        'Завдання №1': '',
        'Завдання №2': '',
        'Завдання №3': '',
        'Завдання №4': '',
        'Завдання №5': '',
        'Висновки': './laba_3.2/concl.html'
    },
};

let sidebarList = {};

document.querySelector('.navigation-list').addEventListener('click', function (e) {
    addSidebarList(e.target);
    initFirstSidebarItem();
});

document.querySelector('.sidebar-list').addEventListener('click', function (e) {
    addContent(e.target);
});

function addActiveClassForNavigation(element) {
    const navigationItems = document.querySelectorAll('.navigation-item');
    navigationItems.forEach((elem) => elem.classList.remove('active'));
    if (Array.from(navigationItems).find((item) => item === element)) {
        element.classList.add('active');
    }
}

function addActiveClassForSidebar(element) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach((elem) => elem.classList.remove('active'));
    
    if (Array.from(sidebarItems).find((item) => item === element)) {
        element.classList.add('active');
    }
}

function initFirstNavigationItem() {
    const navigationItem = document.querySelector('.navigation-item');
    addSidebarList(navigationItem);
}

function initFirstSidebarItem() {
    const sidebarItem = document.querySelector('.sidebar-item');
    addContent(sidebarItem);
}

function addSidebarList(element) {
    const sidebar = document.querySelector('.sidebar-list');
    sidebar.innerHTML = '';
    sidebarList = labList[Object.keys(labList).find((item) => element.innerHTML.includes(item))];
    Object.keys(sidebarList).forEach(element => {
        let liItem = document.createElement('li');
        liItem.innerHTML = element;
        liItem.classList.add('sidebar-item');
        sidebar.appendChild(liItem);
    });
    addActiveClassForNavigation(element);
}

function addContent(element) {
    const content = document.querySelector('.content_lab');
    content.innerHTML = `<iframe style="width: 100%; height: 100%;" src="${sidebarList[element.innerHTML]}" frameborder="0">`;
    addActiveClassForSidebar(element);
}

initFirstNavigationItem();
initFirstSidebarItem();

//3.1
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(8, 100));
// console.log(makeTransaction(10, 70.5));

function checkForSpam(message) {
    const result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    return result;
}

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
        }
    }
    return filteredNumbers;
}

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

function generateArray() {
    //Отримуємо і перевіряємо введене значення
    const size = getSize();
    console.log(size);
    if (!size) {
        return;
    }

    // Генеруємо масив випадкових чисел
    const array = [];
    for (let i = 0; i < size; i++) {
        const val = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        array.push(val);
    }

    return array;
}

function getSize() {
    let size = parseInt(window.prompt('Enter number of elements in array'));

    if (isNaN(size) || size <= 0) {
        const isEnter = window.confirm('Enter correct number of elements in array. Do you want to try again?');
        if (isEnter) {
            return getSize();
        } else {
            return;
        }
    }

    console.log(parseInt(size));

    return size;
}

function findMinAndMaxValues(array) {
    // Розділяємо елементи на парні та непарні індекси
    const evenIndices = array.filter((_, index) => index % 2 === 0);
    const oddIndices = array.filter((_, index) => index % 2 !== 0);

    // Знаходимо максимум та мінімум
    const evenMax = Math.max(...evenIndices);
    const evenMin = Math.min(...evenIndices);
    const oddMax = Math.max(...oddIndices);
    const oddMin = Math.min(...oddIndices);

    // Виводимо результати
    window.alert(`
        Масив: ${array.join(', ')}
        Максимальне (парні індекси): ${evenMax}
        Мінімальне (парні індекси): ${evenMin}
        Максимальне (непарні індекси): ${oddMax}
        Мінімальне (непарні індекси): ${oddMin}
    `);
}

function main() {
    const array = generateArray();

    if (!array) {
        return;
    }

    findMinAndMaxValues(array);
}

//main();

function sortArray(arr) {
    const originalArray = [...arr];

    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    
    return `Вхідний масив: ${originalArray.join(', ')}
Відсортований масив (зменшення): ${arr.join(', ')}`;
}

// console.log(sortArray([2, 3, 1, 8, 4, 5, 7, 6]));
// console.log(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1]));