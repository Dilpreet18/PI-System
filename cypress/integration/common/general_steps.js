/* eslint-disable no-undef */
const { Given } = require("cypress-cucumber-preprocessor/steps");

const { productManagement } = require("../../support/pages/productManagement");

Given("I am logged in as {}", async () => {
  cy.visit(productManagement.url());

  await cy.url().then(async (url) => {
    if (!url.includes("/dashboarb")) {
      cy.wait(5000);

      const email = "nrsnghjaiswal@gmail.com";
      const password = "123$Qwer";

      await productManagement.loginEmailInput().type(email);
      await productManagement.loginPasswordInput().type(password);
      await productManagement.loginButton().click();
      cy.wait(5000);
    }
  });
});
