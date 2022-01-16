const { Then } = require("cypress-cucumber-preprocessor/steps");
const chai = require("chai");

const { baseURL } = require("../../config");
const { productManagement } = require("../../support/pages/productManagement");

Then("Narsingh Jaiswal sees the dashboard overview", async () => {
  cy.wait(5000);
  await cy.url().then((url) => chai.expect(url).equals(`${baseURL}dashboard`));
  await productManagement.productSearchBar().should("be.visible");
});
