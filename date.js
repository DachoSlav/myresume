$(document).ready(function () {
      

    var html = new Date("8/1/2018");
    var css = new Date("8/1/2018"); 
    var scss = new Date("3/5/2021"); 
    var js = new Date("8/1/2019"); 
    var jq = new Date("3/5/2020"); 
    var bs = new Date("3/5/2021"); 
    var re = new Date("4/5/2021"); 

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getUTCMonth()+1;

function htmlExp() {
    var monthsFromYears = Math.abs(html.getFullYear() - year)* 12;
    var months = Math.abs(html.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    
    if(difference < 0){
        document.querySelector(".html-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".html-exp").innerHTML = difference + "+ years";
    }
}
function cssExp() {
    var monthsFromYears = Math.abs(css.getFullYear() - year)* 12;
    var months = Math.abs(css.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".css-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".css-exp").innerHTML = difference + "+ years";
    }
}
function scssExp() {
    var monthsFromYears = Math.abs(scss.getFullYear() - year)* 12;
    var months = Math.abs(scss.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".scss-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".scss-exp").innerHTML = difference + "+ years";
    }
}
function jsExp() {
    var monthsFromYears = Math.abs(js.getFullYear() - year)* 12;
    var months = Math.abs(js.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".js-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".js-exp").innerHTML = difference + "+ years";
    }
}
function jqExp() {
    var monthsFromYears = Math.abs(jq.getFullYear() - year)* 12;
    var months = Math.abs(jq.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".jq-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".jq-exp").innerHTML = difference + "+ years";
    }
}
function bsExp() {
    var monthsFromYears = Math.abs(bs.getFullYear() - year)* 12;
    var months = Math.abs(bs.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".bs-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".bs-exp").innerHTML = difference + "+ years";
    }
}
function reExp() {
    var monthsFromYears = Math.abs(re.getFullYear() - year)* 12;
    var months = Math.abs(re.getMonth()-month);
    var difference = Math.floor((monthsFromYears + months)/12);
    console.log(difference)
    if(difference == 0){
        document.querySelector(".re-exp").innerHTML = monthsFromYears + months + "+ months";
    }else{
        document.querySelector(".re-exp").innerHTML = difference + "+ years";
    }
}

htmlExp();
cssExp();
scssExp();
jsExp();
jqExp();
bsExp();
reExp();
})

