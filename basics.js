//variables 
// var ,let ,const  
var name1= 'Manisha'
var age ='21'
//datatype
//string 
// number
//boolean

// function
function displayUser(){
    return 1;
}

//function parameter
function displayUser(userName,userAge){
    return 'UserName is '+userName+'\n'+'UserAge is '+userAge;
}

console.log(displayUser(name1,age));

//scope
//local scope--> inside a function 
//global scope --> declaring the variable outer of the function

//arrow function
const sum =a=>a+1
console.log(sum(10));

//object
//syntax-->{} key-pair value,key has another name property or field
const person ={
    name:'manisha',
    age:'21',
    info:function () {
        console.log('Hello '+ this.name);
    }
}
person.info()
const person1 ={
    name:'manisha',
    age:'21',
    info:function () {
        console.log('Hello '+ this.name);
    }
}
person.info()

//arrays

const arrays =['array1','array2']
for (const arr of arrays) {
    console.log(arr);
}//to show list the arrays
// console.log(arrays);

// array and object referred type change the value of arrays,objects

//spread & rest operators
//... ->spread which returns values without array or object brackets  
//... ->in rest operator pass as parameter
const toArray =(...args)=>{
    return args
}
console.log(toArray(1,2,3,4));

//Asynchronous
setTimeout(()=>{
    console.log('Timer is Done');
},2000)

//while running this in terminal after this returns the setTimeOut function 
//because according to this time interval , so called non blocking
console.log('Hi');
console.log('Hello');
