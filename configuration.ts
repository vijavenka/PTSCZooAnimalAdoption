import {Config} from "protractor";

export let config: Config = {
    // The address of a running selenium server
    // seleniumAddress: 'http://localhost:4444/wd/hub',	// direct connect
    directConnect:true,
    
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
      showColors: true, //Use color in the command line report
      defaultTimeoutInterval: 30000
    }   
  };