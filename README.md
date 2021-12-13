GA project 1

# Project Overview
I am going to create a website application that will be able to access video game and computer game informaiton rapidly with relevant information displayed.
## Project Name


Cevap - ("game" in Turkish)
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

- Add a hamburger style menu for phone screens
- Add a carousel for game scrolling
- Expand game informaiton upon click
- Add suggestions section
## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Copmlete
|Dec 13| Project Approval/ create webppage/phone structure | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Pseudocode / actual codeCore| Incomplete | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dnv6i44dp/image/upload/v1639368115/Priority_Matrix_toqoqy.png)
## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 1 hrs|
| Adding HTML and CSS for stying | L | 2 |
| Nav bar and flex display | H | 1.5 hours |
| Search bar input JS | H| 3 hours |
| Display item information | H | 3 hours |
| Page scroll functionality | L | 1.5 hours |
| CSS Styling| M | 2 hours |
| User feedback display | M | 3 hours |
| API functionality | H| 3 hours |
| JavaScript "my library" | M | 3 hours |
| JavaScript "my favorites" | M | 3 hours |
| Media Query Styling | H | 3 hours|
| Background imaging | L | 2 hour |
| Debugging | M | 3 hours |


| Total | 33.5 hours |

<!-- ## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.   -->

<!-- ```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->

## Change Log
 <!-- Use this section to document what changes were made and the reasoning behind those changes.   -->
