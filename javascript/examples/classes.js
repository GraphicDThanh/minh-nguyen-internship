// Case 1: no function arguments
// eslint-disable-next-line max-classes-per-file
class Person {
  static hello() {
    return 'Hello, I am Flavio';
  }
}

document.writeln(`Case 1: ${Person.hello()}`);
document.writeln('<br>');

// Case 2: have a function argument
class Human {
  constructor(name) {
    this.name = name;
  }

  hi() {
    return `Hello, I am ${this.name}.`;
  }
}

const flavio = new Human('flavio');

document.writeln(`Case 2: ${flavio.hi()}`);
