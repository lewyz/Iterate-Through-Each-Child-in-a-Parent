# Iterate-Through-Each-Child-in-a-Parent

A very simple yet a handy tool, which helps you to iterate through a parent's children,
then call a function for each child element.

Version 0.1

Demo
-------

$_.eachChildIn("#parent-id",{ 
			
      TargetedChildren: "p",
      Fn: function(idx, child){
			
     	child.onmouseover = function(){
     	    this.setAttribute("data-id", idx);
     	}    
      
      }

}); 
