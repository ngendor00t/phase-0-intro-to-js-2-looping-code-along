// Code your solutions in this file
let mySpy = [];
let Spy = ["Harry", "James", "Potter"];
function writeCards(spyname, eventname){
    for(let count = 0; count < spyname.length; count++){
        mySpy.push(`Thank you, ${spyname[count]}, for the wonderful ${eventname} gift!`);
    }
    return mySpy;

}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}
countDown(10);
writeCards(spy, "surprise");