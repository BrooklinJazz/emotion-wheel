import { Ids } from "../fixtures/testIds";
import { CypressFixture } from "../fixtures/cypressFixture";
import { EmoTree } from "../../src/xstate/actions";

describe("Emotion Behavior", () => {
  it("State Changes refled emotree", (done) => {
    const fixture = new CypressFixture(done, cy);
    const FirstLevel = Object.keys(EmoTree);

    FirstLevel.forEach((one) => {
      const levelTwo = Object.keys(EmoTree[one]);
      levelTwo.forEach((two) => {
        const levelThree = Object.keys(EmoTree[one][two]);
        levelThree.forEach((three) => {
          fixture
            .visit()
            .click(Ids.StartBtn)
            .click(one)
            .click(two)
            .click(three);
        });
      });
    });

    fixture.exec();
  });
});
