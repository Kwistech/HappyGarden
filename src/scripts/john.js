/**
 * function when plant button click, it will show the plant list
 */
$("button:first").click(function(){
    $("#plant").removeClass("hide");
    $("#pest").addClass("hide");
    $("#summary").addClass("hide");
    $("#pestSummary").addClass("hide");
});
/**
 * function when pest button click, it will show the pest list
 */
$("button:eq(1)").click(function(){
    $("#pest").removeClass("hide");
    $("#plant").addClass("hide");
    $("#summary").addClass("hide");
    $("#pestSummary").addClass("hide");
});

$("#plant").change(function(){
    $("#summary").toggleClass("hide");
    $("#plant").toggleClass("hide");
    $("select option").prop("selected",false);
});
$("#exitSummary").click(function(){
    $("#summary").toggleClass("hide");
    $("#plant").toggleClass("hide");
});

$("#pest").change(function(){
    $("#pestSummary").toggleClass("hide");
    $("#pest").toggleClass("hide");
    $("select option").prop("selected",false);
});

$("#exitPestSummary").click(function(){
    $("#pestSummary").toggleClass("hide");
    $("#pest").toggleClass("hide");
});

