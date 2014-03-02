'use strict';

/* Controllers */

var blogControllers = angular.module('blogControllers', []);

blogControllers.controller('PostListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('posts/index.json').success(function(data) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = 'blog home';
                this.page.url = 'http://simondolph.github.io/#/posts';
                this.page.title = 'Blog Home';
            }
        });
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
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = $routeParams.postID;
                this.page.url = 'http://simondolph.github.io/#/posts/' + $routeParams.postID;
                this.page.title = $routeParams.postID;
            }
        });
        $scope.post = marked(data);
    });
}]);

