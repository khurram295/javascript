// task 1
let zakatper=0.025;
let userinpuut=parseInt(prompt("enter your amount"));
let res = userinpuut*zakatper;
alert("your zakat value is "+ res);

// task2
let fm=parseInt(prompt("enter your total family members "));
let method =parseInt(prompt("choose fitraah amount \n 1.wheat 200RS \n 2.dates400rs \n 3.jouuu 600RS"));
let pricePerPerson;
if (method === 1) {
  pricePerPerson = 200;
} else if (method === 2) {
  pricePerPerson = 400;
} else if (method === 3) {
  pricePerPerson = 600;
} else {
  alert("Invalid ,choose 1, 2 or 3.");
}

let fa=pricePerPerson*fm;
alert("your fitraah  is "+fa);

// task 3 
let secertnumber=Math.round(Math.random()*10);
let userinput=parseInt(prompt("enter a number "));
if(secertnumber===userinput){
    console.log("you win ");
}else {
console.log("try again "+secertnumber);
}

// task 4
   
let n=prompt("enter your name ");
let c_name=n.charAt(0).toUpperCase()+n.slice(1);
console.log ("your name is " +c_name);

// task 05


let contactNumbers = [];
let contactNames = [];
let number = prompt("Enter contact number ");
let f_name = prompt("Enter your name:");
contactNumbers.push(number);
contactNames.push(f_name);
for (let i = 0; i < contactNumbers.length; i++) {
console.log("Name:", contactNames[i], "\tNumber:", contactNumbers[i]);
}

// task no 06
let pro=["cake","pastery","fruit","juice","dates","biryani"]; 
let pos=parseInt(prompt("entrer the pposition you want to remove the product "+pro,length));
let remove=pro.splice(pos-1,1);
console.log("removed items:",remove);
console.log("remaining items ",pro);
console.log("the lenght of your item are "+pro.length);

// task no 07
let n1=prompt("enter your nationality ");
let a =parseInt(prompt("enter your age "));
let s=prompt("enter your gender ");
if (n1==="pakistani"||n1==="indian"){
    if(s==="male" && a>=18){
console.log("you are eligible for vote ");
}} else {
    console.log("not eligible for vote ");
}if ( s==="female"){
    let m = prompt("are you married yes or no ")
    if(m==="yes"){
        console.log("yoy are eligible for vote ");
    }else{
        console.log("not eligiible for vote ");
    }
}
// taxk no 08 


let wcs=["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12","p13","p14","p15"];
console.log(wcs);
let fp=wcs;
wcs.splice(11,4);
console.log(wcs);


