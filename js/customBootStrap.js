/* global $ , jQuery , alert */
$(document).ready(function(){
    
    $('.carousel').carousel({
        interval:3000   
    });
    
    // edit Color Options 
    
    $(".myGear").click(function(){
                "user strict";

        $(".colorOption").fadeToggle();
    })
    
    var colorLi =    $(".colorOption ul li");
    
    colorLi
    .eq(0).css("background-color","#e41b17").end()
    .eq(1).css("background-color","#e426d5").end()
    .eq(2).css("background-color","#fff400").end()
    .eq(3).css("background-color","#009aff").end();
    
    colorLi.click(function(){
        
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        
    });
    
    // Loading Page 
    
    $(window).load(function(){
        "user strict";
                    $("body").css("overflow","auto");

        $(".loadingPage").fadeOut(2000,function(){
            

            $(this).remove()
            
        }   );
    });
    
    
    // Scroll Top Button
    
    
    $(window).scroll(function(){
                "user strict";

        console.log($(this).scrollTop());
        
        if ( $(this).scrollTop() >= 420)
            {
                $(".scrollTop").fadeIn(1000)
            }
        else{
            
            $(".scrollTop ").fadeOut(1000)
        }
        
    })
    
    $(".scrollTop").click(function(){
                "user strict";

        $("body,html").animate({scrollTop: 0} , 1000);
    });
    
    
    
    // Nice Scrolle 
        $("html").niceScroll();

    
});

