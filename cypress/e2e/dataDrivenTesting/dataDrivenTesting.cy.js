describe('testSuite: All tests having data driven testing', () => {
    //Direct access
    it.only ('FixturesDemoTest', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture('loginDataOrange.json').then((data)=>{
    cy.get("input[placeholder='Username']").type(data.username); 
    cy.get("input[placeholder='Password']").type(data.password);
    cy.get("button[type='submit']").click();
    //Very Important: while writing css for an element having spaces in its class use dot instead of space
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', data.expected);

})
    


})
})