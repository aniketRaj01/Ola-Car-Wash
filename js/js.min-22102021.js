function SetZindex(){var e=document.getElementsByClassName("navbar")[0].id;document.getElementById(e).style.zIndex="1030"}function titleCase(e){return e.toLowerCase().split(" ").map(function(e){return e[0].toUpperCase()+e.substring(1)}).join(" ")}function FncOutPutCarPrices(e){document.getElementById("S_small_price").innerHTML=e.S_small_price,document.getElementById("S_small_price_final").innerHTML=e.S_small_price_final,document.getElementById("S_small_price_input").value=e.S_small_price_input,document.getElementById("S_medium_price").innerHTML=e.S_medium_price,document.getElementById("S_medium_price_final").innerHTML=e.S_medium_price_final,document.getElementById("S_medium_price_input").value=e.S_medium_price_final,document.getElementById("S_large_price").innerHTML=e.S_large_price,document.getElementById("S_large_price_final").innerHTML=e.S_large_price_final,document.getElementById("S_large_price_input").value=e.S_large_price_final,document.getElementById("G_small_price").innerHTML=e.G_small_price,document.getElementById("G_small_price_final").innerHTML=e.G_small_price_final,document.getElementById("G_small_price_input").value=e.G_small_price_final,document.getElementById("G_medium_price").innerHTML=e.G_medium_price,document.getElementById("G_medium_price_final").innerHTML=e.G_medium_price_final,document.getElementById("G_medium_price_input").value=e.G_medium_price_final,document.getElementById("G_large_price").innerHTML=e.G_large_price,document.getElementById("G_large_price_final").innerHTML=e.G_large_price_final,document.getElementById("G_large_price_input").value=e.G_large_price_final,document.getElementById("P_small_price").innerHTML=e.P_small_price,document.getElementById("P_small_price_final").innerHTML=e.P_small_price_final,document.getElementById("P_small_price_input").value=e.P_small_price_final,document.getElementById("P_medium_price").innerHTML=e.P_medium_price,document.getElementById("P_medium_price_final").innerHTML=e.P_medium_price_final,document.getElementById("P_medium_price_input").value=e.P_medium_price_final,document.getElementById("P_large_price").innerHTML=e.P_large_price,document.getElementById("P_large_price_final").innerHTML=e.P_large_price_final,document.getElementById("P_large_price_input").value=e.P_large_price_final}function FncOutPutBookingPage(e){document.getElementById("sp_login_mobile_no2").innerHTML="<a href='tel:"+e.sp_id_mobile+"'><i class='fas fa-phone-volume Blackis'> "+e.sp_mobile_no_display+"</i></a> <a href='tel:8851401212'><i class='fas fa-phone-volume Blackis'> 88-5140-1212</i></a>",document.getElementById("sp_city_area").innerHTML="<a "+e.sp_city_area+"><i class='fas fa-map-marker-alt' > "+e.sp_city_area+"</i></a>",document.getElementById("silver_off").innerHTML=e.silver_off+"%&nbsp;OFF",document.getElementById("gold_off").innerHTML=e.gold_off+"%&nbsp;OFF",document.getElementById("platinum_off").innerHTML=e.platinum_off+"%&nbsp;OFF",document.getElementById("S_p_h_1").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.S_p_h_1,document.getElementById("S_p_h_2").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.S_p_h_2,document.getElementById("S_p_h_3").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.S_p_h_3,document.getElementById("S_p_h_4").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.S_p_h_4,document.getElementById("G_p_h_1").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.G_p_h_1,document.getElementById("G_p_h_2").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.G_p_h_2,document.getElementById("G_p_h_3").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.G_p_h_3,document.getElementById("G_p_h_4").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.G_p_h_4,document.getElementById("P_p_h_1").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.P_p_h_1,document.getElementById("P_p_h_2").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.P_p_h_2,document.getElementById("P_p_h_3").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.P_p_h_3,document.getElementById("P_p_h_4").innerHTML='<i class="fa fa-check FIconC pb-3 pr-3" aria-hidden="true"></i>'+e.P_p_h_4}function ReplaceSplChar(e,t){if("e"==t)var n=/[^.@\w]/gim;else if("n"==t)n=/[\D]/gim;else if("pt"==t)n=/[^\w]/gim;else if("t"==t)n=/[^.\@, \n\w]/gim;else if("f"==t)n=/[^.\d]/gim;else if("PChr"==t)n=/[/\=&*<>}{},]/g;var a=document.getElementById(e).value;a=a.replace(n,""),document.getElementById(e).value=a}function Submition(e,t,n){var a=document.getElementsByClassName("navbar")[0].id;document.getElementById(a).style.position="absolute";var i=$("#user_mobile_no").val(),l=i.length;if(l>11||l<10)return DivErr.classList.add("BgYellow"),void(document.getElementById("ErrDsc").innerHTML="mobile number not valid");var d=i.substring(l-10,11);if(document.getElementById("user_mobile_no").value=d,!1!==document.getElementById(e).checkValidity()){if(event.preventDefault(),event.stopPropagation(),"booking_form"==e){document.getElementById("email_yn").checked?document.getElementById("email_yn").value="1":document.getElementById("email_yn").value="0",document.getElementById("PromoCode").checked?document.getElementById("PromoCode").value="1":document.getElementById("PromoCode").value="0";BookingAjax(e,t)}else"Contact_form"==e&&ContactAjaxCall(e,t);if("service_partnership_application"==e){ErrClearing("DivErr4","ErrDsc4"),1==document.getElementById("tnc").checked?document.getElementById("tnc").value=1:document.getElementById("tnc").value=0;BookingServicePartnerAjax(e,t)}}}function ContactAjaxCall(e,t){$.ajax({type:"POST",url:"inside/ajax/ajax.php",data:$("#"+e).serialize()+"&mode="+t,success:function(e){"success"==(e=JSON.parse(e)).Status?($("#H1Txt").html(e.H1Txt).css("color","#ff00009c"),$("#H2Txt").html(e.H2Txt),$("#Body1").html(e.Body1),$("#Body2").html(e.Body2),$("#ModalThanks").modal("show")):($("#ErrDsc5").html(e.msg).css("color","red"),$("#DivErr5").addClass("BgYellow"))}})}function BookingServicePartnerAjax(e,t){if(LoaderDiv.classList.remove("Hide"),0==document.getElementById("sp_state_id").value)return $("#ErrDsc4").html("Please Select State").css("color","red"),$("#DivErr4").addClass("BgYellow"),void document.getElementById("LoaderDiv").classList.add("Hide");var n=$("#sp_state_id option:selected").text(),a=document.getElementById("sp_lat").value,i=document.getElementById("sp_lng").value,l=document.getElementById("tnc").value,d=sp_type_id.options[sp_type_id.selectedIndex].text;$.ajax({type:"POST",url:"inside/ajax/ajax.php",data:$("#"+e).serialize()+"&mode="+t+"&sp_lat="+a+"&sp_lng="+i+"&tnc="+l+"&sp_type_name="+d+"&sp_state_name="+n,success:function(e){document.getElementById("LoaderDiv").classList.add("Hide"),"success"==(e=JSON.parse(e)).Status?($("#H1Txt").html(e.H1Txt),$("#H2Txt").html(e.H2Txt),$("#Body1").html(e.Body1),$("#Body2").html(e.Body2),$("#Body3").html(e.Body3),$("#ModalThanks").modal("show")):($("#ErrDsc4").html(e.msg).css("color","red"),$("#DivErr4").addClass("BgYellow"))}})}function ErrClearing(e,t){document.getElementById(t).innerHTML="",document.getElementById(e).classList.remove("BgYellow")}function BookingAjax(e,t){var n=$("#cust_state option:selected").text(),a=document.getElementById("Modal_VehName").value,i=document.getElementById("Modal_PkgName").value,l=document.getElementById("Modal_PkgName2").value,d=document.getElementById("Modal_TotalPrice").value,o=document.getElementById("Modal_PkgOff").value,c=document.getElementById("Modal_FinalPrice").value,m=document.getElementById("Modal_PriceCalculation2").value,_=document.getElementById("Modal_service_mode").value;LoaderDiv.classList.remove("Hide"),$.ajax({type:"POST",url:"inside/ajax/ajax.php",data:$("#"+e).serialize()+"&mode="+t+"&state_name="+n+"&Modal_VehName="+a+"&Modal_PkgName="+i+"&Modal_PkgName2="+l+"&Modal_TotalPrice="+d+"&Modal_PkgOff="+o+"&Modal_FinalPrice="+c+"&Modal_PriceCalculation="+m+"&Modal_service_mode="+_,success:function(e){document.getElementById("LoaderDiv").classList.add("Hide");var t=JSON.parse(e);"success"==t.Status?($("#H1Txt").html(t.H1Txt),$("#H2Txt").html(t.H2Txt),$("#Body1").html(t.Body1),$("#Body2").html(t.Body2),$("#Body3").html(t.Body3),$("#ModalThanks").modal("show")):($("#ErrDsc4").html(t.msg).css("color","red"),$("#DivErr4").addClass("BgYellow"))}})}function FncMapInitiate(){event.preventDefault(),event.stopPropagation();var e=parseFloat(document.getElementById("sp_lat").value),t=parseFloat(document.getElementById("sp_lng").value),n=e.toString();if((n=n.length)>0){var a=document.getElementById("map-canvas"),i=new google.maps.Map(a,{center:new google.maps.LatLng(e,t),zoom:11,mapTypeId:google.maps.MapTypeId.ROADMAP}),l=new DistanceWidget(i);google.maps.event.addListener(l,"distance_changed",function(){displayInfo(l)}),google.maps.event.addListener(l,"position_changed",function(){displayInfo(l)})}}function ShowNHideEmail(e){var t=document.getElementById(e);"email_yn"==e?$("#get_email_copy_div").toggle():"PromoCode"==e&&(1==t.checked?document.getElementById("promo_code_div").style.display="block":(document.getElementById("promo_code_div").style.display="none",document.getElementById("promo_code").value=""))}function ChangeVehicle(){$.ajax({type:"POST",url:"inside/ajax/ajax.php",data:{mode:"ChangeVehicle"}}).done(function(e){window.location.href=e})}function PkgShowHide(e){$.ajax({type:"POST",url:"inside/ajax/ajax.php",data:{mode:"DivCheck",divNameStarts:e}}).done(function(){$('[id^="DivId"]').hide(),$('[id^="DivId_'+e+'"]').show(),$("#DivId_CB_1").removeClass("Mt200"),$("#DivId_CB_1").addClass("Mt390"),$("#DivId_3M_8").removeClass("Mt200"),$("#DivId_3M_8").addClass("Mt390"),$("#DivId_MEG_11").removeClass("Mt200"),$("#DivId_MEG_11").addClass("Mt390"),$('[id^="Pck_"]').removeClass("BgBlack White"),$('[id^="Pck_"]').addClass("BgGrayLight Black"),$('[id^="Pck_'+e+'"]').removeClass("BgGrayLight Black"),$('[id^="Pck_'+e+'"]').addClass("BgBlack White");var t="#DivId_"+e+"_1";"3M"==e?t="#DivId_"+e+"_8":"MEG"==e&&(t="#DivId_"+e+"_11"),$(document).scrollTop($(t).offset().top-90)})}$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()});