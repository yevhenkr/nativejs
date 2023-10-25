class Car{
    constructor(brand, maxSpeed) {
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }
    showMaxSpeed(){
        console.log(`Max speed ${brand}`)
    }
}
//стаческие методі єто методі которіе візіваются не у инстанца Class а у самого Class.metod() зачастую они используются для работі с єкземплярами  класса
const car = new Car("bmv", 200)

console.log(car.showMaxSpeed())