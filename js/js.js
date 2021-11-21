function titleCase(str) {
    let strLowerCase = str.toLowerCase();
    let wordArr = strLowerCase.split(" ").map(function (currentValue) {
        return currentValue[0].toUpperCase() + currentValue.substring(1);
    });

    return wordArr.join(" ");
}
function FncOutPutCarPrices(jsn) {
    document.getElementById("S_small_price").innerHTML = jsn.S_small_price;
    document.getElementById("S_small_price_final").innerHTML = jsn.S_small_price_final;
    document.getElementById("S_small_price_input").value = jsn.S_small_price_input;
    document.getElementById("S_medium_price").innerHTML = jsn.S_medium_price;
    document.getElementById("S_medium_price_final").innerHTML = jsn.S_medium_price_final;
    document.getElementById("S_medium_price_input").value = jsn.S_medium_price_final;
    document.getElementById("S_large_price").innerHTML = jsn.S_large_price;
    document.getElementById("S_large_price_final").innerHTML = jsn.S_large_price_final;
    document.getElementById("S_large_price_input").value = jsn.S_large_price_final;
    document.getElementById("G_small_price").innerHTML = jsn.G_small_price;
    document.getElementById("G_small_price_final").innerHTML = jsn.G_small_price_final;
    document.getElementById("G_small_price_input").value = jsn.G_small_price_final;
    document.getElementById("G_medium_price").innerHTML = jsn.G_medium_price;
    document.getElementById("G_medium_price_final").innerHTML = jsn.G_medium_price_final;
    document.getElementById("G_medium_price_input").value = jsn.G_medium_price_final;
    document.getElementById("G_large_price").innerHTML = jsn.G_large_price;
    document.getElementById("G_large_price_final").innerHTML = jsn.G_large_price_final;
    document.getElementById("G_large_price_input").value = jsn.G_large_price_final;
    document.getElementById("P_small_price").innerHTML = jsn.P_small_price;
    document.getElementById("P_small_price_final").innerHTML = jsn.P_small_price_final;
    document.getElementById("P_small_price_input").value = jsn.P_small_price_final;
    document.getElementById("P_medium_price").innerHTML = jsn.P_medium_price;
    document.getElementById("P_medium_price_final").innerHTML = jsn.P_medium_price_final;
    document.getElementById("P_medium_price_input").value = jsn.P_medium_price_final;
    document.getElementById("P_large_price").innerHTML = jsn.P_large_price;
    document.getElementById("P_large_price_final").innerHTML = jsn.P_large_price_final;
    document.getElementById("P_large_price_input").value = jsn.P_large_price_final;
}
function FncOutPutBookingPage(jsn) {
    document.getElementById("sp_login_mobile_no2").innerHTML = "<a href='tel:" + jsn.sp_id_mobile + "'><i class='fas fa-phone-volume Blackis'>" + " " + jsn.sp_mobile_no_display + "</i></a> <a href='tel:8851401212'><i class='fas fa-phone-volume Blackis'> 88-5140-1212</i></a>";
    document.getElementById("sp_city_area").innerHTML = "<a " + jsn.sp_city_area + "><i class='fas fa-map-marker-alt' >" + " " + jsn.sp_city_area + "</i></a>";
    document.getElementById("silver_off").innerHTML = jsn.silver_off + '%&nbsp;OFF';
    document.getElementById("gold_off").innerHTML = jsn.gold_off + '%&nbsp;OFF';
    document.getElementById("platinum_off").innerHTML = jsn.platinum_off + '%&nbsp;OFF';
    document.getElementById("S_p_h_1").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.S_p_h_1;
    document.getElementById("S_p_h_2").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.S_p_h_2;
    document.getElementById("S_p_h_3").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.S_p_h_3;
    document.getElementById("S_p_h_4").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.S_p_h_4;
    document.getElementById("G_p_h_1").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.G_p_h_1;
    document.getElementById("G_p_h_2").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.G_p_h_2;
    document.getElementById("G_p_h_3").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.G_p_h_3;
    document.getElementById("G_p_h_4").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.G_p_h_4;
    document.getElementById("P_p_h_1").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.P_p_h_1;
    document.getElementById("P_p_h_2").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.P_p_h_2;
    document.getElementById("P_p_h_3").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.P_p_h_3;
    document.getElementById("P_p_h_4").innerHTML = '<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>' + jsn.P_p_h_4;
}
function ReplaceSplChar(id, type)
{
    if (type == 'e') {
        var regExpr = /[^.@\w]/igm;
    } else if (type == 'n') {
        var regExpr = /[\D]/igm;
    } else if (type == 'pt') {
        var regExpr = /[^\w]/igm; //pure text alpha numeric without any space or spl char
    } else if (type == 't') {
        var regExpr = /[^.\@, \n\w]/igm; //Special Char Remove except Fullstop, comma, Space, New Line Including Underscore & Number
    } else if (type == 'f') { //float
        var regExpr = /[^.\d]/igm;
    } else if (type == 'PChr') { //float
        var regExpr = /[/\=&*<>}{},]/g;
    }
    var string = document.getElementById(id).value;
    string = string.replace(regExpr, "");
    document.getElementById(id).value = string;
}
function Submition(FormId, Mode, BookType) {
    var xyz = document.getElementsByClassName("navbar")[0].id;
    document.getElementById(xyz).style.position = "absolute";
    var UserMobileNo1 = $("#user_mobile_no").val();
    var Lenth = UserMobileNo1.length;
    if (Lenth > 11 || Lenth < 10) {
        DivErr.classList.add("BgYellow");
        document.getElementById("ErrDsc").innerHTML = "mobile number not valid";
        return;
    }
    var c_user_mobile_no = UserMobileNo1.substring(Lenth - 10, 11);
    document.getElementById('user_mobile_no').value = c_user_mobile_no;
    var Form = document.getElementById(FormId);

    if (Form.checkValidity() === false) {
        return;
    } else
    {
        event.preventDefault();
        event.stopPropagation();
    }
    if (FormId == 'booking_form') {
        if (document.getElementById("email_yn").checked) {
            document.getElementById("email_yn").value = '1';
        } else {
            document.getElementById("email_yn").value = '0';
        }
        if (document.getElementById("PromoCode").checked) {
            document.getElementById("PromoCode").value = '1';
        } else {
            document.getElementById("PromoCode").value = '0';
        }
        var results = BookingAjax(FormId, Mode);
    } else if (FormId == 'Contact_form') {
        ContactAjaxCall(FormId, Mode);
    }
    if (FormId == 'service_partnership_application') {
        ErrClearing('DivErr4', 'ErrDsc4');
        var checktnc = document.getElementById("tnc");
        if (checktnc.checked == true) {
            document.getElementById("tnc").value = 1;
        } else {
            document.getElementById("tnc").value = 0;
        }
        var results = BookingServicePartnerAjax(FormId, Mode);
    }
}
function ContactAjaxCall(FormId, Mode) {
    $.ajax({
        type: "POST",
        url: 'inside/ajax/ajax.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {

            var result = JSON.parse(result);
            if (result.Status == 'success') {
                $("#H1Txt").html(result.H1Txt).css("color", "#ff00009c");
                $("#H2Txt").html(result.H2Txt);
                $("#Body1").html(result.Body1);
                $("#Body2").html(result.Body2);
                $("#ModalThanks").modal("show");
            } else {
                $("#ErrDsc5").html(result.msg).css("color", "red");
                $("#DivErr5").addClass("BgYellow");
            }
        }
    })
}
function BookingServicePartnerAjax(FormId, Mode) {
    LoaderDiv.classList.remove("Hide");
    var sp_state_id = document.getElementById("sp_state_id").value;
    if (sp_state_id == 0) {
        $("#ErrDsc4").html('Please Select State').css("color", "red");
        $("#DivErr4").addClass("BgYellow");
        var element = document.getElementById("LoaderDiv");
        element.classList.add("Hide");
        return;
    }
    var sp_state_name = $("#sp_state_id option:selected").text();
    var sp_lat = document.getElementById("sp_lat").value;
    var sp_lng = document.getElementById("sp_lng").value;
    var tnc = document.getElementById("tnc").value;
    var sp_type_name = sp_type_id.options[sp_type_id.selectedIndex].text;
    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode + "&sp_lat=" + sp_lat + "&sp_lng=" + sp_lng + "&tnc=" + tnc + "&sp_type_name=" + sp_type_name + "&sp_state_name=" + sp_state_name,
        success: function (result) {
            var element = document.getElementById("LoaderDiv");
            element.classList.add("Hide");
            result = JSON.parse(result);
            if (result.Status == 'success') {
                $("#H1Txt").html(result.H1Txt);
                $("#H2Txt").html(result.H2Txt);
                $("#Body1").html(result.Body1);
                $("#Body2").html(result.Body2);
                $("#Body3").html(result.Body3);
                $("#ModalThanks").modal("show");
            } else {
                $("#ErrDsc4").html(result.msg).css("color", "red");
                $("#DivErr4").addClass("BgYellow");
            }
        }
    });
}
function ErrClearing(div1, div2) {
    document.getElementById(div2).innerHTML = '';
    var element = document.getElementById(div1);
    element.classList.remove("BgYellow");
}
function BookingAjax(FormId, Mode) {
    var state_name = $("#cust_state option:selected").text();
    var Modal_VehName = document.getElementById("Modal_VehName").value;
    var Modal_PkgName = document.getElementById("Modal_PkgName").value;
    var Modal_PkgName2 = document.getElementById("Modal_PkgName2").value;
    var Modal_TotalPrice = document.getElementById("Modal_TotalPrice").value;
    var Modal_PkgOff = document.getElementById("Modal_PkgOff").value;
    var Modal_FinalPrice = document.getElementById("Modal_FinalPrice").value;
    var Modal_PriceCalculation = document.getElementById("Modal_PriceCalculation2").value;
    var Modal_service_mode = document.getElementById("Modal_service_mode").value;
    LoaderDiv.classList.remove("Hide");
    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode + "&state_name=" + state_name +"&Modal_VehName=" + Modal_VehName+ "&Modal_PkgName=" + Modal_PkgName+ "&Modal_PkgName2=" + Modal_PkgName2+ "&Modal_TotalPrice=" + Modal_TotalPrice+ "&Modal_PkgOff=" + Modal_PkgOff+ "&Modal_FinalPrice=" + Modal_FinalPrice+ "&Modal_PriceCalculation=" + Modal_PriceCalculation+ "&Modal_service_mode=" + Modal_service_mode,
        success: function (results) {
//            console.log(results);
            var element = document.getElementById("LoaderDiv");
            element.classList.add("Hide");
            var result = JSON.parse(results);
            if (result.Status == 'success') {
                $("#H1Txt").html(result.H1Txt);
                $("#H2Txt").html(result.H2Txt);
                $("#Body1").html(result.Body1);
                $("#Body2").html(result.Body2);
                $("#Body3").html(result.Body3);
                $("#ModalThanks").modal("show");
            } else {
                $("#ErrDsc4").html(result.msg).css("color", "red");
                $("#DivErr4").addClass("BgYellow");
            }
        }
    });
}
function FncMapInitiate() {
    event.preventDefault();
    event.stopPropagation();
    var visitor_lat = parseFloat(document.getElementById("sp_lat").value);
    var visitor_lng = parseFloat(document.getElementById("sp_lng").value);
    var lat_len = visitor_lat.toString();
    lat_len = lat_len.length;
    if (lat_len > 0) {
        var mapDiv = document.getElementById('map-canvas');
        var map = new google.maps.Map(mapDiv, {
            center: new google.maps.LatLng(visitor_lat, visitor_lng),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var distanceWidget = new DistanceWidget(map);
        google.maps.event.addListener(distanceWidget, 'distance_changed', function () {
            displayInfo(distanceWidget);
        });
        google.maps.event.addListener(distanceWidget, 'position_changed', function () {
            displayInfo(distanceWidget);
        });
    }
}
function ShowNHideEmail(email) {
    var ShowHide = document.getElementById(email);
    if (email == 'email_yn') {
         $("#get_email_copy_div").toggle();
//        ShowHide = document.getElementById(email);
//        if (ShowHide.checked === true) {
//            document.getElementById("get_email_copy_div").style.display = "block";
//        } else {
//            document.getElementById("get_email_copy_div").style.display = "none";
//            document.getElementById("get_email_copy").value = '';
//        }
    } else if (email == 'PromoCode') {
        if (ShowHide.checked == true) {
            document.getElementById("promo_code_div").style.display = "block";
        } else {
            document.getElementById("promo_code_div").style.display = "none";
            document.getElementById("promo_code").value = '';
        }
    }
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


function ChangeVehicle(){
    $.ajax({
            type: "POST",
            url: "inside/ajax/ajax.php",
            data: {
                mode: 'ChangeVehicle',
            }
        }).done(function (msg) {
//            alert(msg);
//            return;
           window.location.href = msg;
        });
}

function PkgShowHide(divNameStarts) {
//                debugger;
                $.ajax({
                    type: "POST",
                    url: "inside/ajax/ajax.php",
                    data: {
                        mode: 'DivCheck', divNameStarts: divNameStarts
                    }
                }).done(function () {
                    $('[id^="DivId"]').hide();
                    $('[id^="DivId_' + divNameStarts + '"]').show();
                    $('#DivId_CB_1').removeClass("Mt200");
                    $('#DivId_CB_1').addClass("Mt390");
                    $('#DivId_3M_8').removeClass("Mt200");
                    $('#DivId_3M_8').addClass("Mt390");
                    $('#DivId_MEG_11').removeClass("Mt200");
                    $('#DivId_MEG_11').addClass("Mt390");
                    $('[id^="Pck_"]').removeClass("BgBlack White");
                    $('[id^="Pck_"]').addClass("BgGrayLight Black");
                    $('[id^="Pck_' + divNameStarts + '"]').removeClass("BgGrayLight Black");
                    $('[id^="Pck_' + divNameStarts + '"]').addClass("BgBlack White");

                    var ScrollDiv = "#DivId_" + divNameStarts + "_1";
                    if (divNameStarts == "3M") {
                        ScrollDiv = "#DivId_" + divNameStarts + "_8";
                    } else if (divNameStarts == "MEG") {
                        ScrollDiv = "#DivId_" + divNameStarts + "_11";
                    }
                    $(document).scrollTop($(ScrollDiv).offset().top - 90);
                });
            }