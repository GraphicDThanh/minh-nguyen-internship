function myDisplayer(some) {
  document.writeln(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("OK"); // when successful
  } else {
    myReject("Error"); // when error
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
