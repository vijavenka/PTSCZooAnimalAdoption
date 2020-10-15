"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const cucumber_1 = require("cucumber");
cucumber_1.Before(function () {
    // This hook will be executed before all scenarios
});
cucumber_1.Before(function () {
    // This hook will be executed before scenarios tagged with @foo
    // browser.driver.manage().window().maximize();
});
cucumber_1.After(function () {
    console.log("Testing is completed");
});
cucumber_1.Before({ tags: "@angularTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("Started executing ...");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status == cucumber_1.Status.FAILED) {
            // code to take screenshot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsdUNBQWlEO0FBRWpELGlCQUFNLENBQUM7SUFDTCxrREFBa0Q7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDO0lBQ0wsK0RBQStEO0lBQy9ELCtDQUErQztBQUNqRCxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUU7SUFDaEMsd0VBQXdFO0lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUUsVUFBZSxRQUFROztRQUM1QixJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3pDLDBCQUEwQjtZQUMxQixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=