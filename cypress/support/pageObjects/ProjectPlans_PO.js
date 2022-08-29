class ProjectPlans_PO {
  clickSelectFilesButton() {
    cy.get('[data-e2e="project-wizard-select-files-btn"]').click();
    cy.wait(2000); // remove this ***
  }

  clickNextButton() {
    cy.get('[data-e2e="project-wizard-next-btn"]').click();
  }

  clickAddButton() {
    cy.get('[data-e2e="project-wizard-category-add-btn"]').click();
  }

  enterCategoryName(categoryName) {
    cy.get(".category-name-input").type(categoryName);
  }

  enterTeamMemberEmail(teamMemberEmail) {
    cy.get(".invite-textarea").type(teamMemberEmail);
  }

  chooseTeamMemberRole(memberRole) {
    cy.get(".role-select").select(memberRole);
  }

  clickInviteButton() {
    cy.get('[data-e2e="project-wizard-invite-btn"]').click();
  }

  verifyMemberIsInvited() {
    cy.get('[translate="INVITED"]').should("be.visible");
  }

  clickTextLinkButton() {
    cy.get('[data-e2e="project-wizard-text-lnk-btn"]');
    //add assertion about "Download link sent! You’ll receive a text shortly." on screen
  }

  uploadPlanFile(fileName, mimeType) {
    cy.fixture(fileName).then((fileContent) => {
      cy.get("input[type=file]").attachFile({
        fileContent,
        fileName: fileName,
        mimeType: mimeType,
      });
    });
    cy.wait(3000);
    cy.get('span[title="Upload"]').click();
  }

  verifyUploadedPlanIsVisible(fileToVerify) {
    cy.get(`[data-e2e="${fileToVerify}-box"]`).should("be.visible");
  }

  inviteTeamMember(teamMemberEmail, memberRole) {
    this.enterTeamMemberEmail(teamMemberEmail);
    this.chooseTeamMemberRole(memberRole);
    this.clickInviteButton();
  }

  dimissModal() {
    cy.get("div.close-modal").click();
  }
}

export default ProjectPlans_PO;
