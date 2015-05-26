describe('Cube Calculator', function() {
    xit('calculates the surface area of a 10m cube', function() {
        var sideLength = 10;
        var surfaceArea = 600;
        expect(
            cubeCalculator.getSurfaceArea(sideLength)
        ).toEqual(surfaceArea);
    });

    xit('calculates the surface area of a 3m cube', function() {
        var sideLength = 3;
        var surfaceArea = 54;
        expect(
            cubeCalculator.getSurfaceArea(sideLength)
        ).toEqual(surfaceArea);
    });

    xit('calculates the surface area of a 3m cube with a missing side', function() {
        var sideLength = 3;
        var numberOfSides = 5;
        var surfaceArea = 45;
        expect(
            cubeCalculator.getSurfaceArea(sideLength, numberOfSides)
        ).toEqual(surfaceArea);
    });
});
