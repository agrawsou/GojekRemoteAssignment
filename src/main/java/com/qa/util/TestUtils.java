package com.qa.util;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.qa.base.TestBase;

public class TestUtils extends TestBase {

	
	public static void takeTheScreenshot() {
		File src= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		try {
			FileHandler.copy(src, new File("C:\\Games\\error.png"));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void waitForElementToBeClickable(WebElement locator,int timeOut) {
		new WebDriverWait(driver, timeOut).ignoring(StaleElementReferenceException.class).until(ExpectedConditions.elementToBeClickable(locator));
	}
	
	public static void waitForElementToBeDisplayed(WebElement locator,int timeOut) {
		new WebDriverWait(driver, timeOut).ignoring(StaleElementReferenceException.class).until(ExpectedConditions.visibilityOf(locator));
	}
	
	public static void selectValuesFromDropdown(WebElement element,String value) {
		
		Select select = new Select(element);
		select.selectByVisibleText(value);
	}
}
