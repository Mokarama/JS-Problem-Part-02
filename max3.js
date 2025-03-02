const jim =80;
const kim = 50;
const tim =20;

if(jim>kim && jim>tim){
    console.log('Jim boro')
}
else if(kim>jim && kim>tim){
    console.log(`'kim boro',${kim}`)
}
else{
    console.log("tim boro")
}


let shantaAge = 23;
let maishaAge = 20;
let sabbirAge =17;

if (shantaAge > maishaAge && shantaAge>sabbirAge) {
    console.log(`'Shanta boro' ${shantaAge}`)
}
else if(maishaAge>shantaAge && maishaAge>sabbirAge){
    console.log(`'Maisha boro' ${maishaAge}`)
}
else{
   console.log(`'sabbir boro' ${sabbirAge}`)
}



let baitul ="Farmer";
let sabina = "housewiFekkkkkkkkkkkk";
let taslima ="houseWiFekkkkkkkkkkkkkkkkkkkkkkkk";

if(baitul.length>sabina.length && baitul.length> taslima.length){
        console.log('Baitul boro')
}
else if(sabina.length> baitul.length && sabina.length>taslima.length){
    console.log('sabina boro')
}
else{
    console.log(`'taslima boro' ${taslima.length}`)
}



function maxAge(num1, num2, num3) {
    
    if(num1> num2 && num1> num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
       return num2;
    }
    else{
        return num3
    }

}
console.log(maxAge(67, 90, 20));




function maxNumber1(elder1, elder2, elder3) {
    //console.log(elder1, elder2, elder3)
    let elderNumber = Math.max(elder1, elder2, elder3);
    return elderNumber;
};
console.log(maxNumber1(10, 20, 30));


