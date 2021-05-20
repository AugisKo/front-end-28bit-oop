class Transport {
    constructor(name, strWheelPos, seatCount, wheelCount) {
        this.name = name;
        this.strWheelPos = strWheelPos;
        this.seatCount = seatCount;
        this.wheelCount = wheelCount;
        this.engineIsOn = false;
        this.engineIsOff = true;
    }

    turnOnEngine() {
        this.engineIsOn = true;
    }
    turnOffEngine() {
        this.engineIsOff = false;
    }
        
}

module.exports = Transport;

//Transporto priemones (p: vairo pozicija, sedyniu skaicius, ar ijungtas varyklis, ratu skaicius; m: ijungti varykli, isjungti varykli)
  