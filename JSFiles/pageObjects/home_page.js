"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home_page = void 0;
const protractor_1 = require("protractor");
class home_page {
    constructor() {
        this.nameTextBox = protractor_1.element(protractor_1.by.model("person.name"));
        this.dynamicText = protractor_1.element(protractor_1.by.binding('person.name'));
        this.continueButton = protractor_1.element(protractor_1.by.buttonText("CONTINUE"));
    }
    getUrl() {
        return protractor_1.browser.get("http://www.thetestroom.com/jswebapp/index.html");
    }
    enterName(name) {
        console.log("enterName() is called ..." + name);
        this.nameTextBox.sendKeys(name);
    }
    getDynamicText() {
        return this.dynamicText.getText().then(function (dText) { console.log("dynamicText : " + dText); return dText; });
    }
    clickContinue() {
        this.continueButton.click();
    }
}
exports.home_page = home_page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZV9wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvaG9tZV9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpRTtBQUVqRSxNQUFhLFNBQVM7SUFNbEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsTUFBTTtRQUNDLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQVk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSyxJQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBQ0Q7QUE1QkQsOEJBNEJDIn0=