class Person2 {
  hello() {
    return "Hello, I am a Person";
  }
}
class Programmer extends Person2 {
  hello() {
    return super.hello() + ". I am also a programmer.";
  }
}
const flavio2 = new Programmer();
document.writeln(flavio2.hello());