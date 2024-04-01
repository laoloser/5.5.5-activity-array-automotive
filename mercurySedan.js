//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.

//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

//Create at least two new instances of the Car class and test them here:



const vehicleModule = require('./vehicleBaseClass.js').Vehicle

class Car extends vehicleModule {
    constructor(make, model, year, color, milage) {
        super(make, model, year, color, milage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    start() {
        if (this.fuel > 0) {
            console.log('The car has started.');
            return this.start = true
        } else {
            console.log("Not enough fuel.");
            return this.start = false;
        }
    }

    service() {
        if (this.milage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        } 
    }

        loadPassenger(num){
            if (this.passenger < this.maxPassengers) {
                if ((num + this.passenger) <= this.maxPassengers) {
                    this.passenger = num;
                    return this.passenger;
                } else {
                    console.log('Not enough seats for all the passengers.');

                }
            } else {
                console.log('Car is full.');
            }

        }
    }

    
    let newCar = new Car('mercury', 'A28', '2010', 'blue', '10000')



newCar.start()
newCar.loadPassenger(5)
newCar.stop()
newCar.service()
console.log(newCar)

  

