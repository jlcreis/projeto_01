/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
    
    $scope.app = "Pague Menos Carandaí";
    $scope.loja = "Lojas";
    $scope.promocao = "Promoções";
    
    //Initialize Swiper
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    
    
    
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    
    // You can access angular like this:
    // MyApp.angular
    
    // And you can access Framework7 like this:
    // MyApp.fw7.app
  });
  
}]);


    
    
  