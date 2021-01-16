$(() => {
  $(window).scroll(() => {
    $(".scroll-up").addClass("show");
    if (window.scrollY === 0) {
      $(".scroll-up").removeClass("show");
    }
  });

  $(".scroll-up").on("click", () => {
    $("html, body").scrollTop(0);
  });
});
