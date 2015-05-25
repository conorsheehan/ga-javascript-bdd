var cubeCalculator = (function() {
    return {
        getSurfaceArea: function(sideLength) {
            var sideArea = sideLength * sideLength;
            var numberOfSides = 6;
            return sideArea * numberOfSides;
        }
    };
})();
