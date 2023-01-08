it("passes", () => {
  cy.visit("/create");

  //1. visit Page
  cy.url().should("match", /\/create/)

  //2. Set Parameters
  cy.findByLabelText("Title").type("Jans luxury Cabin 2");
  cy.findByLabelText("Description").type("One of the most luxury Cabin in the world.").should("have.value", "One of the most luxury Cabin in the world.");
  cy.findByLabelText("Hero Image URL").type("jan");

  //3. Add Cabin
  cy.findByRole("button", {name: "addCabin"}).click();

  //4. be exist
  cy.findAllByText("An error occured! Status:").should("be.exist");
  cy.findAllByText("Bad Request").should("be.exist");

});

export {};
