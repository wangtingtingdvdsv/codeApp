var imgFile = []; //文件流
var imgSrc = []; //图片路径
var imgName = []; //图片名字
$(function(){
	// 鼠标经过显示删除按钮
	$('.content-img-list').on('mouseover','.content-img-list-item',function(){
		$(this).children('a').removeClass('hide');
	});
	// 鼠标离开隐藏删除按钮
	$('.content-img-list').on('mouseleave','.content-img-list-item',function(){
		$(this).children('a').addClass('hide');
	});
	// 单个图片删除
	$(".content-img-list").on("click",'.content-img-list-item a',function(){
	    	var index = $(this).attr("index");
			imgSrc.splice(index, 1);
			imgFile.splice(index, 1);
			imgName.splice(index, 1);
			var boxId = ".content-img-list";
			addNewContent(boxId);
			if(imgSrc.length <2){//显示上传按钮
				$('.content-img .file').show();
			}
	  });
	//图片上传
	$('#upload').on('change',function(){			
		
		if(imgSrc.length>1){
			return alert("最多只能上传4张图片");
		}
		var imgSize = this.files[0].size;  //b
		if(imgSize>1024*1024*1){//1M
			return alert("上传图片不能超过1M");
		}
		console.log(this.files[0].type)
		if(this.files[0].type != 'image/png' && this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/gif'){
			return alert("图片上传格式不正确");
		}

		var imgBox = '.content-img-list';
		var fileList = this.files;
		for(var i = 0; i < fileList.length; i++) {
			var imgSrcI = getObjectURL(fileList[i]);
			imgName.push(fileList[i].name);
			imgSrc.push(imgSrcI);
			//console.log(imgSrcI);
			imgFile.push(fileList[i]);
		}
		if(imgSrc.length >= 1){//隐藏上传按钮
			$('.content-img .file').hide();
		}
		addNewContent(imgBox);
		this.value = null;//解决无法上传相同图片的问题
	})

	//提交请求
    $('#btn-submit-upload').on('click',function(){
        // FormData上传图片
        var formFile = new FormData();
        // formFile.append("type", type); 
        // formFile.append("content", content); 
        // formFile.append("mobile", mobile); 
        // 遍历图片imgFile添加到formFile里面
        $.each(imgFile, function(i, file){
            formFile.append('myFile[]', file);
        });
       // console.log(imgFile)
    
    });

});

//删除
function removeImg(obj, index) {
	imgSrc.splice(index, 1);
	imgFile.splice(index, 1);
	imgName.splice(index, 1);
	var boxId = ".content-img-list";
	addNewContent(boxId);
}

//图片展示
function addNewContent(obj) {
	// console.log(imgSrc)
	$(obj).html("");
	for(var a = 0; a < imgSrc.length; a++) {
		var oldBox = $(obj).html();
		$(obj).html(oldBox + '<li class="content-img-list-item"><img src="'+imgSrc[a]+'" alt=""><a index="'+a+'" class="hide delete-btn"><i class="ico-delete"></i></a></li>');
	}
}

//建立一個可存取到該file的url
function getObjectURL(file) {
	var url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}


//给“保存按钮”添加事件
$(".cancel").on("click", function() {
	if(confirm("确定取消吗")) {
		window.location.href="businessDetailsPage.html";
	}

})

//将用户填写的内容交给后台
function submitData(url, obj, method) {
	$.ajax({
		url: url,
		data:obj,
		type: method,
		dataType:'jsonp',
		success:function(data) {
			//console.log("提交数据："+data);
			console.log("数据提交成功");
		},
		error:function(er){
			console.log("提交数据失败");
		}
	});
}