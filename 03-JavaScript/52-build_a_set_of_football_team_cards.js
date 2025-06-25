const playersArray = [
    { name: "Sergio Almirón", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
    { name: "Claudio Borghi", position: "midfielder", isCaptain: false },

    { name: "José Luis Brown", position: "defender", isCaptain: false },
    { name: "Daniel Passarella", position: "defender", isCaptain: false },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Néstor Clausen", position: "defender", isCaptain: false },

    { name: "José Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Héctor Enrique", position: "midfielder", isCaptain: false },

    { name: "Oscar Garré", position: "defender", isCaptain: false },
    { name: "Ricardo Giusti", position: "midfielder", isCaptain: false },
    { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
    { name: "Julio Olarticoechea", position: "defender", isCaptain: false },

    { name: "Pedro Pasculli", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Carlos Tapia", position: "midfielder", isCaptain: false },

    { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
    { name: "Héctor Zelada", position: "goalkeeper", isCaptain: false },
];

const footballTeam = {
    team: "Argentina",
    headCoach: "Carlos Bilardo", year: 1986, players: playersArray
}

const teamElement = document.getElementById("team");
teamElement.textContent = footballTeam.team;

const yearElement = document.getElementById("year");
yearElement.textContent = footballTeam.year;

const coachElement = document.getElementById("head-coach");
coachElement.textContent = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");
const selectedPosition = document.getElementById("players");

playerCards.innerHTML = "";
playersArray.forEach((player) => {
    const displayName = player.isCaptain ? `(Captain) ${player.name}` : player.name;
    playerCards.innerHTML += `<div class="player-card">
  <h2>${displayName}</h2>
  <p>Position: ${player.position}</p>
  </div>`;
});

selectedPosition.addEventListener("change", () => {
    let arr = playersArray;
    playerCards.innerHTML = "";

    switch (selectedPosition.value) {
        case "all":
            arr = playersArray;
            break;
        case "forward":
            arr = playersArray.filter((player) => player.position === "forward");
            break;
        case "midfielder":
            arr = playersArray.filter((player) => player.position === "midfielder");
            break;
        case "defender":
            arr = playersArray.filter((player) => player.position === "defender");
            break;
        case "goalkeeper":
            arr = playersArray.filter((player) => player.position === "goalkeeper");
            break;
        default:
            arr = playersArray;
    }
    arr.forEach((player) => {
        const displayName = player.isCaptain ? `(Captain) ${player.name}` : player.name;
        playerCards.innerHTML += `<div class="player-card">
  <h2>${displayName}</h2>
  <p>Position: ${player.position}</p>
</div>`
    });
});
