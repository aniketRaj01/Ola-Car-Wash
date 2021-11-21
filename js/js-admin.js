var LoginAttm = 0;
function OnlineSubmit(FormId, Mode) {
  
    var Form = document.getElementById(FormId);
    if (Form.checkValidity() === false) {
//        document.getElementById("navid").style.position = "absolute";
//        alert('Form NOT Validated');
        var xyz = document.getElementsByClassName("navbar")[0].id;
        document.getElementById(xyz).style.position = "absolute";
        return;
    } else
    {
        event.preventDefault();
        event.stopPropagation();
    }
//    After validation functions
    if (FormId == 'login-from') {
//        debugger;
        var UserMobileNo1 = $("#login_mobile_no").val();
        var Lenth = UserMobileNo1.length;
        if (Lenth > 11 || Lenth < 10) {
//         Msg='mobile number not valid';
            DivErr.classList.add("BgYellow");
            document.getElementById("ErrDsc").innerHTML = "mobile number not valid";
            return;
        }
        var c_user_mobile_no = UserMobileNo1.substring(Lenth - 10, 11);
        document.getElementById('login_mobile_no').value = c_user_mobile_no;
        var results = LoginFunc(FormId, Mode);
    } else if (FormId == 'FrmCarPriceUpdate') {
        var results = PriceUpdateFunc(FormId, Mode);
    } else if (FormId == 'FrmHighlightsUpdate') {
        var results = HightLightsUpdateFunc(FormId, Mode);
    } else if (FormId == 'FrmHighlightsUpdateBike') {
        var results = HightLightsUpdateFunc(FormId, Mode);
    } else if (FormId == 'FrmDesUpdate') {
        var results = AjaxCall(FormId, Mode);
    } else if (FormId == 'FrmDesUpdateBike') {
        var results = AjaxCall(FormId, Mode);
    } else if (FormId == 'FrmBikePriceUpdate') {
        var results = AjaxCall(FormId, Mode);
    } else if (FormId == 'forget-from') {
        var result = forgetAjaxCall(FormId, Mode);
    } else if (FormId == 'user_pw_change') {
        var result = AjaxCall(FormId, Mode);
    } else if (FormId == 'user_profile') {
        var YesNo = confirm("Do you really want it?");
        if (YesNo == true) {
            var result = AjaxCall(FormId, Mode);
        } else {
            $("#ErrDsc2").html('Action has been Cancelled by YOu!').css("color", "red");
            $("#DivErr2").addClass("BgYellow");
        }
    } else if (FormId == 'admin_page_entry') {
        var result = AdminPageEntry(FormId, Mode);
    } else if (FormId == 'AdminUserForm') {
        var result = AdminUserFormAjax(FormId, Mode);
    } else if (FormId == 'AdminFinYearUpdate') {
        var result = AdminFinYearUpdateAjax(FormId, Mode);
    } else if (FormId == 'AdminBankGstInsert') {
        var result = AdminFinYearInsertAjax(FormId, Mode);
    }
}

function AdminFinYearInsertAjax(FormId, Mode) {
    $.ajax({
        type: "POST",
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {
            //console.log(result);
            var result = result.split(",");
            if (result[0].trim() == "success") {
                $("#ErrDsc1").html(result[1]).css("color", "green");
                $("#DivErr1").css("backgroundColor", "yellow");
            }
        }
    });
}
function AdminFinYearUpdateAjax(FormId, Mode) {
    var fin_year_id = document.getElementById("fin_year_id").value;
    $.ajax({
        type: "POST",
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode + "&fin_year_id=" + fin_year_id,
        success: function (result) {
           // console.log(result);
            var result = result.split(",");
            if (result[0].trim() == "success") {
                $("#ErrDsc").html(result[1]).css("color", "green");
                $("#DivErr").css("backgroundColor", "yellow");
            }
        }
    });
}

function AdminUserFormAjax(FormId, Mode) {
    $.ajax({
        type: "POST",
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {
            var result = result.split("|");
            if (result[0] == "success") {
                $("#ErrDsc").html(result[1]).css("color", "green");
                $("#DivErr").css("backgroundColor", "yellow");
            } else {
                $("#ErrDsc").html(result[1]).css("color", "red");
                $("#DivErr").css("backgroundColor", "yellow");
            }
        }
    })
}


function AdminPageEntry(FormId, Mode) {
    if (document.getElementById("CustTypes").value == '') {
        document.getElementById("ErrDsc").innerHTML = "Select User Type";
        DivErr.classList.add("BgYellow");
        return;
    }

    if (Mode == 'update_admin_pages' && (document.getElementById("CustTypes").value == '0' || document.getElementById("AdmiPageDataId").value == '0')) {
        document.getElementById("ErrDsc").innerHTML = "Show any Page from the Table for Updating";
        DivErr.classList.add("BgYellow");
        return;
    }
    if (Mode == 'Insert_admin_pages' && (document.getElementById("CustTypes").value == '0')) {
        document.getElementById("ErrDsc").innerHTML = "Kindly Select User Types";
        DivErr.classList.add("BgYellow");
        return;
    }
    if (Mode == 'Delete_admin_pages') {
        var MsDelete = prompt("Enter DELETE for Deletion");
        if (MsDelete != 'DELETE') {
            document.getElementById("ErrDsc").innerHTML = "Action Cancelled due to DELETE Spelling Not Matched";
            DivErr.classList.add("BgYellow");
            return;
        }
    }
    var CustTypes = document.getElementById('CustTypes').value;
    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode + "&CustTypes=" + CustTypes,
        success: function (result) {
            result = result.split("|");
            if (result[0] == 'error') {
                $("#ErrDsc").html(result[1]).css("color", "red");
                DivErr.classList.add("BgYellow");
            } else if (result[0] == 'success') {

                $("#ErrDsc").html(result[1]).css("color", "green");
            }
        }
    });
}
function forgetAjaxCall(FormId, Mode) {
    if (LoginAttm > 3) {
        document.getElementById("forget-btn").style.display = "none";
    }
    LoginAttm++;
    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode + "&forgetAttm=" + LoginAttm,
        success: function (result) {

            var splitmsg = result.split("|");
            if (splitmsg[0].toLowerCase().trim() == 'success') {

                $("#forget-from").hide();

                $("#Pw_Sent").css("display", "block");


            } else {
                $("#ErrDsc").html(splitmsg[1]).css("color", "red");
                DivErr.classList.add("BgYellow");
            }
            if (splitmsg[0] == 'maximum') {
                $("#ErrDsc").html(splitmsg[1]).css("color", "red");
                DivErr.classList.add("BgYellow");
            }
        }
    });
}
function AjaxCall(FormId, Mode) {
    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {


            var StringSplit = result.split(",");
            if (StringSplit[0].trim() == 'success') {
                $("#ErrDsc").html(StringSplit[1]).css("color", "green");
                $("#DivErr").addClass("BgTangaroa ");
            } else if (StringSplit[0].trim() == 'error') {
                $("#ErrDsc").html(StringSplit[1]).css("color", "red");
                $("#DivErr").addClass("BgYellow");
            } else if (StringSplit[0].trim() == 'success2') {
                $("#ErrDsc2").html(StringSplit[1]).css("color", "green");
                $("#DivErr2").addClass("BgTangaroa");
            } else if (StringSplit[0].trim() == 'error2') {
                $("#ErrDsc2").html(StringSplit[1]).css("color", "red");
                $("#DivErr2").addClass("BgYellow");
            }
        }
    });
}
function HightLightsUpdateFunc(FormId, Mode) {

    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {

            var StringSplit = result.split(",");
            if (StringSplit[0].trim() == 'success') {
                $("#ErrDsc").html(StringSplit[1]).css("color", "green");
                $("#DivErr").addClass("BgTangaroa");
            }
        }
    });
}
function PriceUpdateFunc(FormId, Mode) {

    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Mode,
        success: function (result) {
            $("#ErrDsc").html(result).css("color", "green");
            $("#DivErr").addClass("BgTangaroa ");
        }
    });
}

function CheckPwSplChar() {
    var sa = document.getElementById(pws).value;
    if (sa.match(/[^.\@,*\w]/igm)) {
        document.getElementById("ErrDsc").innerHTML = "Special Charater is Not Allowed in PassWord";
        DivErr.classList.add("BgYellow");
    }
}
function ErrClearing(div1, div2) {
    document.getElementById(div2).innerHTML = '';
    var element = document.getElementById(div1);
    element.classList.remove("BgYellow");
}

function LoginFunc(FormId, Login) {

    if (LoginAttm > 3) {
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("forget-btn").style.display = "block";
    }
    LoginAttm++;
    var user_pw = document.getElementById("user_pw").value;
    if (user_pw.match(/[^.\@,*\w]/igm)) {

        document.getElementById("ErrDsc").innerHTML = "Special Charater is Not Allowed in PassWord";
        DivErr.classList.add("BgYellow");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'inside/ajax/ajax-admin.php',
        data: $("#" + FormId).serialize() + "&mode=" + Login + "&LoginAttm=" + LoginAttm,
        success: function (result) {
//            alert(result);
            if (result.trim() == 'success') {
                window.location.href = "admin-dashboard";
            } else {
                $("#ErrDsc").html(result);
                DivErr.classList.add("BgYellow");
            }

        }
    });
}
function LoginEnter(event) {
    var char = event.which || event.keyCode;
    if (char == '13')
    {
        OnlineSubmit('login-from', 'login');
    } else {
        ErrClearing('DivErr', 'ErrDsc');
    }
}

//         Password Show & Hide
$('.toggle-password').on('click', function () {
    $(this).toggleClass('fa-eye fa-eye-slash');
    let input = $($(this).attr('toggle'));
    if (input.attr('type') == 'password') {
        input.attr('type', 'text');
    } else {
        input.attr('type', 'password');
    }
});



    