function setActive(item) {
  let all = document.querySelectorAll('.process-item');
  for (let i = 0; i < all.length; i++) {
    all[i].classList.remove('process-item--active');
    all[i].querySelector('.process-expandable').classList.remove('process-expandable--active');
    all[i].querySelector('.process__state').classList.remove('process__state--active');
  }

  item.classList.add('process-item--active');
  item.querySelector('.process-expandable').classList.add('process-expandable--active');
  item.querySelector('.process__state').classList.add('process__state--active');
}
