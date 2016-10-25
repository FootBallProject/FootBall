var li = document.getElementById("more")
var ul = document.getElementsByClassName("more")[0]
li.onmouseover=function(event){
//		var e = event || window.event
//		if(e.target.className=="c l"){
//			move(ul,{"opacity":100})
//		this.children[0].innerHTML="MY有货▲"
//			this.children[0].style.backgroundColor="#ccc"
//		}
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

var yzmn = document.getElementsByClassName("yzmn")[0]
yzmn.onclick=function(){
	sjyz()
	}
sjyz()
function sjyz(){	
	yzmn.innerHTML =""
	for(var i=0; i<4; i++){
		var	flag=parseInt(Math.random()*2)// 0 数字 1 字母
		if(flag){
			var flag1=parseInt(Math.random()*2)// 0大写 1 小写
			if(flag1){
				yzmn.innerHTML +=" "+ String.fromCharCode(parseInt(Math.random()*26)+97) 	
			}else{
				yzmn.innerHTML +=" "+ String.fromCharCode(parseInt(Math.random()*26)+65) 	
			}
		}else{
			yzmn.innerHTML +=" "+ parseInt(Math.random()*10)
		}
	}
}
var sel = document.getElementsByTagName("select")[0]
sel.onclick=function(event){
	var num = document.getElementsByClassName("num")[0]
	num.innerHTML=this.value
}

//表单验证
var ckUser = false,ckPassw = false,ckyzmn = false,ckbox = false
var user = document.getElementsByClassName("user")[0]
var arrcookie = document.cookie.split("; ")
user.onkeyup=function(){
	var id = user.value 
	var reg = eval(/^(13|14|15|17|18)[0-9]{9}$/)
	var usertip = document.getElementsByClassName("usertip")[0]
	if(reg.test(id)==false){
		if(id==""){
			user.style.borderColor="#f00"
			usertip.children[0].innerHTML="请输入手机号码"
			usertip.style.display="block"
		}else{
			usertip.children[0].innerHTML="手机号码格式不正确，请重新输入"
			user.style.borderColor="#f00"
			usertip.style.display="block"
		}
	}else{
		for(var i=0; i<arrcookie.length; i++){
			var arr = arrcookie[i].split("=")
			console.log(arr[0].split("yoho")[1]==id)
			if(arr[0].split("yoho")[1]==id){
				user.style.borderColor="#f00"
				usertip.style.display="block"
				usertip.children[0].innerHTML="用户名已被占用"
			}else{
				user.style.borderColor="#ccc"
				usertip.style.display="none"
				ckUser=true
			}
		}
	}
}
var yz1 = document.getElementsByClassName("yz1")[0]
yz1.onkeyup=function(){
	var str = yz1.value.toLocaleLowerCase()
	var yzmntip = document.getElementsByClassName("yzmntip")[0]
	var arr = yzmn.innerHTML.split(" ")
	var str1=""
	for(var i=1; i<arr.length; i++){
		str1+=arr[i].toLocaleLowerCase()
	}
	if(str != str1){
		if(str.length!=4){
				yz1.style.borderColor="#f00"
				yzmntip.children[0].innerHTML="验证码为4位"
				yzmntip.style.display="block"
			}else{
				yz1.style.borderColor="#f00"
				yzmntip.children[0].innerHTML="验证码错误"
				yzmntip.style.display="block"
			}
		}else{
			yz1.style.borderColor="#ccc"
			yzmntip.style.display="none"
			ckyzmn = true
		}
}	
var yz2 = document.getElementsByClassName("yz2")[0]
yz2.onkeyup=function(){
	var str = yz2.value
	var yzmstip = document.getElementsByClassName("yzmstip")[0]
	if(str != 1234){
		if(str.length!=4){
				yz2.style.borderColor="#f00"
				yzmstip.children[0].innerHTML="验证码为4位"
				yzmstip.style.display="block"
			}else{
				yz2.style.borderColor="#f00"
				yzmstip.children[0].innerHTML="验证码错误"
				yzmstip.style.display="block"
			}
		}else{
			yz2.style.borderColor="#ccc"
			yzmstip.style.display="none"
		}
}	
var passw = document.getElementsByClassName("passw")[0]
var tishi = document.getElementsByClassName("tishi")[0]
var passwtip = document.getElementsByClassName("passwtip")[0]
passw.onfocus=function(){	
	tishi.style.display="block"
}

passw.onkeyup=function(){
	var mm = passw.value
	var t = tishi.children[0]
	var b = tishi.children[1]	
	var reg=eval(/[^0-9a-zA-Z]+|^[0-9]+$|^[a-zA-Z]+$/g)
	var reg1=eval(/^[0-9]+$|^[a-zA-Z]{0,5}$/g)
	var reg2=eval(/^[a-zA-Z]$|^[0-9a-zA-Z]$/g)
	var i=false,m=false
	var pd = document.getElementsByClassName("pd")
	if(mm.length<6){
		t.children[0].style.backgroundPosition = "-95px -111px"
		t.children[1].style.color="#f00"
	}else{
		t.children[0].style.backgroundPosition = "-78px -111px"
		t.children[1].style.color="#ccc"
		i = true  // 密码格式满足此条件
	}
	if(reg.test(mm)){
		b.children[0].style.backgroundPosition = "-95px -111px"
		b.children[1].style.color="#f00"
	}else{
		b.children[0].style.backgroundPosition = "-78px -111px"
		b.children[1].style.color="#ccc"
		m = true  // 密码格式满足此条件
	}
	if(!i){
		passw.style.borderColor="#f00"
		passwtip.children[0].innerHTML="密码只支持6-20位字符"
		passwtip.style.display="block"
	}else if(!m){
		passw.style.borderColor="#f00"
		passwtip.children[0].innerHTML="密码须字母和数字组合"		
		passwtip.style.display="block"
	}else {
		passw.style.borderColor="#ccc"
		passwtip.style.display="none"
		ckPassw = true
	}
	
	if(mm.length>=20){
		mm = mm.slice(0,20)
		passw.value.length = 20 
		passw.value = mm
	}
	if(mm.length==0){
		passw.style.borderColor="#f00"
		passwtip.children[0].innerHTML="请输入密码"
		passwtip.style.display="block"
		for(var i=0; i<pd.length; i++){
			pd[i].style.backgroundColor="#e8e8e8"
			pd[i].style.color="#ccc"
		}	
	}else if(reg1.test(mm)||mm.length<6){
		console.log(1)
		for(var i=0; i<pd.length; i++){			
			pd[i].style.color="#f00"			
		}	
		pd[2].style.backgroundColor="#f00"
		pd[2].style.color="#fff"
	}else if(mm.length>10){
		console.log(2)
		for(var i=0; i<pd.length; i++){			
			pd[i].style.backgroundColor="#0f0"
			pd[i].style.color="#fff"
		}	
	}else{
		console.log(3)
		for(var i=0; i<pd.length; i++){			
			pd[i].style.color="#fff"
			pd[i].style.backgroundColor="#ff0"
		}	
		pd[0].style.backgroundColor="#e8e8e8"
		pd[0].style.color="#ccc"

	}
}
var checkbox = document.getElementsByClassName("checkbox")[0]
var zcbtn = document.getElementsByClassName("zc")[0]
if(checkbox.checked){
	ckbox = true
	zcbtn.style.backgroundColor="#f00"		
}else{
	zcbtn.style.backgroundColor="#515151"
}

checkbox.onchange=function(){
	if(checkbox.checked){
		ckbox = true
		zcbtn.style.backgroundColor="#f00"		
	}else{
		zcbtn.style.backgroundColor="#515151"
	}
}
function check(){
	if(ckUser&&ckbox&&ckPassw&&ckyzmn){
		var userid = "yoho"+user.value
		var userpassw = passw.value
		setcookie(userid+"/Y",userpassw+"/Y",10)		
		return true	
	}else{
		return false
	}
}
