Feature: Rediff forgot password

@Regression
Scenario: Rediff forgot password validation
Given chromedriver is initialized
When user is on the landing page
And user clicks on Sign In link
And user clicks on the Forgot Password link
Then user should be allowed to enter the email id as "email@gmail.com"
And user should be able to click the next button
And close the browser