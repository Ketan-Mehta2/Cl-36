class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = datatbase.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameSate:state
        })
    }
    start(){
        if (gameState === 0){
            form = new Form()
            form.display();
            
        }
    }
}