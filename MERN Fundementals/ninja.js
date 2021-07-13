class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("name is: " + this.name + ", health is: " + this.health + ", the speed is: " + this.speed + " and the strength is: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();