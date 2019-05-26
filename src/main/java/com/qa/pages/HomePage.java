package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;
import com.qa.util.TestUtils;

public class HomePage extends TestBase {
	@FindBy(xpath = "//span[contains(text(),'Account & Lists')]")
	WebElement signInButton;

	@FindBy(xpath = "//span[contains(text(),'Sign Out')]")
	WebElement signOutButton;

	@FindBy(xpath = "//span[text()='Departments']")
	WebElement departmentLink;

	@FindBy(xpath = "//span[text()='Electronics']")
	WebElement electronicsLink;

	@FindBy(xpath = "//label[contains(text(),'Search')]//following-sibling::input")
	WebElement searchBox;
	
	@FindBy(xpath = "//span[contains(text(),'Go')]//following-sibling::input")
	WebElement goButton;
	
	@FindBy(xpath = "//a[@id='nav-cart']")
	WebElement cart;
	

	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	public LoginPage clickSignInButton() {
		TestUtils.waitForElementToBeClickable(signInButton, 30);
		signInButton.click();
		return new LoginPage();
	}

	public String verifyTitle() {

		return driver.getTitle();

	}
	
	public LoginPage performLogout() {
		Actions action = new Actions(driver);
		action.moveToElement(signInButton).build().perform();
		
		TestUtils.waitForElementToBeClickable(signOutButton, 30);
		signOutButton.click();
		
		return new LoginPage();
		
	}
	
	public ProductPage selectElectronics() {
		Actions action = new Actions(driver);
		action.moveToElement(departmentLink).build().perform();
		
		TestUtils.waitForElementToBeClickable(electronicsLink, 30);
		electronicsLink.click();
		
		return new ProductPage();
		
	}
	
	public ProductPage searchProduct(String item) {
		TestUtils.waitForElementToBeDisplayed(searchBox, 30);
		searchBox.sendKeys(item);
		
		goButton.click();
		
		return new ProductPage();
		
	}
	
	public CartPage selectCart(){
		TestUtils.waitForElementToBeClickable(cart, 30);
		
		cart.click();
		
		return new CartPage();
		
	}

}
