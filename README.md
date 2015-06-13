# angular-ticker

Simple ticker angular directive (work in progress - not ready for production)

<img src="http://g.recordit.co/yTwkJIOHXx.gif" />


###Usage

In your controller:

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

In your template:

`<ticker tickeritems="myTickerItems" timing="5000"></ticker>`


###Options

`tickeritems` (required): expects array of objects.

`timing`(optional): accepts string of numbers. Scroll the items every X seconds. Regular JS milliseconds. 
