$(function () {

  $.ajax({
    url: "/api/v1.0/photos",
    data: {},
    success: function (result) {
      for (let photo of result.photos) {
          $("#photosList")
          .append('<image class="printerPhotoClass" src="printer-photos/'+ photo + '"/>')
      }

      $(".printerPhotoClass").on("click", function(event) {
        const photoRelPath = $(event.target).attr('src');
        const videoRelPath = photoRelPath.replace('.jpg', '.mp4').replace('printer-photos/printer-photo-','printer-videos/printer-video-');
        console.log(photoRelPath + "\n" + videoRelPath);
          $("#videoSource").attr('src', videoRelPath );
          var videoPlayer = document.getElementById('videoPlayer');
          videoPlayer.pause();
          videoPlayer.load();
          videoPlayer.play();
      });
    }
  });



});



