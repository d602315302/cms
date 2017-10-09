// 登陆
$('#signbtn').click(function () {
    var loginName = $('#user').val(),
        password = $("#password").val(),
        code = $(".yzm").val();
    if (!code) {
        layer.msg('验证码不能为空');
    } else if (!loginName) {
        layer.msg('账户名不能为空');
    } else if (!password) {
        layer.msg('密码不能为空');
    } else {
        login(loginName, password, code);
    }
});

// 注册
$('#regbtn').click(function () {
    var loginName = $('#reguser').val(),
        password = $("#regpassword").val(),
        rePassword = $("#regpassword1").val(),
        code = $(".yzm").val();
    if (!code) {
        layer.msg('验证码不能为空');
    } else if (!loginName) {
        layer.msg('账户名不能为空');
    } else if (loginName.length > 40) {
        layer.msg('账户名过长');
    } else if (!password) {
        layer.msg('密码不能为空');
    } else if (!rePassword) {
        layer.msg('重复密码不能为空');
    } else if (password !== rePassword) {
        layer.msg('两次输入的密码不一致！');
    } else {
        register(loginName, password, rePassword, code);
    }
});

//登陆跳转
$("#forsign").click(function () {
    $('#container').load('sign.html');
    $('title').text('登陆');
});

//注册跳转
$("#forregistered").click(function () {
    $('#container').load('registered.html');
    $('title').text('注册');
});

//获取验证码图片
function getImgCode() {
    var img = document.getElementById("imgCode");
    img.src = "../authImage?date=" + new Date();
}

//登录
function login(loginName, password, code) {
    $.ajax({
        type: "post",
        url: "../index/login.do",
        data: {loginName: loginName, password: password, verCode: code},
        dataType: "json",
        success: function (result) {
            if (result["status"] === 1) {
                layer.msg("登陆成功");
                var keep = result["data"]["keep"];
                var user = result["data"]["user"];
                var userName = result["data"]["userName"];
                var userIcon = result["data"]["userIcon"];
                $.cookie("keep", keep, {path: "/"});
                $.cookie("user", user, {path: "/"});
                $.cookie("userName", userName, {path: "/"});
                $.cookie("userIcon", userIcon, {path: "/"});
                window.location.reload();
            } else {
                layer.msg(result["msg"]);
                getImgCode();
            }
        }
    })
}

// 注册
function register(loginName, password, rePassword, code) {
    $.ajax({
        type: "post",
        url: "register.do",
        data: {loginName: loginName, password: password, rePassword: rePassword, code: code},
        dataType: "json",
        success: function (result) {
            if (result["status"] === 1) {
                layer.msg("注册成功");
                var keep = result["data"]["keep"];
                var user = result["data"]["user"];
                var userName = result["data"]["userName"];
                var userIcon = result["data"]["userIcon"];
                $.cookie("keep", keep, {path: "/"});
                $.cookie("user", user, {path: "/"});
                $.cookie("userName", userName, {path: "/"});
                $.cookie("userIcon", userIcon, {path: "/"});
                window.location.reload();
            } else {
                layer.msg(result["msg"]);
            }
        }
    })
}