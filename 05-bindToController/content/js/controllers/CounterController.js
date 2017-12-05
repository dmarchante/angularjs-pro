function CounterController($scope) {
    this.count = $scope.count;
    this.increment = () => {
        this.count++;
    };
    this.decrement = () => {
        this.count--;
    };
}

CounterController.$inject = ['$scope'];

angular
    .module('app')
    .controller('CounterController', CounterController);