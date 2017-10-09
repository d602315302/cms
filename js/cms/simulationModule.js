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
    });

    //tab 切换
    $('.tabtitle li').click(function () {
        var index = $(this).index();
        $(this).attr('class',"tabhover").siblings('li').attr('class','taba');
        $('.tabcontent').eq(index).show().siblings('.tabcontent').stop('true').hide();
    });
    $('.tabcontent').each(function () {
        $(this).append('<div class="closeVnc"></div>');
    })

     //点击云主机 打开vnc页面 在页面添加关闭VNC按钮
    $('.tabcontent a').click(function () {
        var computerName=$(this).attr('computerName'),//当前云主机名字
            self=$(this);
        var index = layer.load(1, {
            shade: [0.1,'#000'] //0.1透明度的白色背景
        });
        $.ajax({
            type:"post",
            data:{"computerName":computerName},
            url:"../cloneComputer.do",
            dataType:"json",
            success:function(result){
                if(result["status"] == 1){
                    if(self.parent().hasClass('extract')){
                        self.parents().siblings('.closeVnc').append(`<button computerName=${computerName} class=closeBtn>关闭虚拟机</button>`);
                    }else{
                        self.siblings('.closeVnc').append(`<button computerName=${computerName} class=closeBtn>关闭虚拟机</button>`);
                    };
                    window.open('../novnc/vnc.html?computerName='+result.data.image_name);
                    layer.closeAll();
                }else{
                    layer.closeAll();
                    layer.msg('创建失败！')
                }
            }
        });

    })

    //点击关闭虚拟机
    $(document).on('click','.closeBtn',function () {
        var computerName=$(this).attr('computerName'),//要关闭VNCName
            _self=$(this);
        layer.confirm('是否删除虚拟机？', {
            btn: ['是的','取消'] //按钮
        }, function(){
            _self.remove();
            $.ajax({
                type:"post",
                data:{"computerName":computerName},
                url:"../destroyComputer.do",
                dataType:"json",
                success:function(result){
                    if(result["status"] == 1){

                    }
                }
            });
        });
    })
})

