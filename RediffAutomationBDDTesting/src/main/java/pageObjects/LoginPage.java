package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {

	
	public WebDriver driver;
	
	public LoginPage(WebDriver driver) {
	
		this.driver=driver;
	}
	
	private By signButton = By.cssSelector(".signin");
	private By username = By.name("login");
	private By password = By.name("passwd");
	private By loginButton = By.xpath("//input[@title='Sign in']");
	By text = By.xpath("//div[@id='div_login_error']/b");
	
	
	public WebElement clickSignIn()
	{
		return driver.findElement(signButton);
	}
	public WebElement getUsername()
	{
		return driver.findElement(username);
	}
	public WebElement getPassword()
	{
		return driver.findElement(password);
	}
	public WebElement clickLogin()
	{
		return driver.findElement(loginButton);
	}
	public WebElement getTextValue()
	{
		return driver.findElement(text);
	}
}
