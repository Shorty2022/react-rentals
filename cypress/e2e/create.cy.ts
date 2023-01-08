it('passes', () => {
    cy.visit("/create");

    //1. Match Page
    cy.url().should("match", /\/create/)

    //2. Check text
    cy.findAllByText("Add rentable cabin").should("be.exist");

    //3. Input fields 
    cy.findByLabelText("Title").type("Jans luxury Cabin").should("have.value", "Jans luxury Cabin");
    cy.findByLabelText("Description").type("One of the most luxury Cabin in the world.").should("have.value", "One of the most luxury Cabin in the world.");
    cy.findByLabelText("Hero Image URL").type("https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d").should("have.value", "https://c.pxhere.com/photos/5f/c8/galleon_ship_moored_sail_vessel_nautical_transportation_boat-553557.jpg!d");

    //4. Featured Switch not working!
    cy.findByLabelText('Featured').click().should("have.value", "on");

    //5. Add cabin Button
    cy.findByRole('button', {name: "addCabin"}).should("be.exist")

    //6. Check button is clicked
    cy.findByRole("button", {name: "addCabin"}).click();

    //7. URL change
    cy.url().should("include", "/room");

})

export {};