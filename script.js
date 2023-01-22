var redButton = document.querySelector('.red');
var blueButton = document.querySelector('.blue');
var blackButton = document.querySelector('.black');
var image = document.querySelector('img');

redButton.onclick = function() {
    image.src = './red.png';
}

blueButton.onclick = function() {
    image.src = './blue.png';
}

blackButton.onclick = function() {
    image.src = './black.png';
}
