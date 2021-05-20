class Transport {
    constructor(name, strWheelPos, seatCount, wheelCount) {
        this.name = name;
        this.strWheelPos = strWheelPos;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
    }

    turnOnEngine() {
        this.engineIsOn = true;
    }
    turnOffEngine() {
        this.engineIsOn = false;
    }
        
}

module.exports = Transport;

//Transporto priemones (p: vairo pozicija, sedyniu skaicius, ar ijungtas varyklis, ratu skaicius; m: ijungti varykli, isjungti varykli)
  