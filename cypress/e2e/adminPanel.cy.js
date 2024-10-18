
// describe('Login', () => {
//   it('Valid Email and password', () => {
//     cy.visit('http://52.6.44.195:3000/users/sign_in')
//     cy.get('#login-email').type('superadmin@example.com')
//     cy.get('#password').type('123456')
//     cy.get('.login-submit').click()
//   })
//   it('Invalid Email', () => {
//     cy.visit('http://52.6.44.195:3000/users/sign_in')
//     cy.get('#login-email').type('sthis@example.com')
//     cy.get('#password').type('123456')
//     cy.get('.login-submit').click()
//     cy.get('.swal2-x-mark').should('be.visible')
//   })
//   it('Invalid Pass', () => {
//     cy.visit('http://52.6.44.195:3000/users/sign_in')
//     cy.get('#login-email').type('superadmin@example.com')
//     cy.get('#password').type('12345786')
//     cy.get('.login-submit').click()
//   })

// })
describe('Create User', () => {
  // it('Create User', () => {
  //   cy.visit('http://52.6.44.195:3000/users/sign_in')
  //   cy.get('#login-email').type('superadmin@example.com')
  //   cy.get('#password').type('123456')
  //   cy.get('.login-submit').click()
  //   cy.get('div.sidebar a').eq(0)
  //     .should('be.visible')
  //     .and('have.attr', 'href');
  //   cy.get('div.sidebar a').eq(0).click();
  //   cy.generateRandomEmail().then(randomEmail => {
  //     cy.get('#user_email').type(randomEmail)
  //     cy.get('#password').type('654321')
  //     cy.get('#confirm_password').type('654321')
  //     cy.get('#user_role').select('operator');
  //     cy.get('#user_service').select('mygov');
  //     cy.get('.create-user-button').click()
  //   })
  // })
  // it('Create User with existing user', () => {
  //   cy.visit('http://52.6.44.195:3000/users/sign_in')
  //   cy.get('#login-email').type('superadmin@example.com')
  //   cy.get('#password').type('123456')
  //   cy.get('.login-submit').click()
  //   cy.get('div.sidebar a').eq(0)
  //     .should('be.visible')
  //     .and('have.attr', 'href');
  //   cy.get('div.sidebar a').eq(0).click();
  //   cy.get('#user_email').type('test001@gmail.com')
  //   cy.get('#password').type('654321')
  //   cy.get('#confirm_password').type('654321')
  //   cy.get('#user_role').select('operator');
  //   cy.get('#user_service').select('mygov');
  //   cy.get('.create-user-button').click()
  //   cy.get('.swal2-popup').should('be.visible')
  //   cy.get('.swal2-confirm').click()
  // })
  // it('If the password and confirmed is not matching then show error message', () => {
  //   cy.visit('http://52.6.44.195:3000/users/sign_in')
  //   cy.get('#login-email').type('superadmin@example.com')
  //   cy.get('#password').type('123456')
  //   cy.get('.login-submit').click()
  //   cy.get('div.sidebar a').eq(0)
  //     .should('be.visible')
  //     .and('have.attr', 'href');
  //   cy.get('div.sidebar a').eq(0).click();
  //   cy.get('#user_email').type('test001@gmail.com')
  //   cy.get('#password').type('654321')
  //   cy.get('#confirm_password').type('123456')
  //   cy.get('#user_role').select('operator');
  //   cy.get('#user_service').select('mygov');
  //   cy.get('.create-user-button').click()
  //   cy.get('.swal2-popup').should('be.visible')
  //   cy.get('.swal2-confirm').click()
  // })
  it('Search The User', () => {
    cy.login('superadmin@example.com', '123456')
    cy.get('div.sidebar a').eq(0)
      .should('be.visible')
      .and('have.attr', 'href');
    cy.get('div.sidebar a').eq(0).click();
    cy.scrollTo('0, 500');
    cy.get('#dt-search-0').type('user_9up0yjxvq@example.com')
    cy.get('tr > :nth-child(3) > .d-flex').should('contain', 'user_9up0yjxvq@example.com')
  })
})