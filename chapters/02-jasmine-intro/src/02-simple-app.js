var simpleApp = (function() {
    var foo;
    var bar;
    var localVarNames = ['foo', 'bar'];

    return {
        initialize: function() {
            foo = null;
            bar = null;
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
