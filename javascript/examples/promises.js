function myDisplayer(some) {
  document.writeln(some);
}

const myPromise = new Promise((myResolve, myReject) => {
  const x = 0;

  // some code (try to change x to 5)

  if (x === 0) {
    myResolve('OK');
  } else {
    myReject(new Error('something bad happened'));
  }
});

myPromise.then(
  (value) => { myDisplayer(value); },
  (error) => { myDisplayer(error); },
);
