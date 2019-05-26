package com.qa.stepDefinition;

import com.qa.base.TestBase;
import com.qa.pages.CartPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.pages.ProductPage;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomePageSteps extends TestBase {

	LoginPage login;
	HomePage home;
	ProductPage product;
	CartPage cart;

	public HomePageSteps() {
		super();
	}
	
	@Given("^Amazon website is successfully loaded in browser$")
	public void launchWebsite() {
		initialization();
	}

	@When("^User clicks on sign in button on homepage$")
	public void clickOnsignIn() throws Throwable {
		home = new HomePage();
		login = home.clickSignInButton();

	}
	
	@Then("^User verifies that the amazon home page is displayed$")
	public void verifyHomePageTitle() {
		home = new HomePage();
		String actualTitle = home.verifyTitle();
		System.out.println("The actual home page title : " + actualTitle);
		
		Assert.assertEquals("User is not on home page", "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", actualTitle);
		System.out.println("User is on home page");
		
		
	}

	@When("^User logs out of the application$")
	public void userLogout() throws Throwable {
		home = new HomePage();
		login = home.performLogout();

	}

	@When("^User selects the electronics section$")
	public void selectElectronicsSection() throws Throwable {
		home = new HomePage();
        product = home.selectElectronics();
	}
	
	@When("^User searches for \"(.*)\" in home page$")
	public void search(String item) throws Throwable {
		home = new HomePage();
		product = home.searchProduct(item);
	}
	
	@And("^User selects cart from home page$")
	public void clickCart() throws Throwable {
		home = new HomePage();
		cart = home.selectCart();
	}

	@After
	public void tearDown() {
		driver.quit();
	}
}
