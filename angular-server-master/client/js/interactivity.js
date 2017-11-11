//Image upload -- Shubham
function file(){
    document.getElementById("detailsform_hiddenfile").click();
}


/* SIGNUP PAGE --------------------------------------------------------------*/
function empty(tag){
    return $("#"+tag).val()? 0:1;
}

function default_class(tag, label_tag){
    $("#"+label_tag).addClass("signup_movelabeltodefault");
    $("#"+tag).removeClass("signup_underlineinput");
    $("#"+tag).addClass("signup_underlinedefault");
}   

function default_signup(tag, label_tag){
    if(empty(tag)){
        default_class(tag, label_tag);
    }
}

function on_focus(tag, label_tag){
    if(empty(tag)){
        $("#"+label_tag).removeClass("signup_movelabeltodefault");  
        $("#"+label_tag).addClass("signup_movelabelup");
        $("#"+tag).removeClass("signup_underlinedefault");    
        $("#"+tag).addClass("signup_underlineinput"); 
    }
}

$(document).on('focus click', '#name', function() {
    on_focus("name", "name_label");
    default_signup("password", "password_label");
    default_signup("email", "email_label");
});
$(document).on('focus click', '#email', function() {
    on_focus("email", "email_label");
    default_signup("password", "password_label");
    default_signup("name", "name_label");
});
$(document).on('focus click', '#password', function() {
    on_focus("password", "password_label");
    default_signup("name", "name_label");
    default_signup("email", "email_label");
});


/* OPT PAGES --------------------------------------------------------------*/

function opt_default(tag, label_tag){
    if(empty(tag)){
        $("#"+label_tag).addClass("new_pakit_movelabeltodefault");
        $("#"+tag).addClass("new_pakit_underlinedefault");
    }
}

function opt_onFocus(tag, label_tag){
    if(empty(tag)){
        $("#"+label_tag).removeClass("new_pakit_movelabeltodefault");
        $("#"+label_tag).removeClass("new_pakit_label");
        $("#"+label_tag).addClass("new_pakit_movelabelup");
        $("#"+tag).removeClass("new_pakit_underlinedefault"); 
        $("#"+tag).addClass("new_pakit_blueunderline");  
    }
}

$(document).on('focus click', "#from_input", function(){
    opt_onFocus("from_input", "from_source_label");
    opt_default("destination_input", "to_destination_label");
    opt_default("flight_input", "flight_date_label");
    opt_default("weight_input", "weight_carry_label");
});

$(document).on('focus click', "#destination_input", function(){
    opt_default("from_input", "from_source_label");
    opt_onFocus("destination_input", "to_destination_label");
    opt_default("flight_input", "flight_date_label");
    opt_default("weight_input", "weight_carry_label");
});

$(document).on('focus click', "#flight_input", function(){
    opt_default("from_input", "from_source_label");
    opt_default("destination_input", "to_destination_label");
    opt_onFocus("flight_input", "flight_date_label");
    opt_default("weight_input", "weight_carry_label");
});

$(document).on('focus click', "#weight_input", function(){
    opt_default("from_input", "from_source_label");
    opt_default("destination_input", "to_destination_label");
    opt_default("flight_input", "flight_date_label");
    opt_onFocus("weight_input", "weight_carry_label");
});


$('.rating input').change(function () {
  var $radio = $(this);
  $('.rating .selected').removeClass('selected');
  $radio.closest('label').addClass('selected');
});