import { ElementFinder, element, by, browser } from "protractor";

export class home_page
{
    nameTextBox:ElementFinder;
    dynamicText:ElementFinder;
    continueButton:ElementFinder;

    constructor(){
        this.nameTextBox=element(by.model("person.name"));
        this.dynamicText=element(by.binding('person.name'));
        this.continueButton=element(by.buttonText("CONTINUE"));
	} 
	
	getUrl(): any{
        return browser.get("http://www.thetestroom.com/jswebapp/index.html");
    }

    enterName(name: string){
        console.log("enterName() is called ..." + name);
		this.nameTextBox.sendKeys(name);
    }
    
    getDynamicText(): any{
		return this.dynamicText.getText().then(function(dText){ console.log("dynamicText : " + dText); return dText;});
	}
	
	clickContinue(){
		this.continueButton.click();
	}
}