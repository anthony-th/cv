'use strict';
const btnTop = document.getElementById("btnTop");
const switcher = document.querySelector('.languages-switch');
const key = document.querySelectorAll('[data-i18n]');
const homeTitle = document.querySelector('.home-title');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.lines-block');
const navList = document.querySelector('.nav-list');
const body = document.querySelector('body');
let lang = document.querySelector('.languages-switch').dataset.i18lan;
const shadow = document.querySelector('.shadow');


const i18nObj = {
  'en': {
    'home-anchor': 'Home',
    'aboutme-anchor': 'About Me',
    'skills-anchor': 'Skills',
    'experience-anchor': 'Experience',
    'education-anchor': 'Education',
    'portfolio-anchor': 'Portfolio',
    'contact-anchor': 'Contact',
    'code-anchor': 'Code example',
    'home-text': 'frontend developer',
    'home-title': 'Hello! My nickname is',
    'resume-link': 'is found on the resume',
    'phone': 'Phone:',
    'address': 'Address:',
    'email': 'Email:',
    'date-of-birth': 'Date of Birth:',
    'remote-or-office': 'Remote or office:',
    'resume-remote': 'remote format is preferable',
    'relocate': 'Relocate:',
    'resume-relocate': 'quite possibly',
    'pet-projects': 'Pet-Projects',
    'english': 'English',
    'french': 'French',
    'experience-text': 'More than 2 years of work as a CNC machine setter. Currently a freelancer.',
    'title-university': 'Moscow Polytechnic University',
    'text-university': 'The rest of the information is available in the resume.',
    'recent-work': 'My Recent Work',
    'contact-text': 'Contact information is available on your resume.',
    'title-university': 'Moscow Polytechnic University',
    'code-text': 'code',
    'top': 'Top',
    'overlay-link': 'Read more',
    'overlay-title-1': 'Project "Shelter"',
    'overlay-title-2': 'Project "Portfolio"',
    'overlay-title-3': 'Project "Eco-sounds"',
    'overlay-title-4': 'Project "Random jokes"',
    'select-all': 'Select and Copy all'
  },
  'ru': {
    'home-anchor': 'Домой',
    'aboutme-anchor': 'Обо мне',
    'skills-anchor': 'Навыки',
    'experience-anchor': 'Опыт',
    'education-anchor': 'Обучение',
    'portfolio-anchor': 'Портфолио',
    'contact-anchor': 'Контакты',
    'code-anchor': 'Пример кода',
    'home-text': 'frontend разработчик',
    'home-title': 'Здравствуйте! Мой гитхаб ник',
    'resume-link': 'информация в резюме',
    'phone': 'Телефон:',
    'address': 'Адрес:',
    'email': 'Почта:',
    'date-of-birth': 'Возраст:',
    'remote-or-office': 'Удаленка или офис:',
    'resume-remote': 'удаленный формат предпочтительнее',
    'relocate': 'Релокация',
    'resume-relocate': 'вполне возможно',
    'pet-projects': 'Свои проекты',
    'english': 'Английский',
    'french': 'Французский',
    'experience-text': 'Более 2 лет работы в качестве наладчика станков с ЧПУ. В настоящее время - фрилансер.',
    'title-university': 'Московский политехнический университет',
    'text-university': 'Остальную информацию можно найти в резюме.',
    'recent-work': 'Мои последние работы',
    'contact-text': 'Контактная информация указана в резюме.',
    'code-text': 'код',
    'top': 'Вверх',
    'overlay-link': 'Подробнее',
    'overlay-title-1': 'Проект "Шелтер"',
    'overlay-title-2': 'Проект "Портфолио"',
    'overlay-title-3': 'Проект "Звуки природы"',
    'overlay-title-4': 'Проект "Случайные шутки"',
    'select-all': 'Выделить и копировать всё'
  }
}

const changeMenu = function() {
  burgerLine.classList.toggle('rotate');
  navList.classList.remove('open');
  btnTop.style.display = "block";
  body.classList.remove('overflow');
  shadow.classList.remove('shadow-open');
  if (burgerLine.classList.contains('rotate')) {
    navList.classList.add('open');
    body.classList.add('overflow');
    btnTop.style.display = "none";
    shadow.classList.add('shadow-open');
  }
};

document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
      if (burgerLine.classList.contains('rotate')) {
        changeMenu();
      }
    })
})

function translatePage(lang) {
    key.forEach((element) => {
          element.textContent = i18nObj[lang][element.dataset.i18n];
    });
}

burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    changeMenu();
});

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (window.innerWidth > 1010) {
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
          document.querySelectorAll('.nav li').forEach((el) => {
            if (el.classList.contains('active')) {
              el.classList.remove('active');
            }
          });
          document.querySelectorAll('.nav li')[i].classList.add('active');
        }
      });
    }
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (!burgerLine.classList.contains('rotate')) {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function translatePage(lang) {
    key.forEach((element) => {
          element.textContent = i18nObj[lang][element.dataset.i18n];
    });
}

switcher.addEventListener('click', () => {
  if (switcher.classList.contains('en')) {
    switcher.src = './images/other.png';
    switcher.classList.remove('en');
    switcher.classList.add('ru');
    switcher.title = 'Russian language';
    switcher.alt = 'Russian language';
    lang = 'ru';
    translatePage(lang);
    homeTitle.style.fontFamily = 'Shlapak Script';

  } else if (switcher.classList.contains('ru')) {
    switcher.src = './images/uk.png';
    switcher.classList.add('en');
    switcher.classList.remove('ru');
    switcher.title = 'English language';
    switcher.alt = 'English language';
    lang = 'en';
    translatePage(lang);
    homeTitle.style.fontFamily = 'sacramento,cursive';
  }
});


const selectAll = document.querySelector('.select-all');
const pre = document.querySelector('pre');
selectAll.addEventListener('click', () => {
  let range = document.createRange();
  range.selectNode(pre);
  window.getSelection().addRange(range);
  document.execCommand('copy');
});


document.addEventListener('click', function(e) {
    const target = e.target;
    const menu = target == navList || navList.contains(target);
    const burgerMenuOpen = target == burgerMenu;
    const navListOpen = navList.classList.contains('open');

    if (!menu && !burgerMenuOpen && navListOpen) {
        changeMenu();
    }
});

// let counter = document.querySelector('.counter');
//
// function startTimer(speed, numToRun){
//   let timer = 0;
//   let interval = setInterval(function(){
//     counter.innerHTML = timer;
//     timer+=1;
//     if (timer > numToRun) {
//       clearInterval(interval);
//     }
//   }, speed);
// }
// startTimer(1, 4);
