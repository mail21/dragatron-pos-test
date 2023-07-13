const APK_PATH = "C:\\Users\\abdur\\Downloads\\app-release.apk";
const PLATFORM_VERSION = "12";
const DEVICE_NAME = "Nexus 9 API 31";

exports.config = {
  runner: "local",
  port: 4723,
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator
      platformName: "Android",
      //   browserName: "chrome",
      "appium:deviceName": DEVICE_NAME,
      "appium:platformVersion": PLATFORM_VERSION,
      "appium:app": APK_PATH,
      "appium:automationName": "UiAutomator2",
      "appium:noReset": true,
      "appium:autoLaunch": false,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "",
  //   baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "appium",
      {
        command: "appium",
        args: {
          address: "localhost",
          port: 4723,
        },
        logPath: "./",
      },
    ],
  ],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
