  module.exports = {
    'test pages validation' : function(browser) {
      var nightwatch = browser.page.landingpage();

      nightwatch
      .navigate()
      .contactNightWatch()
      
      browser.end();
    }
}
