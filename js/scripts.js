$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();
    var animal = $("input#animal").val();
    var junkfood = $("input#junkfood").val();
    var movie = $("input#movie").val();
    var faveArray = [animal, junkfood, movie];
    var oddArray = [];
    oddArray.push(faveArray[0], faveArray[2]);
    // alert(oddArray);

    $("li#object1").text(faveArray[1]);
    $("li#object2").text(faveArray[0]);
    // $("ul#list").append("<li>" + faveArray[2] + "</li>");
  });

});
