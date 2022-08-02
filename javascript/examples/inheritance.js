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
    this.pos = position;
  }

  show() {
    return `${this.namePerson()} ${this.pos}`;
  }
}

const myPosition = new Job('Hello, I am a Person', 'I am also a programmer');

document.writeln(myPosition.show());
