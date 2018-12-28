import DOM from './../dom/dom.js';
import cart from './../cart/cart.js'

let cartCount = cart.length;
let formInfo;

  // SPLASH

const appendChild = (element, parent) => parent.appendChild(element);

// CREATE UL, LI & SPAN ELEMENTS
const createSpans = array => {
  const spans = [];
  array.forEach(i => {
    const span = document.createElement('span');
    span.classList.add('form__splash__span');
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
// DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
//   const newTicket = cart[cartCount];
//   formInfo = newTicket === cart[0] ? createUl(newTicket) : appendChild(createLi(newTicket), document.querySelector('.form__splash__ul'));
//   cartCount = cart.length;
//   return formInfo;
// }))

export default formInfo;

