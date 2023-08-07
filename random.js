// Find the div containing the games using a class name that starts with 'game_list'
var gamesDiv = document.querySelector('[class^="gameslistapp"]');

var gameNames = Array.from(gamesDiv.querySelectorAll('[class^="gameslistitems_GameName"]')).map(game => game.textContent.trim());

var randomGame = gameNames[Math.floor(Math.random() * gameNames.length)];

console.log(`Your random game to play is: ${randomGame}`);
