//Case 1: no function arguments
class Person {
  hello() {
    return "Hello, I am Flavio";
  }
}
const flavio = new Person();
document.writeln("Case 1: " + flavio.hello());
document.writeln("<br>");

//Case 2: have a function argument
class Person1 {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return "Hello, I am " + this.name + ".";
  }
}
const flavio1 = new Person1("flavio");
document.writeln("Case 2: " + flavio.hello());
