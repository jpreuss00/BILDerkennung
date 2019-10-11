  describe('bild3rkennung Website', function () {
    it('is reachable and contains a headline', function () {
        cy.visit('')

        cy.get('h1').should('contain', 'BILDerkennung')
    })

    it('allows to clear the input fields', function () {
        cy.visit('')

        var input = "Angela Merkel"
        
        cy.get('#inputtext').type(input)

        cy.get('#button').click()

        cy.get('#categorie').should('be', 'Bild')

    })
})