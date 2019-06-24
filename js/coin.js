function loadCoin(Q) {
    
    Q.animations('coin animation', {
        'live': { frames: [0, 1, 2, 4], rate: 1 / 7  },
        'take': { frames: [0], loop: false }
    });
   

    Q.Sprite.extend('Coin', {
        init: function(p) {
            this._super(p, {
                sprite: 'coin animation',
            

                sheet: 'coin',
                
                sensor: true,

                get: false
            });

            this.add('animation, tween');

            this.on('sensor');
        },

        sensor: function() {
            var get = function() {
                this.destroy()
            }

            this.animate({ y: this.p.y - 50 }, 0.2, { callback: get });
            if (!this.p.get) {
                this.play('take');
                
                this.p.get = true;
                Q.state.inc('coins', 1);
                Q.audio.play('coin.mp3');

            }
        },

        step: function(dt) {
            this.play('live');
        }
    });
}