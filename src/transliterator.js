function transliterate(string) {
    const dictionary = require("./dictionary.json");
    return isEnglish(string) ? transliterateEnToRu(string, dictionary.en_ru)
        : transliterateRuToEn(string, dictionary.ru_en);
}

function isEnglish(string) {
    return /\w+/.test(string);
}

function transliterateRuToEn(string, dictionary) {
    return transliterateStringByLetter(string, dictionary).join('');
}

function transliterateStringByLetter(string, dictionary) {
    let array = [];
    string.split('').map(function(ch) {
        array.push(dictionary[ch] || ch);
    });
    return array;
}

function transliterateEnToRu(string, dictionary) {
    let finalArray = [];
    let tempWord = '';
    string.split(/\s+/).map(function(word) {
        tempWord = transliterateComplicatedRussianLetters(word, dictionary);
        tempWord = transliterateStringByLetter(tempWord, dictionary).join('');
        finalArray.push(tempWord);
    });
    return finalArray.join(' ');
}

function transliterateComplicatedRussianLetters(word, dictionary) {
    return Object.keys(dictionary).filter((key) => key.length > 1)
        .reduce((memo, key) => memo.replace(new RegExp(key, 'g'), dictionary[key]), word);
}

module.exports.transliterate = transliterate;
module.exports.isEnglish = isEnglish;
module.exports.transliterateRuToEn = transliterateRuToEn;
module.exports.transliterateEnToRu = transliterateEnToRu;
