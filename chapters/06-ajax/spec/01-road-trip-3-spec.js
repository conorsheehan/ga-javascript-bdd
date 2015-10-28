describe('The Road Trip App user', function() {
    var testResponses = {
        share: {
            success: {
                status: 200,
                contentType: 'text/plain',
                responseText: 'Success'
            },
            error: {
                status: 500,
                contentType: 'text/plain',
                responseText: 'A problem occurred'
            }
        }
    };

    beforeEach(function() {
        roadTripApp3.initialize();
        jasmine.Ajax.install();
    });



    afterEach(function() {
        jasmine.Ajax.uninstall();
    });



    it('can share the trip with a friend', function() {
        var friend = {
            name: 'Rich',
            email: 'rich@gmail'
        };
        var expectedUrl = '/api/share';
        var expectedData = {
                    name: [friend.name],
                    email: [friend.email]
                };
        var request;

        roadTripApp3.shareTrip(friend.name, friend.email);
        request = jasmine.Ajax.requests.mostRecent();

        expect(request.url).toEqual(expectedUrl);
        expect(request.data()).toEqual(expectedData);
    });



    it('sees a success message when the trip has been shared with a friend', function() {
        var friend = {
            name: 'Rich',
            email: 'rich@gmail'
        };
        var request;

        spyOn(roadTripApp3, 'displayShareSuccessMessage');
        spyOn(roadTripApp3, 'displayShareErrorMessage');

        roadTripApp3.shareTrip(friend.name, friend.email);

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(testResponses.share.success);

        expect(roadTripApp3.displayShareSuccessMessage).toHaveBeenCalled();
        expect(roadTripApp3.displayShareErrorMessage).not.toHaveBeenCalled();
    });



    it('sees an error message when sharing the trip with a friend doesn\'t work', function() {
        var friend = {
            name: 'Rich',
            email: 'rich@gmail'
        };
        var request;

        spyOn(roadTripApp3, 'displayShareErrorMessage');
        spyOn(roadTripApp3, 'displayShareSuccessMessage');

        roadTripApp3.shareTrip(friend.name, friend.email);

        request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(testResponses.share.error);

        expect(roadTripApp3.displayShareSuccessMessage).not.toHaveBeenCalled();
        expect(roadTripApp3.displayShareErrorMessage).toHaveBeenCalled();
    });
});
