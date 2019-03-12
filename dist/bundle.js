$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  $btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();

    var rect = rectangle();

    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });

});

function rectangle(){
  return {
    'perimeter': function(width,height){
      return 2*(Number(width) + Number(height));
                
    },

    'area': function(width,height){
      return Number(width) * Number(height);
                
    }
      
  };

}

