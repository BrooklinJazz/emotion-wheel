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

describe("Landing Page", function() {
  it("has a start button", function() {
    cy.visit("");
    cy.get("[data-test-id='startBtn']").should("be.visible");
  })

  it("has base emotions", function() {
    cy.visit("");
    cy.get("[data-test-id='startBtn']").click();
    cy.get("[data-test-id='startBtn']").should("not.exist");

    baseEmotions.forEach(emotion => {
      cy.get(`[data-test-id=${emotion.toLowerCase()}]`).should("be.visible");
    });
  })

  it("has base anger emotions", function() {
    cy.visit("");
    cy.get("[data-test-id='startBtn']").click();
    cy.get("[data-test-id='anger']").click();
    cy.get("[data-test-id='anger']").should("not.exist");

    angerEmotions.forEach(emotion => {
      cy.get(`[data-test-id=${emotion.toLowerCase()}]`).should('be.visible');
    });
  })
});
