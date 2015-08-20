describe('page: home', function() {

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

    it('should a ticker dom element', function(){
      expect(element.all(By.css('ticker'))).toBeTruthy();
    });

    it('should have 2  ticker dom elements', function(){
      var tickers = element.all(protractor.By.css('ul[ticker]'));
      expect(tickers.count()).toEqual(2);
    });

  });

});