function myDisplayer(some) {
  document.writeln(some);
}

const myPromise = new Promise((myResolve, myReject) => {
  const x = 0;

  // some code (try to change x to 5)

  if (x === 0) {
    myResolve('OK');
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    myReject('Error');
  }
});

myPromise.then(
  (value) => { myDisplayer(value); },
  (error) => { myDisplayer(error); },
);
