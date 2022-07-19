describe("IoThub Device Page Test", () => {
  it("Route Device Page", () => {
    cy.visit("http://localhost:5050/iothub/");
    cy.wait(3000);

    let num = Math.floor(Math.random() * 21);
    cy.get(".device-list__element").eq(num).click();
    cy.wait(3000);
  });

  it("Navbar Logo & Navbar Menu", () => {
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

  it("Device", () => {
    cy.get(".back-button")
      .realHover("mouse")
      .should("have.css", "background-color", "rgb(245, 196, 52)");
    cy.get(".back-button>img").first().should("have.attr", "alt");

    cy.get(".device__info__body__keys>div").eq(0).contains("Status");
    cy.get(".device__info__body__keys>div").eq(1).contains("Version");
    cy.get(".device__info__body__keys>div").eq(2).contains("Serial");

    cy.get(".device__photo>img").first().should("have.attr", "alt");
  });

  it("Battery", () => {
    cy.get(".battery__header").eq(0).contains("Battery");
    cy.get(".battery__header__charge").contains("%");
    cy.get(".battery-icon>img").first().should("have.attr", "alt");

    cy.get(".battery__body__keys>div").eq(0).contains("Last Charge");
    cy.get(".battery__body__keys>div").eq(1).contains("Time Remaining");
    cy.get(".battery__body__keys>div").eq(2).contains("Health");

    cy.get(".device__photo>img").first().should("have.attr", "alt");
  });
});
