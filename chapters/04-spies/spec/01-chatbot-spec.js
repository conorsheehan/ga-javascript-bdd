xdescribe('Chat Bot', function() {

    it('connects to the chat system when it loads', function() {
        spyOn(chatbot.chatSystem, 'connect');

        chatbot.initialize();

        expect(
            chatbot.chatSystem.connect
        ).toHaveBeenCalled();
    });



    describe('Users', function() {

        beforeEach(function() {
            chatbot.initialize();
        });



        it('can create a new office request using "/new request"', function() {
            var incomingMessage = '/new request: paper';

            spyOn(chatbot.requestPersistence, 'create');

            chatbot.handleIncomingMessage(incomingMessage);

            expect(
                chatbot.requestPersistence.create.calls.count()
            ).toEqual(1);
        });



        xit('can create a new office request for hot sauce using "/new request: hot sauce"', function() {
            var incomingMessage = '/new request: hot sauce';
            var requestName = 'hot sauce';

            spyOn(chatbot.requestPersistence, 'create');

            chatbot.handleIncomingMessage(incomingMessage);

            expect(
                chatbot.requestPersistence.create.calls.count()
            ).toEqual(1);

            expect(
                chatbot.requestPersistence.create
            ).toHaveBeenCalledWith(requestName);
        });



        xit('can ask for the full list of pending office requests using "/view requests"', function() {
            var incomingMessage = '/view requests';
            var expectedOutgoingMessage = 'Napkins\nMilk\n3D Printer';
            var outgoingMessage;

            spyOn(chatbot.requestPersistence, 'getAllRequests').and.returnValue(
                ['Napkins', 'Milk', '3D Printer']
            );

            outgoingMessage = chatbot.handleIncomingMessage(incomingMessage);

            expect(outgoingMessage).toEqual(expectedOutgoingMessage);
        });



        xit('will notify the office manager for all new requests', function() {
            var incomingMessage = '/new request: white board markers';
            var notifyManagerUrl = 'https://cantina.co/api/notify-manager';
            var notifyManagerData = {
                quantity: 1,
                requestItem: 'white board markers'
            };

            spyOn($, 'ajax').and.callFake(function(options) {
                return {
                    done: function() { return this; },
                    fail: function() { return this; }
                };
            });

            var outgoingMessage = chatbot.handleIncomingMessage(incomingMessage);

            expect($.ajax).toHaveBeenCalled();
            expect($.ajax.calls.count()).toEqual(1);
            expect($.ajax.calls.mostRecent().args[0].type).toEqual('POST');
            expect($.ajax.calls.mostRecent().args[0].url).toEqual(notifyManagerUrl);
            expect($.ajax.calls.mostRecent().args[0].data).toEqual(JSON.stringify(notifyManagerData));
        });
    });

});
