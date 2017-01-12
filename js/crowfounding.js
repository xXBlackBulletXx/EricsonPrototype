$(document).ready(function(){
	$("#btnSearch").click(function(){
		$("#divSearch").fadeToggle("fast", function(){
			$("#searchDiv").fadeToggle("fast", "linear" );
		});
	});
});

