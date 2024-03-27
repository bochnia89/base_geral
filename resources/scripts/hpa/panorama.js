// $(function () {

//     var $panorama = $('.panorama');
  
//     var left = $panorama.offset().left;
//     var width = $panorama.width();
  
//     $('.panorama').mousemove(function (e) {
//       var offset = e.pageX - left;
//       var percentage = offset / width * 100;
  
//       $panorama.css('background-position', percentage + '% 0');
  
//     });
  
//   });



// modelo 2
// document.addEventListener('DOMContentLoaded', function () {
//     var panorama = document.querySelector('.panorama');
//     var left = panorama.getBoundingClientRect().left;
//     var width = panorama.clientWidth;
  
//     panorama.addEventListener('mousemove', function (e) {
//       var offset = e.pageX - left;
//       var percentage = (offset / width) * 100;
//       panorama.style.backgroundPosition = percentage + '% 0';
//     });
//   });

//modelo 3 
// document.addEventListener('DOMContentLoaded', function () {
//   var panorama = document.querySelector('.panorama');
//   var left = panorama.getBoundingClientRect().left;
//   var width = panorama.clientWidth;

//   function updatePanoramaPosition(offset) {
//       var percentage = (offset / width) * 100;
//       panorama.style.backgroundPosition = percentage + '% 0';
//   }

//   panorama.addEventListener('mousemove', function (e) {
//       var offset = e.pageX - left;
//       updatePanoramaPosition(offset);
//   });

//   document.addEventListener('keydown', function (e) {
//       if (e.key === "ArrowLeft") {
//           var currentOffset = (parseFloat(panorama.style.backgroundPosition) || 0);
//           var newOffset = currentOffset - 10;
//           updatePanoramaPosition(newOffset);
//       } else if (e.key === "ArrowRight") {
//           var currentOffset = (parseFloat(panorama.style.backgroundPosition) || 0);
//           var newOffset = currentOffset + 10;
//           updatePanoramaPosition(newOffset);
//       }
//   });
// });


//modelo 4 ok
// document.addEventListener('DOMContentLoaded', function () {
//   var panorama = document.querySelector('.panorama');
//   var left = panorama.getBoundingClientRect().left;
//   var width = panorama.clientWidth;
//   var offset = 0;

//   function updatePanoramaPosition() {
//       var percentage = (offset / width) * 100;
//       panorama.style.backgroundPosition = percentage + '% 0';
//   }

//   panorama.addEventListener('mousemove', function (e) {
//       offset = e.pageX - left;
//       updatePanoramaPosition();
//   });

//   document.addEventListener('keydown', function (e) {
//       if (e.key === "ArrowLeft") {
//           offset -= 10;
//           updatePanoramaPosition();
//       } else if (e.key === "ArrowRight") {
//           offset += 10;
//           updatePanoramaPosition();
//       }
//   });
// });


//modelo 5
document.addEventListener('DOMContentLoaded', function () {
  var panorama = document.querySelector('.panorama');
  var left = panorama.getBoundingClientRect().left;
  var width = panorama.clientWidth;
  var offset = 0;

  function updatePanoramaPosition() {
      var percentage = (offset / width) * 100;
      panorama.style.backgroundPosition = percentage + '% 0';
  }

  function handleMove(event) {
      var pageX = event.pageX || event.touches[0].pageX;
      offset = pageX - left;
      updatePanoramaPosition();
  }

  panorama.addEventListener('mousemove', handleMove);
  panorama.addEventListener('touchstart', handleMove);
  panorama.addEventListener('touchmove', handleMove);

  document.addEventListener('keydown', function (e) {
      if (e.key === "ArrowLeft") {
          offset -= 10;
          updatePanoramaPosition();
      } else if (e.key === "ArrowRight") {
          offset += 10;
          updatePanoramaPosition();
      }
  });
});
