'use strict';

let clicked = 0;
let imgList = [];

if (localStorage.imgList) {
    const newImgList = JSON.parse(localStorage.imgList);

    for (let i = 0; i < newImgList.length; i++) {
        const newProd = new Prod(newImgList[i].name, newImgList[i].src, newImgList[i].clicked);
        imgList.push(newProd);
    }
} else {

    const bag = new Prod ('bag' , 'images/bag.jpg' );
    const banana = new Prod ('banana' , 'images/banana.jpg' );
    const bathroom = new Prod ('bathroom' , 'images/bathroom.jpg' );
    const boots = new Prod ('boots' , 'images/boots.jpg' );
    const breakfast = new Prod ('breakfast' , 'images/breakfast.jpg' );
    const bubblegum = new Prod ('bubblegum' , 'images/bubblegum.jpg' );
    const chair = new Prod ('chair' , 'images/chair.jpg' );
    const cthulhu = new Prod ('cthulhu' , 'images/cthulhu.jpg' );
    const dogduck = new Prod ('dogduck' , 'images/dog-duck.jpg' );
    const dragon = new Prod ('dragon' , 'images/dragon.jpg' );
    const pen = new Prod ('pen' , 'images/pen.jpg' );
    const petsweep = new Prod ('petsweep' , 'images/pet-sweep.jpg' );
    const scissors = new Prod ('scissors' , 'images/scissors.jpg' );
    const shark = new Prod ('shark' , 'images/shark.jpg' );
    const sweep = new Prod ('sweep' , 'images/sweep.png' );
    const tauntaun = new Prod ('tauntaun' , 'images/tauntaun.jpg' );
    const unicorn = new Prod ('unicorn' , 'images/unicorn.jpg' );
    const usb = new Prod ('usb' , 'images/usb.gif' );
    const watercan = new Prod ('watercan' , 'images/water-can.jpg' );
    const wineglass = new Prod ('wineglass' , 'images/wine-glass.jpg' );

    //// This array is for the math random loop
    imgList = [wineglass , watercan , usb , unicorn , tauntaun , sweep , scissors , petsweep , pen , dragon , dogduck , cthulhu , chair , bubblegum , breakfast , boots, bathroom , banana , bag , shark];
}
///main instances.





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


//// Function for registering the clicks for a Product.
const handler = document.getElementById('img-wrapper');
handler.addEventListener('click' , prodClick);

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

    clicked++; //// totalling clicks
    if (clicked >= 10) {
        endSelection();
    }
}


//// LOCAL STORAGE
function endSelection(){
    handler.remove();
    draw();
    localStorage.setItem('imgList' , JSON.stringify(imgList));
};



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