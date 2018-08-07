$(document).ready (function(){
  // $(".javascript").click(function(){
  // $("p.javascript").toggle();
  // });
  // $(".operators").click(function(){
  //   $("p.operators").toggle();
  $("h2").click(function(){
    $(this).next("p").fadeToggle();
  // });
  });
});
