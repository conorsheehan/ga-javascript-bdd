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



    it('can also check for negatives', function() {
        isHotOut = false;
        expect(isHotOut).not.toBe(true);
    });
});
