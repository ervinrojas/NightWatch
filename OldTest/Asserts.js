module.exports = {
    "Assertion exercise" : function(browser){
        browser
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .waitForElementVisible('a[href="/services/"]', 5000)
        .verify.visible('a[href="/services/"]')
        .url('https://www.google.com')
        //.verify.visible('.non_existing')
        .url('https://www.amazon.com')
        .end();        
    }
}