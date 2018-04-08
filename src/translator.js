function translateRuToEn(string, dictionary) {
    let originalStringArray = string.split('');
    let finalArray = [];
    let i, ch;

    for (i in originalStringArray) {
        ch = originalStringArray[i];
        if (isExist(dictionary[ch])) {
            ch = dictionary[ch];
        }
        finalArray.push(ch);
    }
    return finalArray.join('').toString();
}

function isExist(value) {
    return !!value;
}

module.exports.translateRuToEn = translateRuToEn;
module.exports.isExist = isExist;
