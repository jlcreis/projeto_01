/*jslint browser: true*/
/*global console, MyApp, angular, Framework7*/

// Init angular
var MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('MyApp', []);

  // 1 Slide Per View, 50px Between
var mySwiper1 = MyApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});

MyApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
    
};

