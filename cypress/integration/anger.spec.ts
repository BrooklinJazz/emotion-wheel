import { Fixture } from "../fixtures/fixture";
import { Ids, BasicButtons, AngerButtons, Basic } from "../fixtures/testIds";
import { CypressFixture } from "../fixtures/cypressFixture";

// TODO fix types for cy.

describe("Landing Page", function() {
  it("has a start button", function(done) {
    const fixture = new CypressFixture(done, cy);
    fixture
      .visit()
      .isVisible(Ids.StartButton)
      .exec();
  });

  it("has base emotions", function(done) {
    const fixture = new CypressFixture(done, cy)
    fixture.visit()
    .click(Ids.StartButton)
    .isVisible(Basic.ANGER)
    .exec()
  });

  it("click on anger _ see anger emotions", (done) => {
    const fixture = new CypressFixture(done, cy)
    fixture.visit()
      .click(Ids.StartButton)
      .click(Basic.ANGER)
      .isVisible(AngerButtons)
  })
});
