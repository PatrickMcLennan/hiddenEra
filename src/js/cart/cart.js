import DOM from './../dom/dom.js';

const cart = [];

class Ticket {
  constructor(date, venue, show, price) {
    this.date = date;
    this.venue = venue;
    this.show = show;
    this.price = price;
  }
}

const getShowInfo = i => {
  const get = info => i.getAttribute(info);
  const date = get('data-date');
  const venue = get('data-venue');
  const show = get('data-show');
  const price = get('data-price');

  return [date, venue, show, price]
}

// GET SHOW INFO ON CLICK
const addToCart = () => {
  const { addCartBtns } = DOM.dates;
  const { cartCount } = DOM.cart;
  addCartBtns.forEach(i => i.addEventListener('click', () => {
    const show = getShowInfo(i)
    const ticket = new Ticket(show[0], show[1], show[2], show[3]);
    cart.push(ticket);
    if (cart.length >= 1) { cartCount.style.opacity = '1' };
    cartCount.innertext = cart.length;
    console.log(cart);
  }))
}

addToCart();

export default cart;
