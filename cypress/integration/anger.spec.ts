import { Fixture } from "../fixtures/fixture";
import { Ids, BaseButtons } from "../fixtures/testIds";
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

  xit("has base emotions", function(done) {
    const fixture = new CypressFixture(done, cy)
    fixture.visit()
    .click(Ids.StartButton)
    .isVisible(BaseButtons)
    .exec()
  });
});
