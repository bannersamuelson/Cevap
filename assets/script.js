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
const gameInfo = document.querySelector(".gameInfo");
const formSearch = document.querySelector("#formSearch");
const gameFinder = document.querySelector("#gameFinder")



async function getGame(name) {
  try {
    const url = `http://www.giantbomb.com/api/search/?api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game`;
    const res = await axios.get(url);
    const gameData = res.data.results;
    console.log(gameData);


    gameData.forEach((game) => {
      showGameData(game);

    });



  } catch (error) {
    console.log("error");
  }

}

formSearch.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  console.log(gameFinder.value);
  let inputValue = gameFinder.value;
  gameFinder.value = "";
  getGame(inputValue);
  removeGame();
}


function removeGame() {
  gameResults.innerHTML = "";
}




function showGameData(game) {

  const gamePhoto = document.createElement("img")
  gamePhoto.src = game.image.medium_url;
  gamePhoto.alt = `Post of ${game.name}`;
  gameResults.appendChild(gamePhoto);
  gamePhoto.setAttribute("class", "row")

  const gameTitle = document.createElement("h2");
  // h2.classList.add(".sub");
  gameTitle.innerText = game.name;
  gameResults.appendChild(gameTitle);
  gameTitle.setAttribute("class", "row")

  // const platform = document.createElement("h4");
  // platform.innerText = `${game.platforms[0].name}`;
  // gameResults.appendChild(platform);
  // platform.setAttribute("class", "row")

  const deck = document.createElement("h4");
  deck.innerText = game.deck;
  gameResults.appendChild(deck);
  deck.setAttribute("class", "row")

  const favorite = document.createElement("button");
  gameResults.appendChild(favorite);
  favorite.setAttribute("class", "button1")
  favorite.setAttribute("id", "heart")
};


// getGame("madden");

// function displayErrorMessage() {
//   console.log("error");
// }

function showGamedata(data) {
  console.log(data);
}
