var roadTripApp = (function() {

    var distance,
        fuelEconomy,
        fuelPrice,
        numberOfPassengers,
        hotelPrices;

    return {

        /** Set default values */
        initialize: function() {
            // distance = 0; // 0 miles
            // fuelEconomy = 30; // 30 miles per gallon
            // fuelPrice = 3; // $3 per gallon
            // numberOfPassengers = 1; // 1 passenger
            // hotelPrices = []; // No hotels

            return this;
        },

        //
        // SETTERS
        //

        // setDistance: function(value) {
        //     distance = value;
        //     return this;
        // },

        // setFuelEconomy: function(value) {
        //     fuelEconomy = value;
        //     return this;
        // },

        // setFuelPrice: function(value) {
        //     fuelPrice = value;
        //     return this;
        // },

        // setNumberOfPassengers: function(value) {
        //     numberOfPassengers = value;
        //     return this;
        // },

        // /** Set multiple trip details at once */
        // setTripDetails: function(options) {
        //     if(options.numberOfPassengers) {
        //         this.setNumberOfPassengers(options.numberOfPassengers);
        //     }
        //     if(options.distance) {
        //         this.setDistance(options.distance);
        //     }
        //     if(options.fuelEconomy) {
        //         this.setFuelEconomy(options.fuelEconomy);
        //     }
        //     if(options.fuelPrice) {
        //         this.setFuelPrice(options.fuelPrice);
        //     }
        //     return this;
        // },

        // /** Add a hotel to the list by its price */
        // addHotel: function(hotelPrice) {
        //     hotelPrices.push(hotelPrice);
        //     return this;
        // },

        //
        // GETTERS
        //

        // getDistance: function() {
        //     return distance;
        // },

        // getFuelEconomy: function() {
        //     return fuelEconomy;
        // },

        // getFuelPrice: function() {
        //     return fuelPrice;
        // },

        // getNumberOfPassengers: function() {
        //     return numberOfPassengers;
        // },

        // getHotelPrices: function() {
        //     return hotelPrices;
        // },

        //
        // CALCULATIONS
        //


        // /** Get the total cost of fuel for the trip */
        // getFuelCost: function() {
        //     return this.getDistance() / this.getFuelEconomy() * this.getFuelPrice();
        // },

        // /** Get the total cost of hotels for the trip */
        // getHotelCost: function() {
        //     return this.getHotelPrices().reduce(function(prev,current) {
        //         return prev + current;
        //     }, 0);
        // },

        // /** Get the total overall cost for the trip */
        // getTotalCost: function() {
        //     var totalCost = this.getHotelCost() + this.getFuelCost();
        //     return totalCost;
        // }

    };
})();
