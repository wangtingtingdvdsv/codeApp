var infoObj={};

$(".save").on("click", function(){
	var ele = $("input, textarea");
	for(var i = 0; i < ele.length; i++) {
		if (ele[i].id == 'upload') {
			if (imgSrc.length == 0) {
				alert("请完善信息");
				return;
			} 
			continue;
		}
		if (ele[i].value.trim() == "") {
			//console.log(ele[i]);
			alert("请完善信息");
			return;
		}
	}
	getInfo();
	//提交数据给后台
	//console.log("infoObj", infoObj)
	//submitData("", infoObj, 'POST');
	
	
	alert("保存成功");
	window.location.href="businessDetailsPage.html";

})


//获取用户所填写的内容并保存到infoObj中
function getInfo() {

	infoObj.article = $(".name")[0].value.trim();
	infoObj.summary = $(".summary")[0].value.trim();
	infoObj.link = $(".summary")[0].value.trim();
	infoObj.pic = imgSrc[0];
	//console.log(imgSrc[0]);
//	console.log(infoObj);

}

