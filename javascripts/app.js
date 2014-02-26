'use strict';

var blogApp = angular.module('blogApp', ['ngRoute', 'ngSanitize', 'blogControllers']);

blogApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/posts', {
        templateUrl: 'partials/list.htm',
        controller: 'PostListCtrl'
    }).
    when('/posts/:postID', {
        templateUrl: 'partials/post.htm',
        controller: 'PostDetailCtrl'
    }).
    otherwise({
        redirectTo: '/posts'
    });
}]);