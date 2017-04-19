

//函数加载
function addLoadEvent(func){
	var oldonload =window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//跨浏览器添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}
//跨浏览器移除事件
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false);
	}else if(obj.detachEvent){
		obj.detachEvent('on'+type,fn);
	}
}


//跨浏览器获取当前目标对象
function getTarget(evt){
	if(evt.target){
		//W3C
		return evt.target;
	}else if(window.event.srcElement){
		//IE
		return window.event.srcElement;
	}
}








