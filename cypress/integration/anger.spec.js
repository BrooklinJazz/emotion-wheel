const angerEmotions = [
  "LetDown",
  "Humiliated",
  "Bitter",
  "Mad",
  "Aggressive",
  "Frustrated",
  "Distant",
  "Critical"
];

const baseEmotions = ["Disgust", "Fear", "Joy", "Surprise", "Anger", "Sadness"];
import { Fixture } from "../fixtures/fixture";

class CypressFixture extends Fixture {
  constructor(done) {
    super(done);
  }
}

describe("Landing Page", function() {
  it("has a start button", function(done) {
    const fixture = new CypressFixture(done);
    fixture
      .add(() => cy.visit(""))
      .add(() => cy.get("[data-test-id='startBtn']").should("be.visible"))
      .exec()
  });

  xit("has base emotions", function() {
    cy.visit("");
    cy.get("[data-test-id='startBtn']").click();
    cy.get("[data-test-id='startBtn']").should("not.exist");

    baseEmotions.forEach(emotion => {
      cy.get(`[data-test-id=${emotion.toLowerCase()}]`).should("be.visible");
    });
  });
});
