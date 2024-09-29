///<reference types="cypress"/>
import { LoginPage } from '../pages/login_page.cy'

const login_page= new LoginPage()

//before all tests , visit the main page
beforeEach(() =>{
  cy.visit('https://freelance-learn-automation.vercel.app');
 
});

//Test1: User can navigate to login page
describe('User login Workflow', () =>{ 
it('should verify account sign-in', () =>{
    login_page.click_burgerImg();
    login_page.click_login();
    cy.url().should('include', '/login', { timeout: 10000 }); 
    login_page.enterUsername('testuser9kavuk@example.com');
    login_page.enterPassword('TestPassword123');
    login_page.clickLogin()
 });
});

