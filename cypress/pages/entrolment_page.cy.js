export class LoginPage{

    burger_img = '[src="/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg"]'
    login_btn = 'button.Log in'
    email_textbox = '#email1'
    password_textbox='#password1'
    button= '.submit-btn'

    click_burgerImg(){
        cy.get(burger_img).click()
    }
    click_login(){
        cy.get(this.login_btn).click()
    }
    navigate(){
        cy.visit('https://freelance-learn-automation.vercel.app')
    }
    enterUsername(user){
        cy.get(email_textbox).type(user)
    }
    enterPassword(password){
        cy.get(password_textbox).type(password)
    }
    clickLogin(){
        cy.get('.submit-btn').click()

    }

}