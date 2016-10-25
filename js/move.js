var move = function(obj,json,fn){
	clearInterval(obj.timer)	
	obj.timer = setInterval(function(){	
		var flag = true
		for(var attr in json){
			end = json[attr]	
			var star
			if(attr == "opacity"){
				start = getStyle(obj,attr)*100
			}else{
				start = parseInt(getStyle(obj,attr))
			}			
			var speed = (end - start)/2
			speed =  speed>0? Math.ceil(speed) : Math.floor(speed)		
			if(attr == "opacity"){
				obj.style[attr] =(start + speed)/100
				obj.style.filter= "alpha(opacity:("+start + speed+")"
			}else{
				obj.style[attr] =start + speed + "px"	
			}
			if(start == end){				
			
			}else{
				flag = false	
			}
		}
		if(flag){
			clearInterval(obj.timer)
			if(fn){
				fn()
			}
		}
	},100)
}
var getStyle = function(obj,attr){
	if(obj.currentSyle){
		return obj.currentStyle[sttr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
