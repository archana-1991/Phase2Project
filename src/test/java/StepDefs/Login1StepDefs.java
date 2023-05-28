package StepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class Login1StepDefs {
	
	WebDriver driver=Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.saucedemo.com");
	}

	@When("I enter username")
	public void i_enter_username() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement userName=driver.findElement(By.id("user-name"));
		 userName.sendKeys("test-user");
	}

	@When("I enter password")
	public void i_enter_password() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement password=driver.findElement(By.id("password"));
		password.sendKeys("password");
	}

	@When("I click on login button")
	public void i_click_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginButton = driver.findElement(By.id("login-button"));
		loginButton.click();
	   
	}

	@Then("I should get error message")
	public void i_should_get_error_message() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error=driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActError=error.getText();
		String ExpError="Epic sadface: Username and password do not match any user in this service";
		Assert.assertEquals(ActError, ExpError);
	}
	
	@When("I enter username as {string}")
	public void i_enter_username_as(String userName) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement userNameElement=driver.findElement(By.id("user-name"));
		 userNameElement.sendKeys(userName);
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String password) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement passwordElement=driver.findElement(By.id("password"));
		passwordElement.sendKeys(password);
	}

	@Then("I should get error message as {string}")
	public void i_should_get_error_message_as(String errorMessage) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error=driver.findElement(By.xpath("//h3[@data-test='error']"));
		String ActError=error.getText();
		Assert.assertEquals(ActError, errorMessage);
	}

	@Then("I should be landed on home page")
	public void i_should_be_landed_on_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error=driver.findElement(By.xpath("//div[@class='app_logo']"));
		String ActError=error.getText();
		Assert.assertEquals(ActError, "Swag Labs");
	}

}
