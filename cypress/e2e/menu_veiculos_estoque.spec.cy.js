describe('AdSet', () => {

  const selectorsList = {
    usernameField: "[name='Email']",
    passwordField: "[type='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: "[for='filtro_estoque']",
    wrongCredentialAlert: '.field-validation-error',
    recoverPassword: '#loginBtn',
    includeTitleTopBar: '.heading h3',
    markCar: '.marca',
    modelCar: '.modelo'

  }

  const userData = {
    userSucess: {
      username: 'qa@adset.com.br',
      password: '9PK6#E8m'
    },
  }

  it.only('Menu - Veiculos Estoque ', () => {
    cy.visit('https://www.adset.com.br/Integrador/Home/Index');
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/Integrador/Home/Principal');
    cy.get(selectorsList.sectionTitleTopBar).contains('Estoque');
    cy.contains('Veículos').trigger('mouseover');
    cy.get("[href='/Integrador/Veiculo/Cadastro?PageCall=VeiculoAvulso_Index']").should('be.visible').click();
    cy.get('.notExpand');
    cy.get('body').trigger('mousemove').click(0, 0);
    cy.get(selectorsList.includeTitleTopBar).contains('Incluir');
    cy.get(selectorsList.markCar).type('Jeep').click();
    
    //cy.get('.select2-with-searchbox > .select2-results').contains('Principais');
    // cy.get('.select2-with-searchbox > .select2-results').should('be.visible').then($options => {
    //   const $list = $options.find('li.select2-result');
    //   const listSize = $list.length;
    //     if (listSize > 0) {
    //       const randomIndex = Math.floor(Math.random() * listSize);
    //         cy.wrap($list[randomIndex]).click();} 
    //     else {
    //       throw new Error('Nenhuma opção disponível no dropdown');}});

    cy.get('.select2-with-searchbox > .select2-results').type('Onix').click('');
    cy.get('.modelo').type('Renegade').click();
    //cy.get(':nth-child(1) > :nth-child(3) > .row-fluid > .select2-container > .select2-choice > div > b').type('02024');





  })
})