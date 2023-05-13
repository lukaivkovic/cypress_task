beforeEach(function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
 })
it('Step 2 - Radio Button Example', function(){
    cy.get('[type="radio"]').check().should('have.length', 3).and('be.checked')
})
it('Step 3 - Suggestion Class Example', function(){
    cy.get('.inputs.ui-autocomplete-input').type('#$%')
    cy.get('#ui-id-1').should('not.be.visible')
    cy.get('.inputs.ui-autocomplete-input').clear()
    cy.get('.inputs.ui-autocomplete-input').type('Spa')
    cy.get('#ui-id-1').should('have.text', 'Spain').click()
})
it('Step 4 - Dropdown Example', function(){
    cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1')
    cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2')
    cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3')
})
it('Step 5 - Checkbox Example', function(){
    cy.get('#checkBoxOption1').should('not.be.checked')
    cy.get('#checkBoxOption2').should('not.be.checked')
    cy.get('#checkBoxOption3').should('not.be.checked')
    cy.get('#checkBoxOption1').click().should('have.value', 'option1').and('be.checked')
    cy.get('#checkBoxOption2').click().should('have.value', 'option2').and('be.checked')
    cy.get('#checkBoxOption3').click().should('have.value', 'option3').and('be.checked')
})
it('Step 6 - Switch to Alert Example', function(){
    cy.get('#name').should('have.attr', 'placeholder', 'Enter Your Name').type('Luka').should('have.value', 'Luka')
    cy.get('#confirmbtn').click()
    cy.on('window:confirm', (text) => {
        expect(text).to.include('Hello Luka, Are you sure you want to confirm?')
    })
    cy.get('#confirmbtn').should('be.enabled')
})
it('Step 7 - Element Displayed Example', function(){
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
})
it('Step 8 - Mouse Hover Example', function(){    
    cy.get('#mousehover').realHover()
    cy.get('.mouse-hover-content').should('contain', 'Top').and('contain', 'Reload')
    cy.log('Before Reload')
    cy.get('.mouse-hover-content').contains('Reload').click()
    cy.log('After Reload')
    cy.get('#mousehover').realHover()
    cy.get('.mouse-hover-content').contains('Top').click()
    cy.window().its('scrollY').should('equal', 0)
    })
it('Step 9 - Web Table Example', function(){       
    cy.get('.table-display').contains('WebServices / REST API Testing with SoapUI').parent().children().eq(2).should('contain', '35')
    })
it('Step 10 - Broken Link', function(){        
    cy.get('.gf-li').contains('Broken Link').invoke('attr', 'href').then(function(url){
        cy.request({url:url, failOnStatusCode: false}).its('status').should('equal', 404)
    })
})