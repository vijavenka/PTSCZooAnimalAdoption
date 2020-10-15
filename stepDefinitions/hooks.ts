import { browser } from "protractor";
import { Before, After, Status } from "cucumber";

Before(function () {
  // This hook will be executed before all scenarios
});

Before(function () {
  // This hook will be executed before scenarios tagged with @foo
  // browser.driver.manage().window().maximize();
});

After(function () {
  console.log("Testing is completed")
});

Before({tags: "@angularTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
  console.log("Started executing ...");
});

After( async function(scenario) {
  if(scenario.result.status == Status.FAILED){
    // code to take screenshot
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot,"image/png");
  }
});
