require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const transliterator = require('./transliterator.js');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const transliteratedMessage = transliterator.transliterate(messageText);
  bot.sendMessage(chatId, transliteratedMessage);
});
