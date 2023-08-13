document.querySelector('#view-more').addEventListener('click', function() {
    var hiddenCards = document.querySelector('.hidden-cards');
    if (hiddenCards.style.display === 'none') {
      hiddenCards.style.display = 'block';
      this.textContent = 'View Less';
    } else {
      hiddenCards.style.display = 'none';
      this.textContent = 'View More';
    }
  });
  