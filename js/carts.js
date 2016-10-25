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
		mima = decodeURIComponent(arrcookie[i].split("=")[1]).split("/")[0]
		if(decodeURIComponent(arrcookie[i].split("=")[1]).split("/")[1]=="Y"){
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

//鼠标移上菜单
var li = document.getElementById("more")
var ul = document.getElementsByClassName("more")[0]
li.onmouseover=function(event){
	ul.style.display="block"
	move(ul,{"opacity":100})
	this.children[0].innerHTML="MY有货▲"
}
li.onmouseout=function(){
	move(ul,{"opacity":0},function(){
		ul.style.display="none"
	})
	this.children[0].innerHTML="MY有货▼"
}

// 商品列表
var arrcookie = document.cookie.split("; ");
var arrsp //商品数组
var pro={}; //全局变量  添加到购物车商品
var url="../json/img.json"
var tab = document.getElementsByTagName("table")[0]
var money=0 //全局变量  总价钱
oAjax(url,function(obj){
	for(var i=0; i<arrcookie.length; i++){		
		if(eval("/^pro[0-9]#"+topli.children[0].innerHTML+"/").test(arrcookie[i])){
			var id = arrcookie[i].split("=")[0].split("pro")[1].split("#")[0]		
			num = arrcookie[i].split("=")[1]			
			arrsp= obj.product
			for(var j=0; j<arrsp.length; j++){
				if(arrsp[j].id == id){
					pro = arrsp[j]
					break;
				}
			}
			var tr = document.createElement("tr")
			tr.id="tr"+id
			var td1 = document.createElement("td")
				td1.innerHTML = "<input class='l' type='checkbox' onchange='countmoney("+id+")' /><img class='l' src='../img/product/"+id+"s1.jpg'>"
				tr.appendChild(td1)
			var td2 = document.createElement("td")
				td2.innerHTML = "¥"+pro.price
				tr.appendChild(td2)
			var td3 = document.createElement("td")
				td3.innerHTML = "0个"
				tr.appendChild(td3)
				td4 = document.createElement("td")
				td4.innerHTML = "<div class='l' onclick='jsnum(0,"+id+")' style=' border:1px solid #ccc;width:20px;height:20px;margin-left:15px;cursor:pointer;'>-</div><p class='l' id='geshu"+id+"' style='border:1px solid #ccc;width:40px;height:20px'>"+num+"</p><div class='l' onclick='jsnum(1,"+id+")' style=' border:1px solid #ccc;width:20px;height:20px;cursor:pointer;'>+</div>"
				td4.id="td4"+id
				tr.appendChild(td4)
				td5 = document.createElement("td")
				td5.id="td5"+id
				td5.className = "xiaoji"
				td5.innerHTML = "¥"+td4.children[1].innerHTML*pro.price
				tr.appendChild(td5)
			var td6 = document.createElement("td")
				td6.innerHTML = "<button style='margin-right:10px' onclick='removetr("+id+")'>删除</button><button>移入收藏</button>"
				tr.appendChild(td6)
			tab.appendChild(tr)
		}
	}	
})
function jsnum(str,id){
	for(var j=0; j<arrsp.length; j++){
		if(arrsp[j].id == id){
			pro = arrsp[j]
			break;
		}
	}
	var gs = document.getElementById("geshu"+id)
	var td4 = document.getElementById("td4"+id)
	var td5 = document.getElementById("td5"+id)
	if(str){
		gs.innerHTML =parseInt(gs.innerHTML)+ 1
	}else{
		
		if(gs.innerHTML>1){
			gs.innerHTML = parseInt(gs.innerHTML)- 1
		}else{
			return false
		}
	}
	td5.innerHTML = "¥"+td4.children[1].innerHTML*pro.price	
	setcookie("pro"+id+"#"+topli.children[0].innerHTML,gs.innerHTML,30)
	var ckbox = document.getElementById("tr"+id).children[0].children[0]
	var xiaoji = document.getElementById("tr"+id).getElementsByClassName("xiaoji")[0].innerHTML.split("¥")[1]
	if(ckbox.checked){
		if(str){
			money += parseInt(pro.price)
		}else{
			if(money>=pro.price){
				money -= parseInt(pro.price)
			}			
		}
		allmoney()
	}
}
function removetr(id){
	var tr = document.getElementById("tr"+id)
	if(confirm("不买了？")){		
		tab.removeChild(tr)
		setcookie("pro"+id+"#"+topli.children[0].innerHTML,"",-1)	
	}
	var str = tr.children[4].innerHTML
	money-= str.split("¥")[1] 
	allmoney()
	emptycart()
}
emptycart()
function emptycart(){
	var emptydiv = document.getElementById("emptycart")
	var flag = true
	var arr = document.cookie.split("; ")
	for(var i=0; i<arr.length; i++){
		if(eval("/^pro[0-9]#"+topli.children[0].innerHTML+"/").test(arr[i])){
			flag = false
		}
	}
	if(flag){
		emptydiv.style.display="block"
	}else{
		emptydiv.style.display="none"
	}
}
var quanxuanbox = cart.getElementsByClassName("jiesuan")[0].getElementsByTagName("input")[0]
var ckbox = tab.getElementsByTagName("input")
quanxuanbox.onclick=function(){
	money = 0
	for(var i=0; i<ckbox.length; i++){
		ckbox[i].checked = quanxuanbox.checked
	}
	var xiaoji = tab.getElementsByClassName("xiaoji")
	if(quanxuanbox.checked){
		for(var i=0; i<xiaoji.length; i++){
			money += parseInt(xiaoji[i].innerHTML.split("¥")[1])
		}
	}else{
		money=0
	}
	allmoney()
}
function countmoney(id){
	var num = document.getElementById("tr"+id).children[4].innerHTML.split("¥")[1]
	var ckbox = document.getElementById("tr"+id).children[0].children[0]
	if(ckbox.checked){
		money+= parseInt(num)
	}else{
		money-= num
	}
	allmoney()

}
var showmoney = cart.getElementsByClassName("jiesuan")[0].children[2].children[1]
function allmoney(){
	showmoney.innerHTML = money 
}
var clearall = cart.getElementsByClassName("jiesuan")[0].children[1]
clearall.onclick=function(){
	if(confirm("都不买了?!")){
		var arr = document.cookie.split("; ")
		for(var i=0; i<arr.length; i++){
			var name = arr[i].split("=")[0]
			if(eval("/^pro[0-9]#"+topli.children[0].innerHTML+"/").test(name)){
				setcookie(name,"",-1)
			}
		}
	
	}
	var removetr = tab.children	
	console.log(removetr.length)
	for(var i=1; i<removetr.length; i++){		
		tab.removeChild(removetr[i])
	}
	history.go(0)
}
function fn(){
	window.location.href = "../index.html"
}
