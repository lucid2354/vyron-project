# VYRON PIT

Сайт-визитка бренда VYRON PIT: Made by German Technology. Статический сайт, сборка не нужна.

## Структура
- `index.html` — разметка и мета-теги (SEO, Open Graph)
- `style.css` — стили
- `script.js` — слайдер, галерея, переключатель языка и тексты EN/RU (словарь `L`)
- `images/` — фото упаковки (перед, бока, зад, крышка)
- `favicon.svg`, `robots.txt`, `sitemap.xml`
- `og-preview.jpg` — превью для соцсетей (1200×630), лежит в корне, не в этом архиве

## Домен
Адрес `https://www.vyronpit.com/` прописан в `index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt` и `sitemap.xml`. Если домен изменится, поменять его во всех четырёх местах.

## Новый язык
В `script.js` скопировать объект `RU` в словаре `L`, перевести значения, добавить кнопку `<button data-l="xx">` в `index.html`.
