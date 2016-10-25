//ban   banner部分
var ban = document.getElementById("banner")
var banArrUl = ban.children[0].children[0]
var banArrOli = ban.children[0].children[1].children
var right = ban.children[1]
var left = ban.children[2]
var banTimer
var banI = 0 // 计数变量
banstart(banI)
function banstart(banI){
	banTimer = setInterval(function(){
		for(var i =0; i<banArrOli.length; i++){
			banArrOli[i].children[0].className=""
		}
		if(banI == 7){
			banArrOli[0].children[0].className="selected"
		}else{
			banArrOli[banI].children[0].className="selected"
		}
		move(banArrUl,{"top":-banI*450},function(){
			if(banArrUl.style.top == "-3150px"){
				clearInterval(banTimer)
				banArrUl.style.top = "0px"
				banI=1
				banstart(banI)
			}
		})
		
		banI++
	},1500)
}
for(var i=0; i<banArrOli.length; i++){
	banArrOli[i].index=i
	banArrOli[i].onmouseover=function(){
		clearInterval(banTimer)
		for(var i=0; i<banArrOli.length; i++){
			banArrOli[i].children[0].className=""
		}
		banArrOli[this.index].children[0].className="selected"
		move(banArrUl,{"top":-this.index*450})
	}
	banArrOli[i].onmouseout=function(){
		banI=this.index
		banstart(banI)	
	}
}
right.onclick=function(){
	var j=0
	for(var i=0; i<banArrOli.length; i++){		
		if(banArrOli[i].children[0].className== "selected"){
			break;
		}
		j++
	}
	clearInterval(banTimer)
	for(var i=0; i<banArrOli.length; i++){
		banArrOli[i].children[0].className=""
	}
	if(j==6){
		move(banArrUl,{"top":-3150},function(){
			if(banArrUl.style.top == "-3150px"){
				banArrUl.style.top = "0px"
			}
		})	
		banArrOli[0].children[0].className="selected"
		banI=0
		banstart(0)
	}else{
		move(banArrUl,{"top":-(j+1)*450})
		banArrOli[j+1].children[0].className="selected"
		banI=j+1
		banstart(j+1)
	}
}
left.onclick=function(){
	var j=0
	for(var i=0; i<banArrOli.length; i++){		
		if(banArrOli[i].children[0].className== "selected"){
			break;
		}
		j++
	}
	clearInterval(banTimer)
	for(var i=0; i<banArrOli.length; i++){
		banArrOli[i].children[0].className=""
	}
	if(j==0){
		move(banArrUl,{"top":-2700},function(){
			if(banArrUl.style.top == "-3150px"){
				banArrUl.style.top = "0px"
			}
		})	
		banArrOli[6].children[0].className="selected"
		banI=6
		banstart(6)
	}else{
		move(banArrUl,{"top":-(j-1)*450})
		banArrOli[j-1].children[0].className="selected"
		banI=j-1
		banstart(j-1)
	}
}

 //  json  获得商品
var url = "../json/img.json"
oAjax(url,function(obj){
	var rqdpArr = obj.rqdp
	var yxppArr = obj.yxpp
	var zxsbArr = obj.zxsb
	var clszArr = obj.clsz
	var clxzArr = obj.clxz
	var ssxlArr = obj.ssxl
	var crpsArr = obj.crps
	var zxsjArr = obj.zxsj
	var rqdp = document.getElementById("rqdp")
	var rqdpLi = rqdp.getElementsByTagName("li")
	for(var i=0; i<rqdpLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/rqdp/"+rqdpArr[i].img
		rqdpLi[i].appendChild(img)
	}
	var yxpp = document.getElementById("yxpp")
	var yxppLi = yxpp.getElementsByTagName("li")
	for(var i=0; i<yxppLi.length-1; i++){
		var img = document.createElement("img")
		img.src = "../img/yxpp/"+yxppArr[i].img
		yxppLi[i].appendChild(img)
	}
	var zxsb = document.getElementById("zxsb")
	var zxsbLi = zxsb.getElementsByTagName("li")
	for(var i=0; i<zxsbLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/zxsb/"+zxsbArr[i].img
		zxsbLi[i].appendChild(img)
	}
	var clsz = document.getElementById("clsz")
	var clszLi = clsz.getElementsByTagName("li")
	for(var i=0; i<clszLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/clsz/"+clszArr[i].img
		clszLi[i].appendChild(img)
	}
	var clxz = document.getElementById("clxz")
	var clxzLi = clxz.getElementsByTagName("li")
	for(var i=0; i<clxzLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/clxz/"+clxzArr[i].img
		clxzLi[i].appendChild(img)
	}
	var ssxl = document.getElementById("ssxl")
	var ssxlLi = ssxl.getElementsByTagName("li")
	for(var i=0; i<ssxlLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/ssxl/"+ssxlArr[i].img
		ssxlLi[i].appendChild(img)
	}
	var crps = document.getElementById("crps")
	var crpsLi = crps.getElementsByTagName("li")
	for(var i=0; i<crpsLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/crps/"+crpsArr[i].img
		crpsLi[i].appendChild(img)
	}
	var zxsj = document.getElementById("zxsj")
	var zxsjLi = zxsj.getElementsByTagName("li")
	for(var i=0; i<zxsjLi.length; i++){
		var img = document.createElement("img")
		img.src = "../img/zxsj/"+zxsjArr[i].img
		img.style.width="222px"
		img.style.height="297px"
		zxsjLi[i].appendChild(img)
		var a1 = document.createElement("a")
		a1.innerHTML=zxsjArr[i].name
		a1.style.display="block"
		a1.style.fontSize="16px"
		a1.style.marginTop="10px"
		a1.style.marginBottom="5px"
		var a2 = document.createElement("a")
		a2.innerHTML=zxsjArr[i].price
		zxsjLi[i].appendChild(a1)
		zxsjLi[i].appendChild(a2)
		
	}
})
//logo 切换
var nav = document.getElementById("nav")
var navh1 = nav.getElementsByTagName("h1")[0]
var i = 0 
var timer = setInterval(function(){
	move(navh1,{"opacity":0},function(){
		navh1.children[0].children[0].src="../img/logo"+i%2+".jpg"		
		move(navh1,{"opacity":100})
	})
	i++
},5000)

// 阶梯效果  返回顶部
var totop = document.getElementById("totop")
var stair = document.getElementById("stair")
var li = stair.children
window.onscroll=function(){
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
	if(scrolltop>500){
		totop.style.display="block"
	}else{
		totop.style.display="none"
	}
	for(var i=0; i<li.length; i++){
		li[i].children[0].style.opacity = .7
	}
	li[parseInt(scrolltop/2200)].children[0].style.opacity = 0
	var botm = nav.getElementsByClassName("bottom")[0]
	if(scrolltop>200){
		botm.style.position = "fixed"
		botm.style.top = 0
		botm.style.zIndex=100
	}else{
		botm.style.position = "absolute"
		botm.style.top = "90px"
	}
}
totop.onclick=function(){
	document.documentElement.scrollTop ?document.documentElement.scrollTop = 0 : document.body.scrollTop =0
};
for(var i=0; i<li.length; i++){
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop
	li[parseInt(scrolltop/2200)].children[0].style.opacity = 0
	li[i].index = i
	li[i].onclick=function(){
		document.documentElement.scrollTop ?document.documentElement.scrollTop =this.index*2200  : document.body.scrollTop =this.index*2200	
	}
}
