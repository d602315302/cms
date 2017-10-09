 $(function () {
    //载入主页面
    getLocationSearch()
    function getLocationSearch(){
        var search=window.location.search.substr(6);
        $('#container').load(search+'.html');
    }

    // 门户
    $("#thePortal").on("click",function () {
        window.open('http://'+window.location.host+'/homePage.html?name=home');
    });

    //私有云
    $("#privateClouds").on("click",function () {
        window.open('http://'+window.location.host+'/homePage.html?name=privateCloudSystem');
    });
    //教务系统
    $("#educationalAdministrationSystem").on("click",function () {
        window.open('http://'+window.location.host+'?name=educationalAdministrationSystem');
    });
    //实训系统
    $("#trainingSystem").on("click",function () {
        window.open('http://'+window.location.host+'/homePage.html?name=trainingSystem');
    });

    //主页载入私有云
    $("#home-privateCloudSystem").on("click",function () {
        $('#container').load('privateCloudSystem.html');
        $('.shufflingFigure').show();
        $('title').text('私有云系统');
    });
     
    //主页载入实训系统
    // $("#home-trainingSystem").on("click",function () {
    //     $('#container').load('trainingSystem.html');
    //     $('.shufflingFigure').show();
    //     $('title').text('实训系统');
    // });

    //仿真系统
    $("#simulationSystem").on("click",function () {
        window.open('http://'+window.location.host+'/homePage.html?name=simulationSystem');
    });

    //登陆
    $(document).on("click", "#sign", function () {
        $('#container').load('sign.html');
        $('.shufflingFigure').hide();
        $('title').text('登陆');
    })

    //注册
    $(document).on("click", "#registered", function () {
        $('#container').load('registered.html');
        $('.shufflingFigure').hide();
        $('title').text('注册');
    })

    //主页面
    $("#home").click(function () {
        $('#container').load('home.html');
        $('.shufflingFigure').show();
        $('title').text('电子数据鉴定仿真实训平台');
    })

    //证书查询
    $("#query").click(function () {
        $('#container').load('query.html');
        $('.shufflingFigure').hide();
        $('title').text('证书查询');
    })

    //新闻资讯
    $("#newsInformation").click(function () {
        $('#container').load('home.html');
        $('.shufflingFigure').show();
        setTimeout(function(){
            window.location.href = "#newsList";
        },100)
        $('title').text('新闻资讯');
    })

    //仿真模块
    $("#home-simulationModule").click(function () {
        $('#container').load('simulationSystem.html');
        $('title').text('仿真模块');
    })

    //主页轮播图点击图片进入对应页面
    $(".item img").click(function(){
        var url=$(this).attr('alt');
        $('#container').load(url+'.html');
    })

    $("#home-trainingSystem").click(function () {
        var keep = getCookie("keep");
        if(keep){
            window.location.href = "../homePage.html?name=home"
        } else {
            layer.msg("登陆后才能使用本系统，请点击页面左上角登陆")
        }
    })

 });