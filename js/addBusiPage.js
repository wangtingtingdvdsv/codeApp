var infoObj={};

$(".save").on("click", function(){
	var con = $('.busiSort option:selected').val();//选中的文本
	if (con == "none") {
		alert("请完善信息");
		return;
	}
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
			console.log(ele[i]);
			alert("请完善信息");
			return;
		}
	}
	
	getInfo();
	//提交数据给后台
	console.log(infoObj);
	//submitData("", infoObj, 'POST');
	alert("保存成功");
	window.location.href="businessDetailsPage.html";

})


//获取用户所填写的内容并保存到infoObj中
function getInfo() {

	infoObj.busiName = $(".name")[0].value.trim();
	infoObj.sort =  $('.busiSort option:selected').text().trim();
	infoObj.busiSummary = $(".busiSummary")[0].value.trim();
	infoObj.picLink = imgSrc[0];
	infoObj.longitude = $(".longitude")[0].value.trim();
	infoObj.latitude = $(".latitude")[0].value.trim();
//	console.log(infoObj);

}

