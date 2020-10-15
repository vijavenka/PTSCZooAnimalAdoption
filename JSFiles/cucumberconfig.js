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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLGlFQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVztJQUN4QiwyQ0FBMkM7SUFDM0MscUVBQXFFO0lBQ3JFLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ2xCLDJDQUEyQztJQUM1QyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxrREFBa0Q7SUFDbEQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7UUFDckIsMEJBQTBCO1FBQzFCLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsb0JBQW9CLEVBQUU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7U0FDVjtLQUNIO0lBRUw7Ozs7Ozs7Ozs7Y0FVVTtJQUVOLHVFQUF1RTtJQUN2RSw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUV0QixZQUFZLEVBQUU7UUFDWix3Q0FBd0M7UUFDeEMsTUFBTSxFQUFDLDZCQUE2QjtRQUNsQywyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBQzNDO0tBQ0Y7SUFFSCxtQ0FBbUM7SUFDdkM7OzthQUdTO0lBRUwsU0FBUyxFQUFHO1FBQ1Ysb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNiLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUVsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDRixDQUFDO1FBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0osQ0FBQyJ9