'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('PostListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('posts/index.json').success(function(data) {
        $scope.posts = data;
    });
}]);

blogControllers.controller('PostDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    marked.setOptions({
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
	});
    $http.get('posts/' + $routeParams.postID + '.md').success(function(data) {
        $scope.post = marked(data);
    });
}]);

