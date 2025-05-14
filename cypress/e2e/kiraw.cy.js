describe('Simulate 100 Visits', () => {
    const numberOfVisits = 10; // Update this to 100 for 100 visits

    for (let i = 0; i < numberOfVisits; i++) {
        it(`Visit iteration ${i + 1}`, () => {
            cy.visit('https://kiraw.fi/');

            // Optionally, add a small delay between visits to reduce potential flakiness
            // cy.wait(500); // Wait for 500 milliseconds between visits
        });
    }
});
