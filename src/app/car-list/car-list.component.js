'use strict';

// Register `carList` component, along with its associated controller and template
angular.
  module('carList').
  component('carList', {
    templateUrl: 'car-list/car-list.template.html',
    controller: ['car',
      function carListController(car) {
        this.cars = car.query((function(){
          this.totalItems = this.cars.length;
        }).bind(this));
        this.orderProp = 'year';
        this.listClass = 'list';
        this.changeListClass = function(lclass){
          this.listClass = lclass;
        };
        this.currentPage = 1;
        this.itemsPerPage = 3;
      }
    ]
  });
