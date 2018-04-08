function translateRuToEn(string, dictionary) {
    let finalArray = [];
    string.split('').map(function(ch) {
        finalArray.push(dictionary[ch] || ch);
    });
    return finalArray.join('').toString();
}

function isExist(value) {
    return !!value;
}

function translateEnToRu(string, dictionary) {
    let finalArray = [];
    string.split(/\s+/).map(function(word) {
        word = word.replace(/Ch/g, dictionary['Ch'])
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
        finalArray.push(word);
    });
    return finalArray.join(' ').toString();
}

function isEnglish(string) {
    return /\w+/.test(string);
}

module.exports.translateRuToEn = translateRuToEn;
module.exports.isExist = isExist;
module.exports.isEnglish = isEnglish;
module.exports.translateEnToRu = translateEnToRu;