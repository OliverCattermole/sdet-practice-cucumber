Feature: Cart

Scenario: Verify multiple items can be added to cart
  Given I am logged in as "standard_user"
  When I add the following items to my cart:
    | Sauce Labs Backpack      |
    | Sauce Labs Bike Light    |
    | Sauce Labs Bolt T-Shirt  |
  Then the cart badge should show "3"