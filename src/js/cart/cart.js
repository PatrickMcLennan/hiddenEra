import DOM from './../dom/dom.js';
import Ticket from './ticket.js';

const cart = [];

const getShowInfo = i => {
  const get = info => i.getAttribute(info);
  const date = get('data-date');
  const venue = get('data-venue');
  const show = get('data-show');
  const price = get('data-price');

  return [date, venue, show, price]
}

const updateDom = cartNum => {
  DOM.cart.cartCount.forEach( i => {
    i.innerText = `${cartNum}`;
    i.style.opacity = '1';
  });
  DOM.form.splashTotal.innerText = `${cartNum}`;
}

DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  const show = getShowInfo(i);
  const ticket = new Ticket(show[0], show[1], show[2], show[3]);
  cart.push(ticket);
  if (cart.length >= 1) { updateDom(cart.length) };
  console.log(cart);
  })
)

export default cart;
