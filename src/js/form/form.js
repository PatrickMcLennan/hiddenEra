import DOM from './../dom/dom.js';
import cart from './../cart/cart.js'

let cartCount = cart.length;
let formInfo;

  // SPLASH
// HELPERS
const appendChild = (element, parent) => parent.appendChild(element);
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
// CREATE UL & LI ELEMENTS
const createUl = show => {
  const ul = document.createElement('ul');
  appendChild(ul, DOM.form.splash);
  ul.classList.add('form__splash__ul');
  const li = createLi(show);
  appendChild(li, ul)
  return ul;
}
const createLi = show => {
  const data = [show.date, show.venue, show.show, show.price]
  const listing = document.createElement('li');
  listing.classList.add('form__splash__li');
  const spans = createSpans(data)
  spans.forEach(i => appendChild(i, listing));
  return listing;
}

// LISTEN FOR NEW ITEM IN CART
DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  const newTicket = cart[cartCount]
  formInfo = newTicket === cart[0] ? createUl(newTicket) : appendChild(createLi(newTicket), document.querySelector('.form__splash__ul'));
  cartCount = cart.length;
  console.log(formInfo);
  console.log(cartCount);
  console.log(cart.length);
  return formInfo;
}))

export default formInfo;

// ABILITY TO ADD OR REMOVE TICKETS
