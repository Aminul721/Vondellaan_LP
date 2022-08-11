(function(jQuery){
	jQuery(window).on('load', function() {
		(function($) {
			handlePreloader()
		})(jQuery);
	});
	function handlePreloader() {
		if(jQuery('.preloader').length){
			jQuery('body').removeClass('active-preloader-ovh');
			jQuery('.preloader').fadeOut();
		}
	};
})(jQuery);

jQuery(window).scroll(function(){
	// var headerTOPH = jQuery('.combaind_header').height();
 //    var headerBTN_H = jQuery('.banner_right .about_more_btn_wrap').height();
 //    var visible_offH = jQuery('.banner_right .about_more_btn_wrap').offset().top;

 //    if(matchMedia('only screen and (max-width: 991px)').matches) {
	//     var headerBTN_H = jQuery('.banner_left').height();
	//     var visible_offH = jQuery('.banner_left').offset().top;
	// }
 //    var Header_scrollTop = jQuery(this).scrollTop() + headerTOPH - headerBTN_H;
 //    if (( Header_scrollTop > visible_offH )) {
 //        jQuery('.combaind_header').addClass('WTHmanage');
 //    }else {
 //        jQuery('.combaind_header').removeClass('WTHmanage');
 //    }


	// var visible_offH = jQuery('.combaind_banner_area').offset().top;
	// var visible_offH2 = jQuery('.ontvang_areaVCommon .orange_button_wrap').offset().top;

	// var visible_innerH = jQuery('.combaind_banner_area').height();
	// var visible_innerH2 = jQuery('.ontvang_areaVCommon .orange_button_wrap').height();

	// var scree_vh = jQuery(window).height();
	// var scrollTop = jQuery(this).scrollTop();

	// // offset top form scree height positiive
	// var total_h_header_innH = visible_offH + visible_innerH;
	// var total_h_header_innH2 = visible_offH2 + visible_innerH2;

	// // offset top form scree height nagetive
	// var total_h_header = visible_offH - scree_vh;
	// var total_h_footer = visible_offH2 - scree_vh;


	// if (( scrollTop > total_h_header && scrollTop < total_h_header_innH )  || ( scrollTop > total_h_footer && scrollTop < total_h_header_innH2 )) {
	// // if (( scrollTop > total_h_header )  || ( scrollTop > total_h_footer )) {
	// 	jQuery('.combaind_header').addClass('showHidden');
	// }else {
	// 	jQuery('.combaind_header').removeClass('showHidden');
	// }


  // console.log(
  //   'visible_offH2:' + visible_offH2, '\n',
  //   'visible_innerH2:' + visible_innerH2, '\n',
  //   'total_h_header_innH2:' + total_h_header_innH2, '\n',
  //   'total_h_footer:' + total_h_footer, '\n',
  //   'scrollTop:' + scrollTop, '\n',
  //   );



    // console.log(
    //     'headerTOPH:' + headerTOPH, '\n', 
    //     'visible_offH:' + visible_offH, '\n', 
    //     'Header_scrollTop:', + Header_scrollTop, '\n', 
    // );
});

jQuery(".menu_bar").click(function() { 
	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideDown('slow'); 
});
jQuery(".menu_close").click(function() { 
	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
	jQuery('.mobile_menu').slideUp('slow'); 
});

// (function($){
// 	jQuery( ".toggle_view_item h4" ).click(function(e) {
// 		if(jQuery(this).hasClass('active')) {
// 		} else {
// 			$( ".toggle_view_item h4" ).each(function() {
// 				if(jQuery(this).hasClass('active')) {
// 					jQuery(this).toggleClass('active');
// 					jQuery(this).next('.show_details').slideToggle('hide');
// 				}
// 			});
// 		}
// 		jQuery(this).toggleClass('active');
// 		jQuery(this).next('.show_details').slideToggle('slow');
// 		e.preventDefault();
// 	});
// })(jQuery);

// jQuery(function(){
// 	jQuery('.testimonials_carousel').owlCarousel({
// 		loop:false,
// 		margin: 0,
// 		items: 3,
// 		nav:true,
// 		dots:true,
// 		responsiveClass:true,
// 		responsive:{
// 			0:{
// 				items:1,
// 			},
// 			992:{
// 				items:3,
// 			},
// 		}
// 	});

// 	jQuery('.portfolio_carousel').owlCarousel({
// 		loop:false,
// 		margin: 0,
// 		items: 3,
// 		nav:true,
// 		dots:true,
// 		responsiveClass:true,
// 		responsive:{
// 			0:{
// 				items:1,
// 			},
// 			992:{
// 				items:3,
// 			}
// 		}
// 	});
// });

// (function($){
//     $(".default_option").click(function () {
//       $(this).parent().toggleClass("active");
//     });

//     $(".select_wrap").click(function () {
//       $('.select_ul').removeClass("hide");
//     });

//     $(".select_ul li").click(function () {
//       var currentele = $(this).html();
//       $(".default_option li").html(currentele);
//       $(this).parents(".select_wrap").removeClass("active");
//     });
    
// /*  =========== valid text form ================    */
   
   
//       $(".valid-text").bind("keypress", function (e) {
//           var keyCode = e.which ? e.which : e.keyCode
//           if (!(keyCode >= 48 && keyCode <= 57)) {
//             $(".error").css("display", "none");
//           }else{
//              $(".error").css("display", "inline");
//             return false;
//           }
//       });
        

    
// })(jQuery);