function loadMainTitle(Q) {
    /**
     * Escena que representa a la pantalla principal.
     */
    Q.scene('mainTitle', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 2,
            y: 5,
            fill: 'rgba(0,0,0,0.0)'
        }));

        var button = container.insert(new Q.UI.Button({
            asset: 'titleScreen.png',
            x: 0,
            y: (Q.height / 2) - 5
        }));

        button.on('click', function() {
            Q.clearStages();
            Q.state.set('play', true);
            Q.stageScene('level');
        });

        Q.input.on('confirm', function() {
            if (!Q.state.get('play')) {
                Q.clearStages();
                Q.state.set('play', true);
                Q.stageScene('level');
            }
        });

        var label = container.insert(new Q.UI.Text({
            x: 0,
            y: 10,
            label: 'Press Enter or click to start',
            size: 18,
            color: '#ffffff'
        }));

        Q.state.set('play', false);
        Q.state.reset({ coins: 0 });
        Q.audio.stop('music_level_complete.mp3');
        Q.audio.stop('music_die.mp3');
        Q.audio.stop('music_main.mp3');
        Q.audio.play('music_main.mp3', { loop: true });
        

        container.fit(20);
    });
}