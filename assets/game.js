//4 crystals
//crystals have random number result
//new number shoud be generated everytime we win or lose
//when clicking crystal it should add to previous result
//if not equal we start over
//if equal then we increment a win counter

var random_result;
var losses = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

  $(".crystals").empty();

  var images = [
    'http://www.totpi.com/wp-content/uploads/2016/11/0202121-21-1500x840.jpg',
    'http://www.tiffany.com/shared/images/engagement/uv-dark-mobile.png',
    'http://media.istockphoto.com/photos/crystal-on-white-picture-id174289783',
    'http://wlpapers.com/images/beautiful-colors-1.jpg'
  ];

  random_result = Math.floor(Math.random() * 69) + 30;


  $("#result").html('Random Result: ' + random_result);

  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");

    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });

    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });


    $(".crystals").append(crystal);

  }

  $("#previous").html("Total Score: " + previous);

}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function() {

  var num = parseInt($(this).attr('data-random'));

  previous += num;


  $("#previous").html("Total score: " + previous);

  console.log(previous);

  if (previous > random_result) {

    losses++;

    $("#losses").html("You lost: " + losses);

    previous = 0;

    resetAndStart();

  } else if (previous === random_result) {

    win++;

    $("#win").html("You win: " + win);

    previous = 0;

    resetAndStart();

  }

});
