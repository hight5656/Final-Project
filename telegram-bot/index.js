require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = 3100;

// Налаштування CORS
app.use(cors());
app.use(bodyParser.json()); // Для обробки JSON-даних

// Токен вашого бота
const bot = new TelegramBot(process.env.BOT_API_KEY, { polling: true });

// Введіть ваш chat_id
const CHAT_ID = '453201089'; // Замініть на ваш chat_id

// Обробка запиту на checkout
app.post('/checkout', (req, res) => {
 
  const { items, totalPrice, currency, userId, userFirstName, userLastName } = req.body;

  const message = `Congratulations on Your Order, ${userFirstName} ${userLastName}!\n\nYour Order Details:\n${items.map(item => `- ${item.name}: ${item.quantity} x ${item.price}$`).join('\n')}\n\nTotal Price: ${totalPrice}$`;
  // Відправка повідомлення в чат
  bot.sendMessage(CHAT_ID, message)
    .then(() => {
      res.status(200).json({ success: true, message: 'Order sent to Telegram chat' });
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      res.status(500).json({ success: false, message: 'Failed to send order' });
    });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
