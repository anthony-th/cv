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
const counter = document.querySelector('.counter');
const recentWorksCounter = document.querySelectorAll('.portfolio-image');
const header = document.querySelector('.header');

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
    'experience-text': 'This information is available and presented in the summary.',
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
    'overlay-title-5': 'Project "cssMemSlider"',
    'overlay-title-6': 'Project "Memory Game"',
    'select-all': 'Select and Copy all',
    'portfolio-text-info': 'This section presents projects from the "JS/FE Pre-School 2022" and "JavaScript/Front-end 2022Q1" courses.',
    'title-stack': 'My stack',
    'language-skill': 'Language skill',
    'overlay-text-1': 'Status: in progress',
    'overlay-text-2': 'The page is adaptive, with language switch and dark/light modes. This layout is made with PerfectPixel for a perfect match with the layout from Figma',
    'overlay-text-3': 'This project implements the playback of bird voices by the advised labels and the play/pause button',
    'overlay-text-4': 'This application displays a random quote from the API when the button is clicked (with sound and animation). The json file is used as the source of the quote. This application has a ru\\eng language switch',
    'overlay-text-5': 'The slider is made only in CSS. This work is adapted for Google Chrome, Mozilla Firefox',
    'overlay-text-6': 'The memory game is implemented in vanilla js.'
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
    'experience-text': 'Данная информация доступна и представлена в резюме.',
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
    'overlay-title-5': 'Проект "CSS мем-слайдер"',
    'overlay-title-6': 'Проект "Memory Game"',
    'select-all': 'Выделить и копировать всё',
    'portfolio-text-info': 'В этом разделе представлены проекты, выполненные в рамках программы курсов "JS/FE Pre-School 2022" и "JavaScript/Front-end 2022Q1".',
    'title-stack': 'Мой стэк',
    'language-skill': 'Знания языка',
    'overlay-text-1': 'Статус: в процессе выполнения',
    'overlay-text-2': 'Страница адаптивная, с переключением языка и режимами темный/светлый. Этот макет сделан с помощью PerfectPixel для идеального совпадения с макетом из Figma',
    'overlay-text-3': 'В этом проекте реализовано воспроизведение голосов птиц по предложенным надписям и кнопке воспроизведения/паузы',
    'overlay-text-4': 'Это приложение отображает случайную цитату из API при нажатии на кнопку (со звуком и анимацией). В качестве источника цитаты используется json-файл. Это приложение имеет переключатель языка ru\\eng',
    'overlay-text-5': 'Данный слайдер реализован только на CSS. Работа адаптирована для Google Chrome, Mozilla Firefox',
    'overlay-text-6': 'Проект "Memory game" реализован на чистом JS без сторонних библиотек'
  }
}

const changeMenu = function() {
  burgerLine.classList.toggle('rotate');
  navList.classList.remove('open');
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btnTop.style.display = "block";
  }
  body.classList.remove('overflow');
  shadow.classList.remove('shadow-open');
  if (burgerLine.classList.contains('rotate')) {
    navList.classList.add('open');
    body.classList.add('overflow');
    btnTop.style.display = "none";
    shadow.classList.add('shadow-open');
    header.scrollIntoView();
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

switcher.addEventListener('click', () => {
  if (switcher.classList.contains('en')) {
    switcher.src = './images/other.webp';
    switcher.classList.remove('en');
    switcher.classList.add('ru');
    switcher.title = 'Russian language';
    switcher.alt = 'Russian language';
    lang = 'ru';
    translatePage(lang);
    homeTitle.style.fontFamily = 'Kanyon-Light';

  } else if (switcher.classList.contains('ru')) {
    switcher.src = './images/uk.webp';
    switcher.classList.add('en');
    switcher.classList.remove('ru');
    switcher.title = 'English language';
    switcher.alt = 'English language';
    lang = 'en';
    translatePage(lang);
    homeTitle.style.fontFamily = 'sacramento, cursive';
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

counter.innerHTML = recentWorksCounter.length;