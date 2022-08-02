const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start() {
    document.writeln('Started');
    document.writeln(`Started
    ${this.brand} ${this.model}`);
  },
};
car.start();
