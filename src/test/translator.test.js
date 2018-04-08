const expect = require('chai').expect;
const translator = require('../translator.js');

describe('test suite for translator.js', function () {
  describe('test isExist()', function () {
      var undef = undefined;
      var defined = "someValue";
      var trueResult = true;
      var falseResult = false;

      it('should return false', function () {
          var isExist = translator.isExist(undef);
          expect(isExist).to.be.equal(falseResult);
      });
      
      it('should return true', function () {
          var isExist = translator.isExist(defined);
          expect(isExist).to.be.equal(trueResult);
      });
  });

  describe('test translateRuToEn()', function() {
      var string1 = "привет";
      var string2 = "Щелкунчик";
      var string3 = "ЯчМень";
      var resultPrivet = "privet";
      var resultSchelk = "Shchelkunchik";
      var resultYacmen = "IachMen'";
      const dict = require("../dictionary.json").ru_en;

      it('should return privet', function () {
          var translate = translator.translateRuToEn(string1, dict);
          expect(translate).to.be.equal(resultPrivet);
      });

      it('should return Shchelkunchik', function () {
          var translate = translator.translateRuToEn(string2, dict);
          expect(translate).to.be.equal(resultSchelk);
      });

      it('should return IachMen', function () {
          var translate = translator.translateRuToEn(string3, dict);
          expect(translate).to.be.equal(resultYacmen);
      });

  });
});
