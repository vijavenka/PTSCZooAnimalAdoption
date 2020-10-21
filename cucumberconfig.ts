import {Config, browser} from "protractor";
import * as reporter from "cucumber-html-reporter";

// To compile run tsc
// To execute npm run cucumbertest
// In package.json, cucumbertest is configure as 
// "cucumbertest": "protractor JSFiles/cucumberconfig.js",
// And it creates report with screenshot when there is any failure

export let config: Config = {
    // The address of a running selenium server
    // seleniumAddress: 'http://localhost:4444/wd/hub',	// direct connect
    directConnect:true,
    framework: 'custom',
     // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // capabilities to be passed to webdriver instance
    capabilities: {
      browserName: 'chrome',
      // browserName: 'firefox',
      // browserName: 'internet explorer',
      // browserName: 'MicrosoftEdge',
      'goog:chromeOptions': {
        w3c: false
       },
    },  

/*    multiCapabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        w3c: false }
       },
       {
        browserName: 'firefox',
        'goog:chromeOptions': {
          w3c: false }
         }
    ],  */

    // spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js)
    // they may include glob pattern
    specs: ['../features'],

    cucumberOpts: {
      // tags:"@calculatorTesting and @data2",
      format:"json:./cucumber_report.json",
        // require step definitions
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },

    // Options to be passed to Jasmine.
/*    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    }, */
      
    onPrepare : function(){
      browser.driver.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(5000);
      browser.manage().timeouts().setScriptTimeout(60000);
    },

    onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumber_report.json',
          output: './cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "QA",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Mac",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
        };
        reporter.generate(options);
      }
  };