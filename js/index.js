$(document).ready(function(){
  $('.cmd .editable').on('paste', function(e) {
      //strips elements added to the editable tag when pasting
      var $self = $(this);
      setTimeout(function() {$self.html($self.text());}, 0);
  }).on('keypress', function(e) {
       //ignores enter key
       return e.which != 13;
  });  
});