// Start of Leap Year Excercise: a leap year is divisble by 4 and not divisible by 100.

//Divisible by 4 Function
function isDivisibleBy4(num) {
    if (num % 4 == 0) {
        return true;
    } else {
        return false;
    }
};
//Divisible by 100 Function
function isDivisibleBy100(num) {
    if (num % 100 == 0) {
        return true;
    } else {
        return false;
    }
};
//Leap Year Function
function isLeapYear(year) {
    var cond1 = isDivisibleBy4(year);
    var cond2 = isDivisibleBy100(year);
    if (cond1 == true && cond2 == false) {
        return true;
    }
};
// Leap Year Function Testing
test_year = 2740;
if (isLeapYear(test_year)) {
    console.log(`${test_year} is a Leap year`);
} else {
    console.log(`${test_year} is not a Leap year`);
}
//End of Leap Year excercise

//Start of BMI Excercise: BMI is calculated by dividing weight(kg) over height squared (m), given is height in cm.

//Convert height from cm to m Function
function convertCentiToMeter(num) {
    num = num / 100;
    return num;
}
//Square Number Function
function squareNumber(num) {
    num = Math.pow(num, 2);
    return num;
}
//Calculate BMI Function
function calculateBMI(weight, height) {
    height = convertCentiToMeter(height);
    var BMI = weight / squareNumber(height);
    return BMI;
}
//BMI Function Testing
var height = 164;
var weight = 52.1;
var BMI = calculateBMI(weight, height);
if (BMI < 18.5) {
    console.log(`Underweight`);
} else if (BMI < 25) {
    console.log(`Normal`);
} else if (BMI < 30) {
    console.log(`Overweight`);
} else if (BMI < 35) {
    console.log(`Obese`);
} else {
    console.log(`Extremely Obese`);
}
//End of BMI Exercise

//Start of Unique Array Exercise: Get non-repeated element in array, by converting list to object to count occurences of each element, and pushing to new list the unique elements.

//Convert Array to Object Function
function convertArrayToObject(list){
    var obj={}
    for (const num in list){
        //Check whether element is in object
        if(obj[list[num]]){
            //if element in object, add occurence by 1
            obj[list[num]]=obj[list[num]]+1
        }else{
            //if element not in object, initialize occurence by 1
            obj[list[num]]=1
        }
    }
    return obj;
}
//Get Unique Function
function getUnique(list){
    //Get occurences by converting to object
    var obj=convertArrayToObject(list);
    var res=[];
    //if occurence is 1, add to result array
    for(const num in obj){
        if(obj[num]==1){
            res.push(num);
        }
    }
    return res;
}

//Get Unique Function Testing
let array = [1, 8, 2, 5, 7, 6, 8, 3, 4, 9, 7, 1, 2, 3, 9, 10];
console.log(`Unique elements are: ${getUnique(array)}`);
//End of Unique Array Exercise

//Start of 2nd Maximum in Array Exercise

//Get Second Maximum Function
function getSecondMax(list){
    //Get Unique Function: removes duplicates and sorts elements in ascending order using o
    list=getUnique(list);
    //Get before the last element (the 2nd max in a sorted array)
    var res= list[list.length - 2];
    return res;
}
//Get Second Maximum Function Testing
let list = [4,6,5,45,3,6,7,4,33,4,6,7,65,4,45,3,4,3,43,32,2,3,5,25,6,4,4,45,4];
console.log(`Second Maximum Element is: ${getSecondMax(list)}`);
//End of 2nd Maximum in Array Exercise