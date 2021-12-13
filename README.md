GA project 1

# Project Overview
I am going to create a website application that will be able to access video game and computer game informaiton rapidly with relevant information displayed.
## Project Name


Cevap - ("game" in Turkish)
## Project Description

 The app project will be a fast video game lookup that has helpful information without needing to do multiple searches. 

There will be included in the site with relevant games, suggestions, categories.

## API and Data Sample

The API was found on giantbomb.com, which has a database of games.

[API:](http://www.giantbomb.com/api/search/?api_key=ea72d6fa698b889389beedfb65fbb5cf921e51da&format=json&query="${name}"&resources=game)

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
deck: "Various football players are already duking it out for the rights to be named the cover athlete for this year's Madden release."
description: "<h2>Release</h2><p>Madden 16 was made available to EA Early Access members on August 20th and was released to the general public on August 25th. Its cover features New York Giants wide receiver Odell Beckham Jr.</p><h2>New Features</h2><p>A new game mode entitled Draft Champions was introduced where players would draft a team, made up of cards from the Ultimate Team game mode, to play online against others for four games or until a loss.</p>"
expected_release_day: null
expected_release_month: null
expected_release_quarter: null
expected_release_year: null
guid: "3030-49600"
id: 49600
## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Dec 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Dec 13| Project Approval | Incomplete
|Dec 13| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Dec 14| Pseudocode / actual code | Incomplete
|Dec 15| Initial Clickable Model  | Incomplete
|Dec 16| MVP | Incomplete
|Dec 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
