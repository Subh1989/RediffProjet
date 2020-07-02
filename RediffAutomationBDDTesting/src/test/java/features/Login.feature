Feature: Rediff Login Validation

@Regression
Scenario Outline: Testing the negative scenario
Given chromedriver is initialized
When user is on the landing page
And user clicks on Sign In link
And user enters <username> and <password> and click on login button
Then user login is not successful
And close the browser

Examples:
|username 	|password	|
|nandi@gmail.com	|Toni@123	|