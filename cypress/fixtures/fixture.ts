export class Fixture {
  fnArray: Array<Function>;
  constructor(public done: Function) {
    this.fnArray = [];
  }

  add(fn) {
    this.fnArray.push(fn);
    return this;
  }

  addMany(fns) {
    fns.forEach(fn => this.fnArray.push(fn));
    return this;
  }


  exec() {
    return this.fnArray
      .shift()() // remove and call first fn
      .then(() => (this.fnArray.length === 0 ? this.done() : this.exec()));
  }

  assert(fn) {
    return this.add(fn);
  }
}
