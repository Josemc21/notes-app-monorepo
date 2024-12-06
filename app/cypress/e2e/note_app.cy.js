describe('Note app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')

    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Miguel',
      username: 'midudev',
      password: 'lamidupassword'
    }

    cy.request('POST', 'http://localhost:3001/api/users/', user)
  })

  it('front page can be opened', () => {
    cy.contains('Notes')
  })

  it('user can login', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder="Username"]').type('midudev')
    cy.get('[placeholder="Password"]').type('lamidupassword')
    cy.get('#form-login-button').click()
    cy.get('button').contains('New Note')
  })

  it('login fails with wrong password', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder="Username"]').type('midudev')
    cy.get('[placeholder="Password"]').type('wrong')
    cy.get('#form-login-button').click()

    // css selector to check the error message
    /*
    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
      .should('have.css', 'font-size', '16px')
    */
  })

  describe('when logged in', () => {
    beforeEach(() => {
      cy.login({ username: 'midudev', password: 'lamidupassword' })
    })

    it('a new note can be created', () => {
      const noteContent = 'a note created by cypress' + Math.random()
      cy.get('button').contains('New Note').click()
      cy.contains('Create a new note')
      cy.get('[data-test-id="new-note-input"]').type(noteContent)
      cy.get('button').contains('Save').click()
      cy.contains(noteContent)
    })

    describe('and a note exists', () => {
        beforeEach(() => {
          cy.createNote({ 
            content: 'This is the first note',
            important: false
          })

          cy.createNote({ 
            content: 'This is the second note',
            important: false
          })

          cy.createNote({ 
            content: 'This is the third note',
            important: false
          })
        })

        it('it can be made important', () => {
          cy.contains('This is the second note').parent().find('button').as('theButton')
          cy.get('@theButton').click()
          cy.get('@theButton').should('contain', 'make not important')
        })
    })
  })
})