$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),
      $area = $('#area'),
      isOk = false;
  

  $height.focusout(function(){
    var result = validation($height.val());
    isOk = result.isOK;
    if(!result.isOK){
      $heightValidation.html('高度'+result.reason);
      $height.select();
    }else{
      $heightValidation.html('');
    }
  });

  $width.focusout(function(){
    var result = validation($width.val());
    isOk = result.isOK;
    if(!result.isOK){
      $widthValidation.html('宽度'+result.reason);
      $width.select();
    }else{
      $widthValidation.html('');               
    }
  });


  $btnCal.click(function(){
    if(!isOk) return;


    var w = $width.val(),
        h = $height.val();
    
    var rect = rectangle();

    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });

});
