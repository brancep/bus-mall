'use strict.';

// for (let i = 0; i < 4; i++) {
//     Prod();
// }
let clicked = 0;

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
const sweep = new Prod ('sweep' , 'sweep.png' );
const tauntaun = new Prod ('tauntaun' , 'tauntaun.jpg' );
const unicorn = new Prod ('unicorn' , 'unicorn.jpg' );
const usb = new Prod ('usb' , 'usb.gif' );
const watercan = new Prod ('watercan' , 'water-can.jpg' );
const wineglass = new Prod ('wineglass' , 'wine-glass.jpg' );

//// Main function to create the object for the Product.
function Prod (name, src) {
    this.name = name,
    this.src = 'images/' + src;
    this.clicked = 0;
};

//// This array is for the math random loop
const imgList = [wineglass , watercan , usb , unicorn , tauntaun , sweep , scissors , petsweep , pen , dragon , dogduck , cthulhu , chair , bubblegum , breakfast , boots, bathroom , banana , bag , shark];

//// The random images chosen loop
for (let i = 0; i < 3; i++) {
    const randoImg = imgList[Math.floor(Math.random() * imgList.length)];
    const mainImage = document.getElementById('img-wrapper');
    const img = document.createElement('img');
    img.src = randoImg.src;
    mainImage.appendChild(img);
}



// const clickedImg = document.getElementById('img-wrapper');
// const imgClass = document.createAttribute('class');
// imgClass.value = 'test';
// // clickedImg.addEventListener('click' , clickScore );




// function clickScore (e) {
//     const clickedImg = e.target; 
//     for (let i = 0; i < imgList.length; i ++) {
//         const clickedClass = Prod.name;
//         if (imgList[i].name === clickedClass) {
//             imgList[i].clicked;
//         }
//     }
// }

// Prod.prototype.clicked = function () {
//     this.clicked += 1;
// };