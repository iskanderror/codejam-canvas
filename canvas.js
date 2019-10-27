const colorMatrix = [
  ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"],
  ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
  ["#FFEB3B", "#FFC107","#FFC107","#FFEB3B"],
  ["#00BCD4", "#FFEB3B","#FFEB3B","#00BCD4"]
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let imageWidth = colorMatrix[0].length;
let imageHeigh = colorMatrix.length;
let scaleX = Math.floor(canvas.clientWidth/imageWidth);
let scaleY = Math.floor(canvas.clientHeight/imageHeigh);

for (let row=0; row<imageWidth; row++){
  for (let col=0; col<imageHeigh; col++){
    ctx.fillStyle = colorMatrix[row][col];
    ctx.fillRect(col*scaleX, row*scaleY, scaleX, scaleY);
  }
}

