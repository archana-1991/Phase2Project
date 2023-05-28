package StepDefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty"},
		features = "src/test/java/features",
		glue = "StepDefs"
		//tags = {"@Sanity"}
		)
public class TestRunner {

}
