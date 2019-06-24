function loadPrincess(Q) {

   
    Q.Sprite.extend('Princess', {
        init: function(p) {
            this._super(p, {
               
                asset: 'princess.png',
                
                y: 1160,
                x: 356,
                


                sensor: true
            });
            

            this.on('sensor');
        },
        

        sensor: function() {
            this.p.sensor = false;
            this.destroy();
            Q('MarioPower').trigger('win');
        }
    });
}