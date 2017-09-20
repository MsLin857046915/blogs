/**页面跳转***/
$('#dowebok').fullpage({
    scrollingSpeed:500,/*滚动速度*/
    css3:true,/*是否使用css样式*/
    anchors:["page1","page2","page3","page4","page5"],/*锚点链接*/
    verticalCentered: false,/*内容是否垂直居中*/
	resize: true,
    loopTop:true,
    loopBottom:true,
   /*页面初始化完成后的回调函数*/
    afterRender: function() {
        $("#minMain").css({"display":"block"});
        /*右侧导航高度*/
        $("#aside").css({"top": ($("#headerPage").height() - $("#aside").height()) / 2});
        /**主体渐入**/
            $(".position").animate({"padding-top":"100px","opacity":"1"},2000,function(){
                $(".size>p").eq(0).animate({"opacity":"1"},450,function(){
                    $(".content").animate({width:"800"},450,function(){
                        $(".size>p").eq(1).animate({"padding-right":"0","opacity":"1"},450,function(){
                            $(".size>p").eq(2).animate({"padding-right":"0","opacity":"1"},450,function(){
                                $(".size>p").eq(3).animate({"padding-right":"0","opacity":"1"},450,function(){
                                    $(".size>p").eq(4).animate({"padding-right":"0","opacity":"1"},450,function(){
                                        $("#aside").animate({"opacity": "1"}, 450);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        /**侧栏字体显示**/
        $("#aside b")[0].style.opacity="1";
        $("#aside a").eq(0).addClass("selected").siblings().removeClass("selected");

        $(".javascript").on("click",function(){
                $(this).siblings().find(".skill_flag").removeClass("skill_flag_scale");
                $(this).siblings().find(".skill_int").slideUp(300);
                if($(".skill_flag").hasClass("skill_flag_scale")){
                    $(this).find(".skill_flag").removeClass("skill_flag_scale");
                    $(this).find(".skill_int").slideUp(300);
                }else{
                    $(this).find(".skill_flag").addClass("skill_flag_scale");
                    $(this).find(".skill_int").slideDown(300);
                    console.log(".skill_int")
                    $("#skills").css({"overflow":"visible"})
                }}
        );
        //页面刷新完成跳转回首页
        window.location.href='#';
    },
    afterLoad: function(anchorLink,index) {
        if (index == 1) {/*第一页*/
            $("#aside a").eq(0).addClass("selected").siblings().removeClass("selected");
            $("#aside b").eq(0).animate({"opacity": "1"}, 450);
        };
        if (index == 2) {/*第二页*/
            $("#aside a").eq(1).addClass("selected").siblings().removeClass("selected");
            $("#aside b").eq(1).animate({"opacity": "1"}, 450);

            $("#demo_content1 h2").after("<div class='toLine'><h2 class='aM'>· ABOUT ME ·</h2></div>");
            $(".toLine").animate({width: "130px"}, 800, function () {
                $(".toLine>.aM").slideDown(400);
            });
            $("#introduce").animate({
                width: "700px",
                marginTop: "0",
                marginBottom: "0"
            }, 700, 'easeOutElastic', function () {
                $("#introduce p").eq(0).animate({bottom: "0"}, 500, function () {
                    $("#introduce p").eq(1).animate({bottom: "0"}, 500, function () {
                        $("#introduce p").eq(2).animate({bottom: "0"}, 500, function () {
                            $("#introduce p").eq(3).animate({bottom: "0"}, 500);
                        });
                    });
                });
            });
        };
        if (index == 3) {/*第三页*/
            $("#aside a").eq(2).addClass("selected").siblings().removeClass("selected");
            $("#aside b").eq(2).animate({"opacity": "1"}, 450);
            $("#demo_content2 h2").after("<div class='toLine'><h2 class='aM'>· SKILL ·</h2></div>");

            $(".toLine").animate({width: "130px"}, 800, function () {
                $(".toLine>.aM").slideDown(400);
            });
            $(".javascript").addClass("scale");
            $("#skill_list").css({"display":"block"});
        }
        if (index == 4) {/*第四页*/
            $("#aside a").eq(3).addClass("selected").siblings().removeClass("selected");
            $("#aside b").eq(3).animate({"opacity": "1"}, 450);
            $("#demo_content3 h2").after("<div class='toLine'><h2 class='aM'>· Demo  ·</h2></div>");
            $(".toLine").animate({width: "130px"}, 800, function () {
                $(".toLine>.aM").slideDown(400);
            });
            var i=1;
            $(".demo_scale").each(function() {
               $(this).animate({"margin-top":"25",opacity:"1"},700*i);
                i++;
        });
            $(".encourage").animate({"margin-top":"25",opacity:"1"},2600,function(){
                $(".demo_box_hover").hover(function() {
                    $(this).find("p").css({"top": "28px"});
                    $(this).find("span>a").css({"top": "50px"});
                },function(){
                    $(this).find("p").css({"top": "-30px"});
                    $(this).find("span>a").css({"top": "150px"});
                });
            });
        };
        if (index == 5) {/*第五页*/
            $("#aside a").eq(4).addClass("selected").siblings().removeClass("selected");
            $("#aside b").eq(4).animate({"opacity": "1"}, 450);
            $(".ball").animate({opacity: "1"}, 800, function () {
                $(".ball").slideDown(400);
            });
            $("#demo_content4 h2").after("<div class='toLine'><h2 class='aM'>· CONTACT ME ·</h2></div>");
            $(".toLine").animate({width:"130px"}, 800, function () {
                $(".toLine>.aM").slideDown(400);
            });
            $("#footer>p").animate({"margin":"10px 0 50px 0","opacity":"1"}, 2000,function() {
                var i =0;
                $(".font1>p").each(function () {
                    i++;
                    $(this).animate({opacity:"1"},1100*i);
                });
            });
        };
    },
  /*页面滚动前回调函数*/
    onLeave:function(index){
        if(index==1||index==2||index==3||index==4||index==5){
            //侧边导航文字切换
            $("#aside b").css('opacity','0');
            $(".toLine").remove();
            $("#aside a").removeAttr('href');
            setTimeout(function () {
                for(var i=1;i<6;i++){
                    $("#aside a")[i-1].href='#page'+i;
                }
            },1000)
        };
        if(index==3){
            $(".skill_flag").removeClass("skill_flag_scale");
            $(".skill_int").hide();
        };
    }
});

/**nav文字变换**/
$(".conversion").mouseover(function(){
    $("#underLine").html("Resume");
    $("#resume").html("前端工程师");
});
$(".conversion").mouseout(function(){
    $("#underLine").html("F2E");
    $("#resume").html("个人简历");
});
/**自我介绍线条 文字效果**/
$(".content").on("animationend webkitAnimationEnd",function(){
    $(this).css("width","800px");
});
/**关于我**/
$(".education:before").eq(0).css({"width":"20px"}).hide(2000);
/**摸态框**/
$("#frame").on("click",function(){
    $("#modal").fadeIn(700);
});
$("#close").on("click",function(){
    $("#modal").fadeOut(700);
});
$("#close1").on("click",function(){
    $("#modal").fadeOut(700);
    $("#frame a").html("查看留言")
});
$("#bt-login1").on("click",function(){
    $("#record").fadeOut(700);
    $("#record1").fadeIn(700);

})
/**接收留言**/
$("#bt-login").on("click",function(){

    var n = uname.value;
    var a = relation.value;
    var v = message.value;
    if( n === ''|a === ''|v === ''){
        alert("提交失败");
    }else{
        $.post('php/index2.php',{"uname":n,"relation":a,"message":v},function(){
            alert("提交成功");
            $("#uname").val("");
            $("#relation").val("");
            $("#message").val("");
        });
    }
});
/**查看留言**/
var time=function(T){
    return new Date(parseInt(T)).toLocaleString();
}
$("#bt-login2").on("click",function(){
    /**接收数据到HTML**/
    $.getJSON('php/index1.php',function(txt){
        var html = '';
        $.each(txt, function(i,q){
            html += `
                    <div id="integration">
                        <div class="entry1">
                            <div class="uname1">姓名：<a href="#">${txt[i].uname}</a></div>
                            <div class="relation1">联系方式：<a href="#">${txt[i].ulinkman}</a></div>
                        </div>
                        <div id="message1" >${txt[i].ucontent}</div>
                        <div class="time1">Time:${time(txt[i].utime)}</div>
                    </div>
            `;
        });
        $('#record>p').html(html);
    })
    $("#record1").fadeOut(700);
    $("#record").fadeIn(700);
});
