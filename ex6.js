var num1 = 2
var num2 = 4
var num3 = 6
var num4 = 8
var num5 = 10

function numeroMaior () {
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        
        return num1; 
    }
    else if (num2 > num3 && num2 > num4 && num2 > num5){
        return num2;
    }
    else if (num3 > num4 && num3 > num5){
        return num3;
    }
    
    else if (num4 > num5){
        return num4;
    }
    else{

        return num5;
    }

}
console.log (numeroMaior())

