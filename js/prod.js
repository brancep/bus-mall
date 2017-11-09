'use strict';

//// Main constructor function to build out products.
function Prod (name, src, clicked) {
    this.name = name;
    this.src = src;
    this.clicked = clicked;
};

//// For tracking of clicks on an image.
Prod.prototype.wasClicked = function () {
    this.clicked += 1;
};