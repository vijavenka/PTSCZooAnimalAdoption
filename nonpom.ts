import {browser, element, by } from "protractor";

describe('Zoo adoption center', ()=> {
	
	beforeEach( ()=> {
		browser.get("https://www.thetestroom.com/jswebapp/index.html");
	});
	
	it('for animals', async ()=>{
		
		await element(by.model("person.name")).sendKeys("Blablabla").then(function() {
			browser.sleep(2000);
//			element(by.css("h2[ng-bind='person.name']")).getText().then(function(name){ console.log(name); }); })
		expect(element(by.binding('person.name')).getText()).toBe('Blablabla'); })
		await element(by.buttonText("CONTINUE")).click();
        await element(by.model('animal')).$('[value="1"]').click().then(function(){browser.sleep(2000); })
//		element(by.model("animal")).element(by.xpath("//option[@value='1']")).click();
		await element(by.buttonText("CONTINUE")).click();
        await expect(element(by.css('#title')).getText()).toContain('Thank');
	});
});