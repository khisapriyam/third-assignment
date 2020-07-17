//feetToMile
function feetToMile(feet){
    var mile= feet/5280;
    if(mile<0){
        return "value cannot be negative";
    }
    return mile;
}
var result = feetToMile(200000);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCubicFeet = 1*chair;
    var tableCubicFeet = 3*table;
    var bedCubicFeet = 5*bed;
    var total = chairCubicFeet + tableCubicFeet + bedCubicFeet;
    return total;    
}
 
var result = woodCalculator(14,5,12);  //for 14 chairs, 5 tables, 5 beds
console.log(result);

//brickCalculator
function brickCalculator(n){
    if(n>0 && n<=10){
        totalBrick = n*15*1000;
    }
    else if(n>=11 && n<=20){
        totalBrick = 10*15*1000 + (n-10)*12*1000;   
    }
    else if(n>=21){
        totalBrick = 10*15*1000 + 10*12*1000+(n-20)*10*1000;   
    }
    else{
        return "total number of bricks cannot be negative";
    }
    return totalBrick;
}
var total = brickCalculator(22);
console.log(total);


//tinyFriend
function tinyFriend(friendList){

    var min = 0;
    var tinyFriend = friendList[0].length;
    for (var i = 0; i<friendList.length; i++){
        var element = (friendList[i]).length;
        if(element<tinyFriend){
            min = i;
        }
    }
    return friendList[min]; 
}
var result = tinyFriend(["Newton", "Helmholtz","Curie", "Einstein","Max-Planck"]);
console.log(result);