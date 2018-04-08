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
          expect(isExist).to.be.equal(falseResult);
      });

      it('should return true', function () {
          let isExist = translator.isExist(defined);
          expect(isExist).to.be.equal(trueResult);
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
});
