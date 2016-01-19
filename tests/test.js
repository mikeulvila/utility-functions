var expect = require('chai').expect;

describe('Mocha and Chai', function () {
  it('truthyness', function () {
    expect(true).to.be.true;
  });
});
it('arrays have length', function (done) {
  var array = [1,2,3];
  setTimeout(function () {
    expect(array.length).to.exist;
    done();
  }, 1000);
  });

describe('hello world module', function () {
  it('hello should return world', function () {
    var hello = require('../helloWorld');
    expect(hello()).to.equal('world');
  });
});

describe('utility functions', function () {
  describe('range', function () {
    var range = require('../range.js');
    it('range should output an array', function () {
      expect(range()).to.be.an('array');
    });

    it('array be the length passed as the argument', function () {
      expect(range(0)).to.have.length(0);
      expect(range(1)).to.have.length(1);
      expect(range(100)).to.have.length(100);

    });

    it('should return an array range', function () {
      expect(range(3)).to.eql([0,1,2]);
      expect(range(5)).to.eql([0,1,2,3,4]);
    });

    it('should return an array range', function () {
     expect(range(3, 5)).to.eql([3,4]);
     expect(range(4, 9)).to.eql([4,5,6,7,8]);
    });

  });




});