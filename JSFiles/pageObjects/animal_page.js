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
exports.animal_page = void 0;
const protractor_1 = require("protractor");
class animal_page {
    constructor() {
        this.animalListBox = protractor_1.element(protractor_1.by.model("animal"));
        this.animal = protractor_1.$('[value="1"]');
        this.continueButton = protractor_1.element(protractor_1.by.buttonText("CONTINUE"));
        // this.titleName = element(by.css("[id='title']"));
        this.titleNameSecond = protractor_1.element(protractor_1.by.tagName("h1"));
        this.titleNameThird = protractor_1.$('#title');
    }
    selectAnimal(option) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("option : " + option);
            protractor_1.browser.waitForAngular();
            // await this.animalListBox.$('[value="1"]').click();
            yield this.animalListBox.all(protractor_1.by.tagName("option")).get(option).click();
        });
    }
    clickContinue() {
        this.continueButton.click();
    }
    getTitleNameSecondPage() {
        protractor_1.browser.waitForAngular();
        return this.titleNameSecond.getText().then(function (title) { console.log("Title Second : " + title); return title; });
    }
    getTitleNameThirdPage() {
        protractor_1.browser.waitForAngular();
        return this.titleNameThird.getText().then(function (title) { console.log("Title Third : " + title); return title; });
    }
}
exports.animal_page = animal_page;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWFsX3BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9hbmltYWxfcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0U7QUFFcEUsTUFBYSxXQUFXO0lBUXBCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pELG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFSyxZQUFZLENBQUMsTUFBYzs7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUM7WUFDbEMsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QixxREFBcUQ7WUFDckQsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pFLENBQUM7S0FBQTtJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSyxJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3JILENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSyxJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7Q0FDSjtBQXJDRCxrQ0FxQ0MifQ==