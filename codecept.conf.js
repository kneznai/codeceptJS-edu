const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://airportgap.dev-tester.com',
      show: true,
      browser: 'chromium',
      restart: true,
    },
    "AssertWrapper" : {
      "require": "codeceptjs-assert"
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    tokenPage: './pages/tokenPage.js',
    loginPage: './pages/loginPage.js',
    changePasswordPage: './pages/changePasswordPage.js',
    passwordResetPage: './pages/passwordReset.js',
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
        reportDir: "output",
    }
  },
  name: 'codeceptjs-edu',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}