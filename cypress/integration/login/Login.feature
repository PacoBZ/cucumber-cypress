Feature: Login

  Scenario Outline: Login OK

    Given I am on login page
    When I write my login email <email>
    And I write my password <password>
    And I press the access button
    Then I am on home page

    Examples:
      | email             | password          |
      | "opensourcecms" | "opensourcecms" |
