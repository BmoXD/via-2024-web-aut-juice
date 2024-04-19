import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton()
  {
    return cy.get('#navbarAccount');
  }

  static get homeLoginBtn()
  {
    return cy.get('#navbarLoginButton');
  }

  static get searchQuery()
  {
    return cy.get('#searchQuery');
  }

  static get searchField()
  {
    return cy.get('#mat-input-0');
  }

  static juiceItem(juiceName)
  {
    return cy.contains('.item-name', juiceName);
  }

  static get juiceDetails()
  {
    return cy.get('app-product-details .container');
  }

  static get closeJuiceCard()
  {
    return cy.get('[aria-label="Close Dialog"]');
  }

  static get reviewExpandButton()
  {
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get reviewText()
  {
    return cy.get('[aria-label="Expand for Reviews"] .comment p');
  }

  static get reviewTextField()
  {
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get reviewSubmitButton()
  {
    return cy.get('#submitButton');
  }

  static get productCard()
  {
    return cy.get('.mat-grid-tile-content');
  }

  static get itemsPerPage()
  {
    return cy.get('.mat-select-value-text');
  }

  static get itemsPerPageOption()
  {
    return cy.get('.mat-option-text');
  }
  
  static addToBasketButton(itemName)
  {
    return this.juiceItem(itemName).get('.btn-basket');
  }

  static get basketButton()
  {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get accountMenu()
  {
    return cy.get('[class="mat-menu-content ng-tns-c129-2"]>button');
  }

  static get ordersAndPaymentMenu()
  {
    return cy.get('[class="mat-menu-content ng-tns-c129-5"]>button');
  }

}
