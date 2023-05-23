let allCards = document.querySelectorAll('.memory-card');

let startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', function () {
  document.querySelector('.second').style.display = 'flex';
  document.querySelector('.first').style.display = 'none';
});

let activeCards = [];
let guessedCards = [];

for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', function (e) {
    if (guessedCards.includes(allCards[i]) || activeCards.includes(allCards[i])) {
      return
    }
    
    allCards[i].classList.add('active')
    activeCards.push(allCards[i])
    
    if (activeCards.length === 2) {
      if (activeCards[0].textContent === activeCards[1].textContent) {
        guessedCards.push(activeCards[0])
        guessedCards.push(activeCards[1])
        activeCards = []
      }
    }
    
    if (activeCards.length === 3) {
      if (activeCards[0].textContent === activeCards[1].textContent) {
        guessedCards.push(activeCards[0])
        guessedCards.push(activeCards[1])
        activeCards = activeCards.slice(2)
        
        
      } else {
        activeCards[0].classList.remove('active')
        activeCards[1].classList.remove('active')
        activeCards = activeCards.slice(2)
      }
    }
    
    if (guessedCards.length === 16) {
      console.log('победа')
      document.querySelector('.final').style.display = 'flex';
      document.querySelector('.second').style.display = 'none';
      // переход на третий экран
    }
  });
}