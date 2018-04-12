process.env["NTBA_FIX_319"] = 1;
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const transliterator = require('./transliterator.js');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const transliteratedMessage = transliterator.transliterate(messageText);
  bot.sendMessage(chatId, transliteratedMessage);
});

bot.on('inline_query', function (answer) {
    let queryText = answer.query;
    let transliteratedMessage = createNonEmptyMessage(queryText);
    let newMessageContent = {
        'message_text' : transliteratedMessage
    };
    let queryResult = {
        'id' : answer.id,
        'type' : 'article',
        'title' : transliteratedMessage,
        'input_message_content' : newMessageContent
    };
    bot.answerInlineQuery(answer.id, [queryResult]).catch((error) => {
        console.error(error.code);
    });
});

function createNonEmptyMessage(queryText) {
    const typingAdvice = "type any text/введи текст";
    return queryText === "" ? typingAdvice : transliterator.transliterate(queryText);
}

