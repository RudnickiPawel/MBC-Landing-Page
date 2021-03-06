$(document).ready(function () {
  //smooth scrolling using anchor
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  //adding slick carousel to header phone images
  $('.header__images-container').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: false
  });

  //hiding modal when cross clicked
  $('.modal__close').click(function () {
    $('.modal').hide(200);

    $('.mod__blur').hide(200);
  });
  $("body").click(function (event) {
    if ((!event.target.className.includes("modal")) && (!event.target.className.includes("header__nav-category--contact"))) {
      $(".modal").hide(200);
      $('.mod__blur').hide(200);
    }
  });

  //showing modal when CONTACT on header nav clicked
  $('.header__nav-category--contact').click(function () {
    $('.modal').show(200);
    $('.mod__blur').show(200);
  });

  //swap images when hovered
  $('.header__download-app').hover(function () {
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

  //arranging active link
  $(".app__links").on('click', function () {
    removeActiveFromAll();
    $(this).addClass("app__active-link");
  });
  // app opening default tab
  $("#app__link1").click();
});

// app toggable tabs
function displayTabItem(event, content_class) {
  var i, tabcontent, tablinks, content_to_display;
  tabcontent = $('.app__item');
  for (i = 0; i < tabcontent.length; i++)
    $(tabcontent[i]).css('display', 'none');

  tablinks = $('.app__links');
  for (i = 0; i < tablinks.length; i++)
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  content_to_display = $('.' + content_class);
  for (i = 0; i < content_to_display.length; i++)
    $(content_to_display[i]).css('display', 'flex');
  event.currentTarget.className += " active";
}

//removing active class from links in app
function removeActiveFromAll() {
  $('.app__links').removeClass("app__active-link")
}


// TODO: sekcja app sie zle wyswietla na ipadzie