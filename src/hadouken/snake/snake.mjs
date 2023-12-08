export function snake() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  const canvas = document.createElement('canvas');
  canvas.id = 'game-board';
  let foods = [];
  const box = 30;

  canvas.width = width;
  canvas.height = height;

  function generateFood() {
    return {
      x: Math.floor((Math.random() * width) / box) * box,
      y: Math.floor((Math.random() * height) / box) * box,
    };
  }

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.appendChild(canvas);

  const divContainer = document.createElement('div');
  divContainer.appendChild(container);
  divContainer.className = 'main_snake';

  const style = document.createElement('style');
  style.innerText = `
      #game-board {
        width: ${width};
        height: ${height};
      }
      .main_snake {
        position: fixed;
        top: 0;
        left: 0;
      }
      body{
        overflow:hidden;
      }
    `;

  document.head.appendChild(style);
  document.body.appendChild(divContainer);

  const ctx = canvas.getContext('2d');
  for (let i = 0; i < 5; i++) {
    foods.push(generateFood());
  }
  let score = 0;

  let snake = [];
  snake[0] = {
    x: 10 * box,
    y: 10 * box,
  };

  let d;
  document.addEventListener('keydown', direction);

  function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') {
      d = 'LEFT';
    } else if (event.keyCode === 38 && d !== 'DOWN') {
      d = 'UP';
    } else if (event.keyCode === 39 && d !== 'LEFT') {
      d = 'RIGHT';
    } else if (event.keyCode === 40 && d !== 'UP') {
      d = 'DOWN';
    }
  }

  function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
      if (head.x === array[i].x && head.y === array[i].y) {
        return true;
      }
    }
    return false;
  }
  const colors = ['#67c211', '#7bad4c', '#4b8f0b', '#64804a', '#489401'];

  async function draw() {
    height = Math.floor(window.innerHeight / box) * box;
    width = Math.floor(window.innerWidth / box) * box;

    ctx.clearRect(0, 0, width, height);
    // ctx.fillStyle = '#faf3dd';
    // ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'; // Couleur du quadrillage
    ctx.lineWidth = 1; // Épaisseur de ligne
    // Lignes verticales
    for (let i = 0; i <= width; i += box) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    // Lignes horizontales
    for (let i = 0; i <= height; i += box) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
    for (let i = 0; i < snake.length; i++) {
      let snakeColor = colors[i % colors.length]; // Utilisation de teintes différentes

      ctx.fillStyle = i === 0 ? '#62a87c' : snakeColor; // Tête verte, corps coloré
      ctx.fillRect(snake[i].x, snake[i].y, box, box);
      ctx.fillRect(snake[i].x, snake[i].y, box, box);

      ctx.strokeStyle = 'black';
      ctx.strokeStyle = 'black';

      ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    let foodImage = document.getElementById('food-image');

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    if (snakeX < 0) snakeX = width - box;
    if (snakeX >= width) snakeX = 0;
    if (snakeY < 0) snakeY = height - box;
    if (snakeY >= height) snakeY = 0;

    let newHead = {
      x: snakeX,
      y: snakeY,
    };

    // Fonction pour générer la nourriture mangeable

    // Générer plusieurs food au début du jeu

    // Dans la fonction draw(), dessiner toutes les occurrences de nourriture mangeable
    foods.forEach((foodItem) => {
      ctx.drawImage(foodImage, foodItem.x, foodItem.y, box, box);
    });

    // Dans la détection de collision avec le serpent
    let ate = false;
    for (let i = 0; i < foods.length; i++) {
      if (snakeX === foods[i].x && snakeY === foods[i].y) {
        ate = true;
        score++;
        // Retirer la food mangée du tableau des foods
        foods.splice(i, 1);
        // Ajouter une nouvelle food
        foods.push(generateFood());
      }
    }

    if (!ate) {
      snake.pop();
    }
    // Si la taille des foods est inférieure à 5, générer plus de food
    while (foods.length < 5) {
      foods.push(generateFood());
    }

    if (collision(newHead, snake)) {
      clearInterval(game);
    }

    snake.unshift(newHead);

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
  }

  let game = setInterval(draw, 75);
}
