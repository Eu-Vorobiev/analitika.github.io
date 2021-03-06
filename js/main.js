$(function () {

  $('.banner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-prev.png" alt=""></button',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-next.png" alt=""></button',
    autoplay: true,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          arrows: false,
          variableWidth: false,
          centerMode: false,
        }
      },
      {
        breakpoint: 571,
        settings: {
          slidesToShow: 1,
          arrows: false,
          variableWidth: false,
          centerMode: false,
        }
      },
    ]
  });

  $('.clients-list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="arrow arrow-left"><img src="images/arrow-prev.png" alt=""></button',
    nextArrow: '<button type="button" class="arrow arrow-right"><img src="images/arrow-next.png" alt=""></button',
    responsive: [
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu-list').slideToggle()
  });


  $('.engineers__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button type="button" class="enginners-prev engineers-arrow"><img src="images/prev.png" alt=""></button',
    nextArrow: '<button type="button" class="enginners-next engineers-arrow"><img src="images/next.png" alt=""></button',
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        }
      },
      {
        breakpoint: 707,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });

  $('.partners__offer-btn, .request__link').on('click', function () {
    $(this).addClass('off')
    $(this).next().addClass('on')
    $(this).prev().addClass('mini')
  });

  $('.cleak-me').on('click', function (e) {
    e.preventDefault()

    $(this).parent().removeClass('on')
    $(this).parent().prev().removeClass('off')
    $(this).closest('.partners__form').parent().find('.partners__offer-text').removeClass('mini')
  });


  $('.pop-up__checkbox').styler();



  $('path').hover(function (e) {

    //$('path').css('fill','#fff');
    $('.indicator').html('');
    var id = $(this).attr('id').toUpperCase();

    if ($(this).attr('name')) {
      var name = $(this).attr('name');
      $('<div>' + name + '</div>').appendTo('.indicator');
    }


    if ($(this).attr('flag')) {
      var flag = "http://sandbox.alexti-dev.ru/mapping/" + $(this).attr('flag');
      $(' <img class="flag" src="" alt="">').appendTo('.indicator');
      $('.indicator').find('img').attr('src', flag)
      // $('<img src='+ flag+ ' >').appendTo('.indicator');
    }

    $('.change').remove();

    var script = document.createElement('script');
    // script.classList.add('change');
    //script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
    document.body.appendChild(script);

    $(this).css('fill', '#6a34b2');
    //$('path').not(this).css('fill','rgba(0,0,0,0.5)');
    $('.indicator').css({ 'top': e.pageY, 'left': e.pageX + 30 }).show();



  }, function () {
    $('.indicator').html('');
    $('.indicator').hide();
    $('path').css('fill', 'rgba(0,0,0,0.2)');
  });





  var idAarr = ["RU-MOW", "RU-SPE", "RU-NEN", "RU-YAR", "RU-CHE", "RU-ULY", "RU-TYU", "RU-TUL", "RU-SVE", "RU-RYA", "RU-ORL", "RU-OMS", "RU-NGR", "RU-LIP", "RU-KRS", "RU-KGN", "RU-KGD", "RU-IVA", "RU-BRY", "RU-AST", "RU-KHA", "RU-CE", "RU-UD", "RU-SE", "RU-MO", "RU-KR", "RU-KL", "RU-IN", "RU-AL", "RU-BA", "RU-AD", "RU-CR", "RU-SEV", "RU-KO", "RU-KIR", "RU-PNZ", "RU-TAM", "RU-MUR", "RU-LEN", "RU-VLG", "RU-KOS", "RU-PSK", "RU-ARK", "RU-YAN", "RU-CHU", "RU-YEV", "RU-TY", "RU-SAK", "RU-AMU", "RU-BU", "RU-KK", "RU-KEM", "RU-NVS", "RU-ALT", "RU-DA", "RU-STA", "RU-KB", "RU-KC", "RU-KDA", "RU-ROS", "RU-SAM", "RU-TA", "RU-ME", "RU-CU", "RU-NIZ", "RU-VLA", "RU-MOS", "RU-KLU", "RU-BEL", "RU-ZAB", "RU-PRI", "RU-KAM", "RU-MAG", "RU-SA", "RU-KYA", "RU-ORE", "RU-SAR", "RU-VGG", "RU-VOR", "RU-SMO", "RU-TVE", "RU-PER", "RU-KHM", "RU-TOM", "RU-IRK"];
  var idAarr2 = new Array(
    ["RU-MOW", "???????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "moscow.gif"],
    ["RU-CHE", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "chelyabinskaya_flag.png"],
    ["RU-ORL", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>"],
    ["RU-OMS", "???????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_omskoj_oblasti.png"],
    ["RU-LIP", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "lipeckya.jpg"],
    ["RU-KRS", "?????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_of_kursk_oblast.png"],
    ["RU-RYA", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "ryazan.png"],
    ["RU-BRY", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "bryanskaya_flag.png"],
    ["RU-KIR", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_kirovskoy_oblasti.png"],
    ["RU-ARK", "?????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MUR", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SPE", "??????????-?????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YAR", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ULY", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NVS", "?????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TYU", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SVE", "???????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NGR", "???????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KGN", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KGD", "?????????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IVA", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AST", "???????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHA", "?????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CE", "?????????????????? ???????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-UD", "???????????????????? ???????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SE", "???????????????????? ???????????????? ???????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MO", "???????????????????? ???????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KR", "????????????????????  ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KL", "????????????????????  ???????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IN", "????????????????????  ?????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AL", "???????????????????? ?????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BA", "???????????????????? ???????????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AD", "???????????????????? ???????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CR", "???????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SEV", "?????????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KO", "???????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PNZ", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TAM", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-LEN", "?????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VLG", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KOS", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PSK", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YAN", "??????????-???????????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CHU", "?????????????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YEV", "?????????????????? ?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TY", "???????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAK", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AMU", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BU", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KK", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KEM", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ALT", "?????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-DA", "???????????????????? ???????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KB", "??????????????????-???????????????????? ???????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KC", "????????????????????-???????????????????? ???????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KDA", "?????????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ROS", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAM", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TA", "???????????????????? ?????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ME", "???????????????????? ?????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CU", "?????????????????? ???????????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NIZ", "?????????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VLA", "???????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MOS", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KLU", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BEL", "???????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ZAB", "?????????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PRI", "???????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KAM", "?????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MAG", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SA", "???????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KYA", "???????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ORE", "???????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAR", "?????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VGG", "?????????????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VOR", "???????????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SMO", "???????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TVE", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PER", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHM", "??????????-???????????????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHM", "??????????-???????????????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TOM", "?????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IRK", "?????????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NEN", "???????????????? ???? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-STA", "???????????????????????????? ???????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TUL", "???????????????? ?????????????? <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "tulskaya_flag.png"]

  );

  $('path').each(function () {

    var regId = $(this).attr('id');
    var flag = '';
    var name = '';
    for (var j = 0; j < idAarr2.length; j++) {

      if (regId == idAarr2[j][0]) {
        name = idAarr2[j][1];
        flag = 'flags/' + idAarr2[j][2];

        $(this).attr('name', name);
        $(this).attr('flag', flag);
      }
    }


    var regIdDiv = '<div class="reg" >' + '[' + '<span>' + regId + '</span>' + ']' + ' ' + name + '</div>'
    $(regIdDiv).appendTo('.regs');


    // var idArrMin = [regId, '_'];
    // idAarr2.push(idArrMin);


  })


  // for (var j = 0; j < idAarr2.length; j++) {
  //   if (regId == idAarr2[j][0]) {
  //     name = cyr2latChars[j][1];

  //   }
  // }


  function naming() {

  }


  //revertFill();


  $('.reg').hover(function (e) {


    var id = $(this).find('span').text();

    idHover = '#' + id;

    // $(idHover).css('fill', '#f6e72d');
    $(idHover).attr('style', function (i, s) { return (s || '') + 'fill: #fff !important;' });
    // $('path').not(this).css('fill','rgba(0,0,0,0.5)');
    // $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();

  }, function () {
    $('.indicator').html('');
    $('.indicator').hide();
    $('path').css('fill', 'rgba(0,0,0,0.2)');
  });

  //} // revertFill

  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-thambs'
  });
  $('.slider-thambs').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-main',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="enginners-prev engineers-arrow"><img src="images/prev.png" alt=""></button',
    nextArrow: '<button type="button" class="enginners-next engineers-arrow"><img src="images/next.png" alt=""></button',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.product__slider-lg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-sm'
  });
  $('.product__slider-sm').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product__slider-lg',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.pos-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="enginners-prev engineers-arrow"><img src="images/prev.png" alt=""></button',
    nextArrow: '<button type="button" class="enginners-next engineers-arrow"><img src="images/next.png" alt=""></button',
    responsive: [
      {
        breakpoint: 1183,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 809,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.pres__items-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="enginners-prev engineers-arrow"><img src="images/prev.png" alt=""></button',
    nextArrow: '<button type="button" class="enginners-next engineers-arrow"><img src="images/next.png" alt=""></button',
    responsive: [
      {
        breakpoint: 1254,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  /* ???????? ???? ???????????????? ?? ???????????? */
  $('.tab__main').on('click', 'li:not(.tab__item--active)', function() {
    $(this).addClass('tab__item--active').siblings().removeClass('tab__item--active').closest('div.tab__inner').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
  /* ?????????????? ?????????????? */
  $('.counter__inner span').on("click", function () {
    var $input = $(this).parents('.counter').find('input.num');
  if($(this).hasClass('minus')) {
    var count = parseFloat($input.val()) - 1;
    count = count < 1 ? 1 : count;
    if (count < 2) {
      $(this).addClass('dis');
    }
    else {
      $(this).removeClass('dis');
    }
    $input.val(count);
  }
  else {
    var count = parseFloat($input.val()) + 1
    $input.val(count);
    if (count > 1) {
      $(this).parents('.counter').find(('.minus')).removeClass('dis');
    }
  }
  
  $input.change();
  return false;
  });
})

