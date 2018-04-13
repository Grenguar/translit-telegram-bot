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
    return word.replace(/Ch/g, dictionary['Ch'])
        .replace(/Ch/g, dictionary['Ch'])
        .replace(/Ia/g, dictionary['Ia'])
        .replace(/Ie/g, dictionary['Ie'])
        .replace(/Iu/g, dictionary['Iu'])
        .replace(/Je/g, dictionary['Je'])
        .replace(/Kh/g, dictionary['Kh'])
        .replace(/Shch/g, dictionary['Shch'])
        .replace(/Sh/g, dictionary['Sh'])
        .replace(/Ts/g, dictionary['Ts'])
        .replace(/Zh/g, dictionary['Zh'])
        .replace(/ch/g, dictionary['ch'])
        .replace(/ia/g, dictionary['ia'])
        .replace(/ie/g, dictionary['ie'])
        .replace(/iu/g, dictionary['iu'])
        .replace(/je/g, dictionary['je'])
        .replace(/kh/g, dictionary['kh'])
        .replace(/shch/g, dictionary['shch'])
        .replace(/sh/g, dictionary['sh'])
        .replace(/ts/g, dictionary['ts'])
        .replace(/zh/g, dictionary['zh']);
}

module.exports.transliterate = transliterate;
module.exports.isEnglish = isEnglish;
module.exports.transliterateRuToEn = transliterateRuToEn;
module.exports.transliterateEnToRu = transliterateEnToRu;