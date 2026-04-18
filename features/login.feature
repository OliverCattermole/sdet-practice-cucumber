Feature: Login

  # Scenario: User performs successful login
  #   Given I am on the login screen
  #   # When I login with valid credentials
  #   When I login with username "standard_user" and password "secret_sauce"
  #   Then I should see the products inventory page

  # Scenario: User attempts login with invalid password
  #   Given I am on the login screen
  #   # When I login with invalid password
  #   When I login with username "standard_user" and password "abc123"
  #   Then I should see an error and remain on login page

@smoke
  Scenario Outline: Login attempts with multiple user types
    Given I am on the login screen
    When I login with username "<user>" and password "<pass>"
    Then I should see the result "<expected_outcome>"

    Examples:
      | user            | pass         | expected_outcome |
      | standard_user   | secret_sauce | products         |
      | locked_out_user | secret_sauce | locked_error_message    |
      | standard_user   | wrong_pass   | error_message    |