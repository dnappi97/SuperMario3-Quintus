function loadMario(Q){
	
	Q.animations('Smario animation', {
        'run_right': { frames: [3, 4], rate: 1 / 7, flip: false },
        'run_left': { frames: [3, 4], rate: 1 / 7, flip: "x" },
        'stand_right': { frames: [2], loop: false, flip: false },
        'stand_left': { frames: [2], loop: false, flip: "x" },
        'jumping_right': { frames: [ 6], loop: false, flip: false },
        'jumping_left': { frames: [6],  loop: false, flip: "x" },
        'die': { frames: [0], loop: false }
  });


	Q.Sprite.extend('Mario', {
       
       //INIT
        init: function(p) {
            this._super(p, {

                sprite: 'Smario animation',
                
                sheet: 'superMario',
                
                x: 350,
                y: 1575,
                direction: 'right',
                
                jumpSpeed: -400,
                speed: 150,
                vy: 10,

                look: false,
                dead: false,
                move: true
            });
            

            this.add('2d, platformerControls, animation, tween');
            
            this.on('die');

        },

        //DEAD  
        die: function() {
            Q.audio.stop('music_main.mp3');
            if (!this.p.die) {
                Q.audio.play('music_die.mp3');
            }
        
            this.p.dead = true;
            this.p.speed = 0;
            this.p.jumpSpeed = 0;

            var gameOver = function() {
                this.destroy();
                Q.stageScene('endGame', 1, { label: 'Game Over' });
            }
            var marioDead = function() {
                this.animate({ x: this.p.x, y: fondo_escenario, angle: 0 }, 0.5, { callback: gameOver });
            }

            this.animate({ y: this.p.y - 100, angle: 0 }, 0.3, { callback: marioDead });
        },

        //STEP
        step: function(dt){

         if (this.p.die) {
                this.play('die');
                this.p.speed = 0;
                this.p.jumpSpeed = 0;
            } else {
        
                if (this.p.move) {
                    if (this.p.vy != 0) {
                        this.play('jumping_' + this.p.direction)
                    } else if (this.p.vx != 0) {
                        this.play('run_' + this.p.direction );
                    } else {
                        this.play('stand_' + this.p.direction);
                    }
                    
                    if (this.p.y > fondo_escenario) {
                        this.trigger('die');
                    }
                }
                
                else {
                    this.play('stand_right');
                    this.p.speed = 0;
                    this.p.jumpSpeed = 0;
                }
            }
        },

       getX: function(){

        return this.p.x;

       },

       getY: function(){
        
        return this.p.y;

       },

       getDirection: function(){
        return this.p.direction;
       }



	});
}