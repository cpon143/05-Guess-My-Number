'use strict';
/*console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent ='🎉 Correct answer!';

document.querySelector('.number').textContent ='13';
document.querySelector('.score').textContent = '10';
document.querySelector('.highscore').textContent = '100';
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input or zero
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no number!';
  }

  // when guess is correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct answer!';
    document.querySelector('.number').textContent = secretNumber; 
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem'
  }

  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      document.querySelector('body').style.backgroundColor = '#e60000';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎇You lost the game';
    }
  }

  // when guess i\s too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      document.querySelector('body').style.backgroundColor = '#e60000';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🎇You lost the game';
    }
  }
});

document.querySelector('.btn').addEventListener('click', function(){
  score=20
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';
});
