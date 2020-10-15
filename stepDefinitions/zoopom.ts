import { Given, Then } from "cucumber";
import chai from "chai";
import { home_page } from "../pageObjects/home_page";
import { animal_page } from "../pageObjects/animal_page";
 
let h_page = new home_page();
let a_page = new animal_page();
var expect = chai.expect;
 
Given('I will navigate to Zoo adoption page', async ()=> {
 await h_page.getUrl();
 });

Then('I will enter first page details {string}', async (name)=> {
  h_page.enterName(name);
  expect(await h_page.getDynamicText()).to.equal(name);
  h_page.clickContinue();   
});

Then('Second page details {string}, {string}', async(title, option)=> {
  expect(await a_page.getTitleNameSecondPage()).to.contain(title);
  await a_page.selectAnimal(option);
  a_page.clickContinue();
});
 
Then('Finally page details {string}', async(title)=> {
  expect(await a_page.getTitleNameThirdPage()).to.contain(title);
});
