jQuery(document).ready(function($) { <!--Start JQuery -->

  //Makes all products the same height on the category pages.
  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {

     $el = $(this);
     $($el).height('auto')
     topPostion = $el.position().top;

     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }

  $(window).load(function() {
    equalheight('#main .products .product');
  });

  $(window).resize(function(){
    equalheight('#main .products .product');
  });

  //Fixes bug on checkout page where dropdown forms would not appear
  $('input#ship-to-different-address-checkbox').on('ifToggled', function(event){
      $( 'div.shipping_address' ).toggle();  
  });
  $('input#createaccount').on('ifToggled', function(event){
      $( 'div.create-account' ).toggle();  
  });

});<!--End JQuery -->