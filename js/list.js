// list 左菜单
var uli = listl.getElementsByTagName("ul")[1].children
for(var i=1; i<uli.length; i++){
	uli[i].flag = false
	uli[i].onclick=function(event){
		var e = event || window.event
		if(e.target.tagName=="A"){
			if(this.flag){
				this.children[1].style.display="none"
				this.style.backgroundImage="url(../img/list/you1.jpg)"
				this.style.backgroundPosition="0 8px"
				this.flag=false
			}else{
				this.children[1].style.display="block"
				this.style.backgroundImage="url(../img/list/xia2.jpg)"
				this.style.backgroundPosition="0 10px"
				this.flag=true
			}
		}
	}
}
// 分类选择
var listr = document.getElementById("listr")
var sex = listr.children[0].children[0].children[1].children[1].children
for(var i=0; i<2; i++){
	sex[i].onclick=function(){
		for(var i=0; i<2; i++){
			sex[i].className = ""
		}
		this.className="selected"
		addlei("sex",this.innerHTML)
	}
}
var age = listr.children[0].children[0].children[2].children[1].children
for(var i=0; i<5; i++){
	age[i].onclick=function(){
		for(var i=0; i<5; i++){
			age[i].className = ""
		}
		this.className="selected"
		addlei("age",this.innerHTML)
	}
}
var pinpai = listr.children[0].children[0].children[3].children[1].children
for(var i=0; i<10; i++){
	pinpai[i].onclick=function(){
		for(var i=0; i<10; i++){
			pinpai[i].className = ""
		}
		this.className="selected"
		addlei("pinpai",this.innerHTML)
	}
}
var price = listr.children[0].children[0].children[4].children[1].children
for(var i=0; i<4; i++){
	price[i].onclick=function(){
		for(var i=0; i<4; i++){
			price[i].className = ""
		}
		this.className="selected"
		addlei("price",this.innerHTML)
	}
}
var color = listr.children[0].children[0].children[5].children[1].children
for(var i=0; i<11; i++){
	color[i].onclick=function(){
		for(var i=0; i<11; i++){
			color[i].className = ""
		}
		this.className="selected"
		addlei("color",this.innerHTML)
	}
}
var leibie = document.getElementById("leibie")
function addlei(name,cont){
	var arr = leibie.children
	for(var i=0; i<arr.length; i++){
		if(arr[i].id == name){
			arr[i].style.display="block"
			arr[i].children[0].innerHTML=cont 
			break;
		}
	}
	show()
}
function qxlei(index){
	leibie.children[index].children[0].innerHTML=""
	leibie.children[index].style.display= "none"
	show()
}

//显示商品    每页显示个数
var listul = list.getElementsByClassName("listul")[0]
var arrli = listul.children
var url = "../json/img.json"
var timer
var shownum = document.getElementById("shownum")
var xxkleft = document.getElementById("xxkleft")
var xxkright = document.getElementById("xxkright")
var xxknum = document.getElementById("xxknum")
var allnum = document.getElementById("allnum")
shownum.onchange=function(){
	var num = shownum.value
	for(var i=0; i<arrli.length; i++){
		arrli[i].style.display = "block"
		arrli[i].children[0].src=""
		arrli[i].children[1].innerHTML=""
		arrli[i].children[2].innerHTML=""
		arrli[i].children[3].innerHTML="" 
		arrli[i].children[0].onmouseover="null"
		if(i>=num){
			arrli[i].style.display = "none"	
		}
	}
	show()
	allpage()
}
arrli[shownum.value-1].children[0].onclick=function(){
	xxkright.onclick()
}
show()
allpage()
function allpage(){
	allnum.innerHTML = "/"+parseInt(40/(shownum.value-1))
}
xxkleft.onclick=function(){
	if(xxknum.innerHTML <=1){
		return false
	}
	xxknum.innerHTML = parseInt(xxknum.innerHTML)-1
	show()
}
xxkright.onclick=function(){
	if(xxknum.innerHTML >=parseInt(allnum.innerHTML.split("/")[1])){
		return false
	}
	xxknum.innerHTML = parseInt(xxknum.innerHTML)+1
	show()	
}
function show(){	
	if(shownum.value%4==0){
		listul.style.height = (shownum.value/4 )*390+"px"
	}else{
		listul.style.height = (shownum.value/4 +1)*350+"px"
	}
	var botmnum = document.getElementById("botmnum")	
	oAjax(url,function(obj){		
		botmnum.children[0].children[0].innerHTML=(shownum.value-1)*(xxknum.innerHTML-1)+1
		botmnum.children[0].children[1].innerHTML=(shownum.value-1)*xxknum.innerHTML
		var arrfir = obj.list
		var leibiearr = leibie.children
		var leibiearr1 = []
		var arr=[]
		for(var i=0; i<leibiearr.length; i++){
			if(leibiearr[i].children[0].innerHTML!=""){
				leibiearr1.push(leibiearr[i].children[0].innerHTML)
			}			
		}
		if(leibiearr1.length){			
			for(var i=0; i<arrfir.length; i++){				
				var flag = true
				for(var k=0; k<leibiearr1.length; k++){					
					var reg = eval("/"+leibiearr1[k]+"/")
					if(!(reg.test(arrfir[i].type))){
						flag = false
					}
				}
				if(flag){
					arr.push(arrfir[i])
				}
			}
		}else{
			arr = arrfir
		}
		if(arr.length<1){
			return alert("没有相关商品！")
		}
		var showlinum=shownum.value		
		if(arr.length<shownum.value){
			showlinum = arr.length
		}
		for(var j=0; j<arrli.length; j++){
			arrli[j].style.display = "block"
			arrli[j].children[0].src=""
			arrli[j].children[1].innerHTML=""
			arrli[j].children[2].innerHTML=""
			arrli[j].children[3].innerHTML="" 
			arrli[j].children[0].onmouseover="null"
			if(j>=showlinum){
				arrli[j].style.display = "none"	
			}
		}
		
		arrli[showlinum-1].children[0].src="../img/list/"+arrfir[40].img		
		for(var i=0; i<showlinum-1; i++){
			arrli[i].index = i
			arrli[i].timer = ""
			arrli[i].children[0].src="../img/list/"+arr[i+(xxknum.innerHTML-1)*(showlinum-1)].img
			arrli[i].children[0].style.width="235px"
			arrli[i].children[0].style.height="314px"
			arrli[i].children[1].innerHTML=arr[i+(xxknum.innerHTML-1)*(showlinum-1)].name
			arrli[i].children[2].innerHTML=arr[i+(xxknum.innerHTML-1)*(showlinum-1)].pinpai
			arrli[i].children[3].innerHTML=arr[i+(xxknum.innerHTML-1)*(showlinum-1)].price 	
			arrli[i].children[0].onmouseover=function(){
				this.parentNode.children[4].style.display="block"			
				this.parentNode.children[4].children[0].src="../img/list/"+arr[this.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].img
				this.parentNode.children[4].children[0].style.width="235px"
				this.parentNode.children[4].children[0].style.height="314px"
				this.parentNode.children[4].children[1].src="../img/list/"+arr[this.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].img
				this.parentNode.children[4].children[2].innerHTML=arr[this.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].name
				this.parentNode.children[4].children[3].innerHTML=arr[this.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].pinpai
				this.parentNode.children[4].children[4].innerHTML=arr[this.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].price
				move(this.parentNode.children[4].children[1],{"width":50})
			}
			arrli[i].children[4].children[0].onclick=function(){
				window.location.href="product.html?id="+arr[this.parentNode.parentNode.index+(xxknum.innerHTML-1)*(showlinum-1)].id
			}
	
			arrli[i].children[4].onmouseout=function(){
				var index = this.parentNode.index
				arrli[index].timer=setTimeout(function(){				
					arrli[index].children[4].style.display="none"
					arrli[index].children[4].children[1].style.width="0"
				},100)
			}
			for(var j=0; j<5; j++){
				arrli[i].children[4].children[j].onmouseout=function(event){
					var e = event || window.event
					e.stopPropagation()
				}
				arrli[i].children[4].children[j].onmouseover=function(){
					clearTimeout(this.parentNode.parentNode.timer)
				}
			}
		}
		var boxnum = document.getElementById("boxnum")
		var boxnumarr=boxnum.children
		for(var i=0; i<boxnumarr.length-1; i++){
			boxnumarr[i].style.display = "none"			
			if((allnum.innerHTML).split("/")[1]>5){
				boxnumarr[i].style.display = "block"
				for(var j=0; j<5;j++){
					boxnumarr[j].style.display = "block"
					boxnumarr[j].className="l"					
				}
				if(xxknum.innerHTML-1<5){
					boxnumarr[xxknum.innerHTML-1].className = "l selected"
				}				
			}else{
				for(var j=0; j<(allnum.innerHTML).split("/")[1];j++){
					boxnumarr[j].style.display = "block"
					boxnumarr[j].className="l"					
				}
				boxnumarr[xxknum.innerHTML-1].className = "l selected"
			}
			boxnumarr[i].onclick=function(){
				xxknum.innerHTML=this.innerHTML
				show()
			}			
		}
		boxnumarr[6].onclick=function(){
			xxkright.onclick()
		}
		
	})
}























