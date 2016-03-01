var body= document.getElementsByTagName('body')[0];
var squareArray=[];
body.style.margin="0px";

//Checkerboard
// for(i=0; i<63; i++ ){
//     var square = document.createElement('div');
//     body.appendChild(square);
//     square.style.width="11.1%";
//     square.style.float="left";
//     square.style.display="block";
//     square.style.paddingBottom="11.1%";
//     if (i%2===0){
//         square.style.backgroundColor="black"; 
//     }
//     else{
//         square.style.backgroundColor="red";
//     } 
// }





//Random Colors
// for(i=0; i<63; i++ ){
//     var square = document.createElement('div');
//     body.appendChild(square);
//     square.style.width="11.1%";
//     square.style.float="left";
//     square.style.display="block";
//     square.style.paddingBottom="11.1%";
//     var randomColor1 = Math.floor(Math.random()*255);
//     var randomColor2 = Math.floor(Math.random()*255);
//     var randomColor3 = Math.floor(Math.random()*255);
//     square.style.backgroundColor=`rgb(${randomColor1},${randomColor2},${randomColor3})`; 
// }




// // Gradient
// for(i=0; i<63; i++ ){
//     var square = document.createElement('div');
//     body.appendChild(square);
//     square.style.width="11.1%";
//     square.style.float="left";
//     square.style.display="block";
//     square.style.paddingBottom="11.1%";
//     var opacity = (100-i)/100;
//     if (i%2===0){
//         square.style.backgroundColor=`rgba(0,102,77,${opacity})`; 
//     }
//     else{
//         square.style.backgroundColor=`rgba(179,71,0,${opacity})`;
//     } 
// }


//Timer on Random Colors
for(i=0; i<63; i++ ){
    var square = document.createElement('div');
    body.appendChild(square);
    square.style.width="11.1%";
    square.style.float="left";
    square.style.display="block";
    square.style.paddingBottom="11.1%";
    var randomColor1 = Math.floor(Math.random()*255);
    var randomColor2 = Math.floor(Math.random()*255);
    var randomColor3 = Math.floor(Math.random()*255);
    square.style.backgroundColor=`rgb(${randomColor1},${randomColor2},${randomColor3})`;
    squareArray.push(square);
}

setInterval(function(){
    for(var k=0; k<squareArray.length; k++){
        randomColor1 = Math.floor(Math.random()*255);
        randomColor2 = Math.floor(Math.random()*255);
        randomColor3 = Math.floor(Math.random()*255);
        squareArray[k].style.backgroundColor=`rgb(${randomColor1},${randomColor2},${randomColor3})`;
    }
}, 2000);







