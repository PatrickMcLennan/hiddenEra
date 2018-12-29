import DOM from './../dom/dom.js';
import cart from './../cart/cart.js'
import { create } from 'domain';

  // SPLASH


const appendChild = (element, parent) => parent.appendChild(element);

// CREATE UL, LI & SPAN ELEMENTS
const createSpans = array => {
  const spans = [];
  array.forEach(i => {
    const span = document.createElement('span');
    span.classList.add(`form__splash__${Object.keys(array)[i]}`);
    span.innerText = i;
    spans.push(span);
  })
  return spans;
}
const createLi = show => {
  const data = [show.date, show.venue, show.show, show.price]
  const listing = document.createElement('li');
  listing.classList.add('form__splash__li');
  const spans = createSpans(data)
  spans.forEach(i => appendChild(i, listing));
  appendChild(listing, document.querySelector('.form__splash__ul'));
  return listing;
}
const createUl = show => {
  const ul = document.createElement('ul');
  appendChild(ul, DOM.form.splash);
  ul.classList.add('form__splash__ul');
  const li = createLi(show);
  appendChild(li, ul)
  return ul;
}

// LISTEN FOR NEW ITEM IN CART
const splashUl = DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  document.removeChild('.form__splash__ul');
  cart.forEach(i => i === cart[0] ? createUl(i) : createLi(i));
}))

export default splashUl;

