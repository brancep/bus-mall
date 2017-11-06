'use strict.';

const bag = new Prod ('bag' , 'bag.jpg' );
const banana = new Prod ('banana' , 'banana.jpg' );
const bathroom = new Prod ('bathroom' , 'bathroom.jpg' );
const boots = new Prod ('boots' , 'boots.jpg' );
const breakfast = new Prod ('breakfast' , 'breakfast.jpg' );
const bubblegum = new Prod ('bubblegum' , 'bubblegum.jpg' );
const chair = new Prod ('chair' , 'chair.jpg' );
const cthulhu = new Prod ('cthulhu' , 'cthulhu.jpg' );
const dogduck = new Prod ('dogduck' , 'dog-duck.jpg' );
const dragon = new Prod ('dragon' , 'dragon.jpg' );
const pen = new Prod ('pen' , 'pen.jpg' );
const petsweep = new Prod ('petsweep' , 'pet-sweep.jpg' );
const scissors = new Prod ('scissors' , 'scissors.jpg' );
const shark = new Prod ('shark' , 'shark.jpg' );
const sweep = new Prod ('sweep' , 'sweep.jpg' );
const tauntaun = new Prod ('tauntaun' , 'tauntaun.jpg' );
const unicorn = new Prod ('unicorn' , 'unicorn.jpg' );
const usb = new Prod ('usb' , 'usb.jpg' );
const watercan = new Prod ('watercan' , 'water-can.jpg' );
const wineglass = new Prod ('wineglass' , 'wine-glass.jpg' );


function Prod (name, src) {
    this.name = name,
    this.src = 'images/' + src;
    // this.clicked = 0;
};

Prod.prototype.create = function () {
    const mainImage = document.getElementById('img-wrapper');
    const img = document.createElement('img');
    img.src = this.src;
    mainImage.appendChild(img);
};

bag.create();