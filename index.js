$(".scnd").addClass("frequency-active");

$(".frst").click(function() {
  $(".frst").addClass("frequency-active");
  $(".scnd").removeClass("frequency-active");
  $(".thrd").removeClass("frequency-active");
  $(".work-time").text("8hrs");
  $(".play-time").text("2hrs");
  $(".study-time").text("1hrs");
  $(".exercise-time").text("1hrs");
  $(".social-time").text("1hrs");
  $(".self-time").text("0.5hrs");
});

$(".scnd").click(function() {
  $(".frst").removeClass("frequency-active");
  $(".scnd").addClass("frequency-active");
  $(".thrd").removeClass("frequency-active");
  $(".work-time").text("32hrs");
  $(".play-time").text("10hrs");
  $(".study-time").text("4hrs");
  $(".exercise-time").text("4hrs");
  $(".social-time").text("5hrs");
  $(".self-time").text("2hrs");
})


$(".thrd").click(function() {
  $(".frst").removeClass("frequency-active");
  $(".scnd").removeClass("frequency-active");
  $(".thrd").addClass("frequency-active");
  $(".work-time").text("160hrs");
  $(".play-time").text("40hrs");
  $(".study-time").text("16hrs");
  $(".exercise-time").text("16hrs");
  $(".social-time").text("20hrs");
  $(".self-time").text("8hrs");
})
