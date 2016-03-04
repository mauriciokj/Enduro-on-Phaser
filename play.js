var play = function(game){},
carSpeed = 150,
trackSpeed = 150,
track01,
track02,
track03,
trackHeight,
trackWidth,
heroHeight,
heroWidth,
movingSpeed = 300,
cursors;

play.prototype = {
  create: function(){
    trackHeight = game.height;
    trackWidth = game.width;
    heroHeight = 108;
    heroWidth = 68;

    track01 = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'track');
    track01.height = trackHeight;
    track01.width = trackWidth;
    track01.anchor.setTo(0.5, 0.5);

    track02 = game.add.sprite(game.camera.width / 2, 0, 'track');
    track02.height = trackHeight;
    track02.width = trackWidth;
    track02.anchor.setTo(0.5, 0.5);

    track03 = game.add.sprite(game.camera.width / 2, -600, 'track');
    track03.height = trackHeight;
    track03.width = trackWidth;
    track03.anchor.setTo(0.5, 0.5);

    hero = game.add.sprite(game.camera.width / 2, game.camera.height - heroHeight - 20, 'hero');
    hero.height = heroHeight;
    hero.width = heroWidth;
    hero.anchor.setTo(0.5, 0.5);

    // left_arrow = game.add.sprite(60, game.camera.height - 65, 'left_arrow');
    // left_arrow.anchor.setTo(0.5, 0.5);

    // right_arrow = game.add.sprite(game.camera.width - 60, game.camera.height - 65 , 'right_arrow');
    // right_arrow.anchor.setTo(0.5, 0.5);

    game.physics.enable(track01, Phaser.Physics.ARCADE);
    game.physics.enable(track02, Phaser.Physics.ARCADE);
    game.physics.enable(track03, Phaser.Physics.ARCADE);
    game.physics.enable(hero, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();


  },
  update: function(){
    var movingTo;
    carSpeed = carSpeed + 1 ;

    trackSpeed = this.speed(10);
    track01.body.velocity.y = trackSpeed;
    track02.body.velocity.y = trackSpeed;
    track03.body.velocity.y = trackSpeed;

    this.moveTrack(track01);
    this.moveTrack(track02);
    this.moveTrack(track03);

    if (cursors.left.isDown)
      { if (hero.x >= heroHeight) {
        hero.body.velocity.x = -movingSpeed;
      } else {
        hero.body.velocity.x = 0 ;
      }
    }
    else if (cursors.right.isDown)
      { if (hero.x <= game.width - heroHeight ){
        hero.body.velocity.x = movingSpeed;
      } else {
        hero.body.velocity.x = 0 ;
      }
    }
    else {
      hero.body.velocity.x = 0;
    }

  },

  moveTrack: function(track){
    if (track.y >  game.height + track.body.height / 2 ){
      track.y = - track.body.height / 2;
    }

  },

  speed: function(value){
    return value + carSpeed;
  }

}
