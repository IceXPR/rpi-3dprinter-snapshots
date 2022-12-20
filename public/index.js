$(function () {

  $.ajax({
    url: "/api/v1.0/thumbnails",
    data: {},
    success: function (result) {
      for (let thumbnail of result.thumbnails) {
          $("#photosList")
          .append('<image class="printerPhotoClass" src="printer-thumbnails/' + thumbnail + '" title="' + thumbnail + '"/>')
      }

      $(".printerPhotoClass").on("click", function(event) {
        const photoRelPath = $(event.target).attr('src').replace('printer-photos/printer-photo', 'printer-thumbnails/printer-thumbnail');
          $("#photoDisplay").attr('src', photoRelPath );
          $("#photoDisplay").attr('title', photoRelPath );
      });
    }
  });

});



