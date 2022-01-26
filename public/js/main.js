import GameController from './controller/game-controller.js';
const playerName = document.querySelector("#player-name")
const adminPanel = document.querySelector("#adminControls")
const gameController = new GameController();
/* global io */
// io is a global variable for socket.io-client set from the view html
gameController.connect(io);

setInterval(() => {
if(playerName.value == "DJ_ARBUZE") {
    adminPanel.style.display = ""
}
}, 500)
