var food, dinner;
var photo, ak;
var f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21;
var breakfast, b1, b2 , b3, b4,b5,b6;
var IndiaImage,fState=0,bState=0,dState=0, ic;

function preload() {
    photo = loadImage("bck.jpg");
    //Bimage = loadImage("download.jpeg");
    ic=loadImage("India.png");
}

function setup() {
    createCanvas(1366, 625);
    console.log("width" + windowWidth);
    console.log("height" + windowHeight);
    food = Math.round(random(1, 21));
    breakfast=Math.round(random(1,6));
    dinner = Math.round(random(1, 4));
   // ak = createSprite(250, 250, 800, 800);
    //console.log(ingredients);
    f1 = createSprite(250, 250, 380, 50);
    f2 = createSprite(250, 250, 380, 50);
    f3 = createSprite(250, 250, 380, 50);
    f4 = createSprite(250, 250, 380, 50);
    f5 = createSprite(250, 250, 380, 50);
    f6 = createSprite(250, 250, 380, 50);
    f7 = createSprite(250, 250, 380, 50);
    f8 = createSprite(250, 250, 380, 50);
    f9 = createSprite(250, 250, 380, 50);
    f10 = createSprite(250, 250, 380, 50);
    f11 = createSprite(250, 250, 380, 50);
    f12 = createSprite(250, 250, 380, 50);
    f13 = createSprite(250, 250, 380, 50);
    f14 = createSprite(250, 250, 380, 50);
    f15 = createSprite(250, 250, 380, 50);
    f16 = createSprite(250, 250, 380, 50);
    f17 = createSprite(250, 250, 380, 50);
    f18 = createSprite(250, 250, 380, 50);
    f19 = createSprite(250, 250, 380, 50);
    f20 = createSprite(250, 250, 380, 50);
    f21 = createSprite(250, 250, 380, 50);

    b1=createSprite(280, 380,430,50);
    b2=createSprite(280, 380,430,50);
    b3=createSprite(280, 380,430,50);
    b4=createSprite(280, 380,430,50);
    b5=createSprite(280, 380,430,50);
    b6=createSprite(280, 380,430,50);
}

function draw() {
    background(photo);
    
    if (food === 1) {
        food = "Chicken Curry";
fState=1;
      
    }

    if (food === 2) {
        food = "Dal";
fState=2;
       // window.open('https://youtu.be/X8KQoeANnP4', '_system');
    }

    if (food === 3) {
        food = "Fish Curry";
fState=3;
        //window.open('https://youtu.be/vzbjv0JGNzg', '_system');
    }

    if (food === 4) {
        food = "Gobi Manchuri";
fState=4;
     //   window.open('https://youtu.be/NZVRmWXy2Qg', '_system');
    }

    if (food === 5) {
        food = "Noodles";
fState=5
    //    window.open('https://youtu.be/kUPmHZFjkcc', '_system');
    }

    if (food === 6) {
        food = "Macoroni";
fState=6
    //    window.open('https://youtu.be/vhrKsPOFHFY', '_system');
    }

    if (food === 7) {
        food = "Rasam";
        //    f7 = createSprite(250, 250, 50, 50);
fState=7
    //    window.open('https://youtu.be/IEcLLq6I90o', '_system');
    }

    if (food === 8) {
        food = "Buttermilk Curry";
        //  f8 = createSprite(250, 250, 50, 50);
fState=8
    //    window.open('https://youtu.be/4pYqdWeWbss', '_system');
    }

    if (food === 9) {
        food = "Paneer Curry";
        //f9 = createSprite(250, 250, 50, 50);
fState=9
   //     window.open('https://youtu.be/1jFhs-PX8qs', '_system');
    }

    if (food === 10) {
        food = "Mutton Curry";
        //f10 = createSprite(250, 250, 50, 50);
fState=10
   //     window.open('https://youtu.be/Mph2v1GMNA4', '_system');
    }

    if (food === 11) {
        food = "Curd Rice";
        // f11 = createSprite(250, 250, 50, 50);
fState=11
   //     window.open('https://youtu.be/E8XH1lM9p-U', '_system');
    }

    if (food === 12) {
        food = "Chicken Stew";
        // f12 = createSprite(250, 250, 50, 50);
fState=12
     //   window.open('https://youtu.be/_P1n4KaU_rQ', '_system');
    }

    if (food === 13) {
        food = " Spicy Chicken Curry";
        // f13 = createSprite(250, 250, 50, 50);
fState=13
     //   window.open('https://youtu.be/M6WnWKOJX8g', '_system');
    }

    if (food === 14) {
        food = "Banana Stem";
        // f14 = createSprite(250, 250, 50, 50);
fState=14
     //   window.open('https://youtu.be/me3zVs22ph0', '_system');
    }

    if (food === 15) {
        food = "Sambar";
        //  f15 = createSprite(250, 250, 50, 50);
fState=15
     //   window.open('https://youtu.be/8gT0bV-c3eE', '_system');
    }

    if (food === 16) {
        food = "Chicken Lollypop";
        // f16 = createSprite(250, 250, 50, 50);
        fState=16
    }

     //   window.open('https://youtu.be/lXbLQ1CQlxQ', '_system');
    

    if (food === 17) {
        food = "Fish Fry";
        //  f17 = createSprite(250, 250, 50, 50);
fState=17
      //  window.open('https://youtu.be/XaPIumr1_mQ', '_system');
    }

    if (food === 18) {
        food = "Egg Roast";
        //  f18 = createSprite(250, 250, 50, 50);
fState=18
      //  window.open('https://youtu.be/BO1933RSVlw', '_system');
    }

    if (food === 19) {
        food = "Chicken Ghee Roast";
        //  f19=createSprite(250,250,50,50);
fState=19
      //  window.open('https://youtu.be/IkNAzzG7CVA', '_system');
    }

    if (food === 20) {
        food = "Pepper Chicken";
        //  f50=createSprite(250,250,50,50);
fState=20
     //   window.open('https://youtu.be/rGhWVu7bCZE', '_system');
    }

    if (food === 21) {
        food = "Mutton Stew";
        //   f21=createSprite(60,250,50,50);
fState=21
      //  window.open('https://youtu.be/AeXluPUstVA', '_system');
    }

    if (dinner === 1) {
        dinner = food; 
        dState=1;
    }

    if (dinner === 2) {
        dinner = "Maggi";
        dState=2;
    }

    if (dinner === 3) {
        dinner = food;
        dState=3;
    }

    if (dinner === 4) {
        dinner = "Parotta and Beef";
        dState=4;
    }

    if(breakfast===1){
        breakfast="Upma";
       // window.open('https://youtu.be/8FlK8effzIY?t=55','_system');
       bState=1;
    }

    if(breakfast===2){
        breakfast="Puttu";
        //https://youtu.be/vV2txk2Py3c
        bState=2;
    }

    if(breakfast===3){
        breakfast="Dosa & Sambar";
        //https://youtu.be/CGjOJ2VZmb8
        bState=3;
    }

    if(breakfast===4){
        breakfast="Idly & Vada & Sambar & Chutney";
        //https://youtu.be/sG7JS6FfgUE
        bState=4;
    }

    if(breakfast===5){
        breakfast="Hoppers (Appam in malayalam)";
        //https://youtu.be/rWa4-Us-SsA
        bState=5;
    }

    if(breakfast===6){
        breakfast="String Hoppers(Valeyappam in malayalam)"
        //https://youtu.be/E_Qr-J2hJ6w
        bState=6;
    }

    f1.visible = false;
    f2.visible = false;
    f3.visible = false;
    f4.visible = false;
    f5.visible = false;
    f6.visible = false;
    f7.visible = false;
    f8.visible = false;
    f9.visible = false;
    f10.visible = false;
    f11.visible = false;
    f12.visible = false;
    f13.visible = false;
    f14.visible = false;
    f15.visible = false;
    f16.visible = false;
    f17.visible = false;
    f18.visible = false;
    f19.visible = false;
    f20.visible = false;
    f21.visible = false;

    b1.visible=false;
    b2.visible=false;
    b3.visible=false;
    b4.visible=false;
    b5.visible=false;
    b6.visible=false;


    strokeWeight(5);

    textSize(40);
    //text("Primary Food : Rice",600,height-160);
    fill("green");
    stroke("white");
    text("Lunch : " + food, 60, 560);
    fill("green");
    stroke("white");
    text("Dinner : " + food, 60, 610);
    fill("green");
    stroke("white");
    text("Breakfast : "+breakfast, 60,510);
    text("Creator : Aadarsh A.K", 800, 100);
    fill("yellow");
    stroke("green");
    text("Recipe Video(Lunch)", 60, 250);
    text("Recipe Video(Breakfast)",60, 380);
    text("#Proudly_Made_In_India",800,50);
    image(ic,1100,350,200,200);
    //ak.addImage(photo);
    // ak.scale = 0.2;


    if (mousePressedOver(f16) && fState===16) {
        window.open('https://youtu.be/fOpJgan199Q','_system');
    }

    if (mousePressedOver(f1)&&fState===1) {
        window.open('https://youtu.be/fOpJgan199Q','_system');
    }

    if (mousePressedOver(f2)&&fState===2) {
        window.open('https://youtu.be/X8KQoeANnP4','_system');
    }

    if (mousePressedOver(f3)&&fState===3) {
        window.open('https://youtu.be/vzbjv0JGNzg','_system');
    }

    if (mousePressedOver(f4)&&fState===3) {
        window.open('https://youtu.be/NZVRmWXy2Qg','_system');
    }

    if (mousePressedOver(f5)&&fState===5) {
        window.open('https://youtu.be/kUPmHZFjkcc','_system');
    }

    if (mousePressedOver(f6)&&fState===6) {
        window.open('https://youtu.be/vhrKsPOFHFY','_system');
    }


    if (mousePressedOver(f7)&&fState===7) {
        window.open('https://youtu.be/IEcLLq6I90o','_system');
    }

    if (mousePressedOver(f8)&&fState===8) {
        window.open('https://youtu.be/4pYqdWeWbss','_system');
    }

    if (mousePressedOver(f9)&&fState===9) {
        window.open('https://youtu.be/1jFhs-PX8qs','_system');
    }

    if (mousePressedOver(f10)&&fState===10) {
        window.open('https://youtu.be/Mph2v1GMNA4','_system');
    }

    if (mousePressedOver(f11)&&fState===11) {
        window.open('https://youtu.be/E8XH1lM9p-U','_system');
    }

    if (mousePressedOver(f12)&&fState===12) {
        window.open('https://youtu.be/_P1n4KaU_rQ','_system');
    }

    if (mousePressedOver(f13)&&fState===13) {
        window.open('https://youtu.be/M6WnWKOJX8g','_system');
    }

    if (mousePressedOver(f14)&&fState===14) {
        window.open('https://youtu.be/me3zVs22ph0','_system');
    }

    if (mousePressedOver(f15)&&fState===15) {
        window.open('https://youtu.be/8gT0bV-c3eE','_system');
    }
           if (mousePressedOver(f16)&&fState===16) {
        window.open('https://youtu.be/lXbLQ1CQlxQ','_system');
    }   
         if (mousePressedOver(f17)&&fState===17) {
        window.open('https://youtu.be/XaPIumr1_mQ','_system');
    }   

    if (mousePressedOver(f18)&&fState===18) {
        window.open('https://youtu.be/BO1933RSVlw','_system');
    }        if (mousePressedOver(f19)&&fState===19) {
        window.open('https://youtu.be/IkNAzzG7CVA','_system');
    }        if (mousePressedOver(f20)&&fState===20) {
        window.open('https://youtu.be/rGhWVu7bCZE','_system');
    }

    if (mousePressedOver(f21)&&fState===21) {
        window.open('https://youtu.be/AeXluPUstVA','_system');
    }

    if(mousePressedOver(b1)&&bState===1){
        window.open('https://youtu.be/8FlK8effzIY?t=55','_system');
    }

    if(mousePressedOver(b2)&&bState===2){
        window.open('https://youtu.be/vV2txk2Py3c','_system'); 
    }

    if(mousePressedOver(b3)&&bState===3){
        window.open('https://youtu.be/CGjOJ2VZmb8','_system');
    }

    if(mousePressedOver(b4)&&bState===4){
        window.open('https://youtu.be/sG7JS6FfgUE','_system');
    }

    if(mousePressedOver(b5)&&bState===5){
        window.open('https://youtu.be/rWa4-Us-SsA','_system');
    }

    if(mousePressedOver(b6)&&bState===6){
       window.open('https://youtu.be/E_Qr-J2hJ6w','_system');
    }

    drawSprites();
}