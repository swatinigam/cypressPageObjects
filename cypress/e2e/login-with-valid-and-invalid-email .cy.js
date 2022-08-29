/// <reference types="cypress"/>

import Signin_PO from "../support/pageObjects/Signin_PO";
import Projects_PO from "../support/pageObjects/Projects_PO";

const EXISTING_PROJECT_NAME = "TestPlumbing";
const USER_PASSWORD = "8ormorecharacters";
const VALID_USER_EMAIL = "swatinigam19+fieldwire@gmail.com";

const signin_PO = new Signin_PO();
const projects_PO = new Projects_PO();

let randomString = Math.random().toString(36).slice(2, 7);
let invalidUserEmail = "asd" + randomString + "@gmail.com";

describe("Existing user", () => {
  beforeEach(function () {
    signin_PO.visitSigninPage();
  });
  
  //smoke
  it("can successfully sign in and sign out", () => {
    signin_PO.enterEmail(VALID_USER_EMAIL);
    signin_PO.enterPassword(USER_PASSWORD);
    signin_PO.clickLoginButton();
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.verifyExistingProjectIsDisplayed(EXISTING_PROJECT_NAME);
    projects_PO.signOut();
  });
  //regression
  it("is shown error message upon entering an email that does not exist", () => {
    signin_PO.enterEmail(invalidUserEmail);
    signin_PO.verifyInvalidEmailBanner();
  });

});
