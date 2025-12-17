const canvas = document.getElementById("canva_1");

// 🎨 What “context” means
// A canvas is just a blank rectangle.
// The context gives you all the functions needed to draw: shapes,lines,text,images,colors,gradients,transformations
// Get the 2D drawing context, which provides all canvas 2D rendering methods
const ctx = canvas.getContext("2d");

// Set the actual drawing resolution of the canvas (default is 300×150)
const CANVAS_WIDTH = canvas.width=600;
const CANVAS_HEIGHT = canvas.height=600;

// The width and height of the sprite image  divided by the row and column count
const spriteWidth=575;
const spriteHeight=523;

// Image() is a built-in constructor in JavaScript.
// It creates a new HTMLImageElement (same as doing <img> in HTML).
// This object behaves exactly like an <img> tag created dynamically with:
const playerImage = new Image();
playerImage.src='/assets/images/player.png';



let gameFrame=0;
let frameX=0;
let frameY=0;

const staggerFrames=5;
const spritAnimation=[];
const animationStates=[{name:'idle',frame:7},{name:'jump',frame:7}];

animationStates.forEach((state,index)=>{
    
    let frames={
        loc:[],
    }
    for(let j=0;j<state.frame; j++){
        
        let positionX = j * spriteWidth;
        let positionY = index *  spriteHeight;
        frames.loc.push({x:positionX,y:positionY});
    }
    spritAnimation[state.name]=frames;
});

console.log(spritAnimation);

function animate(){
    // Clear the entire canvas before each redraw
    // 0,0 is the coordinates of the top-left corner
    ctx.clearRect(0,0,canvas.width,canvas.height);
   
    let position = Math.floor(gameFrame/staggerFrames)  % 6; // Assuming there are 6 frames in the sprite sheet
    frameX = position * spriteWidth;
   
    // ctx.fillRect(100,50,100,100); // Draw a filled rectangle at (50,50) with width 100 and height 100
    // ctx.drawImage(Image,sx,sy,sw,sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage,frameX,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    gameFrame++;
    requestAnimationFrame(animate); // Call animate again on the next frame
}
animate();