# Virtual Pet

A JavaScript ball of fluff for the MCR Codes course

## Getting Started

git clone git@github.com:CCollis-McCann/Virtual-Pet.git

### Prerequisites

node.js

### Installing

cd into cloned repo
open node
run

```
const Pet = require('./src/pet');
const jeff = new Pet("Jeff"); // where Jeff is your own pet name...

jeff.growUp() // add one year to pet's age, five to hunger and loses three from fitness
jeff.walk() // if fitness level is not maxed, adds 4 to current level
jeff.feed() // if hunger level is not minimum, removes three from hunger
jeff.checkUp() // jeff will advise on needs based on current levels
jeff.haveBaby() // have a rug rat pet
```

Maximum age = 30
Maximum hunger = 10
Minimum fitness = 0

Any of the above === dead jeff!

### Available Scripts

cd into cloned repo

### `npm test`

Runs the test file usimg jest

### Break down into end to end tests

All tests test both the functionality of methods as well as the specific strings returned

```

describe("growUp", () => {
  it("alters the pets age, hunger and fitness levels", () => {
    pet.growUp();
    expect(pet.age).toBe(1);
    expect(pet.hunger).toBe(5);
    expect(pet.fitness).toBe(7);
  });

  it("returns a string stating post method age, hunger & fitness levels", () => {
    expect(pet.growUp()).toEqual(
      `Jeff's age is now ${pet.age}, hunger is ${pet.hunger} & fitness is ${pet.fitness}. Use checkUp() to see your pets needs.`
    );
  });

```

### Goal and requirements

OOP using JavaScript<br />
Further developmemt of writing tests

### Key learnings

Workings of both Class and protoype syntax<br />
Prototypal Inheritance

#### TODO:

Build a basic GUI for further interactivity away from the console
