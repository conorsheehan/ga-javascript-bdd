xdescribe('The Road Trip App', function() {

    beforeEach(function() {
        roadTripApp.initialize();
    });

    it('can assign a trip distance in miles', function() {
        var distance = 500;

        roadTripApp.setDistance(distance);

        expect(
            roadTripApp.getDistance()
        ).toEqual(distance);
    });



    it('defaults to a fuel economy of 30 mpg', function() {
        expect(
            roadTripApp.getFuelEconomy()
        ).toEqual(30);
    });



    it('defaults to a fuel price of $3/gallon', function() {
        expect(
            roadTripApp.getFuelPrice()
        ).toEqual(3);
    });

    xdescribe('given a multi-passenger road trip,', function() {
        var distance = 500;
        var numberOfPassengers = 3;
        var fuelEconomy = 40;
        var fuelPrice = 2.5;

        beforeEach(function() {
            roadTripApp.setTripDetails({
                distance: distance,
                numberOfPassengers: numberOfPassengers,
                fuelEconomy: fuelEconomy,
                fuelPrice: fuelPrice
            });
        });

        afterEach(function() {
            roadTripApp.setTripDetails({
                distance: 0,
                numberOfPassengers: 0,
                fuelEconomy: 0,
                fuelPrice: 0
            });
        });

        it('can get the total cost per passenger without hotels', function() {
            var expectedCostPerPerson = 10.42;

            expect(
                roadTripApp.getTotalCost(true)
            ).toBeCloseTo(
                expectedCostPerPerson
            );
        });



        it('can get the total cost per passenger with hotels', function() {
            var hotel1Price = 100;
            var hotel2Price = 150;
            var expectedCostPerPerson = 93.75;

            roadTripApp.addHotel(hotel1Price);
            roadTripApp.addHotel(hotel2Price);

            expect(
                roadTripApp.getTotalCost(true)
            ).toBeCloseTo(
                expectedCostPerPerson
            );
        });
    });
});
