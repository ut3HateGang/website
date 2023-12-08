import { startgame } from '../radioactive-attack/script.mjs';
import { snake } from '../snake/snake.mjs';
let konamiCount = 0;
let timer;
document.body.innerHTML += `
<img
    id="food-image"
    src="/assets/apple.png"
    width="90"
    height="90"
    style="display: none"
  />
  <h1>Titre de la page</h1>
  <section class="modal hidden">
    <div class="flex">
      <div>GG Konami code activated</div>
      <button class="btn-close">⨉</button>
    </div>
    <hr />
    <h3>Easter Egg Menu</h3>
    <ul class="modal-main">
      <li class="icon">
        <img
          height="100px"
          width="100px"
          src="/assets/_68e71933-7979-43fb-9f50-7f71e7c03bf7.jpg"
        />
        <button id="btnRa" class="button-17" role="button">
          Radioactive Attack
        </button>
      </li>
      <li class="icon">
        <img
          height="100px"
          width="100px"
          src="/assets/_07e05336-73f2-4ab2-9c0a-49f9a5388bba.jpg"
        />
        <button id="btnSnake" class="button-17" role="button">Snake</button>
      </li>
      <div></div>
      <li class="icon">
        <img
          height="100px"
          width="100px"
          src="/assets/_db047147-9a6e-4568-bf3d-bdb788594d56.jpg"
        />
        <button id="btnTetris" class="button-17" role="button">Tetris</button>
      </li>
    </ul>
  </section>

  <div class="overlay hidden"></div>
`;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const keypress = (e) => {
  if (e.keyCode === 77) {
    openModal();
  }
  timer = clearTimeout(timer);
  timer = setTimeout(() => {
    konamiCount = 0;
  }, 3000);
  switch (konamiCount) {
    case 0:
    case 1:
      if (e.keyCode === 38) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 2:
      if (e.keyCode === 38) {
        break;
      }
    case 3:
      if (e.keyCode === 40) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 4:
    case 6:
      if (e.keyCode === 37) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 5:
    case 7:
      if (e.keyCode === 39) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 8:
      if (e.keyCode === 66) {
        konamiCount++;
      } else {
        konamiCount = 0;
      }
      break;
    case 9:
      if (e.keyCode === 65) {
        console.log('KONAMI CODE');
        openModal();
      } else {
        konamiCount = 0;
      }
      break;
    default:
      break;
  }
};
const styleElement = document.createElement('style');
styleElement.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  position: relative;
  min-height: 100vh;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 450px;
  padding: 1.3rem;
  min-height: 250px;
  position: absolute;
  z-index: 2;
  top: 20%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.modal .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal input {
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9em;
}

.modal p {
  font-size: 0.9rem;
  color: #777;
  margin: 0.4rem 0 0.2rem;
}

button {
  cursor: pointer;
  border: none;
  font-weight: 600;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.4rem;
  font-weight: 700;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
}

.btn-open {
  position: absolute;
  bottom: 150px;
}

.btn-close {
  transform: translate(10px, -20px);
  padding: 0.5rem 0.7rem;
  background: #eee;
  border-radius: 50%;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
}

.hidden {
  display: none;
}
.modal-main {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* CSS */
.button-17 {
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
.icon {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-left: 2em;
  margin-top: 1em;
  align-items: center;
}
.icon img {
  margin-bottom: 0.5em;
  border-radius: 15px;
}
`;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => keypress(e));

  const closeModalBtn = document.querySelector('.btn-close');

  // close modal function
  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // close modal when the Esc key is pressed
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  const btnRa = document.getElementById('btnRa');
  const btnSnake = document.getElementById('btnSnake');
  const btnTetris = document.getElementById('btnTetris');
  btnRa.addEventListener('click', () => {
    closeModal();
    startgame();
  });
  btnSnake.addEventListener('click', () => {
    closeModal();
    snake();
  });
  btnTetris.addEventListener('click', () => {
    window.location = 'https://tetris404-6wko0ee43-valps-projects.vercel.app/';
  });
  // open modal function

  // open modal event
});

//
