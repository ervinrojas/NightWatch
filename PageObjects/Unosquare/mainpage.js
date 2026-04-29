  function getData() {
    return require('../../dataExternal/unosquareForm'); // Using the correct path is important
    };


var validateContactUs = {
  contactUnosquare: function() {
    this.api.pause(1000);
    const form = getData(); // this is the important part
    return this.waitForElementVisible('@contactusMenu', 5000)
      .click('@contactusMenu')
      // .setValue('@inputFirstName', form.firstName)
      .setValue('@inputLastName', form.LastName)
      .setValue('@inputEmail', form.email)
      .setValue('@inputMessage', form.message)
      .waitForElementVisible('@submitButton', 5000)
      .perform((done) => {
        this.api.execute(function() {
          const btn = document.querySelector("input[type='submit']");
          if (btn) btn.scrollIntoView({ block: 'center', inline: 'center' });
        }, [], function() {
          done();
        });
      })
      .pause(300)
      .click('@submitButton') // <-- fixed chain
      .waitForElementVisible('@nameWarningMsg', 5000);
  }
};

var clickinMultiplePages = {
  contactUnosquare: function() {
    this.api.pause(1000);

    return this.waitForElementVisible('@StartButton', 5000)
      .click('@StartButton')
      
      .waitForElementVisible('@UnlockTalentButton', 5000);
  }
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, clickinMultiplePages],
    elements: {
      contactusMenu: {
        selector: "a[href='/contact-us']"
      },
      inputFirstName: {
        selector: "input[name='firstname']"
      },
      inputLastName: {
        selector: "input[name='lastname']"
      },
      inputEmail: {
        selector: "input[name='email']"
      },
      inputMessage: {
        selector: "textarea[name='message']"
      },
      submitButton: {
        selector: "input[type='submit']"
      },
      errorLabelFirstname: {
        selector: "form[method='POST']>fieldset> div.hs_firstname.hs-firstname.hs-fieldtype-text.field.hs-form-field > ul > li > label"
      },
      errorLabelLastname: {
        selector: "form[method='POST']>fieldset> div.hs_lastname.hs-lastname.hs-fieldtype-text.field.hs-form-field > ul > li > label"
      },
      errorLabelEmail: {
        selector: "form[method='POST']>fieldset> div.hs_email.hs-email.hs-fieldtype-text.field.hs-form-field > ul > li > label"
      },
      errorLabelMessage: {
        selector: "form[method='POST']>fieldset> div.hs_message.hs-message.hs-fieldtype-textarea.field.hs-form-field > ul > li > label"
      },
      nameWarningMsg: {
        selector: "//label[contains(., 'Please complete this required field.')]",
        locateStrategy: 'xpath'
      },
      StartButton: {
        selector: "a[href='#contactUsForm']"
      },
      UnlockTalentButton: {
        selector: "input[type='submit']"
      }
    }
  };