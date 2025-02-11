var noseX=0
var noseY=0
var headX = 0
var headY =0 

var noseImg, bbImg, ceImg, dogImg, egImg, sbImg, ncImg, rvImg, pbImg, uglyImg, unicornImg, ttImg
var filter = ""

// to preload images
function preload(){
    noseImg = loadImage("nose.png") //done
    ncImg = loadImage("neoncrownredpink.png") //done
    bbImg = loadImage("bombasticbutterflies.png") //done
    egImg = loadImage("eyeglass.png") //done
    dogImg = loadImage("dog.png") //done
    ceImg = loadImage("catheartsears.png")
    rvImg = loadImage("rainbowvomit.png") //done
    pbImg = loadImage("preppy_bear.png")
    uglyImg = loadImage("uglycopy.png")
    unicornImg = loadImage("unicorncopy.png")
    ttImg = loadImage("tik-tok.png")
}
// setup only runs once
function setup(){
    canvas=createCanvas(300,300)
    resizeCanvas(400, 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}


function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
    
    if(results.length >0){
        console.log(results)
   
            noseX = results[0].pose.nose.x
            noseY = results[0].pose.nose.y
        
        
            headX = results[0].pose.leftEye.x-120
            headY = results[0].pose.leftEye.y-180
       
    }
}


// draw keeps repeating
function draw (){
    image(video, 0, 0, width, width * video.height / video.width);

    if(filter == "clown"){
        image(noseImg,noseX-15,noseY-15,35,35)
    }
    else if(filter == "crown"){
        image(ncImg, headX, headY, 180,180)
    }
    else if(filter == "butterfly"){
        image(bbImg, noseX-80, noseY-120, 155,170 )
    }
    else if(filter == "dog"){
        image(dogImg, noseX-95, noseY-160, 180, 250)
    }
    else if(filter == "rainbowvomit"){
        image(rvImg, noseX-89, noseY-70, 200, 250)
    }
    else if(filter == "catglasses"){
        image(egImg, noseX-105, noseY-190, 200, 220)
    }
        
    else if(filter == "catears"){
        image(ceImg, noseX-105, noseY-150, 200, 190)
    }

    else if(filter == "Preppybear"){
        image(pbImg, noseX-124, noseY-140, 250, 230)
    }

    else if(filter == "ugly"){
        image(uglyImg, noseX-124, noseY-140, 250, 230)
    }

    else if(filter == "unicorn"){
        image(unicornImg, noseX-115, noseY-200, 200, 230)
    }

    else if(filter == "tiktok"){
        image(ttImg, noseX-105, noseY-140, 200, 130)
    }

}


function snapshot(){
    save("sigma_Rizzler.png")

}

function clown(){
    filter = "clown"
}

function crown(){
    filter = "crown"
}

function butterfly(){
    filter = "butterfly"
}

function dog(){
    filter = "dog"
}

function rainbowvomit(){
    filter = "rainbowvomit"
}

function catglasses(){
    filter = "catglasses"
}

function catears(){
    filter = "catears"
}

function Preppybear(){
    filter = "Preppybear"
}

function ugly(){
    filter = "ugly"
}

function unicorn(){
    filter = "unicorn"
}

function Tiktok(){
    filter = "tiktok"
}