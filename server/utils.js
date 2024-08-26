const{charc_type}= require('./constants');

function nextMove(stateGame, player, character, move){
    let valid = false;
    // move validation logic implementation based on type of character and rules of the game
    // updating the state of game(stateGame) if the mov is valid

    //example
    if(character.startWith(player) && validMove(character, move, stateGame)){
        valid = true;
        stateGame = doMove(stateGame, character, move);
    }
    return{valid, newState:stateGame};
}
 function validMove(character, move, stateGame){
    return true;
    //implementing the actual validtation of move logic
 }

 function doMove(stateGame, character, move){
    return stateGame;
    //implementing hoe the state of game be updated based on the move
 }
function isGameOver(stateGame){
    return false; 
    //check if all of the characters of a single player are eliminated
}
module.exports ={
    nextMove,
    isGameOver,
};