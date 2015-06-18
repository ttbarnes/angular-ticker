# angular-ticker

Simple ticker angular directive (work in progress - not ready for production)

<img src="http://g.recordit.co/QlZsRw7CyE.gif" />


###Usage

1) Define the items in your controller:

```
$scope.myTickerItems = [
   {
     'title': 'item 1'
   },
   {
     'title': 'item 2'
   },
   {
     'title': 'item 3'
   }
]
```

2) Add the ticker to your template:

`<ticker tickeritems="myTickerItems"></ticker>`

3) (optional) Customise styles to get the design you desire. See styling notes below.

###Options

`tickeritems` (required): expects array of objects.

`timing`(optional): accepts string of numbers. Scroll the items every X seconds. Regular JS milliseconds. 

`<ticker tickeritems="myTickerItems" timing="5000"></ticker>`

###Styling

angular-ticker styling is as minimal as possible. 

For responsive design in particular, you will more than likely need to adjust some styling; for example:

- The ticker has a default fixed height value of `195px`. Custom styles could be:

```
ticker {
  height:250px;
}
```

- Each ticker `li` has a height of `39px` (this isn't specifically defined). The height of an `li` is used to begin the scrolling effect with a minus margin of the same value. You may want to change this for different breakpoints (mobile could have 2 lines of text for example). For simplicity, only desktop is catered for as a default. Custom styles could be:

```
ticker .minus-margin-top {
  margin-top:-60px;
}

@media (min-width:768px) {
  ticker .minus-margin-top {
    margin-top:-30px;
  }
}
```




