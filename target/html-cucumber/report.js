$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature file will be verified with add to cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add one item to the cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I Add an item as \"Sauce Labs Onesie\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.CartStepDefs.i_Add_an_item_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.CartStepDefs.i_go_to_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see as 1 item(s) in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.CartStepDefs.i_Should_see_as_item_s_in_the_cart(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cart Should Contain an item as \"Sauce Labs Onesie\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.CartStepDefs.cart_Should_Contain_an_item_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login1.feature");
formatter.feature({
  "name": "This feature file will do Login operations",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_should_get_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be logged in successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.Login1StepDefs.i_should_be_landed_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});