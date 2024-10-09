describe('Unhappy Path - Handling errors and invalid inputs', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173'); // Visit homepage
    });
  
    it('Failed user registration with invalid inputs', () => {
      // Attempt to register with invalid data
      cy.visit('http://localhost:5173/register');
      cy.get('#root > div > form > div:nth-child(3) > input').type(''); // No username
      cy.get('#root > div > form > div:nth-child(4) > input').type('invalidemail'); // Invalid email
      cy.get('#root > div > form > div:nth-child(5) > input').type('short'); // Weak password
      cy.get('#root > div > form > div:nth-child(6) > input').type('mismatch'); // Mismatched password
      cy.get('#root > div > form > div:nth-child(10) > button').click(); // Attempt to register
      cy.get('.error-message').should('contain', 'Please enter valid details'); // Check for error message
    });
  
    it('Failed login with wrong credentials', () => {
      // Attempt to log in with wrong password
      cy.visit('http://localhost:5173/login');
      cy.get('#exampleInputEmail1').type('angel@mail.com'); // Correct email
      cy.get('#exampleInputPassword1').type('wrongPassword123'); // Wrong password
      cy.get('.signin > :nth-child(5)').click();
      cy.get('.error-message').should('contain', 'Invalid login credentials'); // Verify error message
    });
  
    it('Handling network failure during routine completion', () => {
      // Simulate a network failure during routine completion
      cy.visit('http://localhost:5173');
      cy.get(':nth-child(1) > .d-flex > .img-fluid').click(); // Start routine
      cy.intercept('POST', '/api/routines/complete', { forceNetworkError: true }).as('routineComplete');
      cy.get('.btn').click(); // Attempt to complete routine
      cy.wait('@routineComplete');
      cy.get('.error-message').should('contain', 'Network error. Please try again'); // Check for error
    });
  });
  