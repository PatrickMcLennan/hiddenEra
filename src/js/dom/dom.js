const DOM = {
  home: {
    reviewsColL: document.querySelector('.home__reviews__col:nth-child(1)'),
    reviewsL: document.querySelectorAll('.home__reviews__col:nth-child(1) .review'),
    reviewsColR: document.querySelector('.home__reviews__col:nth-child(2)'),
    reviewsR: document.querySelectorAll('.home__reviews__col:nth-child(2) .review'),
  },
  dates: {
    section: document.querySelector('.dates'),
    sectionHeading: document.querySelector('#dates'),
    addCartBtn: document.querySelectorAll('.dates__cta')
  }
}

export default DOM;
