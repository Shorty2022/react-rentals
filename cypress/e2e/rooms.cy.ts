  it('passes', () => {
    cy.visit("/rooms");

    //1. Match Page
    cy.url().should("match", /\/rooms/)

    //2. Assert I'm on the first page
    cy.findAllByText("Page 1 of 3 (20 results in total)").should("be.exist");

    //3. Assert the previous button is disabled
    cy.findByRole("button", {name: "previous"}).should("be.disabled");

    //4. click on the nextbutton (implies it is not disabled)
    cy.findByRole("button", {name: "next"}).click();
    
    //5. Assert I'm on the second page
    cy.findAllByText("Page 2 of 3 (20 results in total)").should("be.exist")
  });

  export {};