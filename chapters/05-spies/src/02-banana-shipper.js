//TODO: Copy this to your banana app
//      and list it as a dependency.
//      Note that you will want to stub it out using a spy

var bananaShipper = {
    getShipperByName: function(name) {
        return {
            name: this.getFullName(name),
            address: this.getAddress(name),
            phone: this.getPhone(name)
        };
    }
};
