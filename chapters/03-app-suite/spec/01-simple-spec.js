describe('Simple App', function() {

    xit('can assign a value for foo', function() {
        var value = 5;

        simpleApp.initialize();
        simpleApp.setFoo(value);

        expect(
            simpleApp.getFoo()
        ).toEqual(value);
    });



    xit('initializes foo without a value', function() {
        simpleApp.initialize();

        expect(
            simpleApp.getFoo()
        ).toBeNull();
    });



    xit('holds separate values for foo and bar', function() {
        var foo = 10;
        var bar = 20;

        simpleApp.initialize();
        simpleApp.setFoo(foo);
        simpleApp.setBar(bar);

        expect(
            simpleApp.getFoo()
        ).not.toEqual(
            simpleApp.getBar()
        );
    });



    xit('knows if foo is positive', function() {
        var foo = 10;

        simpleApp.initialize();
        simpleApp.setFoo(foo);

        expect(
            simpleApp.fooIsPositive()
        ).toBe(true);
    });



    xit('knows if foo is not positive', function() {
        var foo = -10;

        simpleApp.initialize();
        simpleApp.setFoo(foo);

        expect(
            simpleApp.fooIsPositive()
        ).toBe(false);
    });



    xit('can get the square root of foo', function() {
        var foo = 33;
        var expectedOutput = 5.74;
        var output;

        simpleApp.initialize();
        simpleApp.setFoo(foo);

        output = simpleApp.getSquareRootOfFoo(foo);

        expect(output).toBeCloseTo(expectedOutput);
        expect(output).not.toBeCloseTo(5.7);
    });



    xit('can modify foo and bar', function() {
        simpleApp.initialize();
        simpleApp.setFoo(10);
        simpleApp.setBar(15);

        expect(
            simpleApp.getFoo()
        ).toBeLessThan(
            simpleApp.getBar()
        );

        simpleApp.setBar(5);

        expect(
            simpleApp.getFoo()
        ).toBeGreaterThan(
            simpleApp.getBar()
        );
    });



    xit('knows its local variable names', function() {
        var varNames;
        simpleApp.initialize();

        varNames = simpleApp.getLocalVarNames();

        expect(varNames).toContain('foo');
        expect(varNames).toContain('bar');
        expect(varNames).not.toContain('baz');
    });
});
