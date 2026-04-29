const searchData = require('../dataExternal/searchData.json');

module.exports = {
  'Script 1: Unosquare Blog and About Page': function (browser) {
    const unosquare = browser.page.unosquareBlog();

    unosquare.navigate()
      .waitForElementVisible('body', 10000)
        .api.element('css selector', '#hs-eu-confirmation-button', function(result) {
          if (result.status !== -1) {
        unosquare.click('@acceptCookies');
        }
    });
    unosquare
      .click('@resources')
      .click('@blogMenu')
      .waitForElementVisible('body', 5000);

    // Validate header and URL
    unosquare.assert.urlContains('https://www.unosquare.com/blog/')
      .waitForElementVisible('@blogHeader', 10000);

    // Validate Recent Post and Popular Posts visibility
    unosquare.expect.element('@recentPosts').to.be.visible;

    // Search for terms from JSON
    //searchData.searchTerms.forEach(term => {
      //unosquare.waitForElementVisible('@searchBar', 5000)
        //.clearValue('@searchBar')
        //.setValue('@searchBar', [term, browser.Keys.ENTER])
        //.pause(2000); // Wait for results
    //});

    // Go to About page
    unosquare.click('@aboutMenu')
      .waitForElementVisible('body', 5000);

    // Verify names
    unosquare.assert.visible('@nameMario')
      .assert.visible('@nameGiancarlo')
      .assert.visible('@nameEduardo')
      .assert.visible('@nameDiego');

    browser.end();
  }
};
