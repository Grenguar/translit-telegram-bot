const expect = require('chai').expect;
const translator = require('../translator.js');

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
