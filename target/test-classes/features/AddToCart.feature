Feature: This feature file will be verified with add to cart functionality

  Background: 
    Given I have launched the application
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on login button

  @Sanity
  Scenario: Add one item to the cart
    And I Add an item as "Sauce Labs Onesie"
    Then I go to Cart
    And I Should see as 1 item(s) in the cart
    And Cart Should Contain an item as "Sauce Labs Onesie"

  Scenario: Add one item to the cart
    And I Add an item as "Sauce Labs Onesie"
    And I Add an item as " Sauce Labs Backpack"
    Then I go to Cart
    And I Should see as 2 item(s) in the cart
    And Cart Should Contain an item as "Sauce Labs Onesie"
    And Cart Should Contain an item as "Sauce Labs Backpack"
