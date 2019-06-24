function loadChest(Q){
	
	Q.animation('chest animation',{

		'live': { frames: [0 , 1, 2, 3],  rate: 1 / 4 },

		'die': { frames: [4], loop: false}
	});

	   
	Q.Sprite.extend('Chest', {
	  init: function(p) {
	    this._super(p, {

	      sprite: 'chest animation',
	               
	      sheet: 'chest',

	      first: true,

	      gravity: 0
	                
	  	});

	    this.add('2d, animation');

	    this.on("bump.bottom", function(collision){

	    	if(collision.obj.isA("Mario") && this.p.first){
	    		
	    		this.p.sheet= 'chestDie';
	    		press=true;
	    		this.p.first= false;    	

	    	}
	    	
	    });
	  
	    },

	    step: function(dt){

	    	//this.play('live');


	    },

	    
	});

}