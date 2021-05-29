$(document).ready(function(){

    var html = new Date("8/1/2018");
    var css = new Date("8/1/2018"); 
    var scss = new Date("3/5/2021"); 
    var js = new Date("8/1/2019"); 
    var jquery = new Date("3/5/2020"); 
    var bs = new Date("3/5/2021"); 
    var react = new Date("4/5/2021"); 

    var d2 = new Date();
    var year = d2.getFullYear();
    var month = d2.getUTCMonth()+1;
    //html
    if(html.getFullYear() == year){
        if(html.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(html.getMonth()+1,  month);
        var SmallerMonth = Math.min(html.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("html-exp").innerHTML = difference + "+months";;
        }
        console.log("done")
    }
    else{
        var BiggerYear = Math.max(html.getFullYear(), year);
        var SmallerYear = Math.min(html.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("html-exp").innerHTML = difference + "+years";
        
    }

    //css
    if(css.getFullYear() == year){
        if(css.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(css.getMonth()+1,  month);
        var SmallerMonth = Math.min(css.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("css-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(css.getFullYear(), year);
        var SmallerYear = Math.min(css.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("css-exp").innerHTML = difference + "+years";
        
    }
    //scss
    if(scss.getFullYear() == year){
        if(scss.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(scss.getMonth()+1,  month);
        var SmallerMonth = Math.min(scss.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("scss-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(scss.getFullYear(), year);
        var SmallerYear = Math.min(scss.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("scss-exp").innerHTML = difference + "+years";
        
    }

    //js
    if(js.getFullYear() == year){
        if(js.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(js.getMonth()+1,  month);
        var SmallerMonth = Math.min(js.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("js-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(js.getFullYear(), year);
        var SmallerYear = Math.min(js.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("js-exp").innerHTML = difference + "+years";
        
    }

    //jquery
    if(jquery.getFullYear() == year){
        if(jquery.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(jquery.getMonth()+1,  month);
        var SmallerMonth = Math.min(jquery.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("jq-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(jquery.getFullYear(), year);
        var SmallerYear = Math.min(jquery.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("jq-exp").innerHTML = difference + "+years";
        
    }
    //bootstrap
    if(bs.getFullYear() == year){
        if(bs.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(bs.getMonth()+1,  month);
        var SmallerMonth = Math.min(bs.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("bs-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(bs.getFullYear(), year);
        var SmallerYear = Math.min(bs.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("bs-exp").innerHTML = difference + "+years";
        
    }


    //react
    if(react.getFullYear() == year){
        if(react.getMonth()+1 == month){
        }else{
        var BiggerMonth = Math.max(react.getMonth()+1,  month);
        var SmallerMonth = Math.min(react.getMonth()+1, month);
        var difference = BiggerMonth - SmallerMonth;
        document.getElementById("re-exp").innerHTML = difference + "+months";;
        }
    }
    else{
        var BiggerYear = Math.max(react.getFullYear(), year);
        var SmallerYear = Math.min(react.getFullYear(), year);
        var difference = BiggerYear - SmallerYear;
        document.getElementById("re-exp").innerHTML = difference + "+years";
        
    }
        

});
var a;
function display(){
if(a==1){
    document.getElementById("navbarNav").style.display = "none";    
    return a=0;
}else{
    document.getElementById("navbarNav").style.display = "block";
    $(".about-me").click(function(){
        document.getElementById("navbarNav").style.display = "none";
    })
    $(".contact").click(function(){
        document.getElementById("navbarNav").style.display = "none";
    })
    $(".experience").click(function(){
        document.getElementById("navbarNav").style.display = "none";
    })
    return a=1;
}

}