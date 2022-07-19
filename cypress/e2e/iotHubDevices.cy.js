describe("IoThub Devices Page Test", () => {
  it("Navbar Logo & Navbar Menu", () => {
    cy.visit("http://localhost:5050/iothub/");
    cy.wait(3000);
    cy.get(".navbar__logo>img").first().should("have.attr", "alt");
    cy.get(".navbar__logo>img").last().should("have.attr", "alt");

    cy.get(".navbar__menu-item>div>p").eq(0).contains("Devices");
    cy.get(".navbar__menu-item>div>p").eq(1).contains("Preferences");
    cy.get(".navbar__menu-item>div>p").eq(2).contains("Account");
  });

  it("Dashboard(Widgets)", () => {
    cy.get(".dashboard>section>img").eq(0).should("have.attr", "alt");
    cy.get(".dashboard>section>div").eq(0).contains("Active Devices");

    cy.get(".dashboard>section>img").eq(1).should("have.attr", "alt");
    cy.get(".dashboard>section>div").eq(1).contains("System Health");

    cy.get(".dashboard>section>img").eq(2).should("have.attr", "alt");
    cy.get(".dashboard>section>div").eq(2).contains("Energy Levels");
  });

  it("Create New Device", () => {
    cy.get(".devices-infos__create>h1").contains("Devices");

    cy.get(".devices-infos__create>button").contains("Create");
    cy.get(".devices-infos__create>button")
      .realHover("mouse")
      .should("have.css", "background-color", "rgb(245, 196, 52)");
  });

  it("Device List", () => {
    cy.get(".device-list__head>div").eq(0).contains("Name");
    cy.get(".device-list__head>div").eq(1).contains("Charge");
    cy.get(".device-list__head>div").eq(2).contains("Version");
    cy.get(".device-list__head>div").eq(3).contains("Status");

    cy.get(".device-list__element")
      .eq(0)
      .realHover("mouse")
      .should("have.css", "background-color", "rgb(42, 45, 58)");

    cy.get(".device-list__element")
      .eq(10)
      .realHover("mouse")
      .should("have.css", "background-color", "rgb(42, 45, 58)");

    cy.get(".device-list__element")
      .eq(15)
      .realHover("mouse")
      .should("have.css", "background-color", "rgb(42, 45, 58)");
  });
});
