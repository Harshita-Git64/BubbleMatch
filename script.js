

function makebubble(){
    let bbl="";
    for(var i = 1; i <=216;i++)
    {
    var val=Math.floor(Math.random()*10);
    bbl+=`<div id="bubble">${val}</div>`;
    }
    document.querySelector('#bdy').innerHTML=bbl;
}
var counting=60;
function timerinterval()
{
    var storeval=setInterval(function(){
        if(counting>0)
        {
        counting--;
        document.getElementById("timer").innerHTML=counting;
       // or --> document.querySelector("#timer").textContent=counting;
        }
        else{
            clearInterval(storeval);
            document.getElementById("bdy").innerHTML=`
            <h2> Game Over</h2>
            <button id=btn onClick= "document.location.reload()">Play Again !!</button>`;
            
            //document.getElementById("btn").addEventListener("click",document.location.reload())
          //  document.getElementById("btn").onclick=document.location.reload();
           
        }
    },1000);
}

var num=0;
function randomHitvalue(){
    num=Math.floor(Math.random()*10);
    document.getElementById("hitval").innerHTML=num;
}
var scores=0;
function increasescore(){
   
    scores+=10;
    document.getElementById("sccr").innerHTML=scores;;
}



   document.getElementById("bdy").addEventListener("click",function(getnum){
    var clickednum=Number(getnum.target.textContent);
    if(num === clickednum)
    {
     increasescore();
     randomHitvalue();
     makebubble();
    }
   });

  
  


timerinterval();
randomHitvalue();
makebubble();

