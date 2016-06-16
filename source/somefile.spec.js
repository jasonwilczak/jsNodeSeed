var something = require('./somefile');

describe("something.someFunction",function(){
    it('returns 7',function(){
        expect(something.someFunction()).toBe(7);
    });
});