const{start_state, charc_type} = require('./constants');
const utils = require('./utils');
let stateGame = { ...start_state};
//for starting and initializing the game
function startingGame(){
    stateGame = {...start_state};
    return stateGame;
}
//for moving
function Move(player, character, move){
    const{valid, newState} = utils.nextMove(stateGame, player, character, move);
    if(valid){
        stateGame = newState;
        return{valid:true, state:stateGame};
    } else{
        return{valid:false, state:stateGame};
    }
}
//to check for game over
function gameOver(){
    return utils.isGameOver(stateGame);
}

module.exports ={
    startingGame,
    Move,
    gameOver,
};