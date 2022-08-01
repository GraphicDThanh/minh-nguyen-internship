/* eslint-disable max-classes-per-file */
class Person2 {
  // eslint-disable-next-line class-methods-use-this
  hello() {
    return 'Hello, I am a Person';
  }
}
class Programmer extends Person2 {
  hello() {
    return `${super.hello()}. I am also a programmer.`;
  }
}
const flavio2 = new Programmer();
document.writeln(flavio2.hello());
