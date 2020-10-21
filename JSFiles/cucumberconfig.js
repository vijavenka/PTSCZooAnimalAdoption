"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
// To compile run tsc
// To execute npm run cucumbertest
// In package.json, cucumbertest is configure as 
// "cucumbertest": "protractor JSFiles/cucumberconfig.js",
// And it creates report with screenshot when there is any failure
exports.config = {
    // The address of a running selenium server
    // seleniumAddress: 'http://localhost:4444/wd/hub',	// direct connect
    directConnect: true,
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
        format: "json:./cucumber_report.json",
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
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        protractor_1.browser.manage().timeouts().setScriptTimeout(60000);
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
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLGlFQUFtRDtBQUVuRCxxQkFBcUI7QUFDckIsa0NBQWtDO0FBQ2xDLGlEQUFpRDtBQUNqRCwwREFBMEQ7QUFDMUQsa0VBQWtFO0FBRXZELFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDJDQUEyQztJQUMzQyxxRUFBcUU7SUFDckUsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbEIsMkNBQTJDO0lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELGtEQUFrRDtJQUNsRCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtRQUNyQiwwQkFBMEI7UUFDMUIsb0NBQW9DO1FBQ3BDLGdDQUFnQztRQUNoQyxvQkFBb0IsRUFBRTtZQUNwQixHQUFHLEVBQUUsS0FBSztTQUNWO0tBQ0g7SUFFTDs7Ozs7Ozs7OztjQVVVO0lBRU4sdUVBQXVFO0lBQ3ZFLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBRXRCLFlBQVksRUFBRTtRQUNaLHdDQUF3QztRQUN4QyxNQUFNLEVBQUMsNkJBQTZCO1FBQ2xDLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDM0M7S0FDRjtJQUVILG1DQUFtQztJQUN2Qzs7O2FBR1M7SUFFTCxTQUFTLEVBQUc7UUFDVixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2IsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBRWxCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsSUFBSTtnQkFDeEIsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNGLENBQUM7UUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSixDQUFDIn0=