package com.qa.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;
import com.qa.util.ConfigFileReader;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\USER\\eclipse-workspace\\GojekRemoteAssignment\\src\\main\\java\\com\\qa\\feature\\AmazonTest.feature", glue = { "com.qa.stepDefinition" }, plugin = { "pretty",
		"html:test-output", "json:json-output/cucumber.json",
		"junit:junit-output/Cucumber.xml", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html" }, tags = {}, dryRun = false, monochrome = true, strict = true)

public class TestRunner {
	@AfterClass
	public static void teardown() {
	Reporter.loadXMLConfig(new File("com/qa/config/extent-config.xml"));
	}
	 }
