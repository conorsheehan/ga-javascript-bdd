describe('The Road Trip App', function() {

    xit('can assign a trip distance in miles', function() {
        var distance = 500;

        roadTripApp.initialize();
        roadTripApp.setDistance(distance);

        expect(
            roadTripApp.getDistance()
        ).toEqual(distance);
    });



    xit('can assign a fuel economy in mpg', function() {
        var fuelEconomy = 26;

        roadTripApp.initialize();
        roadTripApp.setFuelEconomy(fuelEconomy);

        expect(
            roadTripApp.getFuelEconomy()
        ).toEqual(fuelEconomy);
    });



    xit('defaults to a fuel economy of 30 mpg', function() {
        var fuelEconomy = 30;

        roadTripApp.initialize();

        expect(
            roadTripApp.getFuelEconomy()
        ).toEqual(fuelEconomy);
    });



    xit('defaults to a fuel price of $3/gallon', function() {
        var fuelPrice = 3;

        roadTripApp.initialize();

        expect(
            roadTripApp.getFuelPrice()
        ).toEqual(fuelPrice);
    });



    xit('can modify the cost per gallon', function() {
        roadTripApp.initialize();
        roadTripApp.setFuelPrice(3);

        expect(
            roadTripApp.getFuelPrice()
        ).toEqual(3);

        roadTripApp.setFuelPrice(2.5);

        expect(
            roadTripApp.getFuelPrice()
        ).toBeLessThan(3);
    });



    xit('can assign all of the trip details at once', function() {
        var numberOfPassengers = 3;
        var distance = 500;
        var fuelEconomy = 30;
        var fuelPrice = 3;

        roadTripApp.initialize();
        roadTripApp.setTripDetails({
            numberOfPassengers: numberOfPassengers,
            distance: distance,
            fuelEconomy: fuelEconomy,
            fuelPrice: fuelPrice
        });

        expect(roadTripApp.getNumberOfPassengers()).toEqual(numberOfPassengers);
        expect(roadTripApp.getDistance()).toEqual(distance);
        expect(roadTripApp.getFuelEconomy()).toEqual(fuelEconomy);
        expect(roadTripApp.getFuelPrice()).toEqual(fuelPrice);
    });



    xit('keeps track of hotel prices', function() {
        var hotelPrice1 = 100;
        var hotelPrice2 = 85;
        var hotelPrices;

        roadTripApp.initialize();
        roadTripApp.addHotel(hotelPrice1);
        roadTripApp.addHotel(hotelPrice2);

        hotelPrices = roadTripApp.getHotelPrices();

        expect(hotelPrices).toContain(hotelPrice1);
        expect(hotelPrices).toContain(hotelPrice2);
        expect(hotelPrices).not.toContain(200);
    });



    xit('can get the total cost of the trip with a hotel', function() {
        var distance = 500;
        var fuelEconomy = 30;
        var fuelPrice = 3;
        var hotelPrice = 100;
        var expectedTotalCost = 150;

        roadTripApp.initialize();
        roadTripApp.setTripDetails({
            distance: distance,
            fuelEconomy: fuelEconomy,
            fuelPrice: fuelPrice
        });
        roadTripApp.addHotel(hotelPrice);

        expect(
            roadTripApp.getTotalCost()
        ).toEqual(expectedTotalCost);
    });



    xit('can get the total cost per passenger without hotels', function() {
        var numberOfPassengers = 3;
        var distance = 550;
        var fuelEconomy = 30;
        var fuelPrice = 2.5;
        var expectedCostPerPerson = 15.28;

        roadTripApp.initialize();
        roadTripApp.setTripDetails({
            numberOfPassengers: numberOfPassengers,
            distance: distance,
            fuelEconomy: fuelEconomy,
            fuelPrice: fuelPrice
        });

        expect(
            roadTripApp.getTotalCost(true)
        ).toBeCloseTo(
            expectedCostPerPerson
        );

        expect(
            roadTripApp.getTotalCost(true)
        ).not.toBeCloseTo(
            15.3
        );
    });



    xit('can get the total cost per passenger with hotels', function() {
        var numberOfPassengers = 3;
        var distance = 550;
        var fuelEconomy = 30;
        var fuelPrice = 2.5;
        var hotel1Price = 100;
        var hotel2Price = 150;
        var expectedCostPerPerson = 98.61;

        roadTripApp.initialize();
        roadTripApp.setTripDetails({
            numberOfPassengers: numberOfPassengers,
            distance: distance,
            fuelEconomy: fuelEconomy,
            fuelPrice: fuelPrice
        });
        roadTripApp.addHotel(hotel1Price);
        roadTripApp.addHotel(hotel2Price);

        expect(
            roadTripApp.getTotalCost(true)
        ).toBeCloseTo(
            expectedCostPerPerson
        );
    });
});
