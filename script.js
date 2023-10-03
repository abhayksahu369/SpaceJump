//to be added...
//1)highest score with a name which will be taken from user.
//2)best images ,background from internet related to space.
//3)text to be display on th screen which will show how far is alien or booster.
//4)when a rocket is boosted or attacked, its new place should be highlighted.
//project started on 11 may 2023 an completed on 14 may 2023.

var step=1;
var jump=0;   //jump depends on alien attack or booster,it will be updated to non zero number only when rocked is attacked or boosted.
var count=0;
var fuel=30;
var random=0;



//when R is pressed then the rocket will either jump or will fall back down or will go on moving.

document.addEventListener("keypress",function(event)
{
    
    if(event.key==="j"||event.key==="J")
    {
        
         document.getElementsByClassName("number")[100-(step-random)].innerHTML="<img src=''>"+ (step-random);           //step-random is pevious number in which rocket was before.Therefore previous step will change to its number when rocket is moved .
         document.querySelector(".instruction").innerHTML="press R to roll the dice" ; 
         
        if(jump!=0)   //if rocket is either boosted or attacked ,jump will be a non-zero number from function alienbooster,then when J is pressed then the rocket will either jump or will fall back down .
        {
                document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>"+step;   //previous step will become as it was.
            
                document.getElementsByClassName("number")[100-jump].innerHTML="<img src=''>";
                document.querySelectorAll("img")[100-jump].setAttribute("src","images/space/rocket.jpg");
                document.querySelectorAll("img")[100-jump].setAttribute("width","60px");                 //rocket image is added to new step.
            
                document.querySelector(".message").innerHTML="";
                document.querySelector(".continue").innerHTML="";
            
                step=jump;       //step will be changed to new jump step.
                jump=0;           //jump will become zero
                count=0;         //as jump process is over count will become zero so that dice can be rolled.
        }
        else       //else rocket will move normally based on dice when R is pressed.
        {
               
            
                alienbooster(step);

        } 
     

    }
    if(count===0)  //if count is zero then only dice will be rolled,count act as a lock here to lock the dice when it is rolled and will not be rolled again until jump process is done
    {
            if(event.key==="r"||event.key==="R")  //when r will be pressed dice rolling process will be carried out.
            {
            
                count++; //count is non zero and dice cannot be rolled again until jump process is over
                document.querySelector(".instruction").innerHTML="press J to JUMP" ; 
                jump=0;  //jump will be zero
                                                                            
                fuel=fuel-2;                                                        //it decreases fuel of rocket by 2 times whenever we roll.
                document.querySelector(".message").innerHTML="";
                document.querySelector(".fueltext").innerHTML="FUEL - "+fuel ;      //it changes value of fuel to be displayed on screen.
            
            
                random=Math.floor((Math.random()*6)+1);                         //random value from 1 to 6 is stored in random.
                                    
            
                
                document.querySelector(".diceimg").setAttribute("src","images/dice"+random+".png");   //it changes pic of dice when we roll based on the random number.
            
                step=step+random;                                                                     //step is updated by random number generated by dice . 
                
                if(fuel===0){
                    document.querySelector(".gameover").innerHTML="GAMEOVER";
                    document.querySelector(".continue").innerHTML="Press C to continue...";
                }
                
                if(step===100)    
                {
                    document.querySelector(".gameover").innerHTML="SUCCESS!!";
                    document.querySelector(".continue").innerHTML="Press C to restart...";
                    
                    document.getElementsByClassName("number")[0].innerHTML="<img src=''>";
                    document.querySelectorAll("img")[0].setAttribute("src","images/space/rocket.jpg");
                    document.querySelectorAll("img")[0].setAttribute("width","60px"); 
                
                    document.getElementsByClassName("number")[100-(step-random)].innerHTML="<img src=''>"+ (step-random); 


                }
                    
                
                
                else if(step>100)    //if step is greater than 100 rocket will not move.
                {
                    step=step-random;
                
                }
            }
    }
     //reset button to start a new game from beginning.
    if(event.key==="c"||event.key==="C")
    {

        // document.getElementsByClassName("number")[0].innerHTML="<img src=''>"+ 100;

        document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>"+step;  
        document.getElementsByClassName("number")[100-(step-random)].innerHTML="<img src=''>"+(step-random);  
        /*if the above code is not added and if we reset the game when 
        rocket is any number, then the rocket image will be 
        in that step and a new rocket will be in start position*/
        
        document.getElementsByClassName("number")[99].innerHTML="<img src=''>";
        document.querySelectorAll("img")[99].setAttribute("src","images/space/rocket.jpg");
        document.querySelectorAll("img")[99].setAttribute("width","60px");               //it will put a rocket in starting position
        
       
        
        document.querySelector(".fueltext").innerHTML="FUEL - "+30 ;                       
        document.querySelector(".message").innerHTML="";
        document.querySelector(".continue").innerHTML="";
        document.querySelector(".gameover").innerHTML="";
         
        step=1;
        jump=0;
        count=0;
        fuel=30;
       
        document.querySelector(".diceimg").setAttribute("src","images/dice1.png");
        document.querySelector(".instruction").innerHTML="press R to roll the dice" ;
        

    }
    
})








    function alienbooster(step)
    {
       
        if(step===8){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";            //it inserts img tag inside div number.
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");//it inserts the rocket image .
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 26";
            jump=26;                                                                                 //here jump is 26 which is the new step.
            document.querySelector(".continue").innerHTML="press J to activate...";
    
        }else if(step===19){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 38";
            jump=38;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===21){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 82";
            jump=82;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===28){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 53";
            jump=53;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===36){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 57";
            jump=57;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===43){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 77";
            jump=77;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===50){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 91";
            jump=91;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===54){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 88";
            jump=88;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===61){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 99";
            jump=99;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===62){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 96";
            jump=96;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===66){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");
            document.querySelector(".message").innerHTML="BOOSTER ADDED!! Jump to 87";
            jump=87;
            document.querySelector(".continue").innerHTML="press J to activate...";
        }else if(step===46){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 15";
            jump=15;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===48){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 9";
            jump=9;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===52){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 11";
            jump=11;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===59){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 18";
            jump=18;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===64){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 24";
            jump=24;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===68){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 2";
            jump=2;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===69){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 33";
            jump=33;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===83){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 39";
            jump=39;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===89){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 51";
            jump=51;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===93){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 37";
            jump=37;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }else if(step===98){
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
            document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
            document.querySelectorAll("img")[100-step].setAttribute("width","60px");  
            document.querySelector(".message").innerHTML="ALIEN ATTACK!!! go back to 13";
            jump=13;
            document.querySelector(".continue").innerHTML="press J to continue...";
        }
        else{    //if there is no booster or alien then it will move simply.
            document.getElementsByClassName("number")[100-step].innerHTML="<img src=''>";
        document.querySelectorAll("img")[100-step].setAttribute("src","images/space/rocket.jpg");
        document.querySelectorAll("img")[100-step].setAttribute("width","60px");
        count=0;    //as jump process is over ,count will become zero for roll process to carried out. 
        }
    }

