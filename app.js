var myModule = angular.module('Angello', []);

myModule.factory('AngelloHelper', function() {
    var buildIndex = function(source, property) {
        var tempArray = [];

        for (var i = 0, len = source.length; i < len; ++i) {
            var index = source[i][property];
            tempArray[index] = source[i];
        }
        return tempArray;
    };

    return {
        buildIndex: buildIndex
    };
});

myModule.service('AngelloModel', function() {
    var service = this,
    stories = [
        {
            title: 'First story',
            description: 'Our first story',
            citeria: 'Criteria pending.',
            status: 'TO DO',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Send story',
            description: 'Do Something',
            citeria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        },
        {
            title: 'Another story',
            description: 'Just one more',
            citeria: 'Criteria pending.',
            status: 'Code Review',
            type: 'Enhancement',
            reporter: 'Lukas Ruebbelke',
            assignee: 'Brian Ford'
        }
    ];

    service.getStories = function () {
        return stories;
    }
});

myModule.controller('MainCtrl', function(AngelloModel) {
    var main = this;

    main.createStory = function() {
        main.stories.push({
            title: 'New Story',
            description: 'Description pending',
            citeria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Pending',
            assignee: 'Pending'
        });
    };

    main.stories = AngelloModel.getStories()
});

myModule.directive('story', function() {
    return {
        scope: true,
        replace: true,
        template: '<div><h4>{{story.title}}</h4>' +
        '<p>{{story.description}}</p></div>'
    };
});
