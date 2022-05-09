$(function () {
  ymaps.ready(init);
  // var myMap,
  //     myPlacemark;
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.846408, 37.640782],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 17,
      controls: []
    });

    var myPin = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/marker.png',
      iconImageSize: [48, 60],  
      iconImageOffset: [0, -70],
      draggable: false // и их можно перемещать
    });

    myPlacemark = new ymaps.Placemark([55.846408, 37.640782], {
      balloonContentHeader: '',
      balloonContentBody: '',
      balloonContentFooter: '',
      hintContent: ''
    });


    myPin.add(myPlacemark);
    myMap.geoObjects.add(myPin);
  };
})












