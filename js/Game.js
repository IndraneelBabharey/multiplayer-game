  class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
        gameState = data.val();
      })
    
    }

    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }

    play(){
      form.hide()
      textSize(30)
      text("Game Start !!",120,100)
      Player.getPlayerInfo()

      if(allPlayers!==undefined){
        var yp = 130
        yp = yp+20

        
        for(var i in allPlayers){

        
        if(i ==="player"+player.index){
          fill("red")

        }else{

          fill("black")
          
        }
        textSize(15)
        text(allPlayers[i].name+ ":"+ allPlayers[i].distance,120,yp)
      }
      }
    

    if(keyIsDown(UP_ARROW)&& player.index !== null){
    player.distance = player.distance+50
    player.update()
    }
  }
  }
