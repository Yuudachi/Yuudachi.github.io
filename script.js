$(document).ready(function(){	
	$(".div_tit").click(function(ele){		
		var num=$(ele.target).attr("id");
		s=num.substring(1);
		//$("#content").load("txt/"+s+".txt");
		$("#content").load("txt/"+s+".html");
	});
});
