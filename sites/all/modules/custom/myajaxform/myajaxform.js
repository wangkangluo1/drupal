/* 
    Document   : imagenode_ext
    Created on : 2012-11-7, 9:31:32
    Author     : hooface <hooface at="" gmail.com="">
    Description:
        Purpose of the stylesheet follows.
*/
 
(function ($) {
 
  Drupal.handling.imagenode_ext = {
    attach: function (context, settings) {
$('#edit-submitt-fashion').click(function(){    
    var comment = $('#edit-comment').val();
     var timestamp = Date.parse(new Date());
    //alert(comment);
    if (comment=='') {
        alert('不能添加空的点评！请输入您的点评内容。');
        return false;
    }
        $.ajax({
            async:false, //添加这个就可以打开窗口，而不被浏览器拦截
            url: '?1=user/fashion',
            type: "POST",
            data: {
                "comment": comment,
                "timestamp":timestamp
                },
            dataType: "json",
            timeout: 3000,
            error: function(){},
            success: function(data){
                //alert(data.content);
                 $("#twippo-comment").html(data.content);
                //window.open ('http://www.weibo.com'); 
            }
        });  
        return false;
        });
    }
  };
 
})(jQuery);