module.exports = {
    before: function (browser) {
    },

    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Uli Fehr')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'My Name')
        })
    },

    'API Testing - POST': function (browser) {
        var apiUrl = 'https://fakestoreapi.com/users'
        var postData = {'id':0, 'username':'Test Name', 'email': 'test@gmail.com', 'paswword': 'Admin123'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.username, 'Test Name')
            browser.assert.equal(response.body.email, 'test@gmail.com')
            browser.assert.equal(response.body.password, 'Admin123')
        })
    }
};