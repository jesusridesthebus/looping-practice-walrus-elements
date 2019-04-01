// $(function(){
//
//   jQuery("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   jQuery("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   jQuery("img").click(function() {
//     alert("This is an image.");
//   });
//
//
// });


$(function(){
    var elements = ["header", "paragraph", "image"];

    elements.forEach(function(element) {
      $("." + element).click(function(){
        alert("This is a " + element);
    });
  });
});
