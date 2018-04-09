const expect = require('chai').expect;
const transliterator = require('../transliterator.js');
const dictionary = require('../dictionary.json');

describe('test suite for transliterator.js', function () {

  describe('test transliterateRuToEn()', function() {
      let string1 = "привет";
      let string2 = "Щелкунчик";
      let string3 = "ЯчМень";
      let resultPrivet = "privet";
      let resultSchelk = "Shchelkunchik";
      let resultYacmen = "IachMen'";
      const dict = dictionary.ru_en;

      it('should return privet', function () {
          let translate = transliterator.transliterateRuToEn(string1, dict);
          expect(translate).to.be.equal(resultPrivet);
      });

      it('should return Shchelkunchik', function () {
          let translate = transliterator.transliterateRuToEn(string2, dict);
          expect(translate).to.be.equal(resultSchelk);
      });

      it('should return IachMen', function () {
          let translate = transliterator.transliterateRuToEn(string3, dict);
          expect(translate).to.be.equal(resultYacmen);
      });

  });

    describe('test isEnglish()', function() {
        let string1 = "hello";
        let string2 = "Щелкунчик";
        let stringMixed = "ЯчHello";

        it('should return true', function () {
            let isEng = transliterator.isEnglish(string1);
            expect(isEng).to.be.equal(true);
        });

        it('should return false', function () {
            let isEng = transliterator.isEnglish(string2);
            expect(isEng).to.be.equal(false);
        });

        it('should return true? (mixed string)', function () {
            let isEng = transliterator.isEnglish(stringMixed);
            expect(isEng).to.be.equal(true);
        });

    });

    describe('test transliterateEnToRu()', function() {
        const dict = dictionary.en_ru;

        it('should Shchelkunchik -> Щeлкунчик', function () {
            let string1 = "Shchelkunchik";
            let result1 = "Щелкунчик";
            let translateEnToRu = transliterator.transliterateEnToRu(string1, dict);
            expect(translateEnToRu).to.be.equal(result1);
        });

        it('should IachMen\' -> ЯчМень', function () {
            let string2 = "IachMen'";
            let result2 = "ЯчМень";
            let translateEnToRu = transliterator.transliterateEnToRu(string2, dict);
            expect(translateEnToRu).to.be.equal(result2);
        });

        it('should Kak obstanovka? -> Как обстановка?', function () {
            let string3 = "Kak obstanovka?";
            let result3 = "Как обстановка?";
            let translateEnToRu = transliterator.transliterateEnToRu(string3, dict);
            expect(translateEnToRu).to.be.equal(result3);
        });

        it('should V ocheredi za matcha latte -> В очереди за матча латте', function () {
            let string4 = "V ocheredi za matcha latte";
            let result4 = "В очереди за матча латте";
            let translateEnToRu = transliterator.transliterateEnToRu(string4, dict);
            expect(translateEnToRu).to.be.equal(result4);
        });
    });

    describe('test transliterate()', function () {
        it('should transliterate Rus -> Eng', function () {
            let string1 = "Как обстановка?";
            let result1 = "Kak obstanovka?";
            let transliterateString = transliterator.transliterate(string1);
            expect(transliterateString).to.be.equal(result1);
        });
        it('should transliterate Eng -> Rus', function () {
            let string1 = "Shchelkunchik";
            let result1 = "Щелкунчик";
            let transliterateString = transliterator.transliterate(string1);
            expect(transliterateString).to.be.equal(result1);
        });
    });


});
