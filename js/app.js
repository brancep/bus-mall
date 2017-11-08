'use strict';

let clicked = 0;

///main instances.

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


//// This array is for the math random loop
const imgList = [wineglass , watercan , usb , unicorn , tauntaun , sweep , scissors , petsweep , pen , dragon , dogduck , cthulhu , chair , bubblegum , breakfast , boots, bathroom , banana , bag , shark];


//// The creation of the images to the DOM.

function addItem () {
    const mainImage = document.getElementById('img-wrapper');
    const picArray = [];
    //// The random images chosen loop
    for (let i = 0; i < 3; i++) {
        const randoImg = imgList[Math.floor(Math.random() * imgList.length)];
        if (picArray.includes(randoImg)) {
            i = i - 1; //// No repeats
        }
        else {
            const img = document.createElement('img');
            img.src = randoImg.src;
            img.name = randoImg.name;
            mainImage.appendChild(img);
        }
    }
}
addItem();



//// This is for clicking and registering the number.
const handler = document.getElementById('img-wrapper');
handler.addEventListener('click' , prodClick);

//// Function for registering the clicks for a Product.
function prodClick (e) {
    const clickScore = e.target;
    for (let i = 0; i < imgList.length; i ++) {
        const prodClass = clickScore.name;
        if (imgList[i].name === prodClass) {
            imgList[i].wasClicked();
        }
    }
    const refreshItems = clickScore.parentNode;
    while (refreshItems.hasChildNodes()) {
        refreshItems.removeChild(refreshItems.lastChild);
    }
    addItem();

    clicked++;
    if (clicked >= 10) {
        draw();
    }
}




//// Creates the chart at the end.
function draw () {
    const prodNames = [];
    const clickedData = [];

    for ( let i = 0; i < imgList.length; i++ ){
        prodNames.push(imgList[i].name);
        clickedData.push(imgList[i].clicked);
    }

    const chartCanvas = document.getElementById('chart');
    const context = chartCanvas.getContext('2d');
    Chart.defaults.global.defaultFontColor = '#ffffff';

    const chart = new Chart (
        context,
        {
            type: 'bar',
            data: {
                labels: prodNames,
                datasets: [
                    {
                        label: 'Number of Clicks',
                        data: clickedData,
                        backgroundColor: '#ffffff'
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Products Clicked.',
                }
            }
        }
    );
}