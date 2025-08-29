describe('homepage',()=>{it('loads and shows header',()=>{cy.visit('/');cy.contains('Burson UI Demo').should('exist');});});
