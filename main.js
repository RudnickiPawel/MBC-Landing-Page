$(document).ready(function () {
  $('.footer__img-hover-style').hover(function () {
    var img = $(this).find('img')[0];
    if (img != undefined) {
      $(img).attr("src", function (index, attr) {
        return attr.replace(".png", "_hovered.png");
      });
    }
  }, function () {
    var img = $(this).find('img')[0];
    if (img != undefined) {
      $(img).attr("src", function (index, attr) {
        return attr.replace("_hovered.png", ".png");
      });
    }
  });
  $('.img-hover-swap').hover(function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace(".png", "_hovered.png");
    });
  }, function () {
    $(this).attr("src", function (index, attr) {
      return attr.replace("_hovered.png", ".png");
    });
  });

});