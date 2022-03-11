type Func = () => void;

export var funcs: Func[] = [];
// create a bunch of functions
for (var i = 0; i < 3; i++) {
  funcs.push(function () {
    console.log(i);
  });
}
// call them
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
