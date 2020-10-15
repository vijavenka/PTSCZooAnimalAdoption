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
describe('Zoo adoption center', () => {
    beforeEach(() => {
        protractor_1.browser.get("https://www.thetestroom.com/jswebapp/index.html");
    });
    it('for animals', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model("person.name")).sendKeys("Blablabla").then(function () {
            protractor_1.browser.sleep(2000);
            //			element(by.css("h2[ng-bind='person.name']")).getText().then(function(name){ console.log(name); }); })
            expect(protractor_1.element(protractor_1.by.binding('person.name')).getText()).toBe('Blablabla');
        });
        yield protractor_1.element(protractor_1.by.buttonText("CONTINUE")).click();
        yield protractor_1.element(protractor_1.by.model('animal')).$('[value="1"]').click().then(function () { protractor_1.browser.sleep(2000); });
        //		element(by.model("animal")).element(by.xpath("//option[@value='1']")).click();
        yield protractor_1.element(protractor_1.by.buttonText("CONTINUE")).click();
        yield expect(protractor_1.element(protractor_1.by.css('#title')).getText()).toContain('Thank');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ucG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbm9ucG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBRWpELFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFFLEVBQUU7SUFFbkMsVUFBVSxDQUFFLEdBQUUsRUFBRTtRQUNmLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQVEsRUFBRTtRQUUzQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsMEdBQTBHO1lBQ3hHLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQVcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxRyxrRkFBa0Y7UUFDaEYsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxNQUFNLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==