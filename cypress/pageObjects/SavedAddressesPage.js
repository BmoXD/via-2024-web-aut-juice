import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
    static get url()
    {
        return "/#/address/saved";
    }

    static get newAddressButton()
    {
        return cy.get('.btn-new-address');
    }

    static get address()
    {
        return cy.get('mat-cell.mat-column-Address');
    }

    static get country()
    {
        return cy.get('mat-cell.mat-column-Country');
    }

    static get name()
    {
        return cy.get('mat-cell.mat-column-Name');
    }
}