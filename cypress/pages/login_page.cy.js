export class LoginPage{

    constructor(){
    this.burger_img = '[src="/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg"]';
    this.login_btn = 'button.nav-menu-item'
    this.email_textbox = '#email1'
    this.password_textbox='#password1'
    this.button= '.submit-btn'
    }

    navigate(){
        cy.visit('https://freelance-learn-automation.vercel.app')
    }
    click_burgerImg(){
        cy.get(this.burger_img).click()
    }
    click_login(){
        cy.get(this.login_btn).click()
    }
   
    enterUsername(user){
        cy.get(this.email_textbox).type(user)
    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }
    clickLogin(){
        cy.get(this.button).click()

    }

}