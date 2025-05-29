Cypress.Commands.add("login", () => {
    cy.session("user", () => {
      cy.visit("/sign-in"); // Or /sign-up if testing new account
  
      cy.get('input[name="email"]').type("your-test-user@example.com");
      cy.get('input[name="password"]').type("YourPassword123");
  
      cy.get('button[type="submit"]').click();
  
      // Wait until redirected to the homepage or dashboard
      cy.url().should("include", "/"); // or whatever path means "logged in"
    });
  });
  