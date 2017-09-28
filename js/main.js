$(document).ready(function() {
  $("#submit").click( function(){

  if($( '#recent' ).is(":hidden")){
          $( '#recent' ).show();
         } else{
              $( '#recent' ).hide();
         }
  var input = $("#search").val();
  var api= 'https://api.flickr.com/services/feeds/photos_public.gne?tags=';
  var ext = '&jsoncallback=?';


  var url = api + input + ext;
  var flickerAPI = url;
  $.getJSON( flickerAPI, {
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        // $("<a>").attr("href","#").appendTo("#images");
        $( "<img>" ).attr( "src", item.media.m).attr("height", "200").attr("width","250").appendTo( "#images");
      });
    });
    $( "#images" ).empty();
    $("#heading").append('#'+input);
    $(".heading").empty();
  });
});
