const expect = require('chai').expect;
const translator = require('../translator.js');

describe('testGetText()', function () {
  it('should add -some part', function () {

    // 1. ARRANGE
    var text = "text";
    var expectedResult = "text-some";
    // 2. ACT
    var getText = translator.getText(text);

    // 3. ASSERT
    expect(getText).to.be.equal(expectedResult);

  });
});
