Feature: Logout

Background:
    Given I am logged in as "standard_user" user
    And I am on the "Products" page

@logout
Scenario: Verify logout process
    When I logout from the products page
    Then I will be redirected to the login page