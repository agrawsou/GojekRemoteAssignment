package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;
import com.qa.util.TestUtils;

public class LoginPage extends TestBase {
	//Define the page factories for login
	
		@FindBy(xpath = "//input[@name='email']")
		WebElement username;
		
		@FindBy(xpath = "//input[@name='password']")
		WebElement password;
		
		@FindBy(xpath="//input[@id='signInSubmit']")
		WebElement loginBtn;
		
		//Initialize the webelements by driver
		public LoginPage() {
			PageFactory.initElements(driver, this);
		}
		
		//Actions to be performed on webelements
		public String retrieveTitle() {
			return driver.getTitle();
		}
		
		public HomePage performLogin() {
			TestUtils.waitForElementToBeDisplayed(username, 30);
			username.sendKeys(prop.getProperty("username"));
			
			TestUtils.waitForElementToBeDisplayed(password, 30);
			password.sendKeys(prop.getProperty("password"));
			
			TestUtils.waitForElementToBeClickable(loginBtn, 30);
			loginBtn.click();
			
			return new HomePage();
		}
		


}
