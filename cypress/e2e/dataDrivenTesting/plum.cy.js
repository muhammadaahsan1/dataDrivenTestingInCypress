describe('testSuite: All tests having data driven testing', () => {
    //Direct access
    it.only ('FixturesDemoTest', () => {

    cy.visit("https://plumlogix.com/partners/");
    cy.get('h4').eq(0).should('contains.text', 'Lightning Conversion')

})


    



})