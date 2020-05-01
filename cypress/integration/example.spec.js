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
    cy.get("[data-test-id='anger']").should("not.exist");

    cy.get("[data-test-id='startBtn']").click();
    cy.get("[data-test-id='startBtn']").should("not.exist");
    cy.get("[data-test-id='fear']");
    cy.get("[data-test-id='disgust']");
    cy.get("[data-test-id='joy']");
    cy.get("[data-test-id='surprise']");
    cy.get("[data-test-id='sadness']");

    cy.get("[data-test-id='anger']").click();
    angerEmotions.forEach(emotion => {
      cy.get(`[data-test-id=${emotion.toLowerCase()}]`);
    });
    baseEmotions.forEach(emotion => {
      cy.get(`[data-test-id=${emotion.toLowerCase()}]`).should("not.exist");
    });
  });
});
