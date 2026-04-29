module.exports = {
    'Script 2: Amazon Shopping Flow': function (browser) {
      var amazon = browser.page.amazonPage();

      amazon
      .navigate()
      .validateAmazon();
      
      browser.end();
    }
};
