


	$(function() {   //$(document).ready( function() {简写
      //document.ready(function () {
        $('input:radio[name=note_book]').click(function () {
          var getSubmit = function(data) {
            $('#footer').html(data.html);
          }
        $.ajax({
          type: 'POST',
          url: '?q=ajax_register/login/ajax',
          dataType: 'json',
          success:  function(msg){
     //alert( msg);
            $("#main").prepend(msg.html);
   },
          data: {
             'id': $('input:radio[name=note_book]:checked').val(),
            },
        });
   
      });
   });

(function ($) {

Drupal.behaviors.ajaxRegister = {
  attach: function (context){

    // Make modal window height scaled automatically.
    $('.ctools-modal-content, #modal-content', context).height('auto');

    // Position code lifted from http://www.quirksmode.org/viewport/compatibility.html
    if (self.pageYOffset) { // all except Explorer
      var wt = self.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      var wt = document.documentElement.scrollTop;
    }
    else if (document.body) { // all other Explorers
      var wt = document.body.scrollTop;
    }

    // Fix CTools bug: calculate correct 'top' value.
    var mdcTop = wt + ( $(window).height() / 2 ) - ($('#modalContent', context).outerHeight() / 2);
    $('#modalContent', context).css({top: mdcTop + 'px'});
  }
}

})(jQuery);



 //  alert("123");
//});