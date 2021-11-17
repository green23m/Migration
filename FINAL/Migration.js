window.addEventListener("load", main);

function main(){
    let c = document.getElementById("canvas"); 
    let pen = c.getContext("2d");
    let img = document.getElementById("map");
    pen.drawImage(img, 0, 0, 600, 600);
    
    let goose = document.getElementById("Goose");
    goose.addEventListener("click", function(){
        pen.fillStyle = "rgba(255, 255, 0, .5)";
        pen.fillRect(0, 0, 600, 200);
    });

    let falcon = document.getElementById("falcon"); 
}

window.addEventListener("load", slideshow())
function slideshow()
{
    class bird{
        constructor(name, altText){
            this.imageName = imageName;
            this.altText = altText;
            this.description = description;
            this.audio = audio;
        }
    }

    let myBirds = [new bird("peregrinefalcon.jpg", "A picture of a peregrine falcon", "", ""),
                    new bird("grey-headedalbatross.jfif", "A picture of a grey-headed albatross", "", ""),
                    new bird("commonswift.jpg", "A picture of a common swift", "", ""),
                    new bird("canvasback.jfif", "A picture of a canvasback", "", ""),
                    new bird("annashummingbird.jpg", "A picture of an anna's hummingbird")
                    ];

let pre = document.getElementById("pre");
let nex = document.getElementById("forward");

nex.addEventListener("click", function()
{
    currentImage++;
    if(currentImage> myImages.length-1)
    {
        currentImage=0;
    }
    changeSlide(currentImage);
});
pre.addEventListener("click", function()
{
    currentImage--;
    if(currentImage<0)
    {
        currentImage=(myImages.length-1);
    }
    changeSlide(currentImage);
});
function changeSlide(currentImage){
    let slide= document.getElementById("slide");
slide.src=`${myImages[currentImage]}`;
}
}
