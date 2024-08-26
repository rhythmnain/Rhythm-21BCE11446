import { event_type } from "../../Utils/events";
export function setupWebSocket(setStateGame){
    const ws = new WebSocket('ws://localjost:6006');
    ws.onmessage =(event)=>{
        const data =JSON.parse(event.data);
        switch(data.type) {
            case event_type.state_game:
                setStateGame(data.state);
                break;
            case event_type.INVALID_MOVE:
                alert('Invalid Move!');
                break;
            case event_type.game_over:
                alert('Game Over!!');
                break;
            default:
                break;    
        }
    };
    ws.onopen= () => {
        ws.send(JSON.stringify({type: event_type.INIT}));
    };
    return ws;
}
export function sendMove(character, move){
    const ws = new WebSocket('ws://localhost:6006');
    ws.send(JSON.stringify({type:event_type.MOVE, character, move}));
}