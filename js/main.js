/*scroll to top*/

$(document).ready(function(){

 // hide #scroll_up first
 $("#scroll_up").hide();
 
 // fade in #scroll_up
 $(function () {
  $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
    $('#scroll_up').fadeIn();
   } else {
    $('#scroll_up').fadeOut();
   }
  });

  // scroll body to 0px on click
  $('#scroll_up a').click(function () {
   $('body,html').animate({
    scrollTop: 0
   }, 800);
   return false;
  });
 });

});

/*Blog and Comments Tab*/

$(document).ready(function(){
  
	$("#comments").click(function(){
	$("#latestcomments").slideDown("slow");
	$(this).css("background","white").css("color","#DF302B");
	$("#fromblog").slideUp("slow");
	$("#blogs").css("background","#DF302B").css("color","white");
	});
  
	$("#blogs").click(function(){
	$("#fromblog").slideDown("slow");
	$(this).css("background","white").css("color","#DF302B");
	$("#latestcomments").slideUp("slow");
	$("#comments").css("background","#DF302B").css("color","white");
	});
  
  
});