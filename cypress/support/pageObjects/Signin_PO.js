class Signin_PO {
  clickAccountLockedLink() {
    cy.get('[translate="ACCOUNT_LOCKED"]').click();
  }

  clickCreateAccountLink() {
    cy.get('[translate="CREATE_ACCOUNT"]').click();
  }

  clickLoginButton() {
    cy.get('[data-e2e="signin-with-password"]').click();
  }

  clickSendUnlockInstructionsButton() {
    cy.get('[data-e2e="resend-unlock-instructions-btn"]').click();
  }

  enterEmail(userEmail) {
    cy.get("input#email-input").type(userEmail);
    cy.get("button[type='Submit'").click();
    cy.log("Email entered:", userEmail);
  }

  enterPassword(userPassword) {
    cy.get("#password-input").type(userPassword);
    cy.log("Password entered:", userPassword);
  }

  verifyConfirmationForUnlockInstructions() {
    cy.get('[translate="UNLOCK_SEND_PARANOID_INSTRUCTIONS"]').should(
      "be.visible"
    );
  }

  verifyInvalidEmailBanner() {
    cy.get("div[translate='COULDNT_FIND_EMAIL']").should("be.visible");
  }

  visitSigninPage() {
    cy.visit("/");
  }
}
export default Signin_PO;
