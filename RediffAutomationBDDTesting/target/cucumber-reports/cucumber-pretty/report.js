$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ForgotPassword.feature");
formatter.feature({
  "line": 1,
  "name": "Rediff forgot password",
  "description": "",
  "id": "rediff-forgot-password",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Rediff forgot password validation",
  "description": "",
  "id": "rediff-forgot-password;rediff-forgot-password-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "chromedriver is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign In link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the Forgot Password link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be allowed to enter the email id as \"email@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should be able to click the next button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.chromedriver_is_initialized()"
});
formatter.result({
  "duration": 5611675600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_is_on_the_landing_page()"
});
formatter.result({
  "duration": 672964400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 303773800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_the_forgot_password_link()"
});
formatter.result({
  "duration": 560074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email@gmail.com",
      "offset": 49
    }
  ],
  "location": "StepDefination.user_should_be_allowed_to_enter_the_email_id_as_something(String)"
});
formatter.result({
  "duration": 147774600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_should_be_able_to_click_the_next_button()"
});
formatter.result({
  "duration": 268256300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 635429900,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "RediffMail home page validation",
  "description": "",
  "id": "rediffmail-home-page-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Open the homepage and check if the field is displayed",
  "description": "",
  "id": "rediffmail-home-page-validation;open-the-homepage-and-check-if-the-field-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "chromedriver is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "get the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify the search text box is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.chromedriver_is_initialized()"
});
formatter.result({
  "duration": 5171809300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_is_on_the_landing_page()"
});
formatter.result({
  "duration": 967088200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.get_the_title_of_the_page()"
});
formatter.result({
  "duration": 10707100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.verify_the_search_text_box_is_displayed()"
});
formatter.result({
  "duration": 49356200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 620847100,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Rediff Login Validation",
  "description": "",
  "id": "rediff-login-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing the negative scenario",
  "description": "",
  "id": "rediff-login-validation;testing-the-negative-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "chromedriver is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign In link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e and click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user login is not successful",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "rediff-login-validation;testing-the-negative-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "rediff-login-validation;testing-the-negative-scenario;;1"
    },
    {
      "cells": [
        "nandi@gmail.com",
        "Toni@123"
      ],
      "line": 14,
      "id": "rediff-login-validation;testing-the-negative-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Testing the negative scenario",
  "description": "",
  "id": "rediff-login-validation;testing-the-negative-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "chromedriver is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on the landing page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign In link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters nandi@gmail.com and Toni@123 and click on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user login is not successful",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination.chromedriver_is_initialized()"
});
formatter.result({
  "duration": 5199217000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_is_on_the_landing_page()"
});
formatter.result({
  "duration": 767865600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_clicks_on_sign_in_link()"
});
formatter.result({
  "duration": 352177900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nandi@gmail.com",
      "offset": 12
    },
    {
      "val": "Toni@123",
      "offset": 32
    }
  ],
  "location": "StepDefination.user_enters_and_and_click_on_login_button(String,String)"
});
formatter.result({
  "duration": 642284400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_login_is_not_successful()"
});
formatter.result({
  "duration": 36584500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.close_the_browser()"
});
formatter.result({
  "duration": 629776800,
  "status": "passed"
});
});