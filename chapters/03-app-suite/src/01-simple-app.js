var simpleApp = (function() {
    var foo;
    var bar;
    var localVarNames;

    return {
        initialize: function() {
            foo = null;
            bar = null;
            localVarNames = ['foo', 'bar'];
            return this;
        },

        setFoo: function(value) {
            foo = value;
            return this;
        },

        getFoo: function() {
            return foo;
        },

        setBar: function(value) {
            bar = value;
            return this;
        },

        getBar: function() {
            return bar;
        },

        getFooBar: function() {
            return foo + bar;
        },

        getLocalVarNames: function() {
            return localVarNames;
        },

        fooIsPositive: function() {
            if(foo > 0) {
                return true;
            } else {
                return false;
            }
        },

        getSquareRootOfFoo: function() {
            return Math.sqrt(foo);
        }
    };
})();
