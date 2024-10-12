describe('AdSet', () => {

  const selectorsList = {
    usernameField: "[name='Email']",
    passwordField: "[type='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: "[for='filtro_estoque']",
    wrongCredentialAlert: '.field-validation-error',
    recoverPassword: '#loginBtn'

  }

  const userData = {
    userSucess: {
      username: 'qa@adset.com.br',
      password: '9PK6#E8m'
    },
    userFail: {
      username: 'qa@adset.com.br',
      password: 'test_erro'
    }
  }

  it.only('Login - Success', () => {
    cy.visit('https://www.adset.com.br/Integrador/Home/Index')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/Integrador/Home/Principal')
    cy.get(selectorsList.sectionTitleTopBar).contains('Estoque')
  })

  it('Login - Fail', () => {
    cy.visit('https://www.adset.com.br/Integrador/Home/Index')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

  it('Login - Forgot Password', () => {
    cy.visit('https://www.adset.com.br/Integrador/Home/Index')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    cy.get('.forgot > a').click()
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.recoverPassword).click()
    cy.get('.alert-heading').contains('Senha enviada para o e-mail!')
  })

})