const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
const header = document.querySelector('head');

const styles =
  '<style> .list {display: flex; list-style: none; padding: 0; justify-content: center;} img {width: 420px; height: 280px; display: block;}</style>';

gallery.classList.add('list');

const items = images.map(
  option => `<li class="picture"><img src=${option.url} alt=${option.alt}></li>`
);

header.insertAdjacentHTML('beforeend', styles);
gallery.insertAdjacentHTML('afterbegin', items);
