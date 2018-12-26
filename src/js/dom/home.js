// REVIEWS
import DOM from './dom.js';

const reviewTime = 3250;
const directionL = [];
const directionR = [];

const scrollingReviews = (array, count, dirArray) => {
  dirArray.push(count);
  if (dirArray.length === 1 || dirArray[dirArray.length - 1] > dirArray[dirArray.length - 2] || count === 0) {
    array.forEach( i => i.style.transform = `translateY(${count * -100}%)`);
    count == DOM.home.reviewsL.length - 1 ? count -= 1 : count += 1;
  } else if (count === DOM.home.reviewsL.length || dirArray[dirArray.length - 1] < dirArray[dirArray.length - 2]) {
    array.forEach( i => i.style.transform = `translateY(${(count * -100) + 100}%)`);
    count -= 1;
  }
  if (dirArray.length > 2) { dirArray.shift() };
  setTimeout(() => scrollingReviews(array, count, dirArray), reviewTime);
}

scrollingReviews(DOM.home.reviewsL, 0, directionL);
setTimeout(() => scrollingReviews(DOM.home.reviewsR, 0, directionR), reviewTime / 2);

export default scrollingReviews;
