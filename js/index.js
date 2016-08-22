(function() {
  $('.menu-trigger').on('click', function(e) {
    e.preventDefault();
    return $('#circle-menu').toggleClass('open');
  });

}).call(this);

var flag=0;
  $("#circle-menu").click(function(){
  	if(flag==0){
  		$('.test').css({
  	
   'filter'         : 'blur(5px)',
   '-webkit-filter' : 'blur(5px)',
   '-moz-filter'    : 'blur(5px)',
   '-o-filter'      : 'blur(5px)',
   '-ms-filter'     : 'blur(5px)'
});
  		flag =1;}
  		else
  		{
  				$('.test').css({
  	
   'filter'         : 'blur(0px)',
   '-webkit-filter' : 'blur(0px)',
   '-moz-filter'    : 'blur(0px)',
   '-o-filter'      : 'blur(0px)',
   '-ms-filter'     : 'blur(0px)'
});
  				flag=0;
  		}


	});
