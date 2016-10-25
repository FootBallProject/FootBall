//获得商品信息
var str = window.location.href
var id = str.split("?")[1].split("=")[1]
var url = "../json/img.json"
var index // 选出商品的索引
var pd1=false,pd2=false // 判断是否所选商品信息是否完整
oAjax(url,function(obj){
	var arr = obj.product
	for(var i=0; i<arr.length; i++){
		if(arr[i].id==id){
			index=i;
			break;
		}
	}
	var dl = all.getElementsByTagName("dl")[0]
	var img = dl.children[0].getElementsByTagName("img")
	var fdj = document.getElementById("fdj")
	var lj = document.getElementById("lj")	
	img[0].src="../img/product/"+id+arr[index].imgb1
	img[0].parentNode.onmouseover=function(){
		fdj.style.display="block"
		fdj.style.backgroundImage="url("+img[0].src+")"
		lj.style.display="block"
	}
	img[0].parentNode.onmousemove=function(event){
		lj.style.display="block"
		var e = event || window.event
		var width = document.documentElement.clientWidth
		lj.style.left = e.pageX - parseInt(lj.style.width)/2 + "px"
		lj.style.top = e.pageY - parseInt(lj.style.width)/2 + "px"
		if(parseInt(lj.style.left)<this.offsetLeft){
			lj.style.left=this.offsetLeft+"px"
		}
		if(parseInt(lj.style.top)<225){
			lj.style.top="225px"
		}
		if(parseInt(lj.style.left)>this.offsetLeft+370){
			lj.style.left=this.offsetLeft+370 +"px"
		}
		if(parseInt(lj.style.top)>735){
			lj.style.top=735+"px"
		}
		fdj.style.backgroundPosition = -(parseInt(lj.style.left)-this.offsetLeft)/395*450 +"px"+"  "+ -(parseInt(lj.style.top)-225)/510*700 + "px"
	}
	img[0].parentNode.onmouseout=function(){
		fdj.style.display="none"
		lj.style.display="none"
	}
	img[1].src="../img/product/"+id+arr[index].imgs1
	img[1].onmouseover=function(){
		img[0].src="../img/product/"+id+arr[index].imgb1
	}
	img[2].src="../img/product/"+id+arr[index].imgs2
	img[2].onmouseover=function(){
		img[0].src="../img/product/"+id+arr[index].imgb2
	}
	var t = dl.children[1].children[0].children
	t[0].innerHTML = arr[index].name
	t[1].innerHTML = arr[index].pp
	t[2].innerHTML = ""
	t[3].innerHTML ="市场价："+"<b style='color:#000;font-size:16px'>¥"+ arr[index].price+ "</b>"
	var b = dl.children[1].children[1].children
	var div = document.createElement("div")
	div.style.width="40px"
	div.style.height="40px"
	div.style.border="1px solid #ccc"
	div.style.backgroundImage="url(../img/product/"+id+arr[index].color+")"
	div.style.float="left"
	div.style.marginTop="10px"
	div.style.cursor="pointer"
	div.selected = false
	b[0].appendChild(div)
	div.onclick=function(){
		if(!div.selected){
			div.style.border = "1px solid #000"
			div.selected = true
			pd1 = true
		}else{
			div.style.border = "1px solid #ccc"
		}
	}
	var spancm = b[1].children
	for(var i=0; i<spancm.length; i++){
		spancm[i].onclick=function(){
			for(var i=0; i<spancm.length; i++){
				spancm[i].style.borderColor = "#ccc"
			}
			this.style.borderColor = "#000"
			pd2 = true
		}
	}
	var num = b[2].children[1]
	var numplus = b[2].children[2].children[0]
	var numcut = b[2].children[2].children[1]
	numplus.style.color="#000"
	numplus.onclick=function(){
		var numstr =parseInt( num.innerHTML)
		numstr += 1
		num.innerHTML = numstr
		if(num.innerHTML > 1){
			numcut.style.color="#000"
		}

	}
	numcut.onclick=function(){
		var numstr =parseInt( num.innerHTML)
		if(numstr<=1){
			return false
		}
		numstr -= 1
		num.innerHTML = numstr
		if(numstr ==1){
			numcut.style.color="#ccc"
		}
		
	}
	var spb = document.getElementsByClassName("spb")[0]
	spb.innerHTML="<img style='margin:0 auto' src='../img/product/xinxi1.png' />"

	var sp = all.children[2]
	var spli = sp.children
	for(var i=0; i<spli.length; i++){
		spli[i].index = i
		spli[i].onclick=function(){
			for(var i=0; i<2; i++){
				spli[i].className="l"
			}
			spb.innerHTML="<img style='margin:0 auto' src='../img/product/xinxi"+(this.index+1)+".png' />"
			this.className="l selected"
			if(this.index == 1){
				move(spb,{"height":100})	
			}else{
				move(spb,{"height":150})
			}
			
		}
	}
	var cmb = document.getElementsByClassName("cmb")[0]
	cmb.innerHTML="<img style='margin:10px auto' src='../img/product/"+id+arr[index].cm+"' />"
	var xqb = document.getElementsByClassName("xqb")[0]
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq1+"' />"
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq2+"' />"
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq3+"' />"
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq4+"' />"
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq5+"' />"
	xqb.innerHTML+="<img style='margin:10px auto' src='../img/product/"+id+arr[index].xq6+"' />"
	var pj = document.getElementsByClassName("pj")[0]
	var pjli = pj.children
	var pjb = document.getElementsByClassName("pjb")
	for(var i=0; i<pjli.length; i++){
		pjli[i].index = i
		pjli[i].onclick=function(){
			for(var i=0; i<2; i++){
				pjli[i].className="l"
				pjb[i].className="w pjb"
			}
			this.className="l selected"
			pjb[this.index].className="w pjb selected"
		}
	}
})
var btn = all.getElementsByClassName("pjan");
var pjtext = all.getElementsByClassName("pjtext")[0]
var pjb = document.getElementsByClassName("pjb")
for(var i=0; i<2; i++){
	btn[i].onclick=function(){
		if(signin){
			pjtext.style.display="block"
			if(this.value == "zx"){
				pjtext.children[0].innerHTML = "我要咨询："
			}else{
				pjtext.children[0].innerHTML = "我要评价："
			}
		}else{
			alert("请先登录！")
			window.location.href="signin.html"
		}
	};
}
var pjtextbtn = pjtext.getElementsByTagName("button")
pjtextbtn[0].onclick=function(){
	var str = pjtext.children[1].value
	if(str==""){
		alert("还没有填写任何评论呢...")
	}else{
		var p = document.createElement("p")
		p.innerHTML = topli.children[0].innerHTML+" : "+str
		p.style.marginBottom = "20px"
		if(pjtext.children[0].innerHTML=="我要咨询："){
			pjb[0].children[1].appendChild(p)
			var num =parseInt( pjb[0].children[0].children[0].innerHTML );
			num += 1 ;
			pjb[0].children[0].children[0].innerHTML = num;
		}else{
			pjb[1].children[1].appendChild(p)
			var num =parseInt( pjb[1].children[0].children[0].innerHTML );
			num += 1 ;
			pjb[1].children[0].children[0].innerHTML = num;
		}		
		pjtext.style.display="none"
		pjtext.children[1].value=""
	}
}
pjtextbtn[1].onclick=function(){
	pjtext.style.display="none"
}
// 添加到购物车
var btn = all.getElementsByClassName("addcart")[0]
var cartnum = document.getElementById("cartnum")
btn.onclick=function(){
	if(topli.children[0].innerHTML=="请登录"){
		alert("请登录")
		window.location.href="signin.html"
	}else{
		if(pd1&&pd2){
			var spnum = parseInt(document.getElementById("spnum").innerHTML)
			var num =parseInt( cartnum.innerHTML )
			num+=spnum
			cartnum.innerHTML = num
			var name = "pro"+id+"#"+topli.children[0].innerHTML
			setcookie(name,num,30)
		}else{
			alert("请选择商品样式!")
		}
	}
}

