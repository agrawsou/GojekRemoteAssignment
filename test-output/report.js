$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER/eclipse-workspace/GojekRemoteAssignment/src/main/java/com/qa/feature/AmazonTest.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon test flow",
  "description": "",
  "id": "amazon-test-flow",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check the login functionality in Amazon",
  "description": "",
  "id": "amazon-test-flow;check-the-login-functionality-in-amazon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User logs out of the application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User verifies that logout should happen successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.launchWebsite()"
});
formatter.result({
  "duration": 19442857472,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickOnsignIn()"
});
formatter.result({
  "duration": 5710589899,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 18581134,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationLogin()"
});
formatter.result({
  "duration": 6224764474,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyHomePageTitle()"
});
formatter.result({
  "duration": 20142809,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userLogout()"
});
formatter.result({
  "duration": 2244827992,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.logoutSuccessful()"
});
formatter.result({
  "duration": 20887399,
  "status": "passed"
});
formatter.after({
  "duration": 777792504,
  "status": "passed"
});
formatter.after({
  "duration": 27185,
  "status": "passed"
});
formatter.after({
  "duration": 293002,
  "status": "passed"
});
formatter.after({
  "duration": 23410,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Select headphone and add to cart",
  "description": "",
  "id": "amazon-test-flow;select-headphone-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User selects the electronics section",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User select the desired headphone from electronics section",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User adds the desired headphone to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.launchWebsite()"
});
formatter.result({
  "duration": 17078393348,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickOnsignIn()"
});
formatter.result({
  "duration": 3847415024,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 11565680,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationLogin()"
});
formatter.result({
  "duration": 5590160468,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyHomePageTitle()"
});
formatter.result({
  "duration": 42369864,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.selectElectronicsSection()"
});
formatter.result({
  "duration": 11153726780,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectDesiredHeadphone()"
});
formatter.result({
  "duration": 32572783062,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.addHeadphoneToCart()"
});
formatter.result({
  "duration": 13117522057,
  "status": "passed"
});
formatter.after({
  "duration": 977383282,
  "status": "passed"
});
formatter.after({
  "duration": 38891,
  "status": "passed"
});
formatter.after({
  "duration": 362101,
  "status": "passed"
});
formatter.after({
  "duration": 18879,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Search for macbook and add to cart",
  "description": "",
  "id": "amazon-test-flow;search-for-macbook-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User searches for \"\u003cproduct\u003e\" in home page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User selects the desired product",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User adds the desired product to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "amazon-test-flow;search-for-macbook-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 35,
      "id": "amazon-test-flow;search-for-macbook-and-add-to-cart;;1"
    },
    {
      "cells": [
        "MacBook Pro"
      ],
      "line": 36,
      "id": "amazon-test-flow;search-for-macbook-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Search for macbook and add to cart",
  "description": "",
  "id": "amazon-test-flow;search-for-macbook-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User searches for \"MacBook Pro\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User selects the desired product",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User adds the desired product to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.launchWebsite()"
});
formatter.result({
  "duration": 24405704643,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickOnsignIn()"
});
formatter.result({
  "duration": 4178326177,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 15169313,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationLogin()"
});
formatter.result({
  "duration": 5357593661,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyHomePageTitle()"
});
formatter.result({
  "duration": 14644853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook Pro",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.search(String)"
});
formatter.result({
  "duration": 9984930746,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProduct()"
});
formatter.result({
  "duration": 23928324571,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.addProductToCart()"
});
formatter.result({
  "duration": 13580561607,
  "status": "passed"
});
formatter.after({
  "duration": 887546589,
  "status": "passed"
});
formatter.after({
  "duration": 19257,
  "status": "passed"
});
formatter.after({
  "duration": 304331,
  "status": "passed"
});
formatter.after({
  "duration": 10195,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Select cart and remove headphone",
  "description": "",
  "id": "amazon-test-flow;select-cart-and-remove-headphone",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User selects the electronics section",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User select the desired headphone from electronics section",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User selects cart from home page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User removes the added headphones from cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.launchWebsite()"
});
formatter.result({
  "duration": 17020305924,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickOnsignIn()"
});
formatter.result({
  "duration": 3558973040,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 13404878,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationLogin()"
});
formatter.result({
  "duration": 6182743117,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyHomePageTitle()"
});
formatter.result({
  "duration": 35265301,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.selectElectronicsSection()"
});
formatter.result({
  "duration": 9416570290,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectDesiredHeadphone()"
});
formatter.result({
  "duration": 13206537889,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickCart()"
});
formatter.result({
  "duration": 7319888055,
  "status": "passed"
});
formatter.match({
  "location": "CartSteps.removeHeadphones()"
});
formatter.result({
  "duration": 445916255,
  "status": "passed"
});
formatter.after({
  "duration": 899657119,
  "status": "passed"
});
formatter.after({
  "duration": 16613,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.after({
  "duration": 36626,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Reduce the quantity of Macbook Pro and proceed to checkout",
  "description": "",
  "id": "amazon-test-flow;reduce-the-quantity-of-macbook-pro-and-proceed-to-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User searches for \"\u003cproduct\u003e\" in home page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User selects the desired product",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User selects cart from home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user reduces the quantity of \"\u003cproduct\u003e\" to \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User proceeds to checkout",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "amazon-test-flow;reduce-the-quantity-of-macbook-pro-and-proceed-to-checkout;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 64,
      "id": "amazon-test-flow;reduce-the-quantity-of-macbook-pro-and-proceed-to-checkout;;1"
    },
    {
      "cells": [
        "MacBook Pro"
      ],
      "line": 65,
      "id": "amazon-test-flow;reduce-the-quantity-of-macbook-pro-and-proceed-to-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "Reduce the quantity of Macbook Pro and proceed to checkout",
  "description": "",
  "id": "amazon-test-flow;reduce-the-quantity-of-macbook-pro-and-proceed-to-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "Amazon website is successfully loaded in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "User clicks on sign in button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User verifies that the login page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User logins to the application by entering the username and password",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User verifies that the amazon home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "User searches for \"MacBook Pro\" in home page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User selects the desired product",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User selects cart from home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user reduces the quantity of \"MacBook Pro\" to \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User proceeds to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.launchWebsite()"
});
formatter.result({
  "duration": 18742192288,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickOnsignIn()"
});
formatter.result({
  "duration": 5427111215,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 12983120,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.applicationLogin()"
});
formatter.result({
  "duration": 6783413928,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyHomePageTitle()"
});
formatter.result({
  "duration": 51501658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook Pro",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.search(String)"
});
formatter.result({
  "duration": 8401289967,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.selectProduct()"
});
formatter.result({
  "duration": 23707615316,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.clickCart()"
});
formatter.result({
  "duration": 9548056044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook Pro",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "CartSteps.reduceCount(String,String)"
});
formatter.result({
  "duration": 241455061,
  "status": "passed"
});
formatter.match({
  "location": "CartSteps.proceedForCheckout()"
});
formatter.result({
  "duration": 4811885794,
  "status": "passed"
});
formatter.after({
  "duration": 824597055,
  "status": "passed"
});
formatter.after({
  "duration": 17368,
  "status": "passed"
});
formatter.after({
  "duration": 14726,
  "status": "passed"
});
formatter.after({
  "duration": 13593,
  "status": "passed"
});
});