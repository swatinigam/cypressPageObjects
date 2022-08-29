/// <reference types="cypress"/>

import Signin_PO from "../support/pageObjects/Signin_PO";
import AccountUnlock_PO from "../support/pageObjects/AccountUnlock_PO";

const accountUnlock_PO = new AccountUnlock_PO();
const signin_PO = new Signin_PO();
const UNLOCK_EMAIL = "wieldfiretest@gmail.com";

describe("Existing user", () => {
  before(function () {
    signin_PO.visitSigninPage();
  });
  //smoke
  it("can submit email to receive account unlock instructions", () => {
    signin_PO.clickAccountLockedLink();
    accountUnlock_PO.verifyAccountUnlockPageUrl();
    accountUnlock_PO.enterEmail(UNLOCK_EMAIL);
    accountUnlock_PO.clickSendUnlockInstructionsButton();
    accountUnlock_PO.verifyConfirmationForUnlockInstructions();
  });
});
