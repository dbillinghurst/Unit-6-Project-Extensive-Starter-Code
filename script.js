$(".Part-Two-Sports").hide();
$(".Part-Two-jobs").hide();
$(".Story-Ending-sport").hide();
$(".Story-Ending-job").hide();


$(".Basketball-Manager").click(function() {
    $(".Part-Two-Sports").show();
    $(".disappear").fadeOut();

});

$(".Job").click(function() {
    $(".Part-Two-jobs").show();
    $(".disappear").fadeOut();

});

$(".part2job").dblclick(function() {
    $(".Story-Ending-job").slideDown();
    $(".Part-Two-jobs").fadeOut();
    $(".job-text").text("MONEY");
});
$(".jamil").dblclick(function() {
    $(".Story-Ending-sport").show();
    $(".disappear2").fadeOut();
});


