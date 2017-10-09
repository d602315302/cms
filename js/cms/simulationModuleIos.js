/**
 * Created by zhang on 2017/9/11.
 */
$(function () {
    $(".tab-details").click(function () {
        $(this).siblings('.tab-content').slideDown('500');//同辈元素DIV显示
        $(this).parents('.simulation-tab').siblings().children('.tab-content').slideUp('500');
    })

    //点击图片大图
    $(document).on("click",".tab-content>p>span>img",function () {
        var imgWidth=$(this).attr('width'),//当前图片的宽度
            imgHight=$(this).attr('height'),//当前图片的高度
            _self=$(this);
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: imgWidth,
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img  src='+_self.attr('src')+' style=display: inline;>'
        });
    })
 
    
    //ios 模拟破解
    // 1 点击boot 弹出文件
    $("#boot").click(function () {
        var index=layer.confirm('Please choose iPhone2,1_5.0.0_9A405_Restore.ipsw', {
            title: 'Gecko iPhone Tools',
            btn: ['确定','取消'] //按钮
        }, function(){
            layer.close(index);
            //弹出选择文件
             layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: '679px',
                shadeClose: true,
                content: `<div class="simulation-file">
                            <button id="open">打开(O)</button>
                          </div>`
            });
        });
    })
    
    //2 关闭选择文件
    $(document).on("click",".simulation-file #open",function () {
        layer.closeAll();
        //打开next
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: '385px',
            shadeClose: true,
            content: `<div class="simulation-next">
                        <button id="next">Next</button>
                      </div>`
        });

        $('.cmd').show();
        $("#iosContent p:nth-child(2)").css('color','#1bbc9b');
        $("#iosContent p:nth-child(2)").siblings('p').css('color','#000');
    })

    // 3 next
    $(document).on("click",".simulation-next #next",function () {
        layer.closeAll();
        //打开next
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: '385px',
            shadeClose: true,
            content: `<div class="simulation-next1">
                        <button id="nextClose">X</button>
                      </div>`
        });
        $("#iosContent p:nth-child(3)").css('color','#1bbc9b');
        $("#iosContent p:nth-child(3)").siblings('p').css('color','#000');
    })

    //读取中间动画
    $(document).on("click",".simulation-next1 #nextClose",function () {
        layer.closeAll();
        $('.cmd').hide();
        $(".appleLogo").show(); //苹果LOGO显示
        $("#iosContent p:nth-child(4)").css('color','#1bbc9b');
        $("#iosContent p:nth-child(4)").siblings('p').css('color','#000');
        setTimeout(function () {
            $(".appleLogo").hide();
            $(".phoneGif").show();
        },3000);

        setTimeout(function () {
            $(".phoneGif").removeClass('flash1');
            $(".phoneGif").addClass('flash2');
        },8000)

    })
    
    //读取说明
    $("#Launch").click(function () {
        var file2=$(".phoneGif").hasClass('flash2');
        $("#iosContent p:nth-child(5)").css('color','#1bbc9b');
        $("#iosContent p:nth-child(5)").siblings('p').css('color','#000');
        if(!file2){
            layer.msg("请先点击Boot")
        }else{
            var index=layer.confirm('Please choose iPhone2,1_5.0.0_9A405_Restore.ipsw', {
                title: 'You can now safely enter your password',
                btn: ['确定','取消'] //按钮
            }, function(){
                layer.close(index);
                $(".phoneGif").removeClass('flash2');
                $(".phoneGif").addClass('flash3');
                $("#iosContent p:nth-child(6)").css('color','#1bbc9b');
                $("#iosContent p:nth-child(6)").siblings('p').css('color','#000');

                setTimeout(function () {
                    $(".IOSbox div:nth-child(1)").removeClass('simulationIos');
                    $(".IOSbox div:nth-child(1)").addClass('simulationIos1');
                    $(".phoneGif").removeClass('flash3');
                    $(".phoneGif").addClass('flash4');
                    $("#iosContent p:nth-child(7)").css('color','#1bbc9b');
                    $("#iosContent p:nth-child(7)").siblings('p').css('color','#000');
                },6000)
            });
        }

    })

    leftSteps();
   //左侧绑定事件
    function leftSteps() {
        //第一步
        $("#iosContent p:nth-child(1)").click(function () {
            location.reload();
        });

        //第二步
        $("#iosContent p:nth-child(2)").click(function () {
            $(this).css('color','#1bbc9b');
            $(this).siblings('p').css('color','#000');
            layer.open({
                type: 1,
                title: false,
                closeBtn: 0,
                area: '679px',
                shadeClose: true,
                content: `<div class="simulation-file">
                            <button id="open">打开(O)</button>
                          </div>`
            });
        });

        //第三步
        $("#iosContent p:nth-child(3)").click(function () {
            $(this).css('color','#1bbc9b');
            $(this).siblings('p').css('color','#000');
            $(".appleLogo").show(); //苹果LOGO显示
            setTimeout(function () {
                $(".appleLogo").hide();
                $(".phoneGif").show();
            },3000);

        });

        //第五步
        $("#iosContent p:nth-child(5)").click(function () {
            $(this).css('color','#1bbc9b');
            $(this).siblings('p').css('color','#000');
            var file2=$(".phoneGif").hasClass('flash2');
            if(!file2){
                layer.msg("请先点击Boot")
            }else{
                var index=layer.confirm('Please choose iPhone2,1_5.0.0_9A405_Restore.ipsw', {
                    title: 'You can now safely enter your password',
                    btn: ['确定','取消'] //按钮
                }, function(){
                    layer.close(index);
                    $(".phoneGif").removeClass('flash2');
                    $(".phoneGif").addClass('flash3');
                    $("#iosContent p:nth-child(6)").css('color','#1bbc9b');
                    $("#iosContent p:nth-child(6)").siblings('p').css('color','#000');

                    setTimeout(function () {
                        $(".IOSbox div:nth-child(1)").removeClass('simulationIos');
                        $(".IOSbox div:nth-child(1)").addClass('simulationIos1');
                        $(".phoneGif").removeClass('flash3');
                        $(".phoneGif").addClass('flash4');
                        $("#iosContent p:nth-child(7)").css('color','#1bbc9b');
                        $("#iosContent p:nth-child(7)").siblings('p').css('color','#000');
                    },6000)
                });
            }

        });
    }

})