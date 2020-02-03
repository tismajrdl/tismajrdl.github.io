$('.burger-container').click(function(){
  $(this).toggleClass('burger-container-close');
  $('.menu').toggleClass('menu-app');
  $('.reseaux').toggleClass('reseaux-app');
  $('html').toggleClass('overflow');

});
$(function() {
      var pageTitle = $("title").text();
    $(window).blur(function() {
      $("title").text("Eh ! C'est pas fini ! ");
    });
    $(window).focus(function() {
      $("title").text(pageTitle);
    });
});
$(document).mouseup(function (e) {
   if (!$('.burger-container').is(e.target) // si la cible n'est pas .menu_burger_container
   && $('.burger-container').has(e.target).length === 0) // ... ni un enfant de .menu_burger_container
   {
     $('.burger-container').removeClass('burger-container-close');
     $('.menu').addClass('menu-app');
     $('.reseaux').addClass('reseaux-app');
     $('html').removeClass('overflow');
  }
 });



 $('#tout').click(function(){
   $(this).addClass('projet-select-actif');
   $('#webdesign').removeClass('projet-select-actif');
   $('#developpement').removeClass('projet-select-actif');
   $('#graphisme').removeClass('projet-select-actif');
   $('.code').removeClass('opacity20');
   $('.graphisme').removeClass('opacity20');
   $('.webdesign').removeClass('opacity20');
 });
 $('#webdesign').click(function(){
   $(this).addClass('projet-select-actif');
   $('#tout').removeClass('projet-select-actif');
   $('#developpement').removeClass('projet-select-actif');
   $('#graphisme').removeClass('projet-select-actif');
   $('.code').addClass('opacity20');
   $('.graphisme').addClass('opacity20');
   $('.webdesign').removeClass('opacity20');
 });
 $('#developpement').click(function(){
   $(this).addClass('projet-select-actif');
   $('#webdesign').removeClass('projet-select-actif');
   $('#tout').removeClass('projet-select-actif');
   $('#graphisme').removeClass('projet-select-actif');
   $('.graphisme').addClass('opacity20');
   $('.webdesign').addClass('opacity20');
   $('.code').removeClass('opacity20');
 });
 $('#graphisme').click(function(){
   $(this).addClass('projet-select-actif');
   $('#webdesign').removeClass('projet-select-actif');
   $('#developpement').removeClass('projet-select-actif');
   $('#tout').removeClass('projet-select-actif');
   $('.code').addClass('opacity20');
   $('.webdesign').addClass('opacity20');
   $('.graphisme').removeClass('opacity20');
 });

 // $('.hidden-projet').hide();
 // $('#tout-afficher').click(function(){
 //   $(this).addClass('display-none');
 //   $('.hidden-projet').slideToggle();
 // });

 $('#video').hide();
 $("#buttonvideo").click(function(){
   $('#video').show();
   $('#video')[0].play();
   $('#video').delay(3200).fadeOut();
 });

 $('.logo').click(function(){
   $('html, body').animate({
      scrollTop: $('#top').offset().top
    }, 350);
 });
 $('.dispgrid').click(function(){
   $(this).toggleClass('display-none');
   $('.dispcol').toggleClass('display-none');
   $('.image-projet').toggleClass('col-md-12');
 });
 $('.dispcol').click(function(){
   $(this).toggleClass('display-none');
   $('.dispgrid').toggleClass('display-none');
   $('.image-projet').toggleClass('col-md-12');
 });



 $(document).ready(function() {
	var s = $(".logospan");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos <= $(window).height()) {
      s.removeClass("display-none");
		} else {
			s.addClass("display-none");
		}
	});
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
        window.location.hash = hash;
      });
    }
  });
});

window.sr = ScrollReveal({
  scale:1,
  distance: '20vh',
  reset:false,
  mobile:false
});
sr.reveal('.hehexd',{viewFactor:.5});
sr.reveal('.hehexdwow',{viewFactor:.1});
sr.reveal('.hehexdleft',{origin:'left'});
