var timing = {
  init: 5000,
  protractorDelay: 200,
  effect: 625,
  effectHalf: 625 / 2,
  delay: 5000 + 200
};


describe('ticker', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000');
  });

  describe('initialisation', function(){

    it('should render 2 lists', function(){ 
      expect(element(protractor.By.css('ul')).isPresent()).toBeTruthy();
    });

    it('should render list items', function(){ 
      expect(element(protractor.By.css('li')).isPresent()).toBeTruthy();
    });

    it('should render a ticker dom element', function(){
      expect(element.all(By.css('ticker'))).toBeTruthy();
    });

    it('should have 2 ticker dom elements', function(){
      var tickers = element.all(protractor.By.css('ul[ticker]'));
      expect(tickers.count()).toEqual(2);
    });

    it('should have ng-repeat index classes', function(){
      expect(protractor.By.css('#item-0')).toBeTruthy();
      expect(protractor.By.css('#item-1')).toBeTruthy();
      expect(protractor.By.css('#item-4')).toBeTruthy();
    });

  });

  describe('interaction', function(){
    var firstChild = element(protractor.By.css('ul[ticker] li:nth-child(1)')),
        lastChild = element(protractor.By.css('ul[ticker] li:last-child'));

    describe('after ' + timing.init + ' seconds', function(){

      it('should add classes to X element', function(){
        //browser.driver.sleep(timing.init);
        //expect(firstChild.getAttribute('class')).toMatch('fade-out minus-margin-top');
      });

    });

    describe('after ' + timing.delay + ' seconds', function(){

      it('should append the first item', function(){
        browser.driver.sleep(timing.delay);
        expect(lastChild.getText()).toEqual('item 1 - Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.');
      });

      it('should have the original second item as the first dom element', function(){
        browser.driver.sleep(timing.delay);
        expect(firstChild.getText()).toEqual('item 2 - Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.');
      });

    });

  });

});