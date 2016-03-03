var preload = function(game){}

preload.prototype = {
	preload: function(){
        var image_dir = 'assets/images/';
        this.game.load.image('background', image_dir + 'background.jpg');
        this.game.load.image("play", image_dir + "button-play.png");
        this.game.load.image('track', image_dir + 'track.png');
        this.game.load.image('hero', image_dir + 'herocar01.png');
        // this.game.load.image('left_arrow', image_dir + 'left_arrow.png');
        // this.game.load.image('right_arrow', image_dir + 'right_arrow.png');

    // this.game.load.image('ground', 'images/platform.png');
    // this.game.load.spritesheet('ze', 'images/ze.png', 64, 47);
    // this.game.load.audio('zesound', 'sounds/zelias_pesadelo.wav');
    // this.game.load.tilemap("tile01", "tile01.json", null, Phaser.Tilemap.TILED_JSON);

	},
  	create: function(){
		this.game.state.start("menu");
	}
}
