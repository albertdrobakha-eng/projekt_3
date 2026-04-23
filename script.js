console.log("Wworld")

const url = 'https://tinkr.tech/sdb/poly/wander'

// 16.04.26


async function loadWorld() {
  const response = await fetch(url);
  const state = await response.json();

  console.log(state);
  return state;
}

function render(state) {
  const world = document.getElementById('world');

  world.innerHTML = ''; // 

  for (const player of state.players) {
    




    const playerDiv = document.createElement('div');

    playerDiv.style.position = 'absolute';
    playerDiv.style.left = player.x + 'px';
    playerDiv.style.top = player.y + 'px';


    const img = document.createElement('img');

    img.src = 'https://tinkr.tech' + player.image;
    img.width = player.width;
    img.height = player.height;
    img.style.imageRendering = 'pixelated';

    playerDiv.appendChild(img); 

//nimi 17.04

    const name = document.createElement('div')
    name.textContent = player.username;
    name.style.fontSize = '12px',
    name.style.textAlign = 'center';

    playerDiv.appendChild(name);

    if (player.message) {
      const messageDiv = document.createElement('div');
      messageDiv.textContent = player.message;

      messageDiv.style.position = 'absolute';
      messageDiv.style.bottom = '100%';
      messageDiv.style.background = 'white';
      messageDiv.style.border = '1px solid black';
      messageDiv.style.fontSize = '10px';
      messageDiv.style.padding = '3px';

      playerDiv.appendChild(messageDiv)
    }

    world.appendChild(playerDiv);
  }
};


setInterval(async function() {
  const state = await loadWorld();
  render(state);
}, 1700);

fetch(' ', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    action: 'join',
    username: 'ad'
  })
});













