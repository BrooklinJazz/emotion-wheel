import { EmoActions, EmoStates, EmoTree } from "./actions";
import { Fixture } from "./fixture";

describe("stateMachine _ transitions", () => {
  it("init _ START", (done) => {
    const fixture = new Fixture(done);
    fixture.send(EmoActions.START).expectIsState(EmoStates.SELECTING).exec();
  });

  const FirstLevel = Object.keys(EmoTree);

  FirstLevel.forEach((one) => {
    const levelTwo = Object.keys(EmoTree[one]);
    levelTwo.forEach((two) => {
      const levelThree = Object.keys(EmoTree[one][two]);
      levelThree.forEach((three) => {
        it(`statemachine _ send: INIT -> START -> ${one} -> ${two} -> ${three}`, (done) => {
          const fixture = new Fixture(done, EmoStates.INIT);
          fixture
            .send(EmoActions.START)
            .expectIsState(EmoStates.SELECTING)
            .send(one)
            .expectIsState(one)
            .send(two)
            .expectIsState(two)
            .send(three)
            .expectIsState(three)
            .exec();
        });
      });
    });
  });
});
