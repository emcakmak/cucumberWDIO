Feature: Signing up to the site

    Scenario Outline: Signing up to the site and creating an account
        Given I am on the signin page
        And I enter email <email>
        And I click the create account button
        When I enter my <name> <lastname> <email> and <password>
        And I click the register button
        Then I am taken to My Account page
