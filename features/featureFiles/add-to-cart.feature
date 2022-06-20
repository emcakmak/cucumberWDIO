Feature: The Automation Practice Add to cart feature

  Scenario: As a customer, I can add an item to my cart

    Given I am on the homepage
    When I click Add to cart
    Then The item is added to my cart
