// State: DogeDodge.Play
'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting DogeDodge ~~~\n Compliments of SkilStak",
                "color:#fdf6e3; background:#073642");
  },

  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('dodger','assets/dodger.png',46,64,2); // (w,h,f)
    this.load.spritesheet('dodge','assets/doge.png',64,64,1); // (w,h,f)
  },

  create: function () {

    // background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    // dodger
    this.dodger = this.add.sprite(160,510,'dodger');
    //this.dodger.smoothed = false; 
    //this.dodger.scale.set(1);
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('blink');
    this.dodger.animations.play('blink',2,true); // (name,fps,loop)

    // dodge
    this.dodge = this.add.sprite(160,-32,'dodge');
    //this.dodge.smoothed = false; 
    //this.dodge.scale.set(1);
    this.dodge.anchor.set(0.5,0.5);
    //this.dodge.animations.add('blink');
    //this.dodge.animations.play('blink',2,true); // (name,fps,loop)

    // movement keys
    this.cursors = game.input.keyboard.createCursorKeys();
  },

  update: function() {
    if (this.cursors.left.isDown) {
      this.dodger.x -= 20;
    }
    if (this.cursors.right.isDown) {
      this.dodger.x += 20;
    }
    this.dodge.y += 20;
    if (this.dodge.y >= 568) {
      this.dodge.y = -32;
      this.dodge.x = game.rnd.integerInRange(0,320);
    }
  }

};

