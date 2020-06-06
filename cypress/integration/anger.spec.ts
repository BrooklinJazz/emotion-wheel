import { Fixture } from "../fixtures/fixture";
import { Ids, BasicButtons, AngerButtons } from "../fixtures/testIds";
import { EmoActions, Anger } from "../fixtures/actions";
import { CypressFixture } from "../fixtures/cypressFixture";

// TODO fix types for cy.

// describe("Landing Page", function() {
//   it("has a start button", function(done) {
//     const fixture = new CypressFixture(done, cy);
//     fixture
//       .visit()
//       .isVisible(Ids.StartButton)
//       .exec();
//   });

//   it("has base emotions", function(done) {
//     const fixture = new CypressFixture(done, cy)
//     fixture.visit()
//     .click(Ids.StartButton)
//     .isVisible(Basic.ANGER)
//     .exec()
//   });

//   it("click on anger _ see anger emotions", (done) => {
//     const fixture = new CypressFixture(done, cy)
//     fixture.visit()
//       .click(Ids.StartButton)
//       .click(Basic.ANGER)
//       .isVisible(AngerButtons)
//   })
// });


describe("Emotion Behavior", () => {
  beforeEach(() => {

  })

  it("full depth _ ANGER -> LET_DOWN -> BETRAYED", (done) => {
    const fixture = new CypressFixture(done, cy)
    // TODO expand Data Object 
    const Emotions = {
      ANGER: {
        LET_DOWN: {
          BETRAYED: ""
        }
      }
    }

    const FirstLevel = Object.keys(Emotions)

    FirstLevel.forEach((one) => {
      const levelTwo = Object.keys(Emotions[one])
      levelTwo.forEach((two) => {
        const levelThree = Object.keys(Emotions[one][two])
        levelThree.forEach((three) => {
          console.log(one, two, three)
          fixture.visit()
          .click(Ids.StartButton)
          .click(one)
          .click(two)
          .click(three)
          .exec()
        })
      })
    })
  });
})