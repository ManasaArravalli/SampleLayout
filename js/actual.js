$(document).ready(function(){
		
		/* Drop Down Menu */
			$('.hmenu ul li').hover(function(){ 
					$(this).find('ul li').slideToggle(500);
			});
	
			
		/* Scroll to Registration form on clicking "Reg" in menu*/
		$('.reg-option').click(function(){
				$("html, body").animate({
						scrollTop: $("#register1").offset().top
				});
		});
		

		/*  Expand and Less - FROM BLOG POSTS SECTION  */	
		
		$('.expand-icon').click(function(){
			
	
			var mypara = $(this).closest('.fromblog-post').find('.post-summary');
	
			//if( $(this).closest('.fromblog-post').find('.post-summary').is(':visible')){	
			if( mypara.is(':visible') ){
				$(this).find('img').attr('src',"expand-icon.png");
			}
			else{
				$(this).find('img').attr('src',"less-icon.png");
			}
			
			mypara.slideToggle(500);
		});
	
		
		
		/* Registration Form Validation */
		$('#reg-button').click(function(event){
			event.preventDefault();
			
			var nval = $('#fname').val();
			var aval = $('#age').val();
			var eval = $('#email').val();
			var npattern = new RegExp(/^[a-zA-Z ]+$/);
			var apattern = new RegExp(/^[0-9]{1,3}$/);
			var epattern = new RegExp(/^[a-zA-Z]+[a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
			
			
				// Name Validation 
			if(nval==""){ 		// check for empty input
				$('#fname').css("border","1px solid red");
				$('.warn-name1').css("display","none");
				$('.warn-name').css("display","inline");
			}
			else{				// check pattern
				if(!npattern.test(nval)){
					$('#fname').css("border","1px solid red");
					$('.warn-name').css("display","none");
					$('.warn-name1').css("display","inline");
				}
				else{			// reset border and error messages
					$('#fname').css("border","");
					$('.warn-name1').css("display","none");
					$('.warn-name').css("display","none");
				}
			}	
			
				// Age Validation 
			if(aval==""){ 	
				$('#age').css("border","1px solid red");
				$('.warn-age1').css("display","none");
				$('.warn-age').css("display","inline");
			}
			else{
				if(!apattern.test(aval)){
					$('#age').css("border","1px solid red");
					$('.warn-age').css("display","none");
					$('.warn-age1').css("display","inline");
				}
				else{
					$('#age').css("border","");
					$('.warn-age1').css("display","none");
					$('.warn-age').css("display","none");
				}
			}	
		
				// Email Validation 
			if(eval=="")
			{
				$('#email').css("border","1px solid red");
				$('.warn-email1').css("display","none");
				$('.warn-email').css("display","inline");
			}
			else{
				if(!epattern.test(eval)){
					$('#email').css("border","1px solid red");
					$('.warn-email').css("display","none");
					$('.warn-email1').css("display","inline");
				}
				else{
					$('#email').css("border","");
					$('.warn-email1').css("display","none");
					$('.warn-email').css("display","none");
				}
			}	
			
		});


		
	
});