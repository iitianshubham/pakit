//Image upload -- Shubham
function file(){
    document.getElementById("detailsform_hiddenfile").click();
}

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

$(document).ready(function(){
    $("#from_input").focus(function(){
    if(($("#from_input").val()) == ""){
    $("#from_source_label").removeClass("new_pakit_movelabeltodefault");
    $("#from_source_label").removeClass("new_pakit_label");
    $("#from_source_label").addClass("new_pakit_movelabelup");
    $("#from_input").removeClass("new_pakit_underlinedefault"); 
    $("#from_input").addClass("new_pakit_blueunderline");    
        }
    if($("#destination_input").val() == ""){
    $("#to_destination_label").addClass("new_pakit_movelabeltodefault");
    $("#destination_input").addClass("new_pakit_underlinedefault");    
        }       
    if($("#flight_input").val() == ""){
    $("#flight_date_label").addClass("new_pakit_movelabeltodefault");       
    $("#flight_input").addClass("new_pakit_underlinedefault");    
        }
    if($("#weight_input").val() == ""){
    $("#weight_carry_label").addClass("new_pakit_movelabeltodefault");
    $("#weight_input").addClass("new_pakit_underlinedefault");    
        }
    });
});


$(document).ready(function(){
    $("#destination_input").focus(function(){
    if(($("#destination_input").val()) == ""){
    $("#to_destination_label").removeClass("new_pakit_label");    
    $("#to_destination_label").removeClass("new_pakit_movelabeltodefault");
    $("#to_destination_label").addClass("new_pakit_movelabelup");
    $("#destination_input").removeClass("new_pakit_underlinedefault");  
    $("#destination_input").addClass("new_pakit_blueunderline");      
        }
    if($("#from_input").val() == ""){
    $("#from_source_label").addClass("new_pakit_movelabeltodefault");
    $("#from_input").addClass("new_pakit_underlinedefault");    
        }       
    if($("#flight_input").val() == ""){
    $("#flight_date_label").addClass("new_pakit_movelabeltodefault");
    $("#flight_input").addClass("new_pakit_underlinedefault");    
        }
    if($("#weight_input").val() == ""){
    $("#weight_carry_label").addClass("movelabeltodefault");
    $("#weight_input").addClass("underlinedefault");    
        }                   
    });
});

$(document).ready(function(){
    $("#flight_input").focus(function(){
    if($("#flight_input").val() == ""){
    $("#flight_date_label").removeClass("new_pakit_label");
    $("#flight_date_label").removeClass("new_pakit_movelabeltodefault");
    $("#flight_date_label").addClass("new_pakit_movelabelup");
    $("#flight_input").removeClass("new_pakit_underlinedefault");   
    $("#flight_input").addClass("new_pakit_blueunderline"); 
        }
    if($("#destination_input").val() == ""){
    $("#to_destination_label").addClass("new_pakit_movelabeltodefault");
    $("#destination_input").addClass("new_pakit_underlinedefault");    
        }       
    if($("#from_input").val() == ""){
    $("#from_source_label").addClass("new_pakit_movelabeltodefault");
    $("#from_input").addClass("new_pakit_underlinedefault");    
        }
    if($("#weight_input").val() == ""){
    $("#weight_carry_label").addClass("new_pakit_movelabeltodefault");
    $("#weight_input").addClass("new_pakit_underlinedefault");    
        }                   
    });
});

$(document).ready(function(){
    $("#weight_input").focus(function(){
    if($("#weight_input").val() == ""){
    $("#weight_carry_label").removeClass("new_pakit_label");    
    $("#weight_carry_label").removeClass("new_pakit_movelabeltodefault");   
    $("#weight_carry_label").addClass("new_pakit_movelabelup");
    $("#weight_input").removeClass("new_pakit_underlinedefault");   
    $("#weight_input").addClass("new_pakit_blueunderline");    
        }
    if($("#destination_input").val() == ""){
    $("#to_destination_label").addClass("new_pakit_movelabeltodefault");
    $("#destination_input").addClass("new_pakit_underlinedefault");    
        }       
    if($("#flight_input").val() == ""){
    $("#flight_date_label").addClass("new_pakit_movelabeltodefault");
    $("#flight_input").addClass("new_pakit_underlinedefault");    
        }
    if($("#from_input").val() == ""){
    $("#from_source_label").addClass("new_pakit_movelabeltodefault");
    $("#from_input").addClass("new_pakit_underlinedefault");    
        }               
    });
});
$('.rating input').change(function () {
  var $radio = $(this);
  $('.rating .selected').removeClass('selected');
  $radio.closest('label').addClass('selected');
});