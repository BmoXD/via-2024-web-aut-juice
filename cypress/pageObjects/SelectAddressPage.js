import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
    static get url()
    {
        return "/#/address/select";
    }

    static get addressField()
    {
        return cy.get(".mat-column-Country");
    }

    static get continueButton()
    {
        return cy.get(".btn-next");
    }

    static get savedAddresses()
    {
        return cy.get("[aria-label='Go to saved address page']");
    }

}