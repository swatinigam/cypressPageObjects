class AddProfile_PO {
  enterCompanyName(companyName) {
    cy.get("#company").type(companyName);
  }

  chooseCompanyType(companyTypeValue) {
    cy.get("#companyType").select(companyTypeValue);
  }

  chooseNumberOfEmployees(companySizeValue) {
    cy.get("#companySize").select(companySizeValue);
  }

  enterPhoneNumber(phoneNumber) {
    cy.get("#phone").type(phoneNumber);
  }

  clickCompleteButton() {
    cy.get('[data-e2e="create-account-complete"]').click();
  }

  enterCompanyProfileDetails(
    companyName,
    companyTypeValue,
    companySizeValue,
    phoneNumber
  ) {
    this.enterCompanyName(companyName);
    this.chooseCompanyType(companyTypeValue);
    this.chooseNumberOfEmployees(companySizeValue);
    this.enterPhoneNumber(phoneNumber);
    this.clickCompleteButton();
  }
}
export default AddProfile_PO;
