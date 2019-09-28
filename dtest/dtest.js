var pureimage = require('pureimage');
const fs = require('fs')
// var jpeg = require('jpeg-js');
// var img1 = PImage.make(100,50);
// console.log(img1)
// PImage.encodePNGToStream(img1, fs.createWriteStream('out.png')).then(() => {
//     console.log("wrote out the png file to out.png");
// }).catch((e)=>{
//     console.log("there was an error writing");
// });

// var fnt = PImage.registerFont('tests/fonts/SourceSansPro-Regular.ttf','Source Sans Pro');
// fnt.load(() => {
//     var img = PImage.make(200,200, {});
//     var ctx = img.getContext('2d');
//     ctx.drawImage(img, )
//     ctx.fillStyle = 'rgba(255,0,0, 0.5)';
//     ctx.font = "48pt 'Source Sans Pro'";
//     ctx.fillText("ABC", 80, 80);
//     PImage.encodePNGToStream(img, fs.createWriteStream('out.png')).then(() => {
//         console.log("wrote out the png file to out.png");
//     }).catch((e)=>{
//         console.log("there was an error writing");
//     });
//
// });


let image = pureimage.make(200,200)
let context = image.getContext('2d')
context.fillStyle = '#ffffff'
context.fillRect(0,0,200,200)

let src = pureimage.make(50,50)
const c = src.getContext('2d')
c.fillStyle = 'white'
c.fillRect(0,0,50,50)
c.fillStyle = 'black'
c.fillRect(25,0,25,50)

context.drawImage(src,0,0,50,50,0,0,50,50)
pureimage.encodePNGToStream(image, fs.createWriteStream('out.png')).then(() => {
    console.log("wrote out the png file to out.png");
}).catch((e)=>{
    console.log("there was an error writing");
});
