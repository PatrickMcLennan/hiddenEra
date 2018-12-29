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
  array.push(ticket);
  const sortedArr = array.sort((a, b) => a.date.localeCompare(b.date))
  const reducedArr = sortedArr.reduce((accum, show) => {
    const date = show.date;
    if (!accum[date]) accum[date] = [];
    accum[date].push(show);
    return accum;
  }, []);
  return reducedArr;
}

DOM.dates.addCartBtns.forEach(i => i.addEventListener('click', () => {
  const show = getShowInfo(i);
  const ticket = new Ticket(show[0], show[1], show[2], show[3], show[4]);
  orgCart(cart, ticket);
  updateDom(cart.length);
  return cart;
  })
)

export default cart;


// network:
//     ethernets:
//         enp2s0f0:
//             addresses: []
//             dhcp4: true
//     version: 2


// auto enp0s3
// iface enp0s3 inet static
//         address 192.168.1.98
//         netmask 255.255.255.0
//         gateway 192.168.0.1
//         dns-nameservers 8.8.8.8

// /Users/patrickmclennan/Downloads

// HEY - ONCE THE ISO ISS ON THE SERVER, INSTALL IT FROM THERE WITH THE ALTERED CODE FROM THE WEBPAGE ON THE LEFT -- CHANGE THE GRAPHIC, RAM, DIRECTORY, NETWORK BRIDGE <- GODSPEED

// /home/patrick/ubuntu..
