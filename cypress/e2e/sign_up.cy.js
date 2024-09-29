///<reference types = "cypress"/>
import { SignupPage } from '../pages/sign_up_page.cy'

const sign_up_page = new SignupPage()


beforeEach(() =>{
  cy.visit('https://freelance-learn-automation.vercel.app');
 
});

describe('User Account Creation Workflow', () =>{ 

//Test1: User can navigate to sign-up page
  it('should verify account creation', () => {

    sign_up_page.click_burgerImg();
    sign_up_page.click_login(); 
    sign_up_page.click_signup();

    sign_up_page.entername('testkav')
    sign_up_page.enterSignupEmail('testuser19kavuk@example.com');
    sign_up_page.enterSignupPassword('TestPassword123');
    sign_up_page.click_signup_checkbox();
    sign_up_page.click_signup_radioBtn();
    sign_up_page.enterSignUpState('Andhra Pradesh');
    sign_up_page.enterSignupHobby('Playing');
    sign_up_page.click_signUp_submitBtn();

  });
});