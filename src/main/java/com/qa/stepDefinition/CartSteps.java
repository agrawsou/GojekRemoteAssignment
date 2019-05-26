package com.qa.stepDefinition;

import com.qa.base.TestBase;
import com.qa.pages.CartPage;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CartSteps extends TestBase {
	CartPage cart;

	public CartSteps() {
		super();
	}
	
	@Then("^User removes the added headphones from cart page$")
	public void removeHeadphones() {
		cart = new CartPage();
		cart.removeHeadphone();
	}
	
	@And("^user reduces the quantity of \"(.*)\" to \"(.*)\"$")
	public void reduceCount(String product, String quantity) {
		cart = new CartPage();
		cart.reduceQuantity(product, quantity);
	}
	
	@Then("^User proceeds to checkout$")
	public void proceedForCheckout() {
		cart = new CartPage();
		cart.checkout();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
}
