var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var numberRolls = 0;
document.getElementById("diceBtn").onclick = function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //alert(diceNumber);
    clearDice();

    switch (diceNumber) {
        case 1:
           // alert("One");
            document.getElementById("s1").style.display = "block";
            one++;
            numberRolls++;
            break;
        case 2:
           // alert("Two");
            document.getElementById("s2").style.display = "block";
            two++;
            numberRolls++;
            break;
        case 3:
            //alert("Three");
            document.getElementById("s3").style.display = "block";
            three++;
            numberRolls++;
            break;
        case 4:
           // alert("Four");
            document.getElementById("s4").style.display = "block";
            four++;
            numberRolls++;
            break;
        case 5:
            //alert("Five");
            document.getElementById("s5").style.display = "block";
            five++;
            numberRolls++;
            break;
             
        default:
           // alert("six")
            document.getElementById("s6").style.display = "block";
            six++;
            numberRolls++;
    }
    document.getElementById("one").innerHTML = one;
    document.getElementById("two").innerHTML = two;
    document.getElementById("three").innerHTML = three;
    document.getElementById("four").innerHTML = four;
    document.getElementById("five").innerHTML = five;
    document.getElementById("six").innerHTML = six;
    document.getElementById("totalRolls").innerHTML = numberRolls;
}

function clearDice() {

    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "none";
    document.getElementById("s5").style.display = "none";
    document.getElementById("s6").style.display = "none";
}

document.getElementById("resetBtn").onclick = function () {
one = 0;
two = 0;
three = 0;
four = 0;
five = 0;
six = 0;
numberRolls = 0;
    document.getElementById("one").innerHTML = one;
    document.getElementById("two").innerHTML = two;
    document.getElementById("three").innerHTML = three;
    document.getElementById("four").innerHTML = four;
    document.getElementById("five").innerHTML = five;
    document.getElementById("six").innerHTML = six;
    document.getElementById("totalRolls").innerHTML = numberRolls;

}  

