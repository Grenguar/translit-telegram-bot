const expect = require('chai').expect;
const translator = require('../translator.js');
const dictionary = require('../dictionary.json');

describe('test suite for translator.js', function () {
  describe('test isExist()', function () {
      let undef = undefined;
      let defined = "someValue";
      let trueResult = true;
      let falseResult = false;

      it('should return false', function () {
          let isExist = translator.isExist(undef);
          expect(isExist).to.be.equal(false);
      });

      it('should return true', function () {
          let isExist = translator.isExist(defined);
          expect(isExist).to.be.equal(true);
      });
  });

  describe('test translateRuToEn()', function() {
      let string1 = "привет";
      let string2 = "Щелкунчик";
      let string3 = "ЯчМень";
      let resultPrivet = "privet";
      let resultSchelk = "Shchelkunchik";
      let resultYacmen = "IachMen'";
      const dict = dictionary.ru_en;

      it('should return privet', function () {
          let translate = translator.translateRuToEn(string1, dict);
          expect(translate).to.be.equal(resultPrivet);
      });

      it('should return Shchelkunchik', function () {
          let translate = translator.translateRuToEn(string2, dict);
          expect(translate).to.be.equal(resultSchelk);
      });

      it('should return IachMen', function () {
          let translate = translator.translateRuToEn(string3, dict);
          expect(translate).to.be.equal(resultYacmen);
      });

  });

    describe('test isEnglish()', function() {
        let string1 = "hello";
        let string2 = "Щелкунчик";
        let stringMixed = "ЯчHello";

        it('should return true', function () {
            let isEng = translator.isEnglish(string1);
            expect(isEng).to.be.equal(true);
        });

        it('should return false', function () {
            let isEng = translator.isEnglish(string2);
            expect(isEng).to.be.equal(false);
        });

        it('should return true? (mixed string)', function () {
            let isEng = translator.isEnglish(stringMixed);
            expect(isEng).to.be.equal(true);
        });

    });

    describe('test translateEnToRu()', function() {

        let string1 = "Shchelkunchik";
        let result1 = "Щелкунчик";
        let string2 = "IachMen'";
        let result2 = "ЯчМень";
        let string3 = "Kak obstanovka?";
        let result3 = "Как обстановка?";
        let string4 = "V ocheredi za matcha latte";
        let result4 = "В очереди за матча латте";
        const dict = dictionary.en_ru;

        it('should return - Щeлкунчик', function () {
            let translateEnToRu = translator.translateEnToRu(string1, dict);
            expect(translateEnToRu).to.be.equal(result1);
        });

        it('should return ЯчМень', function () {
            let translateEnToRu = translator.translateEnToRu(string2, dict);
            expect(translateEnToRu).to.be.equal(result2);
        });

        it('should return - Как обстановка?', function () {
            let translateEnToRu = translator.translateEnToRu(string3, dict);
            expect(translateEnToRu).to.be.equal(result3);
        });

        it('should return - В очереди за матча латте', function () {
            let translateEnToRu = translator.translateEnToRu(string4, dict);
            expect(translateEnToRu).to.be.equal(result4);
        });


    });


});
