function loadLevel(Q){
	
	Q.scene('level', function(stage){

		Q.stageTMX('levelMario.tmx', stage);

		Q.state.reset({ coins: 0 });

		var mario= stage.insert(new Q.Mario({x: 300, y: 1540}));
		var chest= stage.insert(new Q.Chest({ x: 355, y: 1500 }));
		var princess = stage.insert(new Q.Princess());


		//COINS
		
			//COINS LEVEL 1
		stage.insert(new Q.Coin({ x: 240, y: 1375}));
		stage.insert(new Q.Coin({ x: 290, y: 1375}));
		stage.insert(new Q.Coin({ x: 340, y: 1375}));
		stage.insert(new Q.Coin({ x: 390, y: 1375}));
		stage.insert(new Q.Coin({ x: 440, y: 1375}));
		stage.insert(new Q.Coin({ x: 490, y: 1375}));
		stage.insert(new Q.Coin({ x: 540, y: 1375}));

			//COINS LEVEL 2
		stage.insert(new Q.Coin({ x: 240, y: 1300}));
		stage.insert(new Q.Coin({ x: 290, y: 1300}));
		stage.insert(new Q.Coin({ x: 340, y: 1300}));
		stage.insert(new Q.Coin({ x: 390, y: 1300}));
		stage.insert(new Q.Coin({ x: 440, y: 1300}));
		stage.insert(new Q.Coin({ x: 490, y: 1300}));
		stage.insert(new Q.Coin({ x: 540, y: 1300}));

			//COINS LEVEL 3
		stage.insert(new Q.Coin({ x: 240, y: 1225}));
		stage.insert(new Q.Coin({ x: 290, y: 1225}));
		stage.insert(new Q.Coin({ x: 340, y: 1225}));
		stage.insert(new Q.Coin({ x: 390, y: 1225}));
		stage.insert(new Q.Coin({ x: 440, y: 1225}));
		stage.insert(new Q.Coin({ x: 490, y: 1225}));
		stage.insert(new Q.Coin({ x: 540, y: 1225}));





		

		
		
		stage.add("viewport").follow(mario, {
	        x: true,
	        y: true
	      }, {
	        minY: 0,
	        maxY: 1600
	    });

	
		//SHEET VIEW
		setInterval( function(){

		if(press){

			var flower= stage.insert(new Q.Flower({ x: 355, y: 1480}));
			press=false;
		}



		 }, 350);


		//MARIO POWER
		setInterval( function(){

		if(power){

			var x=mario.getX();
			var y=mario.getY();
			mario= stage.insert(new Q.MarioPower({x: x, y: y}));
			power=false;


			stage.add("viewport").follow(mario, {
	        x: true,
	        y: true
	      }, {
	        minY: 0,
	        maxY: 1600
	    });

			
		}



		 }, 100);


		//COINS
		Q.stageScene('HUB', 1);

	});

}
