// put event handlers for header links here
var H = (function () {  

    function headerLinkClicks(evt) {  
            evt.preventDefault();
            evt.stopPropagation();
            
            var url = $(evt.target).attr("href");

            $.ajax(url, {dataType: "text"})
            .then(function (contents){
                $modal.html(contents).show();
            });
        }

    function init() {
        var $modal = $("[rel=js-modal]");

        $("[rel=js-controls]").on("click", "[rel*='js-']", headerLinkClicks);
    }

    var $modal;

    return {
        init: init
    }
       
})();

$(document).ready(H.init);