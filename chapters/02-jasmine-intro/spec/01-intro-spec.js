describe('A suite', function() {

    it('validates truthiness', function() {
        expect(true).toBe(true);
    });
});





describe('A suite', function() {

    var isHotOut = true;

    it('is a function with scope', function() {
        expect(isHotOut).toBe(true);
    });



    it('can have multiple specs', function() {
        var city = "Boston"
        expect(city).toEqual("Boston");
    });



    it('can check for negatives', function() {
        isHotOut = false;
        expect(isHotOut).not.toBe(true);
    });



    it('can compare objects', function() {
        var foo = {
            a: 15,
            b: 20
        };
        var bar = {
            a: 15,
            b: 20
        }
        var baz = {
            a: 20,
            b: 15
        }
        expect(foo).toEqual(bar);
        expect(foo).not.toEqual(baz);
    });
});