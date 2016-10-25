function setcookie(_name,_value,_Date){
	var oDate = new Date()
	oDate.setDate(oDate.getDate()+_Date)
	document.cookie=_name+"="+encodeURIComponent(_value)+"; path=/; expires="+oDate	
}
function getcookie(_name){
	var str=document.cookie
	var arr=str.split("; ")
	for(var i=0; i<arr.length; i++){
		var arrn=arr[i].split("=")
		if(arrn[0]==_name){
			return decodeURIComponent(arrn[1])
		}
	}
	return "无相关cookie"
}
