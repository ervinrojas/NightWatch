var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
  
    return this.waitForElementVisible('@contactusMenu', 5000)
      .click('@chatWithUs')
      .waitForElementVisible('@body', 5000);
      
  }
};

var clickinMultiplePages = {
  contactNightWatch: function() {
    this.api.pause(1000);

    return this.waitForElementVisible('@headerLabel', 5000)
      .click('@buttonGetStarted')
      .assert.containsText('@headerLabel', 'Install Nightwatch')
      .assert.containsText('@testingTypesLabel', 'Testing Types')
      .assert.containsText('@testRunnerLabel', 'Test runner & Language')
      .waitForElementVisible('@UnlockTalentButton', 5000);
  }
};

module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [validateContactUs, clickinMultiplePages],
    elements: {
      buttonGetStarted: {
        selector: ".hero__action-button--get-started"
      },
      headerLabel: {
        selector: ".page-header"
      },
      testingTypesLabel: {
        selector: "#postdoc-testing-types"
      },
      testRunnerLabel: {
        selector: "#postdoc-test-runner--language"
      },
      chatWithUs: {
        selector: "/html/body/footer/div/div[1]/nav/ul/li[2]/ul/li[3]/a"
      },
      body: {
        selector: "//*[@id='app-mount']"
      }
    }
  };