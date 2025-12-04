const canvas = document.getElementById("canva_1");

// 🎨 What “context” means
// A canvas is just a blank rectangle.
// The context gives you all the functions needed to draw: shapes,lines,text,images,colors,gradients,transformations
// Get the 2D drawing context, which provides all canvas 2D rendering methods
const ctx = canvas.getContext("2d");

// Set the actual drawing resolution of the canvas (default is 300×150)
const CANVAS_WIDTH = canvas.width=600;
const CANVAS_HEIGHT = canvas.height=600;

// Image() is a built-in constructor in JavaScript.
// It creates a new HTMLImageElement (same as doing <img> in HTML).
// This object behaves exactly like an <img> tag created dynamically with:
const playerImage = new Image();
playerImage.src='/assets/img/player.png';

function animate(){
    // Clear the entire canvas before each redraw
    // 0,0 is the coordinates of the top-left corner
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(50,50,100,100); // Draw a filled rectangle at (50,50) with width 100 and height 100
    requestAnimationFrame(animate); // Call animate again on the next frame
}
animate();