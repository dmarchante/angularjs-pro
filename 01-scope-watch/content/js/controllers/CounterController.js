function CounterController($scope) {
    this.count = 0;
    this.countList = [];
    this.increment = () => {
        this.count++;
        this.countList.unshift({id: this.count});
    };
    this.decrement = () => {
        this.count--;
        this.countList.unshift({id: this.count});
    };
    $scope.$watchCollection(angular.bind(this, () => {
        return this.countList;
    }), (newValue, oldValue) => {
        if(newValue === oldValue) {
            return;
        }
        console.log(newValue, oldValue);
    });
}

CounterController.$inject = ['$scope'];

angular
    .module('app')
    .controller('CounterController', CounterController);