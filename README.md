GA project 1

https://bannersamuelson.github.io/Cevap-Game-Finder/
# Project Overview
I am going to create a website application that will be able to access video game and computer game informaiton rapidly with relevant information displayed.
## Project Name


Cevap Game Finder - (Cevap = "game" in Turkish)
## Project Description

 The app project will be a lookup machine for fast video game information without needing to do multiple searches. 

There will be included in the site with relevant games, suggestions, categories.

## API and Data Sample

The API was found on giantbomb.com, which has a database of games.

[API Link](http://www.giantbomb.com/api/search/?api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game)

<h2>API Snippet</h2>
{error: 'OK', limit: 10, offset: 0, number_of_page_results: 10, number_of_total_results: 44, …}
error: "OK"
limit: 10
number_of_page_results: 10
number_of_total_results: 44
offset: 0
results: Array(10)
0:
aliases: "Madden NFL 2016"
api_detail_url: "https://www.giantbomb.com/api/game/3030-49600/"
date_added: "2015-05-05 14:27:54"
date_last_updated: "2018-02-08 08:09:52"
deck: "Various football players are already duking it out for the rights to be named the cover athlete for this year's Madden release." . . .

<h2>Wireframes</h2>

[Link to wireframe on Figma](https://www.figma.com/file/8T49Yi7EM6A59cnXE8Ig9g/Wireframe-p1?node-id=0%3A1)


### MVP

- Be able to search a database for games
- A list of games will populate based on the search including title/release date and img
- add a "learn more function"
- A "my games" will be added for you to save favorite games
- A "library" tab will revert back to the previous search
- phone screens will be functional.

#### PostMVP  

- update favorites screen
- add heart color after click
- add carousel to now trending
- have random games be able to be displayed
- have full screen pages on game clicked ("show more")
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Copmlete
|Dec 13| Project Approval/ create webppage/phone structure | Complete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Complete
|Dec 14| Pseudocode / actual codeCore| Complete
|Dec 15| Initial Clickable Model  | Complete
|Dec 16| MVP | Complete
|Dec 17| Presentations | Complete

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dnv6i44dp/image/upload/v1639368115/Priority_Matrix_toqoqy.png)
## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 1 hrs| 3 hrs| 3 hrs|
| Adding HTML and CSS for stying | L | 2 hrs | 10 hrs | 10 hrs |
| Nav bar and flex display | H | 1.5 hrs | 5 hrs | 5 hrs|
| Search bar input JS | H| 3 hrs | 3 hrs | 3 hrs |
| Display item information | H | 3 hrs | 3 hrs | 3 hrs
| Page scroll functionality | L | 1.5 hrs | 1.5 hrs | 1.5 hrs |
| CSS Styling| M | 2 hrs | 2 hrs | 2 hrs |
| User feedback display | M | 3 hrs | 3 hrs | 3hrs |
| API functionality | H| 3 hrs | 3 hrs | 3 hrs |
| JavaScript "my library" | M | 3 hrs | 1.5 hrs | 1.5 hrs |
| JavaScript "my favorites" | M | 3 hrs | 3 hrs | 3 hrs |
| Media Query Styling | H | 3 hrs| .5 hrs | .5 hrs
| Background imaging | L | 2 hrs | 2 hrs | 2 hrs |
| Debugging | M | 3 hours | 3 hrs | 3 hrs |
| Total | H | 33.5 hours | 43.5 hrs | 43.5 hrs |

<!-- CODE SNIPPET I'M PROUD OF -->
```
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
  gameTitle.addEventListener("click", () => {
    const gameImage = document.createElement("img")
    gameImage.src = game.image.medium_url;
    myFavorites.appendChild(gameImage);
    myFavorites.style.display = "none ";
    console.log(gameImage);
    myFavorites.appendChild(gameImage);
    fav.addEventListener("click", () => {
      gameInfo.style.display = "none";
      images.style.display = "none";
      carousel.style.display = "none";
      dots.style.display = "none";
      ourChoices.style.display = "none";
      myFavorites.style.display = "block";
      fav.style.borderBottom = "solid 1px #d5d5d5"
      fav.style.borderMargin = "margin: 0 20px 10px 20px;"
      home.style.borderBottom = "none";



    })
  })
  ```

## Change Log
 <!-- Use this section to document what changes were made and the reasoning behind those changes.   !-->
I changed the home page from just images of a video game to an actual professional looking, which was mainly done with hard-coding the HTML on the page. I wished I did not have to hard code the HTML, but I'm pleased with the outcome.