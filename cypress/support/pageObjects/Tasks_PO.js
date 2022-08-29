class Tasks_PO {
  clickAddNewTaskButton() {
    cy.get('[data-e2e="create-new-task"]').click();
  }

  clickAddNewTaskInModal() {
    cy.get("div.add-new-task").click();
  }

  enterTaskTitle(taskTitle) {
    cy.get('[data-e2e="task-edit-name"]').click();
    cy.get("textarea.edit-task-name-input").type(taskTitle);
    cy.get('.btn-toolbar > [kind="primary"] > .fw-button').click();
  }

  addNewTaskWithTitle(taskTitle) {
    this.clickAddNewTaskButton();
    this.clickAddNewTaskInModal();
    this.enterTaskTitle(taskTitle);
  }

  clickAddRelatedTasks() {
    cy.get('[data-e2e="add-related-task-submit-btn"]').click();
  }

  clickAddChecklistItem() {
    cy.get("div.add-check-item").click();
  }

  enterChecklistItem(checkListItemName) {
    cy.get(".add-task-check-item-form").type(checkListItemName);
    cy.get('[data-e2e="task-edit-add-checklist-item-submit-btn"]').click();
  }

  chooseCurrentDate(datePicker) {
    cy.contains(datePicker).click();
    cy.get("button.active").click();
  }

  addManpower(manpowerHours) {
    cy.get("div.inline-edit-man-power").type(manpowerHours);
  }

  addCost(costInUSD) {
    cy.get("div.inline-edit-cost > fw-inline-edit").type(costInUSD);
  }

  dismissTaskModal() {
    cy.get('[data-dismiss="modal"]').click();
  }

  verifyTaskIsDisplayed(taskName) {
    cy.get('[data-e2e="task-name-ontaskpage"]')
      .contains(taskName)
      .should("be.visible");
  }

  signOut() {
    cy.get(".user-firstname").click();
    cy.get('li>a[translate="SIGN_OUT"]').click();
  }
}

export default Tasks_PO;
