

$(document).ready(function(){
    var html=1;
    $(".html-div").hover(function none() {
        
    if(html==1){
        $(".html-photo").css("display", "none");
        $(".html-front-page").addClass("html-back-page")
        $(".html-the-back").css("display", "block")
        

        return html = 0;
    }else{
        $(".html-photo").css("display" , "block");
        $(".html-front-page").removeClass("html-back-page");
        $(".html-the-back").css("display", "none")
        
        
        return html = 1;
    }
        
    });
    var css=1;
    $(".css-div").hover(function none() {
        
    if(css==1){
        $(".css-photo").css("display", "none");
        $(".css-front-page").addClass("css-back-page")
        $(".css-the-back").css("display", "block")
        

        return css = 0;
    }else{
        $(".css-photo").css("display" , "block");
        $(".css-front-page").removeClass("css-back-page");
        $(".css-the-back").css("display", "none")
        
        
        return css = 1;
    }
        
    });

    var scss=1;
    $(".scss-div").hover(function none() {
        
    if(scss==1){
        $(".scss-photo").css("display", "none");
        $(".scss-front-page").addClass("scss-back-page")
        $(".scss-the-back").css("display", "block")
        

        return scss = 0;
    }else{
        $(".scss-photo").css("display" , "block");
        $(".scss-front-page").removeClass("css-back-page");
        $(".scss-the-back").css("display", "none")
        
        
        return scss = 1;
    }
        
    });

    var js=1;
    $(".js-div").hover(function none() {
        
    if(js==1){
        $(".js-photo").css("display", "none");
        $(".js-front-page").addClass("scss-back-page")
        $(".js-the-back").css("display", "block")
        

        return js = 0;
    }else{
        $(".js-photo").css("display" , "block");
        $(".js-front-page").removeClass("css-back-page");
        $(".js-the-back").css("display", "none")
        
        
        return js = 1;
    }
        
    });

    var jq=1;
    $(".jq-div").hover(function none() {
        
    if(jq==1){
        $(".jq-photo").css("display", "none");
        $(".jq-front-page").addClass("scss-back-page")
        $(".jq-the-back").css("display", "block")
        

        return jq = 0;
    }else{
        $(".jq-photo").css("display" , "block");
        $(".jq-front-page").removeClass("css-back-page");
        $(".jq-the-back").css("display", "none")
        
        
        return jq = 1;
    }
        
    });

    var bs=1;
    $(".bs-div").hover(function none() {
        
    if(bs==1){
        $(".bs-photo").css("display", "none");
        $(".bs-front-page").addClass("scss-back-page")
        $(".bs-the-back").css("display", "block")
        

        return bs = 0;
    }else{
        $(".bs-photo").css("display" , "block");
        $(".bs-front-page").removeClass("css-back-page");
        $(".bs-the-back").css("display", "none")
        
        
        return bs = 1;
    }
        
    });

    var re=1;
    $(".re-div").hover(function none() {
        
    if(re==1){
        $(".re-photo").css("display", "none");
        $(".re-front-page").addClass("scss-back-page")
        $(".re-the-back").css("display", "block")
        

        return re = 0;
    }else{
        $(".re-photo").css("display" , "block");
        $(".re-front-page").removeClass("css-back-page");
        $(".re-the-back").css("display", "none")
        
        
        return re = 1;
    }
        
    });



    
});