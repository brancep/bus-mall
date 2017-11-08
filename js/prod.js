'use strict';

//// Main constructor function to build out products.
function Prod (name, src) {
    this.name = name;
    this.src = 'images/' + src;
    this.clicked = 0;
};

//// For tracking of clicks on an image.
Prod.prototype.wasClicked = function () {
    this.clicked += 1;
};