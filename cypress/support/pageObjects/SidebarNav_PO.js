class SidebarNav_PO {
  navigateToTasks() {
    cy.get("li").contains("Tasks").click();
  }

  verifySideNavProjectTitle(projectName) {
    cy.get("span.project-name").should("contain.text", `${projectName}`);
  }
}
export default SidebarNav_PO;
