import { ElementFinder, element, by, $, browser } from "protractor";

export class animal_page
{
    animalListBox:ElementFinder;
    animal:ElementFinder;
    continueButton:ElementFinder;
    titleNameThird:ElementFinder;
    titleNameSecond:ElementFinder;
  
    constructor(){
        this.animalListBox = element(by.model("animal"));
        this.animal = $('[value="1"]');
        this.continueButton = element(by.buttonText("CONTINUE"));
        // this.titleName = element(by.css("[id='title']"));
        this.titleNameSecond = element(by.tagName("h1"));
        this.titleNameThird = $('#title');
    } 

    async selectAnimal(option: number) {
      console.log("option : " + option);
      browser.waitForAngular();
      // await this.animalListBox.$('[value="1"]').click();
      await this.animalListBox.all(by.tagName("option")).get(option).click();
    }

    clickContinue(){
      this.continueButton.click();
    }
    
    getTitleNameSecondPage(): any{
      browser.waitForAngular();
      return this.titleNameSecond.getText().then(function(title){console.log("Title Second : " + title); return title;});
    }

    getTitleNameThirdPage(): any{
      browser.waitForAngular();
      return this.titleNameThird.getText().then(function(title){console.log("Title Third : " + title); return title;});
    }
}