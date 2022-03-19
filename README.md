# movies-explorer-frontend

[ссылка на макет](https://disk.yandex.ru/d/A3NTtq53ucUboQ)
[ссылка на бекенд] https://api.aii.nomoredomains.work
[ссылка на фронтенд] https://aii.nomoredomains.work/



 Вы также можете запустить проект локально(параллельно в терминале VS)
    1) Клонировать бек: git clone --branch level-1 https://github.com/AII-byte/movies-explorer-api.git
    2)Установить пакет зависимостей: npm install
    3)Запустить бек: npm start
    4)  Клонировать фронт: git clone --branch level-3 https://github.com/AII-byte/movies-explorer-frontend.git
    5) npm install + в utils/MainApi.js раскомментировать 3000-ый порт, закомментировать домен на первых двух строчках
    6) Добаваить в package.json после "browserslist":   "proxy": "http://localhost:3000/"
    7) npm start
