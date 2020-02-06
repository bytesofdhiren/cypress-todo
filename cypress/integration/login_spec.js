import { commonOperation} from './common_spec';

describe('Login Page', () => {
  before(() => {    
    commonOperation.loginOperation();
  });
  
  it ('Ensure page gets loaded', () => {        
    cy.get('#username');
    cy.get('#password');      
  });  

  it ('User able to login with correct id password', () => {    
    cy.server();      
    cy.route('POST','/api/auth/login').as('login');
    cy.route('GET','/api/class/educator/dashboard/counts').as('counts');    
    cy.get('#username')
      .type(Cypress.env('faculty-email'))
      .should('have.value', 'testing7@codezinger.com'); 
    cy.get('#password')
      .type(Cypress.env('faculty-password'))
      .should('have.value', 'G@piNana_Twenty'); 
    cy.get('#login').click();
    cy.wait('@login');
    cy.wait('@counts');
    cy.title().should('eq', 'Dashboard - CodeZinger');
  });
});