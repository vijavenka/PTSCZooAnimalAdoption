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
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // The address of a running selenium server
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect:true,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // capabilities to be passed to webdriver instance
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false
        },
    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvY3VjdW1iZXJjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUFtRDtBQUV4QyxRQUFBLE1BQU0sR0FBVztJQUN4QiwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxzQkFBc0I7SUFDdEIsU0FBUyxFQUFFLFFBQVE7SUFDbEIsMkNBQTJDO0lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELGtEQUFrRDtJQUNsRCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtRQUNyQixvQkFBb0IsRUFBRTtZQUNwQixHQUFHLEVBQUUsS0FBSztTQUNWO0tBQ0g7SUFFRCx1RUFBdUU7SUFDdkUsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFFdEIsWUFBWSxFQUFFO1FBQ1osd0NBQXdDO1FBQ3hDLE1BQU0sRUFBQyw2QkFBNkI7UUFDbEMsMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUMzQztLQUNGO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLElBQUk7Z0JBQ3hCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxLQUFLO2dCQUNqQixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDRixDQUFDO1FBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0osQ0FBQyJ9