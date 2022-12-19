$(function () {

  $.ajax({
    url: "/api/v1.0/photos",
    data: {},
    success: function (result) {
      for (let photo of result.photos) {
          $("#photosList")
          .append('<image class="printerPhotoClass" src="printer-thumbnails/' + photo + '" title="' + photo + '"/>')
      }

      $(".printerPhotoClass").on("click", function(event) {
        const photoRelPath = $(event.target).attr('src').replace('thumbnails', 'photos');
          $("#photoDisplay").attr('src', photoRelPath );
          $("#photoDisplay").attr('title', photoRelPath );
      });
    }
  });



});



