const config = require("../../config");

exports.productManagement = {
  url() {
    return `${config.baseURL}dashboard`;
  },
  world: {},
  loginEmailInput() {
    return cy.get("#okta-signin-username");
  },
  loginPasswordInput() {
    return cy.get("#okta-signin-password");
  },
  loginButton() {
    return cy.get("#okta-signin-submit");
  },
  productSearchBar() {
    return cy.get('[data-testid="productSearchBar"]');
  },
  logoutButton() {
    return cy.get('[data-testid="logoutButton"]');
  },
};
