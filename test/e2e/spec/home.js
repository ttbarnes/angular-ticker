describe('page: home', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000');
  });

  describe('initialisation', function(){

    it('should render 2 tickers', function(){ 
      expect(element(protractor.By.css('ul')).isPresent()).toBe(true);
    });

    it('should render ticker list items', function(){ 

    });

  });

});