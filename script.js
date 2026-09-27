// nav scroll state + mobile toggle
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
const navlinks = document.getElementById('navlinks');
document.getElementById('navtoggle').addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

// scroll reveal
const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); }), {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// gallery: 19 real studio photos
const galImgs = [
  "img1.png",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.png",
  "img15.png",
  "img16.png",
  "img17.png",
  "img18.jpg",
  "img19.jpg"
];
const gal = document.getElementById('galGrid');
galImgs.forEach((src) => {
  const div = document.createElement('div');
  div.className = 'gal-item';
  div.style.backgroundImage = `url('${src}')`;
  div.style.backgroundSize = 'cover';
  div.style.backgroundPosition = 'center';
  div.addEventListener('click', () => {
    document.getElementById('lbBox').style.backgroundImage = `url('${src}')`;
    document.getElementById('lbBox').style.backgroundSize = 'cover';
    document.getElementById('lbBox').style.backgroundPosition = 'center';
    document.getElementById('lightbox').classList.add('open');
  });
  gal.appendChild(div);
});
document.getElementById('lbClose').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click', e => { if(e.target.id === 'lightbox') e.target.classList.remove('open'); });

// testimonial rotation
const slides = document.querySelectorAll('.testi-slide');
const dotsWrap = document.getElementById('testiDots');
slides.forEach((_, i) => {
  const b = document.createElement('button');
  if(i===0) b.classList.add('active');
  b.addEventListener('click', () => showSlide(i));
  dotsWrap.appendChild(b);
});
let current = 0;
function showSlide(i){
  slides[current].classList.remove('active');
  dotsWrap.children[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dotsWrap.children[current].classList.add('active');
}
setInterval(() => showSlide((current+1) % slides.length), 6000);