import {
  EmoActions,
  EmoStates,
  BasicActions,
  Anger,
  Humiliated,
  Bitter,
  Aggressive,
  Frustrated,
  Mad,
  Distant,
  Critical,
  Disgust,
  Disapproving,
  Disappointed,
  Awful,
  Repelled,
  Fear,
  Scared,
  Anxious,
  Insecure,
  Weak,
  Rejected,
  Threatened
} from "./actions";
import { Fixture } from "./fixture";

describe("stateMachine _ transitions", () => {
  it("init _ START", (done) => {
    const fixture = new Fixture(done);
    fixture.send(EmoActions.START).expectIsState(EmoStates.SELECTING).exec();
  });

  it("selecting _ Basic Actions", (done) => {
    const fixture = new Fixture(done, EmoStates.SELECTING);
    const Basic = Object.values(BasicActions);

    fixture.expectCanCallActions(Basic).exec();
  });

  // I'm sorry Kealy - I'm lazy...
  [
    { init: EmoStates.ANGER, actions: Anger },
    { init: EmoStates.HUMILIATED, actions: Humiliated },
    { init: EmoStates.BITTER, actions: Bitter },
    { init: EmoStates.MAD, actions: Mad },
    { init: EmoStates.AGGRESSIVE, actions: Aggressive },
    { init: EmoStates.FRUSTRATED, actions: Frustrated },
    { init: EmoStates.DISTANT, actions: Distant },
    { init: EmoStates.CRITICAL, actions: Critical },
    { init: EmoStates.DISGUST, actions: Disgust },
    { init: EmoStates.FEAR, actions: Fear },
  ].forEach(({ init, actions }) => {
    it(`${init} _ ${init.toUpperCase()} Actions`, (done) => {
      const fixture = new Fixture(done, init);
      const Actions = Object.values(actions);
      fixture.expectCanCallActions(Actions).exec();
    });
  });
});
