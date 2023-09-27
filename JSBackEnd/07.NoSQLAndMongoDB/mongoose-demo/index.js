const mongoose = require('mongoose');
const Dog = require('./models/Dog.js');

const CONNECTION_STR = 'mongodb://localhost:27017';
const DATABASE_NAME = 'DogsDB';

async function connectDb() {
    await mongoose.connect(`${CONNECTION_STR}/${DATABASE_NAME}`);
    console.log(`Connected to database ${DATABASE_NAME} ...`);

    // Static, Virtual, methods
    // const dogs = await Dog.find();
    // dogs.forEach(dog => dog.bark());
    // dogs.forEach(dog => console.log(dog.description));
    // const d = await Dog.getDogCollection(5);

    // CREATE

    // Variant 1
    // const newDog = new Dog({name: 'Lisko', age: 4, color: 'grey'});
    // newDog.save();

    // Variant 2
    // const newDog = await Dog.create({name: 'Sharo', age: 8, color: 'rainbow'});
    // console.log(newDog);

    // READ

    // const dogs = await Dog.find();
    // const dogs = await Dog.find({age: 5});
    // const dogs = await Dog.findOne();
    // const dogs = await Dog.findOne({age: 5});
    // const DOG_ID = '6513e05490f4081c16379268';
    // const dogs = await Dog.findById(DOG_ID);
    // console.log(dogs);

    // UPDATE

    // Variant 1
    // const updatedDog = await Dog.updateOne(
        // {name: 'Spike'},
        // {$set: {age: 50}}   //dolar-sign syntax native mongodb
        // {age: 99}   // mongoose way
    // )

    // Variant 2
    // const DOG_ID = '6513dffd90f4081c16379266';
    // const dog = await Dog.findById(DOG_ID);
    // dog.age = -3;
    // dog.color = 'transparent';
    // dog.save();

    // Variant 3
    // await Dog.findByIdAndUpdate(DOG_ID, {age: 200});

    // DELETE

    // Variant 1
    // await Dog.deleteOne({name: 'Lisko'});

    // Variant 2
    // const DOG_ID = '6514187a0a90d805b4d07a77';
    // await Dog.findByIdAndDelete(DOG_ID);
}

connectDb();