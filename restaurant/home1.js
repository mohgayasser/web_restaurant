var Imags=document.getElementById("Imag"),
myImg=['hamburger 3.jpg', 'hamburger 4.jpg','hamburger.jpg'];

function changImgs(Imags,myImg){
   
    setInterval(function(){
      var  randomImg = Math.floor(Math.random()*myImg.length);
       Imags.src=myImg[randomImg];
    },5000)
}
changImgs(Imags,myImg);
