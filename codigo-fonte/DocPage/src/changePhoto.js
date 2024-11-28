const doctorImages = [
  {
    description: 'Imagem Médico 1',
    image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg',
  },

  {
    description: 'Imagem Médico 2',
    image:
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1887',
  },
  {
    description: 'Imagem Médico 3',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1887',
  },
  {
    description: 'Imagem Médico 4',
    image:
      'https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?q=80&w=2070',
  },
  {
    description: 'Imagem Médica 1',
    image: 'https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=500',
  },
  {
    description: 'Imagem Médica 2',
    image:
      'https://images.unsplash.com/photo-1674049406176-021807a2802e?q=80&w=2070',
  },
  {
    description: 'Imagem Médica 3',
    image:
      'https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=2070',
  },
];

let images = JSON.parse(localStorage.getItem('doctor-images'));

if (!images) {
  localStorage.setItem('doctor-images', JSON.stringify(doctorImages));
}

images = JSON.parse(localStorage.getItem('doctor-images'));

const changeImg = document.querySelector('#changeImg');
const currentImg = document.querySelector('#currentImg');

let usrPhoto = JSON.parse(localStorage.getItem('User-Photo'));

if (!usrPhoto) {
  usrPhoto = images[0];
  localStorage.setItem('User-Photo', JSON.stringify(usrPhoto));
}

currentImg.src = usrPhoto.image;
currentImg.alt = usrPhoto.description;

let index = images.findIndex((img) => img.image === usrPhoto.image);
if (index === -1) index = 0;

changeImg.addEventListener('click', () => {
  index = (index + 1) % images.length;
  const obj = images[index];

  currentImg.src = obj.image;
  currentImg.alt = obj.description;

  const usrChoice = { image: obj.image, description: obj.description };
  localStorage.setItem('User-Photo', JSON.stringify(usrChoice));
});
