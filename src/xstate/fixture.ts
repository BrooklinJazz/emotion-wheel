import { emotionStateMachine } from "./stateMachine";
import { interpret, Interpreter, AnyEventObject } from "xstate";
import { EmoStates } from "./actions";
class BaseFixture {
  private fnArray: Array<Function>;
  constructor(public done: jest.DoneCallback) {
    this.fnArray = [];
  }

  public add(fn) {
    this.fnArray.push(fn);
    return this;
  }

  public exec() {
    this.fnArray.shift()(); // remove and call first fn
    return this.fnArray.length === 0 ? this.done() : this.exec();
  }

  public assert(fn) {
    return this.add(fn);
  }
}

export class Fixture extends BaseFixture {
  private machine: Interpreter<any, any, AnyEventObject, any>;
  constructor(
    done: jest.DoneCallback,
    init: string = EmoStates.INIT,
    machine = emotionStateMachine
  ) {
    super(done);
    this.machine = interpret(machine).start(init);
  }

  get state() {
    return this.machine.state.value;
  }

  public send(event: string) {
    return this.add(() => this.sendImpl(event));
  }

  private sendImpl(event: string) {
    return this.machine.send(event);
  }

  public expectIsState(state: string) {
    return this.assert(() => {
      expect(this.state).toBe(state);
    });
  }

  public resetMachine(state) {
    return this.add(() => this.resetMachineImpl(state))
  }

  private resetMachineImpl(state) {
    this.machine.stop();
    this.machine.start(state);
  }


  public expectCanCallActions(actions: string[]) {
    return this.assert(() => {
      actions.forEach((each) => this.testAndRevertAction(each));
    });
  }
}
