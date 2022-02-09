var userinput;
var computerinput;
var result_='out';
var userscore = 0;

function user(x)
{
    userinput = x;
    var arr=['1','2','3','4','5','6'];
    var b = Math.floor(Math.random()*6);
    computerinput = arr[b];
    if(computerinput == userinput){
        document.getElementById("").innerHTML = result_;
        document.getElementById("userscore").innerHTML = 0;
    }
    else{
        userscore = userscore + parseInt(userinput);
        document.getElementById("userscore").innerHTML = userscore;
    }
}
    