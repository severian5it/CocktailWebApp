/**
 * Jquery function to call search with CR on a search field
 */
$(document).ready(function(){
    $('#toSearch').keypress(function(e){
      if(e.keyCode==13)
      $('.searchButton').click();
    });
});
