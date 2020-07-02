Feature: RediffMail home page validation

@Regression
Scenario: Open the homepage and check if the field is displayed
Given chromedriver is initialized
When user is on the landing page
Then get the title of the page
And Verify the search text box is displayed
And close the browser