class Projects_PO {
  addStarToProject(projectName) {
    cy.get(`[data-e2e="${projectName}-star"]`).click();
  }

  verifyStarIsAdded(projectName) {
    cy.get(`[data-e2e="${projectName}-star"]`).should('have.class', 'fas')
  }

  clickAddNewProjectButton() {
    cy.get('[data-e2e="projects-new-project-btn"]').click();
  }

  clickAddNewProjectLink() {
    cy.get('span[translate="PLUS_NEW_PROJECT"]').click();
  }

  clickCreateProjectButton() {
    cy.get('[data-e2e="new-project-modal-create-btn"]').click();
  }

  enterProjectCode(projectCode) {
    cy.get('input[name="code"]').type(projectCode);
  }

  enterProjectName(projectName) {
    cy.get('input[name="name"]').type(projectName);
  }

  signOut() {
    cy.get('[data-e2e="profile-menu"]').click();
    cy.get('li>a[translate="SIGN_OUT"]').click();
  }

  verifyExistingProjectIsDisplayed(projectTitle) {
    cy.get("div").contains(`${projectTitle}`).should("be.visible");
  }

  verifyNavHeaderIsVisibleUponLogin() {
    cy.get("div.navbar-header").should("be.visible");
  }

  verifyMyProjectsCount(count) {
    cy.get("div.projects-heading > span.ng-binding:first-of-type")
      .first()
      .should("contain.text", `My Projects (${count})`);
  }

  verifyOverTheLimitModalIsDisplayed() {
    cy.get('div[translate="OVER_LIMIT_DESCRIPTION"]').should("be.visible");
  }

  createProject(projectName, projectCode) {
    this.clickAddNewProjectLink();
    this.enterProjectName(projectName);
    this.enterProjectCode(projectCode);
    this.clickCreateProjectButton();
  }

  clickOnExistingProject(projectTitle) {
    cy.get("div").contains(projectTitle).click();
  }

  verifyCreateNewProjectButtonIsDisabled() {
    cy.get('.create-project-button > .fw-button').should('have.class', 'fw-button-disabled')
  }

  dismissNewProjectModal() {
    cy.get('div.close-modal').click()
  }

}

export default Projects_PO;
