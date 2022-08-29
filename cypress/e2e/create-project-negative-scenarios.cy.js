/// <reference types="cypress"/>

import Signin_PO from "../support/pageObjects/Signin_PO";
import Projects_PO from "../support/pageObjects/Projects_PO";

const PROJECT_CODE = "DH";
const PROJECT_NAME = "DreamHome";
const USER_PASSWORD = "8ormorecharacters";
const USER_EMAIL_PROJ_LIMIT = "swatinigam19+fwprojectlimit@gmail.com";
const USER_EMAIL_PROJ_LIMIT_PASSWORD = "asdasdasd";
const VALID_USER_EMAIL = "swatinigam19+fieldwire@gmail.com";

const signin_PO = new Signin_PO();
const projects_PO = new Projects_PO();

describe("Existing user", () => {
  beforeEach(function () {
    signin_PO.visitSigninPage();
  });
  //regression, negative
  //using an account which has already hit max project count limit.
  it("cannot add more than 3 projects in a basic plan", () => {
    signin_PO.enterEmail(USER_EMAIL_PROJ_LIMIT);
    signin_PO.enterPassword(USER_EMAIL_PROJ_LIMIT_PASSWORD);
    signin_PO.clickLoginButton();
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.verifyMyProjectsCount(3);
    projects_PO.createProject(PROJECT_NAME, PROJECT_CODE);
    projects_PO.verifyOverTheLimitModalIsDisplayed();
  });
  //regression, negative
  it("cannot create a project without adding project name", () => {
    signin_PO.enterEmail(VALID_USER_EMAIL);
    signin_PO.enterPassword(USER_PASSWORD);
    signin_PO.clickLoginButton();
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.clickAddNewProjectLink();
    projects_PO.enterProjectName(" ");
    projects_PO.verifyCreateNewProjectButtonIsDisabled();
    projects_PO.dismissNewProjectModal();
  });
});
