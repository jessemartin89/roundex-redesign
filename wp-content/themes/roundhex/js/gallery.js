jQuery(document).ready(function(a){a(".photo-container li").each(function(){a(this).siblings(".gallery-controls .gskip_left img").addClass(a(this).prev().length<0?"no-prev":"has-prev"),a(this).find(".gallery-controls .gskip_right img").addClass(a(this).next().length<0?"no-next":"has-next")})});