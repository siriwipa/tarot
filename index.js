
$(document).ready(function () {
  $('.sub_opis').show();
  $('.opis_div').show();
  $('.opis_right').show();
  $('footer').show();

  // $('img.lazyload').lazyload();

  $('.toform').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('#orderform').offset().top,
      },
      500
    );
  });

  counts = 0;
  cards = [];
  cards1 = ['imperator', 'kolesofortuni', 'jrec', 'mir'];
  cards2 = ['shut', 'solnce', 'otshelnik'];
  cards3 = ['imperatrica', 'spravedlivost', 'sud', 'zvezda'];
  cards4 = [
    'imperator',
    'kolesofortuni',
    'jrec',
    'mir',
    'shut',
    'solnce',
    'otshelnik',
    'imperatrica',
    'spravedlivost',
    'sud',
    'zvezda',
  ];

  var item4 = cards4[Math.floor(Math.random() * cards4.length)];
  var item1 = cards1[Math.floor(Math.random() * cards1.length)];
  var item2 = cards2[Math.floor(Math.random() * cards2.length)];
  var item3 = cards3[Math.floor(Math.random() * cards3.length)];
  $('.cc1').addClass(item1);
  $('.cc2').addClass(item2);
  $('.cc3').addClass(item3);
  // $('.cc1').css({
  //   background: 'url(images/' + item1 + '.png) top center no-repeat',
  // });
  // $('.cc2').css({
  //   background: 'url(images/' + item2 + '.png) top center no-repeat',
  // });
  // $('.cc3').css({
  //   background: 'url(images/' + item3 + '.png) top center no-repeat',
  // });
  polojenie = [];
  // $('#random').click(function () {
  //   $('#show_coloda .taro_card').shuffle();
  //   $('#show_coloda .taro_card').attr({ 'data-rel': 'notchecked' });
  //   $('#show_coloda .taro_card').css({ background: 'url(../1.png)' });
  //   counts = 0;
  //   cards = [];
  //   polojenie = [];
  //   $('#show_coloda').fadeOut().fadeIn(100);
   
  // });
  $('.taro_card').hover(
    function () {
      $(this).css({ opacity: '0.5' });
    },
    function () {
      $(this).css({ opacity: '1' });
    }
  );

  $('.taro_card').click(function () {
    if ($(this).attr('data-rel') == 'notchecked') {
      $(this).attr({ 'data-rel': 'checked' });
      counts++;
      cards.push($(this).attr('data-id'));
      polojenie.push($(this).attr('data-polojenie'));
      $(this).addClass($(this).attr('data-id'));

      if (counts == 3) {
        $('.bggg').show();
        $('.step_1').show();
        window.scrollTo(0, 0);
      }
    }
  });

  $('.butter1').click(function () {
    $('.step_1').hide();
    $('.step_2').show();
    $('.set-user-name').val($('#user-name').val());
  });
  $('.butter2').click(function () {
    $('.bggg').hide();
    $('.bggg1').hide();
    $('#h1_display').hide();
    $('#show_coloda').hide();

    $('.sub_opis').hide();
    $('.text').hide();
    $('.prediction-gen').fadeIn();
    $('footer').hide();
    setTimeout(function () {
      $('.prediction-gen').hide();
      $('#showen').fadeIn();
      $('footer').show();
    }, 5000);
  });
  $('.butter3').click(function () {
    $('.bggg1').hide();
    $('.bggg').hide();
    $('#h1_display').hide();
    $('#show_coloda').hide();
    $('.sub_opis').hide();
    $('.text').hide();
    $('.sub_opis').show();
    $('.opis_div').show();
    $('.opis_right').show();
    $('footer').show();
    $('#showen').show();
  });

  switch (item1) {
    case 'jrec':
      $('.cf1 p').text('ไพ่สังฆราช');
      break;
    case 'mir':
      $('.cf1 p').text('ไพ่แม่มด');
      break;
    case 'imperator':
      $('.cf1 p').text('ไพ่จักรพรรดิ');
      break;
    case 'kolesofortuni':
      $('.cf1 p').text('ไพ่วงล้อแห่งโชคชะตา');
      break;
  }

  switch (item2) {
    case 'shut':
      $('.cf2 p').text('ไพ่เดอะฟูล');
      break;
    case 'solnce':
      $('.cf2 p').text('ไพ่เดอะซัน');
      break;
    case 'otshelnik':
      $('.cf2 p').text('ไพ่ฤาษี');
      break;
  }

  switch (item3) {
    case 'spravedlivost':
      $('.cf3 p').text('ไพ่ราชินีพระจันทร์');
      break;
    case 'imperatrica':
      $('.cf3 p').text('ไพ่จักรพรรดินี');
      break;
    case 'sud':
      $('.cf3 p').text('ไพ่วันพิพากษา');
      break;
    case 'zvezda':
      $('.cf3 p').text('ไพ่คนโทเทน้ำ');
      break;
  }
  switch (item4) {
    case 'jrec':
      $('.cf1 p').text('ไพ่สังฆราช');
      break;
    case 'mir':
      $('.cf1 p').text('ไพ่แม่มด');
      break;
    case 'imperator':
      $('.cf1 p').text('ไพ่จักรพรรดิ');
      break;
    case 'kolesofortuni':
      $('.cf1 p').text('ไพ่วงล้อแห่งโชคชะตา');
      break;
    case 'spravedlivost':
      $('.cf3 p').text('ไพ่ราชินีพระจันทร์');
      break;
    case 'imperatrica':
      $('.cf3 p').text('ไพ่จักรพรรดินี');
      break;
    case 'sud':
      $('.cf3 p').text('ไพ่วันพิพากษา');
      break;
    case 'zvezda':
      $('.cf3 p').text('ไพ่คนโทเทน้ำ');
      break;
    case 'shut':
      $('.cf2 p').text('ไพ่เดอะฟูล');
      break;
    case 'solnce':
      $('.cf2 p').text('ไพ่เดอะซัน');
      break;
    case 'otshelnik':
      $('.cf2 p').text('ไพ่ฤาษี');
      break;
  }
});

function onSubmit() {
  if (isSumbitted) {
    $('.bggg1').hide();
    $('.bggg').hide();
    $('#h1_display').hide();
    $('#show_coloda').hide();
    $('.sub_opis').hide();
    $('.text').hide();
    $('.sub_opis').show();
    $('.opis_div').show();
    $('.opis_right').show();
    $('footer').show();
    $('#showen').show();
    isSumbitted = false;
    return false;
  }
}

function funonload() {
  if ($('.set-user-name').val() != '') {
    $('.bggg1').hide();
    $('.bggg').hide();
    $('#h1_display').hide();
    $('#show_coloda').hide();
    $('.sub_opis').hide();
    $('.text').hide();
    $('.sub_opis').show();
    $('.opis_div').show();
    $('.opis_right').show();
    $('footer').show();
    $('#showen').show();
  }
}
window.onload = funonload;

//
$(function () {
  var valueElement1 = $('#value1');
  function incrementValue(e) {
    valueElement1.text(
      Math.max(parseInt(valueElement1.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like1').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement2 = $('#value2');
  function incrementValue(e) {
    valueElement2.text(
      Math.max(parseInt(valueElement2.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like2').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement3 = $('#value3');
  function incrementValue(e) {
    valueElement3.text(
      Math.max(parseInt(valueElement3.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like3').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement4 = $('#value4');
  function incrementValue(e) {
    valueElement4.text(
      Math.max(parseInt(valueElement4.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like4').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement5 = $('#value5');
  function incrementValue(e) {
    valueElement5.text(
      Math.max(parseInt(valueElement5.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like5').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement6 = $('#value6');
  function incrementValue(e) {
    valueElement6.text(
      Math.max(parseInt(valueElement6.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like6').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement7 = $('#value7');
  function incrementValue(e) {
    valueElement7.text(
      Math.max(parseInt(valueElement7.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like7').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement8 = $('#value8');
  function incrementValue(e) {
    valueElement8.text(
      Math.max(parseInt(valueElement8.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like8').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement9 = $('#value9');
  function incrementValue(e) {
    valueElement9.text(
      Math.max(parseInt(valueElement9.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like9').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement10 = $('#value10');
  function incrementValue(e) {
    valueElement10.text(
      Math.max(parseInt(valueElement10.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like10').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement11 = $('#value11');
  function incrementValue(e) {
    valueElement11.text(
      Math.max(parseInt(valueElement11.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like11').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement12 = $('#value12');
  function incrementValue(e) {
    valueElement12.text(
      Math.max(parseInt(valueElement12.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like12').on('click', { increment: 1 }, incrementValue);
});
$(function () {
  var valueElement13 = $('#value13');
  function incrementValue(e) {
    valueElement13.text(
      Math.max(parseInt(valueElement13.text()) + e.data.increment, 0)
    );
    return false;
  }
  $('#comment-like13').on('click', { increment: 1 }, incrementValue);
});
// setTimeout(function(){
//   var link = document.querySelector('.copyrightsLink');

//   link.addEventListener('click', function(e){
//       e.preventDefault();

//       window.open((window.cdn_path) ? (window.cdn_path + 'images/Copyright.pdf') : ('./images/Copyright.pdf'), '_blank')

//   })
// }, 1000)
// var months = [
//   'มกราคม',
//   'กุมภาพันธ์',
//   'มีนาคม',
//   'เมษายน',
//   'พฤษภาคม',
//   'มิถุนายน',
//   'กรกฎาคม',
//   'สิงหาคม',
//   'กันยายน',
//   'ตุลาคม',
//   'พฤศจิกายน',
//   'ธันวาคม',
// ];
// var days = [
//   'วันอาทิตย์',
//   'วันจันทร์',
//   'วันอังคาร',
//   'วันพุธ',
//   'วันพฤหัสบดี',
//   'วันศุกร์',
//   'วันเสาร์',
// ];
// var locale = 'th';

// function dtimes(e) {
//   var t = new Date();
//   t.setDate(t.getDate() + e + 1 - 1),
//     document.write(t.getDate() + ' ' + months[t.getMonth()]);
// }

// function dtime(e) {
//   var t = new Date();
//   t.setDate(t.getDate() + e),
//     document.write(
//       days[t.getDay()] +
//       ' ' +
//       t.getDate() +
//       ',  ' +
//       months[t.getMonth()] +
//       ' ' +
//       t.getFullYear()
//     );
// }
// function dtime_nums(e, t, a) {
//   var n = new Date();
//   n.setDate(n.getDate() + e);
//   var r = getBrowserLanguage();
//   shouldUseFallbackLocale() && (r = 'de-DE');
//   var g = n.toLocaleDateString(r);
//   if (a) return g;
//   document.write(g);
// }



if (document.cookie.indexOf('first_view') == -1) {
  $('#preloader').show();

  // function loadData() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(resolve, 1000);
  //   });
  // }
  // loadData().then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  // });
}
