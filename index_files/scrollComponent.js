var time;
var lastInterval = 0;
var interval= 200;

$(document).scroll(function(){
    
    time = new Date().getTime();
    lastInterval=time;

});

$(document).ready(function(){

    // By Eduardo Alvarado <eduardoalvara2@gmail.com>
    // 20 de Agosto de 2016

    var height = 0;
    var obj;
    var scroll;
    
    var cont=0;

    setInterval(function(){

        time = new Date().getTime();
        
        cont++;

        if(time>lastInterval+interval){
            lastInterval=time;

            height = $(window).height()+1;

            obj=$("html, body");
            scroll=$(window).scrollTop();
            stickScroll(height,obj, scroll);

            obj=$(".row:nth-child(2) .rightSide");
            scroll=obj.scrollTop();
            
            if($(window).width() > 768){
                stickScroll(height,obj, scroll);
            }else{
                stickScroll(height*0.8,obj, scroll);
            }
        }

    },interval);


});


function stickScroll(height, object, scroll){

    var move = false;
    var moveTo = 0;
    var range = height*0.49; //px
    
    if(between(scroll, 0, 0+range) && scroll !=0){
        move = true;        
        moveTo = 0;
    }
    if(between(scroll, height-range, height+range) && scroll !=height){
        move = true;        
        moveTo = height;
    }
    if(between(scroll, (height*2)-range, (height*2)+range) && scroll !=height*2){
        move = true;
        moveTo = height*2;
    }
    if(between(scroll, (height*3)-range, (height*3)+range) && scroll !=height*3){
        move = true;
        moveTo = height*3;
    }
    if(between(scroll, (height*4)-range, (height*4)+range) && scroll !=height*4){
        move = true;
        moveTo = height*4;
    }

    if(move){
        object.animate({
            scrollTop:moveTo
        });
    }
}


//Helper
function between(val, min, max){
    var result = false;

    if((min < val) && (val < max)){
        result = true;
    }

    return result;
}

function goTo(num){
    time = new Date().getTime();
    lastInterval=time;

    var height = $(window).height()+1;
    var moveTo = 0;

    moveTo = height*num;

    $("html, body").animate({
        scrollTop:moveTo
    },interval);
}