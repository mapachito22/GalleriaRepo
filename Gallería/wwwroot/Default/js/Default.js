function pageLoad() {
    if ($(".hid_bShowMsg").length > 0 && $('.hid_bShowMsg').val() == "1") {
        $('.hid_bShowMsg').val("0");
        $(".footer").addClass("active");
        setTimeout(function () {
            $(".footer").removeClass("active");
        }, 10000);
    }

    if ($(".chkbGetCsviId").length > 0) {
        LoadchkbGetCsviId();
    }
    if ($(".chkbGetCsvComp").length > 0) {
        LoadchkbGetCsvComp();
    }
    if ($(".gvPager").length > 0) {
        LoadLanguagePagination();
    }
    if ($(".DatePickerCustom").length > 0) {
        loadTxtCalendar();
    }

    if ($(".footer").length > 0) {
        loadFooter();
    }
    loadMenuLink();
}

$(document).ready(function () {
    $("a[href='#']").removeAttr("onclick");
    $("a[href='#']").removeAttr("href");
    if ($(".btnCreate").length > 0) {
        LoadBtnReasonCode();
    }
    if ($(".chkbGetCsviId").length > 0) {
        LoadchkbGetCsviId();
    }
    if ($(".chkbGetCsvComp").length > 0) {
        LoadchkbGetCsvComp();
    }
    if ($(".gvPager").length > 0) {
        LoadLanguagePagination();
    }
    if ($(".DatePickerCustom").length > 0) {
        loadTxtCalendar();
    }
    if ($(".footer").length > 0) {
        loadFooter();
    }
    $(".download-btn").click(function () {
        $(".downloadButtonControl").click(); // input[type='submit']
    });
    loadMenu();
    loadJQueryFn();

    if ($(".scrollDown").length > 0) {
        $(".scrollDown").scrollTop($(".scrollDown")[0].scrollHeight);
    }
});

function loadMenu() {

    $(document).on("click", "#mainmenuleft", function (e) {
        localStorage.removeItem("collapsible");
    });

    $(document).on("click", "#mainmenuleft ul.level1 li.has-popup a.popout", function (e) {

        if (!$(this).siblings().hasClass('active')) {
            $("#mainmenuleft ul.level2").removeClass('active');
        }

        $(this).siblings().toggleClass('active');

        if (!$(this).children().children().hasClass('i-up-open-1')) {
            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().removeClass('i-up-open-1');
            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().addClass('i-down-open-1');
        }

        $(this).children().children().toggleClass('i-down-open-1');
        $(this).children().children().toggleClass('i-up-open-1');

        e.stopPropagation();
        e.preventDefault();
    });

    $(document).on("click", "#mainmenu ul.level1 li.has-popup a.popout", function (e) {
        if (!$(this).siblings().hasClass('active')) {
            $("#mainmenu ul.level2").removeClass('active');
        }

        $(this).siblings().toggleClass('active');

        if (!$(this).children().children().hasClass('i-up-open-1')) {
            $("#mainmenu ul.level1 li.has-popup a.popout").children().children().removeClass('i-up-open-1');
            $("#mainmenu ul.level1 li.has-popup a.popout").children().children().addClass('i-down-open-1');
        }

        $(this).children().children().toggleClass('i-down-open-1');
        $(this).children().children().toggleClass('i-up-open-1');

        e.stopPropagation();
        e.preventDefault();
    });

    loadMenuLink();
}

function loadMenuLink() {
    //var pathname = window.location.pathname;
    //var count = 1;

    $("#mainmenuleft a").each(function () {
        var href = $(this).attr("href");
        var pathname = window.location.pathname;

        if (href !== undefined && href.indexOf('#') < 0) {
            href = href.replace("MasterPage/", "#");
            href = href.replace("Common/MasterPage/", "#");

            $(this).attr("href", href);

        } else {
            $(this).removeAttr("href");
            $(this).removeAttr("onclick");
        }

        var path = $(this).attr("target");
        $(this).attr("path", path);
        $(this).removeAttr("target");

        if (href !== undefined && href.indexOf('#') < 0) {
            href = href.substring(0, href.indexOf(".aspx"));
            if (pathname.indexOf(href) > 0) {
                $(this).parent().parent().addClass("active");
            }
        }

    });

    //$("#mainmenuleft ul.level1 li.has-popup a.popout").each(function () {
    //    if (count === 1) {
    //        $(this).siblings().addClass("active");
    //        $(this).children().children().removeClass('i-down-open-1');
    //        $(this).children().children().addClass('i-up-open-1');
    //    }
    //    count = count + 1;
    //})

    //$("#mainmenuleft a").each(function () {
    //    debugger;
    //    var href = $(this).attr("href");
    //    if (href !== undefined && href.indexOf('#') < 0) {
    //        href = href.replace("MasterPage/", "#");
    //        href = href.replace("Common/MasterPage/", "#");

    //        $(this).attr("href", href);
    //    } else {
    //        $(this).removeAttr("href");
    //        $(this).removeAttr("onclick");
    //    }

    //    var path = $(this).attr("target");
    //    $(this).attr("path", path);
    //    $(this).removeAttr("target");

    //    if (href !== undefined && href.indexOf('#') < 0) {
    //        href = href.substring(0, href.indexOf(".aspx"));
    //    }

    //    if (pathname.indexOf(href) >= 0) {
    //        if (!$(this).siblings().hasClass('active')) {
    //            $("#mainmenuleft ul.level2").removeClass('active');
    //        }

    //        $(this).parent().parent().toggleClass('active');

    //        if (!$(this).children().children().hasClass('i-up-open-1')) {
    //            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().removeClass('i-up-open-1');
    //            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().addClass('i-down-open-1');
    //        }

    //        $(this).parent().parent().siblings().children().children().toggleClass('i-down-open-1');
    //        $(this).parent().parent().siblings().children().children().toggleClass('i-up-open-1');
    //    }
    //else if (href !== undefined && pathname !== undefined) {
    //    if (pathname.indexOf("Leaflet") >= 0) {
    //        if (!$(this).siblings().hasClass('active')) {
    //            $("#mainmenuleft ul.level2").removeClass('active');
    //        }

    //        $(this).parent().parent().toggleClass('active');

    //        if (!$(this).children().children().hasClass('i-up-open-1')) {
    //            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().removeClass('i-up-open-1');
    //            $("#mainmenuleft ul.level1 li.has-popup a.popout").children().children().addClass('i-down-open-1');
    //        }

    //        $(this).parent().parent().siblings().children().children().toggleClass('i-down-open-1');
    //        $(this).parent().parent().siblings().children().children().toggleClass('i-up-open-1');
    //    }
    //}

    //})

    //$("#mainmenu a").each(function () {
    //    var href = $(this).attr("href");
    //    if (href !== undefined && href.indexOf('#') < 0) {
    //        href = href.replace("MasterPage/", "#");
    //        href = href.replace("Common/MasterPage/", "#");

    //        $(this).attr("href", href);

    //    } else {
    //        $(this).removeAttr("href");
    //        $(this).removeAttr("onclick");
    //    }

    //    var path = $(this).attr("target");
    //    $(this).attr("path", path);
    //    $(this).removeAttr("target");
    //})
}

function loadTxtCalendar() {
    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
    $('.DatePickerCustom').each(function () {
        $(this).datepicker({});
    });
}
function loadFooter() {
    $(document).on('click', '.footer', function () {
        $(this).removeClass("active");
    });
}

/**Autocalculate Total & Average**/
$(".ddlCriteriaPoint").change(function () {
    var total = 0;
    var count = 0;
    var avg = 0;
    $(".ddlCriteriaPoint option:selected").each(function () {
        count += 1;

        if ($(this).val() > 0)
            total += parseInt($(this).text());
    });
    avg = (total / count).toFixed(1);
    $(".txtTotal").val(total);
    $(".txtAverage").val(avg);
});

/**upload files logic for new theme**/
/*".fileUploadControl input[type='file']"*/
$(".fileUpload-btn").click(function () {
    $(".fileUploadControl input[type='file']").click();
});
$(".fileUpload-btn2").click(function () {
    $(".fileUploadControl2 input[type='file']").click();
});
$(".fileUploadMultiple-btn").click(function () {
    $(".fileUploadControlMultiple").click();
});
$(".fileUploadControlMultiple").change(function () {
    var fileName = $(".fileUploadControlMultiple")[0].files.length + ' files';
    $(".fileUploadMultiple-lbl").text(fileName);
    $(".fileUploadMultiple-lbl").addClass('fileUploadComplete');
});

function LoadBtnReasonCode() {
    var iCnt = 0;
    var Span = [];

    $(document).on('click', '.btnCreate', function () {         //$('.btnCreate').click(function () {
        var text = $(".txtPadre").val();
        
        if (text != "") {
            iCnt = iCnt + 1;

            $("#container").append('<div class="RemoveChkbcontainer"><div class="col-xs-1"><input style="margin-top:18px;" type="checkbox" id="chkb100' + iCnt + '" class="RemoveChkb"/></div>' +
                '<div class="col-xs-11"><textarea type=text class="form-control form-group textAreaSize input" id=tb100' + iCnt + '>' +
                        text + '</textarea></div></div>');

            $(".txtPadre").val('');
            $(".txtPadre").focus();
            $(".txtPadre").removeClass("ctrlObligatory");
        } else {
            $(".txtPadre").addClass("ctrlObligatory");
        }

    });

    // Elimina un elemento por click
    $(document).on('click', '.btRemoveChkb', function () {                      //$('.btRemoveChkb').click(function () {   
        $('.RemoveChkb').each(function () {
            if (this.checked) {
                $(this).parents(".RemoveChkbcontainer").remove();
            }
        });
    });

    // Elimina todos los elementos del contenedor
    $(document).on('click', '.btRemoveAll', function () {                       //$('.btRemoveAll').click(function () {    
        $("#container").empty();
        iCnt = 0;
    });
}

$("#myModalDetail").modal({
    backdrop: 'static',
    keyboard: false
});
function openModal() {
    //debugger;
    $(".modal-backdrop").remove();
    $('#myModal').modal('show');
}
function hideModal() {
    $('#myModal').modal('hide');
    $("#myModal").removeClass("in");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
}
function openModalDetail() {
    //debugger;
    //$(".modal-backdrop").remove();
    $('#myModalDetail').modal('show');
}
function hideModalDetail() {
    $('#myModalDetail').modal('hide');
    $("#myModalDetail").removeClass("in");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
}
function openModal2() {
    //debugger;
    $(".modal-backdrop").remove();
    $('#myModal2').modal('show');
}
function hideModal2() {
    $('#myModal2').modal('hide');
    $("#myModal2").removeClass("in");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
}
function openModal3() {
    //debugger;
    $(".modal-backdrop").remove();
    $('#myModal3').modal('show');
}
function hideModal3() {
    $('#myModal3').modal('hide');
    $("#myModal3").removeClass("in");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
}
function openModalComponent() {
    //debugger;
    $(".modal-backdrop").remove();
    $('#ModalComponents').modal('show');
}
function hideModalComponent() {
    $('#ModalComponents').modal('hide');
    $("#ModalComponents").removeClass("in");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
}

function LoadchkbGetCsv() {
    $(".hid_iIdCSVComp").val('');
    $('.fQPA').removeClass('ctrlObligatory');
    var bIncomplete = true;
    if ($('.chkbGetCsvComp input:checkbox:checked').length > 0) {
        $('.chkbGetCsvComp input:checkbox').each(function () {

            if (this.checked) { //if (a.is(':checked')) {
                
                var tD = $(this).closest('td');
                var tR = tD.closest('tr');

                var iId = tD.find('.GetCSVNoMover').val();
                var hidCSV = "|" + $(".hid_iIdCSVComp").val();

                var txtfQPA = tR.find('.fQPA');
                var txtfQPAvalue = '';

                if (typeof (txtfQPA) != 'undefined' && txtfQPA != null && txtfQPA.length > 0) {
                    txtfQPAvalue = $(txtfQPA).val();

                    if (txtfQPAvalue == '' || parseFloat(txtfQPAvalue) == 0) {
                        tR.find('.fQPA').addClass('ctrlObligatory');
                        bIncomplete = false;
                    } else {
                        tR.find('.fQPA').removeClass('ctrlObligatory');
                    }
                }

                iId = iId + txtfQPAvalue + "|";

                if (bIncomplete) {
                    if (hidCSV.substring(0, 1) == "|") {
                        hidCSV = hidCSV.substring(1, hidCSV.length);
                    }
                    if (hidCSV.substring(hidCSV.length - 1, 1) == "|") {
                        hidCSV = hidCSV.substring(hidCSV.length - 1, 1);
                    }
                    $(".hid_iIdCSVComp").val(hidCSV + iId);

                    console.log(hidCSV + iId);
                } else { $(".hid_iIdCSVComp").val(''); }
            }
        });
    } else { $(".hid_iIdCSVComp").val(''); }

    return bIncomplete;
}


function LoadchkbGetCsviId() {
    $(document).on('change', '.chkbGetCsviId input:checkbox', function () {
        chkbGetCsviId($(this));
    });
}

function LoadchkbGetCsvComp() {
    $(document).on('change', '.chkbGetCsvComp input:checkbox', function () {
        chkbGetCsvComp($(this));
    });
}
function chkbGetCsviId(a) {
    var tD = a.parents('td');
    var iId = tD.find('.GetiIdNoMover').val() + ",";
    var hidCSV = "," + $(".hid_iIdCSV").val();
    //var divOpenClos = tD.find('.getId');
    //var bOpenClose = false;
    //if (typeof (divOpenClos) != 'undefined' && divOpenClos != null && divOpenClos.length > 0) {
    //    var element = divOpenClos.find("div");
    //    if (typeof (element) != 'undefined' && element != null && element.length > 0) {
    //        bOpenClose = true;
    //    }
    //}
    //debugger;
    if (a.is(':checked')) {
        if (hidCSV == "," || hidCSV.indexOf("," + iId) == -1) {
            hidCSV = hidCSV.replace("," + iId, "");

            if (hidCSV.substring(0, 1) == ",") {
                hidCSV = hidCSV.substring(1, hidCSV.length);
            }
            if (hidCSV.substring(hidCSV.length - 1, 1) == ",") {
                hidCSV = hidCSV.substring(hidCSV.length - 1, 1);
            }
            $(".hid_iIdCSV").val(hidCSV + iId);
        }
        //if (bOpenClose) {
        //    expandcollapseFromCheck(divOpenClos.attr("id"), "open");
        //}
    } else {
        if (hidCSV.length > 1 && hidCSV.indexOf("," + iId) >= 0) {
            hidCSV = hidCSV.replace("," + iId, ",");

            if (hidCSV.substring(0, 1) == ",") {
                hidCSV = hidCSV.substring(1, hidCSV.length);
            }
            if (hidCSV.length > 0 && hidCSV.substring(hidCSV.length - 1, hidCSV.length) != ",") {
                hidCSV = hidCSV + ",";
            }
            $(".hid_iIdCSV").val(hidCSV);
        }
        //if (bOpenClose) {
        //    expandcollapseFromCheck(divOpenClos.attr("id"), "close");

        //    var div = document.getElementById(divOpenClos.attr("id").replace("_", ""));
        //    $(div).find('input[type=checkbox]:checked').click();
        //}
    }

    //console.log($(".hid_iIdCSV").val());
}


function chkbGetCsvComp(a) {
    var tD = a.parents('td');
    var iId = tD.find('.GetCSVNoMover').val() + "|";
    var hidCSV = "|" + $(".hid_iIdCSVComp").val();

    var divOpenClos = tD.find('.getId');
    var bOpenClose = false;
    if (typeof (divOpenClos) != 'undefined' && divOpenClos != null && divOpenClos.length > 0) {
        var element = divOpenClos.find("div");
        if (typeof (element) != 'undefined' && element != null && element.length > 0) {
            bOpenClose = true;
        }
    }
    // Se quita la parte de obtener el csv
    if (a.is(':checked')) {
        //if (hidCSV == "|" || hidCSV.indexOf("|" + iId) == -1) {
        //    hidCSV = hidCSV.replace("|" + iId, "");

        //    if (hidCSV.substring(0, 1) == "|") {
        //        hidCSV = hidCSV.substring(1, hidCSV.length);
        //    }
        //    if (hidCSV.substring(hidCSV.length - 1, 1) == "|") {
        //        hidCSV = hidCSV.substring(hidCSV.length - 1, 1);
        //    }
        //    $(".hid_iIdCSVComp").val(hidCSV + iId);
        //}
        if (bOpenClose) {
            expandcollapseFromCheck(divOpenClos.attr("id"), "open");
        }


    } else {
        //if (hidCSV.length > 1 && hidCSV.indexOf("|" + iId) >= 0) {
        //    hidCSV = hidCSV.replace("|" + iId, "|");

        //    if (hidCSV.substring(0, 1) == "|") {
        //        hidCSV = hidCSV.substring(1, hidCSV.length);
        //    }
        //    if (hidCSV.length > 0 && hidCSV.substring(hidCSV.length - 1, hidCSV.length) != "|") {
        //        hidCSV = hidCSV + "|";
        //    }
        //    $(".hid_iIdCSVComp").val(hidCSV);
        //}

        if (bOpenClose) {
            expandcollapseFromCheck(divOpenClos.attr("id"), "close");

            var div = document.getElementById(divOpenClos.attr("id").replace("_", ""));
            $(div).find('input[type=checkbox]:checked').click();
        }
    }

    //console.log($(".hid_iIdCSV").val());
}


function LoadLanguagePagination() {
    $(".gvPager table td a").each(function () {
        if ($(this).text() == "Final") {
            //debugger;
            if ($("#lblCulture").text() == "en-US") {
                $(this).text("End");
            }
        }
    });
}

var kPressPaste = false;
function loadJQueryFn() {

    //window.history.forward(1);

    $(".iCTRL").keypress(valiCTRL);
    $(".sCTRL").keypress(valsCTRL);
    $(".sCTRL-N").keypress(valsCTRLwithN);
    $(".fCTRL").keypress(valfCTRL);
    $(".fPctCTRL").keypress(valfPctCTRL);
    $(".sCTRL-iCTRL").keypress(valsCTRLiCTRL);
    $(".sCTRL-iCTRL-N").keypress(valsCTRLiCTRLwithN);
    $(".bCTRL").keypress(valbCTRL);

    $(".NotsCTRL").keypress(valNotsCTRL);

    $(".iCTRL").keyup(function () {
        if (kPressPaste) {
            if (valiCTRLRegex($(this).val()) == false) {
                $(this).val('');
            }
        }
    });
    $('.iCTRL').bind("paste", function (e) {
        kPressPaste = true;
    });

    $(".fCTRL").keyup(function () {
        if (kPressPaste) {
            if (valfCTRLRegex($(this).val()) == false) {
                $(this).val('');
            }
        }
    });
    $('.fCTRL').bind("paste", function (e) {
        kPressPaste = true;
    });

    $(".sCTRL").keyup(function () {
        if (kPressPaste) {
            if (valsCTRLRegex($(this).val()) == false) {
                $(this).val('');
            }
        }
    });
    $('.sCTRL').bind("paste", function (e) {
        kPressPaste = true;
    });

    $(".NotsCTRL").keyup(function () {
        if (kPressPaste) {
            if (valNotsCTRLRegex($(this).val()) == false) {
                $(this).val('');
            }
        }
    });
    $('.NotsCTRL').bind("paste", function (e) {
        kPressPaste = true;
    });

    $(".sCTRL-N").keyup(function () {
        if (kPressPaste) {
            if (valsCTRLRegexN($(this).val()) == false) {
                $(this).val('');
            }
        }
    });
    $('.sCTRL-N').bind("paste", function (e) {
        kPressPaste = true;
    });

    /* ---------  validaciones para input:text-multiline   -----------*/
    $(".txtMultiLineMaxL100").keyup(function () { addMaxLength($(this), 100); });
    $(".txtMultiLineMaxL200").keyup(function () { addMaxLength($(this), 200); });
    $(".txtMultiLineMaxL250").keyup(function () { addMaxLength($(this), 250); });
    $(".txtMultiLineMaxL500").keyup(function () { addMaxLength($(this), 500); });
    $(".txtMultiLineMaxL1000").keyup(function () { addMaxLength($(this), 1000); });
    $(".txtMultiLineMaxL2000").keyup(function () { addMaxLength($(this), 2000); });

    $('.txtMultiLineMaxL100').bind("paste", function (e) { kPressPaste = true; });
    $('.txtMultiLineMaxL200').bind("paste", function (e) { kPressPaste = true; });
    $('.txtMultiLineMaxL250').bind("paste", function (e) { kPressPaste = true; });
    $('.txtMultiLineMaxL500').bind("paste", function (e) { kPressPaste = true; });
    $('.txtMultiLineMaxL1000').bind("paste", function (e) { kPressPaste = true; });
    $('.txtMultiLineMaxL2000').bind("paste", function (e) { kPressPaste = true; });
}

function addMaxLength(ctrl, imax) {
    var stringHtml = ctrl.val()
    if (kPressPaste) {
        var matches = stringHtml.match(/\n/g);
        var breakes = (matches ? matches.length : 0);

        if (stringHtml.length + breakes > imax) {
            stringHtml = stringHtml.substring(0, imax);
            matches = stringHtml.match(/\n/g);
            imax = imax - (matches ? matches.length : 0);
            stringHtml = stringHtml.substring(0, imax);

            ctrl.val(stringHtml);
        }
    }
}

/*************************************************************************/
/*************************     FUNCIONES   *******************************/
/*************************************************************************/


/* ---------   Estas Funciones son para el Grid-Tree Son Genericas      --------------*/
var clasOpen = 'i-plus-squared-alt';
var clasClose = 'i-minus-squared-alt';
function expandcollapseFromCheck(obj, openClose) {
    //debugger;
    var div = document.getElementById(obj.replace("_", ""));
    var divImg = document.getElementById(obj);
    var img = $(divImg).find("div");

    if (div) {
        if (openClose == "open") {
            div.style.display = "block";
            if (img) {
                $(img).removeClass();
                $(img).addClass(clasClose);
            }
        }
        else {
            div.style.display = "none";
            if (img) {   
                $(img).removeClass();
                $(img).addClass(clasOpen);
            }
        }
    }
}


function expandcollapse(obj) {
    var div = document.getElementById(obj);
    var img = document.getElementById('img' + obj);

    if (div) {
        if (div.style.display == "none") {
            div.style.display = "block";

            if (img) {
                //var src = $(img).attr("src").replace("plus.gif", "minus.gif");
                //$(img).attr("src", src);
                //img.alt = 'Contraer';

                $(img).removeClass();
                $(img).addClass(clasClose);
            }
            //MaintainDiv(obj, 1);
        }
        else {
            div.style.display = "none";

            if (img) {
                //var src = $(img).attr("src").replace("minus.gif", "plus.gif");
                //$(img).attr("src", src);
                //img.alt = 'Expandir';
                $(img).removeClass();
                $(img).addClass(clasOpen);
            }
            //MaintainDiv(obj, 0);
        }
    }
}

function MaintainDiv(sDiv, bOpen) {
    var sLastDiv = getCookie("CClastDiv");

    if (sLastDiv == null) sLastDiv = '';

    if (bOpen == "1") {
        if (sLastDiv.indexOf(sDiv) < 0) {
            sLastDiv += sDiv + '#';
            setCookie("CClastDiv", sLastDiv, 1);
        }
    }
    else {
        sLastDiv = sLastDiv.replace(sDiv + '#', "");
        setCookie("CClastDiv", sLastDiv, 1);
    }

}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}


function loadDiv() {
    var sLastDiv = getCookie("CClastDiv");
    if (sLastDiv != '' && sLastDiv != null) {
        var vLastDiv = sLastDiv.split('#');
        for (var i = 0; i < vLastDiv.length; i++) {
            if (document.getElementById(vLastDiv[i])) {
                expandcollapse(vLastDiv[i], "None");
            }
        }
    }
}

function DivExpand() {          // Esta es para Expandir Todos
    var sIdsDiv = "";
    var img;
    $(".divTreeLvl2").each(function () {
        $(this).css("display", "block");
        img = document.getElementById('img' + $(this).attr("id"));
        if (img) {
            var src = $(img).attr("src").replace("plus.gif", "minus.gif");
            $(img).attr("src", src);

            img.alt = 'Contraer';
        }
        MaintainDiv($(this).attr("id"), 1);
    });
    return false;
}

function DivCollapse() {        // Esta es para Colapsar Todos
    var sIdsDiv = "";
    var img;
    $(".divTreeLvl2").each(function () {
        $(this).css("display", "none");
        img = document.getElementById('img' + $(this).attr("id"));
        if (img) {
            var src = $(img).attr("src").replace("minus.gif", "plus.gif");
            $(img).attr("src", src);

            img.alt = 'Expandir';
        }
        MaintainDiv($(this).attr("id"), 0);
    });
    return false;
}






/*--------------   validaciones para input:text    --------------*/

/*Funciones de Validacion por REGEX     */

function valfCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^[0-9]*\.?[0-9]*$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}
function valiCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^[0-9]*$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}

function valsCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}
function valsCTRLRegexN(valor) {
    kPressPaste = false;
    var re = /^[ñÑ]*$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}
function valsCTRLiCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^[\w\s]+(\s*[\w\s]*)*[\w\s]+$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}
function valNotsCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/i;
    if (!re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}

// Esta liga es para el regex http://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy
function valsdCTRLRegex(valor) {
    kPressPaste = false;
    var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i;
    if (re.exec(valor)) {
        return true;
    } else {
        return false;
    }
}
/*Funciones de Validacion para el KeyPress*/
/*
llaves
0	-	Inicio
8	-	Borrar
13	-	Enter
32	-	Espacio		( )
45	-	Guion		(-)
47	-	Diagonal 	(/)
	
*/
function valEnterBorrarInicio(kP) {
    if (kP == 0 || kP == 8 || kP == 13)
        return true;
    else
        return false;
}
function valiCTRL(e) {
    if (window.event) {// IE
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    if (kPress > 47 && kPress < 58 || valEnterBorrarInicio(kPress))
        return true
    else
        return false
}

function valbCTRL(e) {
    if (window.event) {// IE
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    if (kPress == 48 || kPress == 49 || valEnterBorrarInicio(kPress))
        return true
    else
        return false
}

function valfCTRL(e) {
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    if ($(this).val().indexOf(".") == -1 && kPress == 46)
        return true;
    else {
        if (kPress > 47 && kPress < 58 || valEnterBorrarInicio(kPress))
            return true;
        else
            return false;
    }
}

function valfPctCTRL(e) {
    var val = $(".fPctCTRL").val() + e.key;
    var valSplit = val.split('.');
    if (val > 100) {
        return false;
    }
    if (valSplit[1].length > 2) {
        return false;
    }
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    if ($(this).val().indexOf(".") == -1 && kPress == 46)
        return true;
    else {
        if (kPress > 47 && kPress < 58 || valEnterBorrarInicio(kPress))
            return true;
        else
            return false;
    }
}

/* esta funcion valida date con formato     0000-00-00  */
function valdCTRL(e) {
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }

    if ($(this).val().length > 9 && (kPress != 8 && kPress != 0)) {
        return false;
    } else {
        if ((($(this).val().indexOf("-") == -1 && $(this).val().length == 4) || ($(this).val().indexOf("-") == 4 && $(this).val().length == 7)) && (kPress == 45 || valEnterBorrarInicio(kPress)))
            return true;
        else {
            if (($(this).val().length != 4 && $(this).val().length != 7) && ((kPress > 47 && kPress < 58) || valEnterBorrarInicio(kPress)))
                return true;
            else
                return false;
        }
    }
}
/* esta funcion valida date con formato     0000/00/00  */
function valdCTRL2(e, ctrl) {
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    if ($(this).val().length > 9 && (kPress != 8 && kPress != 0)) {
        return false;
    } else {
        if ((($(this).val().indexOf("/") == -1 && $(this).val().length == 4) || ($(this).val().indexOf("/") == 4 && $(this).val().length == 7)) && (kPress == 47 || valEnterBorrarInicio(kPress)))
            return true;
        else {
            if (($(this).val().length != 4 && $(this).val().length != 7) && ((kPress > 47 && kPress < 58) || valEnterBorrarInicio(kPress)))
                return true;
            else
                return false;
        }
    }
}

function valsCTRL(e) {
    if (window.event) {// IE
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    /*Letras minusculas y MAYUSCULAS, Espacio, Borrar, Inicio y Enter*/
    if ((kPress > 64 && kPress < 91) || (kPress > 96 && kPress < 123) || kPress == 32 || valEnterBorrarInicio(kPress))
        return true;
    else
        return false;
}
function valsCTRLwithN(e) {
    if (window.event) {// IE
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    /*Letras minusculas y MAYUSCULAS mas Ññ, Espacio, Borrar, Inicio y Enter*/
    if ((kPress > 64 && kPress < 91) || (kPress > 96 && kPress < 123) || kPress == 32 || kPress == 241 || kPress == 209 || valEnterBorrarInicio(kPress))
        return true;
    else
        return false;
}

function valsCTRLiCTRL(e) {
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    /*Letras minusculas y MAYUSCULAS, Numeros, Espacio, Borrar, Inicio y Enter*/
    if ((kPress > 47 && kPress < 58) || (kPress > 64 && kPress < 91) || (kPress > 96 && kPress < 123) || kPress == 32 || valEnterBorrarInicio(kPress))
        return true;
    else
        return false;
}

function valsCTRLiCTRLwithN(e) {
    if (window.event) {
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    /*Letras minusculas y MAYUSCULAS, Numeros, Espacio, Borrar, Inicio y Enter*/
    if ((kPress > 47 && kPress < 58) || (kPress > 64 && kPress < 91) || (kPress > 96 && kPress < 123) || kPress == 32 || kPress == 241 || kPress == 209 || valEnterBorrarInicio(kPress))
        return true;
    else
        return false;
}


function valNotsCTRL(e) {
    if (window.event) {// IE
        kPress = e.keyCode;
    } else {
        kPress = e.which;
    }
    
    /*Letras minusculas y MAYUSCULAS, Espacio, Borrar, Inicio y Enter*/
    if ((kPress > 64 && kPress < 91) || (kPress > 96 && kPress < 123) || kPress == 209 || kPress == 241 || kPress == 225 || kPress == 233 || kPress == 237 || kPress == 243 || kPress == 250 || kPress == 193 || kPress == 201 || kPress == 205 || kPress == 211 || kPress == 218)
        return false;
    else
        return true;
    
}

/*************************************************************************/
/***********************     VALIDACIONES   ******************************/
/*************************************************************************/

/*
NOTA:   para mandar llamar esta funcion desde el OnClientClick anteponer el retunr para evitar el Postback
Ejem.:      OnClientClick="return ctrlObligatory('CtrlTxtValid')"
*/
function ctrlObligatory(cssRemplace) {
    var bResp = true;
    var cssSearch = "." + cssRemplace;
    $(cssSearch).each(function () {
        if ($(this).hasClass('ctrlObligatoryPositive') == true && $(this).val() < 1) {
            bResp = false;
            if ($(this).hasClass('ctrlObligatory') == false) {
                $(this).addClass("ctrlObligatory");
            }
        } else {
            if ($(this).val() == "") {
                bResp = false;
                if ($(this).hasClass('ctrlObligatory') == false) {
                    $(this).addClass("ctrlObligatory");
                }
            } else {
                $(this).removeClass("ctrlObligatory");
            }
        }
    });

    return bResp;
}

/*
NOTA:   para mandar llamar esta funcion desde el OnClientClick anteponer el return para evitar el Postback
Ejem.:      OnClientClick="return ctrlComboObligatory('CtrlComboValid')"
*/
function ctrlComboObligatory(cssRemplace) {
    var bResp = true;
    var cssSearch = "." + cssRemplace;
    $(cssSearch).each(function () {
        if ($(this).val() <= 0) {
            bResp = false;
            if ($(this).hasClass('ctrlObligatory') == false) {
                $(this).addClass("ctrlObligatory");
            }
        } else {
            if ($(this).hasClass('ctrlObligatoryPositive') == true && $(this).val() <= 0) {
                bResp = false;
                if ($(this).hasClass('ctrlObligatory') == false) {
                    $(this).addClass("ctrlObligatory");
                }
            } else {
                $(this).removeClass("ctrlObligatory");
            }
        }
    });

    return bResp;
}

/*
NOTA:   para mandar llamar esta funcion desde el OnClientClick anteponer el return para evitar el Postback
Ejem.:      OnClientClick="return ctrlComboTxtObligatory('CtrlTxtValid','CtrlComboValid')"
*/
function ctrlComboTxtObligatory(cssRemplaceTxt, cssRemplaceCombo) {
    var btxtValid = ctrlObligatory(cssRemplaceTxt);
    var bComboValid = ctrlComboObligatory(cssRemplaceCombo);
    if (btxtValid && bComboValid) {
        return true;
    } else {
        return false;
    }
}


/*  
VALIDACION DE CAMPOS NECESARIOS

NOTA:   para mandar llamar esta funcion desde el OnClientClick anteponer el retunr para evitar el Postback
Ejem.:      OnClientClick="return validateFormUser('CtrlValid','CtrlValidPass1','CtrlValidPass2')"
*/
function validateFormUser(cssRemplaceTxt, cssRemplacePass1, cssRemplacePass2) {
    var btxtValid = ctrlObligatory(cssRemplaceTxt);

    if (btxtValid == false) {
        return false;
    } else {
        var cssPass1 = "." + cssRemplacePass1;
        var cssPass2 = "." + cssRemplacePass2;
        if (($(cssPass1).val().length > 0 && $(cssPass1).val().length < 7) || ($(cssPass1).val() != $(cssPass2).val())) {
            $(cssPass1).addClass("ctrlObligatory");
            $(cssPass2).addClass("ctrlObligatory");
            return false;
        } else {
            $(cssPass1).removeClass("ctrlObligatory");
            $(cssPass2).removeClass("ctrlObligatory");
        }
        return true;
    }
}

/*  
VALIDACION DE CAMPOS NECESARIOS

NOTA:   para mandar llamar esta funcion desde el OnClientClick anteponer el retunr para evitar el Postback
Ejem.:      OnClientClick="return validateFormReasonCode('CtrlValid','input')"
*/
function validateFormReasonCode(cssRemplaceTxt, cssRemplaceTxt2, cssRemplaceTxt3) {
    var bool = true;
    var values = '';

    if (ctrlObligatory(cssRemplaceTxt) == true) {
        var txt2 = "." + cssRemplaceTxt2;
        var txt3 = "." + cssRemplaceTxt3;

        if ($(txt2).length > 0) {
            $(txt2).each(function () {
                $(txt3).removeClass("ctrlObligatory");
                if (this.value != "") {
                    values += this.value + '\\|/';
                    $(this).removeClass("ctrlObligatory");
                } else {
                    $(this).addClass("ctrlObligatory");
                    bool = false;
                }
            });
        } else {
            bool = false;
            $(txt3).addClass("ctrlObligatory");
        }


        if (bool == false) {
            $(".hid_CSVRework").val('');
        } else {
            $(".hid_CSVRework").val(values);
        }


    } else {
        $(".hid_CSVRework").val(values);
        bool = false;
    }

    return bool;

}

