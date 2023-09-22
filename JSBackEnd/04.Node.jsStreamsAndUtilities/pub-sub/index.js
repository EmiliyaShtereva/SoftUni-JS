const  eventBus = require('./eventBus');

eventBus.subscribe('kitten-added', () => {
    console.log('Kitten has been added');
});

const unsubscribed = eventBus.subscribe('kitten-added', (kittenName) => {
    console.log(`Kitten has been added! Second time! its caled ${kittenName}`);
});

eventBus.subscribe('kitten-remove', () => {
    console.log('Kitten has been removed');
});

eventBus.publish('kitten-added', 'pesho');
eventBus.publish('kitten-removed');
unsubscribed();

