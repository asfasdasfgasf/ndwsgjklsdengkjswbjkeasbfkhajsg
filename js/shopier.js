const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
$('.shopier').on('click touchstart', function () {
    var vl = $(this).attr("id");
    if(isSafari){
        var url = "https://www.shopier.com/ShowProductNew/products.php?id="+vl; // creating url
        window.open(url, "_blank"); // opening new tab
    }
    else{ // if userAgent matching with safari works here
        if(!$("#frameModal").length){
            var userLang = navigator.language || navigator.userLanguage;
            var frameHeaderText;
            if(userLang==="tr-TR")
                frameHeaderText='';
            else
                frameHeaderText='AAVE STORE';
            $("body").after('<!-- Modal -->\n' +
                '<div class="modal fade" id="frameModal" tabindex="-1" role="dialog" aria-labelledby="frameModalLabel" aria-hidden="true">\n' +
                '    <div class="modal-dialog" role="document">\n' +
                '        <div class="modal-content">\n' +
                '            <div class="modal-header">' +
                '               <h4 class="modal-title" id="frameModalTitle">'+frameHeaderText+'\n' +
                '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '                    <span aria-hidden="true">&times;</span>\n' +
                '                </button></h4>\n' +
                '            </div>\n' +
                '            <div id="frameModalBody" class="modal-body">\n' +
                '                <iframe src=""\n' +
                '                        style="display: inline; top: -8px; height: 473px;position: relative;width: 100%;border: 0;"></iframe>\n' +
                '            </div>\n' +
                '            <div class="modal-footer">\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>');
        }
        $('#frameModalBody > iframe').attr("src","https://www.shopier.com/ShowProductNew/products.php?id="+vl);
        $('#frameModal').modal('show');

    }
});
