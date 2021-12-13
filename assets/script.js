// const express = require('express');
// const request = require('request');
// const app = express();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.get('', (req, res) => {
//   request(
//     { url: 'https://www.easports.com/fifa/ultimate-team/api/fut/item' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
const gameResults = document.querySelector(".gameResults");

async function getGame(name) {
  try {
    const url = `http://www.giantbomb.com/api/search/?api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game`;
    const res = await axios.get(url);
    const gameData = res.data.results;
    console.log(gameData);
    renderList(gameData);
    // gameData.forEach((gameObj) => {
    //   showGameData(gameObj);
    // });
  } catch (error) {
    console.log("error");
  }

}



function renderList(gameData) {
  gameData.forEach((game) => {
    console.log(game.name);

    const gamePhoto = document.createElement("img")
    gamePhoto.src = game.image.medium_url;
    gamePhoto.alt = `Post of ${game.name}`;
    gameResults.appendChild(gamePhoto);

    const gameTitle = document.createElement("h2");
    gameTitle.innerText = game.name;
    gameResults.appendChild(gameTitle);

  });
}

getGame("madden");

// function displayErrorMessage() {
//   console.log("error");
// }

function showGamedata(data) {
  console.log(data);
}

