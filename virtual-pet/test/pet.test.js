const Pet = require('../src/pet');

let pet;
let parent;
let deadPet;

beforeEach(() => {
  pet = new Pet('Jeff');
  parent = pet;
  deadPet = `Unfortunately Jeff is no longer alive!`;
});

describe('constructor', () => {
  it('returns an object', () => {
    expect(Pet).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    expect(pet.name).toEqual('Jeff');
  });

  it('has a initial age of 0', () => {
    expect(pet.age).toEqual(0);
  });
});

describe('constructDeadPet', () => {
  it('returns a string warning if the pet has died', () => {
    expect(pet.constructDeadPet()).toBe(deadPet);
  });
});

describe('growUp', () => {
  it('adds 1 to the pets age, 5 to hunger and 3 to fitness levels', () => {
    pet.growUp();
    expect(pet.age).toBe(1);
    expect(pet.hunger).toBe(5);
    expect(pet.fitness).toBe(7);
  });

  it('returns a string stating post method age, hunger & fitness levels', () => {
    expect(pet.growUp()).toEqual(
      `Jeff's age is now ${pet.age}, hunger is ${pet.hunger} & fitness is ${pet.fitness}. Use checkUp() to see your pets needs.`
    );
  });

  it('throws an error if the pet is no longer alive', () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow(deadPet);
  });
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by 4 to a maximum of 10', () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it('returns a string stating the post method fitness level if pet has been walked', () => {
    pet.fitness = 6;
    expect(pet.walk()).toEqual(
      `Jeff's fitness level is now ${pet.fitness}. Use checkUp() to see your pets needs.`
    );
  });

  it('returns a string stating the pets fitness level is maxed if at 10', () => {
    pet.fitness = 10;
    expect(pet.walk()).toEqual(
      `Jeff's fitness is now maxed out. Go and have a rest!`
    );
  });

  it('throws an error if the pet is no longer alive', () => {
    pet.age = 30;
    expect(() => pet.walk()).toThrow(deadPet);
  });
});

describe('feed', () => {
  it('decreases hunger by 3', () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it('decreases hunger by 3 to a minimum of 0', () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it('returns a string stating the post method hunger level if pet has been fed', () => {
    pet.hunger = 4;
    expect(pet.feed()).toEqual(
      `Jeff's hunger level is now ${pet.hunger}. Use checkUp() to see your pets needs.`
    );
  });

  it('returns a string stating the pets hunger level is minimum if at 0', () => {
    pet.hunger = 0;
    expect(pet.feed()).toEqual(`Jeff is not currently hungry.`);
  });

  it('throws an error if the pet is no longer alive', () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow(deadPet);
  });
});

describe('checkUp', () => {
  it("returns 'I need a walk' when fitness <= 3", () => {
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I need a walk');
  });

  it("returns 'I am hungry' when hunger >= 5", () => {
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it("returns 'I am hungry AND I need a walk' when fitness <= 3 AND hunger >= 5", () => {
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it("returns 'I feel great!' when fitness > 3 AND hunger < 5", () => {
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toEqual('I feel great!');
  });

  it('throws an error if the pet is no longer alive', () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow(deadPet);
  });
});

describe('isAlive', () => {
  it('returns true when age < 30, hunger < 10 and fitness > 0', () => {
    pet.age = 29;
    pet.hunger = 9;
    pet.fitness = 1;
    expect(pet.isAlive).toBe(true);
  });

  it('returns false when age = 30, hunger = 10 and fitness = 0', () => {
    pet.age = 30;
    pet.hunger = 10;
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
});

describe('haveBaby', () => {
  it('creates a child, and adds it to an array of children', () => {
    parent.haveBaby('Josey');
    expect(parent.children[0].name).toEqual('Josey');
  });
});
