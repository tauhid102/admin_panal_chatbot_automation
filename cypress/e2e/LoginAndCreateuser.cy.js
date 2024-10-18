import userDetails from '../fixtures/emails.json'
describe("Login and Create User", () => {
    it('Check login and logout', () => {
        cy.Login('superadmin@example.com', '123456')
        cy.logout()
    })
    it.only('Create Admin user', () => {
        cy.Login('superadmin@example.com', '123456')
        cy.get('[href="/admin_panel/users/sign_up"] > .sidebar-item-inactive').click()
        cy.wait(5000)
        cy.generateRandomCredentials().then(({ email, password }) => {
            // cy.get('#user_email').type(email)
            // cy.get('#password').type(password)
            // cy.get('#confirm_password').type(password)
            // cy.get('#user_role').select('admin');
            // cy.get('#user_service').select('mygov');
            // cy.get('.create-user-button').click()
            cy.log(email, password);
        });
    })
})