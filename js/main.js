$(function() {  //Фиксированый Header  $(window).scroll(function(){    fixHeader();  });   //Маска для телефона  $("#phone").mask("+7(999) 999-99-99");  //Калькулятор ужина  function changeDinner() {    var dinner = $('#dinner');    var people = $('#people');    var result = $('#result');    var dinnerSelect = dinner.find('option:selected').val();    var peopleSelect = people.find('option:selected').val();    result.text(+dinnerSelect + +peopleSelect);     if (+peopleSelect == 4){      result.text((+dinnerSelect + 500) * 2);    }  }  changeDinner();  $('select').change(function(){    changeDinner();  });	  //Слайдер  var galleryTop = new Swiper('.gallery-top', {    nextButton: '.swiper-button-next',    prevButton: '.swiper-button-prev',    spaceBetween: 10,  });  var swiper = new Swiper('#riviews__container', {    pagination: '.swiper-pagination',    nextButton: '.swiper-button-next',    prevButton: '.swiper-button-prev',    slidesPerView: 1,    paginationClickable: true,    spaceBetween: 30,    loop: true  });  var swiper = new Swiper('.swiper-container', {    pagination: '.swiper-pagination',    nextButton: '.swiper-button-next',    prevButton: '.swiper-button-prev',    slidesPerView: 1,    paginationClickable: true,    spaceBetween: 30,    loop: true  });  //Переход на нужный блок  $('a[href^="#"]').bind('click.smoothscroll',function (e) {   e.preventDefault();       var target = this.hash,        $target = $(target);       $('html, body').stop().animate({     'scrollTop': $target.offset().top     }, 500, 'swing', function () {       window.location.hash = target;     });  });  $('a[data-modal]').on('click', function() {    $($(this).data('modal')).modal();    return false;  });  //Радиус текста    $('.radius').circleType({radius: 170});    $('.timer__radius').circleType({radius: 100});  //таймер    var d = [4,3,2,1,7,6,5];    var today = new Date();    var end = new Date(today.getFullYear(),today.getMonth(),today.getDate()+ d[today.getDay()], 00, 00, 00);    var _second = 1000;    var _minute = _second * 60;    var _hour = _minute * 60;    var _day = _hour * 24;    var timer;    function showRemaining() {      var now = new Date();      var distance = end - now;      if (distance < 0) {      return;      }      var days = Math.floor(distance / _day);      var hours = Math.floor((distance % _day) / _hour);      if (hours < 10) hours = '0' + hours;      var minutes = Math.floor((distance % _hour) / _minute);      if (minutes < 10) minutes = '0' + minutes;      var seconds = Math.floor((distance % _minute) / _second);      if (seconds < 10) seconds = '0' + seconds;      $('.clock_days').text(days);      $('.clock_hours').text(hours);      $('.clock_minutes').text(minutes);      $('.clock_seconds').text(seconds);    }    timer = setInterval(showRemaining, 1000);//слайдер бутстрап  //Ajax отправка формы  document.querySelectorAll('form').forEach(function(item) {  item.addEventListener('submit', function(event) {    sendAjaxForm(this, event);  })});  function sendAjaxForm(form, event) {    var fields = form.querySelectorAll('input, textarea')    var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {      if (currentItem.matches(':invalid')) invalidCount++;    }, 0);    if (formHasError) {      return true;    } else {      event.preventDefault();      var formData = new FormData(form);      var xhr = new XMLHttpRequest();      xhr.open('POST', 'send.php');      xhr.onreadystatechange = function() {        if ((xhr.readyState == 4) && (xhr.status == 200)) {          data = xhr.responseText;          form.outerHTML = '<h2 style-"color: #fdb827; text-align: center;">Мы перезвоним Вам в ближайшее время для подтверждения заказа</h2><h3 style="color: #fdb827; text-align: center;">Спасибо, Ваш заказ отправлен</h3>';        }      }      xhr.send(formData);      return false;    }  }  //Мобильная менюшка    var slideout = new Slideout({      'panel': document.getElementById('panel'),      'menu': document.getElementById('menu'),      'padding': 256,      'tolerance': 70    });    document.querySelector('.menu-open').addEventListener('click', function() {      slideout.toggle();    });    // Иконка    $('#btn').on('click', function(){      $(this).toggleClass('on');    });  //Функция фиксированого Header    function fixHeader(){      var header = $('.sticky-content'),          scroll = $(window).scrollTop();      if (scroll >= 100) header.addClass('fixed');      else header.removeClass('fixed');    } });