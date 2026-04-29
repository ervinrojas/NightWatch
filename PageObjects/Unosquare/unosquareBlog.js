module.exports = {
  url: 'https://www.unosquare.com',
  elements: {
    cookiesConfirmation:{
      selector: "//div[@id='hs-eu-cookie-confirmation-inner']",
      locateStrategy: 'xpath'
    },
    acceptCookies:{
      selector: "//button[@id='hs-eu-confirmation-button']",
    },
    resources:{
      selector: "//main[@id='content']/div/div/div[1]/div/div[4]/div/nav[1]/ul/li[6]/a",
      locateStrategy: 'xpath'
    },
    blogMenu: {
      selector: "//main[@id='content']/div/div/div[1]/div/div[4]/div/nav[1]/ul/li[6]/ul/li[1]/a", 
      locateStrategy: 'xpath'
    },
    blogHeader: {
      selector: "//div[@data-elementor-type='archive']/div[1]/div/div[1]/div[3]/div/p/b",
      locateStrategy: 'xpath'
    },
    searchBar: {
      selector: "input.elementor-search-form__input"
    },
    recentPosts: {
      selector: "//div[@data-elementor-type='archive']/div[2]/div/div[1]/div/h2",
      locateStrategy: 'xpath'
    },
    popularPosts: {
      selector: "//h2[contains(., 'Popular Posts')] | //h3[contains(., 'Popular Posts')]",
      locateStrategy: 'xpath'
    },
    aboutMenu: {
      selector: "//header/div[1]/div/div[2]/div/nav[1]/ul/li[7]/a",
      locateStrategy: 'xpath'
    },
    nameMario: {
      selector: "//*[contains(text(), 'Mario Di Vece')]",
      locateStrategy: 'xpath'
    },
    nameGiancarlo: {
      selector: "//*[contains(text(), 'Giancarlo Di Vece')]",
      locateStrategy: 'xpath'
    },
    nameEduardo: {
      selector: "//*[contains(text(), 'Eduardo Arias')]",
      locateStrategy: 'xpath'
    },
    nameIgnacio: {
      selector: "//*[contains(text(), 'Ignacio Miranda')]",
      locateStrategy: 'xpath'
    },
    nameDiego: {
      selector: "//*[contains(text(), 'Diego Huerta')]",
      locateStrategy: 'xpath'
    }
  }
};
