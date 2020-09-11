const MINIMUM_FITNESS = 0;
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_AGE = 0;
const MAXIMUM_AGE = 30;

class Pet {
  constructor(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
  }

  get isAlive() {
    return (
      this.age < MAXIMUM_AGE &&
      this.hunger < MAXIMUM_HUNGER &&
      this.fitness > MINIMUM_FITNESS
    );
  }

  constructDeadPet() {
    return `Unfortunately ${this.name} is no longer alive!`;
  }

  growUp() {
    if (!this.isAlive) throw new Error(this.constructDeadPet());

    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    return `${this.name}'s age is now ${this.age}, hunger is ${this.hunger} & fitness is ${this.fitness}. Use checkUp() to see your pets needs.`;
  }

  walk() {
    if (!this.isAlive) throw new Error(this.constructDeadPet());

    if (this.fitness + 4 <= MAXIMUM_FITNESS) {
      this.fitness += 4;
      return `${this.name}'s fitness level is now ${this.fitness}. Use checkUp() to see your pets needs.`;
    } else {
      this.fitness = MAXIMUM_FITNESS;
      return `${this.name}'s fitness is now maxed out. Go and have a rest!`;
    }
  }

  feed() {
    if (!this.isAlive) throw new Error(this.constructDeadPet());

    if (this.hunger - 3 >= MINIMUM_HUNGER) {
      this.hunger -= 3;
      return `${this.name}'s hunger level is now ${this.hunger}. Use checkUp() to see your pets needs.`;
    } else {
      this.hunger = MINIMUM_HUNGER;
      return `${this.name} is not currently hungry.`;
    }
  }

  checkUp() {
    if (!this.isAlive) throw new Error(this.constructDeadPet());

    switch (true) {
      case this.fitness <= 3 && this.hunger >= 5:
        return 'I am hungry AND I need a walk';
      case this.fitness <= 3:
        return 'I need a walk';
      case this.hunger >= 5:
        return 'I am hungry';
      default:
        return 'I feel great!';
    }
  }

  haveBaby(name) {
    this.children.push(new Pet(name));
  }
}

module.exports = Pet;
