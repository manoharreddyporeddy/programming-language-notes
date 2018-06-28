// ------------------------
// ------------------------
// spec.js (C:\my-js-jasmine-unit-testing\spec\support\spec.js)
describe("my suite of tests", function() {

  it("my test1", function() {
    var a = true;
    expect(a).toBe(true);
  });
  
  it("my square test", function() {
    var a = 5;
    expect(a*a).toBe(25);
  });
  
  it("my test on string concat", function() {
    var a = "hello";
    expect(a + " world").toBe("hello world");
  });
  
});
// ------------------------
// ------------------------
