$(window).ready(function() {
  $(".trigger_popup_fricc").click(function() {
    $(".hover_bkgr_fricc").show();
  }),
    $(".hover_bkgr_fricc").hide(function() {
      $(".hover_bkgr_fricc").hide();
    }),
    $(".popupCloseButton").click(function() {
      $(".hover_bkgr_fricc").hide();
    });
});
