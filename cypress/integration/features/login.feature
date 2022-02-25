Feature: User login 
As a user I want to log in
  Background:
    Given User on the login page

  Scenario: Successful login attempt 
    When User enters valid "username" username and valid "password" password
    And clicks login button
    Then User should be navigated to home page


  Scenario: Unsuccessful login attempt 
    When User enters invalid "username" and invalid "password"
    And clicks login button
    Then User should see 'Login failed. Invalid password. Please try again.' message
    

