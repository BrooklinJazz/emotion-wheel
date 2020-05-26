import { emotionStateMachine } from "./stateMachine";
import { interpret, Interpreter, AnyEventObject } from "xstate";

export class Fixture {
  private fnArray: Array<Function>;
  private machine: Interpreter<any, any, AnyEventObject, any>;
  constructor(
    public done: jest.DoneCallback,
    init: string = "init",
    machine = emotionStateMachine
  ) {
    this.machine = interpret(machine).start(init);
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
    return this.add(() => this.sendImpl(event));
  }

  private sendImpl(event: string) {
    return this.machine.send(event);
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

  private resetMachine(state) {
    this.machine.stop();
    this.machine.start(state);
  }

  private testAndRevertAction(action) {
    const prevState = this.state;
    this.sendImpl(action);
    expect(action.length).toBeGreaterThan(1)
    expect(this.state).toBe(action);
    this.resetMachine(prevState);
  }

  public expectCanCallActions(actions: string[]) {
    return this.assert(() => {
      actions.forEach((each) => this.testAndRevertAction(each));
    });
  }
}