# Iterate-Through-Each-Child-in-a-Parent

A very simple yet a handy tool, which helps you to iterate through a parent's children,
then call a function for each child element.

Version 0.1

Demo

$_.eachChildIn("#my-id",{
    Fn: function(idx, child){
     
      child.onmouseover = function(){
      	this.style.cssText = "color: red; text-decoration: underline";
      }
      child.onmouseout = function(){
      	this.style.cssText = "color: black; text-decoration: none";
      }
   
    }
});
