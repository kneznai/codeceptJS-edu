const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://try.vikunja.io',
      show: true,
      browser: 'chromium',
      restart: true,
    },
    REST: {
      endpoint: "https://my-json-server.typicode.com/typicode/demo",
      defaultHeaders: {
          'Content-Type': 'application/json',
      },
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
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