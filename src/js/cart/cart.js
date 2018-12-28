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
  const { splashTotal, backButtons, nextButtons } = DOM.form;
  DOM.cart.cartCount.forEach( i => {
    i.innerText = `${cartNum}`;
    i.style.opacity = '1';
  });
  splashTotal.innerText = `${cartNum}`;
  backButtons.forEach(i => i.style.opacity = '1');
  nextButtons.forEach(i => i.style.opacity = '1');
}
const orgCart = (array, ticket) => {
  array.unshift(ticket);
  const sortedArr = array.sort((a, b) => a.date.localeCompare(b.date));
  console.log(sortedArr);
}


DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  const show = getShowInfo(i);
  const ticket = new Ticket(show[0], show[1], show[2], show[3]);
  orgCart(cart, ticket);
  updateDom(cart.length);
  return cart;
  })
)

export default cart;
