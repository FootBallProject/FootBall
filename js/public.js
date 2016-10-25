// 自动登录
var cookie = document.cookie
var arrcookie = cookie.split("; ")
var reg = eval(/^yoho/)
var signin = false
var topli = document.getElementById("topli")
var id,zt
for(var i=0; i<arrcookie.length; i++){
	if(reg.test(arrcookie[i])){
		name = decodeURIComponent(arrcookie[i].split("=")[0].split("yoho")[1]).split("/")[0]
		zt = decodeURIComponent(arrcookie[i].split("=")[0].split("yoho")[1]).split("/")[1]
		if(decodeURIComponent(arrcookie[i].split("=")[1]).split("/")[1]=="Y"){
			mima = decodeURIComponent(arrcookie[i].split("=")[1]).split("/")[0]
			topli.innerHTML = "Hi~,<a href= '#'  style='color:#000'>"+name+"</a><a href='#' id='exit'> [退出]</a>"
			signin = true
			break;
		}
	}
}
var exit = document.getElementById("exit")
if(exit){
	exit.onclick=function(){
		if(confirm("确认退出当前账户？")){
			setcookie("yoho"+topli.children[0].innerHTML+"/"+zt,mima+"/N",30)
			topli.innerHTML = "Hi~ [<a href='html/signin.html'>请登录</a>] [<a href='html/reg.html'>免费注册</a>]"		
			var url = (window.location.href).split("#")[0]
			window.location.href=url
			signin=false
		}
	}
}
// logo 自动切换
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
//nav 二级菜单
var navol = document.getElementById("navol")
var arrli = navol.children
var sedmenu = document.getElementsByClassName("sedmenu")
for(var i=2; i<6; i++){
	arrli[i].index = i
	arrli[i].onmouseover = function(event){
		var e = event || window.event
		sedmenu[this.index-2].style.display = "block"
		sedmenu[this.index-2].style.width=document.documentElement.offsetWidth+"px"
		sedmenu[this.index-2].style.left= -1*(this.parentNode.offsetLeft)+"px"
		var fs = sedmenu[this.index-2].children[0]
		fs.style.display="block"
	}
	arrli[i].onmouseout = function(){
		sedmenu[this.index-2].style.display = "none"
		var fs = sedmenu[this.index-2].children[0]
		fs.style.display="none"	
	}
}
//arrin 鼠标移上变内容
var topbtn = document.getElementsByClassName("topbtn")[0]
topbtn.onmouseover=function(){
	topbtn.children[1].style.display="block"
	var arr=topbtn.children[1].children
	var arrin=["集团官网","男生潮流","女生潮流","物趣分享","潮流嘉年华","YOHO!","YOHO!BOYS","YOHO!GIRLS","YOHO!SHOW","YO'HOOD"]
	for(var i=0; i<arr.length; i++){
		arr[i].index=i
		arr[i].onmouseover=function(){
			this.children[0].style.color="#000000"
		}
		arr[i].children[0].onmouseover=function(){
			this.innerHTML=arrin[this.parentNode.index]
		}
		arr[i].onmouseout=function(){
			this.children[0].style.color="#8e8e8e"
			this.children[0].innerHTML=arrin[this.index+5]
		}
	}
}
topbtn.onmouseout=function(){
	topbtn.children[1].style.display="none"
}
// 购物车数量显示 
gwcshownum()
function  gwcshownum(){
	var cartnum = document.getElementById("cartnum")
	if(signin){		
		for(var i=0; i<arrcookie.length; i++){
			var shownum = arrcookie[i].split("=")[0]
			if(eval("/^pro[0-9]#"+topli.children[0].innerHTML+"/").test(shownum)){
				cartnum.innerHTML = parseInt(arrcookie[i].split("=")[1])
			}
		}
	}else{
		cartnum.innerHTML = 0
	}
}
//男生女生潮童生活   xxk选项卡
var navxxk = nav.getElementsByClassName("xxk")
var navbotm = nav.getElementsByClassName("bottom")[0]
var arrcolor = ["#000","#ff88ae","#7bd3f9","#5e4b3c"]
for(var i=0; i<navxxk.length; i++){
	navxxk[i].index = i
	navxxk[i].onclick=function(){
		for(var i=0; i<navxxk.length; i++){
			navxxk[i].style.background="#fff"	
			navxxk[i].className="l xxk"
		}
		this.style.background=arrcolor[this.index]
		this.className="selected l xxk"
		navbotm.style.background=arrcolor[this.index]
	}
}
//跳转至购物车
var str = window.location.href
function tocarts(){
	
	if(signin){
		if(/index/.test(str)){
			window.location.href="html/carts.html"
		}else{
			window.location.href="carts.html"
		}
	}else{
		alert("请登录")
		if(/index/.test(str)){
			window.location.href="html/signin.html"
		}else{
			window.location.href="signin.html"
		}
	}
}
//搜索提示
var oText=document.getElementById("oText");
var oDiv=document.getElementById("oDiv");
var tosearch=document.getElementById("tosearch");
if(/index/.test(str)){
	url = "1.txt"
}else{
	url = "../1.txt"	
}

var ssarr
oAjax(url,function(obj){
	ssarr = obj.list
})
oText.onkeyup=function(){
	oDiv.innerHTML="";
	oDiv.style.display="none";
	var str=oText.value;
	if(str!=""){
		var reg=eval("/"+str+"/gi");
		for(var i=0; i<ssarr.length; i++){
			var v=ssarr[i];
			var col1=v.split(reg);
			var col2=v.match(reg);
			if(col2){
				var l=col2.length;
				var txt="";
				for(var j=0; j<l; j++){
					txt+=col1[j]+"<font color=red>"+col2[j]+"</font>";					
				}
				txt+=col1[j];
				if(txt!=""){
					var div=document.createElement("div");
					div.innerHTML=txt;
					div.onclick=function(){
						oText.value=this.innerText;
						oDiv.style.display="none";
					}
					oDiv.appendChild(div);
				}
			}
		}
		if(oDiv.innerHTML!=""){
			oDiv.style.display="block";
		}
	}
}
tosearch.onclick=function(){
	if(oText.value){
		if(oText.value=="男"){
			if(/index/.test(str)){
				window.location.href="html/list.html"
			}else{
				window.location.href="list.html"	
			}
		}else if(oText.value=="男 T恤"){
			if(/index/.test(str)){
				window.location.href="html/product.html?id=1"
			}else{
				window.location.href="product.html?id=1"	
			}
		}else{
			alert("没有相关商品！")
		}
	}
}
