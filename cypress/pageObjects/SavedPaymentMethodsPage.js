import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url()
    {
        return "/#/saved-payment-methods";
    }

    static get addNewCardExpansionPanel()
    {
        return cy.get('#mat-expansion-panel-header-0');
    }
    
    static get cardFields()
    {
        return cy.get('#cdk-accordion-child-0>div>div>mat-form-field');
    }

    static get submitButton()
    {
        return cy.get('#submitButton');
    }

    static get cardNr()
    {
        return cy.get('mat-cell.mat-column-Number');
    }

    static get nameOnCard()
    {
        return cy.get('mat-cell.mat-column-Name');
    }

    static get expiry()
    {
        return cy.get('mat-cell.mat-column-Expiry');
    }
}