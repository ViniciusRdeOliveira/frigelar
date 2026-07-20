/// <reference types = "cypress" />

describe('Acesso site',()=>{
 beforeEach(()=>{
    cy.viewport(1366, 768);
    cy.visit('https://www.frigelar.com.br');
    
 })

    it('Deve fazer login',()=>{
        cy.get('#frigelar-login', {timeout: 10000})
        //cy.get('.login-text', {timeout: 30000})
            .should('be.visible')
            .click()
       cy.get('#email', { timeout: 10000 })
            .should('be.visible')
            .click()
            .clear()
            .type('viniciusribeiro@frigelar.com.br')
    .should('have.value', 'viniciusribeiro@frigelar.com.br');
        cy.get('[name="password"]')
            .should('be.visible')
            .click()
            .clear()
            .type('anthonyA1#');
        cy.get('#login-form > :nth-child(5) > .primaryBtn').click();
        cy.get('.logged > b', {timeout: 10000})
            .should('contain','Vinicius');
        
        
    })

    it('Deve Buscar produto', () => {

        cy.get('#search-input')
            .click();

        cy.get('#search-input', { timeout: 10000 })
            .should('not.have.attr', 'readonly');

        cy.get('#search-input', { timeout: 10000 })
            .type('Desumidificador de Ar', { delay: 50 });

        cy.get('.search-button').click();

        cy.get('.productListingContainer', { timeout: 10000 })
            .should('be.visible');

})

it.only('AddToCart', ()=>{
        cy.visit('https://www.frigelar.com.br/desumidificador-de-ar-antimofo-permanente-eos-bivolt/p/kit1779', {timeout: 10000})
        cy.get('.product-name')
            .should('contain', 'Desumidificador de Ar EOS Antimofo Permanente Bivolt', { timeout: 10000 })
        cy.get('.new-price-container > .old-price', { timeout: 10000 })
            .should('exist').and('be.visible');
        cy.get('.flex-wrap > :nth-child(1) > .price',{ timeout: 10000 })
            .should('exist').and('be.visible');
        cy.get('#buy-button')
            .click();
        cy.get('#warrantyModal > .modal-dialog > .modal-content',{ timeout: 10000 })
            .should('exist').and('be.visible')
        
      /* cy.intercept('POST', '/api/logistic').as('logistic');

       // cy.get('#btnCalcularFrete').click()

        cy.wait('@logistic').then((xhr) => {
            expect(xhr.status).to.equal(200)
            expect(xhr.responseBody).to.have.property('success', true)

        })*/
    })
        
})   

