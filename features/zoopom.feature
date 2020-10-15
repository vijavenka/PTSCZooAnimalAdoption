Feature: I am validating Zoo Animal Adoption
        using Cucumber
    
    Scenario Outline: Zoo Animal Adoption scenario
    Given I will navigate to Zoo adoption page
    Then I will enter first page details "<Name>"
    And Second page details "<SecondPageTitle>", "<option>"
    And Finally page details "<ThirdPageTitle>"

Examples:
    | Name          | SecondPageTitle   | option  | ThirdPageTitle |
    | Blablabla     | Select you Animal | 1       | Thank          |
    | Vijay         | Select you Animal | 2       | Thank          |