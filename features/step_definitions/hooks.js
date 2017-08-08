var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After}) {
  Before(function () {
    this.driver.get('https://www.westpac.co.nz/')
  });

  After(function() {
    return this.driver.quit();
  });
});
