var fondo_escenario = 1582;
var press= false;
var power= false;
var MarioX= 150;
var MarioY= 150;


window.addEventListener("load",function() {


	var Q = window.Q = Quintus({ audioSupported: ['mp3', 'ogg'], development: true })
	        .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio")

	        .setup({scaleToFit: true})

	        .controls()
	        .touch()
	        .enableSound();


	loadLevel(Q);

	loadMario(Q);
	
	loadChest(Q);

	loadPrincess(Q);

	loadFlower(Q);

	loadMarioPower(Q);

	loadCoin(Q);

	loadEndGame(Q);
    
    loadMainTitle(Q);
    
    loadHUB(Q);

	
	



	Q.loadTMX(' levelMario.tmx, mario_small.png, mario_small.json, cose.png, chest.json, flower.json, coin.json, coin.png, super_mario.json, marioPower.png, SuperMario.png, titleScreen.png, princess.png, music_main.mp3, music_main.ogg, music_die.mp3, music_die.ogg, music_level_complete.mp3, music_level_complete.ogg, coin.mp3, coin.ogg, power_up.mp3, power_up.ogg, effects_jump.mp3, effects_jump.ogg', function(){

	    Q.compileSheets("SuperMario.png","mario_small.json");
		Q.compileSheets("cose.png","chest.json");
		Q.compileSheets("cose.png","flower.json");
		Q.compileSheets("coin.png","coin.json");
		Q.compileSheets("marioPower.png","super_mario.json");

		Q.stageScene('mainTitle');

	});

});