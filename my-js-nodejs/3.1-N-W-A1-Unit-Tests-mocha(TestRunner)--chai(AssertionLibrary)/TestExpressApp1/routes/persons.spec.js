
var assert = require('assert');

describe('cls1', function () {

  describe('.func1()', function () {

    before(function () {
      // runs before all tests in this block
    });

    after(function () {
      // runs after all tests in this block
    });

    beforeEach(function () {
      // runs before each test in this block
    });

    afterEach(function () {
      // runs after each test in this block
    });



    it('should return -1 when the value is not present', function () {

      assert.equal(

        [1, 2, 3].indexOf(4),

        -1


      );
    });

    it('should return -1 when the value is not present', function () {

      assert.equal(

        [1, 2, 3].indexOf(4),

        -1


      );
    });


  });


  describe('.func2()', function () {


    it('should return -1 when the value is not present', function () {

      assert.equal(

        [1, 2, 3].indexOf(4),

        -1


      );
    });

    it('should return -1 when the value is not present', function () {

      assert.equal(

        [1, 2, 3].indexOf(4),

        -1


      );
    });


  });


});
