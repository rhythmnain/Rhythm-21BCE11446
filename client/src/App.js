import React, {useState, useEffect} from react;
import Board from './Board';
import MoveControls from './MoveControls';
import {setupWebSocket} from './websocket';

function App(){
    const[stateGame, setStateGame] = useState(null);
    const [selectedChar, setSelectedChar] = useState(null);

    useEffect(() =>{
        const ws = setupWebSocket(setStateGame);
        return () => ws.close();
    }, []);

    return (
        <div>
            <Board stateGame = {stateGame} onSelectedChar= {setSelectedChar}/>
            {selectedChar && (
                <MoveControls
                character = {selectedChar}
                stateGame = {stateGame}/>
            )}
            <div className = "turn-indicator">
                {stateGame && 'Current  turn: Player ${stateGAme.currentPlayer}'}
            </div>
        </div>
    );
}
export default App;