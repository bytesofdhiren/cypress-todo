let commonOperation = {
    loginOperation: () => {
        cy.visit('/login');
        cy.clearCookies();
        cy.clearLocalStorage(); 
        cy.visit('/login');  
    },
};

exports.commonOperation = commonOperation;