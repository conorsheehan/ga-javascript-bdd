xdescribe('Chat Bot (GWT)', function() {

    describe('given the user is chatting with the chat bot, when the user sends "/new request: paper"', function() {
        var incomingMessage;

        Given(function() {
            chatbot.initialize();
            incomingMessage = "/new request: paper";
            spyOn(chatbot.requestPersistence, 'create');
        });

        When(function() {
            chatbot.handleIncomingMessage(incomingMessage);
        });

        Then('then a new office request for paper is created', function() {
            return expect(
                chatbot.requestPersistence.create.calls.count()
            ).toEqual(1);
        });
    });
});
