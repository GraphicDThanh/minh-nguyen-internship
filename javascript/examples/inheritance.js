// eslint-disable-next-line max-classes-per-file
class Person {
  constructor(name) {
    this.cardName = name;
  }

  namePerson() {
    return this.cardName;
  }
}

class Job extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  show() {
    return `${this.namePerson()} ${this.position}`;
  }
}

const myPosition = new Job('Hello, I am a Person', 'I am also a programmer');

console.log(myPosition.show());
