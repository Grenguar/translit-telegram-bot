function isExist(value) {
    return value ? true : false;
}

function translateRuToEn(string, dictionary) {
    let originalStringArray = string.split('');
    let finalArray = [];
    let i, ch;

    for (i in originalStringArray) {
        ch = originalStringArray[i];
        if (isExist(dictionary[ch])) {
            ch = dictionary[ch];
        }
    }

    return finalArray;
}

module.exports.translateRuToEn = translateRuToEn;
module.exports.isExist = isExist;
