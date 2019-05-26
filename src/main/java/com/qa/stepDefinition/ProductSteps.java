package com.qa.stepDefinition;

import com.qa.base.TestBase;
import com.qa.pages.CartPage;
import com.qa.pages.ProductPage;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class ProductSteps extends TestBase {

	ProductPage product;
	CartPage cart;

	public ProductSteps() {
		super();
	}

	@And("^User select the desired headphone from electronics section$")
	public void selectDesiredHeadphone() throws Throwable {
		product = new ProductPage();
		product.selectHeadphone();
	}

	@Then("^User adds the desired headphone to cart$")
	public void addHeadphoneToCart() {
		product = new ProductPage();
		cart = product.addToCartHeadphone();
	}

	@And("^User selects the desired product$")
	public void selectProduct() throws Throwable {
		product = new ProductPage();
		product.selectDesiredProduct();
	}

	@Then("^User adds the desired product to cart$")
	public void addProductToCart() throws Throwable {
		product = new ProductPage();
		product.addToCartProduct();
	}

	@After
	public void tearDown() {
		driver.quit();
	}
}
