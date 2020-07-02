package resources;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Base {

	public WebDriver driver;
	public Properties prop;
	public WebDriver browserInformation() throws IOException
	{
		prop = new Properties();
		String homePath = System.getProperty("user.dir");
		FileInputStream fis = new FileInputStream(homePath+"\\src\\main\\java\\resources\\data.properties");
		prop.load(fis);
		
		String browserName = prop.getProperty("browser");
		
		if(browserName.contains("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", homePath+"\\src\\main\\java\\resources\\chromedriver.exe");
			ChromeOptions c = new ChromeOptions();
			if(browserName.contains("headless"))
			{
				c.addArguments("headless");
			}
			driver = new ChromeDriver(c);
			
		}
		
		else if (browserName.contains("firefox"))
		{
			//write the details for firefox browser
		}
		
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		return driver;
	}
	
}
