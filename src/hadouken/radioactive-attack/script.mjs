export function startgame() {
  const style = document.createElement('style');
  style.innerText = `
      body {
            overflow: hidden;
        }
        .zerg {
          position: absolute;
          user-select: none;
          width: 24px;
          height: 24px;
          background-image: url('./assets/radioactif.png');
          background-size: cover; /* ou background-size: contain; selon votre besoin */
        }
    `;

  document.head.appendChild(style);

  const body = document.body;
  let difficulty = 0;

  function createZerg() {
    difficulty += 0.02;
    const zerg = document.createElement('div');
    zerg.className = 'zerg';
    let xPos = 0;
    let yPos = 0;
    if (Math.random() > 0.5) {
      xPos = Math.random() * window.innerWidth;
      yPos = 0;
    } else {
      xPos = window.innerWidth;
      yPos = Math.random() * window.innerHeight;
    }

    zerg.style.left = xPos + 'px';
    zerg.style.top = yPos + 'px';

    zerg.addEventListener('click', function () {
      zerg.remove();
    });

    body.appendChild(zerg);
  }

  function createParagraph() {
    const paragraph = document.createElement('p');
    const content = document.createTextNode('This is a paragraph.');
    paragraph.appendChild(content);

    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    paragraph.style.left = xPos + 'px';
    paragraph.style.top = yPos + 'px';

    body.appendChild(paragraph);
  }

  function init() {
    for (let i = 0; i < 10; i++) {
      createZerg();
    }

    const intervalCreate = setInterval(createZerg, 1000);

    const intervalMove = setInterval(moveZergs, 30);
  }

  function moveZergs() {
    const zergs = document.querySelectorAll('.zerg');

    zergs.forEach((zerg) => {
      const nearestParagraph = findNearestParagraph(zerg);

      moveTowards(zerg, nearestParagraph);
      if (!nearestParagraph) {
        clearInterval(intervalCreate);
        clearInterval(intervalMove);
      }
      if (isColliding(zerg, nearestParagraph)) {
        nearestParagraph.style.opacity = 0.0;
      }
    });
  }

  function findNearestParagraph(zerg) {
    const paragraphs = document.querySelectorAll(
      'span:not([style*="opacity:"])'
    );
    let nearestParagraph = null;
    let minDistance = Infinity;

    paragraphs.forEach((paragraph) => {
      const distance = calculateDistance(zerg, paragraph);
      if (distance < minDistance) {
        minDistance = distance;
        nearestParagraph = paragraph;
      }
    });

    return nearestParagraph;
  }

  function calculateDistance(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  function moveTowards(zerg, target) {
    if (target == null) {
      zerg.remove();
    }
    try {
      const speed = 1 + difficulty;
      let angle = Math.atan2(
        target.offsetTop - zerg.offsetTop,
        target.offsetLeft - zerg.offsetLeft
      );
      if (angle === 0) {
        angle = Math.random() * 3;
      }
      let deltaX = speed * Math.cos(angle);
      let deltaY = speed * Math.sin(angle);
      zerg.style.left = zerg.offsetLeft + deltaX + 'px';
      zerg.style.top = zerg.offsetTop + deltaY + 'px';
    } catch (e) {}
  }

  function isColliding(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }

  init();

  var paragraphs = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

  // Parcours chaque paragraphe
  paragraphs.forEach(function (paragraph) {
    // Récupère le texte du paragraphe et le divise en mots
    var words = paragraph.textContent.split(' ');
    const emojis = [
      '♻️',
      '💚',
      '🌲',
      '🌳',
      '☘️',
      '🍀',
      '🍃',
      '🌹',
      '🌸',
      '🌺',
      '🌷',
    ];

    // Crée un nouveau contenu avec des balises span
    var newContent = words
      .map(function (word) {
        var h = nombreAleatoire(95, 130);
        var s = nombreAleatoire(40, 80);
        var l = nombreAleatoire(40, 70);
        let emojispan = '';
        if (Math.random() < 0.2) {
          const randomIndex = Math.floor(Math.random() * emojis.length);
          emojispan = '<span> ' + emojis[randomIndex] + '</span>';
        }
        return (
          '<span style="color :' +
          'hsl(' +
          h +
          ',' +
          s +
          '%, ' +
          l +
          '%' +
          ')' +
          '">' +
          word +
          '</span>' +
          emojispan
        );
      })
      .join(' ');

    function nombreAleatoire(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Remplace le contenu du paragraphe par le nouveau contenu avec les balises span
    paragraph.innerHTML = newContent;
  });
}
