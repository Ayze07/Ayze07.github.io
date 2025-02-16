const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');


navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('no-scroll')
}



/* phone mask */

mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll ('[data-tel-input]');
phoneInputs.forEach((input)=>{
  input.addEventListener('input', ()=>{
    if (input.value == '+') input.value = '';
  })

  input.addEventListener('blur', ()=>{
  if (input.value == '+') input.value = '';
  })
})


/* yandex map */

 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [41.298836, 69.284372],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16,
        });

        var myPlacemark = new ymaps.Placemark([41.298836, 69.284372], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -42],
        });

        myMap.geoObjects.add(myPlacemark);
    }