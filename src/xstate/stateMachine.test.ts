import { emotionStateMachine } from "./stateMachine";
import { interpret } from "xstate";
import { EmoActions, EmoStates } from "./actions";

class Fixture {
  private fnArray: Array<Function>;
  constructor(
    public done: jest.DoneCallback,
    public machine = interpret(emotionStateMachine).start()
  ) {
    this.fnArray = [];
  }

  get state() {
    return this.machine.state.value;
  }

  private add(fn) {
    this.fnArray.push(fn);
    return this;
  }

  public send(event: string) {
    return this.add(() => this.machine.send(event));
  }

  public exec() {
    this.fnArray.shift()(); // remove and call first fn
    return this.fnArray.length === 0 ? this.done() : this.exec();
  }

  public assert(fn) {
    return this.add(fn);
  }

  public expectIsState(state: string) {
    return this.assert(() => {
      expect(this.state).toBe(state);
    });
  }
}

describe("stateMachine _ transitions", () => {
  it("init _ START _ selecting", done => {
    const fixture = new Fixture(done);
    fixture
      .send(EmoActions.START)
      .expectIsState(EmoStates.SELECTING)
      .exec();
  });
});
