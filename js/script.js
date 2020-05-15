$(document).ready(function () {
  $(".circularProgress").each(function (index, cProgress) {
    var progressPercentage = parseInt($(cProgress).attr("data-progress"));
    $(cProgress).css({
      "background-image":
        "conic-gradient(#dda908 " +
        progressPercentage +
        "%, #0b090c " +
        progressPercentage +
        "%)",
    });
  });
});
