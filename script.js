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
        'Завдання №3 Flexbox': '',
        'Завдання №3 Скріншот сторінки (Flexbox)': '',
        'Завдання №3 HTML-код (Flexbox)': '',
        'Завдання №3 CSS-код (Flexbox)': '',
        'Висновки': ''
    },
    '2.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_2.2/links.html',
        'Адаптивна верстка. Десктоп версія': '',
        'Адаптивна верстка. Планшетна версія': '',
        'Адаптивна верстка. Мобільна версія': '',
        'Створення верстки для різних девайсів': '',
        'Висновки': ''
    },
    '3.1': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_3.1/links.html',
        'Завдання №1': '',
        'Завдання №2': '',
        'Завдання №3': '',
        'Завдання №4': '',
        'Завдання №5': '',
        'Висновки': ''
    },
    '3.2': {
        'Тема. Мета. Місце розташування сайту та звіту': './laba_3.2/links.html',
        'Завдання №1': '',
        'Завдання №2': '',
        'Завдання №3': '',
        'Завдання №4': '',
        'Завдання №5': '',
        'Висновки': ''
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