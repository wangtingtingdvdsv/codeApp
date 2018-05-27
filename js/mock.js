//post 前端传过来的数据
var articleArr = [{
      article:"“每实”爱情感动瞬间征文 | 一百三十九次吻",
      pic:'http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg',
      summary: "好",
      link:'https://www.jianshu.com/p/d5a8130dc6c1'
   },{
      article:"从全职妈妈到简书签约作者，说说我的写作故事",
      pic:'http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg',
      summary: "好",
      link:'https://www.jianshu.com/p/11046c89367d'
   },{
      article:"从全职妈妈到简书签约作者，说说我的写作故事",
      pic:'http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg',
      summary: "好",
      link:'https://www.jianshu.com/p/11046c89367d'
   },{
      article:"从全职妈妈到简书签约作者，说说我的写作故事",
      pic:'http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg',
      summary: "好",
      link:'https://www.jianshu.com/p/11046c89367d'
   }];
var houseArr = 
[{
   houseName: "B楼",
   sort: "住",
   longitude:"34.566666", 
   latitude:"67.878999"
},{
   houseName: "A楼",
   sort: "学",
   longitude:"34.566666", 
   latitude:"67.878999"
},{
   houseName: "C楼",
   sort: "住",
   longitude:"34.566666", 
   latitude:"67.878999"
},{
   houseName: "D楼",
   sort: "学",
   longitude:"34.566666", 
   latitude:"67.878999"
}];
var reportArr = [
{
   reportTime:"2018-5-5",
   reportName:"麻辣烫",
   reportServerName:"洗碗不干净",
   reportInfringementReason:"讨厌",
   reportInfringementCaption:"呵呵",
   reportPicLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   reportPeopleName:"王月",
   reportPeopleId:"12237645",
   reportPeopleNum:"567452235687"
},{
   reportTime:"2018-3-6",
   reportName:"麻辣烫",
   reportServerName:"洗碗不干净",
   reportInfringementReason:"讨厌",
   reportInfringementCaption:"呵呵",
   reportPicLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   reportPeopleName:"王月",
   reportPeopleId:"12237645",
   reportPeopleNum:"567452235687"
},{
   reportTime:"2018-2-5",
   reportName:"麻辣烫",
   reportServerName:"洗碗不干净",
   reportInfringementReason:"讨厌",
   reportInfringementCaption:"呵呵",
   reportPicLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   reportPeopleName:"王月",
   reportPeopleId:"12237645",
   reportPeopleNum:"567452235687"
},{
   reportTime:"2018-3-26",
   reportName:"麻辣烫",
   reportServerName:"洗碗不干净",
   reportInfringementReason:"讨厌",
   reportInfringementCaption:"呵呵",
   reportPicLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   reportPeopleName:"王月",
   reportPeopleId:"12237645",
   reportPeopleNum:"567452235687"
}];
//get  给前端商家信息页面发送数据
Mock.mock('http://businessDetail.com', {
   code:200,
   message:[{
   		busiName:"麻辣烫",
   		sort:"吃/校园服务-位置-品类",
   		picLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   		star:"345",
   		longitude:"23.333333",
   		latitude:"60.222222",
   		summary:"我们家的饭是最好吃的"
   },{

   		busiName:"麻烫",
   		sort:"吃/校园服务-位置-品类",
   		picLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
   		star:"345",
   		longitude:"23.333333",
   		latitude:"60.222222",
   		summary:"我们家的饭是最好吃的"
   }, {
         busiName:"麻",
         sort:"吃/校园服务-位置-品类",
         picLink:"http://seopic.699pic.com/photo/00013/6254.jpg_wh1200.jpg",
         star:"345",
         longitude:"23.333333",
         latitude:"60.222222",
         summary:"我们家的饭是最好吃的"
   }]
});
//校园文章信息
Mock.mock("http://articleDetail.com", {
   code:200,
   message:articleArr
})
Mock.mock("http://houseInfo.com", {
   code:200,
   message:houseArr
})
Mock.mock("http://reportInfo.com", {
   code:200,
   message:reportArr
})