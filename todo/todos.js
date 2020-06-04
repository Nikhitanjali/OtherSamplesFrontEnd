$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});
$("input[type='text']").keypress(function(event)
{
	if(event.which==13)
	{
	var todonew= $(this).val();
	$(this).val("");
	$("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span>" +  todonew + "</li>");
	} 
});
$(".fa-plus").click(function(){
	$("input").fadeToggle("20");
});