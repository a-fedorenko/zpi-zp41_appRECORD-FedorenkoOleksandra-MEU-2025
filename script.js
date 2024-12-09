const labList = {
    '1.1': {
        'Опис предметного середовища': './laba_1.1/about.html',
        'Тема. Мета. Місце розташування сайту та звіту': './laba_1.1/links.html',
        'Структура докумета': './laba_1.1/str.html',
        'HTML-код таблиць': './laba_1.1/table.html',
        'HTML-код списку': './laba_1.1/list.html',
        'HTML-код зображення': './laba_1.1/img.html',
        'Висновки': ''
    },
    '1.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_1.2/links.html',
        'Способи підключення стилів': '',
        'Селектори': '',
        'Селектор тегу': '',
        'Селектор класу': '',
        'Селектор ідентифікатор': '',
        'Інші селектори': '',
        'Самостійна робота №2': ''
    },
    '2.1': {
        'Тема. Мета. Місце розташування сайту та звіту': 'links.html',
        'Завдання №1 Зовнішній вигляд макету. Код макету': '',
        'Завдання №2': '',
        'Фіксована таблична верстка': '',
        'Гумова таблична верстка': '',
        'Завдання №3 Flexbox': '',
        'Скріншот сторінки (Flexbox)': '',
        'HTML-код (Flexbox)': '',
        'CSS-код (Flexbox)': '',
        'Висновки': ''
    }
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