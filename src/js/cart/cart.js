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
const orgCart = (array, show) => {
  const { date } = show;
  array.forEach(i => {
    if (i.date = date) {
      const sameShowArr = [i, date];
      array.push(sameShowArr);
      return array;
    } else if (Array.isArray(i) && i[0].date == date) {
      i.push(show);
      return array;
    }
  })
}

DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  const show = getShowInfo(i);
  const ticket = new Ticket(show[0], show[1], show[2], show[3]);
  // cart.push(ticket);
  updateDom(cart.length);
  orgCart(cart, ticket);
  console.log(cart);
  })
)

export default cart;
