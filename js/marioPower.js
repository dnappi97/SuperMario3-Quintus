function loadMarioPower(Q){

	Q.animations('marioPower animation', {
        'run_right': { frames: [4, 5], rate: 1 / 7, flip: false },
        'run_left': { frames: [4, 5], rate: 1 / 7, flip: "x" },
        'stand_right': { frames: [3], loop: false, flip: false },
        'stand_left': { frames: [3], rate: 1 / 7, loop: false, flip: "x" },
        'jumping_right': { frames: [17, 18, 19], rate: 1 / 5, loop: false, flip: false, trigger: 'stopped' },
        'jumping_left': { frames: [17, 18, 19], rate: 1 / 5, flip: "x", trigger: 'stopped' },
        'stop_right': { frames: [6], loop: false, flip: false },
        'stop_left': { frames: [6], loop: false, flip: "x" },
        'die': { frames: [0], loop: false }
  });
	
	Q.Sprite.extend('MarioPower', {


		//INIT
        init: function(p) {
            this._super(p, {

                sprite: 'marioPower animation',
                
                sheet: 'marioPower',
                
                x: 200,
                y: 150,
                
                jumpSpeed: -200,
                speed: 150,
                

                look: false,
                dead: false,
                move: true
            });
            

            this.add('2d, platformerControls, animation, tween');
            
            this.on('die');
            this.on('win');

            this.on("stopped",this,"stop");

        },

        //DEAD  
        die: function() {
        
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

        //WIN
        win: function() {
            this.destroy();
            Q.audio.stop('music_main.mp3');
            Q.audio.play('music_level_complete.mp3');
            Q.stageScene('endGame', 1, { label: 'You Win' });
        },

        //STOP
        stop: function(){

            this.play('stop_' + this.p.direction)

        },

        fly: function(){
            //MARIO FLY
            if(Q.inputs['up']){
                this.p.gravity=0;
                this.p.vy-=15;
            }
        },

        //STEP
        step: function(dt){

        this.p.gravity= 0.8;       

        
        //MARIO ACTIONS
         if (this.p.die) {
                this.play('die');
                this.p.speed = 0;
                this.p.jumpSpeed = 0;
            } else {
        
                if (this.p.move) {
                    if (this.p.vy != 0) {
                        this.play('jumping_' + this.p.direction);
                        this.fly();

                    } else if (this.p.vx != 0) {
                        this.play('run_' + this.p.direction );
                        
                    } else {
                        this.play('stand_' + this.p.direction);
                    }
                    
                    if (this.p.y > fondo_escenario) {
                    	this.debind();
                        this.trigger('die');
                    }
                }
                
                else {
                    this.play('stand_right');
                    this.p.speed = 0;
                    this.p.jumpSpeed = 0;
                }
            }
            
       }

	});

}