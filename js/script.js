$(function () {
  'use strict';

  var boxElem = document.getElementById('box1');
  var pointerElem = document.getElementById('menu');

  function onMouseMove(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var crd = boxElem.getBoundingClientRect();
    var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

    requestAnimationFrame(function movePointer() {
      if (activePointer) {
        pointerElem.classList.remove('box-pointer-hidden');
        pointerElem.style.left = Math.floor(mouseX) + 'px';
      } else {
        pointerElem.classList.add('box-pointer-hidden');
      }
    });
  }

  function disablePointer() {
    pointerElem.style.left = "50%";
    requestAnimationFrame(function hidePointer() {
      pointerElem.classList.add('box-pointer-hidden');
    });
  }

  boxElem.addEventListener('mousemove', onMouseMove, false);
  boxElem.addEventListener('mouseleave', disablePointer, false);

  document.getElementById('link-h').onclick = function () {
    document.getElementById('house').classList.add('header__house--active');
    document.getElementById('office').classList.remove('header__office--active');
  }

  document.getElementById('link-o').onclick = function () {
    document.getElementById('office').classList.add('header__office--active');
    document.getElementById('house').classList.remove('header__house--active');
  }

  $('.kitc').on('click', function () {
    $('.kitc span').toggleClass('clean-menu__link--active');
    $('.room span, .bath span, .hall span').removeClass('clean-menu__link--active');
  });

  $('.room').on('click', function () {
    $('.room span').toggleClass('clean-menu__link--active');
    $('.kitc span, .bath span, .hall span').removeClass('clean-menu__link--active');
  });

  $('.bath').on('click', function () {
    $('.bath span').toggleClass('clean-menu__link--active');
    $('.kitc span, .room span, .hall span').removeClass('clean-menu__link--active');
  });

  $('.hall').on('click', function () {
    $('.hall span').toggleClass('clean-menu__link--active');
    $('.kitc span, .room span, .bath span').removeClass('clean-menu__link--active');
  });

  document.getElementById('kitchen').onclick = function () {
    document.getElementById('kitchen_i').classList.add('clean__kitchen--active');
  }

  document.getElementById('bathroom').onclick = function () {
    document.getElementById('bathroom_i').classList.add('clean__bathroom--active');
  }

const animItems = document.querySelectorAll('._anim-item1');

if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 100;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {  
        animItem.classList.add('_active');  
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  animOnScroll();
}


  const gallery = document.querySelector('.kitc')
  const galleryResize = document.querySelector('.bath')
  const before = document.querySelector('#kitchen')
  const after = document.querySelector('#bathroom')

  gallery.addEventListener('mousemove', (event) => {
    let x = event.offsetX
    galleryResize.classList.remove('tr')
    galleryResize.style.width = 100 + '%'
  })

  gallery.addEventListener('mouseleave', (event) => {
    galleryResize.style.width = 50 + '%'
    galleryResize.classList.add('tr')
  })

  before.onclick = () => {
    //galleryResize.classList.add('tr')
    galleryResize.style.width = 100 + '%'
  }

  after.onclick = () => {
    galleryResize.style.width = 100 + '%'
  }

});