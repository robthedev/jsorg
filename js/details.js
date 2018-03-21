$(document).ready(function(){

	function personClicked(evt) {
		var _id = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");

		$.ajax("details/" + _id + ".html", {datatype: "text"})
			.then(function(content){
				$content.html(content);
			});

	  }

	var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
	var $content = $("[rel=js-details]");

	$items.on("click", "[rel*='js-item]'", personClicked)

});
