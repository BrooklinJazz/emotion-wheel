describe("Example Test", function() {
  it("With a Basic Expect", function() {
    cy.visit("");
    cy.get("[data-test-id='work']").contains('emotion wheel', {matchCase: false});
  });
});
