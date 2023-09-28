// __proto__ | prototype, extends
// Обязательно понимать для собеса
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    startEngine() {
        console.log(`Start ${this.brand}`);
    }

    static concatCars() {
        console.log("concat");
    }
}

const car1 = new Car("bmw");
const car2 = new Car("bmw");

class SuperCar extends Car {
    constructor(brand, canFly) {
        super(brand);
        this.canFly = canFly;
    }

    startFly() {
        console.log(`start fly ${this.brand}`);
    }
}

const superCar1 = new SuperCar("audi", true);

console.log(superCar1.__proto__.__proto__ === Car.prototype);

SuperCar.concatCars();

// ----------------------------------
//не обязательно понимать просто білобі не плохо0
// function Car(brand) {
//     this.brand = brand;
// }
//
// Car.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`);
// };
//
// Car.concatCars = function () {
//     console.log("concat");
// };
//
// const car = new Car("bmw");
//
// // Car.concatCars();
//
// function SuperCar(brand, canFly) {
//     this.brand = brand;
//     this.canFly = canFly;
// }
//
// SuperCar.prototype.startFly = function () {
//     console.log(`start fly ${this.brand}`);
// };
//
// SuperCar.prototype.__proto__ = Car.prototype; // !!!
// SuperCar.__proto__ = Car; // !!!
//
// const superCar = new SuperCar("audi", true);
//
// console.log(superCar.__proto__.__proto__ === Car.prototype);
//
// SuperCar.concatCars();
