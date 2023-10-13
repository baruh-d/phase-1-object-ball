function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    Number: 0,
                    Shoe: 16,
                    Points: 22,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 1,
                },
                "Reggie Evans": {
                    Number: 30,
                    Shoe: 14,
                    Points: 12,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 12,
                    Blocks: 12,
                    "Slam Dunks": 7,
                },
                "Brook Lopez": {
                    Number: 11,
                    Shoe: 17,
                    Points: 17,
                    Rebounds: 19,
                    Assists: 10,
                    Steals: 3,
                    Blocks: 1,
                    "Slam Dunks": 15,
                },
                "Mason Plumlee": {
                    Number: 1,
                    Shoe: 19,
                    Points: 26,
                    Rebounds: 12,
                    Assists: 6,
                    Steals: 3,
                    Blocks: 8,
                    "Slam Dunks": 5,
                },
                "Jason Terry": {
                    Number: 31,
                    Shoe: 15,
                    Points: 19,
                    Rebounds: 2,
                    Assists: 2,
                    Steals: 4,
                    Blocks: 11,
                    "Slam Dunks": 1,
                },
            },
        },
        // the away team's data 
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    Number: 4,
                    Shoe: 18,
                    Points: 10,
                    Rebounds: 1,
                    Assists: 1,
                    Steals: 2,
                    Blocks: 7,
                    "Slam Dunks": 2,
                },
                "Bismak Biyombo": {
                    Number: 0,
                    Shoe: 16,
                    Points: 12,
                    Rebounds: 4,
                    Assists: 7,
                    Steals: 7,
                    Blocks: 15,
                    "Slam Dunks": 10,
                },
                "DeSagna Diop": {
                    Number: 2,
                    Shoe: 14,
                    Points: 24,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 4,
                    Blocks: 5,
                    "Slam Dunks": 5,
                },
                "Ben Gordon": {
                    Number: 8,
                    Shoe: 15,
                    Points: 33,
                    Rebounds: 3,
                    Assists: 2,
                    Steals: 1,
                    Blocks: 1,
                    "Slam Dunks": 0,
                },
                "Brendan Haywood": {
                    Number: 33,
                    Shoe: 15,
                    Points: 6,
                    Rebounds: 12,
                    Assists: 12,
                    Steals: 22,
                    Blocks: 5,
                    "Slam Dunks": 12,
                },
            },
        },
    };
}

const gameData = gameObject();

function homeTeamName(){
    return gameData['home']['teamName']
}
function numPointsScored(playerName){
    playerName = playerName.trim();
    const playerData = gameData.home.players[playerName] || gameData.away.players[playerName];
    if(playerData){
        return playerData.Points;
    }
    else{
        return `${playerName} is not found in the data.`;
    }
}
// numPointsScored("DeSagna Diop");
function shoeSize(playerName){
    playerName = playerName.trim();
    const playerData = gameData.home.players[playerName] || gameData.away.players[playerName];
    if(playerData){
        return playerData.Shoe;
    }
    else{
        return `${playerName} is not found in the data.`;
    }
}
// shoeSize("Ben Gordon");
function teamColors(teamName){
    if(teamName === gameData.home.teamName){
        return gameData.home.colors;
    }
    else if(teamName === gameData.away.teamName){
        return gameData.away.colors;
    }
    else{
        return `Team "${teamName}" is not available in the data.`;
    }
}
// teamColors("Charlotte Hornets");
function teamNames(){
    return{
        home: gameData.home.teamName,
        away: gameData.away.teamName,
    }
}
// teamNames();
function playerNumbers(teamName){
    const teamData = teamName === gameData.home.teamName ? gameData.home : gameData.away;
    const numbers = Object.values(teamData.players).map(player => player.Number);
    return numbers;
}
// playerNumbers();
function playerStats(playerName){
    const homePlayerData = gameData.home.players[playerName];
    const awayPlayerData = gameData.away.players[playerName];
    if (homePlayerData) {
        return homePlayerData;
    } else if (awayPlayerData) {
        return awayPlayerData;
    } else {
        return `Player "${playerName} is not found in the game data.`;
    }
}
function bigShoeRebounds(){
    let playerWithBiggestShoeSize = null;
    for(const teamKey in gameData){
        for(const playerName in gameData[teamKey].players){
            const player = gameData[teamKey].players[playerName];
            if(!playerWithBiggestShoeSize || player.Shoe > playerWithBiggestShoeSize.Shoe){
                playerWithBiggestShoeSize = player;
            }
        }
    }
    if(playerWithBiggestShoeSize){
        // return playerWithbiggestShoeSize.Rebounds;
        return {
            playerName: playerWithBiggestShoeSize,
            Rebounds: playerWithBiggestShoeSize.Rebounds,
        };
    }
    else{
        return "No player found in the game data."
    }
}