/// <reference types='cypress-tags' />

import AddProfile_PO from "../support/pageObjects/AddProfile_PO";
import CreateAccount_PO from "../support/pageObjects/CreateAccount_PO";
import Projects_PO from "../support/pageObjects/Projects_PO";
import ProjectPlans_PO from "../support/pageObjects/ProjectPlans_PO";
import SidebarNav_PO from "../support/pageObjects/SidebarNav_PO";
import Signin_PO from "../support/pageObjects/Signin_PO";
import Tasks_PO from "../support/pageObjects/Tasks_PO";

const CATEGORY_NAME = "Carpentry";
const CHECKLIST = ["FrontDoor", "KitchenDoor"];
const COMPANY_NAME = "WieldFire";
const COMPANY_TYPE = "GENERAL_CONTRACTOR";
const COMPANY_SIZE = "size_10_50";
const COST_IN_USD = 500;

const DATE_PICKER = "Start date";
const FILE_NAME = "QA_Assignment.pdf";
const FIRST_NAME = "Joe";
const LAST_NAME = "QA";
const MANPOWER_HOURS = 8;
const MIME_TYPE = "application/pdf";
const PROJECT_CODE = "DH";
const PROJECT_NAME2 = "Fans";
const TASK_TITLE1 = "DoorFraming";
const TASK_TITLE2 = "Wiring";
const TEAM_MEMBER_EMAIL = "joecarpenter@gmail.com";
const TEAM_MEMBER_ROLE = "follower";
const USER_PASSWORD = "8ormorecharacters";

const addProfile_PO = new AddProfile_PO();
const createAccount_PO = new CreateAccount_PO();
const projects_PO = new Projects_PO();
const projectPlans_PO = new ProjectPlans_PO();
const sidebarNav_PO = new SidebarNav_PO();
const signin_PO = new Signin_PO();
const tasks_PO = new Tasks_PO();

let fileNameToVerify = FILE_NAME.split(".")[0]; //to obtain the name of file without extension
let phoneNumberSuffix = Math.floor(Math.random() * (9999 - 1000)) + 1000;
let phoneNumber = "910555" + phoneNumberSuffix; // 555 ensures number is not in use so this is a fake number
let projectName1 = "DreamHome" + Math.floor(Math.random() * 1000 + 1);
let randomString = Math.random().toString(36).slice(2, 7);
let newUserEmail = "joe" + randomString + "@gmail.com";


describe("New user", () => {
  beforeEach(function () {
    signin_PO.visitSigninPage();
  });
  //smoke
  it("can create an account with a project and a task successfully", () => {
    signin_PO.clickCreateAccountLink();
    createAccount_PO.enterAccountDetails(
      FIRST_NAME,
      LAST_NAME,
      newUserEmail,
      USER_PASSWORD
    );
    createAccount_PO.checkAgreement();
    createAccount_PO.clickCreateAccountButton();
    addProfile_PO.enterCompanyProfileDetails(
      COMPANY_NAME,
      COMPANY_TYPE,
      COMPANY_SIZE,
      phoneNumber
    );
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.createProject(projectName1, PROJECT_CODE);
    projectPlans_PO.clickSelectFilesButton();
    projectPlans_PO.uploadPlanFile(FILE_NAME, MIME_TYPE);
    projectPlans_PO.clickNextButton();
    projectPlans_PO.enterCategoryName(CATEGORY_NAME);
    projectPlans_PO.clickAddButton();
    projectPlans_PO.clickNextButton();
    projectPlans_PO.inviteTeamMember(TEAM_MEMBER_EMAIL, TEAM_MEMBER_ROLE);
    projectPlans_PO.verifyMemberIsInvited();
    projectPlans_PO.clickNextButton();
    projectPlans_PO.clickTextLinkButton();
    projectPlans_PO.clickNextButton();
    //projectPlans_PO.verifyUploadedPlanIsVisible(fileNameToVerify); 
    sidebarNav_PO.navigateToTasks();
    tasks_PO.addNewTaskWithTitle(TASK_TITLE1);
    tasks_PO.clickAddRelatedTasks();
    tasks_PO.clickAddChecklistItem();
    tasks_PO.enterChecklistItem(CHECKLIST[0]);
    tasks_PO.enterChecklistItem(CHECKLIST[1]);
    tasks_PO.chooseCurrentDate(DATE_PICKER);
    tasks_PO.addManpower(MANPOWER_HOURS);
    tasks_PO.addCost(COST_IN_USD);
    tasks_PO.dismissTaskModal();
    sidebarNav_PO.verifySideNavProjectTitle(projectName1);
    tasks_PO.verifyTaskIsDisplayed(TASK_TITLE1);
    tasks_PO.signOut();
  });
  
  //regression
  it("can log in to add another project and task ", () => {
    signin_PO.enterEmail(newUserEmail);
    signin_PO.enterPassword(USER_PASSWORD);
    signin_PO.clickLoginButton();
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.createProject(PROJECT_NAME2, PROJECT_CODE);
    projectPlans_PO.dimissModal();
    projects_PO.verifyExistingProjectIsDisplayed(PROJECT_NAME2);
    projects_PO.clickOnExistingProject(PROJECT_NAME2);
    sidebarNav_PO.verifySideNavProjectTitle(PROJECT_NAME2);
    sidebarNav_PO.navigateToTasks();
    tasks_PO.addNewTaskWithTitle(TASK_TITLE2);
    tasks_PO.verifyTaskIsDisplayed(TASK_TITLE2);
    tasks_PO.dismissTaskModal();
    tasks_PO.signOut();
  });

  //regression
  it("can star a project", () => {
    signin_PO.enterEmail(newUserEmail);
    signin_PO.enterPassword(USER_PASSWORD);
    signin_PO.clickLoginButton();
    projects_PO.verifyNavHeaderIsVisibleUponLogin();
    projects_PO.verifyExistingProjectIsDisplayed(PROJECT_NAME2);
    projects_PO.addStarToProject(PROJECT_NAME2);
    projects_PO.verifyStarIsAdded(PROJECT_NAME2)
  });

});
