function getData() {
  return require('../../dataExternal/unosquareForm'); // Using the correct path is important
};

var validateAmazon = {
  validateAmazon: function () {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    let initialPrice = '';

    // Optional redirect choice
    this.api.elements('xpath', "//*[@id='redir-stay-at-www']/span[2]", (result) => {
      if (result.value && result.value.length > 0) {
        this.click('@chooseWebside');
      }
    });

    // Change location to Canada
    this.waitForElementVisible('@locationButton', 5000)
      .click('@locationButton')
      .waitForElementVisible('@countryDropdown', 5000)
      .click('@countryDropdown')
      .waitForElementVisible('@canadaOption', 5000)
      .click('@canadaOption')
      .click('@doneButton')
      .api.pause(2000); // Wait for page to refresh/update

      this.waitForElementVisible('@searchBox', 10000)
        .click('@searchBox')
        .setValue('@searchBox', form.search)
        .click('@searchButton')
        .waitForElementVisible('@firstResult', 10000)
        .getText('@firstResultPrice', function (result) {
          initialPrice = result.value.replace(/[^0-9]/g, '');
          console.log('Stored Price (digits):', initialPrice);
        })
        .click('@firstResult')
        .waitForElementVisible('@detailsPrice', 10000)
        .getText('@detailsPrice', function (result) {
          const detailsPrice = result.value.replace(/[^0-9]/g, '');
          this.assert.equal(detailsPrice, initialPrice, 'Price on details page matches search result price');
        })
        .click('@addToCartButton')
        .waitForElementVisible('@cartButton', 10000)
        .click('@cartButton')
        .waitForElementVisible('@cartItemPrice', 10000)
        .getText('@cartItemPrice', function (result) {
          const cartPrice = result.value.replace(/[^0-9]/g, '');
          this.assert.equal(cartPrice, initialPrice, 'Price in cart matches initial price');
        })
        .click('@deleteButton')
        .api.pause(2000);
    }
  };

  module.exports = {
    url: 'https://www.amazon.com',
    commands: [validateAmazon],
    elements: {
    chooseWebside: {
      selector: "//*[@id='redir-stay-at-www']/span[2]",
      locateStrategy: "xpath"
    },
    locationButton: {
      selector: "#nav-global-location-popover-link"
    },
    countryDropdown: {
      selector: "#GLUXCountryListDropdown"
    },
    canadaOption: {
      selector: "//a[@class='a-dropdown-link' and text()='Canada']",
      locateStrategy: "xpath"
    },
    doneButton: {
      selector: "button[name='glowDoneButton']"
    },
    searchBox: {
      selector: "input#twotabsearchtextbox"
    },
    searchButton: {
      selector: "input#nav-search-submit-button"
    },
    firstResult: {
      selector: "//span[@data-component-type='s-search-results']/div[1]/div[2]/div/div/span/div/div/div/div[1]",
      locateStrategy: 'xpath'
    },
    firstResultPrice: {
      selector: "(//div[@data-component-type='s-search-result'])[1]//span[@class='a-price']",
      locateStrategy: 'xpath'
    },
    detailsPrice: {
      selector: "(//html/body/div/div/div[2]/div[5]/div/div[7]/div/div/div/div/div/form/div/div/div/div/div[3]/div/div/div/div/div/span/span[2]/span[2])",
      locateStrategy: 'xpath'
    },
    addToCartButton: {
      selector: "input#add-to-cart-button"
    },
    cartButton: {
      selector: "a#nav-cart"
    },
    cartItemPrice: {
      selector: ".sc-product-price"
    },
    deleteButton: {
      selector: "input[value='Delete']"
    }
  }
};
