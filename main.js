$(document).ready(function () {
  //jquery way of scrollIntoView
    $('.header__nav-category--welcome').click(function() {
      $('body,html').animate(
        {
          scrollTop: $(".welcome").offset().top
        },
        800
      );
    });
    $('.header__nav-category--who').click(function() {
      $('body,html').animate(
        {
          scrollTop: $(".who").offset().top
        },
        800
      );
    });
    $('.header__nav-category--features').click(function() {
      $('body,html').animate(
        {
          scrollTop: $(".features").offset().top
        },
        800
      );
    });
    $('.header__nav-category--app').click(function() {
      $('body,html').animate(
        {
          scrollTop: $(".app-preview").offset().top
        },
        800
      );
    });

  //swap images when hovered
  $('.header__download-app').hover(function() {
    var img = $(this);
    $(img).attr('src', function (index, attr) {
      return attr.replace('.png', '_hovered.png');
    });
  }, function () {
    var img = $(this);
    $(img).attr('src', function (index, attr) {
      return attr.replace('_hovered.png', '.png');
    });
  });

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
  // app-preview opening default tab
  document.getElementById("app-preview__link1").click();
  //arranging active link
  $('.app-preview__links').click(function () {
    removeActiveFromAll();
    $(this).addClass("app-preview__active-link");
  });
});

// app-preview toggable tabs
function displayTabItem(event, content_class) {
  var i, tabcontent, tablinks, content_to_display;
  tabcontent = $('.app-preview__item');
  for (i = 0; i < tabcontent.length; i++)
    tabcontent[i].style.display = "none";

  tablinks = $('.app-preview__links');
  for (i = 0; i < tablinks.length; i++)
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  content_to_display = $('.' + content_class);
  for (i = 0; i < content_to_display.length; i++)
    content_to_display[i].style.display = "flex";
  event.currentTarget.className += " active";
}

//removing active class from links in app-preview
function removeActiveFromAll() {
  $('.app-preview__links').removeClass("app-preview__active-link")
}

//TODO: jquery way of scrollIntoView on nav-links in header
//      Making header responsive
//      Finish Contact Modal