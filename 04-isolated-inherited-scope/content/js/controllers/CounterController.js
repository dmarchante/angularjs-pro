function CounterController() {
    this.increment = () => {
        this.count++;
    };
    this.decrement = () => {
        this.count--;
    };
}

CounterController.$inject = [];

angular
    .module('app')
    .controller('CounterController', CounterController);