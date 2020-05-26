import { emotionStateMachine } from "./stateMachine";
import { StateMachine, interpret } from "xstate";
import { EmoState, EmoStateType } from "./states";

enum Event {
  START = "START",
  SELECTING = "SELECTING"
}
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

  public send(event: Event) {
    return this.add(() => this.machine.send(event));
  }

  public exec() {
    const fn = this.fnArray.shift()(); // remove and call first fn
    return this.fnArray.length === 0 ? this.done() : this.exec();
  }

  public assert(fn) {
    return this.add(fn);
  }

  public expectIsState(state: string) {
    return this.assert(() => {
        expect(this.state).toBe(state)
    });
  }
}

describe("stateMachine _ transitions", () => {
  beforeEach(() => {});
  it("test", done => {
    const fixture = new Fixture(done);
    fixture
      .send(Event.START)
      .expectIsState(EmoState.selecting)
      .exec();
  });
});
