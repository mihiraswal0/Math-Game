//if we click on strat /reset button
//  document.getElementById("scorevalue").innerHTML=2;
var playing =false;
var score;
var action;
var timeremaining;
    document.getElementById("reset").onclick=function(){
        if(playing==true)
            {
                location.reload=0;
            }
        else
            {
                score=0;
                document.getElementById("scorevalue").innerHTML=score;
                document.getElementById("time").style.display="block";
                document.getElementById("reset").innerHTML="Reset Game";
                playing=true;
                timeremaining=10;
                 document.getElementById("timeremain").innerHTML=timeremaining;
                hide("Gameover");
                startCountdown();
 generateQuestion();
            }
        
    }
   
    //if we are playing thn buttn is reset bttn
//if we are not playing
    //show countown box
    //reduce time by 1sec in loops

            //if time left 
                //yes=continue
                //no gameover
            //chnge button to reset
            //gebrete new question muliple answer

            //if we click on answer box 
                //if we are playinh
                        //coreect
                                    //increse score

                //wrong 
                            //thn show try again box
function startCountdown(){
    action=setInterval(function(){
        timeremaining-=1;
        document.getElementById("timeremain").innerHTML=timeremaining;
        if(timeremaining==0)
        {
//Game over
            stopCountDown();
            document.getElementById("Gameover").style.display="block";
            
             document.getElementById("Gameover").innerHTML="<p> Game Over! <\p><p>Your score is "+score+"<\p>";
//           document.getElementById("timeremain").style.display="none";
            hide("time"); 
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById("reset").innerHTML="Start Game";
//            hide("Gameover");
        }
    },1000);
}
function stopCountDown()
{
    clearInterval(action);
}
function hide(Id)
{
    document.getElementById(Id).style.display="none";
    
}
function show(Id)
{
    document.getElementById(Id).style.display="block";
    
}


function generateQuestion(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
     ans=x*y;
    document.getElementById("question").innerHTML=x+"*"+y;
   var corrctpos=1+Math.round(3*Math.random());
    document.getElementById("box"+corrctpos).innerHTML=ans;
    var answers=[ans];
    for(var i=1;i<=4;i++)
    {
            if(corrctpos!=i)
                {var val;
                 do{
                  val=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                   
                 }while(answers.indexOf(val)>-1)
                     document.getElementById("box"+i).innerHTML=val;    
                 answers.push(val);
                }       }
    
    
}
for(var i=1;i<=4;i++){
document.getElementById("box"+i).onclick=function(){
    //if we are playing
    if(playing==true)
        {
            if(ans==this.innerHTML)
                {
                    score++;
                    document.getElementById("score").innerHTML=score;
                    hide("wrong");
                    show("correct");
                    setTimeout(function(){hide("correct")},1000);
                  //generate new question
                    generateQuestion();
                }
            else
                {
                    hide("correct");
                    show("wrong");
                      setTimeout(function(){hide("wrong")},1000);
                }
        }
}
}