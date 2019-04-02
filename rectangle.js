$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $perimeter = $('#perimeter'),
      $form = $('form'),
      $area = $('#area');
  

 

  $form.submit(function(e){
    e.preventDefault();
   
    var w = $width.val(),
        h = $height.val();
    
    var rect = rectangle();

    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });

});
