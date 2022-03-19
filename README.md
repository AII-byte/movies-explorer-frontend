# movies-explorer-frontend

[ссылка на макет](https://disk.yandex.ru/d/A3NTtq53ucUboQ)
[ссылка на бекенд](https://api.aii.nomoredomains.work)
[ссылка на фронтенд](https://aii.nomoredomains.work/)



 Вы также можете запустить проект локально(параллельно в терминале VS)
    [1)]  Клонировать бекенд: git clone --branch level-1 https://github.com/AII-byte/movies-explorer-api.git
    [2)]  Установить пакет зависимостей: npm  i
    [3)]  Запустить бекенд: npm start
    [4)]  Клонировать фронтенд: git clone --branch level-3 https://github.com/AII-byte/movies-explorer-frontend.git
    [5)]  Установить пакет зависимостей: npm  i
    [6)]  В utils/MainApi.js в конце файла раскомментировать 3000-ый порт, и закомментировать домен
    [7)] Добаваить в package.json после "browserslist":   "proxy": "http://localhost:3000/"
    [8)]  npm start
