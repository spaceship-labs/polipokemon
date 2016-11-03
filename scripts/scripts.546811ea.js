"use strict";function webcamService(){function a(a){Webcam.attach(a)}var b={attach:a};return b}angular.module("polipokemonApp",["ngAnimate","ngAria","ngCookies","ngRoute","ngSanitize","ngMaterial","uiGmapgoogle-maps"]),angular.module("polipokemonApp").config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"vm"}).when("/capture",{templateUrl:"views/capture.html",controller:"CaptureCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}]),angular.module("polipokemonApp").controller("MainCtrl",function(){function a(){b.map={center:{latitude:23.85,longitude:-102},zoom:6}}var b=this;b.init=a,b.init()}),angular.module("polipokemonApp").controller("CaptureCtrl",["webcam",function(a){function b(){a.attach("#camera")}var c=this;c.init=b,c.init()}]),angular.module("polipokemonApp").service("webcam",webcamService),angular.module("polipokemonApp").run(["$templateCache",function(a){a.put("views/capture.html",'<div id="camera"></div> <md-button class="md-fab capture-btn" ng-click="vm.newPoint" aria-label="Nuevo Banner"></md-button>'),a.put("views/main.html",'<ui-gmap-google-map center="vm.map.center" zoom="vm.map.zoom"></ui-gmap-google-map> <md-button href="/#capture" class="md-fab md-primary add-btn" aria-label="Nuevo Punto">+</md-button>')}]);