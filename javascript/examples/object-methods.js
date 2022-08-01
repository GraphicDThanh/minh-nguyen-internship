const car3 = {
  brand: 'Ford',
  model: 'Fiesta',
  start() {
    document.writeln('Started');
    document.writeln(`Started
    ${this.brand} ${this.model}`);
  },
};
car3.start();
