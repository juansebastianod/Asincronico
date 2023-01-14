function* gen() {
  yield "hola";
  yield 2;
  yield true;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);

function* iterative(array) {
  for (let value of array) {
    yield value;
  }
}

const i = iterative(["oscar", "omar"]);
console.log(i.next().value)