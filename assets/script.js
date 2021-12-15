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
const gameFinder = document.querySelector("#gameFinder");
const myFavorites = document.querySelector(".myFavorites");
const favoritesArray = []
const logoImg = document.querySelector(".logo");
const pageLoad = document.querySelector(".onLoad");
const button2 = document.querySelector("#nextPage");
const button3 = document.querySelector("#previousPage");
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  gameInfo.style.display = "none";
  onLoad("fifa");

})

let page = 1;
let currentSearchValue = "";

button2.addEventListener("click", () => {
  page += 1;
  getGame(currentSearchValue)
})

button3.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    getGame(currentSearchValue);
  } else {
    console.log("invalid");
  }
});

async function getGame(name) {
  console.log(name, currentSearchValue)
  if (currentSearchValue !== name) {
    page = 1;
  }
  currentSearchValue = name;
  gameResults.innerHTML = "";
  pageLoad.innerHTML = "";

  try {
    // const url = `http://www.giantbomb.com/api/search/?api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game`;
    const url = `http://www.giantbomb.com/api/search/?page=${page}&api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game`;
    let res = await axios.get(url);

    const gameData = res.data.results;

    console.log(gameData);
    gameData.forEach((game) => {
      showGameData(game);


    });

  } catch (error) {
    console.log(error);
  }
}


formSearch.addEventListener("submit", handleSubmit);

//search input operable:
function handleSubmit(event) {
  event.preventDefault();
  console.log(gameFinder.value);
  getGame(gameFinder.value);
  gameFinder.value = "";
  removeGame();
  gameInfo.style.display = "block";
  button2.style.display = "block";
  button3.style.display = "block";
};


// getGame("fifa")

//clearing search data
function removeGame() {
  gameResults.innerHTML = "";
}


// getting game data to display in class gameResults
function showGameData(game) {

  const gamePhoto = document.createElement("img")
  gamePhoto.src = game.image.medium_url;
  gamePhoto.alt = `Post of ${game.name}`;
  gameResults.appendChild(gamePhoto);
  gamePhoto.setAttribute("class", "imgFlex")

  const gameTitle = document.createElement("h2");
  gameTitle.innerText = game.name;
  gameResults.appendChild(gameTitle);
  gameTitle.setAttribute("class", "titleGame")

  //platform forEach loop
  let platformList = document.createElement("ul")
  let icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-gamepad");
  icon.setAttribute("aria-hidden", "true");
  platformList.appendChild(icon);
  platformList.setAttribute("class", "ulSize")
  game.platforms.forEach((system) => {
    const platform = document.createElement("li");
    platform.innerText = `${system.name}`;
    platformList.appendChild(platform);
    platform.setAttribute("class", "plat")
  })
  gameResults.appendChild(platformList);


  const deck = document.createElement("h4");
  deck.innerText = game.deck;
  gameResults.appendChild(deck);
  deck.setAttribute("class", "row")
  const learnMore = document.createElement("button")



  const favorite = document.createElement("button");
  gameResults.appendChild(favorite);
  favorite.setAttribute("class", "button1")
  favorite.setAttribute("id", "heart")
  favorite.setAttribute("type", "submit")


};

function showGamedata(data) {
  console.log(data);
};





function saveGame(gameData) {
  favoritesArray.push(gameData.game)

}




async function onLoad(name) {
  {
    pageLoad.style.display = "flex";

    const newUrl = `http://www.giantbomb.com/api/search/?limit=8&page=2&api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game`;
    const newRes = await axios.get(newUrl);
    const newGameData = newRes.data.results;

    console.log(newGameData);
    newGameData.forEach((game) => {
      randomGameData(game)
    });
  }

  function randomGameData(game) {


    const largePhoto = document.createElement("img")
    largePhoto.src = game.image.medium_url;
    largePhoto.alt = `Post of ${game.name}`;
    pageLoad.appendChild(largePhoto);


  }
}

onLoad("madden")

//   } catch (error) {
//     console.log("error");
//   }


// };







