"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // The address of a running selenium server
    // seleniumAddress: 'http://localhost:4444/wd/hub',	// direct connect
    directConnect: true,
    // capabilities to be passed to webdriver instance
    capabilities: {
        browserName: 'firefox',
        'goog:chromeOptions': {
            w3c: false
        },
    },
    // spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js)
    // they may include glob pattern
    specs: ['nonpom.js'],
    //  option to be passed to Jasmine node
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVc7SUFDeEIsMkNBQTJDO0lBQzNDLHFFQUFxRTtJQUNyRSxhQUFhLEVBQUMsSUFBSTtJQUVsQixrREFBa0Q7SUFDbEQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFNBQVM7UUFDdEIsb0JBQW9CLEVBQUU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7U0FDVjtLQUNIO0lBRUQsdUVBQXVFO0lBQ3ZFLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsS0FBSyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBRXBCLHVDQUF1QztJQUN2QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxLQUFLO0tBQzlCO0NBQ0YsQ0FBQyJ9