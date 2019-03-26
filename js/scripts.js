$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
    $("#text-showing").toggle();
    $("#text-hidden").hide();
  });
  $("#clickable-walrus").click(function() {
    $("#walrus-showing").toggle();
    $("#text-showing").toggle();
    $("#walrus-hidden").show();
  })
  $("#first-clickable").click(function() {
    $("#text-hidden").show();
    $("#text-showing").fadeToggle();
  });
  $("#second-clickable").click(function(){
    $("#text-hidden").fadeToggle();
    $("#text-showing").show();
  });
  $("#purple-background").click(function() {
    $("body").removeClass();
    $("body").addClass("purple-background");
  });
});
