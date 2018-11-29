var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.galleries = [{"title":"woda x", "when":"2000-01-01", "thumbnailUrl":"1.jpg", "section":"1"}, 
    {"title":"piasek", "when":"2000-02-02", "thumbnailUrl":"2.jpg", "section":"1"}, 
    {"title":"rzeka", "when":"2000-03-03", "thumbnailUrl":"3.jpg", "section":"2"}, 
    {"title":"trawa", "when":"2000-04-04", "thumbnailUrl":"4.jpg", "section":"2"}, 
    {"title":"góra", "when":"2000-05-05", "thumbnailUrl":"5.jpg", "section":"3"},
     {"title":"most", "when":"2000-06-06", "thumbnailUrl":"6.jpg", "section":"3"}];
     
	$scope.sortList = [ 
	{'label':'Alfabetycznie', 'value':'title'}, {'label':'Chronologicznie', 'value':'when'}
	];
	$scope.orderProp = 'when';
});
