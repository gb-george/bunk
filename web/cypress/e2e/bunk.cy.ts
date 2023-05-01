/// <reference types="cypress" />

describe('Bunk App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display app toolbar', () => {
    cy.get('mat-toolbar').should('be.visible');
  });

  it('should display add user expense component', () => {
    cy.get('add-user-expense').should('be.visible');
  });

  it('should display bunk expenses table component', () => {
    cy.get('bunk-expenses-table').should('be.visible');
  });

  it('should display bunk payouts component', () => {
    cy.get('bunk-payouts').should('be.visible');
  });

  it('should not display loading overlay initially', () => {
    cy.get('.loading-overlay').should('not.exist');
  });
});
