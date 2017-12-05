function CounterController($scope) {
    this.count = 0;
    this.name = 'Drink counter';
    this.updateName = () => {
        this.name = 'Food counter';
    };
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