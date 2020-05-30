import {
  EmoActions,
  EmoStates,
  Basic,
  Anger,
  LetDown,
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
  Threatened,
  Surprise,
  Startled,
  Confused,
  Amazed,
  Excited,
  Bad,
  Tired,
  Stressed,
  Busy,
  Bored,
  Sad,
  Lonely,
  Vulnerable,
  Despair,
  Guilty,
  Depressed,
  Hurt,
  Happy,
  Playful,
  Content,
  Interested,
  Proud,
  Accepted,
  Powerful,
  Peaceful,
  Trusting,
  Optimistic,
} from "./actions";
import { Fixture } from "./fixture";

describe("stateMachine _ transitions", () => {
  it("init _ START", (done) => {
    const fixture = new Fixture(done);
    fixture.send(EmoActions.START).expectIsState(EmoStates.SELECTING).exec();
  });

  it("selecting _ Basic Actions", (done) => {
    const fixture = new Fixture(done, EmoStates.SELECTING);
    const BasicActions = Object.values(Basic);

    fixture.expectCanCallActions(BasicActions).exec();
  });

  // I'm sorry Kealy - I'm lazy...
  [
    { init: EmoStates.ANGER, actions: Anger },
    { init: EmoStates.LET_DOWN, actions: LetDown },
    { init: EmoStates.HUMILIATED, actions: Humiliated },
    { init: EmoStates.BITTER, actions: Bitter },
    { init: EmoStates.MAD, actions: Mad },
    { init: EmoStates.AGGRESSIVE, actions: Aggressive },
    { init: EmoStates.FRUSTRATED, actions: Frustrated },
    { init: EmoStates.DISTANT, actions: Distant },
    { init: EmoStates.CRITICAL, actions: Critical },
    { init: EmoStates.DISGUST, actions: Disgust },
    { init: EmoStates.DISAPPROVING, actions: Disapproving },
    { init: EmoStates.DISAPPOINTED, actions: Disappointed },
    { init: EmoStates.AWFUL, actions: Awful },
    { init: EmoStates.REPELLED, actions: Repelled },
    { init: EmoStates.FEAR, actions: Fear },
    { init: EmoStates.SCARED, actions: Scared },
    { init: EmoStates.ANXIOUS, actions: Anxious },
    { init: EmoStates.INSECURE, actions: Insecure },
    { init: EmoStates.WEAK, actions: Weak },
    { init: EmoStates.REJECTED, actions: Rejected },
    { init: EmoStates.THREATENED, actions: Threatened },
    { init: EmoStates.SURPRISE, actions: Surprise },
    { init: EmoStates.STARTLED, actions: Startled },
    { init: EmoStates.CONFUSED, actions: Confused },
    { init: EmoStates.AMAZED, actions: Amazed },
    { init: EmoStates.EXCITED, actions: Excited },
    { init: EmoStates.BAD, actions: Bad },
    { init: EmoStates.BORED, actions: Bored },
    { init: EmoStates.BUSY, actions: Busy },
    { init: EmoStates.STRESSED, actions: Stressed },
    { init: EmoStates.TIRED, actions: Tired },
    { init: EmoStates.SAD, actions: Sad },
    { init: EmoStates.HURT, actions: Hurt },
    { init: EmoStates.DEPRESSED, actions: Depressed },
    { init: EmoStates.GUILTY, actions: Guilty },
    { init: EmoStates.DESPAIR, actions: Despair },
    { init: EmoStates.VULNERABLE, actions: Vulnerable },
    { init: EmoStates.LONELY, actions: Lonely },
    { init: EmoStates.HAPPY, actions: Happy },
    { init: EmoStates.PLAYFUL, actions: Playful },
    { init: EmoStates.CONTENT, actions: Content },
    { init: EmoStates.INTERESTED, actions: Interested },
    { init: EmoStates.PROUD, actions: Proud },
    { init: EmoStates.ACCEPTED, actions: Accepted },
    { init: EmoStates.POWERFUL, actions: Powerful },
    { init: EmoStates.PEACEFUL, actions: Peaceful },
    { init: EmoStates.TRUSTING, actions: Trusting },
    { init: EmoStates.OPTIMISTIC, actions: Optimistic },
  ].forEach(({ init, actions }) => {
    it(`${init} _ ${init.toUpperCase()} Actions`, (done) => {
      const fixture = new Fixture(done, init);
      const Actions = Object.values(actions);
      fixture.expectCanCallActions(Actions).exec();
    });
  });
});
