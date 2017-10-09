$(function(){
    //视频不自动播放
    var myPlayer = videojs('example_video_1');
    
    videojs("example_video_1").ready(function(){
        var myPlayer = this;
        myPlayer.pause();
    });

 
    

});