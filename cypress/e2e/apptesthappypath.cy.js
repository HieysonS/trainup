describe('Happy Path - User Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Visit homepage
  });

  it('Successful user registration, login, profile update, and routine completion', () => {
    // Register a new user
    cy.visit('http://localhost:5173/register');
    cy.get('#root > div > form > div:nth-child(3) > input').type('happyUser'); // Username
    cy.get('#root > div > form > div:nth-child(4) > input').type('happyuser@mail.com'); // Email
    cy.get('#root > div > form > div:nth-child(5) > input').type('@happyPass123'); // Password
    cy.get('#root > div > form > div:nth-child(6) > input').type('@happyPass123'); // Confirm Password
    cy.get('#root > div > form > div:nth-child(10) > button').click(); // Register
    cy.wait(2000);

    // Login
    cy.visit('http://localhost:5173/login');
    cy.get('#exampleInputEmail1').type('happyuser@mail.com'); // Email
    cy.get('#exampleInputPassword1').type('@happyPass123'); // Password
    cy.get('.signin > :nth-child(5)').click(); // Login
    cy.wait(2000);

    // Update profile
    cy.get(':nth-child(3) > .d-flex > .img-fluid').click(); // Go to profile
    cy.get('#root > div > div:nth-child(1) > div.text-center.my-4 > div > a > img').click(); // Edit profile
    cy.get('#root > div > div.border.p-3.rounded.container > form > div:nth-child(1) > input').clear().type('HappyUserUpdated');
    cy.contains('Guardar').click();
    cy.wait(2000);

    // Create and finish a routine
    cy.get(':nth-child(1) > .d-flex > .img-fluid').click(); // Start routine
    cy.get('.btn').click(); // Complete routine
    cy.get('.modal-footer > .btn-danger').click(); // Confirm completion
  });
});
