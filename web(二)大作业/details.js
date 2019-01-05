/*
* @Author: lenovo
* @Date:   2018-12-18 16:52:03
* @Last Modified by:   lenovo
* @Last Modified time: 2019-01-05 13:04:04
*/
function add(){
	var addd= document.getElementById('addd');
	var text = document.getElementById('text');
	var a = text.value;
	if(text.value<5){
		addd.style.cursor = 'pointer';
		a++;
		text.value = a;
	}else{
		addd.style.cursor = 'not-allowed';
	}
}
function sub(){
	var subb = document.getElementById('subb');
	var text = document.getElementById('text');
	var b = text.value;
	if(text.value>0){
		subb.style.cursor = 'pointer';
		b--;
		text.value = b;
	}else{
		subb.style.cursor = 'not-allowed';
	}
}
function showDiv(){
	var bg = document.getElementById('bg');
	var show = document.getElementById('show');
	bg.style.display = 'block';
	show.style.display = 'block';
}
function hidDiv(){
	var bg = document.getElementById('bg');
	var show = document.getElementById('show');
	bg.style.display = 'none';
	show.style.display = 'none';
}