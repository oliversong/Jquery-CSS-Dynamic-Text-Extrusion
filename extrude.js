$(".extrude").hover(function(){
    $(this).animate({top:"-5px",left:"-5px"},{duration:200,step:function(now, fx){
		y=$(this).css("text-shadow");
		value = "rgb(68, 68, 68) "+Math.abs(now)+"px "+Math.abs(now)+"px 0px";
		$(this).css("text-shadow",y+', '+value);
	}});}, function() {
    $(this).animate({top:"0px",left:"0px"},{duration:200,step:function(now, fx){
		z=$(this).css("text-shadow");
		z=z.split(", r");
		z.pop();
		z=z.join(", r")
		$(this).css("text-shadow",z);
			}
		}
	);
	}
);