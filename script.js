var userinput;
var computerinput;
var result_='out';
var userscore = 0;
var computerscore = 0;
var target = 0;

function bot_playing(x)
{
    userinput = x;
    var arr=['1','2','3','4','5','6'];
    var b = Math.floor(Math.random()*6);
    computerinput = arr[b];
    document.getElementById("user_status").innerHTML = "Bowling";
    document.getElementById("user_choice").innerHTML = userinput;
    document.getElementById("computer_choice").innerHTML = computerinput;
    document.getElementById("present_score_user_bot_name").innerHTML = "Bot Score";
    if(userinput == computerinput)
    {
        
        //userscore -= parseInt(userinput);
        //target = userscore+1;
       // document.getElementById("target").innerHTML = target;
        document.getElementById("result").innerHTML = "Bot Out";
        return;
    }
    else
    {
        computerscore = computerscore + parseInt(computerinput);
        document.getElementById("present_score").innerHTML = computerscore;
    }


     if(computerscore >= target)
     {
         document.getElementById("result").innerHTML = "Bot win";
         target = 0;
         userscore = 0;
         computerscore = 0;
         document.getElementById("target").innerHTML = "0";
         return;

     }
   

}


function user(x){

    if(target > 0)
    {
        bot_playing(x);
        return;
    }

    userinput = x;
    var arr=['1','2','3','4','5','6'];
    var b = Math.floor(Math.random()*6);
    computerinput = arr[b];
    document.getElementById("user_status").innerHTML = "Batting";
    document.getElementById("user_choice").innerHTML = parseInt(userinput);
    document.getElementById("computer_choice").innerHTML = computerinput;
    document.getElementById("present_score_user_bot_name").innerHTML = "Your Score";
    if(userinput == computerinput)
    {
        //userscore -= parseInt(userinput);
        target = userscore+1;
        document.getElementById("target").innerHTML = target;
        document.getElementById("result").innerHTML = "you are out";
        document.getElementById("present_score").innerHTML = '0';
        return;
    }
    else
    {
        userscore = userscore + parseInt(userinput);
        document.getElementById("present_score").innerHTML = userscore;
    }

}