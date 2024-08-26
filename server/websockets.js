const Logic = require('./Logic');
const{event_type} = require('../Utils/events');
function handleConnection(ws,wss){
    ws.on('msg', (message)=>{
        const data = JSON.parse(message);

        switch(data.type){
            case event_type.INIT:
                ws.send(JSON.stringify({
                    type:event_type.state_game,
                    state: Logic.startingGame(),
                }));
                break;

            case event_type.MOVE:
                const{valid,state}= Logic.Move(data.player, data.character, data.move);
                if(valid){
                    display(wss, JSON.stringify({type:event_type.state_game, state}));
                    if(Logic.gameOver()){
                        display(wss,JSON.stringify({type:event_type.game_Over, winner:data.player}));

                    } 
                } else{
                        ws.send(JSON.stringify({type:event_type.INVALID_MOVE}));
                    }
                    break;

                    default:
                        break;
                    

                }
    });
}

function display(wss, data){
    wss.client.forEach((client) =>{
        if(client.stateReady ===  WebSocket.OPEN){
            client.send(data);
        }
    });
}
module.exports = { handleConnection};