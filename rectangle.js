$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#area'),
      isOk = false;
   $btnCal.click(function(){
    if(!isOk) return;


    var w = $width.val(),
        h = $height.val();
    
    var rect = rectangle();

    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });

});
