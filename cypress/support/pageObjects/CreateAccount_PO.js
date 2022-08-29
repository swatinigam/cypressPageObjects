class CreateAccount_PO {
  enterFirstName(firstName) {
    cy.get("#firstNameInput").type(firstName);
  }

  enterLastName(lastName) {
    cy.get("#lastNameInput").type(lastName);
  }

  enterWorkEmail(workEmail) {
    cy.get("#emailInput").type(workEmail);
  }

  enterPassword(userPassword) {
    cy.get("#passwordInput").type(userPassword);
  }

  checkAgreement() {
    cy.get("#explicitAgreement").check();
  }

  clickCreateAccountButton() {
    cy.get('[data-e2e="create-account-button"]').click();
  }

  enterAccountDetails(firstName, lastName, workEmail, userPassword) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterWorkEmail(workEmail);
    this.enterPassword(userPassword);
  }
}

export default CreateAccount_PO;
