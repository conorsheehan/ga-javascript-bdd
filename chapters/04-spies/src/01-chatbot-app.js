var chatSystem = {
    connect: function() {}
};
var requestPersistence = {
    create: function(requestItem) {},
    getAllRequests: function() {}
};
var $ = {
    ajax: function() {}
}

var chatbot = (function($, chatSystem, requestPersistence) {

    return {

        requestPersistence: requestPersistence,
        chatSystem: chatSystem,

        initialize: function() {
            this.chatSystem.connect();
            return this;
        },

        /** Accept incoming messages */
        handleIncomingMessage: function(incomingMessage) {
            if(incomingMessage.match(/^\/new request:/)) {
                return this.handleCreateRequestMessage(incomingMessage);
            } else if(incomingMessage.match(/^\/view requests/)) {
                return this.handleReadRequestListMessage(incomingMessage);
            }
        },

        /** Handle a message asking to read the list of office requests */
        handleReadRequestListMessage: function(incomingMessage) {
            var requestList = this.requestPersistence.getAllRequests();
            return this.respondWithRequestList(requestList);
        },

        /** Handle a message asking to create a new office request */
        handleCreateRequestMessage: function(incomingMessage) {
            var requestItem = incomingMessage.replace(/^\/new request:[ ]?/, '');
            this.createRequestForItem(requestItem);
            this.notifyOfficeManagerOfNewRequest(requestItem);
            return this.respondWithCreateRequestSuccess(requestItem);
        },

        /** Creates a new office request for an item */
        createRequestForItem: function(requestItem) {
            return this.requestPersistence.create(requestItem);
        },

        notifyOfficeManagerOfNewRequest: function(requestItem) {
            return $.ajax({
                type: 'POST',
                url: 'https://cantina.co/api/notify-manager',
                data: JSON.stringify({
                    quantity: 1,
                    requestItem: requestItem
                })
            });
        },

        /** Returns a string office requests, separated by a new line */
        renderRequestList: function(requestList) {
            return requestList.join('\n');
        },

        /** Send the current list of office requests */
        respondWithRequestList: function(requestList) {
            var outgoingMessage = this.renderRequestList(requestList);
            return outgoingMessage;
        },

        /** Send a success message after creating the office request */
        respondWithCreateRequestSuccess: function(requestItem) {
            var outgoingMessage = "Thank you for requesting " + requestItem;
            return outgoingMessage;
        }
    };
})(
    $,
    chatSystem,
    requestPersistence
);
