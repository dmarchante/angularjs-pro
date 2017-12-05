function counter() {
    return {
        template: `
            <div class="counter">
                <h3>Counter: {{ counter.count }}</h3>
                <a class="counter__increment" href="" ng-click="counter.increment();">Increment Counter</a> -
                <a class="counter__decrement" href="" ng-click="counter.decrement();"> Decrement Counter</a>
                <div>
                    <a href="" ng-click="counter.updateName();">
                        Update Name
                    </a>
                <ul>
                    <li ng-repeat="list in counter.countList">
                        <input type="text" ng-model="list.id">
                    </li>
                </ul>
            </div>
        `,
        link: ($scope, $element, $attrs) => {
            $attrs.$observe('name', (value) => {
                if(value === 'Food counter') {
                    $attrs.$updateClass('counter--food', 'counter--drink');
                } else if (value === 'Drink counter') {
                    $attrs.$updateClass('counter--drink', 'counter--food');
                } 
            });
        }
    };
}

angular
    .module('app')
    .directive('counter', counter);