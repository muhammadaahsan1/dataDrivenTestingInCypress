/**
 * Here, we will use before hook so that the same data can be accessed in multiple blocks 
 * and we don't have to call the fixtures every time
 */


describe('testSuite: All tests having data driven testing', () => {
    let userdata; //declaring here to make it used in further it blocks
    before(()=>{
        cy.fixture('loginDataOrangeUsingJSONObject.json').then((data)=>{
            userdata=data;

        })
    })

    //Direct access
    it.only ('FixturesDemoTest', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type(userdata.username); 
    cy.get("input[placeholder='Password']").type(userdata.password);
    cy.get("button[type='submit']").click();
    //Very Important: while writing css for an element having spaces in its class use dot instead of space
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected);

})
    


})
    


