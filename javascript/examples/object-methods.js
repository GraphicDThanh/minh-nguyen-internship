const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    document.writeln("Started" + this.brand + this.model);
  },
};
car.start();
