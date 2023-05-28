package StepDefs;

import org.openqa.selenium.WebDriver;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import junit.framework.Assert;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CartStepDefs {
	
	WebDriver driver=Hooks.driver;
	
	@When("I Add an item as {string}")
	public void i_Add_an_item_as(String product_name) {
	    // Write code here that turns the phrase above into concrete actions
		String addItemLink = "add-to-cart-"+product_name.toLowerCase().trim().replace(' ', '-');
		WebElement addToCartElement = driver.findElement(By.id(addItemLink));
		addToCartElement.click();
	}

	@Then("I go to Cart")
	public void i_go_to_Cart() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement goToCartElement = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		goToCartElement.click();
	}

	@Then("I Should see as {int} item\\(s) in the cart")
	public void i_Should_see_as_item_s_in_the_cart(int count) {
	    // Write code here that turns the phrase above into concrete actions
	    List<WebElement> elements = driver.findElements(By.xpath("//div[@class='cart_list']//div[@class='cart_item']"));
	    Assert.assertEquals(count, elements.size());
	    
	}

	@Then("Cart Should Contain an item as {string}")
	public void cart_Should_Contain_an_item_as(String product_name) {
	    // Write code here that turns the phrase above into concrete actions
		List<WebElement> elements = driver.findElements(By.xpath("//div[@class='cart_list']//div[@class='cart_item']"));
	    boolean found = false;
	    
	    for(WebElement elem : elements) {
	    	WebElement possibleElement = elem.findElement(By.xpath(".//div[@class='inventory_item_name']"));
	    	System.out.println("item name" +possibleElement.getText());
	    	if(possibleElement.getText().contains(product_name))
	    	{
	    		found = true;
	    		break;
	    	}
	    	possibleElement = null;
	    }
	    
	    Assert.assertTrue(found);
	}
}
