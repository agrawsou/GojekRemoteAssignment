package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;
import com.qa.util.TestUtils;

public class CartPage extends TestBase {
	@FindBy(xpath = "//input[@name='proceedToCheckout']")
	WebElement checkout;


	// Initialize the webelements by driver
	public CartPage() {
		PageFactory.initElements(driver, this);
	}

	// Actions to be performed on webelements
	public void removeHeadphone() {

		String headphoneName = ProductPage.addMap.get("headphoneName").trim();

		System.out.println("The headphone name comes out to be : " + headphoneName);

		WebElement deleteButton = driver
				.findElement(By.xpath("//input[contains(@aria-label,'" + headphoneName + "') and @value='Delete']"));

		TestUtils.waitForElementToBeClickable(deleteButton, 30);
		deleteButton.click();
	}

	public void reduceQuantity(String product, String quantity) {
		String productName = ProductPage.addMap.get("productName").trim();

		System.out.println("The headphone name comes out to be : " + productName);

		WebElement changeQuantity = driver.findElement(By.xpath(
				"//span[contains(text(),'"+product+"') and contains(@class,'aok-offscreen')]//..//..//..//..//preceding-sibling::span/select[@name='quantity']"));

		TestUtils.waitForElementToBeClickable(changeQuantity, 30);
		TestUtils.selectValuesFromDropdown(changeQuantity, quantity);
	}
	
	public void checkout() {
		TestUtils.waitForElementToBeClickable(checkout, 30);
		checkout.click();
	}

}
