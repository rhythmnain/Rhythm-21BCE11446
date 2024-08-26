const charc_type ={
    PAWN: 'Pawn',
    CHAR1: 'char1',
    CHAR2: 'char2',
};
const start_state ={
    board: [
// 5x5 gird representing the borad of the game, empty initially
    ],
    players: {
        A: [],
        B: [],
    },
    currentPlayer: 'A',
};
module.exports = {
    charc_type,
    start_state,
};