Feature: Amazon test flow

Scenario: Check the login functionality in Amazon
Given Amazon website is successfully loaded in browser
When User clicks on sign in button on homepage
Then User verifies that the login page is displayed
When User logins to the application by entering the username and password 
Then User verifies that the amazon home page is displayed
When User logs out of the application 
Then User verifies that logout should happen successfully


Scenario: Select headphone and add to cart
Given Amazon website is successfully loaded in browser
When User clicks on sign in button on homepage
Then User verifies that the login page is displayed
When User logins to the application by entering the username and password 
Then User verifies that the amazon home page is displayed
When User selects the electronics section
And User select the desired headphone from electronics section
Then User adds the desired headphone to cart


Scenario Outline: Search for macbook and add to cart
Given Amazon website is successfully loaded in browser
When User clicks on sign in button on homepage
Then User verifies that the login page is displayed
When User logins to the application by entering the username and password 
Then User verifies that the amazon home page is displayed
When User searches for "<product>" in home page
And User selects the desired product
Then User adds the desired product to cart

Examples:
|product|
|MacBook Pro|


Scenario: Select cart and remove headphone
Given Amazon website is successfully loaded in browser
When User clicks on sign in button on homepage
Then User verifies that the login page is displayed
When User logins to the application by entering the username and password 
Then User verifies that the amazon home page is displayed
When User selects the electronics section
And User select the desired headphone from electronics section
And User selects cart from home page
Then User removes the added headphones from cart page

Scenario Outline: Reduce the quantity of Macbook Pro and proceed to checkout
Given Amazon website is successfully loaded in browser
When User clicks on sign in button on homepage
Then User verifies that the login page is displayed
When User logins to the application by entering the username and password 
Then User verifies that the amazon home page is displayed
When User searches for "<product>" in home page
And User selects the desired product
And User selects cart from home page
And user reduces the quantity of "<product>" to "1"
Then User proceeds to checkout


Examples:
|product|
|MacBook Pro|
