class AccountUnlock_PO {
  clickSendUnlockInstructionsButton() {
    cy.get('[data-e2e="resend-unlock-instructions-btn"]').click();
  }

  enterEmail(userEmail) {
    cy.get("#emailInput").type(userEmail);
  }

  verifyConfirmationForUnlockInstructions() {
    cy.get('[translate="UNLOCK_SEND_PARANOID_INSTRUCTIONS"]').should(
      "be.visible"
    );
  }

  verifyAccountUnlockPageUrl() {
    cy.url().should("include", "auth/locked_password");
  }
}
export default AccountUnlock_PO;
