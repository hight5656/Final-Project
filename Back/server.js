const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Виключення статичних файлів з-під лімітування
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));

// Middleware для парсингу JSON
app.use(bodyParser.json());
const windowMs = 15 * 60 * 1000; // 15 хвилин
const maxRequests = 15; // Максимум 25 запитів
const limiter = rateLimit({
    windowMs: windowMs, // 15 хвилин
    max: maxRequests  , // Максимум 25 запитів з одного IP за 15 хвилин
    handler: function (req, res) {
        res.status(429).sendFile(path.join(__dirname, 'public', 'rate-limit.html'));
    }
});

// Використання ліміту для всіх запитів, крім статичних файлів і /admin
app.use((req, res, next) => {
    if (
        req.path.startsWith('/admin') || 
        req.path.startsWith('/css') || 
        req.path.startsWith('/js') || 
        req.path.startsWith('/check-captcha') || 
        req.path.endsWith('.css') ||  
        req.path.endsWith('.js')
    ) {
        return next(); // Пропустити лімітування
    }
    limiter(req, res, next); // Застосувати лімітування для інших запитів
});

// Вказуємо шлях до скомпільованих файлів Angular
app.use(express.static(path.join(__dirname, 'browser')));

// Маршрут для перевірки CAPTCHA
app.post('/check-captcha', (req, res) => {
  
    res.json({ success: true });
    const ip = req.ip; // Отримуємо IP-адресу користувача

    // Скидаємо лічильник запитів для цього IP
    limiter.resetKey(ip); 
    
});

// Обробляємо всі запити та повертаємо 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'browser', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is starting...`);
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Open your application in the browser using the link above.`);
});
