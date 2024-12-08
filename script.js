const labList = {
    '1.1': {
        'Опис предметного середовища': 'about.html',
        'Тема. Мета. Місце розташування сайту та звіту': 'links.html',
        'Структура докумета': 'str.html',
        'HTML-код таблиць': 'table.html',
        'HTML-код списку': 'list.html',
        'HTML-код зображення': 'img.html',
        'Висновки': ''
    },
    '1.2': {
        'Тема. Мета. Місце розташування сайту та звіту': 'links.html',
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
});

document.querySelector('.sidebar-list').addEventListener('click', function (e) {
    addContent(e.target);
});

function addSidebarList(element) {
    const sidebar = document.querySelector('.sidebar-list');
    sidebar.innerHTML = '';
    sidebarList = labList[Object.keys(labList).find((item) => element.innerHTML.includes(item))];
    Object.keys(sidebarList).forEach(element => {
        let liItem = document.createElement('li');
        liItem.innerHTML = element;
        sidebar.appendChild(liItem);
    });
}

function addContent(element) {
    const content = document.querySelector('.content_lab');
    content.innerHTML = `<iframe style="width: 100%; height: 100%;" src="./laba_1.1/${sidebarList[element.innerHTML]}" frameborder="0">`;
}