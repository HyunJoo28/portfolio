 $(document).ready(function(){
     
    
//////////////////////////////*모바일체트 구문/////////////////////////////////
     
     var isMobile = false; //initiate as false
     
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
	isMobile = true;
}
        
//////////////////////////////*스크롤다운_애니메이션*////////////////////////////
        
        $("article.atc_visual > div.scroll > div > span:nth-of-type(1)").addClass("animation");
        var scroll_second = setTimeout(function(){
            $("article.atc_visual > div.scroll > div > span:nth-of-type(2)").addClass("animation");
        }, 500);
        
////////////////////////////////////*헤더영역*///////////////////////////////// 
 

        var header = $("header");
        var art_aboutme_top = $("article.atc_aboutme").offset().top -200
        
        scroll_move();
        $(window).scroll(function(){
    
            scroll_move();

        });

        function scroll_move(){
            var docScrollY = $(document).scrollTop();

            if( docScrollY > art_aboutme_top) {
                header.addClass("black");
            }else{
                header.removeClass("black");
            }
        }
        

///////////////////////////////*네비게이션*/////////////////////////////////////
     
        var nav_list = $("nav > ul > li > a");
        var header_height = $("header").height();
        var nav_status = false; 

        $("header > div.header > a").click(function(e){
            e.preventDefault();
            if(!nav_status){
                nav_status = true;
                $(this).addClass("active")
                $("header > nav").addClass("on");
                $('body').css("overflow","hidden");
            }else{
                nav_Off();
            }
        });
         
        function nav_Off(){
            nav_status = false;
            $("header > div.header > a").removeClass("active")
            $("header > nav").removeClass("on");
            $('body').css("overflow","auto");
        };

        nav_list.on("click",function(e){
            e.preventDefault();
            nav_Off();
            //href 속성을 통해, article id 타겟을 잡음
            var target =$($(this).attr('href'));
            if(isMobile){
                $("html, body").animate({
                    scrollTop: target.offset().top-header_height
                },600);
            }else if(!isMobile){
                $("html, body").animate({
                    scrollTop: target.offset().top-100
                },600);
            }
        });      
   
///////////////////////////////////*비주얼영역*//////////////////////////////////

        var main_title_on = setTimeout(function(){
            $("div.visual_title > p.main_title").addClass("on");
        }, 1500)


///////////////////////////////////*AboutMe*//////////////////////////////////
        
        
        
        
///////////////////////////////////*포트폴리오*//////////////////////////////////
        
        var tab_transition = false;

        $("ul.tab > li").click(function(e){
            e.preventDefault();
            if(tab_transition || $(this).hasClass("active")){return;} 
            
            $("ul.tab > li").removeClass("active");
            $(this).addClass("active");
            tab_transition = true;
            var category = $(this).attr('id');
            console.log(category);
			
			
            $("ul.contents > li").removeClass("active");
			$("ul.contents > li").fadeOut(0, function(){
				  if(category === "all"){
						$("ul.contents > li").css("display","block").addClass("active");  
				  var active = setTimeout(function(){
					tab_transition = false;  
				  }, 300);
        
				  }else{
						var test = $('ul.contents').find('li[data-tab="'+category+'"]').addClass("active").css("display","block");
						var active = setTimeout(function(){
							tab_transition = false;  
						}, 300);
				  }			
			});
 
        });
        
/////////////////////////////////////*아트웍*////////////////////////////////////

       var artwork_count = 3;
       var art_works = $("div.form > a");
       var paginations = $("ul.paginations > li");
       var slide_Event = false;

       $("div.form > a.prev").hide();
        
        $("a.slide_next").on("click", function(e){
			if(slide_Event== true) return false;
			slide_Event = true;
			e.preventDefault();
			count_plus();
		});
		$("a.slide_prev").on("click", function(e){
			if(slide_Event == true) return false;
			slide_Event = true;
			e.preventDefault();
			count_minus();
        });
        
        function count_plus(){
            artwork_count = artwork_count == art_works.length - 1 ? 0 : artwork_count + 1;
            pagination_change(artwork_count);
            slide_img(artwork_count, "all 0.4s");
            console.log(artwork_count);
	    }
	    function count_minus(){
            artwork_count = artwork_count == 0 ? art_works.length - 1 : artwork_count - 1;
            pagination_change(artwork_count);
            slide_img(artwork_count, "all 0.4s");
            console.log(artwork_count);
        }
     
        if(isMobile){
                
            $(".slide").on("swipeleft", function(e){
                e.preventDefault();
                count_plus();
            });
            $(".slide").on("swiperight", function(e){
                e.preventDefault();
                count_minus();
            });
        }
        function slide_img(count, transition_val){
            var next_num = artwork_count == art_works.length - 1 ? 0 : artwork_count + 1;
            var standby_num = artwork_count == art_works.length - 2 ? 0 : next_num + 1;
            var prev_num = artwork_count == 0 ? 3 : artwork_count - 1;
            $("div.form > a.prev").show(0, function(){
                art_works.removeClass().css("transition", "none");
                art_works.eq(prev_num).addClass("prev").css("transition",transition_val);
                art_works.eq(count).addClass("cur").css("transition",transition_val);
                art_works.eq(next_num).addClass("next").css("transition", transition_val);
                art_works.eq(standby_num).addClass("standby").css("transition", transition_val);
                var st_01 = setTimeout(function(){
                    art_works.eq(prev_num).hide();
                    slide_Event = false;
                }, 300);
            })
        }
		count_plus();
        
        function pagination_change(num){
            paginations.removeClass("sel");
            paginations.eq(num).addClass("sel");
        }

/////////////////////////////////////*모달팝업*///////////////////////////////////
        
        
        var modal_cnt = 0;
    
        art_works.on("click", function(e){
            e.preventDefault();
            modal_cnt = $(this).index();
            var src = $(this).children("img").attr("src");
            var alt = $(this).children("img").attr("alt");
            console.log(src,alt);
            $(".modal_popup").show(0);
            $(".modal_popup > div > img").attr("src", src).attr("alt",alt).delay(200).fadeIn(200, function(){
                    $(".modal_popup > a").show(0);
            });
        })
        $(".modal_popup > a.close").on("click", function(e){
            e.preventDefault();
            $(".modal_popup > div > img").hide(0);
            $(this).hide(0);
            $(".modal_popup").hide(0);
        });
        
        
        function show_modalImage(index){
            var src = art_works.eq(index).children("img").attr("src");
            var alt = art_works.eq(index).children("img").attr("alt");
            $(".modal_popup > div > img").attr("src", src).attr("alt",alt).fadeIn(200, function(){
                
            });
            
        }
        
        $(".modal_popup > a.modal_right").on("click", function(e){
            e.preventDefault();
            modal_cnt++;
            if(modal_cnt == art_works.length){
                modal_cnt= 0;
            }
            show_modalImage(modal_cnt);
       
            
        });
        $(".modal_popup > a.modal_left").on("click", function(e){
            e.preventDefault();
            if(modal_cnt == 0){
                modal_cnt= art_works.length -1;
            }else{  
                modal_cnt--;  
            }
            show_modalImage(modal_cnt);

        });
        


    });
    