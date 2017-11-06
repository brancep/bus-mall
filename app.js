'use strict.',

function Image (name, src) {
    this.name = name,
    this.src = 'images/' + src;
};

Image.prototype.create = function () {
    const mainImage = document.getElementById('img-wrapper');
    const img = document.createElement('img');
    img.src = this.src;
    mainImage.appendChild(img);
};

const bag = new Image ('bag' , 'bag.jpg' );
const banana = new Image ('banana' , 'banana.jpg' );
const bathroom = new Image ('bathroom' , 'bathroom.jpg' );
const boots = new Image ('boots' , 'boots.jpg' );
const breakfast = new Image ('breakfast' , 'breakfast.jpg' );
const bubblegum = new Image ('bubblegum' , 'bubblegum.jpg' );
const chair = new Image ('chair' , 'chair.jpg' );
const cthulhu = new Image ('cthulhu' , 'cthulhu.jpg' );
const dogduck = new Image ('dogduck' , 'dog-duck.jpg' );
const dragon = new Image ('dragon' , 'dragon.jpg' );
const pen = new Image ('pen' , 'pen.jpg' );
const petsweep = new Image ('petsweep' , 'pet-sweep.jpg' );
const scissors = new Image ('scissors' , 'scissors.jpg' );
const shark = new Image ('shark' , 'shark.jpg' );
const sweep = new Image ('sweep' , 'sweep.jpg' );
const tauntaun = new Image ('tauntaun' , 'tauntaun.jpg' );
const unicorn = new Image ('unicorn' , 'unicorn.jpg' );
const usb = new Image ('usb' , 'usb.jpg' );
const watercan = new Image ('watercan' , 'water-can.jpg' );
const wineglass = new Image ('wineglass' , 'wine-glass.jpg' );

bag.create();