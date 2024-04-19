import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";

describe("Juice-shop scenarios", () =>
{
  context("Without auto login", () =>
  {
    beforeEach(() =>
    {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () =>
    {
        // Click the "Account" button
        HomePage.accountButton.click();
    
        // Click the "Login" button
        HomePage.homeLoginBtn.click();
    
        // Set email value to "demo"
        LoginPage.emailField.type("demo");
    
        // Set password value to "demo"
        LoginPage.passwordField.type("demo");
    
        // Click the "Log in" button
        LoginPage.loginButton.click();
    
        // Click the "Account" button again to ensure login status
        HomePage.accountButton.click();
    
        // Validate that "demo" account name appears in the menu section
        HomePage.accountMenu.eq(0).should('contain.text', 'demo')
    });

    it("Registration", () =>
    {
      // Click Account button
      HomePage.accountButton.click();

      // Login button
      HomePage.homeLoginBtn.click();

      // Click "Not yet a customer?"
      LoginPage.registerButton.click();
      
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      // Generate a random number between 1000 and 9999
      const randomNumber = Math.floor(Math.random() * 9000) + 1000;
      const emailAddress = `email_${randomNumber}@example.com`;
      const password = 'Abcd123!';
      RegistrationPage.emailField.type(emailAddress);

      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      
      // Click on Security Question menu
      RegistrationPage.securityMenu.click();

      // Select  "Name of your favorite pet?"
      RegistrationPage.securityOption.click();

      // Fill in answer
      RegistrationPage.securityAnswer.type('Rufus');

      // Click Register button
      RegistrationPage.registerButton.click();

      HomePage.accountButton.click();
      HomePage.homeLoginBtn.click();
      
      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);
  
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);

      // Click login button
      LoginPage.loginButton.click();

      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.accountMenu.eq(0).should('contain.text', emailAddress)
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Lemon
      HomePage.searchField.type('Lemon{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.juiceItem('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.juiceDetails.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search and validate Lemon with extra cards", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();
      // Search for Lemon
      HomePage.searchField.type('500ml{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.juiceItem('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.juiceDetails.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate cards
    it("Search '500ml' and validate multiple cards", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();

      // Search for 500ml
      HomePage.searchField.type('500ml{enter}');

      // Select a product card - Eggfruit Juice (500ml)
      HomePage.juiceItem('Eggfruit Juice (500ml)').click();

      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.juiceDetails.should('contain.text', 'Now with even more exotic flavour.');

      // Close the card
      HomePage.closeJuiceCard.click();

      // Select a product card - Lemon Juice (500ml)
      HomePage.juiceItem('Lemon Juice (500ml)').click();

      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.juiceDetails.should('contain.text', 'Sour but full of vitamins.');

      // Close the card
      HomePage.closeJuiceCard.click();

      // Select a product card - Strawberry Juice (500ml)
      HomePage.juiceItem('Strawberry Juice (500ml)').click();

      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.juiceDetails.should('contain.text', 'Sweet & tasty!');

    });

    // Create scenario - Read a review
    it("Search '500ml' and validate multiple cards", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();

      // Search for King
      HomePage.searchField.type("King");

      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.juiceItem('OWASP Juice Shop "King of the Hill" Facemask').click();

      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewExpandButton.click();
      cy.wait(500);

      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewText.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

    // Create scenario - Add a review
    it("Adding a review", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();

      // Search for Raspberry
      HomePage.searchField.type("Raspberry{enter}");

      // Select a product card - Raspberry Juice (1000ml)
      HomePage.juiceItem('Raspberry Juice (1000ml)').click();
      cy.wait(200);

      // Type in review - "Tastes like metal"
      HomePage.reviewTextField.type('Tastes like metal');

      // Click Submit
      HomePage.reviewSubmitButton.click();

      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewExpandButton.click();
      cy.wait(500);
      
      // Validate review -  "Tastes like metal"
      HomePage.reviewText.should('contain.text', 'Tastes like metal');
    });

    // Create scenario - Validate product card amount
    it("Validating product card amount", () =>
    {
      // Validate that the default amount of cards is 12
      HomePage.itemsPerPage.should('contain.text', 12);
      HomePage.productCard.should('have.length', 12);

      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPage.click();
      HomePage.itemsPerPageOption.contains('24').click();

      // Validate that the amount of cards is 24
      HomePage.itemsPerPage.should('contain.text', 24);
      HomePage.productCard.should('have.length', 24);

      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPage.click();
      HomePage.itemsPerPageOption.contains('36').click();
      
      // Validate that the amount of cards is 35
      HomePage.productCard.should('have.length', 35);
    });

    //Create scenario - Buy Girlie T-shirt
    it("Validating product card amount", () =>
    {
      // Click on search icon
      HomePage.searchQuery.click();
      
      // Search for Girlie
      HomePage.searchField.type("Girlie{enter}");

      // Add to basket "Girlie"
      HomePage.addToBasketButton('Girlie').click();

      // Click on "Your Basket" button
      HomePage.basketButton.click();

      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();

      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressField.contains("United Fakedom").click();

      // Click Continue button
      SelectAddressPage.continueButton.click();

      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryMethod.contains('Standard Delivery').click();

      // Click Continue button
      DeliveryMethodPage.continueButton.click();

      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.selectCard('5678').click();


      // Click Continue button
      PaymentOptionsPage.continueButton.click();

      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderButton.click()

      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderCompleteMessage.should('contain.text', 'Thank you for your purchase!');
    });

    //Create scenario - Add address
    it("Adding address", () =>
    {
      // Click on Account
      HomePage.accountButton.click();

      // Click on Orders & Payment
      HomePage.accountMenu.eq(1).click();
      
      // Click on My saved addresses
      HomePage.ordersAndPaymentMenu.eq(2).click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.newAddressButton.click();

      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const country = 'United States';
      const name = 'John Doe';
      const phoneNr = '2487620356';
      const zipCode = '1535';
      const address = 'Suite 154 6934 Zachary Point';
      const city = 'Sonberg';
      const state = 'Kansas';

      CreateAddressPage.addressFormFields.eq(0).type(country);
      CreateAddressPage.addressFormFields.eq(1).type(name);
      CreateAddressPage.addressFormFields.eq(2).type(phoneNr);
      CreateAddressPage.addressFormFields.eq(3).type(zipCode);
      CreateAddressPage.addressFormFields.eq(4).type(address);
      CreateAddressPage.addressFormFields.eq(5).type(city);
      CreateAddressPage.addressFormFields.eq(6).type(state);

      // Click Submit button
      CreateAddressPage.submitButton.click();

      // Validate that previously added address is visible
      SavedAddressesPage.address.should('contains.text', `${address}, ${city}, ${state}, ${zipCode}`);
      SavedAddressesPage.country.should('contains.text', country);
      SavedAddressesPage.name.should('contains.text',name);
      
    });

    // Create scenario - Add payment option
    it("Adding payment option", () =>
    {
      // Click on Account
      HomePage.accountButton.click();

      // Click on Orders & Payment
      HomePage.accountMenu.eq(1).click();

      // Click on My payment options
      HomePage.ordersAndPaymentMenu.eq(3).click();

      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardExpansionPanel.click();

      const name = 'Gabriel Jackson';
      const cardNr = '3771666453196521';
      const expiryMonth = '7';
      const expiryYear = '2090';

      // Fill in Name
      SavedPaymentMethodsPage.cardFields.eq(0).type(name);

      // Fill in Card Number
      SavedPaymentMethodsPage.cardFields.eq(1).type(cardNr);

      // Set expiry month to 7
      SavedPaymentMethodsPage.cardFields.eq(2).get('select').eq(0).select(expiryMonth);
      // Set expiry year to 2090
      SavedPaymentMethodsPage.cardFields.eq(2).get('select').eq(1).select(expiryYear);
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();

      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.cardNr.should('contains.text', `************${cardNr.substring(cardNr.length - 4)}`);
      SavedPaymentMethodsPage.nameOnCard.should('contains.text', name);
      SavedPaymentMethodsPage.expiry.should('contains.text', `${expiryMonth}/${expiryYear}`);
    });
  });
});
