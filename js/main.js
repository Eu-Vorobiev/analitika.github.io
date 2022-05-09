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
    ["RU-MOW", "Москва <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "moscow.gif"],
    ["RU-CHE", "Челябинская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "chelyabinskaya_flag.png"],
    ["RU-ORL", "Орловская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>"],
    ["RU-OMS", "Омская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_omskoj_oblasti.png"],
    ["RU-LIP", "Липецкая область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "lipeckya.jpg"],
    ["RU-KRS", "Курская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_of_kursk_oblast.png"],
    ["RU-RYA", "Рязанская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "ryazan.png"],
    ["RU-BRY", "Брянская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "bryanskaya_flag.png"],
    ["RU-KIR", "Кировская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "flag_kirovskoy_oblasti.png"],
    ["RU-ARK", "Архангельская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MUR", "Мурманская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SPE", "Санкт-Петербург <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YAR", "Ярославская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ULY", "Ульяновская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NVS", "Новосибирская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TYU", "Тюменская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SVE", "Свердловская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NGR", "Новгородская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KGN", "Курганская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KGD", "Калининградская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IVA", "Ивановская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AST", "Астраханская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHA", "Хабаровский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CE", "Чеченская республика <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-UD", "Удмуртская республика <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SE", "Республика Северная Осетия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MO", "Республика Мордовия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KR", "Республика  Карелия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KL", "Республика  Калмыкия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IN", "Республика  Ингушетия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AL", "Республика Алтай <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BA", "Республика Башкортостан <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AD", "Республика Адыгея <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CR", "Республика Крым <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SEV", "Севастополь <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KO", "Республика Коми <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PNZ", "Пензенская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TAM", "Тамбовская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-LEN", "Ленинградская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VLG", "Вологодская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KOS", "Костромская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PSK", "Псковская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YAN", "Ямало-Ненецкий АО <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CHU", "Чукотский АО <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-YEV", "Еврейская автономская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TY", "Республика Тыва <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAK", "Сахалинская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-AMU", "Амурская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BU", "Республика Бурятия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KK", "Республика Хакасия <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KEM", "Кемеровская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ALT", "Алтайский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-DA", "Республика Дагестан <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KB", "Кабардино-Балкарская республика <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KC", "Карачаевая-Черкесская республика <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KDA", "Краснодарский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ROS", "Ростовская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAM", "Самарская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TA", "Республика Татарстан <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ME", "Республика Марий Эл <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-CU", "Чувашская республика <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NIZ", "Нижегородская край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VLA", "Владимировская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MOS", "Московская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KLU", "Калужская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-BEL", "Белгородская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ZAB", "Забайкальский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PRI", "Приморский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KAM", "Камачатский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-MAG", "Магаданская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SA", "Республика Саха <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KYA", "Красноярский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-ORE", "Оренбургская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SAR", "Саратовская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VGG", "Волгоградская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-VOR", "Ставропольский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-SMO", "Смоленская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TVE", "Тверская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-PER", "Пермская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHM", "Ханты-Мансийский АО <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-KHM", "Ханты-Мансийский АО <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TOM", "Томская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-IRK", "Иркутская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-NEN", "Ненецскй АО <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-STA", "Ставропольский край <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", ""],
    ["RU-TUL", "Тульская область <br> <span class='descrr'>          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea aliquam iusto minima at dolore quam consectetur facilis illo alias molestias commodi, labore incidunt culpa.</span> <span class='deco'><span>", "tulskaya_flag.png"]

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

  /* ТАБЫ на странице О ТОВАРЕ */
  $('.tab__main').on('click', 'li:not(.tab__item--active)', function() {
    $(this).addClass('tab__item--active').siblings().removeClass('tab__item--active').closest('div.tab__inner').find('div.tab__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
  /* Счетчик товаров */
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

