/*
$_.eachChildIn("#parent-id",{ 
			
      TargetedChildren: "p",
      Fn: function(child){
			
     		 //Do something with the children      
      
      }

}); 
*/

var $_ = window.$_ || (window.$_ = {});

(function(){
	"use strict"
	
    $_.eachChildIn = function(parent, obj){

      this._parent = document.querySelector(parent);
      this.children = this._parent.childNodes;

      var i = 0, idx = 0, l = this.children.length;
      
      for( ; i < l; i++){
      	
        this.childElementTypes = 
        	typeof obj.TargetedChildren !== "undefined" ? 
          obj.TargetedChildren : 
          this.children[i].nodeName.toLowerCase();
        
        if(this.childElementTypes === this.children[i].nodeName.toLowerCase() &&
           this.children[i].nodeType !== 3){
						idx++;
            obj.Fn(idx, this.children[i]);

        }
      }

    }
  
}());
