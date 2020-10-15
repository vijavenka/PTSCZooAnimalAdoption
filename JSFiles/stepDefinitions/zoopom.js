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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai_1 = __importDefault(require("chai"));
const home_page_1 = require("../pageObjects/home_page");
const animal_page_1 = require("../pageObjects/animal_page");
let h_page = new home_page_1.home_page();
let a_page = new animal_page_1.animal_page();
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to Zoo adoption page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield h_page.getUrl();
}));
cucumber_1.Then('I will enter first page details {string}', (name) => __awaiter(void 0, void 0, void 0, function* () {
    h_page.enterName(name);
    expect(yield h_page.getDynamicText()).to.equal(name);
    h_page.clickContinue();
}));
cucumber_1.Then('Second page details {string}, {string}', (title, option) => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield a_page.getTitleNameSecondPage()).to.contain(title);
    yield a_page.selectAnimal(option);
    a_page.clickContinue();
}));
cucumber_1.Then('Finally page details {string}', (title) => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield a_page.getTitleNameThirdPage()).to.contain(title);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vcG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3pvb3BvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxnREFBd0I7QUFDeEIsd0RBQXFEO0FBQ3JELDREQUF5RDtBQUV6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM3QixJQUFJLE1BQU0sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUMvQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLGdCQUFLLENBQUMsc0NBQXNDLEVBQUUsR0FBUSxFQUFFO0lBQ3ZELE1BQU0sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSixlQUFJLENBQUMsMENBQTBDLEVBQUUsQ0FBTyxJQUFJLEVBQUMsRUFBRTtJQUM3RCxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsQ0FBTSxLQUFLLEVBQUUsTUFBTSxFQUFDLEVBQUU7SUFDbkUsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFNLEtBQUssRUFBQyxFQUFFO0lBQ2xELE1BQU0sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=