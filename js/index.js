//ban   banner部分
var ban = document.getElementById("banner")
var banArrUli = ban.children[0].children
var banArrOli = ban.children[1].children
var right = ban.children[2]
var left = ban.children[3]
var banTimer
var banI = 0 // 计数变量
for(var i=0; i<banArrOli.length; i++){
	banArrOli[i].index=i
	banArrOli[i].onmouseover=function(){
		clearInterval(banTimer)
		for(var i=0; i<banArrUli.length; i++){
			move(banArrUli[i],{"opacity":0})
			banArrOli[i].children[1].style.opacity=".5"
		}
		move(banArrUli[this.index],{"opacity":100})
		banArrOli[this.index].children[1].style.opacity="0"
	}
	banArrOli[i].onmouseout=function(){
		banI=this.index
		banstart(banI)	
	}
}
right.onclick=function(){
	var j=0
	for(var i=0; i<banArrOli.length; i++){		
		if(banArrOli[i].children[1].style.opacity== 0){
			break;
		}
		j++
	}
	clearInterval(banTimer)
	for(var i=0; i<banArrUli.length; i++){
		move(banArrUli[i],{"opacity":0})
		banArrOli[i].children[1].style.opacity=".5"
	}
	if(j==7){
		move(banArrUli[0],{"opacity":100})
		banArrOli[0].children[1].style.opacity="0"
		banI=0
		banstart(0)
	}else{
		move(banArrUli[j+1],{"opacity":100})
		banArrOli[j+1].children[1].style.opacity="0"
		banI=j+1
		banstart(j+1)
	}
}
left.onclick=function(){
	var j=0
	for(var i=0; i<banArrOli.length; i++){		
		if(banArrOli[i].children[1].style.opacity== 0){
			break;
		}
		j++
	}
	clearInterval(banTimer)
	for(var i=0; i<banArrUli.length; i++){
		move(banArrUli[i],{"opacity":0})
		banArrOli[i].children[1].style.opacity=".5"
	}
	if(j==0){
		move(banArrUli[7],{"opacity":100})
		banArrOli[7].children[1].style.opacity="0"
		banI=7
		banstart(7)
	}else{
		move(banArrUli[j-1],{"opacity":100})
		banArrOli[j-1].children[1].style.opacity="0"
		banI=j-1
		banstart(j-1)
	}
}
banstart(banI)
function banstart(banI){
	banTimer = setInterval(function(){
		if(banI==0){
			move(banArrUli[7],{"opacity":0})
			banArrOli[7].children[1].style.opacity=".5"
		}else{
			move(banArrUli[banI-1],{"opacity":0})
			banArrOli[banI-1].children[1].style.opacity=".5"
		}		
		move(banArrUli[banI],{"opacity":100})
		banArrOli[banI].children[1].style.opacity="0"		
		banI++
		if(banI==8){
			banI=0
		}
	},1500)}

// json  获得商品
var url = "json/img.json"
oAjax(url,function(obj){
	var rqdpArr = obj.rqdp
	var yxppArr = obj.yxpp
	var zxsbArr = obj.zxsb
	var clszArr = obj.clsz
	var clxzArr = obj.clxz
	var ssxlArr = obj.ssxl
	var crpsArr = obj.crps
	var zxsjArr = obj.zxsj
	
	var rqdph3 = document.createElement("h3")
	rqdph3.innerHTML = "人气单品"
	goods.appendChild(rqdph3)
		
	var rqdp = document.createElement("ul")
	rqdp.className="one"
	goods.appendChild(rqdp)
	for(var i=1; i<=rqdpArr.length; i++){
		var rqdpLi = document.createElement("li")	
		rqdpLi.className="l"
		if(i==2||i==10){
			rqdpLi.className+=" b"
		}
		if(i==5||i==10 ){
			rqdpLi.className+=" last"
		}
		if(i==11){
			rqdpLi.style.cursor="c"
		}
		rqdp.appendChild(rqdpLi)
		var rqdpLip = document.createElement("p")
		rqdpLi.appendChild(rqdpLip)
		var img = document.createElement("img")
		img.src = "img/rqdp/"+rqdpArr[i-1].img
		rqdpLi.appendChild(img)
	}
	
	
	var yxpph3 = document.createElement("h3")
	yxpph3.innerHTML = "优选品牌"
	goods.appendChild(yxpph3)
		
	var yxpp = document.createElement("ul")
	yxpp.className="two"
	goods.appendChild(yxpp)
	for(var i=1; i<=yxppArr.length; i++){
		var yxppLi = document.createElement("li")	
		yxppLi.className="l"
		if(i<4){
			yxppLi.className+=" one"
		}
		if(i==3 || i==9 || i==15 ){
			yxppLi.className+=" last"
		}
		if(i==9){
			yxppLi.style.cursor="auto"
		}
		yxpp.appendChild(yxppLi)
		var yxppLip = document.createElement("p")
		yxppLi.appendChild(yxppLip)
		var img = document.createElement("img")
		img.src = "img/yxpp/"+yxppArr[i-1].img
		yxppLi.appendChild(img)
	}
	
	
	var zxsbh3 = document.createElement("h3")
	zxsbh3.innerHTML = "最新速报"
	goods.appendChild(zxsbh3)
		
	var zxsb = document.createElement("ul")
	zxsb.className="three"
	goods.appendChild(zxsb)
	for(var i=1; i<=zxsbArr.length; i++){
		var zxsbLi = document.createElement("li")			
		if(i<5||i==9){
			zxsbLi.className ="l"
		}else{
			zxsbLi.className ="r"
		}
		if(i==1||i==5){
			zxsbLi.className +=" b"
		}
		if(i==5){
			zxsbLi.className +=" last"
		}
		if(i==9){
			zxsbLi.className +=" c"
		}
		zxsb.appendChild(zxsbLi)
		var zxsbLip = document.createElement("p")
		zxsbLi.appendChild(zxsbLip)
		var img = document.createElement("img")
		img.src = "img/zxsb/"+zxsbArr[i-1].img
		zxsbLi.appendChild(img)
	}
	
	
	
	var clszh3 = document.createElement("h3")
	clszh3.innerHTML = "潮流上装"
	goods.appendChild(clszh3)
	
	var clsza = document.createElement("a")
	clsza.innerHTML = "MORE"
	clsza.className="no1"
	clsza.href="##"
	goods.appendChild(clsza)
	
	var clsz = document.createElement("ul")
	clsz.className="four"
	goods.appendChild(clsz)
	for(var i=1; i<=clszArr.length; i++){
		var clszLi = document.createElement("li")		
		clszLi.className="l"
		if(i==1){
			clszLi.className +=" a"
		}
		if(i==6){
			clszLi.className +=" b"
		}
		if(i==2 || i==8){
			clszLi.className +=" c"
		}
		if(i==5 || i==11 || i==16){
			clszLi.className +=" last"
		}
		if( i>=12){
			clszLi.className +=" d"
		}		
		clsz.appendChild(clszLi)
		var clszLip = document.createElement("p")
		clszLi.appendChild(clszLip)
		var img = document.createElement("img")
		img.src = "img/clsz/"+ssxlArr[i-1].img
		clszLi.appendChild(img)
	}
	
	
	var clxzh3 = document.createElement("h3")
	clxzh3.innerHTML = "潮流下装"
	goods.appendChild(clxzh3)
	
	var clxza = document.createElement("a")
	clxza.innerHTML = "MORE"
	clxza.className="no2"
	clxza.href="##"
	goods.appendChild(clxza)
	
	var clxz = document.createElement("ul")
	clxz.className="four"
	goods.appendChild(clxz)
	for(var i=1; i<=clxzArr.length; i++){
		var clxzLi = document.createElement("li")		
		clxzLi.className="l"
		if(i==1){
			clxzLi.className +=" a"
		}
		if(i==6){
			clxzLi.className +=" b"
		}
		if(i==2 || i==8){
			clxzLi.className +=" c"
		}
		if(i==5 || i==11 || i==16){
			clxzLi.className +=" last"
		}
		if( i>=12){
			clxzLi.className +=" d"
		}		
		clxz.appendChild(clxzLi)	
		var clxzLip = document.createElement("p")
		clxzLi.appendChild(clxzLip)
		var img = document.createElement("img")
		img.src = "img/clxz/"+ssxlArr[i-1].img
		clxzLi.appendChild(img)
	}
	
	var ssxlh3 = document.createElement("h3")
	ssxlh3.innerHTML = "时尚鞋履"
	goods.appendChild(ssxlh3)
	
	var ssxla = document.createElement("a")
	ssxla.innerHTML = "MORE"
	ssxla.className="no3"
	ssxla.href="##"
	goods.appendChild(ssxla)
	
	var ssxl = document.createElement("ul")
	ssxl.className="four"
	goods.appendChild(ssxl)
	for(var i=1; i<=ssxlArr.length; i++){
		var ssxlLi = document.createElement("li")		
		ssxlLi.className="l"
		if(i==1){
			ssxlLi.className +=" a"
		}
		if(i==6){
			ssxlLi.className +=" b"
		}
		if(i==2 || i==8){
			ssxlLi.className +=" c"
		}
		if(i==5 || i==11 || i==16){
			ssxlLi.className +=" last"
		}
		if( i>=12){
			ssxlLi.className +=" d"
		}		
		ssxl.appendChild(ssxlLi)	
		var ssxlLip = document.createElement("p")
		ssxlLi.appendChild(ssxlLip)
		var img = document.createElement("img")
		img.src = "img/ssxl/"+ssxlArr[i-1].img
		ssxlLi.appendChild(img)
	}
	
	var crpsh3 = document.createElement("h3")
	crpsh3.innerHTML = "潮人配饰"
	goods.appendChild(crpsh3)
	
	var crpsa = document.createElement("a")
	crpsa.innerHTML = "MORE"
	crpsa.className="no4"
	crpsa.href="##"
	goods.appendChild(crpsa)
	
	var crps = document.createElement("ul")
	crps.className="four"
	goods.appendChild(crps)
	for(var i=1; i<=crpsArr.length; i++){
		var crpsLi = document.createElement("li")		
		crpsLi.className="l"
		if(i==1){
			crpsLi.className +=" a"
		}
		if(i==6){
			crpsLi.className +=" b"
		}
		if(i==2 || i==8){
			crpsLi.className +=" c"
		}
		if(i==5 || i==11 || i==16){
			crpsLi.className +=" last"
		}
		if( i>=12){
			crpsLi.className +=" d"
		}		
		crps.appendChild(crpsLi)
		var crpsLip = document.createElement("p")
		crpsLi.appendChild(crpsLip)
		var crpsLip = document.createElement("p")
		crpsLi.appendChild(crpsLip)
		var img = document.createElement("img")
		img.src = "img/crps/"+crpsArr[i-1].img
		crpsLi.appendChild(img)
	}
	
	var zxsjh3 = document.createElement("h3")
	zxsjh3.innerHTML = "最新上架"
	goods.appendChild(zxsjh3)
	
	var zxsja = document.createElement("a")
	zxsja.innerHTML = "MORE"
	zxsja.className="no5"
	zxsja.href="##"
	goods.appendChild(zxsja)
	
	var zxsj = document.createElement("ul")
	zxsj.className="five"
	goods.appendChild(zxsj)
	for(var i=1; i<=zxsjArr.length; i++){
		var zxsjLi = document.createElement("li")
		if(i%5==0){
			zxsjLi.className="l last"
		}else{
			zxsjLi.className="l"
		}		
		var zxsjLip = document.createElement("p")
		zxsjLi.appendChild(zxsjLip)
		var img = document.createElement("img")
		img.src = "img/zxsj/"+zxsjArr[i-1].img
		img.style.width="222px"
		img.style.height="297px"
		zxsjLi.appendChild(img)
		var a1 = document.createElement("a")
		a1.innerHTML=zxsjArr[i-1].name
		a1.style.display="block"
		a1.style.fontSize="16px"
		a1.style.marginTop="10px"
		a1.style.marginBottom="5px"
		var a2 = document.createElement("a")
		a2.innerHTML=zxsjArr[i-1].price
		zxsjLi.appendChild(a1)
		zxsjLi.appendChild(a2)
		zxsj.appendChild(zxsjLi)		
	}
	var tomore = document.createElement("a")
	tomore.className="last"
	tomore.href="##"
	tomore.innerHTML="查看更多"
	goods.appendChild(tomore)
})
//logo 切换
var nav = document.getElementById("nav")
var navh1 = nav.getElementsByTagName("h1")[0]
var i = 0 
var timer = setInterval(function(){
	move(navh1,{"opacity":0},function(){
		navh1.children[0].children[0].src="img/logo"+i%2+".jpg"		
		move(navh1,{"opacity":100})
	})
	i++
},5000)

// 覆盖层
var close = document.getElementById("close")
var gai = document.getElementById("gai")
var ckou = document.getElementById("ckou")
close.onclick=function(){
	gai.style.display="none"
	ckou.style.display="none"
}
function qxgc(){
	gai.style.display="none"
	ckou.style.display="none"
}
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
		document.documentElement.scrollTop?document.documentElement.scrollTop =this.index*2200  : document.body.scrollTop =this.index*2200	
	}
}
