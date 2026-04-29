module.exports ={
    "Test NightWatch Page" : function(browser){
        browser
        .windowMaximize()
        .url("https://nightwatchjs.org/")
        .waitForElementVisible("body")
        .assert.cssProperty( "body", "background-color", "rgba(0, 0, 0, 0)")
        .assert.titleContains('Nightwatch V3 | Node.js powered End-to-End testing framework')
        .click("body > main > section.hero > div.hero__action > a")    
        .waitForElementVisible("#sidebar-filter", 2000)
        .assert.attributeContains("#sidebar-filter", 'autocomplete', 'off')
        .setValue("#sidebar-filter", "Assertions")
        .verify.containsText("#header > nav > ul:nth-child(2) > li:nth-child(2) > a", "API")
        .click("body > footer > div > div.footer__wrapper-inner > nav > ul > li:nth-child(4) > ul > li:nth-child(2) > a")
        .assert.containsText("body > div.gh-viewport > footer > div > section > p", "Thoughts, stories and ideas.")

    }
}