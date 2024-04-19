import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
    static get url()
    {
        return "/#/address/create";
    }

    static get addressFormFields()
    {
        return cy.get('#address-form>.mat-form-field');
    }

    static get submitButton()
    {
        return cy.get('#submitButton');
    }

}