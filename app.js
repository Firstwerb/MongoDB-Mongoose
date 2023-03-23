const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

// Schema
const fruitSchema = new mongoose.Schema ({
    name: {
      type: String,
      required: [true, "Please check your data entry"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
});

// Model
const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit Document
const fruit = new Fruit ({
    name: "Peach",
    rating: 10,
    review: "Pretty solid as a fruit"
});

fruit.save();

const personSchema = new mongoose.Schema ({
   name: String,
   age: Number,
   favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit."
});

const strawberry = new Fruit ({
  name: "Strawberry",
  rating: 10,
  review: "Sexy fruit, right?"
});

strawberry.save();

const person = new Person ({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

Person.updateOne({
  _id: "641a030521c606abf912b1f1"},
  {favouriteFruit: strawberry})
  .then(() => {
    console.log("Successfully updated");
  })
  .catch((err) => {
    console.log(err);
  });

const person = new Person ({
  name: "John",
  age: 37
});

person.save();

const kiwi = new Fruit ({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit ({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit ({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

Fruit.insertMany([kiwi, orange, banana])
  .then(() => {
    console.log("Successfully saved all the fruits to fruitsDB");
  })
  .catch((err) => {
    console.log(err);
  });

Fruit.find({})
  .then((fruits) => {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
      mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

  Fruit.updateOne({
    _id: "6419f4e754730866e520d6f7"},
    {name: "Peach"})
    .then(() => {
      console.log("Successfully updated");
    })
    .catch((err) => {
      console.log(err);
    });

  Fruit.deleteOne({
    _id: "6419f4e754730866e520d6f7"})
    .then(() => {
      console.log("Successfully deteled");
    })
    .catch((err) => {
      console.log(err);
    });

Person.deleteMany({age: 37})
.then(() => {
  console.log("Successfully deleted all");
})
.catch((err) => {
  console.log(err);
});
