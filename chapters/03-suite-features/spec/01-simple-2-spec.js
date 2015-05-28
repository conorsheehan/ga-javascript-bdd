xdescribe('Simple App', function() {

    it('can assign a value for bar', function() {
        var bar = 5;

        simpleApp.initialize();
        simpleApp.setBar(bar);

        expect(
            simpleApp.getBar()
        ).toEqual(bar);
    });



    it('can assign a value for foo', function() {
        var foo = 10;

        simpleApp.initialize();
        simpleApp.setFoo(foo);

        expect(
            simpleApp.getFoo()
        ).toEqual(foo);
    });



    it('knows its local variable names', function() {
        var varNames;
        simpleApp.initialize();

        varNames = simpleApp.getLocalVarNames();

        expect(varNames).toContain('foo');
        expect(varNames).toContain('bar');
        expect(varNames).not.toContain('baz');
    });
});





describe('Simple App', function() {
    var app = simpleApp;

    beforeEach(function() {
        app.initialize();
    });



    it('can assign a value for bar', function() {
        var bar = 5;
        app.setBar(bar);

        expect(app.getBar()).toEqual(bar);
    });



    it('can assign a value for foo', function() {
        var foo = 10;
        app.setFoo(foo);

        expect(app.getFoo()).toEqual(foo);
    });



    it('starts foo as null', function() {
        expect(app.getFoo()).toBeNull();
    });



    it('knows its local variable names', function() {
        var varNames = app.getLocalVarNames();

        expect(varNames).toContain('foo');
        expect(varNames).toContain('bar');
        expect(varNames).not.toContain('baz');
    });



    describe('with foo and bar set to a person\'s name', function() {
        var firstName;
        var lastName;

        beforeEach(function() {
            firstName = 'Marty';
            lastName = 'McFly';
            app.setFoo(firstName);
            app.setBar(lastName);
        });

        afterEach(function() {
            app.setFoo(null);
            app.setBar(null);
        });

        it('knows the first name', function() {
            expect(app.getFoo()).toEqual(firstName);
        });

        it('knows the first name', function() {
            expect(app.getBar()).toEqual(lastName);
        });

        it('knows the full name', function() {
            var fullName = "MartyMcFly";
            expect(app.getFooBar()).toEqual(fullName);
        });
    })
});
