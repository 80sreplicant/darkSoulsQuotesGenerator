const generateBtn = document.querySelector('#button');
const quotesDiv = document.querySelector('#quotes');
const testElement = document.querySelector('.testing-element');

// const element = document.querySelector('.my-element');
// element.classList.add('animate__animated', 'animate__bounceOutLeft');

const quoteLibrary = [
  'What’s wrong? Get a bit of a scare out there? No problem. Have a seat and get comfortable. We’ll both be hollow before you know it.',
  'Once, the Lord of Light banished Dark, and all that stemmed from humanity. And men assumed a fleeting form. These are the roots of our world. Men are props on the stage of life, and no matter how tender, how exquisite… A lie will remain a lie!',
  'The begins who posses these souls have outlived their usefulness, or chosen the path of the wicked. Let there be no guilt – let there be no vacillation.',
  'This is the only real direction in the story you’re ever going to get.',
  'My blade may break, my arrows fall wide, but my will shall never be broken. Those who live by the sword will die by it, and I, Drummond, won’t go down without drawing mine!',
  'Life is a journey… And every journey eventually leads to home',
  'If I were told that by killing you I would be free from this curse I would draw my blade without hesitation',
  'Not enough for you? Well, let’s not be stingy now… He he he…',
  'You’ve got a heart of Gold. Don’t let them take it from you.',
];

testElement.addEventListener('click', () => {
  console.log('clicked');
  /* if (testElement.classList.contains(false)) {
    testElement.classList.add('animate__animated', 'animate__bounce');
  } else {
    testElement.classList.remove('animate__animated', 'animate__bounce');
  } */

  testElement.classList.toggle('animate__animated', 'animate__bounce');
});

generateBtn.addEventListener('click', () => {
  getRandomQuote();
});

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quoteLibrary.length);
  quotesDiv.textContent = quoteLibrary[randomNum];
  quotesDiv.classList.toggle('animate__animated', 'animate__bounce');
  // quotesDiv.classList.remove('animate__animated', 'animate__bounce');
}
