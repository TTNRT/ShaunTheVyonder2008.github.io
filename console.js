// ----------------------
// | Console log        |
// | Made in javascript!|
// ----------------------
console.log('----------------');
console.log('| ttnrtsite.me |');
console.log('| (C) TTNT CRP |');
console.log('| 2018 - 2023  |');
console.log('----------------');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');
console.log('....................................');

// Extra Code
function drawShape() {
            
    // get the canvas element using the DOM
    var canvas = document.getElementById('myCanvas');
    
    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext) {
    
       // use getContext to use the canvas for drawing
       var ctx = canvas.getContext('2d');
       
       // Draw shapes
       var img = new Image();
       img.src = '/images/logo.png';
       
       img.onload = function() {
          ctx.drawImage(img,0,0);
          ctx.beginPath();
          
          ctx.moveTo(30,96);
          ctx.lineTo(70,66);
          
          ctx.lineTo(103,76);
          ctx.lineTo(170,15);
          
          ctx.stroke();
       }
    } else {
       alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
 }