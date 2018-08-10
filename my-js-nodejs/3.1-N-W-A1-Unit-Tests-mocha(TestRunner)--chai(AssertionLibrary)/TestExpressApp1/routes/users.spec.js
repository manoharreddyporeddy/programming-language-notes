
var assert = require('assert');
var expect = require('chai').expect

var usersObj = require('./users-helper.js');

describe('usersObj.sum', function () {


  it('should return 3 when sum 1,2', function () {
    expect(usersObj.sum(1, 2)).to.equal(3);
  });

  it('should return 3 when sum 1,-2', function () {
    expect(usersObj.sum(-1, -2)).to.equal(-3);
  });

  it('should return 3 when sum 0,0', function () {
    expect(usersObj.sum(0, 0)).to.equal(-0);
  });

  it('should return 3 when sum -1,2', function () {
    expect(usersObj.sum(-1, 2)).to.equal(1);
  });

  it('should return 3 when sum 1,0', function () {
    expect(usersObj.sum(1, 0)).to.equal(1);
  });

  it('should return 3 when sum 0,2', function () {
    expect(usersObj.sum(0, 2)).to.equal(2);
  });

  it('should return 3 when sum 1.2,3.2', function () {
    expect(usersObj.sum(1.2, 3.2)).to.equal(4.4);
  });

  it('should return 3 when sum 1.2,2', function () {
    expect(usersObj.sum(1.2, 2)).to.equal(3.2);
  });

  it('should return 3 when sum "1.2",2', function () {
    expect(usersObj.sum("1.2", 2)).to.equal('1.22');
  });

  it('should return 3 when sum "1.2","2":"', function () {
    expect(usersObj.sum("1.2", "2")).to.equal('1.22');
  });


});


  // var foo = 'bar'
  // var beverages = { tea: ['chai', 'matcha', 'oolong'] };
  // expect(foo).to.be.a('string');
  // expect(foo).to.have.lengthOf(3);
  // expect(beverages).to.have.property('tea').with.lengthOf(3);

