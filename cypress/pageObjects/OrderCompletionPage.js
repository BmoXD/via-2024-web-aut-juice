import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
    static get url()
    {
        return "/#/order-summary";
    }

    static get orderCompleteMessage()
    {
        return cy.get(".confirmation");
    }

}