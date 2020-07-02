package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LandingPage {

	
	public WebDriver driver;
	
	public LandingPage(WebDriver driver) {
		
		this.driver=driver;
	}
	
	private By search = By.cssSelector("#srchword");
	


	public WebElement getSearchBox()
	{
		return driver.findElement(search);
	}
}
