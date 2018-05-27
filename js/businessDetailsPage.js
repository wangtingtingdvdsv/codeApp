var number = 0;//控制商家信息中的序号
var inputBusiValue;
var inputHouseValue
var keyInfo;
//商家信息查询按钮是否显现
$(".searchBusiInput").on('input', function() {
	inputBusiValue = $(".searchBusiInput").val().trim();
	if (inputBusiValue !="") { 
		$(".busiSearchButton").attr("disabled", false);
	} else {
		$(".busiSearchButton").attr("disabled", true);
	}
})
//点击查询按钮
$(".busiSearchButton").on("click", function() {
	var ele = document.getElementById('busiBody');
	//console.log(ele.length);
   	var keyInfo = getTextNode(ele);
   	//console.log(keyInfo);
	$(".busireSetButton").attr("disabled", false);   //可用
})

function getTextNode(ele) { 
   var nodes = ele.childNodes;
   for(let i = 0; i < nodes.length; i++) {
	    if (nodes[i].nodeType == 3) {    //文本节点
	        if (nodes[i].nodeValue == inputBusiValue) {     //查找的是此关键字
	            var e = $(nodes[i]).parents("tr");      //得到的是Dom树中节点的引用  e只有一份并不是复制而来的
	           var parNode =  document.getElementById('busiBody');
	           parNode.insertBefore(e[0], parNode.firstChild); 
	        }
	    } else if(nodes[i].nodeType === 1) {   //元素节点
        	getTextNode(nodes[i]);
    	}  
    }
}

//点击重置按钮
$(".busireSetButton").on("click", function() {
	$(".busireSetButton").attr("disabled", true);
})

//学住兴
$(".searchHouseInput").on('input', function() {
	inputHouseValue = $(".searchHouseInput").val().trim();
	console.log(inputHouseValue);
	if (inputHouseValue !="") { 
		$(".houseSearchButton").attr("disabled", false);
	} else {
		$(".houseSearchButton").attr("disabled", true);
	}
})
//点击查询按钮
$(".houseSearchButton").on("click", function() {
	var ele = document.getElementById('houseBody');
	//console.log(ele.length);
   	var keyInfo = getTeNo(ele);
   	//console.log(keyInfo);
	$(".housereSetButton").attr("disabled", false);   //可用
})

function getTeNo(ele) { 
   var nodes = ele.childNodes;
   for(let i = 0; i < nodes.length; i++) {
	    if (nodes[i].nodeType == 3) {    //文本节点
	        if (nodes[i].nodeValue == inputHouseValue) {     //查找的是此关键字
	            var e = $(nodes[i]).parents("tr");      //得到的是Dom树中节点的引用  e只有一份并不是复制而来的
	           var parNode =  document.getElementById('houseBody');
	           parNode.insertBefore(e[0], parNode.firstChild); 
	           return;
	        }
	    } else if(nodes[i].nodeType === 1) {   //元素节点
        	getTeNo(nodes[i]);
    	}  
    }
}

//点击重置按钮
$(".housereSetButton").on("click", function() {
	$(".housereSetButton").attr("disabled", true);
})
/*导航栏*/
$(".nav li").click(function(e) {
	$("li").removeClass("background");
	var ele = e.target.parentNode;
	$(ele).addClass("background")
})
/*校园文章*/
//表格
//向后台请求数据
function getData(url, method, fun) {
	$.ajax({
		url: url,
		type: method,
		dataType: "json",
		success:function(data) {
			console.log("数据请求成功");
			fun(data.message);
		},
		error:function(er){
			console.log("数据请求失败");
		}
	});
}
//给导航栏的按钮添加事件
$(".busiDetail").on('click', function() {
	//导航按钮
	$(".busiDetail").addClass('background');
	$(".houseInfo").removeClass('background');
	$(".campus").removeClass('background');
	$(".reportInfo").removeClass('background');
	//主体是否显示
	$(".businessDetails").removeClass('isShow');
	$(".house").addClass('isShow');
	$(".campusArticle").addClass('isShow');
	$(".report").addClass('isShow');

})
$(".campus").on('click', function() {
	//导航按钮
	$(".campus").addClass('background');
	$(".houseInfo").removeClass('background');
	$(".busiDetail").removeClass('background');
	$(".reportInfo").removeClass('background');
	//主体是否显示
	$(".campusArticle").removeClass('isShow');
	$(".house").addClass('isShow');
	$(".businessDetails").addClass('isShow');
	$(".report").addClass('isShow');
})
$(".houseInfo").on('click', function() {
	//导航按钮
	$(".houseInfo").addClass('background');
	$(".busiDetail").removeClass('background');
	$(".campus").removeClass('background');
	$(".reportInfo").removeClass('background');
	//主体是否显示
	$(".house").removeClass('isShow');
	$(".businessDetails").addClass('isShow');
	$(".campusArticle").addClass('isShow');
	$(".report").addClass('isShow');

})
$(".reportInfo").on('click', function() {
	//导航按钮
	$(".reportInfo").addClass('background');
	$(".houseInfo").removeClass('background');
	$(".campus").removeClass('background');
	$(".busiDetail").removeClass('background');
	//主体是否显示
	$(".report").removeClass('isShow');
	$(".house").addClass('isShow');
	$(".campusArticle").addClass('isShow');
	$(".businessDetails").addClass('isShow');

})


//添加文章
/*
$(".publish").click(function() {
	createTable({
		article:"我",
		pic:'123',
		summary: "wer",
		link:'==='
	})
})
*/
//删除文章
$(document).on('click', '#delete', function(e){
  $(e.target.parentNode).remove();
});
//弹出窗口

$(".publish").click(function() {
	window.location.href="publishArticle.html"
})
//解析url
function urlParse(url) {  
  // 得到url问号后面拼接的参数  ?id=12345&a=b  
  let obj = {};// 创建一个Object  
  let reg = /[?&][^?&]+=[^?&]+/g;// 正则匹配 ?&开始 =拼接  非?&结束  的参数  
  let arr = url.match(reg);// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。  
  // arr数组形式 ['?id=12345','&a=b']  
  if (arr) {  
    arr.forEach((item) => {  
      /** 
       * tempArr数组    ['id','12345']和['a','b'] 
      * 第一个是key，第二个是value 
      * */  
      let tempArr = item.substring(1).split('=');  
      let key = decodeURIComponent(tempArr[0]);  
      let val = decodeURIComponent(tempArr[1]);  
      obj[key] = val;  
    });  
  }  
  return obj;  
};  

/*商家详情*/
//表格
//data 名称(busiName) 分类(sort) 图片(picLink) 星级(star) 地图标点(mapPoint) 描述(summary) 操作(修改信息 删除商家)
function busiTable(data) {
	let everyRow = `
		<tr>
			<td>${data.busiName}</td>
			<td>${data.sort}</td>
			<td><a href=${data.picLink}>点击查看</a></td>
			<td>${data.star}</td>
			<td>经度${data.latitude}<br> 维度${data.longitude}</td>
			<td>${data.summary}</td>
			<td><span id="modify" class="modify">修改信息&emsp;</span><span id="deleteBusi" class="delete">删除商家</span></td>
		</tr>
	`;
	$('#busiBody').append(everyRow);
}
function createTable(datas) {
	
	let everyRow = `
		<tr class=row${number++}>
			<td>${number}</td>
			<td>${datas.article}</td>
			<td><a href=${datas.pic}>点击查看</a></td>
			<td>${datas.summary}</td>
			<td><a href=${datas.link}>${datas.link}</a></td>
			<td id="delete" class="delete">删除文章</td>
		</tr>
	`;
	$('#tbody').append(everyRow);
}
function houseTable(data) {
	let everyRow = `
		<tr>
			<td>${data.houseName}</td>
			<td>${data.sort}</td>
			<td>经度${data.latitude}<br> 维度${data.longitude}</td>
			<td><span id="modifyHouseInfo" class="modify">修改信息&emsp;</span><span id="deleteHouseInfo" class="delete">删除信息</span></td>
		</tr>
	`; 
	$('#houseBody').append(everyRow);
}
function reportTable(data) {
	let everyRow = `
		<tr>
			<td>${data.reportTime}</td>
			<td>${data.reportName}</td>
			<td>${data.reportServerName}</td>
			<td>${data.reportInfringementReason}</td>
			<td>${data.reportInfringementCaption}</td>
			<td><a href=${data.reportPicLink}>点击查看</a></td>
			<td>${data.reportPeopleName}</td>
			<td>${data.reportPeopleId}</td>
			<td>${data.reportPeopleNum}</td>
		</tr>
	`;
	$('#reportbody').append(everyRow);
}
//填充商家表格
getData("http://businessDetail.com","GET", fillBusiTable);	
getData("http://articleDetail.com","GET", fillArticle);	
getData("http://houseInfo.com", "GET", fillHouse);
getData("http://reportInfo.com", "GET", fillReport);
function fillReport(reportData) {
	if (reportData.length == 0) {
		return;
	}
	for(let i = 0; i < reportData.length; i++) {
		reportTable(reportData[i]);
	}
}
function fillHouse(houseData) {
	if (houseData.length == 0) {
		return;
	}
	for(let i = 0; i < houseData.length; i++) {
		houseTable(houseData[i]);
	}
}
function fillArticle(articleData) {
	if (articleData.length == 0) {
		return;
	}
	for(let i = 0; i < articleData.length; i++) {
		createTable(articleData[i]);
	}
}
function fillBusiTable(busiData){
	//console.log(busiData);
	if (busiData.length == 0) {
		return;
	}
	for(let i = 0; i < busiData.length; i++) {
		busiTable(busiData[i]);
	}
}
//删除商家

$(document).on('click', '#deleteBusi', function(e){
  	$(e.target.parentNode.parentNode).remove();
});
//新增商家
$("#addBusi").on("click", function() {
	window.location.href="addBusiPage.html"
})
//修改商户信息
$(document).on('click', '#modify', function(e){
	//将用户点击的那条数据显示在修改页面
	//当用户点击保存时删掉之前的，然后添加新数据（这就要求每条数据都要有一个id）
  	window.location.href="addBusiPage.html"
});

//删除住信息
$(document).on('click', '#deleteHouseInfo', function(e){
  	$(e.target.parentNode.parentNode).remove();
});
//修改住信息
$(document).on('click', '#modifyHouseInfo', function(e){
	//将用户点击的那条数据显示在修改页面
	//当用户点击保存时删掉之前的，然后添加新数据（这就要求每条数据都要有一个id）
  	window.location.href="addHouseInfo.html"
})
//新增住宿
$("#addHouse").on("click", function() {
	window.location.href="addHouseInfo.html"
})


