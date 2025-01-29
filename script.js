class Guitar {
  //declare a new class called Guitar
  constructor(someType, someMake, someModel, someColor) {
    //constructor method runs automatically when we make a 'new' Guitar
    this.type = someType;
    this.make = someMake;
    this.model = someModel;
    this.color = someColor;
  }
  play() {
    console.log("I am playing the guitar");
  }
  strum() {
    console.log("stttrrururummstrrurmmmtrsstrummmmmm");
  }
  smash() {
    console.log("💥");
  }
  tune() {
    console.log("ahhhh, much better...");
  }
}

//this is a comment

const myFavGuitar = new Guitar(
  "electric",
  "Rickenbacker",
  "The one bass",
  "Cherry Burst"
);
const otherGuitar = new Guitar(
  "acoustic",
  "Martin",
  "I don't remember",
  "wood"
);
