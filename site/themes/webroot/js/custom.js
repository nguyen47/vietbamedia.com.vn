$(window).on('load',function(){
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 150,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });

      // slider patner

      $('#patner-slider').flexslider({
	    animation: "slide",
	    animationLoop: false,
	    itemWidth: 80,
	    itemMargin: 5,
	    minItems: 1,
	    maxItems: 5
	  });

      // slider customer
      	$('#customer-slider').flexslider({
		    animation: "slide"
		});
		$('#patner-left').flexslider({
		    animation: "slide"
		});

		$('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 250,
		    itemMargin: 30,
		    minItems: 1,
		    maxItems: 4
		 });
});

$(function () {
		$.fn.andSelf = function() {
		  return this.addBack.apply(this, arguments);
		}
    		var owl = $('.owl-carousel');
		      owl.owlCarousel({
		        margin: 10,
		        loop: true,
		        autoplay:true,
		        autoplayTimeout: 2000,
		        nav : true,
		        animateOut: 'slideOutUp',
  				animateIn: 'slideInUp',
		        navText: [
			      "<i class='fa fa-chevron-left'></i>",
			      "<i class='fa fa-chevron-right'></i>"
			      ],
			    smartSpeed: 600,
		        responsive: {
		          0: {
		            items: 1
		          },
		          600: {
		            items: 2
		          },
		          1000: {
		            items: 4
		          }
		        }
		      });		

			$('.carousel').carousel({
              interval: 8000
          	});

			// click button navbar-toggler
			$(".navbar-toggler").click(function() {
				$(".wraper").toggleClass('menu-mobile');
			});

			if($('.menu-sub').hasClass('menu-sub')){
            	$('.menu-sub').before('<span class="open"><i class="fa fa-angle-right" aria-hidden="true"></i></span>');
            };
            if($('.dropdown-menu').hasClass('dropdown-menu')){
            	$('.dropdown-menu').before('<span class="open"><i class="fa fa-angle-right" aria-hidden="true"></i></span>');
            };
            if($('.dropdown-menu1').hasClass('dropdown-menu1')){
            	$('.dropdown-menu1').before('<span class="open"><i class="fa fa-angle-right" aria-hidden="true"></i></span>');
            };
            
            $(".open").click(function() {
            	$(this).next().toggleClass('show')
            	// $(".menu-sub").toggleClass('show');
            	$(".wraper").toggleClass('menu-wraper');
			});
			$(".close").click(function() {
            	// $(this).toggleClass('show')
            	$(".menu-sub").removeClass('show');
            	$(".menu-wraper").removeClass('menu-wraper');
			});
			

      	 	$('span.button').click(function() {
      	 		/* Act on the event */
      	 		$(".form-search .form-control").toggle('slow');
      	 	});
      	 	$('#description').tab('show');

		        var flat = $("#carousel").flipster({
			        style: 'carousel',
			        spacing: -0.5,
			        loop:true,
			        buttons: 'custom',
			        start: 'center',
			        autoplay: 2000,
			        buttonPrev: '<span><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>',
			        buttonNext: '<span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>'
			    });

		        // $( ".navbar-nav .nav-item .menu-sub li" ).first().addClass('active');

		        var li = $( ".navbar-nav .nav-item .menu-sub li" ).first() ;

		        $( ".contact-add li a" ).click(function(){
		        	$('.contact-add li a').removeClass('active');
		        });
			    $( ".navbar-nav .nav-item .menu-sub li a" ).hover(function() {
			    	   if($(li).hasClass('active')){
				        	$(li).removeClass('active');
				        }else{
				        	$(li).addClass('active');
				        }
				       $(this).toggleClass( "acitve" );
				});
		        
		        if($(li).hasClass('active')){
		        	$(li).removeClass('active');
		        }else{
		        	$(li).addClass('active');
		        }

		        // show, hide sub-menu  
		          $(".navbar-nav  .menu-sub li span.open").click(function(){
		            $(this).removeClass("uk-open");
		            $(".dropdown-menu1").slideUp("fast");
		            if(!$(this).next().is(':visible')){
		              $(this).next().slideDown("fast");
		              $(this).addClass("uk-open");
		            }
		          });
		          
		          $(".nav-item span.open").on("click", function(e){
    				$(this).next('ul').toggle(300);
				});

		         // paralax scoll page
					$('.navigation a').click(function(e){
						e.preventDefault();
						old_ps = $(window).scrollTop();
					    $('.on').removeClass('on');
					    el = $(this);
					    name = el.attr('href'); //lấy giá trị bên trong thuộc tính href của thẻ a
					    pos = $(name).position().top; //lấy vị trí của phần với biến name
					    el.addClass('on');
					    var body = $('html,body');

					    if(old_ps < pos){
					    	body.animate({scrollTop:pos + 150},600, 'swing', function() {});
					    }else{
					    	body.animate({scrollTop:pos - 150},600, 'swing', function() {});
					    }
					    body.animate({scrollTop:pos},800,'swing');
					    old_ps = pos;
					    // return false;
					});

					  var TopFixMenu = $(".navbar-bottom");
					  // Lấy chiêu dài của chiều trình duyệt khi scroll
					    $(window).scroll(function(){
					    // Nếu cuộn được hơn 20px.
					        if($(this).scrollTop()>20){
					      // Tiến hành show menu ra
					        TopFixMenu.addClass("menu-fixed").fadeIn("slow");
					        }else{
					      // Ngược lại, nhỏ hơn 20px thì hide menu đi.
					          TopFixMenu.removeClass("menu-fixed").fadeIn("slow");
					    }});

});