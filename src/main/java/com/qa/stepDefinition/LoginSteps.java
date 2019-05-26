package com.qa.stepDefinition;

import com.qa.base.TestBase;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;

import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps extends TestBase {

	LoginPage login;
	HomePage home;
	
	public LoginSteps() {
		super();
	}
	
	@Then("^User verifies that the login page is displayed$")
	public void verifyLoginPage() {
		login = new LoginPage();
		String actualTitle = login.retrieveTitle();
		System.out.println("The actual title of login page is : " + actualTitle);
		
		Assert.assertEquals("User is not on login page", "Amazon Sign In", actualTitle);
		System.out.println("User is on login page");
	}
	
	@When("^User logins to the application by entering the username and password$")
	public void applicationLogin() {
		login = new LoginPage();
		home = login.performLogin();
	}
	
	@Then("^User verifies that logout should happen successfully$")
	public void logoutSuccessful() {
		verifyLoginPage();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	

}
