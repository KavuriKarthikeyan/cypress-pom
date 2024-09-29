export class SignupPage{

    constructor(){
        this.burger_img = '[src="/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg"]';
        this.login_btn = 'button.nav-menu-item'
        this.sign_up_email_textbox = 'input[name="email"]'
        this.sign_up_password_textbox='input[name="password"]'
        this.button= '.submit-btn'

        this.signupName= '#name'
        this.signUpBtn='a[href="/signup"]'
        this.sign_up_checkbox='#6645751b07bdedf17a8769c7'
        this.sign_up_radioBtn='input[type="radio"][value="Female"]'
        this.sign_up_State = '#state'
        this.sign_up_hobbies = '#hobbies'
        this.sign_up_submitBtn = 'button[type="submit"]'
        
        
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
       
        click_signup(){
            cy.get(this.signUpBtn).should('be.visible').click();
        }
        entername(name){
            cy.get(this.signupName).type(name)
        }
        enterSignupEmail(email){
            cy.get(this.sign_up_email_textbox).type(email)
        }
        enterSignupPassword(password){
            cy.get(this.sign_up_password_textbox).type(password)
        }
        click_signup_checkbox(){
            cy.get(this.sign_up_checkbox).should('be.visible').click();
        }
        click_signup_radioBtn(){
            cy.get(this.sign_up_radioBtn).should('be.visible').click();
        }
        enterSignUpState(state){
            cy.get(this.sign_up_State).should('be.visible').select(state);
        }
        enterSignupHobby(hobby){
            cy.get(this.sign_up_hobbies).should('be.visible').select(hobby);
        }
        click_signUp_submitBtn(){
            cy.get(this.sign_up_submitBtn).click()
        }

       

}