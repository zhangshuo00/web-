/*
* @Author: lenovo
* @Date:   2018-12-15 19:38:04
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-05 19:35:33
*/
//
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}
//
function animate(obj,json,callback){
	//清定时器
	clearInterval(obj.timer);
	//设置定时器
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now =0;
			if (attr == 'opacity') {
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr]-now)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur/100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	},30)
}
