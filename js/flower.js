function loadFlower(Q){
	
	Q.Sprite.extend('Flower', {
	  init: function(p) {
	    this._super(p, {
	      sprite: 'flower',
	               
	      sheet: 'flower',

	    
	                
	      sensor: true,

	      gravity: 1,

	      hidden: false,

	      get: false

	    });

	    this.add('2d,animation, tween');

	    this.on("bump.top, bump.bottom, bump.left, bump.right",function(collision) {
	      if(collision.obj.isA("Mario")) { 
	        power= true;
	        this.destroy();
	        collision.obj.destroy();
	        Q.audio.play('power_up.mp3');


	      }
	    });

	    this.on('sensor');
	  
	    },

	    sensor: function() {

	    this.p.y -55;	
	    	

	       var get = function() {
	         this.p.gravity= 0.2;
	       }

	      this.animate({ x: this.p.x + 55, y: this.p.y +55 }, 1.5, { callback: get });
	    
	    },

	    
	});
}