describe("Example Test", function() {
  it("With a Basic Expect", function() {
    cy.visit("http://192.168.169.210:19006/");
    cy.get("[data-test-id='work']").contains('emotion wheel', {matchCase: false});
  });
});
