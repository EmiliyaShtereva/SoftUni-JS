const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('kitten-added', () => {
    console.log('Kitten has been added');
});

eventEmitter.on('kitten-added', (kittenName) => {
    console.log(`Kitten has been added! Second time! its caled ${kittenName}`);
});

eventEmitter.on('kitten-removed', () => {
    console.log('Kitten has been removed');
});

eventEmitter.emit('kitten-added', 'pesho');
eventEmitter.emit('kitten-removed');