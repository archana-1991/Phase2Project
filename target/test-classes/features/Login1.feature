Feature: This feature file will do Login operations

  Background: 
    Given I have launched the application

  @Sanity
  Scenario: Validate the login failure scenario
    When I enter username
    And I enter password
    And I click on login button
    Then I should get error message

  Scenario Outline: Validate the login failure scenario
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click on login button
    Then I should get error message as "<Error>"

    Examples: 
      | username        | password     | Error                                                                     |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      | dummy_user      | password     | Epic sadface: Username and password do not match any user in this service |
      | problem_user    | password     | Epic sadface: Username and password do not match any user in this service |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |

  @Sanity
  Scenario: User should be logged in successfully
    When I enter username as "standard_user"
    And I enter password as "secret_sauce"
    And I click on login button
    Then I should be landed on home page
