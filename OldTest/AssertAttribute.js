module.exports = {
    'Attribute Assertion' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("a[href='/services/']", 'href', '/services')
      .end();
    }
  };