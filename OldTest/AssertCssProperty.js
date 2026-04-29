module.exports = {
    'Assert CSS Property' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("a[href='/services/']", 'href', '/services')
      .assert.attributeEquals("link[rel='icon']", "rel", "icon")
      .waitForElementVisible("a[href='/services/']")
      .assert.containsText("a[href='/services/']", "services")
      .assert.cssProperty( "body", "background-color", "rgba(255, 255, 255, 1)")
      .assert.not.cssProperty("a[href='/services/']",  "font-size",  "12px")
      browser.end();
    }
  }