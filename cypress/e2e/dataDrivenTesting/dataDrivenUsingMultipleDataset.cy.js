/**
 * Here, we will use before hook so that the same data can be accessed in multiple blocks 
 * and we don't have to call the fixtures every time
 */


describe('testSuite: All tests having data driven testing', () => {
    let userdata; //declaring here to make it used in further it blocks
    
    

    //Direct access
    it('dataDrivenWMultipleDataset', () => {

    cy.fixture('loginDataOrangeUsingMultipleDatasetinArray.json').then((data)=>{

     

    cy.visit("https://opensource-demo.orangehrmlive.com/");

    //as multiple datset involved, use forEach loop to take values from one dataset at a time
    
    data.forEach((userdata) => {
        
    
    cy.get("input[placeholder='Username']").type(userdata.username); 
    cy.get("input[placeholder='Password']").type(userdata.password);
    cy.get("button[type='submit']").click();
    //Very Important: while writing css for an element having spaces in its class use dot instead of space

    if(userdata.username=='Admin' && userdata.password=='admin123'){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', userdata.expected);
        //logging out so that the test can proceed with further dataset
        cy.get(".oxd-userdropdown-tab > .oxd-icon").click()
        cy.get(":nth-child(4) > .oxd-userdropdown-link").click()
        

    }

    else{
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userdata.expected)
    }
});

})   
})
    


})
    


