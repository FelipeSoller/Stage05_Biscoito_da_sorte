const fortuneMessages = [
  "A persistência leva à conquista.",
  "A sorte favorece os audazes.",
  "Seja a mudança que você deseja ver no mundo.",
  "A paciência é uma virtude.",
  "Grandes coisas nunca vêm de conforto.",
  "O sucesso nasce do fracasso.",
  "Siga os seus sonhos com determinação.",
  "Acredite em si mesmo e tudo é possível.",
  "A sabedoria começa na reflexão.",
  "A vida é feita de escolhas, faça boas escolhas."
];

const closedCookie = document.querySelector('#closedCookieBtn');
const closedCookieScreen = document.querySelector('.closedCookieScreen');
const openedCookieScreen = document.querySelector('.openedCookieScreen');
const tryAgainBtn = document.querySelector('#tryAgainBtn');
const fortuneMessage = document.querySelector('#fortuneMessage');

const toggleScreen = () => {
  closedCookieScreen.classList.toggle('hide');
  openedCookieScreen.classList.toggle('hide');
};

const getRandomMessage = () => {
  return fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
};

const handleOpenCookie = () => {
  toggleScreen();
  fortuneMessage.innerText = getRandomMessage();
};

const handleTryAgain = () => {
  toggleScreen();
  location.reload();
};

const pressEnter = (e) => {
  if (e.key === 'Enter' && closedCookieScreen.classList.contains('hide')) {
    handleTryAgain();
  }
};

closedCookie.addEventListener('click', handleOpenCookie);
tryAgainBtn.addEventListener('click', handleTryAgain);
document.addEventListener('keydown', pressEnter);
