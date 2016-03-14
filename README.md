# Iterate Through Each Child in a Parent Element (JavaScript)

JavaScript: A very simple yet a handy tool, which helps you to iterate through a parent's children,
then call a function for each child element.

Version 0.0.1

Examples
-------

###Simple
```js
$.eachChildIn("#parent-id", { 
     Fn: function (idx, child) {
     	    child.setAttribute("data-id", idx);
     }    
}); 
```
###Extended
```js
$.eachChildIn("#parent-id", { 
			
      TargetedChildren: "p",
      //more to come...
      Fn: function (idx, child) {
			
     	child.onmouseover = function(){
     	    this.setAttribute("data-id", idx);
     	}    
     
      }
}); 
```
