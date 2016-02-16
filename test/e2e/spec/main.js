describe('ticker', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/test');
  });

  var dom = {
        ticker:{
          first: element(protractor.By.css('ul[ticker]')),
          last: element(protractor.By.css('#ticker-no-items'))
        },
        listItems: {
          all: element(protractor.By.css('ul[ticker] li')),
          first: element(protractor.By.css('ul[ticker] li:nth-child(1)')),
          last : element(protractor.By.css('ul[ticker] li:last-child'))
        }
      },

      //for some reason,
      //$interval and protractor/webdriver specific times are a little 'off'.
      //for example, if our $interval value is 5000
      //for testing, we have to shorten the time by 25
      //eg for 5000, use 4975
      timingInit = 5000,
      timingPre  = timingInit - 25,
      timingPost = timingInit + 200,
      timingLast = timingInit + 825;

  describe('initialisation', function(){

    it('should add active class to ticker dom element', function(){
      expect(element.all(By.css('ticker.active'))).toBeTruthy();
    });

    it('should render 2 lists', function(){
      expect(element(protractor.By.css('ul')).isPresent()).toBeTruthy();
    });

    it('should render list items', function(){
      expect(element(protractor.By.css('li')).isPresent()).toBeTruthy();
    });

    it('should render a ticker dom element', function(){
      expect(element.all(By.css('ticker'))).toBeTruthy();
    });

    it('should have 3 ticker dom elements', function(){
      //2 working, 1 declared, but no items.
      var tickers = element.all(protractor.By.css('ul[ticker]'));
      expect(tickers.count()).toEqual(3);
    });

    it('should have ng-repeat index classes', function(){
      expect(protractor.By.css('#item-0')).toBeTruthy();
      expect(protractor.By.css('#item-1')).toBeTruthy();
      expect(protractor.By.css('#item-4')).toBeTruthy();
    });

    describe('if there are no items', function(){

      it('should not add active class', function(){
        expect(dom.ticker.last.getAttribute('class')).not.toContain('active');
      });

      afterEach(function() {
        browser.manage().logs().get('browser').then(function(browserLog) {
            var i = 0,
                consoleWarnings = false;
            for(i; i<=browserLog.length-1; i++){
                if(browserLog[i].level.name === 'WARNING'){
                    consoleWarnings = true;
                }
            }
            expect(consoleWarnings).toBeTruthy();
        });
      });

    });

  });

  describe('after ' + timingPre + ' seconds', function(){

    beforeEach(function(){
      browser.driver.sleep(timingPre);
    });

    it('should add fade-out and minus-margin classes to the first element', function(){
      expect(dom.listItems.first.getAttribute('class')).toMatch('fade-out minus-margin-top');
    });

  });

  describe('after ' + timingPost + ' seconds', function(){

    beforeEach(function(){
      browser.driver.sleep(timingPost);
    });

    it('should have removed fade-out and minus-margin classes from the first element', function(){
      expect(dom.listItems.last.getAttribute('class')).not.toContain('minus-margin-top');
    });

    it('should have appended the first item', function(){
      expect(dom.listItems.last.getText()).toEqual('item 1 - Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.');
    });

    it('should have the original second item as the first dom element', function(){
      expect(dom.listItems.first.getText()).toEqual('item 2 - Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.');
    });

  });

  describe('after ' + timingLast + ' seconds', function(){

    beforeEach(function(){
      browser.driver.sleep(timingLast);
    });

    it('should have removed all fade-out classes', function(){
      expect(dom.listItems.all.getAttribute('class')).not.toContain('fade-out');
    });

  });

  describe('on mouseenter event', function(){

    it('should not append new items', function(){
      browser.actions().mouseMove(dom.ticker.first).perform();
      browser.driver.sleep(timingPost); //mimic a delayed mouseenter
      expect(dom.listItems.first.getText()).toEqual('item 1 - Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.');
    })

  })

  describe('on mouseleave event', function(){

    it('should continue to append new items', function(){
      browser.actions().mouseMove(dom.ticker.first).perform();
      browser.driver.sleep(timingPost); //mimic a delayed mouseenter
      browser.actions().mouseMove(dom.ticker.last).perform();
      browser.driver.sleep(timingPost); //mimic a delayed mouseleave
      expect(dom.listItems.first.getText()).toEqual('item 2 - Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.');
    })

  })

});