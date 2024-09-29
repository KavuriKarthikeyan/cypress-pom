describe('Training Course Enrolment Workflow', () => {

  beforeEach(() => {
    cy.visit('https://freelance-learn-automation.vercel.app');
    
    // Log in process
    cy.get('input[name="email"]').should('be.visible').type('test16user@example.com');
    cy.get('input[name="password"]').type('TestPassword123');
    cy.get('button[type="submit"]').click();
  });

  //Test1: User can navigate to login page
  it('should navigate to the course catalog', () => {
    cy.wait(2000);  // Wait for the dashboard to load
    cy.get('a[href="/courses"]').click();
  });

  it('should enrol in 3 courses', () => {
    const courses = ['Course 1', 'Course 2', 'Course 3'];

    courses.forEach(course => {
      cy.contains(course).click();
      cy.get('button').contains('Enroll').click();
      cy.get('a[href="/courses"]').click();  // Return to the course catalog
    });
  });

  it('should verify enrolment', () => {
    cy.get('a[href="/my-courses"]').click();
    cy.contains('Course 1').should('be.visible');
    cy.contains('Course 2').should('be.visible');
    cy.contains('Course 3').should('be.visible');
  });
});
