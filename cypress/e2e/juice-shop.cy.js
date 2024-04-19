import { HomePage } from "../pageObjects/HomePage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
        // Click the "Account" button
        cy.get('#navbarAccount').click();
    
        // Click the "Login" button
        cy.get('#navbarLoginButton').click();
    
        // Set email value to "demo"
        cy.get('#email').type("demo");
    
        // Set password value to "demo"
        cy.get('#password').type("demo");
    
        // Click the "Log in" button
        cy.get('#loginButton').click();
    
        // Click the "Account" button again to ensure login status
        cy.get('#navbarAccount').click();
    
        // Validate that "demo" account name appears in the menu section
        cy.contains('.mat-menu-content', 'demo').should('be.visible');
    });

    it("Registration", () => {
      // Click Account button
      cy.get('#navbarAccount').click();

      // Login button
      cy.get('#navbarLoginButton').click();

      // Click "Not yet a customer?"
      cy.get('a[routerlink="/register"].primary-link').click();
      
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      // Generate a random number between 1000 and 9999
      const randomNumber = Math.floor(Math.random() * 9000) + 1000;
      const emailAddress = `email_${randomNumber}@example.com`;
      cy.get('#emailControl').type(emailAddress);

      // Fill in password field and repeat password field with same password
      cy.get('#passwordControl').type("Abcd123!");
      cy.get('#repeatPasswordControl').type("Abcd123!");
      
      // Click on Security Question menu
      cy.get('mat-select[aria-label="Selection list for the security question"]').click();

      // Select  "Name of your favorite pet?"
      cy.contains('mat-option', 'Name of your favorite pet?').click();

      // Fill in answer
      cy.get('#securityAnswerControl').type('Rufus');

      // Click Register button
      cy.get('#registerButton').click();

      cy.get('#navbarAccount').click();
      cy.get('#navbarLoginButton').click();
      
      // Set email value to previously created email
      cy.get('#email').type(emailAddress);
  
      // Set password value to previously used password value
      cy.get('#password').type("Abcd123!");

      // Click login button
      cy.get('#loginButton').click();

      // Click Account button
      cy.get('#navbarAccount').click();
      // Validate that account name (with previously created email address) appears in the menu section
      cy.contains('.mat-menu-content', emailAddress).should('be.visible');
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      // Search for Lemon
      // Select a product card - Lemon Juice (500ml)
      // Validate that the card (should) contains "Sour but full of vitamins."
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
    // Search for 500ml
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."

    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    // Search for 500ml
    // Select a product card - Eggfruit Juice (500ml)
    // Validate that the card (should) contains "Now with even more exotic flavour."
    // Close the card
    // Select a product card - Lemon Juice (500ml)
    // Validate that the card (should) contains "Sour but full of vitamins."
    // Close the card
    // Select a product card - Strawberry Juice (500ml)
    // Validate that the card (should) contains "Sweet & tasty!"

    // Create scenario - Read a review
    // Click on search icon
    // Search for King
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!

    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
