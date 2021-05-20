const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');

const rexas = new Dog('Rex', 'brown');
rexas.voice();

const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.voice();

console.log('-----------------------------');


const Volvo = require('./js/Volvo');

const pilkasvolvo = new Volvo('Volvo', 'left', 5, 4);

pilkasvolvo.turnOnEngine();
console.log(pilkasvolvo);
