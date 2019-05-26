package com.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;


public class TestBase {

	public static WebDriver driver;
	public static Properties prop;

	
	
	public TestBase(){
		
		prop = new Properties();
		try {
			FileInputStream fi = new FileInputStream("C:\\Users\\USER\\eclipse-workspace\\GojekRemoteAssignment\\src\\main\\java\\com\\qa\\config\\config.properties");
			try {
				prop.load(fi);
			} catch (IOException e) {
			    e.getMessage();
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		
	}
	
	public void initialization() {
		String browserName = prop.getProperty("browser");
		if(browserName.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					"C:\\Program Files\\chromedriver.exe");
			 driver = new ChromeDriver();
		}
		else if(browserName.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver",
					"C:\\Program Files\\geckodriver.exe");
			 driver = new FirefoxDriver();
		}
		else if(browserName.equals("IE")) {
			System.setProperty("webdriver.edge.driver",
					"C:\\Program Files\\MicrosoftWebDriver.exe");
			 driver = new EdgeDriver();
		}
		
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(prop.getProperty("url"));
	}
}
