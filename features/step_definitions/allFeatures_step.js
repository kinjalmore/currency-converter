var {defineSupportCode} = require('cucumber');
var until = require('selenium-webdriver').until;
var {expect} = require('chai');

defineSupportCode(function({setDefaultTimeout, Given, When, Then}) {
  setDefaultTimeout(30 * 1000);

  Given('user is on the Westpac currency converter page', function () {
    //Navigating to currency converter page from westpac homepage
    this.driver.executeScript("document.getElementById('ubermenu-section-link-fx-travel-and-migrant-ps').parentElement.className += ' active';")
    this.driver.findElement({id: 'ubermenu-item-cta-currency-converter-ps'}).click();
    this.driver.wait(until.elementLocated({css: '.pre-iframe-content'}));
    // All clickable element is within an iframe `westpac-iframe`
    return this.driver.switchTo().frame('westpac-iframe');
  });


  When('user enter {stringInDoubleQuotes} in amount field', function (stringInDoubleQuotes) {
    // Write code here that turns the phrase above into concrete actions
    return this.driver.findElement({id: 'Amount'}).sendKeys(stringInDoubleQuotes);
  });

  When('user click on Converter button', function () {
    return this.driver.findElement({id: 'convert'}).click();
  });


  When('user select {from_currency} from Convert from field', function (fromCurrency) {
    return this.selectByText('ConvertFrom', fromCurrency);
  });

  When('enters {stringInDoubleQuotes} in the amount field', function (stringInDoubleQuotes) {
    return this.driver.findElement({id: 'Amount'}).sendKeys(stringInDoubleQuotes);
  });

  When('selects {to_currency} from Convert to field', function (toCurrency) {
    return this.selectByText('ConvertTo', toCurrency)
  });

  Then('user should see validation message above Convert from field {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
    // Velidation to make sure expect and actual message match
    return this.driver.findElement({css:'div#errordiv ul li'}).getText()
      .then(function(text) {
        return expect(text).to.contain(stringInDoubleQuotes);
    });
  });

  Then('I should see converted currency rate with {from_currency} and {to_currency} displayed', function (fromCurrency, toCurrency) {
    return this.driver.findElement({css:'#resultsdiv>em' }).getText()
      .then(function(textValue) {
        return expect(textValue).to.contain(fromCurrency, toCurrency);
      });
  });

});
