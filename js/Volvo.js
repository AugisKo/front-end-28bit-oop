const Lengvosios = require('./Lengvosios');

class Volvo extends Lengvosios {
    constructor(name, strWheelPos, seatCount, wheelCount) {
        super(name, strWheelPos, seatCount, wheelCount);
    }
}


module.exports = Volvo;