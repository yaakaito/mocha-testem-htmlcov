describe('Sample', function(){
  var a;
  beforeEach(function(){
    a = new A();
  });

  it('YES', function(){
    chai.expect(a.method(true)).to.equals('YES');
  })
});

