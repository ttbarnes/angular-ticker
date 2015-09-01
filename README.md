# angular-ticker

Simple angular ticker. [Demo](http://ttbarnes.github.io/angular-ticker)

###Usage

1) Define the items in your controller:

```
$scope.myTickerItems = [
   {
     title: 'item 1',
     copy: 'amazing copy here'
   },
   {
     title: 'item 2',
     copy: 'wow, this is great'
   },
   {
     title: 'item 3',
     copy: 'hello angular'
   }
]
```

2) Add the ticker to your template (item `$index` is optional):

```
<ul ticker>
  <li ng-repeat="item in myTickerItems" class="item-{{$index}}">
    {{item.title}} - {{item.copy}}
  </li>
</ul>
```


3) (optional) Customise styles to get the design you desire. See styling notes below.

###Options

`timing` (optional): accepts a string of numbers. This scrolls the items every X seconds. Regular JS milliseconds. 

```
<ul ticker timing="2500">
  <li ng-repeat="item in myTickerItems">
    {{item.title}} - {{item.copy}}
  </li>
</ul>
```


###Styling

angular-ticker styling is as minimal as possible. For simplicity, only desktop is catered for as a default.

Depending on your requirements and for responsive design in particular, you will more than likely need to adjust some styles, or simply only show the ticker for larger screen sizes. For example:

- The ticker has a default fixed height value of `195px`. Custom styles could be:

```
[ticker].activated {
  height:250px;
}
```

- Each ticker `li` has a height of `39px` (this isn't specifically defined). The height of an `li` is used to begin the scrolling effect with a minus margin of the same value. You may want to change this for different breakpoints (mobile could have 2 lines of text for example). Custom styles could be:

```
[ticker] .minus-margin-top {
  margin-top:-60px;
}

@media (min-width:768px) {
  [ticker] .minus-margin-top {
    margin-top:-30px;
  }
}
```




