$(function(){
    $('.img-list > li > a').on('click',function(){
        //e.preventDefault();
        var src=$(this).children().attr('src');
        $('.main-photo > img').attr('src',src);

        })

});

//로딩 준비 완료
window.onload =function(){
    setTimeout(function(){
        $('.splash-screen').removeClass('on');
    },2000)
}