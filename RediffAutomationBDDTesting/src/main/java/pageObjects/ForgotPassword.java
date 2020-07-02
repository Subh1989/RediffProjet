package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ForgotPassword {

	public WebDriver driver;
	
	public ForgotPassword(WebDriver driver) {
		
		this.driver = driver;
	}
	
	By fplink = By.linkText("Forgot Password?");
	By searchEmail = By.id("txtlogin");
	By nextButton = By.name("next");
	

	public WebElement clickFPLink()
	{
		return driver.findElement(fplink);
	}
	public WebElement getSearchEmail()
	{
		return driver.findElement(searchEmail);
	}
	public WebElement clickNextButton()
	{
		return driver.findElement(nextButton);
	}
}
