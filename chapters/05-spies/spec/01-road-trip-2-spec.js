xdescribe('The Road Trip App', function() {

    it('connects to the Maps API when it starts', function() {

        spyOn(roadTripApp2.maps, 'connect');

        roadTripApp2.initialize();

        expect(
            roadTripApp2.maps.connect
        ).toHaveBeenCalled();
    });

});

xdescribe('The Road Trip App', function() {
    var startCity;
    var endCity;

    beforeEach(function() {
        startCity = 'Boston';
        endCity = 'Detroit';

        roadTripApp2.initialize();
    });



    it('can use the Maps API to get the distance from start city and end city', function() {

        spyOn(roadTripApp2.maps, 'calculateDistance');

        roadTripApp2.setOriginAndDestination(startCity, endCity);

        expect(
            roadTripApp2.maps.calculateDistance.calls.count()
        ).toEqual(1);

        expect(
            roadTripApp2.maps.calculateDistance
        ).toHaveBeenCalledWith(startCity, endCity);
    });



    it('can use a start city and end city rather than a distance in miles', function() {
        var expectedDistance = 707;

        spyOn(roadTripApp2.maps, 'calculateDistance').and.returnValue(
            expectedDistance
        );

        roadTripApp2.setOriginAndDestination(startCity, endCity);

        expect(roadTripApp2.getDistance()).toEqual(expectedDistance);
    });



    it('can get the total cost per passenger from Boston to Detroit', function() {
        var numberOfPassengers = 3;
        var fuelEconomy = 30;
        var fuelPrice = 2.5;
        var hotel1Price = 100;
        var expectedCostPerPerson = 52.97;

        spyOn(roadTripApp2.maps, 'calculateDistance').and.returnValue(707);

        roadTripApp2.initialize();
        roadTripApp2.setTripDetails({
            numberOfPassengers: numberOfPassengers,
            fuelEconomy: fuelEconomy,
            fuelPrice: fuelPrice
        });
        roadTripApp2.addHotel(hotel1Price);
        roadTripApp2.setOriginAndDestination(startCity, endCity);

        expect(
            roadTripApp2.getTotalCost(true)
        ).toBeCloseTo(
            expectedCostPerPerson
        );
    });
});
