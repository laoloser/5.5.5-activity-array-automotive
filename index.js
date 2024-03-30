
const VehicleModule = require('./vehicleBaseClass.js').Vehicle

class Car extends VehicleModule {
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

    scheduleService() {
        if (this.milage > 30000) {
            console.log('Time for maintenance.');
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

console.log(newCar)


  

