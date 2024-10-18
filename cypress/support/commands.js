// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('generateRandomCredentials', () => {
  const randomString = Math.random().toString(36).substring(2, 11);
  const email = `user${randomString}@example.com`;
  // Generate a random password (e.g., 10 characters long)
  const password = Math.random().toString(36).substring(2, 12);

  // Call the task to save the email and password
  cy.task('saveCredentials', { email, password }).then(() => {
    // Resolve the credentials object after saving
    cy.wrap({ email, password });
  });
});
Cypress.Commands.add('Login', (userName, password) => {
  cy.visit('https://chatbot.test.nascenia.com/admin_panel/users/sign_in')
  cy.get('#login-email').type(userName)
  cy.get('#password').type(password)
  cy.get('.login-submit').click()
});
Cypress.Commands.add('logout', () => {
  cy.get("a[data-turbo-method='delete'] span[class='sidebar-item-inactive-text']").click()
});