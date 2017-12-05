function MainController() {
    this.firstCount = 0;
    this.secondCount = 5;
    this.thirdCount = 10;
}

MainController.$inject = [];

angular
    .module('app')
    .controller('MainController', MainController);