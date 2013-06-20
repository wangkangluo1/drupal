


	$(function() {   //$(document).ready( function() {简写
      //document.ready(function () {
        $('input:radio[name=note_book]').click(function () {
          var getSubmit = function(data) {
            $('#footer').html(data.html);
          }
        $.ajax({
          type: 'POST',
          url: '?q=ajax',
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



 //  alert("123");
//});