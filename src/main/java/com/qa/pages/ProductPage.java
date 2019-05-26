package com.qa.pages;

import java.util.HashMap;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.base.TestBase;
import com.qa.util.TestUtils;

public class ProductPage extends TestBase {
	
	@FindBy(xpath = "//span[contains(text(),'HEADPHONES')]")
	WebElement headphoneLink;
	
	@FindBy(xpath = "//img[@data-image-index='0']")
	WebElement headphoneItem;
	
	@FindBy(xpath="//input[@id='add-to-cart-button']")
	WebElement addToCartButtonHeadphone;

	@FindBy(xpath="//img[@data-image-index='3']")
	WebElement productItem;
	
	@FindBy(xpath="//select[@id='quantity']")
	WebElement quantity;
	
	@FindBy(xpath="//span[contains(text(),'Continue')]//preceding-sibling::input")
	WebElement continueButton;
	
	public static HashMap<String,String> addMap = new HashMap<String,String>();
	
	//Initialize the webelements by driver
	public ProductPage() {
		PageFactory.initElements(driver, this);
	}
	
	//Actions to be performed on webelements
	public void selectHeadphone() {
		TestUtils.waitForElementToBeClickable(headphoneLink, 30);
		headphoneLink.click();
		
		TestUtils.waitForElementToBeClickable(headphoneItem, 30);
		String headphoneName = headphoneItem.getAttribute("alt").trim();
		System.out.println("The selected headphone is : " + headphoneName);
		addMap.put("headphoneName", headphoneName);
		headphoneItem.click();
	}
	
	public CartPage addToCartHeadphone() {
		
		TestUtils.waitForElementToBeClickable(addToCartButtonHeadphone, 30);
		addToCartButtonHeadphone.click();
		
		return new CartPage();
	}
	
	public void selectDesiredProduct() {
		
		TestUtils.waitForElementToBeClickable(productItem, 30);
		String productName = productItem.getAttribute("alt").trim();
		System.out.println("The selected product name is : " + productName);
		addMap.put("productName", productName);
		productItem.click();
	}
	
	public CartPage addToCartProduct() throws InterruptedException {
		
		TestUtils.waitForElementToBeClickable(quantity, 30);
		TestUtils.selectValuesFromDropdown(quantity, "2");
		TestUtils.waitForElementToBeClickable(addToCartButtonHeadphone, 30);
		addToCartButtonHeadphone.click();
		
		Thread.sleep(3000);
		continueButton.click();
		
		return new CartPage();
	}
}
