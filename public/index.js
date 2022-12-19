$(function () {

  $.ajax({
    url: "/api/v1.0/thumbnails",
    data: {},
    success: function (result) {
      for (let thumbnail of result.thumbnails) {
          $("#photosList")
          .append('<image class="printerPhotoClass" src="printer-thumbnails/' + thumbnail + '" title="' + photo + '"/>')
      }

      $(".printerPhotoClass").on("click", function(event) {
        const photoRelPath = $(event.target).attr('src').replace('thumbnails', 'photos');
          $("#photoDisplay").attr('src', photoRelPath );
          $("#photoDisplay").attr('title', photoRelPath );
      });
    }
  });

});



