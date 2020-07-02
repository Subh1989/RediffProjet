package stepDefinations;

import static org.testng.Assert.assertTrue;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.ForgotPassword;
import pageObjects.LandingPage;
import pageObjects.LoginPage;
import resources.Base;

public class StepDefination extends Base{

	public LoginPage l;
	public ForgotPassword fp;
	
    @Given("^chromedriver is initialized$")
    public void chromedriver_is_initialized() throws Throwable {
      
    	driver = browserInformation();
    }

    @When("^user is on the landing page$")
    public void user_is_on_the_landing_page() throws Throwable {
        
    	String browserURL = prop.getProperty("url");
    	driver.get(browserURL);
    }

    @Then("^get the title of the page$")
    public void get_the_title_of_the_page() throws Throwable {
        
    	String title = driver.getTitle();
    	Assert.assertEquals(title, "Rediff.com: News | Rediffmail | Stock Quotes | Shopping");
    }

    @And("^Verify the search text box is displayed$")
    public void verify_the_search_text_box_is_displayed() throws Throwable {
        
    	LandingPage lp = new LandingPage(driver);
    	Assert.assertTrue(lp.getSearchBox().isDisplayed());
    }

    @And("^close the browser$")
    public void close_the_browser() throws Throwable {
       
    	driver.quit();
    }
    @And("^user clicks on Sign In link$")
    public void user_clicks_on_sign_in_link() throws Throwable {
    	l = new LoginPage(driver);
    	l.clickSignIn().click();
    }

    @Then("^user login is not successful$")
    public void user_login_is_not_successful() throws Throwable {
       String textDetails =  l.getTextValue().getText();
       Assert.assertEquals(textDetails, "Wrong username and password combination.");
    }

    @And("^user enters (.+) and (.+) and click on login button$")
    public void user_enters_and_and_click_on_login_button(String username, String password) throws Throwable {
        
    	l.getUsername().sendKeys(username);
    	l.getPassword().sendKeys(password);
    	l.clickLogin().click();   	
    }
    
    @Then("^user should be allowed to enter the email id as \"([^\"]*)\"$")
    public void user_should_be_allowed_to_enter_the_email_id_as_something(String strArg1) throws Throwable {
        
    	fp.getSearchEmail().sendKeys(strArg1);
    }

    @And("^user clicks on the Forgot Password link$")
    public void user_clicks_on_the_forgot_password_link() throws Throwable {
        
    	fp = new ForgotPassword(driver);
    	fp.clickFPLink().click();
    }

    @And("^user should be able to click the next button$")
    public void user_should_be_able_to_click_the_next_button() throws Throwable {
        
    	fp.clickNextButton().click();
    }
}
